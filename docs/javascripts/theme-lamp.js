// Lamp light between light and dark mode.
// The theme switch is a pendant lamp in the header. Switching it on, the bulb blooms and a
// cone of light falls from the lamp and widens until the light page fills the screen.
// Switching it off, the light draws back into the lamp and the dark page is left.
// The header stays in place as its own layer. Uses the View Transitions API on the whole
// document, so it works on every page; browsers without it, and visitors who ask for
// reduced motion, get an instant switch. The header survives instant navigation, so one
// delegated listener is enough.
(function () {
  if (window.__rmLamp) return;
  window.__rmLamp = true;

  var busy = false;

  document.addEventListener("click", function (e) {
    var label = e.target.closest && e.target.closest('[data-md-component="palette"] label');
    if (!label) return;
    if (busy) { e.preventDefault(); return; }
    var input = document.getElementById(label.htmlFor);
    if (!input) return;

    // the lamp sways a little when its cord is pulled
    var lamp = label.querySelector("svg");
    if (lamp) { lamp.classList.remove("is-pulled"); void lamp.getBoundingClientRect(); lamp.classList.add("is-pulled"); }

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    busy = true;

    var html = document.documentElement;
    var r = label.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height * 0.62;
    var far = Math.hypot(Math.max(x, window.innerWidth - x), window.innerHeight - y) + 160;
    html.style.setProperty("--rm-lx", Math.round(x) + "px");
    html.style.setProperty("--rm-ly", Math.round(y) + "px");
    html.style.setProperty("--rm-far", Math.round(far) + "px");

    var on = input.getAttribute("data-md-color-scheme") !== "slate";
    var cls = on ? "rm-lamp-on" : "rm-lamp-off";
    // rm-theme-swap turns off colour transitions, so the page is captured in its final colours
    html.classList.add(cls, "rm-theme-swap");

    var glow = document.createElement("div");
    glow.className = "rm-lamp-glow";
    glow.setAttribute("aria-hidden", "true");

    var t = document.startViewTransition(function () {
      input.click();
      document.body.appendChild(glow);
    });
    t.finished.finally(function () {
      glow.remove();
      html.classList.remove(cls);
      requestAnimationFrame(function () { html.classList.remove("rm-theme-swap"); busy = false; });
    });
  }, true);
})();
