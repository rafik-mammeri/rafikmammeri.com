# rafikmammeri.com

Rafik Mammeri's personal website — built with [Zensical](https://zensical.org) (Rust-based
successor to Material for MkDocs, same theming/config model). Purpose: an extended,
recruiter-friendly resume AND a personal-brand showcase of production AI engineering work to
attract freelance interest — **without ever stating "available for freelance" anywhere on the
site.** Freelance availability is signaled only implicitly, through project depth and contact
info, matching Rafik's existing LinkedIn positioning strategy.

Design register: **technical-minimal** — near-monochrome palette + one restrained accent color
(desaturated steel blue), monospace used specifically for stats/tags/stack chips, generous
whitespace. No AI-startup gradients, no photo, no dashboard-style stat theatrics.

## Content source of truth

Site content (English) is adapted, not copied, from Rafik's French Obsidian vault at
`~/Library/Mobile Documents/com~apple~CloudDocs/Documents/Bibliothèque/ai/obsidian/resume/` —
read-only source, never edit it directly.

## Structure

- `zensical.toml` — site config: nav, theme features, palette scheme refs, markdown extensions,
  social links, `site_url`.
- `docs/` — page content (Markdown): `index.md` (home, custom template), `projects.md`,
  `experience.md`, `contact.md`, `writing/` (articles).
- `docs/writing/` — one Markdown file per article + `index.md` as the hand-maintained,
  newest-first listing page. **No native blog plugin in Zensical** — new articles must be added
  manually to both `docs/writing/index.md`'s list and the homepage teaser in `overrides/home.html`.
- `docs/stylesheets/extra.css` — the design system: CSS custom property overrides for light/dark
  (`slate`) palette, `.tag`/`.stat` monospace classes, `.home-*` homepage layout classes,
  `.article-list` for the Writing index.
- `overrides/home.html` — custom Jinja/MiniJinja homepage template (extends `main.html`,
  overrides `content` block). The project-grid section renders `{{ page.content }}` from
  `docs/index.md`'s Markdown body — grid-cards syntax only works if Markdown-processed, **not**
  raw HTML moved into the `.html` template directly.
- `.github/workflows/docs.yml` — builds and deploys to GitHub Pages on push to `main`/`master`.

## Commands

Via [mise](https://mise.jdx.dev) (`mise trust` once per machine first):

| Command | What it does |
|---|---|
| `mise run dev` | Local dev server, live reload — http://localhost:8000 |
| `mise run build` | Build static site into `site/` |
| `mise run preview-build` | Build, then serve exact static output (what Pages deploys) |
| `mise run clean` | Remove `site/` and the Zensical cache |
| `mise run deploy` | Push current branch — Actions builds/publishes to Pages |

Without mise: `uv run zensical serve` / `uv run zensical build --clean`.

Package management is `uv` (not pip/poetry) — `pyproject.toml` + `uv.lock`.

## Deployment status

Custom domain **www.rafikmammeri.com** (`docs/CNAME`, `zensical.toml site_url` both set).
GitHub Actions workflow is ready but **this repo is not yet pushed to GitHub / not yet a git
repo locally** — no `.git` directory exists here. To go live: create a GitHub repo, push, set
Pages source to "GitHub Actions", set/verify the custom domain in Pages settings, enable
Enforce HTTPS, and point DNS (`www` CNAME to `<user>.github.io`, optionally apex A/AAAA records
too). Open question not yet resolved: whether bare `rafikmammeri.com` should redirect to `www`
or vice versa (DNS-only decision, not a repo change).

**Caveat:** Rafik was previously on a Boulanger company laptop and was told to check employer
IT policy before pushing a personal repo from it — unresolved either way. He mentioned moving
to a personal MacBook Air; confirm which machine before actually pushing/enabling Pages.

## Zensical-specific gotchas

- The Zensical docs page literally titled "Directives" is **not** admonitions/tabs/grids — it's
  an unrelated paid early-access content-reuse feature. Admonitions/tabs/grids/icons/buttons/code
  annotation live as separate pages under `zensical.org/docs/authoring/*`.
- Icon/emoji shortcodes (`:octicons-arrow-right-24:` etc.) render as literal text unless
  `pymdownx.emoji` is registered with Zensical's own generator/index
  (`zensical.extensions.emoji.to_svg` / `.twemoji`) — already configured in `zensical.toml`.
- CSS palette overrides use Material-for-MkDocs variable names (`--md-primary-fg-color`,
  `--md-default-bg-color`, `--md-typeset-color`, ...), scoped via
  `[data-md-color-scheme="default"]` / `[data-md-color-scheme="slate"]`.
- Zensical is alpha software — core rendering/theming is stable (inherited from Material for
  MkDocs), but expect thin docs on advanced features and possible pre-1.0 churn.

## Pages overview

Home (custom template: hero + project grid + writing teaser + experience strip + skills chips) ·
Projects (4 flagship builds: Boulanger conversational assistant, Self-BI/MCP Snowflake, Vox voice
callbot, Google Chat internal agents) · Writing (hand-built, one live post) · Experience
(full CV timeline + education/certs) · Contact. Nav is horizontal top tabs
(`navigation.tabs` + `.sticky`), not the default sidebar.
