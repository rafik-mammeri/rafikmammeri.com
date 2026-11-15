// Lamp light between light and dark mode.
// The theme switch is a small tube lamp hanging right of the search. Pressed, its cord is
// tugged; switching on, its ring warms up, then a beam of light falls from it and opens
// until the light page fills the screen. Switching off, the light goes back up into the
// lamp, then the ring cools with an orange afterglow.
// The lamp's own movement plays on the live page, before and after the change, never during
// it: browsers show a still image of the page while it changes. The header is part of the
// page during the change, so the beam lights it too. Uses the View Transitions API on the
// whole document, so it works on every page; browsers without it, and visitors who ask for
// reduced motion, get an instant switch. The header survives instant navigation, so one
// delegated listener is enough.
(function () {
  if (window.__rmLamp) return;
  window.__rmLamp = true;

  var busy = false, timer = null;
  var FX = ["rm-fx-tug", "rm-fx-warm", "rm-fx-hold", "rm-fx-cool"];

  // both lamps (one per theme) take the same classes, so the effect shows on whichever is visible
  function fx(add) {
    clearTimeout(timer);
    document.querySelectorAll('[data-md-component="palette"] .rm-lamp svg').forEach(function (s) {
      FX.forEach(function (c) { s.classList.remove(c); });
      if (!add) return;
      void s.getBoundingClientRect();
      add.forEach(function (c) { s.classList.add(c); });
    });
  }

  // The browser's own bar (Safari's tab bar) takes the colour of the page. It follows a
  // theme-color set here, changed only once the light has settled, so it never jumps to the
  // new colour while the page is still changing
  // (the theme rewrites it as soon as the scheme changes: during the change it is put back)
  var frozen = null;
  function bar() {
    var m = document.querySelector('meta[name="theme-color"]');
    if (!m) { m = document.createElement("meta"); m.name = "theme-color"; document.head.appendChild(m); }
    return m;
  }
  function tint() { frozen = null; bar().content = getComputedStyle(document.body).backgroundColor; }
  tint();
  new MutationObserver(function () { if (!busy) tint(); })
    .observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
  new MutationObserver(function () {
    if (frozen === null) return;
    var m = bar();
    if (m.content !== frozen) m.content = frozen;
  }).observe(document.head, { subtree: true, childList: true, attributes: true, attributeFilter: ["content"] });

  document.addEventListener("click", function (e) {
    var label = e.target.closest && e.target.closest('[data-md-component="palette"] label');
    if (!label) return;
    if (busy) { e.preventDefault(); return; }
    var input = document.getElementById(label.htmlFor);
    if (!input) return;
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    busy = true;

    var on = input.getAttribute("data-md-color-scheme") !== "slate";
    frozen = bar().content;
    // the cord is tugged; switching on, the ring warms up before the light leaves
    fx(on ? ["rm-fx-tug", "rm-fx-warm"] : ["rm-fx-tug"]);
    setTimeout(function () { light(label, input, on); }, on ? 600 : 340);
  }, true);

  function light(label, input, on) {
    var html = document.documentElement;
    // the light leaves from the bulb: an element marked data-origin in the lamp, or else a
    // point a little below the middle of the button
    var o = label.querySelector("[data-origin]");
    var r = (o || label).getBoundingClientRect();
    var x = r.left + r.width / 2, y = o ? r.top + r.height / 2 : r.top + r.height * 0.62;
    var far = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 160;
    html.style.setProperty("--rm-lx", Math.round(x) + "px");
    html.style.setProperty("--rm-ly", Math.round(y) + "px");
    html.style.setProperty("--rm-far", Math.round(far) + "px");
    // the direction the lamp points to (180deg: straight down)
    html.style.setProperty("--rm-dir", (label.dataset.dir || 180) + "deg");

    var cls = on ? "rm-lamp-on" : "rm-lamp-off";
    // rm-theme-swap turns off colour transitions, so the page is captured in its final colours
    html.classList.add(cls, "rm-theme-swap");

    var t = document.startViewTransition(function () {
      input.click();
      // switching off, the lamp stays lit while the light goes back into it
      if (!on) fx(["rm-fx-hold"]);
    });
    t.finished.finally(function () {
      html.classList.remove(cls);
      requestAnimationFrame(function () {
        html.classList.remove("rm-theme-swap");
        busy = false;
        tint();
        // then, switching off, the ring cools down
        if (on) fx(null);
        else { fx(["rm-fx-cool"]); timer = setTimeout(function () { fx(null); }, 1700); }
      });
    });
  }
})();
