#!/usr/bin/env bash
# Build the bilingual site: English at the root of site/, French under site/fr/.
# docs-fr/ holds only the French pages; shared assets and styles are copied in
# from docs/ before the French build (those copies are gitignored).
set -euo pipefail
cd "$(dirname "$0")/.."

ZENSICAL="${ZENSICAL:-uv run zensical}"

rm -rf docs-fr/assets docs-fr/stylesheets
cp -R docs/assets docs-fr/assets
cp -R docs/stylesheets docs-fr/stylesheets

$ZENSICAL build --clean -f zensical.toml
$ZENSICAL build --clean -f zensical.fr.toml
