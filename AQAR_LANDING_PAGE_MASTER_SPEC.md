# Novixa Aqar — Professional Landing Page & Public Web Experience Master Specification

**Document type:** Product + UX + UI + frontend + SEO + performance + accessibility + release specification  
**Audience:** Claude Code / senior frontend engineer / senior product designer / SEO engineer  
**Product:** Aqar (Novixa Aqar)  
**Primary market:** Yemen-first real-estate discovery and property platform  
**Primary language:** Arabic (RTL)  
**Secondary language:** English (LTR)  
**Status:** Build specification for the public-facing marketing/landing experience  
**Date:** 2026-08-28

---

## 0. EXECUTIVE DIRECTIVE TO CLAUDE

Build the Aqar public landing experience as a **real product website**, not as an AI-generated template, generic SaaS landing page, or decorative one-page mockup.

The page must feel like a trustworthy, modern real-estate product designed by a senior product designer for a real Yemen-first company. It must be useful before it is flashy, conversion-oriented without being pushy, visually distinctive without gimmicks, and technically excellent.

The implementation must be driven by the real Aqar application's existing architecture, data model, routes, branding, localization, and capabilities. **Do not invent unsupported product features, numbers, integrations, reviews, awards, listings, offices, agents, or performance claims.** When the existing application does not provide proof for a claim, use neutral product language or a clearly marked content placeholder rather than fabricating evidence.

The landing page should make a visitor understand, within seconds:

1. What Aqar is.
2. Who it is for.
3. What problem it solves.
4. What the visitor can do immediately.
5. Why Aqar is trustworthy.
6. Where to go next.

The core goal is to move visitors naturally from **discovery → confidence → property exploration → action**.

Do not optimize for visual novelty at the expense of usability. Do not copy another website. Study current best practices and borrow principles, not visual identity.

---

# 1. WHY WE ARE BUILDING THIS

Aqar's public website should act as the first and strongest product impression for people discovering the platform through direct visits, search engines, social posts, shared property links, and referrals.

The landing experience therefore has several jobs at once:

- Explain the product instantly.
- Establish trust around a high-consideration category (real estate).
- Help users start searching with minimal friction.
- Showcase the quality and breadth of available inventory without faking inventory.
- Explain the value for different user types.
- Provide clear paths to actual product pages.
- Support Arabic-first RTL usage beautifully.
- Remain excellent in English LTR.
- Generate crawlable, indexable, shareable HTML.
- Load extremely quickly, especially on mobile and lower-bandwidth connections.
- Serve as a stable foundation for future SEO growth.

Aqar is not being presented as a generic property-listing clone. The experience should communicate a deliberate local product identity: modern, calm, practical, trustworthy, and adapted to real users in Yemen.

---

# 2. NON-NEGOTIABLE PRODUCT PRINCIPLES

## 2.1 Clarity over decoration

Every visual element must earn its place. Remove anything that does not improve comprehension, trust, navigation, discovery, or conversion.

## 2.2 Product-first, not marketing-first

Show the real product experience. The user should quickly reach real properties, search, neighborhoods/areas if available, and authentic product flows.

## 2.3 Trust is a design feature

Real estate decisions involve money, time, family, and risk. Visual hierarchy, language, photography, data clarity, contact pathways, and transparency are more important than flashy animations.

## 2.4 Arabic-first is structural

RTL is not a CSS afterthought. Direction, icon mirroring, content alignment, spacing, data ordering, pagination, breadcrumbs, forms, drawers, cards, and navigation must all work naturally in RTL.

## 2.5 Progressive disclosure

Show the few things needed now. Reveal secondary information when the visitor has a reason to need it.

## 2.6 One primary action per section

Avoid sections with five competing CTAs. Establish a dominant action and one secondary route when needed.

## 2.7 Real content only

Do not use fake testimonials, fake activity counters, fake user counts, fake market statistics, fabricated logos, invented partner companies, placeholder review scores, or fake urgency.

## 2.8 No generic AI aesthetic

Avoid:

- excessive gradients
- glassmorphism everywhere
- giant abstract blobs
- random 3D shapes
- oversized glowing borders
- meaningless floating cards
- repetitive icon boxes
- overanimated sections
- copied startup/SaaS layouts
- decorative text with weak information architecture
- excessive rounded rectangles
- huge centered hero copy with nothing useful beside it

The design should feel intentional and product-specific.

---

# 3. BRAND DIRECTION

Use the existing Aqar/Novixa branding already present in the project. Do not invent a second visual identity.

Known Novixa brand direction from the product context:

- Primary blue: `#2563EB`
- Secondary deep navy: `#0F172A`
- Accent teal: `#14B8A6`
- White/light surfaces
- Avoid gradients as a dominant visual device.
- Avoid mascots and 3D-heavy visuals.

If the current repository contains a newer or more authoritative brand token system, **that repository source wins**. Before editing, inspect existing CSS variables, design tokens, logos, icon usage, fonts, and brand assets.

The visual personality should be:

**Trustworthy · Modern · Local · Precise · Calm · Useful · Premium without luxury clichés**

Do not make Aqar look like a finance dashboard or a generic real-estate marketplace copied from a US template.

---

# 4. USER SEGMENTS

The landing page must serve multiple audiences without becoming vague.

## Primary visitor

A person who wants to find a property in Yemen and needs a fast path to relevant listings.

## Secondary visitors

- Buyers and renters comparing properties.
- Property owners/landlords considering listing or managing properties.
- Agents or professional real-estate participants, where supported by the product.
- Returning users who arrive directly on a property detail page.
- Search visitors arriving from Google.

The design should allow each audience to self-select without adding a complicated role selector to the first viewport.

---

# 5. PRIMARY CONVERSION MODEL

The most important public-site conversion should be **property discovery**.

Recommended primary CTA language in Arabic should be based on the application's real terminology, for example:

- `ابحث عن عقار`
- `استكشف العقارات`
- `ابدأ البحث`

Use the exact product wording that best matches existing UI labels.

Secondary actions can include:

- Browse all properties.
- List a property, if the public flow exists and is ready.
- Sign in.
- Create account.
- Learn how Aqar works.

Do not place registration as the dominant CTA if visitors can immediately search and explore without an account.

---

# 6. LANDING PAGE INFORMATION ARCHITECTURE

Recommended public home route:

- Arabic: `/ar`
- English: `/en`

If the existing application uses another locale-routing convention, preserve the established canonical architecture rather than creating a second routing system.

Recommended home-page section order:

1. Announcement / trust microbar (optional, only if meaningful)
2. Global header/navigation
3. Hero + primary property-search interface
4. Fast category/type shortcuts
5. Curated/featured properties or real inventory showcase
6. Why Aqar / value proposition
7. How it works
8. Location/area discovery, only if supported by real data
9. Property-owner / agent pathway, only if supported
10. Trust / platform proof
11. Latest properties or useful content
12. Final CTA
13. Footer

The exact sequence can be adjusted after inspecting current product data, but the experience must preserve a clear discovery path.

---

# 7. HEADER / GLOBAL NAVIGATION

## Desktop

Create a compact, high-confidence header.

Recommended structure:

- Aqar logo mark + wordmark.
- Primary navigation based on real routes, not invented pages.
- Search/properties shortcut.
- Language switcher Arabic/English.
- Auth action(s).
- Optional owner/list-property CTA if the feature is available.

Do not overcrowd the header.

Use a sticky header only if it improves navigation. If sticky, keep it compact and avoid a large persistent panel consuming mobile viewport height.

