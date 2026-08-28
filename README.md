# Novixa Aqar — Landing Page

The public marketing/SEO landing experience for **Novixa Aqar**, a bilingual (Arabic-first RTL / English LTR) real-estate discovery platform for Yemen.

This is a small, fast, standalone static site — **not** a copy of the main Laravel application. It exists to give Aqar a crawlable, sub-second-loading front door, and it hands every dynamic action (search, listings, submitting a property, news, auth) off to the real application. See [`docs/PLANNING.md`](docs/PLANNING.md) for the reasoning behind that split.

Built against [`AQAR_LANDING_PAGE_MASTER_SPEC.md`](AQAR_LANDING_PAGE_MASTER_SPEC.md), the 91-section spec this repo was commissioned from.

## Read this first

- [`docs/PLANNING.md`](docs/PLANNING.md) — why a separate static site, architecture decisions, and a documented branding call you should sanity-check
- [`docs/CONTENT_MODEL.md`](docs/CONTENT_MODEL.md) — every section on the page, what's real vs. deferred, and where each fact came from
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — tokens, typography, components, and where the brand values were verified against the real app
- [`docs/QA_REPORT.md`](docs/QA_REPORT.md) — the final QA pass (responsive, RTL/LTR, accessibility, SEO, performance)
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — what to change before this goes on a real domain

## Stack

Plain HTML + Tailwind CSS v4 + a few lines of vanilla JS, built with Vite. No framework, no server runtime — the output is static files.

- `vite` — dev server + build
- `@tailwindcss/vite` + `tailwindcss` — CSS-first design tokens (no `tailwind.config.js`, see `src/styles/main.css`)
- `sharp` + `png-to-ico` — generates the favicon set and OG images from the real brand SVG at build time (dev dependency only, not shipped)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5183
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

Regenerate the favicon/OG image set (only needed if `public/images/logo.svg` changes):

```bash
npm run gen:favicons
```

## Structure

```text
ar/index.html         Arabic homepage (primary locale)
en/index.html         English homepage
index.html            Language chooser + redirect (noindex)
src/styles/main.css   Design tokens (@theme) + component classes
src/js/main.js        Mobile nav drawer + header elevation (progressive enhancement only)
public/               robots.txt, sitemap.xml, favicons, OG images, manifest
scripts/               Favicon/OG image generator
docs/                  Planning, content model, design system, QA, deployment docs
```

## A note on scope

This repo ships two pages (`/ar`, `/en`) on purpose. The master spec describes a much larger public site — property listings, detail pages, news, about, contact, legal pages. **All of those already exist and work in the real application** (confirmed by reading its routes directly — see `docs/CONTENT_MODEL.md`), so this landing page links to them rather than rebuilding them as static pages with no backing data. Duplicating them here would mean either faking content (explicitly forbidden by the spec) or drifting out of sync with the real product.
