// Keep the language menu pointing to the current page.
// With instant navigation the header is not re-rendered when the page changes,
// so the links built by overrides/partials/alternate.html would stay on the first
// page loaded. document$ (provided by the theme) fires after every page change.
document$.subscribe(function () {
  var path = location.pathname;
  var inFrench = path === "/fr" || path.indexOf("/fr/") === 0;
  var page = inFrench ? path.slice(3) || "/" : path;

  document.querySelectorAll(".md-select__link[hreflang]").forEach(function (link) {
    var lang = link.getAttribute("hreflang");
    var target = page;
    // Articles exist only in English: from one, French goes to the Community page
    if (lang === "fr" && page.indexOf("/writing/") === 0) target = "/community/";
    link.href = (lang === "fr" ? "/fr" : "") + target;
  });
});
