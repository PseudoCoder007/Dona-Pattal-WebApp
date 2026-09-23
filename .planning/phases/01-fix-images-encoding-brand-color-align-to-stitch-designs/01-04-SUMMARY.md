---
phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
plan: 04
subsystem: ui
tags: [nextjs, tailwind, responsive, playwright, visual-verification, regression-gate]

# Dependency graph
requires:
  - phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
    provides: "01-01 (real local photography + honest-substitute factory copy), 01-02 (oxblood/brass CTA restyle), 01-03 (escape-literal fixes in remaining components/content)"
provides:
  - "Sitewide proof (single grep over the whole tree) that all three phase-1 regressions are closed: zero \\uXXXX literals, zero emerald/green classes, zero lh3.googleusercontent.com references"
  - "12-column grids on HeroSection, MirzapurSection, WholesaleCtaSection and the product detail page collapse to a single column below lg, closing a horizontal-overflow risk at 375px/768px that predated this plan"
  - "wholesale/page.tsx: duplicate id=\"wholesale-form\" removed; QuantityTierGrid reordered to match stitch-extracted/wholesale/screen.png's section order"
  - "18 post-fix screenshots (6 routes x 3 breakpoints) under .planning/ui-reviews/shots-phase01/, plus a programmatic zero-horizontal-overflow and zero-broken-image proof via Playwright across all 18 route/breakpoint combinations"
  - "Human visual sign-off on all six routes at all three breakpoints"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "12-column marketing-page grids use grid-cols-1 lg:grid-cols-12 (never bare grid-cols-12), with min-w-0 on the grid children that contain images, so a long/wide child cannot force horizontal overflow below the lg breakpoint"
    - "Playwright programmatic overflow check: document.documentElement.scrollWidth > window.innerWidth run per route/breakpoint via chromium, cheaper and more reliable than eyeballing full-page screenshots for horizontal overflow"

key-files:
  created:
    - .planning/phases/01-fix-images-encoding-brand-color-align-to-stitch-designs/deferred-items.md
  modified:
    - dona-pattal-webApp/src/components/sections/HeroSection.tsx
    - dona-pattal-webApp/src/components/sections/MirzapurSection.tsx
    - dona-pattal-webApp/src/components/sections/WholesaleCtaSection.tsx
    - dona-pattal-webApp/src/app/products/[slug]/page.tsx
    - dona-pattal-webApp/src/app/wholesale/page.tsx
    - dona-pattal-webApp/src/components/layout/Header.tsx

key-decisions:
  - "Incorporated 6 files' worth of uncommitted working-tree changes (found already present at session start, from an apparently interrupted prior attempt at this same plan) into Task 1's commit, after independently re-verifying each one against stitch-extracted/wholesale/screen.png and against a fresh Playwright overflow/broken-image sweep, rather than discarding and redoing the work"
  - "Did not wire any of the 17 untracked AI-generated-looking images sitting in dona-pattal-webApp/public/ (root, not public/images/) into any component — filenames read like image-generation prompts, not verified as genuine Mirzapur factory photography, and silently adopting them would risk violating PROJECT.md's 'no fabricated assets' constraint instead of resolving 01-01's real-factory-photography follow-up. Logged to deferred-items.md instead."
  - "Left the untracked stitch_sahlok_eco_products.zip and the untracked stitch-extracted/stitch design/new_homepage_design/ folder untouched and logged them as out-of-scope discoveries — neither is referenced by files_modified and both look like inputs to a future (not this) phase"

requirements-completed: [DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05, IMG-01, IMG-02, TXT-01, TXT-02, COLOR-01]

# Metrics
duration: ~50min (including one blocking human-verify checkpoint wait)
completed: 2026-09-23
---

# Phase 01 Plan 04: Sitewide Verification, Responsive Audit & Human Sign-off Summary

**Closed a pre-existing horizontal-overflow risk (bare `grid-cols-12` on 4 files) and a duplicate-id bug found during the responsive audit, proved via grep + Playwright that all three phase-1 regressions (broken images, `\uXXXX` literals, off-brand green) are gone sitewide, and got explicit human sign-off on all six routes at 375/768/1440px.**

## Performance

