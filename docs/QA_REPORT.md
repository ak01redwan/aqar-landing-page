# Aqar Landing Page — Final QA

Format per master spec §88. Run against the local build (`npm run build` + `npm run preview`), 2026-08-28.

## 1. Implemented

- Bilingual homepage: `/ar` (primary) and `/en`, distinct self-canonicalizing URLs with `hreflang` alternates
- Root `/` language chooser with `noindex` + JS redirect by `navigator.language`, working links for no-JS clients
- Semantic HTML5 structure: skip link, `<header>`/`<nav>`, one `<main>`, `<footer>`, one `<h1>` per page, logical `h2`→`h3` hierarchy in every section
- Hero with real product copy (eyebrow line copied verbatim from the live app), functional GET search form wired to the real app's actual query parameters (`search`, `status`, `property_type`)
- Property-type shortcuts (5 real categories, deep-linked)
- Featured properties as an honest editorial section (no fabricated listings) + CTA to the real properties page
- Why Aqar (4 pillars, all describing real, confirmed app capabilities)
- How it works (3 steps, all real supported actions)
- Owner CTA linking to the real submit-property and property-request routes
- Trust section (moderation claim is real — the app has a submission review workflow)
- News teaser + CTA to the real news route
- Final CTA
- Footer with real crawlable links to every confirmed real route, language switcher, "Powered by Novixa" link
- Full SEO head: title, description, canonical, hreflang×3, robots, OG (incl. generated 1200×630 images), Twitter card, JSON-LD `Organization` + `WebSite`
- `robots.txt`, `sitemap.xml` (both real pages, hreflang-annotated)
- Full favicon/icon/manifest set generated from the real brand SVG
- Mobile nav drawer: focus trap, Escape-to-close, focus restoration, `aria-expanded` state — verified via direct DOM/event testing (see §10)
- `prefers-reduced-motion` support
- Logical CSS properties throughout (no hardcoded left/right)

## 2. Deferred (with reasons)

| Item | Reason |
|---|---|
| Location/area discovery section (§14) | No confirmed real "popular cities" aggregate page — see `docs/CONTENT_MODEL.md` |
| Interactive map (§66) | No confirmed public map data endpoint reachable from a static site |
| Featured properties as live card grid | No database/API access from this static site; shipped as editorial section instead of fake cards |
| News article preview cards | Same reasoning; shipped as teaser + CTA |
| `property_type` filter value verification | Inferred from translation keys, not confirmed byte-for-byte against the real `<select>` — flagged in `docs/CONTENT_MODEL.md`, worst case is a non-fatal missing pre-filter |

## 3. Responsive QA

