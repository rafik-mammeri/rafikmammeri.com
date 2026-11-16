// Experience page: an overview first, the detail on demand.
// The page is written as plain Markdown (docs/experience.md): one "## " heading per position,
// one "### " heading per project. Here each position becomes a line that opens (dates in the
// left margin, logo, name, role, key result). Opening a position shows all its projects in full
// (title and key number, then the story); projects do not fold on their own. The overview text
// comes from the headings' data- attributes. Without JavaScript the page stays the full, readable document. A link to a
// project or a position (#voice-bot) opens it; printing opens everything.
(function () {

  // how long a position lasted, in years, from its line "Role · April 2025 – present · Place"
  var MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december",
                "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  function when(s) {
    var m = s.trim().toLowerCase().match(/^(\S+)\s+(\d{4})$/);
    if (!m) { var now = new Date(); return now.getFullYear() + now.getMonth() / 12; }
    return +m[2] + (MONTHS.indexOf(m[1]) % 12) / 12;
  }
  function tenure(line) {
    var parts = line.split("·");
    if (parts.length < 2) return 0;
    var span = parts[1].split("–");
    return span.length === 2 ? Math.max(0.2, when(span[1]) - when(span[0])) : 0;
  }

  var CHEVRON = '<svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }
  function text(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function build() {
    // a new page always starts with the header in place
    var hd = document.querySelector(".md-header");
    if (hd && hd.style.transform) { hd.style.transform = ""; hd.style.transition = ""; }
    var root = document.querySelector(".md-content__inner");
    if (!root || root.dataset.xp) return;
    var heads = root.querySelectorAll("h2[data-years]");
    if (!heads.length) return;
    root.dataset.xp = "1";

    heads.forEach(function (h2, i) {
      var nodes = [], n = h2.nextElementSibling;
      while (n && n.tagName !== "H2") { nodes.push(n); n = n.nextElementSibling; }
      var meta = nodes.filter(function (x) { return x.classList.contains("rm-meta"); })[0];
      var role = meta ? meta.textContent.split("·")[0].trim() : "";

      // everything starts closed: the overview first
      var pos = el("details", "xp-pos");
      var sum = el("summary");
      var years = el("time", "xp-years", text(h2.dataset.years) + '<i aria-hidden="true"></i>');
      var len = tenure(meta ? meta.textContent : "");
      // the tenure to scale, never shorter than a readable stub
      if (len) years.style.setProperty("--xp-len", Math.max(0.9, len * 1.55).toFixed(2) + "rem");
      sum.appendChild(years);
      sum.appendChild(el("span", "xp-chev", CHEVRON));
      var head = el("span", "xp-head");
      // inside the toggle, the heading's own link and the logo stay out of keyboard and speech
      h2.querySelectorAll(".headerlink").forEach(function (a) { a.tabIndex = -1; a.setAttribute("aria-hidden", "true"); });
      h2.querySelectorAll(".twemoji").forEach(function (s) { s.setAttribute("aria-hidden", "true"); });
      head.appendChild(h2);
      head.appendChild(el("span", "xp-role", text(role)));
      if (h2.dataset.lead) head.appendChild(el("span", "xp-lead", text(h2.dataset.lead)));
      head.appendChild(el("span", "xp-key", text(h2.dataset.key || "")));
      sum.appendChild(head);
      pos.appendChild(sum);
      var body = el("div", "xp-in");
      pos.appendChild(body);
      // the position's own lines (dates and place, introduction), then its projects, all shown:
      // only positions open and close, so one click gives the whole story of a position
      var cur = null;
      nodes.forEach(function (x) {
        if (x.tagName === "H3") {
          cur = el("div", "xp-pj");
          var h = el("div", "xp-pjh");
          h.appendChild(x);
          h.appendChild(el("span", "xp-num", text(x.dataset.head || "")));
          cur.appendChild(h);
          cur.appendChild(el("div", "xp-story"));
          body.appendChild(cur);
        } else if (cur) {
          cur.querySelector(".xp-story").appendChild(x);
        } else {
          body.appendChild(x);
        }
      });
      // closing a position whose line is pinned at the top brings its start back into view
      pos.addEventListener("toggle", function () {
        if (!pos.open && pos.getBoundingClientRect().top < 0) pos.scrollIntoView({ block: "start" });
      });
      // the position takes the place of its heading, before the next one
      root.insertBefore(pos, n || null);
    });

    // the last position has little page below it: while it is open, add just the room needed for
    // its line to reach the top of the screen and pin there like the others
    var positions = root.querySelectorAll(".xp-pos"), last = positions[positions.length - 1];
    var room = el("div", "xp-room");
    room.setAttribute("aria-hidden", "true");
    last.after(room);
    function fit() {
      room.style.height = "0px";
      if (!last.open) return;
      var top = last.getBoundingClientRect().top + window.scrollY;
      var need = top + window.innerHeight - document.documentElement.scrollHeight;
      room.style.height = Math.max(0, Math.ceil(need)) + "px";
    }
    last.addEventListener("toggle", fit);
    window.addEventListener("resize", fit);

    pin();
    reveal();
  }

  // an open position keeps its line pinned under the header (which hides on scroll down), so
  // the reader always sees where they are and can close it
  var pinning = false;
  function pin() {
    if (pinning) return;
    pinning = true;
    // the pinned line follows the header's lower edge frame by frame, also while the header slides
    // away or back, so the two move as one instead of the line waiting and then jumping
    // When an open position's line reaches the header, it pushes the header up, pixel for pixel
    // with the scroll, until the line sits at the very top; at the end of the position the header
    // comes back down the same way. The scroll drives both, so they move as one.
    var header = document.querySelector(".md-header"), until = 0, running = false;
    function set() {
      if (!header) return;
      var hh = header.offsetHeight, push = 0;
      document.querySelectorAll(".xp-pos[open]").forEach(function (d) {
        var r = d.getBoundingClientRect(), sh = d.querySelector("summary").offsetHeight;
        var p = Math.min(Math.max(hh - r.top, 0), Math.max(r.bottom - sh, 0), hh);
        if (p > push) push = p;
      });
      // at the very end of the page the scroll cannot push any further: rather than leave a
      // strip of header showing, the header finishes leaving on its own, quickly
      var atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (push > 0 && push < hh && atEnd) {
        header.style.transition = "transform 0.2s ease-out";
        header.style.transform = "translateY(" + (-hh) + "px)";
      } else if (push > 0) {
        header.style.transition = "none";
        header.style.transform = "translateY(" + (-push).toFixed(1) + "px)";
      } else if (header.style.transform) {
        header.style.transform = "";
        header.style.transition = "";
      }
      var b = Math.max(0, header.getBoundingClientRect().bottom);
      document.documentElement.style.setProperty("--xp-top", b.toFixed(1) + "px");
    }
    function follow() {
      set();
      if (performance.now() < until) requestAnimationFrame(follow); else running = false;
    }
    function wake() {
      until = performance.now() + 700;
      if (!running) { running = true; requestAnimationFrame(follow); }
    }
    // on every scroll, at once (no frame of delay), then for a short while after
    window.addEventListener("scroll", function () { set(); wake(); }, { passive: true });
    window.addEventListener("resize", wake);
    set();
  }

  // a link to a project or a position opens it, and the positions around it stay as they are
  function reveal() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var t = document.getElementById(id);
    if (!t) return;
    for (var d = t.closest("details"); d; d = d.parentElement && d.parentElement.closest("details")) d.open = true;
    var box = t.closest(".xp-pj, details") || t;
    setTimeout(function () { box.scrollIntoView({ block: "start" }); }, 0);
  }

  var printed = [];
  window.addEventListener("beforeprint", function () {
    printed = [];
    document.querySelectorAll(".xp-pos").forEach(function (d) { if (!d.open) { printed.push(d); d.open = true; } });
  });
  window.addEventListener("afterprint", function () { printed.forEach(function (d) { d.open = false; }); });
  window.addEventListener("hashchange", reveal);

  if (window.document$ && window.document$.subscribe) window.document$.subscribe(build);
  else if (document.readyState !== "loading") build();
  else document.addEventListener("DOMContentLoaded", build);
})();