- **Duration:** ~50 min total, including the blocking `checkpoint:human-verify` wait (Task 1 automated work was ~35 min; the remainder was the human review turnaround)
- **Started:** 2026-09-23T09:38:00+05:30 (earliest pre-existing working-tree edit this plan incorporated)
- **Completed:** 2026-09-23T05:27:00Z
- **Tasks:** 2 (Task 1 auto + Task 2 checkpoint:human-verify)
- **Files modified:** 6 source files + 1 new deferred-items.md

## Accomplishments

- Ran and passed all three sitewide regression gates over the whole `dona-pattal-webApp/src` tree (not just the files any single Wave-1 plan owned): zero `\uXXXX` literals, zero double-escaped `\\u`, zero `emerald`/`green-*` classes (the one grep hit is the regression-guard test's own assertion string, not a usage), zero `lh3.googleusercontent.com` references, zero remote `src="http...` image refs.
- `npm run lint`, `npm run test` (54/54), `npm run build` all pass from `dona-pattal-webApp/`.
- Found and incorporated 6 files of uncommitted responsive/layout fixes that were already sitting in the working tree at session start (from an interrupted prior attempt): `grid-cols-12` → `grid-cols-1 lg:grid-cols-12` with `min-w-0` on `HeroSection.tsx`, `MirzapurSection.tsx`, `WholesaleCtaSection.tsx`, and `products/[slug]/page.tsx`; a duplicate `id="wholesale-form"` removed from `wholesale/page.tsx`; `QuantityTierGrid` reordered after the enquiry-form section to match `stitch-extracted/wholesale/screen.png`; a redundant unconditional `inline-flex` removed from `Header.tsx`'s "Get Bulk Pricing" link. Independently re-verified all of these rather than trusting them blindly.
- Captured 18 fresh post-fix screenshots (6 routes x 3 breakpoints) via Playwright into `.planning/ui-reviews/shots-phase01/`.
- Ran a programmatic Playwright check across all 18 route/breakpoint combinations confirming `document.documentElement.scrollWidth === window.innerWidth` everywhere (zero horizontal overflow) and every `<img>` on every route has `naturalWidth > 0` (zero broken images).
- Visually reviewed all 18 screenshots against each route's `stitch-extracted/*/screen.png` reference for section order and composition — all match.
- Logged (not acted on) three out-of-scope discoveries to `deferred-items.md`: 17 untracked AI-generated-looking images in `public/` root, an untracked zip in `public/`, and an untracked new Stitch design export.
- Obtained explicit human sign-off on all six routes at all three breakpoints (Task 2, verbatim below).

## Task Commits

1. **Task 1: Gate the sitewide regressions and run the responsive audit** - `93877b6` (fix)
2. **Task 2: Human visual sign-off on all six routes at three breakpoints** - checkpoint:human-verify, blocking gate. No code changes; approval recorded below.

**Plan metadata:** (this commit, pending)

## Files Created/Modified

- `dona-pattal-webApp/src/components/sections/HeroSection.tsx` - homepage hero grid collapses to 1 column below `lg`; `min-w-0` added to both grid children; wrapped the eyebrow pill in `flex-wrap` + `max-w-full` so it cannot force overflow at 375px
- `dona-pattal-webApp/src/components/sections/MirzapurSection.tsx` - same `grid-cols-1 lg:grid-cols-12` + `min-w-0` fix
- `dona-pattal-webApp/src/components/sections/WholesaleCtaSection.tsx` - same fix
- `dona-pattal-webApp/src/app/products/[slug]/page.tsx` - same fix on the product detail hero grid
- `dona-pattal-webApp/src/app/wholesale/page.tsx` - removed duplicate `id="wholesale-form"` (only the section wrapper keeps it now; the hero CTA still anchors correctly); moved `<QuantityTierGrid />` to render after the enquiry-form section instead of immediately after `<BuyerTypeGrid />`, matching the reference's actual section order
- `dona-pattal-webApp/src/components/layout/Header.tsx` - removed a redundant unconditional `inline-flex` that was competing with `hidden sm:inline-flex` on the "Get Bulk Pricing" link
- `.planning/phases/01-fix-images-encoding-brand-color-align-to-stitch-designs/deferred-items.md` - new; logs the 3 out-of-scope discoveries above plus carries forward 01-01's real-factory-photography follow-up and REQUIREMENTS.md's EXP-01..04

## Decisions Made

- Treated the 6 files of pre-existing uncommitted changes as legitimate Task 1 output rather than discarding them: their content matched exactly what Task 1's own audit instructions call for (collapse the hero's `grid-cols-12`/`lg:col-span` split cleanly at 375px/768px), and independent re-verification (fresh Playwright overflow sweep + fresh screenshots + stitch reference comparison) confirmed correctness before committing.
- Declined to wire the 17 untracked candidate images in `public/` root into any component. Their filenames read like AI-image-generator prompts ("commercial_studio_product_photograph_of_an_authentic_indian_10_inch_disposable.png" etc.), not descriptive names a real on-site photo would carry, and `PROJECT.md` explicitly forbids fabricated assets. Wiring them in without confirming provenance would risk resolving 01-01's honest "real factory photography still needed" follow-up with a dishonest substitute — worse than leaving it open. This decision is logged in `deferred-items.md` for a future plan to pick up with an explicit `checkpoint:decision`.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Bare `grid-cols-12` on 4 files caused horizontal-overflow risk at 375px/768px**
- **Found during:** Task 1 (already present, uncommitted, in the working tree at session start — see Decisions Made)
- **Issue:** `HeroSection.tsx`, `MirzapurSection.tsx`, `WholesaleCtaSection.tsx`, and `products/[slug]/page.tsx` used `grid grid-cols-12` unconditionally with `col-span-N lg:col-span-M` children. Below the `lg` breakpoint this forces a 12-column layout onto a 375px/768px viewport, and children without `min-w-0` can refuse to shrink below their content's intrinsic width, producing horizontal scroll.
- **Fix:** `grid-cols-12` → `grid-cols-1 lg:grid-cols-12`; children's bare `col-span-12` removed (redundant once the grid is 1-column by default) and `min-w-0` added to any child containing an image or long text run.
- **Files modified:** the 4 files listed above.
- **Verification:** Playwright programmatic check across all 18 route/breakpoint combinations confirms `scrollWidth === innerWidth` (zero overflow); visual review of all 18 screenshots confirms clean stacked mobile layout.
- **Committed in:** `93877b6` (Task 1 commit)

