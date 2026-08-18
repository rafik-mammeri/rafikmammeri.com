#!/usr/bin/env python3
"""Generate docs/feed.xml (RSS 2.0) from the articles in docs/writing/.

Zensical has no native feed support yet, so the feed is generated from
front matter and committed as a static file. Run after adding an article:

    mise run feed
"""

import re
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
WRITING = ROOT / "docs" / "writing"
OUT = ROOT / "docs" / "feed.xml"

SITE_URL = "https://www.rafikmammeri.com"
FEED_TITLE = "Rafik Mammeri — Writing"
FEED_DESCRIPTION = "Notes on building and running LLM systems in production."


def parse_front_matter(text: str) -> dict:
    match = re.match(r"\A---\n(.*?)\n---\n", text, re.DOTALL)
    meta = {}
    if match:
        for line in match.group(1).splitlines():
            if ":" in line and not line.startswith((" ", "-", "\t")):
                key, _, value = line.partition(":")
                meta[key.strip()] = value.strip().strip("\"'")
    return meta


def articles():
    for path in sorted(WRITING.glob("*.md"), reverse=True):
        if path.name == "index.md":
            continue
        date_match = re.match(r"(\d{4})-(\d{2})-(\d{2})-", path.name)
        if not date_match:
            continue
        meta = parse_front_matter(path.read_text(encoding="utf-8"))
        published = datetime(
            *(int(g) for g in date_match.groups()), 12, 0, tzinfo=timezone.utc
        )
        yield {
            "title": meta.get("title", path.stem),
            "description": meta.get("description", ""),
            "url": f"{SITE_URL}/writing/{path.stem}/",
            "published": published,
        }


def main() -> None:
    items = list(articles())
    now = format_datetime(datetime.now(timezone.utc))
    entries = "\n".join(
        f"""    <item>
      <title>{escape(a['title'])}</title>
      <link>{a['url']}</link>
      <guid isPermaLink="true">{a['url']}</guid>
      <description>{escape(a['description'])}</description>
      <pubDate>{format_datetime(a['published'])}</pubDate>
    </item>"""
        for a in items
    )
    OUT.write_text(
        f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{escape(FEED_TITLE)}</title>
    <link>{SITE_URL}/writing/</link>
    <description>{escape(FEED_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>{now}</lastBuildDate>
    <atom:link href="{SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
{entries}
  </channel>
</rss>
""",
        encoding="utf-8",
    )
    print(f"Wrote {OUT.relative_to(ROOT)} with {len(items)} article(s)")


if __name__ == "__main__":
    main()
