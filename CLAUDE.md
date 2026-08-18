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
`~/Documents/Bibliothèque/ai/obsidian/resume/` — read-only source, never edit it directly.
The vault's own rule applies to the site: **never publish confidential Boulanger internals**
(IPs, security header names, table/role/warehouse names, internal tool names like Platodin,
escalation vendor names). Keep public copy at the abstraction level already live.

**Positioning (since 2026-08-18 rewrite):** the site is written for a CDO/CTO hiring a Head of
AI, not for fellow engineers. Every page leads with stakes/decisions/organizational outcomes;
tech detail supports the story. Key assets deliberately surfaced: the org-adoption story (chat
became a baseline requirement in every IT project), "what I said no to" trade-offs, the API
contract negotiated across 3 front teams, HR-as-product-owner model, and the Basel-regulated
banking background framed as the root of his AI-governance posture. Keep this altitude in any
content edit — don't let it drift back into a tech writeup.

## Structure

- `zensical.toml` — site config: nav, theme features, palette scheme refs, markdown extensions,
  social links, `site_url`.
- `docs/` — page content (Markdown): `index.md` (home, custom template), `projects.md`,
  `experience.md`, `contact.md`, `writing/` (articles).
- `docs/writing/` — one Markdown file per article (named `YYYY-MM-DD-slug.md`) + `index.md` as
  the hand-maintained, newest-first listing page. **No native blog plugin in Zensical** — a new
  article needs three manual updates: `docs/writing/index.md`'s list, the homepage teaser in
  `overrides/home.html`, and `mise run feed` (regenerates `docs/feed.xml`, the RSS feed served
  at /feed.xml — used for Medium import and syndication; cross-post to Medium via its "Import a
  story" tool, which sets the canonical link back to this site automatically).
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
| `mise run deploy` | Verify the build locally, push, and watch the live deploy through to completion |

Without mise: `uv run zensical serve` / `uv run zensical build --clean`.

Package management is `uv` (not pip/poetry) — `pyproject.toml` + `uv.lock`. `deploy` depends on
`build` (as a local smoke test before pushing — `site/` itself is gitignored, never committed),
refuses to run if there are uncommitted changes, then pushes and uses `gh run watch` to follow
the triggered Actions run to completion.

## Deployment status

**Live** at `www.rafikmammeri.com`, repo pushed to
[github.com/rafik-mammeri/rafikmammeri.com](https://github.com/rafik-mammeri/rafikmammeri.com).
Pages source is "GitHub Actions". DNS is on Porkbun (Cloudflare-backed): apex (`@`) has GitHub
Pages' A/AAAA records (redirects to `www`), `www` is a CNAME to `rafik-mammeri.github.io`. Both
verified resolving and serving over HTTP. **HTTPS enforcement is still pending** — GitHub was
still provisioning the Let's Encrypt certificate as of 2026-08-18 (`gh api -X PUT
repos/rafik-mammeri/rafikmammeri.com/pages -F https_enforced=true` returns "certificate does not
exist yet"); retry that once the cert is ready, no other action needed. `gh auth status` is
already logged in as `rafik-mammeri` on this machine.

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
- Feature availability as of 2026-08 (verified against zensical.org docs): **native social
  cards NOT yet available** (manual `docs/assets/og-card.png` + OG tags in `overrides/main.html`
  is the workaround), **tag index pages NOT yet supported** (front-matter `tags:` do render as
  chips on the page itself — the article uses them), **no native analytics setup page**.
  Re-check these when Zensical updates; the manual OG setup can be replaced once social cards
  land.
- `[project.markdown_extensions]` is aligned with Zensical's recommended defaults: syntax
  highlighting (`pymdownx.highlight` + `inlinehilite`), `toc.permalink`, content tabs,
  tasklists, caret/mark/tilde, keys, magiclink, smartsymbols, and the mermaid custom fence
  (` ```mermaid ` blocks render as diagrams — Zensical's JS bundle lazy-loads mermaid.min.js).
  Architecture diagrams on Projects and in the article are mermaid flowcharts, not ASCII.

## Pages overview

Home (custom template: hero + project grid + writing teaser + experience strip + skills chips) ·
Projects (4 flagship builds: Boulanger conversational assistant, Self-BI/MCP Snowflake, Vox voice
callbot, Google Chat internal agents) · Writing (hand-built, one live post) · Experience
(full CV timeline + education/certs) · Contact. Nav is horizontal top tabs
(`navigation.tabs` + `.sticky`), not the default sidebar.
