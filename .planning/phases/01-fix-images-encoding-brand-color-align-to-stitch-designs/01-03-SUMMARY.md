---
phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
plan: 03
subsystem: ui
tags: [nextjs, react, typescript, unicode, jsx, i18n-text]

# Dependency graph
requires:
  - phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
    provides: "CTA/brand color restyle from plan 01-02 (same wave, disjoint file set)"
provides:
  - "13 of 15 sitewide files (11 component files touched by this plan + 2 content modules) with zero literal \\uXXXX escape sequences"
  - "Content modules (products.ts, site.ts) normalized to literal typographic characters with proven byte-identical runtime values"
affects: ["01-04 (repo-wide escape gate)"]

# Tech tracking
tech-stack:
  added: []
  patterns: ["JSX text nodes and JSX attribute strings do not process backslash escapes — literal glyphs must be typed directly, not `\\uXXXX` or `{'\\uXXXX'}`"]

key-files:
  created: []
  modified:
    - dona-pattal-webApp/src/app/products/[slug]/page.tsx
    - dona-pattal-webApp/src/components/product/ProductCard.tsx
    - dona-pattal-webApp/src/components/sections/ContactSection.tsx
    - dona-pattal-webApp/src/components/sections/ProductRangeSection.tsx
    - dona-pattal-webApp/src/components/sections/about/BrandStatementSection.tsx
    - dona-pattal-webApp/src/components/sections/about/MaterialSection.tsx
    - dona-pattal-webApp/src/components/sections/about/MirzapurTransitSection.tsx
    - dona-pattal-webApp/src/components/sections/contact/LocationSection.tsx
    - dona-pattal-webApp/src/components/sections/contact/ProductsShortcut.tsx
    - dona-pattal-webApp/src/components/sections/products/CatalogueHero.tsx
    - dona-pattal-webApp/src/components/sections/wholesale/QuantityTierGrid.tsx
    - dona-pattal-webApp/src/content/products.ts
    - dona-pattal-webApp/src/content/site.ts

key-decisions:
  - "Used a Node.js script operating on file bytes/text directly (regex `\\\\u([0-9a-fA-F]{4})` -> String.fromCharCode) instead of the Edit tool, because the Edit tool's string-parameter handling JSON-decodes literal `\\uXXXX` text mid-call, causing false 'no changes' failures (same issue plan 01-02 hit). The script's regex-replace-per-code-unit approach correctly reconstructs surrogate pairs and variation-selector sequences without needing special-case logic, since JS strings are UTF-16 and replacing each `\\uXXXX` unit independently still yields the correct code-unit sequence when concatenated."

requirements-completed: [TXT-01, TXT-02]

# Metrics
duration: 9min
completed: 2026-09-23
---

# Phase 01 Plan 03: Replace Literal Unicode Escapes in Components and Content Summary

**Replaced 56 literal `\uXXXX` escape sequences (including 4 surrogate pairs and 2 variation-selector pairs) with real Unicode glyphs across 11 JSX components and normalized 2 content modules, with zero regressions across 52 tests and a clean production build.**

## Performance

- **Duration:** ~9 min
- **Started:** 2026-09-23T01:44:00Z (approx.)
- **Completed:** 2026-09-23T01:52:53Z
- **Tasks:** 2 completed
- **Files modified:** 13

## Accomplishments

