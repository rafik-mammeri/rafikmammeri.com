# rafikmammeri.com

Personal site — built with [Zensical](https://zensical.org).

## Commands

With [mise](https://mise.jdx.dev) installed, run `mise trust` once, then:

| Command | What it does |
|---|---|
| `mise run dev` | Local dev server with live reload — http://localhost:8000 |
| `mise run build` | Build the static site into `site/` |
| `mise run preview-build` | Build, then serve the exact static output (what GitHub Pages will deploy) |
| `mise run clean` | Remove `site/` and the Zensical cache |
| `mise run deploy` | Verify the build locally, push, and watch the live deploy through to completion |

Without mise, the equivalent raw commands are `uv run zensical serve` and `uv run zensical build --clean`.

## Structure

- `zensical.toml` — site config, nav, theme, palette, `site_url`
- `docs/` — page content (Markdown)
- `docs/writing/` — articles (one file per post, listed on `docs/writing/index.md`)
- `overrides/home.html` — custom homepage template
- `docs/stylesheets/extra.css` — design system (palette, monospace stat/tag styles)
- `.github/workflows/docs.yml` — builds and deploys to GitHub Pages on push to `main`/`master`

## Deployment

Live at **http://www.rafikmammeri.com** (HTTPS pending — GitHub is still provisioning the certificate; "Enforce HTTPS" will be turned on once it's ready). Repo: [github.com/rafik-mammeri/rafikmammeri.com](https://github.com/rafik-mammeri/rafikmammeri.com). Pages source is "GitHub Actions"; the workflow (`.github/workflows/docs.yml`) builds and deploys on every push to `main`. DNS (Porkbun) points the apex to GitHub Pages' A/AAAA records (redirecting to `www`) and `www` CNAMEs to `rafik-mammeri.github.io`.

`mise run deploy` (see Commands above) is the day-to-day path from a local change to it being live.