## Mobile

Use a simple mobile navigation pattern:

- Logo.
- One primary action/search affordance.
- Menu button.

Do not make the mobile header a mini desktop navbar squeezed into 375px.

## Accessibility

Use semantic `<header>` + `<nav>` elements.

Provide a visible-on-focus skip link to `<main>`.

All menu buttons must have accessible labels.

Keyboard navigation must work.

Focus must remain visible.

Do not use clickable `<div>` elements where a native `<button>` or `<a>` is appropriate.

Reference: web.dev recommends semantic landmarks such as `header`, `nav`, `main`, and `footer`, and notes that semantic HTML improves navigation for assistive technology.

---

# 8. HERO SECTION — THE MOST IMPORTANT SCREEN

The hero must not be a decorative billboard. It should perform a practical task.

## Objective

Communicate:

**Aqar helps you discover the right property, then immediately let you search.**

## Recommended composition

Desktop:

- Strong Arabic headline on the right in RTL.
- Short supporting copy.
- High-priority search module immediately adjacent/below the message.
- Authentic property photography or a real property/product visual as supporting context.
- Minimal decorative treatment.

Mobile:

- Headline first.
- Supporting sentence.
- Search controls immediately after.
- Visual below search or omitted when it harms speed.

## Search module

The search box should use real fields from the application.

Potential controls, only if actually supported:

- Buy / Rent / status.
- Property type.
- Location / city / neighborhood.
- Keyword.
- Advanced filters.
- Search button.

Avoid a ten-field form in the first viewport.

Use progressive disclosure for secondary filters.

The primary search action should be visually dominant but not giant.

## Hero imagery rules

Use one strong image rather than a collage of stock photos.

Prefer real Aqar property photography from real seeded/application content where legally and technically appropriate.

Do not use an image as a CSS background when an `<img>`/`<picture>` gives better performance and accessibility.

The LCP image must be deliberately optimized and must not be lazy-loaded if it is the primary above-the-fold visual.

For responsive image delivery, use `srcset`/`sizes` or the framework's equivalent, and reserve width/height/aspect-ratio to reduce layout shift.

Reference: web.dev recommends responsive images, careful use of `fetchpriority="high"` for truly critical images, and avoiding blanket preloading.

---

# 9. SEARCH EXPERIENCE

The landing page search is a core product interaction, not a decorative form.

## Interaction rules

- Clear labels.
- Large enough tap targets.
- Keyboard-friendly.
- Enter submits when reasonable.
- Never lose typed values on validation failure.
- Preserve relevant search state in URL parameters.
- Use real filter names from backend/query-string bindings.
- Do not expose unsupported filter options.
- Loading state must be visible without shifting layout.
- Error state must explain what happened.
- Empty state must give useful next actions.

## URL behavior

Search URLs should be shareable and crawl policy should be deliberate.

Not every filter combination needs to be indexed. Avoid creating an effectively infinite SEO crawl space from combinations of filter URLs.

Google explicitly recommends considering crawl management for dynamic/faceted navigation that can create large or infinite URL spaces.

Use canonicalization/indexing rules intentionally rather than blocking everything blindly in `robots.txt`.

---

# 10. PROPERTY TYPE / CATEGORY SHORTCUTS

Immediately after the hero/search, provide quick discovery routes if real property categories exist.

Examples of conceptual categories:

- Homes
- Apartments
- Villas
- Land
- Commercial
- Offices

Use exact live terminology from the application. Do not invent categories.

UI should be:

- simple
- scannable
- icon + label
- optional count only if the count is real and current

Avoid the common AI-generated pattern of six identical oversized cards with random icons.

Make the visual hierarchy reflect actual product value.

---

# 11. FEATURED / CURATED PROPERTIES

Use a real inventory section only when the database contains appropriate demo/public records.

Recommended presentation:

- Section title.
- Brief contextual description.
- 3–6 strong property cards on desktop.
- Horizontal or stacked adaptation on mobile.
- Clear route to all properties.

## Property card requirements

Each card should prioritize:

1. Image.
2. Price/currency in the product's real locale.
3. Property title or location.
4. Core attributes.
5. Status/type.
6. Strong link to detail page.

Use consistent data formatting.

Do not show empty placeholders that look like missing production data.

Do not show test labels or development categories.

If inventory is sparse, prefer a clean editorial introduction to the real available records rather than filling the page with fake cards.

---

# 12. WHY AQAR

This section explains product value, not generic marketing slogans.

Recommended content pillars:

- Easier property discovery.
- Clear property information.
- Search/filtering designed around user intent.
- Local-first experience.
- Practical access to property details and contact paths.
- Better organization of listings.

Each pillar should have:

- short heading
- concise explanation
- restrained visual cue

Avoid feature-bloated grids.

A maximum of 3–4 core benefits is usually stronger than 8–12 vague benefits.

---

# 13. HOW IT WORKS

Use a simple 3-step explanation.

Suggested structure:

### 01 — Search
Find properties by your needs.

### 02 — Compare / Explore
Open details and evaluate the property.

### 03 — Take action
Use the available contact, inquiry, application, or next-step flow.

Only mention actions actually supported by the application.

Visually, make this feel like a product flow, not a startup pitch.

---

# 14. LOCATION / AREA DISCOVERY

Real estate discovery benefits from geographic discovery.

Include this only if the product has reliable location data.

Possible UI:

- Popular cities.
- Neighborhoods.
- Areas.
- Property density.
- Featured local destinations.

Do not fabricate location popularity numbers.

If there are no trustworthy aggregates, use links to browse actual location routes instead.

---

# 15. FOR PROPERTY OWNERS / AGENTS

A secondary audience section may encourage property owners/landlords/agents to participate.

This section must only be present if a functioning supported workflow exists.

Possible message direction:

> Have a property to publish? Put it in front of people actively looking.

CTA should lead to the real property-submission flow.

Do not promise instant results, guaranteed leads, income, or exposure percentages unless verified and contractually true.

---

# 16. TRUST / CREDIBILITY SECTION

Real-estate websites need confidence signals.

Use trustworthy signals that actually exist:

- company/product identity
- transparent contact route
- verified data or moderation language if genuinely supported
- authentic application screenshots
- clear legal pages
- real address/contact information when public and approved
- real operating organization identity

Avoid:

- fake star ratings
- fake reviews
- invented customer counts
- fake press logos
- fabricated partner badges
- unverified “#1 platform” claims

The best trust signal can be a transparent, polished product itself.

---

# 17. NEWS / CONTENT / SEO DISCOVERY

Aqar already has a news/content area. Use it as a secondary discovery surface if the available content is good enough.

Recommended home-page treatment:

- 3 recent or relevant articles.
- strong title hierarchy.
- localized date formatting.
- featured image only if a real image field/asset exists.
- clear route to article.

Do not force content into the landing page simply to create more sections.

Content exists to help users and improve discoverability, not to increase section count.

---

# 18. FINAL CTA

After the visitor understands the product, repeat the primary action.

Recommended pattern:

- concise value statement
- one primary CTA
- one optional secondary CTA

Avoid repeating the exact hero wording.

The CTA should feel like the natural completion of the page's story.

---

# 19. FOOTER

Build a real information architecture footer.

Recommended columns:

### Product
- Browse properties
- Search
- Relevant product links

### Company
- About, only if a real page exists
- Contact
- News

### Legal
- Privacy
- Terms
- Relevant policies

### Language
- Arabic
- English

### Contact / identity
- approved contact methods
- company/product identity

