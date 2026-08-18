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
| `mise run deploy` | Push current branch — GitHub Actions builds and publishes to Pages |

Without mise, the equivalent raw commands are `uv run zensical serve` and `uv run zensical build --clean`.

## Structure

- `zensical.toml` — site config, nav, theme, palette, `site_url`
- `docs/` — page content (Markdown)
- `docs/writing/` — articles (one file per post, listed on `docs/writing/index.md`)
- `overrides/home.html` — custom homepage template
- `docs/stylesheets/extra.css` — design system (palette, monospace stat/tag styles)
- `.github/workflows/docs.yml` — builds and deploys to GitHub Pages on push to `main`/`master`

## Deployment

Custom domain: **www.rafikmammeri.com** (see `docs/CNAME`). GitHub Pages via GitHub Actions is configured but **not yet connected** — this repo hasn't been pushed to GitHub yet.

To go live:

1. Create a repo on GitHub (any name — the custom domain means the repo name no longer affects the URL) and push this project to it
2. In the repo's Settings → Pages, set Source to "GitHub Actions"
3. In the same Settings → Pages screen, set the custom domain to `www.rafikmammeri.com` (GitHub reads `docs/CNAME` automatically once the site is deployed, but the domain still needs to be entered/verified once in the Pages UI) and enable "Enforce HTTPS" once the certificate provisions
4. At your domain registrar, point DNS for `www` to `<github-username>.github.io` via a CNAME record (and, if you also want the bare `rafikmammeri.com` to work, add the GitHub Pages A/AAAA records for apex domains — see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
5. The next push to `main`/`master` triggers the workflow and publishes the site
