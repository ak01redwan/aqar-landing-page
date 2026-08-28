# Social Media Content Playbook

A working library of ideas and ready-to-use prompts for posts, images, videos, ads, and news content across three subjects, weighted the way traffic and business value actually flow right now:

- **50% — the landing page** (`aqar-landing-page.vercel.app`): the newest, most concrete thing to talk about. Every post here should drive a click to `/ar` or `/en`.
- **40% — the Aqar product**: the real platform the landing page sends people to — search, listings, submitting a property, the broader experience.
- **10% — Novixa**: the company behind it. Light touch — brand credibility, not a corporate feed.

## How to use this file

Every idea below is a **starting prompt**, not finished copy. Feed it to whatever tool is doing the actual writing/generation (an LLM for copy, Midjourney/Firefly/DALL·E for images, a video tool for reels) along with the brand reference in §1. Treat the bracketed `[...]` placeholders as required fill-ins from real data — never invent a number, quote, or claim to fill one in. See §0 before publishing anything.

---

## 0. Non-negotiable content rules (read this first)

These carry over directly from the landing page's own build rules (`docs/PLANNING.md`, `docs/CONTENT_MODEL.md`) — the same discipline applies to social content, arguably more so, since it's harder to correct once posted:

- **No fabricated numbers.** Never post "1,000+ properties," "50,000 users," "#1 in Yemen," or any statistic that isn't pulled from a real, current source at the moment of posting. If you don't have the number, don't imply one — say "browse the properties live now" instead of "browse our huge inventory."
- **No fake testimonials or reviews.** A quote graphic needs a real customer who agreed to be quoted. Until then, use feature-explainer content instead of social-proof content.
- **No fake urgency.** No "only 3 left," no countdown timers on evergreen content.
- **No screenshots of features that aren't live.** If a post shows the 3D property viewer or AI investment analysis, confirm it's reachable on the current production app before publishing, not just documented in the app's README.
- **Property photos in ads/posts must be real, rights-cleared listing photos** (with the seller/agent's permission) or clearly-labeled illustrative graphics — never generic stock photos presented as if they're real Yemen listings.
- **Match the landing page's brand voice**: direct, calm, benefit-led, no hype words ("revolutionary," "game-changing," "limitless"). See `docs/DESIGN_SYSTEM.md` for the fuller rationale.
- **Arabic is the primary language.** Write Arabic copy first, as its own native voice — not an English post translated afterward. English versions should sound natural on their own too (see the landing page's own approach in `ar/index.html` vs `en/index.html`).

---

## 1. Brand quick-reference

| | |
|---|---|
| Platform name | Novixa Aqar (نوفيكسا عقار) |
| Landing page | https://aqar-landing-page.vercel.app |
| Primary color | `#2563EB` (blue) |
| Ink/dark color | `#0F172A` (navy) |
| Accent color | `#10B981` (emerald — *not* teal, see `docs/DESIGN_SYSTEM.md`) |
| Fonts | Cairo (Arabic), Outfit (Latin) |
| Logo | `public/images/logo.svg` — house mark, navy rounded square, blue body, emerald roof |
| Voice | Direct, calm, confident, no hype. Trustworthy over flashy. |
| Tagline (real, from the live app) | AR: "الجيل القادم من المنصات العقارية" · EN: "Next Generation Real Estate Platform" |
| Core value line | AR: "اكتشف العقار المناسب لك في اليمن" · EN: "Discover the right property in Yemen" |

**Confirmed real Aqar capabilities** (safe to reference in content — verify each is live before posting about it):
property search & filtering (type, price, area, bedrooms, bathrooms, location), 5+ property types (apartment, villa, land, commercial, building — plus office/duplex/penthouse/warehouse in the fuller taxonomy), submit-your-own-property flow with moderation before publish, property comparison, viewing-request booking, WhatsApp/direct contact with the lister, a news section, bilingual Arabic-first/English interface, AI-assisted investment analysis on listings, interactive 3D property models, neighbourhood insight data. Novixa is the platform's parent company (novixa.dev).

---

## 2. Platform guide

| Platform | Why | Primary content |
|---|---|---|
| **Instagram** | Visual, property photos work natively, Reels for reach | Feed posts, carousels, Reels, Stories |
| **Facebook** | Still the dominant platform for classifieds/real-estate behavior in Yemen and the wider region | Listings-style posts, longer captions, Groups engagement |
| **X (Twitter)** | Fast news/launch announcements, tech-community reach for the Novixa side | Launch threads, short updates, market commentary |
| **LinkedIn** | Novixa's 10% lane — company credibility, hiring, technical posts | Company updates, founder/team posts, product-build posts |
| **TikTok / Instagram Reels / YouTube Shorts** | Short vertical video has the best organic reach right now for a new brand | Feature-tour clips, "how it works," local market tips |
| **WhatsApp Status / Channels** | Genuinely high-usage in Yemen for informal classifieds and word-of-mouth | Short listing highlights, direct links to the search page |
| **YouTube (long-form)** | Home for a proper platform walkthrough / demo video | Full product tour, "how to list your property" tutorial |

---

## 3. Content pillars & post ideas

### 3.1 Landing page (50%)

The landing page is brand-new — that alone is worth a real content arc, not just one announcement post.

**Launch & awareness**
1. "We're live" announcement post — plain, confident, no false urgency. Screenshot of the real hero section.
2. A short carousel: "5 things you can do on the new Aqar site" — one slide per: search, filter by type, browse categories, submit a property, read the how-it-works steps.
3. "Built for Arabic, not translated into it" post — a short explainer on the RTL-first design decision, paired with a side-by-side AR/EN screenshot.
4. Before/after or "what's new" post if this ever gets a v2 — hold this idea for the next redesign.

**Feature-tour content (one post per real section of the page)**
5. Hero + search: "Search apartments, villas, land, and commercial listings in Yemen in one place" — screen-recording of typing a search and hitting the real "بحث" button.
6. Property-type shortcuts: a clean graphic of the 5 category icons (apartment/villa/land/commercial/building) with the real Arabic labels.
7. "Why Novixa Aqar" 4-pillar carousel — one slide per real pillar (precise filters, Arabic-first, list your property fast, direct contact).
8. "How it works" 3-step carousel — Search → Compare & Explore → Contact & Request a Viewing, matching the real page copy exactly.
9. Bilingual toggle demo — a short clip showing the `العربية`/`English` switch working live.
10. Accessibility/performance angle for a more technical audience (LinkedIn/X): "No bloated JavaScript, no slow loads — just a fast way to find a property," with the real Lighthouse numbers *once measured* (see `docs/QA_REPORT.md` — don't quote a score until it's actually been run).

**Direct-response / traffic-driving**
11. "Looking for [property type] in Yemen? Start here →" link post, rotated weekly with a different property type filled in.
12. "New here? This is what Aqar looks like" — a single clean screenshot + link, for retargeting people who haven't visited yet.
13. Weekly "search of the week" — pick one real, live search result set (e.g. villas under a certain price) and link straight to the pre-filtered results URL.

### 3.2 Aqar product (40%)

Broader than the landing page — the actual buying/renting/listing experience once someone clicks through.

**Educational / market content**
1. "How to read a property listing" — explain the real fields shown on a listing (price, currency, area, bedrooms/bathrooms, status) so first-time users feel confident.
2. "For sale vs. for rent — how Aqar's filters work" using the real `status` filter values.
3. A short series: "Buying your first property in Yemen — what to check" (general, non-legal-advice educational content — no fabricated statistics about the market).
4. "What is a moderated listing?" — explain the real review-before-publish workflow as a trust feature, not just a technical detail.

**Feature highlights**
5. Property comparison tool — a short demo clip comparing two real listings side by side.
6. Booking a viewing — walk through the real request-a-viewing flow.
7. WhatsApp/direct contact — "Talk to the person who actually listed the property, not a call center."
8. If confirmed live: AI investment analysis on a listing page — explain in plain language what it actually shows (no invented capabilities beyond what the feature does).
9. If confirmed live: the 3D property viewer — this is inherently a strong short-video feature (screen-record someone rotating a real 3D model).
10. Neighbourhood insights — if the data is populated for a given listing, a short "did you know" post about what's shown (amenities, walkability) for that area.

**For property owners / listers (a distinct audience worth its own content lane)**
11. "List your property in minutes" walkthrough video — the real submit-property form, start to finish.
12. "What happens after you submit?" — explain the moderation step so listers trust the process.
13. Property Requests feature: "Buyers are already posting what they're looking for — see if your property matches" linking to the real property-request browse page.

**Local relevance**
14. City/neighborhood spotlight posts *only once real listings exist there* — never invent inventory or popularity to make a location look more active than it is.
15. Seasonal angles (e.g. moving season, Eid-related housing search upticks) — grounded in general knowledge of the market, not fabricated Aqar-specific stats.

### 3.3 Novixa (10%)

Light, credibility-building, mostly LinkedIn/X.

1. "Meet the company behind Aqar" — one clean post introducing Novixa, linking to novixa.dev.
2. Build-in-public style post about a real technical decision (e.g. "why we built Aqar bilingual from day one," or a genuinely-shipped feature) — only ever describe what's actually true of the stack/process.
3. If/when applicable: hiring posts for real open roles.
4. Milestone posts *only for real milestones* — a genuine launch, a real feature ship, a real press mention. Not manufactured "X months of growth" posts without real numbers behind them.
5. Founder/team spotlight — humanizes the brand without needing fabricated social proof.

---

## 4. Ready-to-use copywriting prompts

Feed these directly to a copywriting/LLM tool. Each includes the real facts to anchor it — fill in only what's marked, never invent the rest.

### Launch announcement (landing page)
> Write a [Arabic / English] social media launch post for Novixa Aqar's new landing page at aqar-landing-page.vercel.app. Tone: confident, calm, no hype words. Mention that it's bilingual (Arabic-first, full English), lets visitors search real property listings in Yemen by type/price/location, and has a direct path to list your own property. End with a single clear call to action: visit the site and search. Do not mention any user counts, review scores, or statistics. Keep it under [80 words / 220 characters] for [platform].

### Feature-highlight post
> Write a short social post explaining the [insert real feature: property search filters / property comparison / submit-your-property flow / viewing request booking] feature on Novixa Aqar. Base every claim strictly on this description: [paste the exact feature description from docs/CONTENT_MODEL.md or the relevant section of ar/index.html or en/index.html]. Do not add any capability not in that description. Tone: helpful, plain-language, benefit-first sentence, then how it works in one or two sentences.

### Educational / how-to post
> Write an educational Arabic-first social post (with an English version) aimed at first-time property searchers in Yemen, explaining [topic, e.g. "the difference between للبيع and للإيجار listings" / "what a moderated listing means" / "how to compare two properties before deciding"]. No real-estate legal or financial advice — general orientation only. Tone: like a knowledgeable friend, not a lecture.

### Carousel script (5–7 slides)
> Write a [5/6/7]-slide Instagram/LinkedIn carousel script titled "[e.g. How Novixa Aqar works in 3 steps / 5 things you can do on the new Aqar site]". Slide 1 is a hook, the middle slides each cover one real feature with a one-line explanation, the last slide is a single call-to-action to visit aqar-landing-page.vercel.app. Base every slide strictly on real features listed in this brief: [paste relevant section from §3 above]. No invented statistics anywhere.

### Property-owner recruitment post
> Write a social post inviting property owners/landlords in Yemen to list their property on Novixa Aqar. Mention it takes minutes, every submission is reviewed before publishing (real, confirmed feature), and it puts the property in front of people actively searching. Do not promise a specific number of views, leads, or a guaranteed sale/rental — that would be an unverifiable claim.

### Company/Novixa post (LinkedIn/X)
> Write a short LinkedIn post introducing Novixa, the company behind the Novixa Aqar real-estate platform (novixa.dev). Tone: builder-credible, not corporate-marketing. Mention that Aqar is a bilingual, Arabic-first product built for the Yemeni market. No team size, funding, or user-count claims unless [insert real, current figure here].

### News / press pitch angle
> Draft a short press-pitch paragraph for local Yemeni or regional tech/business media, announcing the new Novixa Aqar landing page and the broader platform. Lead with the real, verifiable facts: [bilingual Arabic-first real-estate platform for Yemen / property search, submission, and comparison tools / built and owned by Novixa]. Do not include unverifiable claims about market size, funding, or user numbers unless supplied.

### Ad copy — traffic objective
> Write 4 short variations (each under [125] characters) of paid social ad copy driving clicks to aqar-landing-page.vercel.app. Objective: traffic. Audience: people searching for property in Yemen. Each variation should lead with a different real hook: (1) the search/filter experience, (2) the bilingual Arabic-first design, (3) listing your own property, (4) the "search, compare, contact" 3-step flow. No urgency language, no unverifiable numbers.

### Ad copy — lister acquisition objective
> Write 3 short paid ad variations targeting property owners in Yemen, encouraging them to list on Novixa Aqar. Emphasize: fast submission, moderation before publish (trust signal), reaching active searchers. No guaranteed-results language.

### FAQ-style post
> Write a short "did you know" or FAQ-style post answering one real, common question about using Novixa Aqar: [e.g. "Is my submitted property reviewed before it goes live?" / "Can I compare more than one property before deciding?" / "Does Aqar work in English too?"]. Answer only using confirmed real functionality.

---

## 5. Image/graphic generation prompts

These are written for an AI image tool (Midjourney, Adobe Firefly, DALL·E) or as a brief for a designer. All reference the real brand palette (`#2563EB` blue, `#0F172A` navy, `#10B981` emerald) and the real house-mark logo — never generate a new/different logo.

### Social announcement card (matches the site's own OG image style)
> A clean, modern flat-design social media graphic for a real-estate tech brand. Dark navy background (#0F172A) with a subtle grid/dot texture, a rounded-square house-mark logo icon in blue (#2563EB) and emerald (#10B981) centered near the top, bold white headline text area below it, thin blue accent bar across the top edge, thin emerald accent bar across the bottom edge. No stock photography, no 3D renders, no gradients beyond a very subtle two-tone navy blend. Square 1:1 and 4:5 vertical crops. Leave clear negative space for headline and subhead text to be added afterward.

### Feature-explainer graphic (property type icons)
> A minimal line-icon set on a white or light-gray background representing 5 real-estate categories: apartment building, single-family villa, land/plot, commercial storefront, multi-unit investment building. Consistent 1.8px stroke weight, blue (#2563EB) stroke color, no fill, no drop shadows, geometric and simple — matching a modern SaaS icon system, not skeuomorphic or cartoonish.

### "How it works" 3-step graphic
> A horizontal 3-step process graphic on a dark navy (#0F172A) background, numbered 01/02/03 in emerald green (#10B981), each step paired with a simple white line icon: a magnifying glass (search), two overlapping document/compare cards (compare), a speech bubble or handshake (contact). Clean sans-serif typography, generous spacing, no photographic elements.

### Carousel template (feature slide)
> A single Instagram carousel slide template, 1080x1350px, white background, small blue (#2563EB) house-mark logo top corner, one bold headline line, one short supporting line, one simple relevant line-icon centered, generous margins, consistent with a fintech/proptech SaaS visual style — not a real-estate agency template with photographic property collages.

### Quote/testimonial graphic — DO NOT GENERATE UNTIL A REAL QUOTE EXISTS
> [Hold this template until a real, consented customer/lister quote is available.] When ready: a clean quote card, light background, large quotation mark in emerald (#10B981), the real quote text, the real person's name/role (with their permission), small logo mark bottom corner.

### Ad creative — property owner recruitment
> A split-composition social ad graphic: left half a simple illustrated home/building icon in blue and emerald on navy, right half clean white space for headline text "List your property in minutes" (or Arabic equivalent), bottom corner house-mark logo, one clear button-style call-to-action shape reading "أضف عقارك" / "Submit Your Property". No real property photography unless a specific, rights-cleared listing photo is being used for a specific real listing ad.

### Launch teaser (motion-suitable static frame)
> A minimal animated-style teaser frame: navy background, the house-mark logo scaling in from small to its final size at center, "Novixa Aqar" wordmark fading in below it in white, thin blue-to-emerald gradient line sweeping in from one edge. Designed as the opening frame of a short launch video/reel.

---

## 6. Video / Reels / Shorts prompts

Real, screen-recorded product footage is almost always stronger than any generated video for a product this concrete — favor it over AI-generated video wherever possible.

### 15–20s feature-tour Reel
> Script a 15-20 second vertical video: Hook (0-2s) — bold on-screen text "Finding a property in Yemen shouldn't take forever." Body (2-15s) — real screen recording of the Aqar landing page: typing a search term, selecting a property type, hitting search, landing on real results. Close (15-20s) — logo + "aqar-landing-page.vercel.app" on screen, one-line CTA voiceover/text: "Search Aqar now."

### "3 steps" explainer Reel
> Script a 20-25 second vertical video built around the real 3-step flow: Search → Compare & Explore → Contact & Request a Viewing. Each step gets ~7 seconds: on-screen numbered label (01/02/03), a short real screen-recorded clip of that step, one short voiceover/caption line per step taken directly from the landing page's own copy. End on logo + CTA.

### Property-owner recruitment video
> Script a 30-45 second video walking through the real "Submit Your Property" flow from click to confirmation, voiceover emphasizing: takes minutes, every listing is reviewed before publishing, reaches people actively searching. Screen-recorded from the real form — no fabricated example listing details beyond clearly-marked placeholder text.

### Long-form YouTube walkthrough (5-8 min)
> Script a full narrated platform walkthrough: landing page tour, search and filtering, opening a real listing, using the comparison tool, [3D viewer demo if confirmed live], submitting a property, and the bilingual toggle. Structured with on-screen chapter titles. Voiceover tone: helpful narrator, not a sales pitch — this is a "here's exactly what this is" video for people evaluating the platform.

### "Built bilingual" mini-doc angle
> Script a short (30-40s) video about the design decision to build Aqar Arabic-first rather than translating an English product. Show the real RTL layout, the logical CSS mirroring (mention this only for a technical audience/channel), and both language versions side by side. This is a good LinkedIn/X piece for the Novixa 10% lane, since it's a genuine technical/product story, not just a feature ad.

### TikTok/Reels market-tips series
> Script a recurring short-form series format: "[Local real-estate tip of the week]" — genuinely useful, general housing-search guidance for the Yemeni market, ending each episode with a soft mention of Aqar's relevant feature (e.g. a tip about comparing listings → mention the comparison tool exists). Keep the educational content genuinely useful even without the product mention — don't make every tip a thin excuse for an ad.

---

## 7. Launch-week content calendar (starter plan)

A concrete first week, since the landing page just went live — adjust cadence after seeing what performs.

| Day | Landing page (50%) | Aqar product (40%) | Novixa (10%) |
|---|---|---|---|
| Day 1 | Launch announcement post (all platforms) | — | — |
| Day 2 | "5 things you can do" carousel | — | — |
| Day 3 | — | "How to read a listing" educational post | — |
| Day 4 | Hero/search feature demo clip | — | — |
| Day 5 | — | Property-owner recruitment post | — |
| Day 6 | "Why Novixa Aqar" 4-pillar carousel | — | LinkedIn: "Meet the company behind Aqar" |
| Day 7 | Bilingual toggle demo clip | Property comparison feature highlight | — |

After week one, settle into a steady rhythm — a reasonable ongoing cadence is roughly 3-4 landing-page/product posts per week plus one Novixa post every one to two weeks, adjusted by what actually gets engagement.

---

## 8. Hashtag bank

**Arabic:** #عقار #عقارات_اليمن #عقارات_صنعاء #عقارات_عدن #شقق_للبيع #شقق_للإيجار #أراضي_للبيع #فلل_للبيع #عقارات_تجارية #نوفيكسا_عقار

**English:** #YemenRealEstate #PropertyYemen #RealEstateTech #PropTech #NovixaAqar #ApartmentsForRent #VillasForSale #ArabicFirst #BilingualTech

Use sparingly and relevantly per platform — a handful of targeted tags outperforms a long generic block on most platforms today.

---

## 9. Before you publish — a 30-second checklist

- [ ] Every number/stat in this post is real and current, not estimated or invented
- [ ] Every feature mentioned is actually live on production right now
- [ ] Every screenshot is from the real, current site — not an old or local build
- [ ] Any quote/testimonial has real, consented attribution
- [ ] Arabic copy was written natively, not machine-translated from the English draft (or vice versa)
- [ ] The link goes to the real live URL, not a placeholder