Footer should expose important crawlable links as real `<a href>` elements.

Do not hide critical links behind JavaScript click handlers.

---

# 20. OPTIONAL ADDITIONAL PUBLIC PAGES

The landing page can be the main marketing surface, but the public site should be architected so these pages can exist cleanly where the product supports them:

- `/ar/properties` and `/en/properties`
- property detail pages
- news listing/detail
- about page, if content is ready
- contact page
- terms
- privacy
- property submission/listing page, if public workflow is ready

**Important:** Every indexable page must have its own metadata, canonical, language annotations, structured data where appropriate, and unique content.

Never reuse the home page's title/description/OG image across unrelated pages.

---

# 21. RESPONSIVE DESIGN SPECIFICATION

The site must be intentionally designed for:

- 320px minimum consideration
- 360px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Do not merely test whether the layout technically fits.

At each breakpoint evaluate:

- information hierarchy
- tap target size
- text wrapping
- search form layout
- navigation density
- image crop
- section rhythm
- footer readability
- language switching
- RTL mirroring

Mobile is not a secondary layout. It is a first-class product experience.

---

# 22. RTL / LTR SYSTEM

Arabic must use:

```html
<html lang="ar" dir="rtl">
```

English must use:

```html
<html lang="en" dir="ltr">
```

Use logical CSS properties instead of physical left/right where possible:

- `margin-inline`
- `padding-inline`
- `inset-inline-start`
- `inset-inline-end`
- logical border radius where appropriate

Check every icon with directional semantics:

- arrows
- chevrons
- breadcrumbs
- progress indicators
- carousel controls
- back/forward icons

Text alignment and number formatting must be intentional.

Do not reverse numeric strings, IDs, phone numbers, or prices incorrectly.

---

# 23. TYPOGRAPHY

Inspect the repository's current font system before adding a new font.

Prefer a high-quality Arabic/Latin font combination already approved by the application.

Rules:

- One clear display hierarchy.
- Strong but not oversized H1.
- Comfortable Arabic line-height.
- Avoid ultra-thin text.
- Avoid overly condensed Arabic display styles.
- Use appropriate letter spacing for Latin, not arbitrary negative spacing everywhere.

Text should remain readable on low-quality displays and mobile devices.

Do not load many font weights if they are not used.

Self-host fonts where licensing permits and use modern WOFF2 assets.

Only preload truly critical font resources, and only after measuring their impact.

---

# 24. DESIGN SYSTEM / UI TOKENS

Before building components, establish or reuse a small token layer.

Tokens should cover:

- colors
- background/surface levels
- text colors
- border colors
- radius scale
- spacing scale
- typography scale
- shadow/elevation
- focus ring
- motion timing
- container widths

Avoid arbitrary values repeated throughout templates.

The visual system should feel coherent across:

- header
- buttons
- cards
- forms
- search
- badges
- dialogs
- mobile drawer
- footer

---

# 25. BUTTONS AND CTAs

Primary button:

- one visual style
- obvious action
- accessible contrast
- appropriate minimum height
- visible focus
- loading state

Secondary button/link:

- visually quieter
- still recognizable

Do not make every link a pill button.

Do not use huge buttons merely to make the page look modern.

---

# 26. FORMS

Every form control needs a real label.

Avoid placeholder-only labels.

Use native semantics whenever possible.

Provide:

- label
- help text when needed
- error text
- invalid state
- disabled state
- loading state
- success feedback

Errors must be understandable in Arabic and English.

Reference: web.dev recommends associated `<label>` elements for form fields and semantic structure for accessibility.

---

# 27. ACCESSIBILITY TARGET

Target **WCAG 2.2 AA** as the design and implementation baseline.

Required checks include:

- keyboard navigation
- visible focus
- semantic landmarks
- logical heading hierarchy
- sufficient color contrast
- meaningful link text
- labels for inputs
- alt text for informative images
- empty alt for decorative images
- no keyboard traps
- accessible dialogs/drawers
- reduced-motion support
- touch target usability
- correct language/direction metadata

Do not add ARIA where native HTML already provides correct semantics.

Use ARIA to clarify custom interactions, not to replace semantic HTML.

---

# 28. MOTION / ANIMATION

Animation should explain hierarchy and provide feedback.

Use subtle motion such as:

- menu transitions
- hover/focus states
- card reveal only when meaningful
- search loading transitions
- section entrance only where it adds clarity

Avoid:

- scroll-jacking
- constant floating objects
- excessive parallax
- giant hero text animations
- animation on every card
- long delays before content is usable

Respect:

```css
@media (prefers-reduced-motion: reduce) { ... }
```

The page must remain excellent with animation disabled.

---

# 29. HTML / DOM STRUCTURE

Use semantic HTML.

Recommended high-level structure:

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <!-- full metadata -->
  </head>
  <body>
    <a class="skip-link" href="#main-content">تخطي إلى المحتوى</a>

    <header>
      <nav aria-label="التنقل الرئيسي">
        <!-- logo + navigation -->
      </nav>
    </header>

    <main id="main-content">
      <section aria-labelledby="hero-title">
        <h1 id="hero-title">...</h1>
        <!-- hero/search -->
      </section>

      <section aria-labelledby="property-types-title">
        <h2 id="property-types-title">...</h2>
      </section>

      <section aria-labelledby="featured-title">
        <h2 id="featured-title">...</h2>
      </section>

      <section aria-labelledby="why-aqar-title">
        <h2 id="why-aqar-title">...</h2>
      </section>

      <section aria-labelledby="how-title">
        <h2 id="how-title">...</h2>
      </section>

      <!-- remaining sections -->
    </main>

    <footer>
      <!-- crawlable navigation -->
    </footer>
  </body>
</html>
```

Rules:

- One meaningful `<h1>` per page.
- Logical H2/H3 hierarchy.
- Do not use heading tags purely for font size.
- Use real anchors for navigation.
- Use buttons for actions.
- Keep meaningful copy in DOM text, not CSS-generated `content`.

Google's developer SEO guidance explicitly recommends semantic HTML and making text content available in the DOM.

---

# 30. SEO — PAGE-LEVEL FOUNDATION

Every indexable page must have:

- unique `<title>`
- unique meta description
- canonical URL
- correct `lang`
- correct `dir`
- hreflang alternates where language variants exist
- robots directives
- Open Graph metadata
- Twitter/X-compatible social metadata
- appropriate structured data
- crawlable internal links
- sitemap inclusion when canonical/indexable

Google recommends descriptive, concise, unique titles and meta descriptions rather than generic page names.

## Homepage Arabic example

```html
<title>عقار | اكتشف العقارات في اليمن بسهولة</title>
<meta name="description" content="اكتشف العقارات المتاحة في اليمن وابحث حسب احتياجك عبر عقار.">
```

Treat the example as a direction, not a final claim. Write final copy based on real product capabilities and keyword research.

## Homepage English example

```html
<title>Aqar | Discover Properties in Yemen</title>
<meta name="description" content="Explore properties in Yemen and find listings that match your needs with Aqar.">
```

Avoid keyword stuffing.

---

# 31. COMPLETE `<HEAD>` SPECIFICATION

For indexable Arabic home page, aim for a head conceptually equivalent to:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#2563EB">

  <title>...</title>
  <meta name="description" content="...">

  <link rel="canonical" href="https://YOUR-DOMAIN.example/ar">
  <link rel="alternate" hreflang="ar" href="https://YOUR-DOMAIN.example/ar">
  <link rel="alternate" hreflang="en" href="https://YOUR-DOMAIN.example/en">
  <link rel="alternate" hreflang="x-default" href="https://YOUR-DOMAIN.example/ar">

  <meta name="robots" content="index,follow">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Aqar">
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:url" content="https://YOUR-DOMAIN.example/ar">
  <meta property="og:image" content="https://YOUR-DOMAIN.example/assets/og/aqar-home-ar.jpg">
  <meta property="og:image:alt" content="...">
  <meta property="og:locale" content="ar_YE">
  <meta property="og:locale:alternate" content="en_US">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="...">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image" content="https://YOUR-DOMAIN.example/assets/og/aqar-home-ar.jpg">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <link rel="sitemap" type="application/xml" href="/sitemap.xml">

  <!-- JSON-LD structured data -->
</head>
```