Verified via `resize_window` (375×812 mobile) plus DOM inspection at desktop width (1280×720): desktop nav hides and the mobile menu button appears at the `lg` breakpoint; hero search grid, property-type grid, and card grids use responsive Tailwind breakpoints (`sm:`/`lg:`) reflowing from 1-column to multi-column. Full physical-device matrix (320/768/1440/1920) was not visually screenshotted in this session (the sandboxed browser pane doesn't support screenshot capture here) — layout was verified structurally and via the accessibility tree at two breakpoints; a real-device/Lighthouse pass before launch is still recommended.

## 4. RTL/LTR QA

- `ar/index.html`: `<html lang="ar" dir="rtl">`, Cairo font applied, page renders and reads correctly (confirmed via `get_page_text` — Arabic text shapes and orders correctly, verified separately that the SVG/PNG rasterizer used for OG images shapes Arabic glyphs correctly too)
- `en/index.html`: `<html lang="en" dir="ltr">`, Outfit font applied
- Logical Tailwind utilities (`ps-`/`pe-`/`ms-`/`me-`/`start-`/`end-`, `inset-inline-start`) used throughout instead of physical `left`/`right`
- Directional mirroring (`[data-mirror-rtl]`) scoped to the one icon that carries directional meaning, not applied globally

## 5. Accessibility QA

- Skip link present, becomes visible on focus (`.skip-link:focus`)
- All nav landmarks labelled (`aria-label`/`aria-labelledby`)
- Mobile drawer: focus trap (Tab/Shift+Tab cycle verified via `javascript_tool` DOM event dispatch), Escape closes and restores focus, `aria-expanded` toggles correctly — all confirmed programmatically in this session
- Form inputs have real associated `<label for>` elements, not placeholder-only labels
- Decorative images (logo icon next to visible wordmark, hero illustration) use `alt=""` / `aria-hidden="true"`; no informative image lacks alt text
- `:focus-visible` outline defined globally (2px solid brand blue, 2px offset)
- Color contrast checked by calculation (WCAG relative-luminance formula), not just assumption:
  - White text on brand blue `#2563EB` button: **5.17:1** (passes AA for normal text, ≥4.5:1 required)
  - Secondary text `#475569` on white: **7.59:1** (passes AAA, ≥7:1)
  - White text on navy `#0F172A`: >15:1 (passes AAA)
- `prefers-reduced-motion: reduce` collapses all transitions/animations
- No automated axe/Lighthouse accessibility audit was run in this session (no such tool available here) — the above were checked directly; a Lighthouse/axe pass is still recommended before launch

## 6. SEO QA

- Unique `<title>` and meta description per page (AR ≠ EN, not machine-translated 1:1)
- `rel="canonical"` present and absolute on every indexable page; root `/` is `noindex` (it's a redirect utility, not content)
- `hreflang` triplet (ar/en/x-default) present and mutually consistent across both pages and the sitemap
- `robots.txt` present, `Allow: /`, points to `sitemap.xml`
- `sitemap.xml` present, absolute URLs, hreflang-annotated, only the two real indexable pages included
- No `localhost` anywhere in shipped metadata (placeholder domain used throughout, documented in `docs/DEPLOYMENT.md` as required pre-launch find-and-replace)

## 7. Structured data QA

- `Organization` JSON-LD: `name`, `alternateName` (AR only), `url`, `logo`, `sameAs` (novixa.dev, confirmed real) — no invented fields (no fabricated address/phone/rating)
- `WebSite` JSON-LD: `name`, `url`, `inLanguage` — no `SearchAction` included (deliberately; see `docs/CONTENT_MODEL.md`, the exact search URL contract wasn't confirmed with enough certainty to publish as structured data)
- JSON strings are hand-verified valid JSON (both blocks); not run through Google's Rich Results Test in this session (requires a public URL) — recommended post-deploy per `docs/DEPLOYMENT.md`

## 8. Social/OG QA

- `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image`, `og:image:alt`, `og:locale`(+alternate) present on both pages
- `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image` present
- OG images generated at the correct 1200×630 canvas, real brand mark + real Arabic/English tagline text (rendering verified visually in this session), JPEG-compressed
- No `twitter:site` handle included (no confirmed real handle — not invented)

## 9. Performance QA

- Production build output: **23.9 KB CSS / 2.1 KB JS (gzipped: 5.4 KB / 0.9 KB)** — from `npm run build` output, not estimated
- Zero render-blocking third-party scripts; only Google Fonts (preconnected) as an external dependency
- Hero visual is inline SVG (zero network requests, zero layout shift risk) instead of a raster hero image
- No JS framework; the only JS is progressive-enhancement (mobile drawer, header elevation) — page content and search form work with JavaScript disabled
- No formal Lighthouse/PageSpeed/WebPageTest run in this session (needs a public URL or a full browser automation pass not available in this sandbox) — recommended immediately post-deploy per `docs/DEPLOYMENT.md`; given the near-zero JS/CSS payload and static-HTML delivery, Core Web Vitals targets (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1) are expected to be comfortably achievable but not yet measured

## 10. Browser console/network QA

- Verified in a live preview (`vite dev` + browser automation): zero console errors, zero failed network requests on both `/ar/` and `/en/` (checked via `read_console_messages` and `read_network_requests`)
- All linked assets (CSS, JS, logo SVG, Google Fonts) resolved with 200/304 status
- Mobile drawer open/close state transitions verified via direct DOM inspection (see §5)

## 11. Test results

No automated test suite exists for this static site (none was warranted for the current scope — no application logic beyond the mobile-nav script). The real application's own test suite (553 passed / 0 failed / 32 skipped per its `CLAUDE.md`) is unaffected — this repo makes zero changes to that codebase.

## 12. Files added/changed

New repository. See `git log` for the full commit history; every commit is scoped and described individually rather than one large initial commit.

## 13. Manual deployment steps

See `docs/DEPLOYMENT.md` in full. Summary: replace the two placeholder domains (marketing site + app) everywhere they appear, confirm the Novixa-Aqar-vs-Dar-Hadhramaut branding decision with the product owner, then deploy `dist/` to any static host.

## 14. Remaining risks

- **Branding decision unconfirmed** — see `docs/PLANNING.md` §2. Low effort to reverse if wrong (centralized brand strings + regenerable OG images), but should be confirmed before real traffic hits this page.
- **`property_type` filter values not byte-verified** — see `docs/CONTENT_MODEL.md`. Non-fatal if wrong (lands on a working page, filter just doesn't pre-apply).
- **No live Lighthouse/axe/Rich-Results run** — this sandbox can't reach a public URL or run a full Lighthouse trace; strongly recommended immediately after first deploy, before considering this fully launch-verified.
- **Locale handoff to the app is best-effort** — see `docs/PLANNING.md` §4; the app's own session-based locale may not always match the landing page locale the visitor came from.

## 15. Final verdict

**LANDING PAGE READY WITH FIXES**

The page is structurally complete, accessible, fast, honest about real vs. deferred content, and every dynamic link points to a route confirmed to exist in the real application. It is not marked fully "ready for demo" only because of the two pre-launch items that need a human decision/verification (branding confirmation, property-type value spot-check) and the standard post-deploy Lighthouse/Rich-Results pass that requires a public URL this sandbox doesn't have — none of these block a demo, but they should be closed out before treating this as production-final.
