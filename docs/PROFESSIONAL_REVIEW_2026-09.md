# Professional Review — September 2026

A full review of the live Aqar landing page against: the master spec, Novixa's own institutional brand/company documents (uploaded 2026-09-09), the actual live Novixa company site, and current UI/UX/SEO/accessibility best practice. This supersedes nothing in `docs/QA_REPORT.md` (that pass is still valid) — it's a second-pass review triggered by new source-of-truth material that wasn't available when this repo was first built.

**Context that changed since the last review:** the product owner confirmed the real Aqar app is being actively prepared for its own demo deployment, separate from this landing page. This landing page's job is exactly what it already does — introduce Aqar, then hand the visitor to the real app to search/browse/try it — so no architectural change is needed here, only the fixes below.

---

## 1. Executive summary

The page remains structurally sound (routes, accessibility, SEO scaffolding, performance — see `docs/QA_REPORT.md` for that full pass). This review found **two concrete, evidence-backed defects** worth fixing immediately, plus several lower-priority polish opportunities informed by the newly-provided Novixa brand material.

## 2. New evidence gathered this pass

- **Live Novixa company site** (`https://novixa-cyan.vercel.app/ar`) — confirmed real and reachable.
- **`https://novixa.dev`** — attempted to load it directly: **it does not resolve.** This matches what the uploaded `Novixa_Comprehensive_Website_UI_UX_SEO_Audit.md` already flagged ("A direct network attempt to https://novixa.dev also failed DNS resolution"). This is not a stale, one-off finding — it's still true today.
- **Accent color, empirically measured on the live company site**: the "Zero-Lock" stat badge computes to `oklch(0.777 0.152 181.912)` — a hue of ~182°, which is teal/cyan territory, not emerald/green (~150-160° hue). This matches the accent color specified in all three uploaded brand documents (`AQAR_LANDING_PAGE_MASTER_SPEC.md`, `NOVIXA_COMPANY_CONTEXT.md`, `NOVIXA_MASTER_REFERENCE_BOOK_v1.0.md`), which all independently state **`#14B8A6` (teal)** as the accent.
- **Novixa's own visual-storytelling principle** (`NOVIXA_COMPANY_CONTEXT.md` §27): "Prefer showing rather than telling... real interfaces... meaningful data." Noted as a future-polish opportunity, not an immediate fix (see §5).

## 3. Finding #1 — Accent color: this repo's emerald was the wrong correction

**What happened:** early in this build, I inspected the real Aqar Laravel app's CSS and found emerald (`#10B981`) used ad hoc (in the logo SVG, a badge color) but never found `#14B8A6` anywhere in that app's code. I concluded the master spec's "teal" claim was a documentation error and switched this landing page to emerald, with the reasoning recorded in `docs/DESIGN_SYSTEM.md`.

**Why that was the wrong call, in hindsight:** the Aqar *app* has no formal design-token system — its README/CLAUDE.md says colors are "used ad hoc as raw Tailwind utility classes," not sourced from an approved brand palette. One inconsistently-styled sub-product is weak evidence for what the *company's* brand accent actually is. Now that the actual Novixa brand documents (three of them, independently) and the live company site (empirically measured, not just claimed) all agree on teal `#14B8A6`, that's the stronger, more authoritative source. The Aqar app's emerald usage looks like drift from the brand system, not the system itself.

**Verdict: switch this landing page's accent from emerald back to teal `#14B8A6`**, matching the live company brand. Implemented in §6.

## 4. Finding #2 — Footer/JSON-LD link to `novixa.dev` is a dead link

**What happened:** the footer's "Powered by Novixa" credit and both pages' `Organization` JSON-LD `sameAs` field point to `https://novixa.dev`.

**Why it's wrong:** verified directly — `novixa.dev` does not resolve. Every visitor who clicks that link, and every crawler that follows the JSON-LD `sameAs`, hits a dead domain. This is worse than the intentional `app.novixa-aqar.example` placeholder (which is *supposed* to look unreachable) — this one is presented as a real, working link and isn't one.

**Verdict: point both to the real, currently-live company site, `https://novixa-cyan.vercel.app`**, with a documented note to swap to `novixa.dev` once that domain is actually live. Implemented in §6.

## 5. Lower-priority observations (not fixed this pass — reasoning below)

| Observation | Why not fixed now |
|---|---|
| Novixa's own content principle favors showing real interfaces/data over text-only sections. The landing page's "Featured Properties" section is intentionally text-only (§11 of the master spec explicitly prefers this over fake cards when there's no real inventory to show). | Building a "real interface" visual here risks looking like a fabricated screenshot unless it's built very carefully from confirmed-real UI, which is a real design task, not a quick fix. Flagged for a future iteration, not attempted under review-pass time pressure. |
| Novixa's live company site uses a much more technical/dashboard-heavy visual language (live event feeds, latency stats, SLA numbers) than Aqar's calm, consumer-facing real-estate tone. | This is a *feature*, not a bug — Aqar's audience (people searching for a home) and Novixa's audience (technical/business decision-makers evaluating an engineering partner) are different enough that matching Novixa's dashboard aesthetic on Aqar would violate the master spec's own "no generic AI dashboard feel" guidance (§3: "Do not make Aqar look like a finance dashboard"). Kept as-is deliberately. |
| The health-appointment-platform spec (`novixa-health-appointment-platform-master-spec.md`) was uploaded but is unrelated to Aqar. | Out of scope for this repo; not reviewed. |

## 6. Fixes implemented this pass

1. **`src/styles/main.css`** — `--color-brand-accent-*` tokens changed from emerald to teal (`#14B8A6` family), with the header comment rewritten to explain the correction and cite the evidence (live-site measurement + 3 brand docs) instead of the old "spec was wrong" claim.
2. **`scripts/generate-favicons.mjs`** — the `ACCENT` constant used for the logo mark and OG images updated to teal; OG images regenerated.
3. **`public/images/logo.svg`, `public/favicon.svg`** — the roof-mark color updated from emerald to teal, consistent with the corrected brand accent (this is *this repo's copy* of the mark; the source Aqar app's own logo file is untouched since that's a decision for whoever owns that app's code, not this landing page).
4. **`ar/index.html`, `en/index.html`** — the "Novixa" footer link and both `Organization` JSON-LD `sameAs` fields changed from `https://novixa.dev` to `https://novixa-cyan.vercel.app`.
5. **`docs/DESIGN_SYSTEM.md`, `docs/CONTENT_MODEL.md`, `docs/PLANNING.md`** — updated to reflect the corrected reasoning and cite this review as the source of the change, so a future reader doesn't see two contradicting "we investigated the color and here's the truth" narratives without knowing which one is current.

## 7. Verification performed

- Rebuilt (`npm run build`) after each change, checked output.
- Re-viewed both regenerated OG images visually to confirm teal renders correctly and legibly.
- Re-checked the footer/JSON-LD links point to a URL that actually resolves (`novixa-cyan.vercel.app`, confirmed live during this session).
- Confirmed no other file references `novixa.dev` or the old emerald hex values after the change (repo-wide search).

## 8. Final verdict

**No blockers.** The two real defects found this pass (wrong accent color, dead company link) are both fixed and verified. Everything else already covered in `docs/QA_REPORT.md` remains valid. The one remaining known gap — the Aqar app itself not yet having a public demo URL — is unchanged from last review and is explicitly being worked on separately, per the product owner.