Important implementation notes:

- Replace all placeholders with the real production host after the domain is known.
- Never allow `localhost` or an old staging origin into canonical, OG, sitemap, or structured data on the public deployment.
- Use absolute canonical URLs.
- Keep the canonical URL aligned with sitemap entries.
- Do not create conflicting canonical signals.

Google states that `rel="canonical"`, sitemap inclusion, and redirects can work together as canonicalization signals, and recommends absolute canonical URLs.

---

# 32. TITLE / DESCRIPTION RULES FOR EVERY PAGE

Create a page metadata map.

Example:

| Page | Arabic title | English title | Description strategy |
|---|---|---|---|
| Home | Aqar + value proposition | Aqar + value proposition | concise product summary |
| Properties | العقارات | Properties | explain searchable inventory |
| Property detail | property name + area + Aqar | property name + area + Aqar | factual property summary |
| News | أخبار عقار | Aqar News | content summary |
| News detail | article title + Aqar | article title + Aqar | article-specific summary |
| Contact | تواصل معنا | Contact Us | real contact purpose |
| Privacy | سياسة الخصوصية | Privacy Policy | legal summary |
| Terms | الشروط والأحكام | Terms & Conditions | legal summary |

Do not blindly copy these labels. Inspect real route names/content.

Google's current guidance emphasizes unique, descriptive page titles and accurate snippets.

---

# 33. CANONICAL / HREFLANG STRATEGY

For Arabic/English variants:

- Each language should have a distinct crawlable URL.
- Self-canonicalize each language page to its own canonical URL.
- Link Arabic ↔ English via `hreflang`.
- Include `x-default` only when it represents the true default/fallback page.
- Ensure the alternate URLs actually exist and are crawlable.

Do not switch languages only using cookies or a client-side toggle on one URL.

Google recommends distinct URLs for language versions and `hreflang` annotations so Search can serve the appropriate language variant.

---

# 34. URL DESIGN

Use clean, stable, human-readable URLs.

Examples of desired conceptual forms:

- `/ar`
- `/en`
- `/ar/properties`
- `/en/properties`
- `/ar/properties/{slug}`
- `/en/properties/{slug}`
- `/ar/news`
- `/en/news`
- `/ar/news/{slug}`
- `/en/news/{slug}`

Do not expose internal database IDs when a stable slug is available.

Do not change existing production URLs unnecessarily.

When existing routes differ, preserve compatible canonical URLs and use redirects where appropriate.

---

# 35. STRUCTURED DATA / JSON-LD

Use JSON-LD, generated from verified application data.

## Homepage

Use an appropriate combination such as:

- `Organization`
- `WebSite`
- `WebPage`

Only include properties that are true and available.

Possible Organization fields:

- name
- alternateName
- url
- logo
- sameAs
- address if public/verified
- telephone if public/verified

Google's Organization structured-data guidance says there are no required properties and recommends adding relevant organization details such as name, URL, logo, and real-world presence where applicable.

## Property listing/detail pages

Use the most appropriate schema.org types that genuinely match the page/content model. Possible candidates include relevant `RealEstateListing`/`Residence`/`Apartment`/`House`/`Place`/`Offer` relationships where supported by Schema.org and by the actual data.

Do not force a schema type simply because it sounds useful. Validate the schema against current Schema.org definitions and Google eligibility rules.

## Breadcrumbs

Use `BreadcrumbList` where the information architecture has meaningful breadcrumb navigation.

## News

Use suitable article/news structured data only where the content really qualifies.

Do not add fake ratings/reviews merely to make a rich result appear.

After implementation, validate JSON-LD with Google's Rich Results Test and Schema.org validation tools where applicable.

---

# 36. OPEN GRAPH / SOCIAL SHARING

Every shareable indexable page should have page-specific OG data.

Required baseline:

- `og:type`
- `og:title`
- `og:description`
- `og:url`
- `og:site_name`
- `og:image`
- `og:image:alt`
- correct locale

For property detail pages, generate an appropriate property image when allowed.

For articles, use the actual article image if one exists.

For pages without imagery, use a branded default OG image.

## OG image requirements

Create a proper social-sharing asset rather than taking a screenshot of the website.

Recommended baseline canvas:

**1200×630px**

Keep important text inside safe margins so it survives previews/crops.

Do not put tiny text on the OG image.

Provide Arabic and English variants when meaningful.

Never let a missing property image result in a broken OG URL.

---

# 37. TWITTER/X SOCIAL METADATA

Even when the platform currently renders Open Graph data, implement the common metadata:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

Do not invent a `twitter:site` handle unless the real official handle exists.

---

# 38. FAVICON / APP ICON / BRAND ASSETS

Create a complete favicon set using the real logo/brand mark.

Recommended assets:

```text
public/
  favicon.ico
  favicon.svg
  apple-touch-icon.png
  site.webmanifest
  icons/
    icon-192.png
    icon-512.png
```

Ensure:

- SVG favicon is clean and lightweight.
- ICO fallback exists where useful.
- Apple touch icon has the correct dimensions.
- Manifest references real assets.
- Icons work in light/dark browser UI where applicable.

Do not use a random emoji or placeholder icon.

---

# 39. LOGO IMPLEMENTATION

Use the actual Aqar/Novixa-approved logo.

Requirements:

- SVG preferred.
- Correct intrinsic dimensions.
- accessible alternative text where the logo is informative.
- decorative duplicate logo instances can use appropriate treatment.
- avoid embedding a huge raster logo when SVG is available.

The logo should not become an oversized hero graphic.

---

# 40. SITEMAP

Provide a real XML sitemap at:

`/sitemap.xml`

Include canonical, indexable public URLs only.

Do not include:

- admin pages
- authenticated dashboard pages
- internal utility routes
- error pages
- duplicate URLs
- unapproved staging URLs
- `noindex` pages

Use absolute URLs.

If language variants are separate URLs, implement localized sitemap annotations when the architecture makes that useful/appropriate.

Google's sitemap guidance recommends fully qualified absolute URLs and recommends including URLs you want to appear in Search.

A sitemap at the domain root can cover the site hierarchy more broadly.

---

# 41. ROBOTS.TXT

Provide:

`/robots.txt`

Baseline concept:

```text
User-agent: *
Allow: /

Disallow: /admin/
Disallow: /staff/
Disallow: /app/

Sitemap: https://YOUR-DOMAIN.example/sitemap.xml
```

These paths are examples only. Inspect the actual application routes and authentication architecture before implementing.

Important:

`robots.txt` is for crawler access control, not canonicalization.

Do not use `Disallow` merely to hide a page from search when `noindex` is the appropriate mechanism.

Google's current documentation explicitly distinguishes crawling controls, canonicalization, and `noindex`.

