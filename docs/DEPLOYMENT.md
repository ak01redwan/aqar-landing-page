# Deployment checklist

## Before this goes on a real domain

The whole site uses a single placeholder domain, chosen deliberately (spec §31: "Replace all placeholders with the real production host after the domain is known... never allow localhost or an old staging origin into canonical, OG, sitemap, or structured data"):

- **Marketing site placeholder:** `https://novixa-aqar.example` — appears in every `<link rel="canonical">`, `hreflang`, `og:url`, `og:image`, JSON-LD `url`, `public/robots.txt`, and `public/sitemap.xml`.
- **App placeholder:** `https://app.novixa-aqar.example` — appears in `src/js/site-config.js` (`APP_ORIGIN`) and is duplicated directly into every `href`/`action` in `ar/index.html` and `en/index.html` (deliberately not JS-injected, so links work with JavaScript disabled — see spec §9/§67 on not depending on JS for crawlable content).

**Both need a global find-and-replace before launch.** There is no build-time templating step for the HTML `href`s on purpose (see `docs/PLANNING.md` — static HTML with real hrefs was chosen over a template layer for a 2-page site). Search both locale files for `novixa-aqar.example` and replace with the real hosts.

## Branding decision to confirm

`docs/PLANNING.md` §2 documents a judgment call: this page markets the "Novixa Aqar" platform brand, not the currently-seeded "Dar Hadhramaut Real Estate" tenant. **Confirm this with whoever owns the product before launch** — if wrong, the brand name, OG images (`public/images/og/*.jpg`, regenerate via `npm run gen:favicons` after editing `scripts/generate-favicons.mjs`), and JSON-LD `Organization` blocks in both HTML files all need updating.

## Standard checklist (spec §89)

### Domain
- [ ] DNS points to the hosting target
- [ ] HTTPS active
- [ ] `www` vs. apex decided and redirected consistently

### Application
- [ ] `APP_ORIGIN` in `site-config.js` and all hardcoded `app.novixa-aqar.example` hrefs updated to the real app host
- [ ] Marketing site's own placeholder domain updated everywhere (see above)
- [ ] `npm run build` produces `dist/` with no errors
- [ ] `npm run gen:favicons` re-run if the logo changed

### SEO
- [ ] `robots.txt` reachable at `/robots.txt`
- [ ] `sitemap.xml` reachable at `/sitemap.xml`, uses the real production host
- [ ] Canonical/hreflang URLs use the real production host, not the placeholder
- [ ] `og:url` / `og:image` use the real production host (social platforms cache aggressively — verify with each platform's debugger after the domain swap)

### Search Console
- [ ] Verify the domain/property
- [ ] Submit `sitemap.xml`
- [ ] Inspect `/ar` and `/en` via URL Inspection

## Hosting

This is a static build (`dist/` after `npm run build`) — any static host works (Vercel, Netlify, Cloudflare Pages, S3+CDN, or served from the same box as the app under a different vhost). No server runtime, no environment variables required beyond what's baked into the HTML at edit time.
