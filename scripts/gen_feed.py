#!/usr/bin/env python3
"""Generate docs/feed.xml (RSS 2.0) and docs/llms.txt from docs/writing/.

Zensical has no native feed or llms.txt support yet, so both are generated
from front matter and committed as static files. Run after adding an article:

    mise run feed
"""

import re
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path
from xml.sax.saxutils import escape

import markdown

ROOT = Path(__file__).resolve().parent.parent
WRITING = ROOT / "docs" / "writing"
OUT = ROOT / "docs" / "feed.xml"
LLMS_OUT = ROOT / "docs" / "llms.txt"

LLMS_HEADER = """\
# Rafik Mammeri

> Senior AI Engineer and technical lead for AI agents at Boulanger, one of
> France's largest electronics retailers (€4B). Four systems in production
> across three channels: a customer-facing multi-agent assistant (web and
> mobile), natural-language BI over Snowflake via MCP, a streaming voice
> callbot, and RAG-backed internal agents. Seven years of regulated banking
> ML before that. PhD in mathematics. Based in Lille, France.

## Pages

- [Projects](https://www.rafikmammeri.com/projects/): Four production AI systems written as case studies — the stakes, the trade-off decisions (including what was rejected and why), and the organizational outcomes.
- [Experience](https://www.rafikmammeri.com/experience/): Full career path — Boulanger, freelance, BNP Paribas Datalab and Risk — plus education and certifications.
- [Writing](https://www.rafikmammeri.com/writing/): Notes on building and running LLM systems in production.
- [Contact](https://www.rafikmammeri.com/contact/): Email, LinkedIn, GitHub, Medium, dev.to.

## Writing
"""

SITE_URL = "https://www.rafikmammeri.com"
FEED_TITLE = "Rafik Mammeri — Writing"
FEED_DESCRIPTION = "Notes on building and running LLM systems in production."


def split_front_matter(text: str) -> tuple[dict, str]:
    match = re.match(r"\A---\n(.*?)\n---\n", text, re.DOTALL)
    meta = {}
    body = text
    if match:
        body = text[match.end():]
        for line in match.group(1).splitlines():
            if ":" in line and not line.startswith((" ", "-", "\t")):
                key, _, value = line.partition(":")
                meta[key.strip()] = value.strip().strip("\"'")
    return meta, body


def render_html(body: str) -> str:
    html = markdown.markdown(
        body,
        extensions=["extra", "admonition", "pymdownx.superfences"],
    )
    # Feed readers resolve nothing relative — make internal links absolute
    html = re.sub(r'href="(?!https?://|mailto:|#)([^"]+)"', rf'href="{SITE_URL}/writing/\1"', html)
    # CDATA cannot contain the "]]>" terminator
    return html.replace("]]>", "]]&gt;")


def articles():
    for path in sorted(WRITING.glob("*.md"), reverse=True):
        if path.name == "index.md":
            continue
        date_match = re.match(r"(\d{4})-(\d{2})-(\d{2})-", path.name)
        if not date_match:
            continue
        meta, body = split_front_matter(path.read_text(encoding="utf-8"))
        published = datetime(
            *(int(g) for g in date_match.groups()), 12, 0, tzinfo=timezone.utc
        )
        yield {
            "title": meta.get("title", path.stem),
            "description": meta.get("description", ""),
            "url": f"{SITE_URL}/writing/{path.stem}/",
            "published": published,
            "content": render_html(body),
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
      <content:encoded><![CDATA[{a['content']}]]></content:encoded>
      <pubDate>{format_datetime(a['published'])}</pubDate>
    </item>"""
        for a in items
    )
    OUT.write_text(
        f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
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

    article_lines = "\n".join(
        f"- [{a['title']}]({a['url']}): {a['description']}" for a in items
    )
    LLMS_OUT.write_text(LLMS_HEADER + "\n" + article_lines + "\n", encoding="utf-8")
    print(f"Wrote {LLMS_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