---

# 42. NOINDEX RULES

Authenticated/private pages should generally not be indexable.

Potential examples:

- dashboards
- account settings
- private tenant pages
- authentication screens, depending on strategy
- internal tools
- development/debug pages

Do not accidentally `noindex` the main public pages.

Also remember: `noindex` must be crawl-accessible for Google to see it; blocking the same resource in `robots.txt` can prevent the crawler from seeing the `noindex` directive.

---

# 43. IMAGE SYSTEM

Every meaningful image must have:

- useful `alt`
- dimensions or aspect-ratio reservation
- responsive source sizes
- optimized format
- lazy loading below the fold
- eager/high-priority loading only for genuinely critical above-the-fold imagery

Preferred modern formats:

- AVIF where the pipeline supports it
- WebP fallback
- JPEG/PNG fallback where appropriate

Do not ship 2500px-wide images into 375px mobile cards.

Use:

```html
<img
  src="..."
  srcset="..."
  sizes="..."
  width="..."
  height="..."
  alt="..."
  loading="lazy"
  decoding="async"
>
```

For the single critical LCP image, consider `loading="eager"` and `fetchpriority="high"` only when measurement confirms it is the correct resource to prioritize.

Reference: web.dev recommends responsive images, careful prioritization, and lazy loading for offscreen images.

---

# 44. PERFORMANCE TARGETS

The site should be designed to achieve good Core Web Vitals in real usage, not just in an ideal local environment.

Target:

- **LCP ≤ 2.5s**
- **INP ≤ 200ms**
- **CLS ≤ 0.1**

These are the current “good” thresholds referenced by web.dev and should be evaluated around the 75th percentile, segmented by mobile/desktop where data permits.

Do not merely pass Lighthouse on a fast desktop machine.

---

# 45. PERFORMANCE ENGINEERING RULES

## HTML / server

- Prefer server-rendered HTML for critical public content.
- Avoid rendering important SEO text only after client JavaScript.
- Keep HTML compact.
- Avoid unnecessary nested wrappers.

## CSS

- Remove unused CSS where practical.
- Avoid giant global style files if the framework can split/optimize them.
- Use CSS containment and modern layout primitives where helpful.
- Avoid layout-triggering animations.

## JavaScript

- Do not ship JavaScript for static content that HTML/CSS can handle.
- Lazy-load noncritical interactive modules.
- Avoid large animation libraries if CSS suffices.
- Avoid shipping duplicate utility libraries.
- Defer analytics and nonessential third-party scripts.

Third-party JavaScript should be treated as a performance cost, especially because its network and execution costs are outside direct control.

## Fonts

- Use WOFF2.
- Avoid unnecessary weights.
- Consider `font-display: swap`.
- Preload only truly critical fonts and ensure `crossorigin` is correct for cross-origin font requests.

## Images

- optimize dimensions
- responsive sources
- lazy-load below fold
- avoid massive transparent PNGs

## Caching

Set appropriate long cache lifetimes for hashed/static assets.

Avoid stale caching of dynamic property content where freshness matters.

---

# 46. CRITICAL RENDERING PATH

The first viewport should depend on as few resources as possible.

Prioritize:

1. HTML.
2. Critical CSS.
3. Critical font(s) if genuinely necessary.
4. Critical hero image/search dependencies.

Do not preload ten images.

Do not preload every font.

Do not preload third-party scripts.

web.dev explicitly warns that overusing preload can worsen performance and that critical responsive images should be handled carefully.

---

# 47. JAVASCRIPT BUDGET / INTERACTIVITY

The landing page does not need a JavaScript-heavy architecture.

Use JavaScript for:

- navigation drawer
- interactive search/filter controls
- required Livewire/Ajax interactions
- accessible dialogs
- progressively enhanced behavior

Avoid using JavaScript for:

- simple navigation
- static content rendering
- decorative scroll effects
- basic hover interactions
- static layouts

Every JS bundle should have a reason to exist.

---

# 48. THIRD-PARTY SCRIPTS

Do not add third-party analytics, chat, maps, videos, or marketing scripts merely because they are common.

Before adding one, document:

- purpose
- owner
- user value
- privacy impact
- performance cost
- whether it is essential for the demo

Load noncritical third-party resources only after the page becomes interactive when appropriate.

---

# 49. SEO CONTENT STRATEGY

SEO should start with user intent, not a list of keywords.

Primary topic clusters should reflect real Aqar capabilities and Yemen-focused property discovery.

Potential intent families to validate with actual keyword research:

- عقارات اليمن
- عقارات صنعاء
- عقارات عدن
- شقق للبيع
- شقق للإيجار
- أراضي للبيع
- فلل للبيع
- عقارات تجارية
- property in Yemen
- houses/apartments/land in Yemen

Do not force all terms onto the home page.

Create dedicated indexable landing/category pages only when there is substantial unique content and real inventory to support them.

Avoid thin doorway pages.

---

# 50. INTERNAL LINKING

Create a clear network of internal links between:

- home
- properties
- property types
- locations
- property details
- articles
- useful company/legal pages

Use descriptive anchor text.

Avoid “click here”.

Every important public page should be reachable through ordinary crawlable links.

Google's developer guidance recommends crawlable `<a>` elements and a sitemap to help discover URLs.

---

# 51. FACETED SEARCH / CRAWL CONTROL

A property platform can generate enormous URL combinations.

Implement an explicit SEO policy:

### Index

- canonical property pages
- meaningful category pages
- meaningful location pages with useful unique content
- editorial/news content

### Usually do not index by default

- arbitrary filter combinations
- session URLs
- tracking parameters
- sort-only variants
- internal state URLs
- duplicate pagination variants when content policy says otherwise

Do not block all search functionality with robots.txt just because some combinations are low-value.

---

# 52. PROPERTY DETAIL PAGE SEO

Although this document is focused on the landing page, the landing page must hand visitors off to excellent detail pages.

Each property page should have:

- unique title
- unique description
- canonical
- OG image
- property-specific JSON-LD where valid
- breadcrumb
- descriptive H1
- structured property facts
- visible location
- price/currency
- status
- image alt text
- related properties
- clear contact/action CTA

A landing page is only as strong as the product page it sends people to.

---

# 53. NEWS PAGE SEO

For news/article pages:

- unique title
- publication/update date shown in localized format
- real author/brand information when available
- correct canonical
- OG image if available
- article-specific metadata
- internal links to relevant properties/pages where genuinely useful

Do not use raw ISO timestamps in the human-facing UI.

---

# 54. SECURITY / TRUST BASICS

The landing page is public, but it still needs secure defaults.

Verify:

- HTTPS in deployment.
- secure cookies where appropriate.
- no secret in client bundles.
- no debug mode.
- no stack traces visible publicly.
- no internal IDs unnecessarily exposed.
- no accidental staging URLs in metadata.
- proper CSRF/security posture for interactive forms.

Do not place API keys, mail secrets, database credentials, or service tokens into frontend source.

---

# 55. ERROR / EMPTY / LOADING STATES

Professional UX includes non-happy states.

Create intentional states for:

- no property inventory
- search returns zero results
- image fails
- network delay
- server error
- invalid filter
- unavailable property

Never show a blank white screen.

Never display raw exception text.

Use calm, actionable Arabic/English messaging.

---

# 56. TRUSTWORTHY DATA PRESENTATION

Do not display:

- `test`
- developer placeholders
- raw translation keys
- raw database enum values when a human label exists
- mismatched currencies
- raw timestamps
- undefined/NaN values
- fake counts
- unexplained abbreviations

