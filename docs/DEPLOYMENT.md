# Deployment

## Current status: live on Vercel

Deployed via `create_git_project`, linked directly to [github.com/ak01redwan/aqar-landing-page](https://github.com/ak01redwan/aqar-landing-page) — every push to `main` auto-deploys (Vercel auto-detected the Vite framework, no manual build config needed).

**Live URL: https://aqar-landing-page.vercel.app**

That URL is real and used throughout the site's own metadata (canonical, hreflang, OG, JSON-LD, `robots.txt`, `sitemap.xml`) — it replaced the original `novixa-aqar.example` placeholder once the deployment confirmed it was live and stable. No further action needed for the marketing site's own domain unless a custom domain is connected later (Vercel project settings → Domains).

## Still a placeholder: the app origin

`https://app.novixa-aqar.example` is hardcoded directly into every `href`/`action` in `ar/index.html` and `en/index.html` that points at dynamic functionality (search, browse, submit-property, news, about, contact, login, register, terms, privacy). This is **intentional and confirmed with the product owner**: the real Novixa Aqar Laravel app is not yet publicly hosted anywhere, so there is nothing real to link to yet.

It uses the IANA-reserved `.example` TLD specifically so it can never accidentally resolve to a real, unrelated site if clicked before the swap.

**When the app goes live:** find-and-replace `app.novixa-aqar.example` → the real app host across `ar/index.html` and `en/index.html` (no config file — see `docs/PLANNING.md` for why hrefs are hardcoded rather than JS-injected), then `npm run build`, commit, and push. Vercel redeploys automatically.

## Branding decision to confirm

`docs/PLANNING.md` §2 documents a judgment call: this page markets the "Novixa Aqar" platform brand, not the currently-seeded "Dar Hadhramaut Real Estate" tenant. **Still worth confirming with whoever owns the product** — if wrong, the brand name, OG images (`public/images/og/*.jpg`, regenerate via `npm run gen:favicons` after editing `scripts/generate-favicons.mjs`), and JSON-LD `Organization` blocks in both HTML files all need updating. Nothing about this blocks the current deployment; it's a "confirm, don't assume forever" item.

## Checklist status (spec §89)

### Domain
- [x] DNS/HTTPS — handled automatically by Vercel
- [x] Canonical host decided — `aqar-landing-page.vercel.app` (no `www`/apex ambiguity on a `.vercel.app` subdomain)

### Application
- [ ] `app.novixa-aqar.example` hrefs updated once the real app is publicly deployed (see above — the one remaining placeholder)
- [x] Marketing site's own domain is real and live
- [x] `npm run build` produces `dist/` with no errors
- [x] `npm run gen:favicons` re-run after the domain swap (OG images had the old placeholder baked into their pixels — a plain text find-and-replace doesn't touch rasterized images, so this step is easy to forget)

### SEO
- [x] `robots.txt` live at `/robots.txt`, points to the real sitemap
- [x] `sitemap.xml` live at `/sitemap.xml`, both real pages, correct hreflang
- [x] Canonical/hreflang URLs use the real production host
- [x] `og:url` / `og:image` use the real production host

### Search Console — not yet done
- [ ] Verify the domain/property
- [ ] Submit `sitemap.xml`
- [ ] Inspect `/ar` and `/en` via URL Inspection

This needs a Google account tied to the domain and isn't something that can be done from this environment — flagging it as the next real step, not deferring it silently.

## Hosting details

Static build (`dist/` after `npm run build`), served by Vercel's static/edge network — no server runtime, no environment variables. Vercel project: `aqar-landing-page` under the `ak01redwans-projects` team, linked to the GitHub repo's `main` branch as the production branch.
