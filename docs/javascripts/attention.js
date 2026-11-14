// Homepage "attention" paragraph (overrides/home.html).
// Selecting a phrase draws weighted lines to the experiences it rests on, lights up the
// strongest ones, and draws dotted arcs to the phrases it reads with. Weights come from
// each experience's data-w (one value per phrase, in order).
// document$ (provided by the theme) fires on every page change, including instant navigation.
document$.subscribe(function () {
  var root = document.querySelector(".rm-attn");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "1";

  var toks = Array.prototype.slice.call(root.querySelectorAll(".rm-tok"));
  var cards = Array.prototype.slice.call(root.querySelectorAll(".rm-tg"));
  var svg = root.querySelector(".rm-attn__lines");
  var cur = -1;  // -1 = at rest: nothing selected, no lines, nothing lit

  function weight(card, i) {
    return parseFloat((card.dataset.w || "").split(",")[i]) || 0;
  }

  // The words change first; the experiences and the lines to them follow a beat later.
  var FOLLOW = 170, follow = null;
  function draw(now) {
    if (cur < 0) {  // at rest
      root.classList.add("is-idle");
      if (follow) { clearTimeout(follow); follow = null; }
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      toks.forEach(function (b) { b.classList.remove("is-on", "is-rel", "is-dim"); });
      cards.forEach(function (c) { c.classList.remove("is-hot"); c.querySelector(".rm-tg__w").textContent = ""; });
      svg.innerHTML = "";
      state = null;
      return;
    }
    root.classList.remove("is-idle");
    var self = (toks[cur].dataset.self || "").split(",").filter(Boolean).map(Number);
    toks.forEach(function (b, i) {
      b.classList.toggle("is-on", i === cur);
      b.classList.toggle("is-rel", self.indexOf(i) !== -1);
      b.classList.toggle("is-dim", i !== cur && self.indexOf(i) === -1);
    });

    if (follow) clearTimeout(follow);
    if (now === true || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { follow = null; settle(self); }
    else follow = setTimeout(function () { follow = null; settle(self); }, FOLLOW);
  }

  function settle(self) {
    if (cur < 0) return;
    // A phrase can wrap over two lines: lines leave from its last line, arcs from its first
    var R = root.getBoundingClientRect();
    var rects = toks[cur].getClientRects();
    var a = rects[0], last = rects[rects.length - 1];
    var wide = window.getComputedStyle(svg).display !== "none";  // the stylesheet decides when lines fit
    var target = { x: last.left + last.width / 2 - R.left, y: last.bottom - R.top, w: [], ends: [], arcs: [] };

    cards.forEach(function (card) {
      var w = weight(card, cur);
      card.classList.toggle("is-hot", w >= 0.6);
      card.style.setProperty("--w", w.toFixed(2));  // low weight fades, it never empties
      card.querySelector(".rm-tg__w").textContent = w.toFixed(2);
      var r = card.querySelector(".rm-tg__node").getBoundingClientRect();
      target.w.push(w);
      target.ends.push([r.left + r.width / 2 - R.left, r.top - R.top]);
    });
    var xa = a.left + a.width / 2 - R.left, ya = a.top - R.top;
    self.forEach(function (k) {
      var o = toks[k].getClientRects()[0];
      target.arcs.push([xa, ya, o.left + o.width / 2 - R.left, o.top - R.top]);
    });

    if (!wide) { svg.innerHTML = ""; state = null; return; }
    glide(target);
  }

  // The lines glide from the previous phrase to the new one instead of jumping.
  var state = null, raf = null, GLIDE = 260;
  function paint(x, y, ws, t, fade) {
    var paths = "";
    t.ends.forEach(function (e, n) {
      var w = ws[n], my = (y + e[1]) / 2;
      paths += '<path d="M' + x + "," + y + " C" + x + "," + my + " " + e[0] + "," + my + " " + e[0] + "," + e[1] +
        '" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="' + (0.8 + w * 2.2).toFixed(2) + '" opacity="' + w.toFixed(3) + '"/>';
    });
    t.arcs.forEach(function (c) {
      var top = Math.min(c[1], c[3]) - 26;
      paths += '<path class="rm-attn__arc" d="M' + c[0] + "," + c[1] + " C" + c[0] + "," + top + " " + c[2] + "," + top + " " + c[2] + "," + c[3] +
        '" fill="none" stroke-width="1.4" stroke-dasharray="3 5" stroke-linecap="round" style="opacity:' + (0.5 * fade).toFixed(2) + '"/>';
    });
    svg.innerHTML = paths;
  }
  function glide(t) {
    if (raf) cancelAnimationFrame(raf);
    var from = state, start = null;
    if (!from || from.w.length !== t.w.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      state = { x: t.x, y: t.y, w: t.w.slice() }; paint(t.x, t.y, t.w, t, 1); return;
    }
    from = { x: from.x, y: from.y, w: from.w.slice() };
    function frame(now) {
      if (start === null) start = now;
      var p = Math.min(1, (now - start) / GLIDE), e = 1 - Math.pow(1 - p, 3);  // ease-out
      var x = from.x + (t.x - from.x) * e, y = from.y + (t.y - from.y) * e;
      var ws = t.w.map(function (w, n) { return from.w[n] + (w - from.w[n]) * e; });
      state = { x: x, y: y, w: ws };
      paint(x, y, ws, t, e);
      raf = p < 1 ? requestAnimationFrame(frame) : null;
    }
    raf = requestAnimationFrame(frame);
  }

  toks.forEach(function (b, i) {
    var pick = function () { if (streaming) endIntro(); cur = i; draw(); };
    b.addEventListener("click", pick);
    b.addEventListener("mouseenter", pick);
    b.addEventListener("focus", pick);
    var rest = function () { if (cur === i) { cur = -1; draw(); } };
    b.addEventListener("mouseleave", rest);
    b.addEventListener("blur", rest);
    b.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); }
    });
  });

  window.addEventListener("resize", function () { if (document.body.contains(root)) { state = null; draw(true); } });

  // Opening: the paragraph streams in token by token, like a model writing it, and each new
  // token draws its attention lines to the experiences and lights the ones it rests on.
  // After the last token the page settles at rest. Any interaction with the paragraph
  // ends the opening at once.
  // Each token stays on screen long enough to be read: a short base plus a time per
  // character ("I" about 0.38 s, the closing phrase about 2.2 s).
  var BASE = 340, PER_CHAR = 40, HOLD = 900, timer = null, streaming = false;
  function dwell(tok) { return BASE + PER_CHAR * tok.textContent.trim().length; }
  function endIntro() {
    if (!streaming) return;
    streaming = false;
    if (timer) { clearTimeout(timer); timer = null; }
    root.classList.remove("is-streaming");
    toks.forEach(function (b) { b.classList.add("is-in"); });
  }
  function intro() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { draw(true); return; }
    streaming = true;
    root.classList.add("is-streaming");
    var i = 0;
    (function next() {
      if (!streaming) return;
      if (i < toks.length) {
        toks[i].classList.add("is-in");
        cur = i; draw(true);
        i++;
        timer = setTimeout(next, dwell(toks[i - 1]));
      } else {
        timer = setTimeout(function () { cur = -1; draw(); endIntro(); }, HOLD);
      }
    })();
  }
  ["pointerdown", "keydown", "wheel", "touchstart"].forEach(function (ev) {
    root.addEventListener(ev, function () { if (streaming) { endIntro(); } }, { passive: true });
  });
  toks.forEach(function (b) {
    b.addEventListener("mouseenter", endIntro);
    b.addEventListener("focus", endIntro);
  });

  root.classList.add("is-streaming");  // hide the tokens until the opening starts
  draw(true);
  var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  ready.then(function () { state = null; setTimeout(intro, 250); });
});