Before release, scan the rendered DOM for obvious development artifacts.

---

# 57. ANALYTICS

If analytics are part of the actual deployment plan, use privacy-conscious instrumentation.

Recommended events to consider:

- hero search submitted
- property card clicked
- property viewed
- CTA clicked
- language changed
- property inquiry/contact started

Do not collect unnecessary personal data.

Analytics should not be required for the core page to function.

---

# 58. SOCIAL SHARING

The landing page should be shareable through:

- messaging apps
- social platforms
- direct copied URLs

Ensure previews remain correct when links are shared.

Test:

- Arabic home URL
- English home URL
- property URL
- article URL

Check that the image/title/description correspond to the actual shared URL.

---

# 59. APP / PWA CONSIDERATION

Do not automatically turn the site into an elaborate PWA.

A lightweight `site.webmanifest` and correct icons are acceptable if consistent with the product architecture.

Installability is secondary to a fast, high-quality web experience.

---

# 60. CONTENT / COPYWRITING RULES

Copy must be:

- concrete
- short
- human
- locally appropriate
- benefit-led
- easy to scan

Arabic copy should sound like native product language, not literal machine-translated English.

English should sound natural, not like Arabic translated word-for-word.

Avoid generic phrases such as:

- “The future of real estate is here.”
- “Revolutionizing the industry.”
- “A next-generation ecosystem.”
- “Unlock limitless possibilities.”

Prefer direct value.

Example direction:

> اكتشف العقار المناسب لك في مكان واحد.

> ابحث، قارن، واستكشف تفاصيل العقارات بسهولة.

These examples are directional only; use final copy that matches the actual product.

---

# 61. VISUAL HIERARCHY

For every section answer:

1. What is the first thing the eye should see?
2. What should be read second?
3. What action should happen next?
4. What can be ignored until later?

Use:

- scale
- spacing
- contrast
- grouping
- alignment
- repetition

Do not rely on decoration to create hierarchy.

---

# 62. WHITESPACE / DENSITY

Real-estate websites can become visually dense because cards contain many data points.

Use generous section spacing while keeping the actual content compact.

Avoid:

- huge empty areas between short text blocks
- tiny text packed into card footers
- arbitrary 100px+ gaps everywhere

Spacing should reflect relationships between elements.

---

# 63. CARDS

Cards should not all look identical if their roles differ.

For example:

- property cards prioritize image + factual data
- benefit cards prioritize concept + explanation
- article cards prioritize title + publishing context

Avoid putting everything inside a border.

Use surfaces selectively.

---

# 64. ICONOGRAPHY

Use one icon family.

Prefer the existing project icon system.

Never mix:

- emojis
- random SVGs
- multiple icon libraries
- inconsistent stroke widths

Directional icons must be tested in both RTL and LTR.

Decorative icons should not be announced by screen readers unnecessarily.

---

# 65. IMAGES / ART DIRECTION

Photography should communicate:

- real places
- homes
- neighborhoods
- local context
- trustworthy property representation

Avoid generic Western stock imagery that makes the product look imported.

If real local property imagery is limited for the demo, use a small number of high-quality neutral images rather than a large gallery of obviously synthetic/stock visuals.

Never use an image that implies a feature or location that the product does not actually serve.

---

# 66. OPTIONAL INTERACTIVE MAPS

Only add a map to the home page if it solves a real discovery problem and the necessary data exists.

A map should not be a decoration.

If implemented:

- lazy-load it when below fold.
- ensure keyboard accessibility for associated controls.
- provide a non-map fallback/list.
- prevent it from blocking LCP.
- avoid third-party map scripts in the first viewport.

---

# 67. SEARCH ENGINE RENDERING

Google can process JavaScript, but the public marketing and SEO content should not depend unnecessarily on JavaScript execution.

Make sure:

- H1 exists in server-rendered HTML.
- key copy exists in the DOM.
- important links are real anchors.
- property links are crawlable.
- metadata is rendered correctly in the final HTML response.

Use browser tooling to inspect the actual rendered source, not just component code.

---

# 68. TECHNICAL SEO QA

After implementation, run:

### HTML

- valid document structure
- `<html lang>` correct
- `dir` correct
- one primary H1
- no broken links
- semantic landmarks

### Metadata

- title present and unique
- description present and unique
- canonical correct
- hreflang correct
- robots correct
- OG correct
- social preview correct

### Structured data

- valid JSON
- correct URLs
- no invented fields/content
- no unsupported claim

### Crawlability

- sitemap returns 200
- robots.txt returns 200
- sitemap URLs are absolute
- no public SEO page accidentally blocked

### Index safety

- authenticated pages protected
- no staging host indexed
- no test pages indexed

---

# 69. BROWSER QA MATRIX

Run real browser QA, preferably Playwright/Chromium.

Minimum viewport matrix:

| Category | Viewport |
|---|---:|
| Small mobile | 320×800 |
| Mobile | 375×812 |
| Large mobile | 430×932 |
| Tablet | 768×1024 |
| Laptop | 1280×800 |
| Desktop | 1440×900 |
| Large desktop | 1920×1080 |

Test both:

- Arabic RTL
- English LTR

Check:

- visual hierarchy
- clipping
- overflow
- sticky behavior
- drawer behavior
- keyboard interaction
- focus
- forms
- search
- images
- language switch
- footer
- CTA navigation
- console errors
- failed network requests

---

# 70. PERFORMANCE QA

Run at least:

- Lighthouse mobile
- Lighthouse desktop
- PageSpeed Insights where available after public deployment
- browser performance trace for LCP if needed
- network throttling
- CPU throttling for mobile simulation

Investigate:

- LCP source
- render-blocking resources
- JS execution
- image payloads
- font payloads
- layout shifts
- long tasks

Core targets:

- LCP ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1

Do not hide poor performance by removing meaningful content merely to improve a score.

---

# 71. ACCESSIBILITY QA

Use:

- keyboard-only navigation
- browser accessibility tree
- Lighthouse accessibility audit
- automated checks such as axe where available

Manually inspect:

- navigation
- dialog/drawer
- search form
- property cards
- language selector
- footer

Automated tools do not replace manual testing.

---

# 72. SEO VALIDATION TOOLS

After deployment, validate with:

- Google Search Console URL Inspection
- Google Rich Results Test
- PageSpeed Insights
- sitemap submission
- robots.txt inspection
- social sharing debuggers available for the target platforms

Do not treat a passing validator as proof of perfect SEO. Validate actual rendering and real URLs as well.

---

# 73. FILE / ASSET STRUCTURE

Adapt to the existing application, but aim for a clean organization similar to:

```text
resources/
  views/
    public/
      home.blade.php
      components/
        landing/
          header.blade.php
          hero-search.blade.php
          property-types.blade.php
          featured-properties.blade.php
          value-props.blade.php
          how-it-works.blade.php
          locations.blade.php
          owner-cta.blade.php
          latest-news.blade.php
          final-cta.blade.php
          footer.blade.php

public/
  images/
    branding/
    landing/
    properties/
    og/
    icons/
  favicon.svg
  favicon.ico
  apple-touch-icon.png
  site.webmanifest
  robots.txt
  sitemap.xml
```

This is conceptual. Preserve the repository's established Laravel/Blade architecture.

Do not introduce an entirely new frontend stack simply to build the landing page.

---

# 74. COMPONENT ARCHITECTURE

Prefer small, composable components.

