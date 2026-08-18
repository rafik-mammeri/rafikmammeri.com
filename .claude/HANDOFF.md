# Handoff note — personal website project

If you're picking this up in a new session (e.g. on a different machine), read this first.

## What this project is

Rafik Mammeri's personal website — built with [Zensical](https://zensical.org) (Rust-based
successor to Material for MkDocs, same theming/config model). Purpose: an extended,
recruiter-friendly resume AND a personal-brand showcase of production AI engineering work to
attract freelance interest — **without ever stating "available for freelance" anywhere on the
site.** Freelance availability is signaled only implicitly, through project depth and contact
info, matching Rafik's existing LinkedIn positioning strategy.

Design register: **technical-minimal** — near-monochrome palette + one restrained accent color
(desaturated steel blue), monospace used specifically for stats/tags/stack chips, generous
whitespace. No AI-startup gradients, no photo, no dashboard-style stat theatrics.

## Current state (as of this note)

Fully built and working locally. Not yet pushed to GitHub. Site language: English (content
adapted, not copied, from Rafik's French Obsidian vault at
`~/Library/Mobile Documents/com~apple~CloudDocs/Documents/Bibliothèque/ai/obsidian/resume/` —
read-only source of truth for CV/project/experience content, never edit it).

**Pages:** Home (custom template, hero + project grid + writing teaser + experience strip +
skills chips) · Projects (4 flagship builds: Boulanger conversational assistant, Self-BI/MCP
Snowflake, Vox voice callbot, Google Chat agents) · Writing (hand-built articles section, one
real starter post) · Experience (full CV-style timeline + education/certs) · Contact.

**Nav:** horizontal top tabs (`navigation.tabs` + `.sticky`), not the default sidebar.

**Domain:** custom domain already purchased — `www.rafikmammeri.com`, with
`rafik@rafikmammeri.com` as the contact email. `zensical.toml` `site_url` and `docs/CNAME`
are both already set to this domain. GitHub repo name no longer matters for the URL because of
the custom domain.

**Deployment:** GitHub Actions workflow at `.github/workflows/docs.yml` is ready (builds with
`zensical build --clean`, deploys to Pages) but **not connected** — repo hasn't been pushed to
GitHub yet. Open question flagged to Rafik and not yet answered: whether the bare
`rafikmammeri.com` should redirect to `www.rafikmammeri.com` or vice versa (affects DNS record
setup at the registrar, not anything in this repo).

**Company laptop caveat:** Rafik was on a company (Boulanger) laptop earlier in this project
and asked whether pushing a personal repo from it could be a problem. He was told to check his
employer's IT/device policy since this isn't something verifiable from inside the session — no
resolution was given either way. Worth checking he's since moved to a personal machine (he
mentioned switching to a personal MacBook Air) before actually pushing/enabling Pages.

## Tooling

- **Package management:** `uv` (not pip/poetry). `pyproject.toml` + `uv.lock` at project root.
- **Task runner:** [mise](https://mise.jdx.dev) — `mise.toml` has `dev`, `build`,
  `preview-build`, `clean`, `deploy` tasks. Run `mise trust` once per machine before first use
  (mise refuses untrusted configs). See `README.md` for the full command table.
- **Local dev:** `mise run dev` → `http://localhost:8000` with live reload.
- Note: this project directory is itself inside an iCloud-synced folder — build artifacts
  (`.venv/`, `site/`, `.cache/`) are gitignored and may not have transferred cleanly via iCloud
  sync between machines; just re-run `mise run build` or `mise run dev`, `uv` will recreate
  `.venv` automatically.

## Key files if you need to re-orient

- `zensical.toml` — site config: nav, theme features, palette scheme refs, markdown extensions,
  social links, `site_url`.
- `docs/stylesheets/extra.css` — the actual design system: CSS custom property overrides for
  the light/dark (`slate`) palette, `.tag`/`.stat` monospace classes, `.home-*` homepage layout
  classes, `.article-list` for the Writing index.
- `overrides/home.html` — custom Jinja/MiniJinja homepage template (extends `main.html`,
  overrides the `content` block). Note: the project-grid section renders `{{ page.content }}`
  from `docs/index.md`'s Markdown body — the grid-cards Markdown syntax only works if it's
  Markdown-processed content, NOT raw HTML inside the Jinja template directly (this bit me once
  already — don't move that markup back into the `.html` file).
- `docs/writing/` — one Markdown file per article + `index.md` as the hand-maintained,
  newest-first listing page. **No native blog plugin exists in Zensical yet** (confirmed via
  research — no `date`/`authors` front matter, no auto-sort, no tag-index pages) — new articles
  must be added manually to both `docs/writing/index.md`'s list and the homepage teaser in
  `overrides/home.html`.

## Zensical-specific gotchas learned the hard way

- The page literally called "Directives" in Zensical's docs
  (`zensical.org/docs/authoring/directives/`) is **NOT** admonitions/tabs/grids — it's an
  unrelated, paid early-access content-reuse/multi-variant feature. The actual
  admonitions/tabs/grids/icons/buttons/code-annotation features live as separate pages under
  `zensical.org/docs/authoring/*` — same feature set as Material for MkDocs, just split
  across more individual doc pages.
- Icon/emoji shortcodes (`:octicons-arrow-right-24:` etc.) render as literal text unless
  `pymdownx.emoji` is registered in `[project.markdown_extensions]` with Zensical's own
  generator/index (`zensical.extensions.emoji.to_svg` / `.twemoji`) — already set up correctly
  in `zensical.toml`, just noting why it's there.
- CSS palette overrides use the same variable names as Material for MkDocs
  (`--md-primary-fg-color`, `--md-default-bg-color`, `--md-typeset-color`, etc.), scoped via
  `[data-md-color-scheme="default"]` / `[data-md-color-scheme="slate"]` attribute selectors —
  confirmed via direct research, not guessed.
- Zensical is alpha software (their own roadmap says so) — core rendering/theming is stable and
  inherited from mature Material for MkDocs patterns, but expect thin docs on anything advanced
  and possible pre-1.0 churn.

## To resume

Just read this file, then `zensical.toml` and `README.md` for current config/commands, and
ask Rafik what he wants to do next (likely: decide on the DNS redirect question above, then
actually push to GitHub and connect Pages).