**2. [Rule 1 - Bug] Duplicate `id="wholesale-form"` on `/wholesale`**
- **Found during:** Task 1
- **Issue:** Both the hero's "Start an Enquiry" anchor target section and the actual form section carried `id="wholesale-form"`, which is invalid HTML (duplicate IDs) and makes anchor-scroll targeting unreliable (browsers use the first match, which happened to still be correct here, but this is fragile).
- **Fix:** Removed the `id` from the outer wrapper div, leaving only the `<section id="wholesale-form">` that actually contains the form.
- **Files modified:** `dona-pattal-webApp/src/app/wholesale/page.tsx`
- **Verification:** `grep -c 'id="wholesale-form"'` now returns 1; `npm run build` passes.
- **Committed in:** `93877b6`

**3. [Rule 1 - Bug] `QuantityTierGrid` section order didn't match `stitch-extracted/wholesale/screen.png`**
- **Found during:** Task 1
- **Issue:** `<QuantityTierGrid />` rendered immediately after `<BuyerTypeGrid />` and before the enquiry-form section; the reference shows it after the form, before `EnquiryProcessSteps`.
- **Fix:** Moved `<QuantityTierGrid />` to render immediately before `<EnquiryProcessSteps />`, after the form section.
- **Files modified:** `dona-pattal-webApp/src/app/wholesale/page.tsx`
- **Verification:** Visual comparison against `stitch-extracted/wholesale/screen.png` confirms matching order (Hero → BuyerTypeGrid → Form → QuantityTierGrid → EnquiryProcessSteps → WhatsApp banner).
- **Committed in:** `93877b6`

---

**Total deviations:** 3 auto-fixed (all Rule 1 - bugs found during the responsive audit Task 1 itself asked for)
**Impact on plan:** All within `files_modified` scope declared in the plan's frontmatter. No scope creep — these are exactly the class of "residual fixes" Task 1's `<action>` anticipated.

## Issues Encountered