Suggested responsibilities:

- `Header`: navigation, language, auth, owner CTA.
- `HeroSearch`: primary discovery form.
- `PropertyTypeShortcuts`: category navigation.
- `PropertyCard`: real property preview.
- `FeaturedProperties`: inventory section.
- `ValueProps`: why Aqar.
- `HowItWorks`: 3-step flow.
- `LocationExplorer`: optional geographic discovery.
- `OwnerCTA`: seller/landlord path.
- `LatestNews`: editorial discovery.
- `FinalCTA`: concluding action.
- `Footer`: site information architecture.

Components should expose semantic APIs, not arbitrary style knobs.

---

# 75. DATA / CONTENT SEPARATION

The landing page should not hard-code dynamic property data into the template.

Use the real domain/query layer for:

- featured properties
- recent properties
- available types
- locations
- article previews

Cache appropriate public queries.

Do not execute expensive unbounded queries on every request.

---

# 76. PERFORMANCE OF DATABASE QUERIES

The page should not become fast on the frontend while being slow on the backend.

Check:

- N+1 queries
- unnecessary relations
- repeated category queries
- duplicate article queries
- missing indexes in frequently used public filters
- large eager-loaded payloads

Use bounded result sets.

Only select needed columns where doing so materially reduces query cost.

---

# 77. SEARCH ENGINE FRIENDLY CONTENT HIERARCHY

The landing page should naturally communicate the site's topic using visible text:

- product name
- property discovery intent
- Yemen/local context where accurate
- category terminology that matches actual pages

Do not hide keywords in:

- alt text only
- white text
- CSS content
- hidden containers
- off-screen keyword blocks

Google's developer guidance states that meaningful text should be accessible in the DOM.

---

# 78. SOCIAL / SHARE IMAGE GENERATION PIPELINE

Create reusable OG templates so future properties/news can generate consistent previews.

Conceptual variants:

```text
og/
  aqar-default-ar.jpg
  aqar-default-en.jpg
  property-template-ar.jpg
  property-template-en.jpg
  news-template-ar.jpg
  news-template-en.jpg
```

Do not generate these at request time if that would make page metadata slow.

Prefer deterministic assets or server-side generation with caching where justified.

---

# 79. HEAD MANAGEMENT FOR MULTIPLE PAGES

Do not build one giant static `<head>` shared across every route.

Use a structured metadata layer that accepts:

```text
page.title
page.description
page.canonical
page.locale
page.alternates
page.ogType
page.ogImage
page.ogImageAlt
page.noindex
structuredData[]
```

This ensures every page can have accurate metadata without copy/paste errors.

---

# 80. ERROR-PROOF METADATA

Implement fallback behavior:

- missing OG image → valid default Aqar OG image
- missing description → generated safe fallback from page content
- missing locale → configured default
- missing slug → safe canonical fallback
- missing property image → product default

Never emit:

- `undefined`
- `null`
- `localhost`
- `example.com`
- stale staging host
- raw translation keys

into metadata.

---

# 81. LEGAL / PRIVACY LINKING

Because the site processes user interactions and potentially personal contact information, provide access to real privacy/terms documents where available.

Do not fabricate legal text in the design.

Use the legal documents actually approved for the product.

---

# 82. RELEASE CONTENT CHECKLIST

Before calling the landing page complete, inspect all visible content for:

- Arabic grammar quality
- English grammar quality
- correct product name
- correct company identity
- correct currency
- correct location terminology
- correct property categories
- no test strings
- no raw keys
- no untranslated labels
- no accidental English in Arabic
- no accidental Arabic in English
- no fake statistics
- no placeholder copy

---

# 83. DESIGN REVIEW CHECKLIST

Review the finished page as a senior product designer and ask:

### First 5 seconds

- Can I tell what Aqar is?
- Can I tell what I can do?
- Can I start searching immediately?

### First 30 seconds

- Do I trust the product?
- Can I see actual properties?
- Is the page easy to scan?

### First 2 minutes

- Can I explore the inventory?
- Can I understand the workflow?
- Can I find contact/legal/company information?

### Visual quality

- Is spacing intentional?
- Is hierarchy obvious?
- Is there unnecessary decoration?
- Does the design feel specific to Aqar?
- Does it avoid the obvious AI-generated website look?

### Mobile

- Does it feel native to a phone?
- Can I use search one-handed?
- Does the header remain useful?

### RTL

- Does the interface feel designed in Arabic rather than mirrored from English?

---

# 84. AI-SPECIFIC QUALITY CONTROLS

This project is specifically intended to avoid common AI-generated website failure modes.

Claude MUST reject its own first pass if it contains patterns such as:

- excessive repeated cards
- repetitive section layouts
- fake metrics
- generic “trusted by” bands
- random gradients
- meaningless decorative geometry
- repetitive rounded containers
- excessive border/shadow combinations
- vague copy
- unrealistic stock imagery
- mobile layouts that are desktop designs squeezed down
- broken RTL directional icons
- fake interaction states
- unnecessary client-side rendering
- unused UI controls

After building, perform a **visual anti-AI review** and simplify wherever the interface looks algorithmically repetitive.

---

# 85. REQUIRED SKILLS / TOOLING FOR CLAUDE

Before implementing, Claude should inspect and use the best available local skills/tools relevant to the task.

### Required priority

1. **`ui-ux-pro-max`** — use for interface quality, hierarchy, responsive behavior, design system decisions, UX patterns, and anti-generic-AI design review.
2. **`design-review`** — use for a skeptical visual/product review after implementation. Treat it as a review lens, not as proof of quality.
3. A current accessibility-focused skill/tool if available.
4. A current SEO/web-performance skill/tool if available.
5. Browser automation / Playwright for live visual and interaction QA.

Claude should first inspect what skills are installed/available in the environment and select the strongest relevant combination.

Do not install a large collection of unrelated skills.

### Tooling expectation

Use the existing project's stack and tooling.

For this Laravel application, prefer the existing Blade/Livewire/Tailwind/Vite architecture where applicable.

Do not migrate the landing page to React/Next/etc. unless the repository already requires it for this public surface.

---

# 86. IMPLEMENTATION PROCESS FOR CLAUDE

Follow this order.

## Phase A — Discovery

1. Inspect repository architecture.
2. Inspect routes.
3. Inspect current home page.
4. Inspect property models/query layer.
5. Inspect property image system.
6. Inspect news system.
7. Inspect locale routing.
8. Inspect translation keys.
9. Inspect design tokens.
10. Inspect logo/assets.
11. Inspect current SEO implementation.
12. Inspect sitemap/robots implementation.
13. Inspect deployment/environment conventions.
14. Check installed skills.

Do not code before understanding the existing product.

## Phase B — Content model

Create a section-by-section content plan based on actual supported functionality.

Mark anything unavailable as:

`DEFER — DATA/FEATURE NOT READY`

rather than inventing it.

## Phase C — Design system

Define/reuse tokens for:

- type
- color
- spacing
- radii
- surfaces
- focus states
- responsive breakpoints
- motion

## Phase D — Build

Build semantic components.

Keep dynamic data server-side where possible.

## Phase E — SEO/head

Implement the metadata system before final visual QA so every route can be tested in its real form.

## Phase F — Assets

Create/optimize:

- hero media
- property thumbnails
- logos
- favicons
- OG images
- manifest

## Phase G — QA

Run browser, responsive, accessibility, SEO, and performance QA.

## Phase H — anti-AI design review

Ask whether the result looks like a generic AI template.