- Task 1: Fixed 33 broken escape occurrences across 11 component files (arrows →, checkmarks ✓, bullets/middle-dots ·, en/em dashes –—, curly quotes " " ", and 4 emoji — 🍴📏📦♻️ in `MaterialSection.tsx`, plus 📍🚚⏱️ in `LocationSection.tsx`) that were rendering as literal escape text in JSX text nodes and JSX attribute strings.
- Task 2: Normalized 11 already-correct escape occurrences in `src/content/products.ts` (6 en-dash GSM ranges) and `src/content/site.ts` (middle dots, en dash, copyright sign) to literal characters — a pure representation change, proven behavior-preserving because `products.test.ts` and `site.test.ts` pass unmodified.
- Confirmed no lone surrogates and no double-escaping (`\\u`) were introduced anywhere in `dona-pattal-webApp/src`.
- Confirmed the 7 files still containing `\uXXXX` literals (`FactoryDirectBanner.tsx`, `ContactHero.tsx`, `MirzapurSection.tsx`, `MaterialMakingSection.tsx`, `wholesale/page.tsx`, `HeroSection.tsx`, `ProductFocusSection.tsx`) are exactly the set the plan documents as out-of-scope, owned by plans 01-01/01-02.

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace broken escapes in the thirteen component files** (11 of 13 were touched — `ProductCard.test.tsx` and `ProductRangeSection.test.tsx` required no changes, they assert on behavior not on the escaped copy) - `74a42da` (fix)
2. **Task 2: Normalize the content modules and confirm rendered output is unchanged** - `320e283` (fix)

**Plan metadata:** (this commit)

## Files Created/Modified

- `dona-pattal-webApp/src/app/products/[slug]/page.tsx` - fixed JSX text-node `·` (line 50), normalized already-correct template-literal `·` (line 42)
- `dona-pattal-webApp/src/components/product/ProductCard.tsx` - fixed JSX text `·` and JSX attribute `label="Ask for this size →"`
- `dona-pattal-webApp/src/components/sections/ContactSection.tsx` - fixed en dash in address string
- `dona-pattal-webApp/src/components/sections/ProductRangeSection.tsx` - fixed arrow in CTA button text
- `dona-pattal-webApp/src/components/sections/about/BrandStatementSection.tsx` - fixed 3 curly-quote occurrences in the pull quote
- `dona-pattal-webApp/src/components/sections/about/MaterialSection.tsx` - fixed 4 surrogate-pair/VS16 emoji (🍴📏📦♻️)
- `dona-pattal-webApp/src/components/sections/about/MirzapurTransitSection.tsx` - fixed middle dot and 4 arrow glyphs in the freight-route chain
- `dona-pattal-webApp/src/components/sections/contact/LocationSection.tsx` - fixed 📍🚚⏱️ emoji, en dashes, tilde+middle-dot pairs (14 escape units total)
- `dona-pattal-webApp/src/components/sections/contact/ProductsShortcut.tsx` - fixed 2 arrow glyphs in CTA buttons
- `dona-pattal-webApp/src/components/sections/products/CatalogueHero.tsx` - fixed 4 checkmark glyphs in the "Guaranteed B2B Consistency" list
- `dona-pattal-webApp/src/components/sections/wholesale/QuantityTierGrid.tsx` - fixed apostrophe, checkmark, and arrow glyphs
- `dona-pattal-webApp/src/content/products.ts` - normalized 6 en-dash GSM range fields (pure representation change)
- `dona-pattal-webApp/src/content/site.ts` - normalized middle dots, en dash, and copyright sign (pure representation change)

## Decisions Made

- Used a Node.js script (run via Bash, written to the scratchpad, not part of the repo) that reads each file as UTF-8 text and replaces every `\uXXXX` regex match with its real character via `String.fromCharCode`, rather than using the Edit tool. This avoids the known Edit-tool defect (also hit in plan 01-02) where literal `\uXXXX` text typed into `old_string`/`new_string` gets JSON-decoded into the real character mid-call, producing false "no changes" failures. Replacing each code unit independently is safe for surrogate pairs and variation-selector sequences because JS strings are UTF-16 — concatenating two independently-substituted code units in their original order reconstructs the correct character.

## Deviations from Plan

None - plan executed exactly as written. `ProductCard.test.tsx` and `ProductRangeSection.test.tsx` were read per the plan's `<read_first>` instruction; neither asserts on the escaped copy (they assert on product name/use/GSM-substring/pcs-substring and on section headings), so no test edits were needed. `products.test.ts` and `site.test.ts` were confirmed unmodified via `git diff --stat`.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- This plan's 15 owned files (13 component files + 2 content modules) are now fully clean of `\uXXXX` literals, with zero lone surrogates and zero double-escaping.
- 7 files outside this plan's scope (`FactoryDirectBanner.tsx`, `ContactHero.tsx`, `MirzapurSection.tsx`, `MaterialMakingSection.tsx`, `wholesale/page.tsx`, `HeroSection.tsx`, `ProductFocusSection.tsx`) still contain literal escapes and are owned by plans 01-01/01-02 per the plan's explicit scope note — plan 01-04's repo-wide grep gate should confirm these are resolved before declaring TXT-01/TXT-02 fully satisfied sitewide.
- `npm run lint`, `npm run test` (17 files / 52 tests), and `npm run build` all pass with no regressions.

---
*Phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs*
*Completed: 2026-09-23*

## Self-Check: PASSED

- FOUND: dona-pattal-webApp/src/app/products/[slug]/page.tsx
- FOUND: dona-pattal-webApp/src/components/product/ProductCard.tsx
- FOUND: dona-pattal-webApp/src/content/products.ts
- FOUND: dona-pattal-webApp/src/content/site.ts
- FOUND: .planning/phases/01-fix-images-encoding-brand-color-align-to-stitch-designs/01-03-SUMMARY.md
- FOUND commit: 74a42da (Task 1)
- FOUND commit: 320e283 (Task 2)
