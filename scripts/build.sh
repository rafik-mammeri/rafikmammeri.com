#!/usr/bin/env bash
# Build the bilingual site: English at the root of site/, French under site/fr/.
# docs-fr/ holds only the French pages; shared assets and styles are copied in
# from docs/ before the French build (those copies are gitignored).
set -euo pipefail
cd "$(dirname "$0")/.."

ZENSICAL="${ZENSICAL:-uv run zensical}"

# the Articles pages are generated from docs/writing/*.md
python3 scripts/gen_articles.py

# each article's share image (needs Pillow: CI installs it, locally uv provides it)
${OG_PYTHON:-uv run --with pillow python} scripts/gen_og.py

rm -rf docs-fr/assets docs-fr/stylesheets docs-fr/javascripts
cp -R docs/assets docs-fr/assets
cp -R docs/stylesheets docs-fr/stylesheets
cp -R docs/javascripts docs-fr/javascripts

$ZENSICAL build --clean -f zensical.toml
$ZENSICAL build --clean -f zensical.fr.toml

# version the site's own stylesheet and scripts in every page, so browsers never mix a new page with an old stylesheet
python3 scripts/cache_bust.py
