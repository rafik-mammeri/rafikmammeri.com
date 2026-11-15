"""Generate the Articles pages (docs/articles.md and docs-fr/articles.md) from docs/writing/*.md.

The page lists the articles by month: on the left a month stamp (month, year, number of
articles, minutes of reading); then one line per article (title; day, reading time, topic and
series part). Pointing at a line highlights it and fills the card on the right
(docs/javascripts/articles.js) with the summary, keywords, the article's sections with a line
under each as long as its share of the reading time, and what to read next, ordered by how
related the articles are, each with its score in a ring. The next part of a series comes first.

Everything is computed from the articles: the date from the file name, the reading time and
the time of each section from the word count (230 words a minute), the sections from the
"## " headings. Front matter gives title, description (and description_fr), tags, topic,
series and part, and the "also" links.

scripts/demo_articles.json, when present, adds placeholder articles used to design the page;
the page then says so at the top. Delete that file to remove them.
Run by scripts/build.sh before each build; standard library only.
"""
from __future__ import annotations

import html
import json
import math
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WRITING = ROOT / "docs" / "writing"
DEMO = ROOT / "scripts" / "demo_articles.json"
WPM = 230

MONTHS = {
    "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "fr": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
}
MON = {
    "en": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "fr": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
}
TOPICS_FR = {
    "Agents and architecture": "Agents et architecture",
    "Voice": "Voix",
    "Running in production": "Exploitation en production",
    "Data and security": "Données et sécurité",
    "Leading a team": "Diriger une équipe technique",
    "Foundations": "Fondamentaux",
}
TEXT = {
    "en": {"title": "Articles", "lede": "What I write about building AI agents in production.",
           "desc": "What I write about building AI agents in production.",
           "article": "article", "articles": "articles", "reading": "min of reading", "read": "min read", "min": "min",
           "words": "words", "in": "In this article", "next": "Read next", "series": "Series", "part": "part",
           "of": "of", "next_part": "Next in the series", "also": "Also on", "and": "and", "related": "related",
           "overview": "{n} articles, {m} min of reading. Point at one to see what it covers.", "latest": "Latest",
           "start": "Start with part 1", "parts": "parts", "feed": "RSS feed",
           "demo_title": "Design preview",
           "demo": "Except for “{real}”, the articles listed here are placeholders written to design this page. They are not published."},
    "fr": {"title": "Articles", "lede": "Ce que j'écris sur la construction d'agents IA en production. Les articles sont en anglais.",
           "desc": "Ce que j'écris sur la construction d'agents IA en production.",
           "article": "article", "articles": "articles", "reading": "min de lecture", "read": "min de lecture", "min": "min",
           "words": "mots", "in": "Dans cet article", "next": "À lire ensuite", "series": "Série", "part": "partie",
           "of": "sur", "next_part": "Suite de la série", "also": "Aussi sur", "and": "et", "related": "proche",
           "overview": "{n} articles, {m} min de lecture. Survolez-en un pour voir ce qu'il couvre.", "latest": "Le plus récent",
           "start": "Commencer par la partie 1", "parts": "parties", "feed": "Flux RSS",
           "demo_title": "Aperçu de conception",
           "demo": "À l'exception de « {real} », les articles listés ici sont des exemples rédigés pour concevoir cette page. Ils ne sont pas publiés."},
}


def front_matter(text: str) -> tuple[dict, str]:
    """A small reader for the front matter used here: scalars and one-level lists."""
    m = re.match(r"\A---\n(.*?)\n---\n", text, re.DOTALL)
    if not m:
        return {}, text
    meta: dict = {}
    key = None
    for line in m.group(1).splitlines():
        if line.startswith(("  - ", "- ")) and key:
            meta.setdefault(key, []).append(line.split("- ", 1)[1].strip().strip("\"'"))
        elif ":" in line and not line.startswith(" "):
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip().strip("\"'")
            if value:
                meta[key] = value
    return meta, text[m.end():]


def words(text: str) -> int:
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)  # code and diagrams are not read word by word
    text = re.sub(r"`[^`]*`", " ", text)
    return len(re.findall(r"[\w’'-]+", text))


def read_article(path: Path) -> dict:
    meta, body = front_matter(path.read_text(encoding="utf-8"))
    y, mo, d = (int(x) for x in path.name[:10].split("-"))
    total = words(body)
    sections = []
    for chunk in re.split(r"^## ", body, flags=re.MULTILINE)[1:]:
        heading, _, rest = chunk.partition("\n")
        sections.append([heading.strip(), max(1, round(words(rest) / WPM))])
    also = []
    for item in meta.get("also", []):
        name, _, url = item.partition(": ")
        also.append((name.strip(), url.strip()))
    return {
        "title": meta.get("title", path.stem), "url": f"/writing/{path.stem}/",
        "y": y, "m": mo, "d": d, "words": total, "min": max(1, math.ceil(total / WPM)),
        "topic": meta.get("topic", ""), "desc": meta.get("description", ""), "desc_fr": meta.get("description_fr", ""),
        "tags": meta.get("tags", []), "sections": sections, "also": also,
        "series": meta.get("series", ""), "part": int(meta.get("part", 0) or 0), "demo": False,
    }


