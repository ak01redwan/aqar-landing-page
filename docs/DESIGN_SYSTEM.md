# Design system

Tokens live as CSS custom properties in `src/styles/main.css` (`@theme` block, Tailwind v4's CSS-first config — no `tailwind.config.js`, matching how the real app configures Tailwind 4). This doc is the provenance/reasoning layer on top of that file.

## Color — verified against the real app, not guessed from the spec

The master spec (§3) proposed primary blue `#2563EB`, navy `#0F172A`, and accent teal `#14B8A6`. Auditing the real app's CSS and logo SVG confirmed two of three and corrected one:

| Token | Value | Verified against |
|---|---|---|
| `--color-brand-blue-600` (primary) | `#2563EB` | `resources/css/app.css` `.badge-sale`, pervasive `blue-600` utility usage, `theme-color` meta tag |
| `--color-brand-navy-900` | `#0F172A` | Logo SVG background rect |
| `--color-brand-accent-500` (accent) | `#10B981` | Logo SVG roof mark; close to the app's "for rent" badge `#059669` (`--color-brand-accent-600`) |
| `--color-brand-amber-500` | `#F59E0B` | App's "Featured" badge gradient |

**The spec's teal (`#14B8A6`) does not appear anywhere in the real codebase and was not used here.** This is the single largest correction from spec-as-written to spec-as-verified; see `docs/CONTENT_MODEL.md` for the full reasoning.

## Typography

Matches the real app's font system (`resources/css/app.css`, `layouts/app.blade.php`) rather than the spec's unspecific guidance:

- **Arabic (`[dir="rtl"] body`)**: Cairo, falling back to Tajawal — both are the real app's actual Arabic font choices.
- **Latin (`body` default)**: Outfit — loaded by the real app's public layout alongside Cairo/Tajawal.

Loaded via Google Fonts `<link>` with `rel="preconnect"` and only the weights actually used (500/600/700/800), matching spec §23's "don't load unused weights" and §46's caution against over-preloading.

## Spacing, radius, shadow

Small, deliberate scales rather than arbitrary values repeated across templates (spec §24):

- Radius: `--radius-sm` (0.375rem) through `--radius-xl` (1.25rem) — 4 steps, not a dozen.
- Shadow: two levels only, `--shadow-card` (resting) and `--shadow-elevated` (hover/focus state), tuned to be visible but not heavy.
- Container: `--container-page` = 80rem (1280px) max-width, with responsive inline padding via `.container-page`.

## Components

Hand-written semantic classes (`.btn`, `.btn-primary`, `.field-input`, `.card`, etc.) rather than long inline Tailwind utility chains everywhere. This is a deliberate choice against the "wall of utility classes" pattern: it keeps the markup readable, gives the design system an actual vocabulary, and means a visual tweak (e.g. button radius) is a one-line change instead of a find-and-replace across every template.

All interactive states (hover, focus-visible, disabled where relevant) are defined once per component class, not per-instance.

## RTL / LTR

- Logical CSS properties throughout (`padding-inline`, `inset-inline-start`, Tailwind's `ps-`/`pe-`/`ms-`/`me-`/`start-`/`end-` utilities) — no hardcoded `left`/`right`, matching the real app's own convention (`CLAUDE.md`: "prefer logical Tailwind utilities... in any file you touch that renders in both directions").
- `[data-mirror-rtl]` is applied only to the two icons that carry directional meaning (search-arrow-adjacent glyphs) — not globally, since most icons (house, tag, chart) don't encode direction and shouldn't flip.
- `<html dir="rtl">` / `<html dir="ltr">` set per-page (not toggled client-side), consistent with distinct-URL locale routing (see `docs/PLANNING.md` §4).

## Motion

`prefers-reduced-motion: reduce` collapses all transition/animation durations to near-zero (`src/styles/main.css` `@layer base`). The only motion in this build is: mobile drawer open/close (instant class toggle, no animation library), header shadow fade-in on scroll, and hover/focus transitions — nothing that requires JS-driven animation or a library.

## Anti-generic-AI checklist (spec §84) — self-review

Checked against the spec's explicit list of patterns to avoid:

- No repeated identical-looking cards — property-type shortcuts, "why Aqar" pillars, and trust cards each use a different card treatment (icon+label, icon+heading+body, heading+body only).
- No gradients as a dominant device — the only gradient is a two-stop near-solid navy background gradient in the hero, barely perceptible, not a colorful decorative gradient.
- No glassmorphism, no floating blobs, no oversized glowing borders.
- Hero visual is a flat geometric SVG illustration (buildings + a location pin), not a generic 3D render or unlicensed stock photo — there is no access to real property photography for this build (see `docs/CONTENT_MODEL.md`), and the spec explicitly prefers no image over generic stock imagery.
- Copy avoids the spec's named clichés ("revolutionizing," "next-generation ecosystem," "unlock limitless possibilities") — the one "Next Generation..." line is the app's own existing hero eyebrow text, reused verbatim for product-voice consistency, not written fresh.
