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

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }
  function text(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function build() {
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
      var years = el("time", "xp-years", text(h2.dataset.years) + "<i></i>");
      var len = tenure(meta ? meta.textContent : "");
      if (len) years.style.setProperty("--xp-len", (len * 1.55).toFixed(2) + "rem");
      sum.appendChild(years);
      sum.appendChild(el("span", "xp-chev", "›"));
      var head = el("span", "xp-head");
      head.appendChild(h2);
      head.appendChild(el("span", "xp-role", text(role)));
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
      // the position takes the place of its heading, before the next one
      root.insertBefore(pos, n || null);
    });

    reveal();
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
