# Content model

Every real product claim, route, and label used on the page, with where it came from — so nothing here reads as invented. Verified against `aqar-project/aqar` (the real Laravel application) on 2026-08-28.

## Routes linked from this site

All under the app's origin (hardcoded directly into every `href`/`action` in `ar/index.html` and `en/index.html` — see `docs/DEPLOYMENT.md` for why there's no config-file layer), taken directly from `routes/web.php` in the real app:

| Landing page use | Real route | Route name |
|---|---|---|
| "Browse all properties" / category shortcuts | `GET /properties` | `property.list` |
| Hero search submits to | `GET /properties?search=&status=&property_type=` | `property.list` (Livewire `PropertyList`) |
| "Submit your property" | `GET /submit-property` | `property.submit` |
| "Property requests" | `GET /property-request` | `property.request` |
| "News" | `GET /news` | `news`/`news.list` |
| "About" | `GET /about` | `about` |
| "Services" | `GET /services` | `services` |
| "Contact" | `GET /contact` | `contact` |
| "Terms" | `GET /terms-and-conditions` | `terms-and-conditions` |
| "Privacy" | `GET /privacy` | `privacy` |
| "Log in" | `GET /login` | `login` |
| "Register" | `GET /register` | `register` |

## Hero search — field names

The real app's `PropertyList` Livewire component (public properties in `app/Livewire/PropertyList.php`) binds `search`, `status`, and `propertyType` (URL-aliased `property_type`). The hero form's `name` attributes match these exactly so a GET submission pre-filters real results.

**Known gap:** the exact `property_type` slugs used by the real select box in `home.blade.php` weren't confirmed character-for-character during the audit — only the labels were. The values used here (`apartment`, `villa`, `land`, `commercial_shop`, `building`) are inferred from the app's translation keys (`lang/en/property.php`), which is a reasonable but not 100%-verified match. **Before launch: open the real app's homepage search dropdown and diff the `value=""` attributes against this list.** Worst case if wrong: the link still lands on a working `/properties` page, just without the filter pre-applied — not a broken link.

`status` values are confirmed exactly: `Property::STATUS_FOR_SALE = 'for_sale'`, `Property::STATUS_FOR_RENT = 'for_rent'`.

## Navigation labels

Taken verbatim from `lang/ar/navigation.php` / `lang/en/navigation.php`:

| Key | Arabic | English |
|---|---|---|
| home | الرئيسية | Home |
| properties | العقارات | Properties |
| submit_property | أضف عقارك | Submit Your Property |
| about_us | من نحن | About Us |
| services | خدماتنا | Services |
| contact_us | اتصل بنا | Contact Us |
| login | تسجيل الدخول | Log In |
| register | إنشاء حساب | Register |

Hero eyebrow, search placeholder, and "browse all" CTA are copied verbatim from `resources/views/home.blade.php` in the real app (not reworded), specifically to match existing product voice per spec §5 ("use the exact product wording that best matches existing UI labels").

## Property types shown as category shortcuts

Matches the narrower 5-option set used in the real homepage's hero search dropdown (`home.blade.php`), not the full 10-type list in `lang/*/property.php` (which also includes office, rest house, duplex, penthouse, warehouse — omitted here to avoid an oversized shortcut grid, consistent with spec §10's "avoid six identical oversized cards").

## Sections marked DEFERRED

Per spec §86 Phase B, anything without real backing data is deferred rather than invented:

| Spec section | Status | Reason |
|---|---|---|
| §14 Location/area discovery | DEFERRED | Real geo fields exist on `Property` (lat/lng, `neighborhood_id`), but no confirmed public "popular cities" aggregate page to link to |
| §66 Interactive map | DEFERRED | No confirmed public map data endpoint reachable from a static site |
| Featured properties as a card grid | REPLACED with editorial section | No database access from this static site; spec §11 explicitly prefers "clean editorial introduction" over fake cards when data isn't available here |
| News as article preview cards | REPLACED with teaser + CTA | Same reasoning; the News model/routes genuinely exist in the app, but this site can't safely render live previews without an API — see `FEATURED_PROPERTIES_ENDPOINT` note below |

## Integration point for live data (not yet wired)

If the app ever ships a public JSON endpoint for featured properties (e.g. `GET /api/public/properties/featured`) or recent articles (e.g. `GET /api/public/news/latest`), that's the natural point to turn the editorial "Featured Properties" and "News" sections into real card grids without restructuring the page. No such endpoint exists today, so this is a documented future option, not wired-up code.

## Contact information

The app's `GeneralSettings` has real contact details on file — but those are seeded for the **Dar Hadhramaut tenant**, not the Novixa Aqar platform (see `docs/PLANNING.md` §2 for the branding decision; deliberately not reproduced here since this is a public repo and that contact info belongs to a specific tenant business, not this platform-level page). Printing tenant-specific contact info on a platform-level marketing page would also be actively misleading, so the footer links to the app's real `/contact` form instead of printing an email or phone number. No platform-level contact email/phone was confirmed during the audit.

## Logo / brand mark

`public/images/logo.svg` is byte-for-byte the real app's `public/images/logo.svg` — same company, same asset, reused intentionally (not recreated) so the mark is identical everywhere it appears.

## Colors — one correction from the master spec

The spec (§3) claims an accent teal `#14B8A6`. That color does not appear anywhere in the real app. The actual accent, confirmed in the logo SVG and the "for rent" badge CSS (`resources/css/app.css`), is **emerald** (`#10B981` / `#059669`). This build uses the verified emerald value; see `docs/DESIGN_SYSTEM.md`.