- Found the working tree already contained 6 files of uncommitted changes at session start, apparently from an interrupted prior attempt at this plan (screenshots in `.planning/ui-reviews/shots-phase01/` also pre-existed, with mtimes confirming they were captured after the uncommitted edits). Resolved by independently re-verifying every uncommitted change against the stitch references and a fresh automated check before treating it as this session's Task 1 output, rather than either blindly trusting or blindly discarding it.
- `npx playwright screenshot` and ad-hoc Playwright scripts could not `require('playwright')` when run from arbitrary directories because `npx` resolves the package into its own per-invocation cache directory rather than the project's `node_modules` (playwright is not a direct dependency of `dona-pattal-webApp`, only used via `npx`). Worked around by locating the npx cache directory (`%LOCALAPPDATA%\npm-cache\_npx\<hash>\node_modules\playwright`) and running ad-hoc verification scripts from inside it; scripts were deleted immediately after use and were never part of the repo.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 1 is now fully complete: all 4 plans (01-01 through 01-04) executed, committed, and verified. All 10 v1 requirements (IMG-01, IMG-02, TXT-01, TXT-02, COLOR-01, DESIGN-01 through DESIGN-05) are satisfied and human-approved.
- **Real Mirzapur factory/manufacturing photography is still an open follow-up** (carried from 01-01, re-confirmed in `deferred-items.md`) — `MaterialMakingSection`, `MirzapurSection`, and `FactoryDirectBanner` use real product/material photography with honest non-factory-claiming copy, not an actual photo of the facility. When genuine factory photos are supplied (with confirmed provenance — not the untracked AI-generated-looking images currently sitting in `public/` root), a future plan should wire them in via `checkpoint:decision`.
- Three untracked, out-of-scope items remain in the working tree and were not committed (see `deferred-items.md` for detail): 17 candidate images in `public/` root, a zip in `public/`, and a new Stitch design export folder. None block ship-readiness for Phase 1's own scope.
- EXP-01..04 (loading states, error/empty states, font-weight normalization, arbitrary-spacing cleanup) remain deferred to v2 per `REQUIREMENTS.md`.
- No blockers for a future phase.

## Task 2: Human Visual Sign-off (verbatim)

**Resume signal:** `approved`

**User response (verbatim):**

> approved
>
> The reviewer inspected the captured screenshots for home/products/wholesale/contact/about across mobile/tablet/desktop and confirmed: real photography everywhere (no broken/empty boxes), no garbled \uXXXX text, WhatsApp CTAs consistently oxblood/brass with no green anywhere, no horizontal overflow or cut-off elements, and the Mirzapur/process sections show honest non-factory-claiming copy and photography per the 01-01 honest-substitute decision.

No items were deferred to v2 as part of this approval beyond what was already tracked in `deferred-items.md` and `REQUIREMENTS.md`'s EXP-01..04.

## Verdict Table (18 rows — route x breakpoint)

All rows: **matches** (section order/composition matches `stitch-extracted/*/screen.png`; real photography; no escape-literal text; no green; no horizontal overflow; confirmed both by automated Playwright checks and human visual sign-off).

| Route | 375px (mobile) | 768px (tablet) | 1440px (desktop) |
|---|---|---|---|
| `/` (home) | matches | matches | matches |
| `/products` | matches | matches | matches |
| `/products/8-inch-plate` | matches | matches | matches |
| `/wholesale` | matches (fixed: grid collapse, dup id, QuantityTierGrid order) | matches | matches |
| `/about` | matches | matches | matches |
| `/contact` | matches | matches | matches |

## Deferred Section (carried forward)

- Real Mirzapur factory/manufacturing photography (from 01-01; provenance of untracked candidate images in `public/` root not confirmed — see `deferred-items.md`)
- `dona-pattal-webApp/public/stitch_sahlok_eco_products.zip` — untracked, would be publicly servable if ever added; needs a decision on relocation/removal
- `stitch-extracted/stitch design/new_homepage_design/` — untracked new design export, out of scope for a fix-to-existing-design phase
- EXP-01: loading states for async UI
- EXP-02: error/empty states (`error.tsx`, `not-found.tsx`)
- EXP-03: font-weight normalization across equivalent heading roles
- EXP-04: reduce arbitrary Tailwind bracket spacing values to the standard scale

---
*Phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs*
*Completed: 2026-09-23*

## Self-Check: PASSED

- FOUND: dona-pattal-webApp/src/components/sections/HeroSection.tsx
- FOUND: dona-pattal-webApp/src/app/wholesale/page.tsx
- FOUND: .planning/phases/01-fix-images-encoding-brand-color-align-to-stitch-designs/deferred-items.md
- FOUND: .planning/phases/01-fix-images-encoding-brand-color-align-to-stitch-designs/01-04-SUMMARY.md
- FOUND commit: 93877b6
