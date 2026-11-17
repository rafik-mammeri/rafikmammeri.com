#!/usr/bin/env bash
# Build the site (English only; old /fr/ addresses redirect to the English pages, docs/fr/).
set -euo pipefail
cd "$(dirname "$0")/.."

ZENSICAL="${ZENSICAL:-uv run zensical}"

# the Articles pages are generated from docs/writing/*.md
python3 scripts/gen_articles.py

# each article's share image (needs Pillow: CI installs it, locally uv provides it)
${OG_PYTHON:-uv run --with pillow python} scripts/gen_og.py

# the structured description of Rafik for search engines and AI agents, from ai-profile.md
python3 scripts/gen_ai.py --person

$ZENSICAL build --clean -f zensical.toml

# Markdown versions of the pages, llms.txt, llms-full.txt and sitemap dates, for AI agents
python3 scripts/gen_ai.py

# version the site's own stylesheet and scripts in every page, so browsers never mix a new page with an old stylesheet
python3 scripts/cache_bust.py
