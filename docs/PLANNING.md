# Planning & decisions

This document records the judgment calls made while turning the 91-section master spec into a real, shippable build — and *why* — so a future editor (human or AI) doesn't have to re-derive them.

## 1. Why a separate static site, not Blade/Livewire in the main app

The spec (§73–74) describes the landing page in terms of the app's own Laravel/Blade/Livewire/Tailwind architecture, and §6 says: "preserve the established canonical architecture rather than creating a second routing system."

The real app (`aqar-project/aqar/`) already **has** a working public site — home page, property search/browse/detail, submission flow, news, about, contact, terms, privacy (confirmed by reading `routes/web.php` and `resources/views/home.blade.php` directly). It doesn't need a landing page bolted onto it; it needs a fast, dedicated **marketing front door** that can be iterated on, cached, and deployed independently of the app's release cycle — a common and deliberate split (marketing site vs. app), not an accidental second stack.

Given that, and given this repo lives in its own directory with its own git history, a small static site (Vite + Tailwind, no framework, no server runtime) is the right tool: it satisfies the spec's own performance section (§44–47: near-zero JS, no unnecessary framework weight) better than shoehorning Blade into a repo that has no Laravel app behind it, and it avoids the alternative of copying large parts of the real app into a public repo.

**Every dynamic action hands off to the real app** — every `href`/`action` in `ar/index.html` and `en/index.html` points at a real, verified route on the app's origin (see `docs/CONTENT_MODEL.md`). Nothing here talks to a database or fakes one. As of this deployment the app itself isn't publicly hosted yet, so that origin is still the documented placeholder in `docs/DEPLOYMENT.md` — a known, tracked gap, not an oversight.

## 2. The branding call: "Novixa Aqar" vs. "Dar Hadhramaut Real Estate"

This needed a decision the spec didn't anticipate. Auditing the real app turned up a genuine discrepancy:

- The **platform/package identity** is "Novixa Aqar" — `config/app.php`, `package.json`, `composer.json` (`novixa/aqar`), the README, the footer's "Powered by Novixa Aqar" credit, and the terms page's IP-ownership clause all agree on this.
- The **live seeded tenant** currently displays as "**دار حضرموت العقارية / Dar Hadhramaut Real Estate**" — the `<title>`, meta description, `GeneralSettings::$site_name`, and the footer brand text are all hardcoded to that name. That's because the app is architected as a white-label platform, and the demo/seed data happens to be one tenant (a Mukalla/Hadhramaut-based agency).

**Decision: this landing page markets the Novixa Aqar platform**, not the Dar Hadhramaut tenant. Reasoning:
- The master spec's own title is "Novixa Aqar — Professional Landing Page..." and it refers to the product as "Aqar (Novixa Aqar)" throughout §0–3.
- This repo is named `aqar-landing-page`, not `dar-hadhramaut-landing-page`.
- The platform identity is the one that's stable across tenants; the seeded tenant name is demo data that could change tomorrow.

**This is a judgment call, not a confirmed fact — flag it to whoever owns the product before this goes live.** If the intent was actually to market the live Dar Hadhramaut storefront, the brand name, OG images, and JSON-LD `Organization` block all need to change (they're centralized enough that this is a quick edit, not a rebuild).

## 3. Why no property/news/terms/privacy pages were built here

Early planning assumed this repo would need stub pages (`/properties`, `/terms`, `/privacy`, etc.) with "coming soon" placeholders, on the theory that the app might not have them yet. The app audit (see `docs/CONTENT_MODEL.md`) showed that assumption was wrong — every one of those routes already exists and works in the real app. Building parallel static stubs would have been strictly worse than linking to the real thing: more surface area to keep in sync, and a worse experience (a dead end instead of a working page). So the landing page links directly to the real app for all of it.

## 4. Locale routing: distinct URLs here, even though the app doesn't do that

The real app switches Arabic/English via a session cookie (`GET /lang/{locale}`) on a single URL — no `/ar`/`/en` prefix. The master spec explicitly calls this pattern out as something to avoid for SEO (§33: "Do not switch languages only using cookies or a client-side toggle on one URL").

Since this landing page is a separate surface whose whole job is getting SEO right, it uses **distinct, self-canonicalizing `/ar` and `/en` URLs with `hreflang` alternates** (§30–34), rather than copying the app's cookie-based approach. This is a deliberate divergence from "match the existing app," justified because the spec itself flags the app's approach as an anti-pattern for exactly this surface.

One consequence worth knowing: a visitor who lands on `/ar` and clicks through to the app doesn't carry a locale parameter with them — they get whatever the app's own session default resolves to (Arabic, per `GeneralSettings::$site_default_language`). Good enough for v1; if this becomes a real problem, the fix belongs in the app (accepting a locale query param on entry), not here.

## 5. Featured properties & news: editorial, not fake

The spec is explicit and repeated (§2.7, §11, §56): no fake listings, no fake counts, no placeholder cards dressed up as real data. This site has no database access, so:
- **Featured properties** is an editorial section (real copy, real "browse all" CTA to the app) — not a card grid with invented properties.
- **News** is a one-line teaser + CTA to the app's real `/news` — not fabricated article previews.

If/when the app exposes a public JSON endpoint for featured properties or recent articles, that's the integration point for turning these into real card grids — see `docs/CONTENT_MODEL.md` for the details. No such endpoint exists today.

## 6. Deferred sections

Two spec sections were dropped rather than built with weak justification:

- **§14 Location/area discovery** — the app has real geo fields (`latitude`/`longitude`, `neighborhood_id`, proximity search) but no confirmed "popular cities" aggregate page to link to. Rather than invent one, this section is omitted.
- **Interactive map (§66)** — same reasoning; no confirmed public map endpoint for this static site to call.

Both can be added later without restructuring anything else on the page.