def read_demo() -> list[dict]:
    if not DEMO.exists():
        return []
    out = []
    for a in json.loads(DEMO.read_text(encoding="utf-8")):
        y, mo, d = (int(x) for x in a["date"].split("-"))
        out.append({"title": a["title"], "url": "", "y": y, "m": mo, "d": d, "words": a["words"], "min": a["minutes"],
                    "topic": a.get("topic", ""), "desc": a["description"], "desc_fr": "", "tags": a.get("tags", []),
                    "sections": a.get("sections", []), "also": [], "series": a.get("series", ""),
                    "part": a.get("part", 0), "demo": True})
    return out


def relation(a: dict, b: dict) -> float:
    """How related two articles are, from 0 to 1: same topic, and shared keywords."""
    ta, tb = {t.lower() for t in a["tags"]}, {t.lower() for t in b["tags"]}
    shared = len(ta & tb) / len(ta | tb) if ta | tb else 0
    return round(min(1.0, 0.55 * (a["topic"] == b["topic"] and bool(a["topic"])) + 0.45 * shared + 0.08), 2)


def ring(v: float) -> str:
    c = 2 * math.pi * 14
    return (f'<span class="rm-nx__ring" aria-hidden="true"><svg viewBox="0 0 34 34"><circle cx="17" cy="17" r="14" class="rm-nx__track"/>'
            f'<circle cx="17" cy="17" r="14" class="rm-nx__fill" stroke-dasharray="{c:.1f}" stroke-dashoffset="{c * (1 - v):.1f}" transform="rotate(-90 17 17)"/>'
            f'</svg><span>{round(v * 100)}</span></span>')