If yes, simplify, strengthen hierarchy, and make the experience more product-specific.

## Phase I — regression tests

Run the existing application test suite.

Do not weaken or delete tests simply to make the landing page pass.

---

# 87. DEFINITION OF DONE

The landing page is complete only when all of the following are true:

## Product

- A visitor understands Aqar immediately.
- Primary property search is obvious and usable.
- Real product routes are linked.
- No unsupported feature claims.

## UI/UX

- Desktop is polished.
- Mobile is intentionally designed.
- Tablet is polished.
- Arabic RTL is first-class.
- English LTR is correct.
- Visual hierarchy is strong.
- No generic AI patterns dominate.

## Accessibility

- Keyboard navigation works.
- Focus is visible.
- Semantic landmarks exist.
- Labels and heading hierarchy are correct.
- Images have correct alt behavior.
- Reduced motion works.

## SEO

- Unique title per indexable page.
- Unique meta description.
- canonical.
- hreflang.
- robots policy.
- sitemap.
- crawlable links.
- structured data where appropriate.

## Social

- OG metadata works.
- Twitter/X metadata works.
- OG image is valid.
- shared pages show correct content.

## Performance

- no unnecessary JS.
- no oversized images.
- responsive images.
- lazy-loading below fold.
- LCP image correctly prioritized.
- CLS controlled.
- fonts optimized.
- third parties minimized.

## Quality

- no 500 errors.
- no console errors.
- no broken network requests caused by the page.
- no untranslated UI strings.
- no raw database values where human labels exist.
- no test data/artifacts.
- no localhost URLs.

## Regression

- full existing test suite remains green.
- browser QA remains green after final asset/build changes.

---

# 88. FINAL QA COMMAND / REPORT REQUIREMENT

After all implementation work, Claude must produce a final report containing:

```text
AQAR LANDING PAGE — FINAL QA

1. IMPLEMENTED
2. DEFERRED (with reasons)
3. RESPONSIVE QA
4. RTL/LTR QA
5. ACCESSIBILITY QA
6. SEO QA
7. STRUCTURED DATA QA
8. SOCIAL/OG QA
9. PERFORMANCE QA
10. BROWSER CONSOLE/NETWORK QA
11. TEST RESULTS
12. FILES ADDED/CHANGED
13. MANUAL DEPLOYMENT STEPS
14. REMAINING RISKS
15. FINAL VERDICT
```

The final verdict must be one of:

- `LANDING PAGE READY FOR DEMO`
- `LANDING PAGE READY WITH FIXES`
- `NOT READY`

Do not claim readiness if a core route, metadata system, mobile layout, or primary search action is broken.

---

# 89. DEPLOYMENT CHECKLIST

When this moves from local development to the real domain, verify:

### Domain

- DNS points correctly.
- HTTPS works.
- primary canonical host is decided.
- `www` vs apex behavior is decided and redirected consistently.

### Application

- `APP_URL` is the real public URL.
- no debug mode.
- production environment config is correct.
- frontend assets built.
- storage link exists if needed.
- cache/config/routes are optimized where appropriate.

### SEO

- robots.txt accessible.
- sitemap accessible.
- canonicals use production host.
- hreflang uses production host.
- OG URLs use production host.
- no staging `noindex` survives accidentally.

### Search Console

- verify domain/property.
- submit sitemap.
- inspect homepage.
- inspect key property page.

---

# 90. SOURCE-OF-TRUTH RESEARCH REFERENCES

The implementation guidance in this specification is informed by current official documentation and standards, including:

1. **Google Search Central — SEO documentation**
   - https://developers.google.com/search/docs
   - Guidance on crawlability, titles, descriptions, semantic HTML, sitemaps, JavaScript SEO, and Search Console.

2. **Google Search Central — SEO Starter Guide**
   - https://developers.google.com/search/docs/fundamentals/seo-starter-guide
   - Guidance on descriptive titles, snippets, images, discoverability, and content quality.

3. **Google Search Central — Developer SEO Guide**
   - https://developers.google.com/search/docs/fundamentals/get-started-developers
   - Guidance on crawlable links, sitemaps, semantic HTML, rendered content, titles, metadata, and structured data.

4. **Google Search Central — Canonicalization**
   - https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
   - Guidance on canonical URLs, absolute URLs, redirects, and sitemap signals.

5. **Google Search Central — Multilingual / Multi-regional Sites**
   - https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites
   - Guidance on separate URLs per language and `hreflang`.

6. **Google Search Central — Sitemaps**
   - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
   - Guidance on sitemap locations, absolute URLs, indexable URLs, and size limits.

7. **Google Crawling Documentation — robots.txt**
   - https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
   - https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec
   - Guidance on crawler directives and sitemap declaration.

8. **Google Search Central — noindex**
   - https://developers.google.com/search/docs/crawling-indexing/block-indexing
   - Guidance on blocking indexing and why robots.txt should not be used as a noindex substitute.

9. **Google Search Central — Organization structured data**
   - https://developers.google.com/search/docs/appearance/structured-data/organization
   - Guidance on Organization JSON-LD and business identity information.

10. **Google Search Central — Local business structured data**
    - https://developers.google.com/search/docs/appearance/structured-data/local-business
    - Guidance on structured data where local-business semantics are genuinely applicable.

11. **web.dev — Core Web Vitals**
    - https://web.dev/articles/vitals
    - Current performance targets for LCP, INP, and CLS.

12. **web.dev — Responsive Images**
    - https://web.dev/learn/design/responsive-images
    - Guidance on `srcset`, `sizes`, responsive delivery, and image prioritization.

13. **web.dev — Image Performance**
    - https://web.dev/learn/performance/image-performance
    - Guidance on lazy loading and image decoding.

14. **web.dev — Resource Hints**
    - https://web.dev/learn/performance/resource-hints
    - Guidance on preconnect/preload and avoiding overuse.

15. **web.dev — Third-party JavaScript**
    - https://web.dev/articles/third-party-javascript
    - Guidance on the network/execution cost of third-party scripts.

16. **web.dev — Website Navigation / semantic navigation**
    - https://web.dev/articles/website-navigation
    - Guidance on semantic nav and accessibility landmarks.

17. **web.dev — Accessibility**
    - https://web.dev/learn/design/accessibility
    - Guidance on semantic structure, headings, forms, and accessibility.

18. **Open Graph Protocol**
    - https://ogp.me/
    - Standard Open Graph properties such as `og:title`, `og:type`, `og:image`, and `og:url`.

19. **Schema.org**
    - https://schema.org/
    - Vocabulary reference for structured data types and properties. Always verify the exact current type/property before implementation.

20. **MDN Web Docs**
    - https://developer.mozilla.org/
    - HTML, metadata, icons, responsive behavior, accessibility, CSS, and browser-platform reference.

---

# 91. FINAL DIRECTIVE

Claude: treat this document as the **quality bar**, not a checklist to mechanically tick.

Use judgment.

Inspect the actual Aqar product.

Prefer fewer excellent sections over many mediocre sections.

Prefer real product data over visual placeholders.

Prefer semantic HTML over div-based imitation.

Prefer server-rendered content over unnecessary JavaScript.

Prefer calm confidence over hype.

Prefer local relevance over generic real-estate stock design.

Prefer measurable performance over animation.

Prefer accessible interaction over clever UI.

Prefer a coherent visual system over a collection of trendy components.

And above all:

**Build an Aqar landing page that could credibly be shipped by a professional product team — not one that merely looks impressive in a screenshot.**
