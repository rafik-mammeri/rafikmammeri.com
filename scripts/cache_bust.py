"""After the build: add a version to the site's own stylesheet and scripts in every page
(extra.css?v=…, attention.js?v=…), taken from each file's content. Browsers and GitHub Pages
cache these files; with the version, a changed file is always fetched again, so a page is
never shown with an older stylesheet. Standard library only; run by scripts/build.sh."""
import hashlib
import re
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent / "site"


def version(path: Path) -> str:
    return hashlib.sha1(path.read_bytes()).hexdigest()[:10]


def main() -> None:
    assets = {}
    for f in list(SITE.glob("stylesheets/*.css")) + list(SITE.glob("javascripts/*.js")):
        assets[f.relative_to(SITE).as_posix()] = version(f)
    pattern = re.compile(r'((?:href|src)="(?:[^"]*/)?)(' + "|".join(re.escape(a) for a in assets) + r')"')
    pages = 0
    for page in SITE.rglob("*.html"):
        text = page.read_text(encoding="utf-8")
        new = pattern.sub(lambda m: f'{m.group(1)}{m.group(2)}?v={assets[m.group(2)]}"', text)
        if new != text:
            page.write_text(new, encoding="utf-8")
            pages += 1
    print(f"Versioned {len(assets)} asset(s) in {pages} page(s)")


if __name__ == "__main__":
    main()
