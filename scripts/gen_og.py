"""Generate each article's share image (docs/assets/og/<slug>.png, 1200×630), the picture
LinkedIn, X or Slack show when the article's link is shared.

The design is "streaming": the title as it is being generated. The words written so far are
bright, a persimmon caret follows them, and the next words are still faint. The caret stops
at about two thirds of the title; `share_upto: N` in an article's front matter puts it after
the Nth word instead.

Run by scripts/build.sh before each build. Needs Pillow; the font is scripts/og/Urbanist.ttf
(Urbanist by Corey Hu, SIL Open Font License 1.1). Pages that are not articles keep
docs/assets/og-card.png.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

from gen_articles import WRITING, front_matter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "docs" / "assets" / "og"
FONT = Path(__file__).resolve().parent / "og" / "Urbanist.ttf"

W, H = 1200, 630
BG, FG, MUT, HOT, SEL = (20, 20, 20), (242, 242, 240), (120, 120, 116), (224, 67, 31), (255, 107, 71)


def font(weight: int, size: int) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(FONT), size)
    f.set_variation_by_axes([weight])
    return f


def faint(i: int) -> tuple:
    """The words not written yet: fainter the further they are from the caret."""
    t = max(0.07, 0.22 - 0.05 * i)
    return tuple(int(FG[k] * t + BG[k] * (1 - t)) for k in range(3))


def streaming(title: str, upto: int) -> Image.Image:
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    words = title.split()
    # the largest size that keeps the title on three lines at most
    for size in (88, 80, 72, 66, 60, 54):
        f = font(720, size)
        gap = d.textlength(" ", font=f)
        placed, x, line = [], 0.0, 0
        for w in words:
            tw = d.textlength(w, font=f)
            if x and x + tw > W - 200:
                x, line = 0.0, line + 1
            placed.append((w, x, line, tw))
            x += tw + gap
        if line < 3:
            break
    lh = int(size * 1.08)
    top = H - 96 - lh * (placed[-1][2] + 1)
    for i, (w, x, line, tw) in enumerate(placed):
        y = top + line * lh
        d.text((80 + x, y), w, font=f, fill=FG if i < upto else faint(i - upto))
        if i == upto - 1:  # the caret, right after the last word written
            cx = 80 + x + tw + gap * 0.35
            d.rectangle([cx, y + size * 0.2, cx + size * 0.09, y + size * 1.02], fill=SEL)
    # the signature: the persimmon dot and the name
    d.ellipse([80, 77, 92, 89], fill=HOT)
    d.text((102, 70), "Rafik Mammeri", font=font(600, 24), fill=MUT)
    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    made = 0
    for path in sorted(WRITING.glob("*.md")):
        meta, _ = front_matter(path.read_text(encoding="utf-8"))
        if meta.get("template") != "article.html":
            continue
        title = meta.get("title", path.stem)
        n = len(title.split())
        upto = int(meta.get("share_upto", 0)) or round(n * 2 / 3)
        upto = max(1, min(n - 1, upto)) if n > 1 else 1
        slug = meta.get("slug", path.stem)
        streaming(title, upto).save(OUT / f"{slug}.png", optimize=True)
        made += 1
    print(f"share images: {made}")


if __name__ == "__main__":
    main()