def render(entries: list[dict], lang: str) -> str:
    """The month groups, the card and one card template per article, as raw HTML."""
    t, e = TEXT[lang], html.escape
    le = ' lang="en"' if lang == "fr" else ""  # the articles themselves are in English
    entries = sorted(entries, key=lambda a: (a["y"], a["m"], a["d"]), reverse=True)
    series: dict[str, list[int]] = {}
    for i, a in enumerate(entries):
        if a["series"]:
            series.setdefault(a["series"], []).append(i)
    for name in series:
        series[name].sort(key=lambda i: entries[i]["part"])

    def topic(a):
        return TOPICS_FR.get(a["topic"], a["topic"]) if lang == "fr" else a["topic"]

    def href(a):
        return f' href="{e(a["url"])}"' if a["url"] else ' tabindex="0"'

    def series_label(a):
        if not a["series"]:
            return ""
        return f'<span class="rm-ar__ser">{t["series"]} · {a["part"]}/{len(series[a["series"]])}</span>'

    # month groups
    groups, cur, key = [], [], None
    for i, a in enumerate(entries):
        if (a["y"], a["m"]) != key:
            if cur:
                groups.append(cur)
            cur, key = [], (a["y"], a["m"])
        cur.append(i)
    if cur:
        groups.append(cur)
    out = []
    for g in groups:
        a0 = entries[g[0]]
        mins = sum(entries[i]["min"] for i in g)
        count = f'{len(g)} {t["articles"] if len(g) > 1 else t["article"]}'
        rows = []
        for i in g:
            a = entries[i]
            desc = (a.get("desc_fr") or a["desc"]) if lang == "fr" else a["desc"]
            sub = f'<span>{a["d"]} {MON[lang][a["m"] - 1]}</span><span>{a["min"]} {t["read"]}</span>' + (f"<span>{e(topic(a))}</span>" if a["topic"] else "") + series_label(a)
            rows.append(f'<a class="rm-ar"{href(a)} data-card="{i}"><span class="rm-ar__ttl"{le}>{e(a["title"])}</span>'
                        f'<span class="rm-ar__sub">{sub}</span><span class="rm-ar__sum">{e(desc)}</span></a>')
        out.append(f'<section class="rm-ar-g"><div class="rm-ar-st"><b>{MONTHS[lang][a0["m"] - 1].capitalize()}</b><span>{a0["y"]}</span>'
                   f'<em>{count}<br>{mins} {t["reading"]}</em></div><div class="rm-ar-rows">{"".join(rows)}</div></section>')

    # one card per article
    cards = []
    for i, a in enumerate(entries):
        desc = (a.get("desc_fr") or a["desc"]) if lang == "fr" else a["desc"]
        words_txt = f'{a["words"]:,}'.replace(",", " " if lang == "fr" else ",")
        title = f'<a class="rm-arc__title" href="{e(a["url"])}"{le}>{e(a["title"])}</a>' if a["url"] else f'<p class="rm-arc__title"{le}>{e(a["title"])}</p>'
        meta = f'<div class="rm-arc__meta"><span>{a["d"]} {MONTHS[lang][a["m"] - 1]} {a["y"]}</span><span>{a["min"]} {t["min"]}</span><span>{words_txt} {t["words"]}</span></div>'
        banner = ""
        if a["series"]:
            parts = series[a["series"]]
            dots = "".join(f'<i class="{"is-done" if entries[p]["part"] < a["part"] else "is-here" if p == i else ""}"></i>' for p in parts)
            banner = f'<div class="rm-arc__series"><span>{e(a["series"])} · {a["part"]}/{len(parts)}</span><span class="rm-arc__dots">{dots}</span></div>'
        tags = f'<div class="rm-arc__tags"{le}>' + "".join(f"<span>{e(x)}</span>" for x in a["tags"]) + "</div>" if a["tags"] else ""
        toc = ""
        if a["sections"]:
            toc = f'<h5 class="rm-arc__label">{t["in"]}</h5><div class="rm-arc__toc"{le}>' + "".join(
                f'<div><div><span>{e(h)}</span><em>{m} {t["min"]}</em></div><i style="width:{round(m / a["min"] * 100)}%"></i></div>'
                for h, m in a["sections"]) + "</div>"
        # read next: by relation score; the next part of the series counts as very close
        nxt = None
        if a["series"]:
            parts = series[a["series"]]
            k = parts.index(i)
            nxt = parts[k + 1] if k + 1 < len(parts) else None
        scored = sorted(((0.97 if j == nxt else relation(a, b), j) for j, b in enumerate(entries) if j != i), reverse=True)[:3]
        items = []
        for v, j in scored:
            b = entries[j]
            why = f'<span class="rm-nx__why">{t["next_part"]} · {t["part"]} {b["part"]} {t["of"]} {len(series[a["series"]])}</span>' if j == nxt else e(topic(b))
            tag = "a" if b["url"] else "span"
            link = f' href="{e(b["url"])}"' if b["url"] else ""
            items.append(f'<{tag} class="rm-nx"{link} data-go="{j}">{ring(v)}<b{le}>{e(b["title"])}</b><small>{b["min"]} {t["min"]} · {why}</small></{tag}>')
        also = ""
        if a["also"]:
            links = [f'<a href="{e(u)}">{e(n)}</a>' for n, u in a["also"]]
            joined = links[0] if len(links) == 1 else ", ".join(links[:-1]) + f" {t['and']} " + links[-1]
            also = f'<p class="rm-arc__also">{t["also"]} {joined}</p>'
        cards.append(f'<template id="rm-arc-{i}">{title}{meta}{banner}<p class="rm-arc__sum">{e(desc)}</p>{tags}{toc}'
                     f'<h5 class="rm-arc__label">{t["next"]}</h5><div class="rm-arc__next">{"".join(items)}</div>{also}</template>')

    # the card at rest: an overview, the series, the latest article
    total = sum(a["min"] for a in entries)
    idle = f'<p class="rm-arc__sum">{t["overview"].format(n=len(entries), m=total)}</p>'
    if series:
        idle += f'<h5 class="rm-arc__label">{t["series"]}</h5><div class="rm-arc__list">' + "".join(
            f'<span class="rm-arc__item" data-go="{p[0]}"><b>{e(name)}</b><small>{len(p)} {t["parts"]} · {t["start"]}</small></span>'
            for name, p in series.items()) + "</div>"
    first = entries[0]
    idle += (f'<h5 class="rm-arc__label">{t["latest"]}</h5><div class="rm-arc__list"><span class="rm-arc__item" data-go="0">'
             f'<b{le}>{e(first["title"])}</b><small>{first["min"]} {t["min"]}</small></span></div>')
    cards.append(f'<template id="rm-arc-idle">{idle}</template>')

    return ('<div class="rm-ar-wrap"><div class="rm-ar-main">' + "".join(out) + '</div>'
            '<aside class="rm-ar-card" aria-live="polite"></aside></div>' + "".join(cards))


def page(entries: list[dict], lang: str, title: str | None = None) -> str:
    t = TEXT[lang]
    demo = ""
    real = [a for a in entries if not a["demo"]]
    if any(a["demo"] for a in entries):
        names = ", ".join(a["title"] for a in real) or "—"
        demo = f'!!! note "{t["demo_title"]}"\n\n    {t["demo"].format(real=names)}\n\n'
    return f"""---
title: "{title or t['title']}"
description: "{t['desc']}"
hide:
  - navigation
  - toc
---

<!-- Generated by scripts/gen_articles.py from docs/writing/*.md. Edit the articles, not this page. -->

# {t['title']}

{t['lede']}
{{ .rm-lede }}

{demo}{render(entries, lang)}

<p class="rm-posts__feed"><a href="/feed.xml">{t['feed']}</a></p>
"""


def main() -> None:
    entries = [read_article(p) for p in sorted(WRITING.glob("[0-9][0-9][0-9][0-9]-*.md"))] + read_demo()
    (ROOT / "docs" / "articles.md").write_text(page(entries, "en"), encoding="utf-8")
    (ROOT / "docs-fr" / "articles.md").write_text(page(entries, "fr"), encoding="utf-8")
    print(f"Wrote the Articles pages with {len(entries)} article(s)")


if __name__ == "__main__":
    main()
