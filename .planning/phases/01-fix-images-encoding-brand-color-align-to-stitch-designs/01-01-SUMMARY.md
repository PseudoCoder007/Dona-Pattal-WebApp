---
phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
plan: 01
subsystem: ui
tags: [nextjs, next-image, tailwind, image-optimization, honesty-constraint]

# Dependency graph
requires: []
provides:
  - Six real, locally hosted photographs under dona-pattal-webApp/public/images/
  - EditorialImage primitive with statically analysable aspect-ratio classes and Stitch-matching caption/badge overlays
  - All 11 previously remote (lh3.googleusercontent.com) <Image> src values repointed to local /images/ paths
  - next.config.ts with zero remote image hosts (images key removed entirely)
  - Task 1 factory-photography decision (honest-substitute) applied across MaterialMakingSection, MirzapurSection, FactoryDirectBanner
affects: [01-02, 01-03, any future phase touching image content or brand copy]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "EditorialImage aspectClass lookup map (Record<AspectRatio, string>) replaces template-string Tailwind class interpolation so Tailwind's static scanner can see every class"
    - "Byte-level Node.js script workaround for literal \\uXXXX escape replacement, bypassing the Edit tool's mid-call JSON-decoding of \\uXXXX text in old_string/new_string parameters"

key-files:
  created:
    - dona-pattal-webApp/public/images/hero/paper-plate-stack.png
    - dona-pattal-webApp/public/images/editorial/leaf-dona-pattal.jpg
    - dona-pattal-webApp/public/images/editorial/catering-service.jpg
    - dona-pattal-webApp/public/images/editorial/sweet-shop-trays.jpg
    - dona-pattal-webApp/public/images/products/product-dona.jpg
    - dona-pattal-webApp/public/images/products/product-plate.jpg
  modified:
    - dona-pattal-webApp/src/components/ui/EditorialImage.tsx
    - dona-pattal-webApp/src/components/ui/EditorialImage.test.tsx
    - dona-pattal-webApp/next.config.ts
    - dona-pattal-webApp/src/components/sections/HeroSection.tsx
    - dona-pattal-webApp/src/components/sections/MaterialMakingSection.tsx
    - dona-pattal-webApp/src/components/sections/MirzapurSection.tsx
    - dona-pattal-webApp/src/components/sections/products/FactoryDirectBanner.tsx
    - dona-pattal-webApp/src/components/sections/about/AboutHero.tsx
    - dona-pattal-webApp/src/components/sections/about/ProductFocusSection.tsx
    - dona-pattal-webApp/src/components/sections/contact/ContactHero.tsx
    - dona-pattal-webApp/src/app/wholesale/page.tsx

key-decisions:
  - "Task 1 (blocking checkpoint): honest-substitute — no real Mirzapur factory photography exists in the repo or was supplied; the three factory-claiming image slots now use real product/material photography (leaf-dona-pattal.jpg, paper-plate-stack.png) with alt/caption/heading copy rewritten so nothing claims to depict a factory, workshop, production line or manufacturing equipment"
  - "Removed the non-functional play-button affordance and 'Production video coming soon' claim from MaterialMakingSection since no video exists behind it"
  - "Used a Node.js script operating on file text directly (not the Edit tool) for all \\uXXXX escape-map replacements, per the same workaround plans 01-02/01-03 used, to avoid the Edit tool's JSON-decoding of literal \\uXXXX text mid-call"

patterns-established:
  - "aspectClass: Record<AspectRatio, string> lookup replaces template-string Tailwind interpolation — apply this pattern anywhere else a component builds a Tailwind class from a dynamic prop"

requirements-completed: [IMG-01, IMG-02, TXT-01, TXT-02, COLOR-01, DESIGN-01]

# Metrics
duration: 18min
completed: 2026-09-23
---

# Phase 01 Plan 01: Fix Images, Encoding, Brand Color Summary

**Real local photography behind every `<Image>`, EditorialImage's Tailwind-interpolation aspect-ratio bug fixed, and the three fabricated "factory photo" claims replaced with honest copy over real product photography (Task 1 decision: `honest-substitute`).**

## Performance

- **Duration:** 18 min (Task 2 + Task 3, from resume after Task 1 checkpoint)
- **Started:** 2026-09-23T07:26:59+05:30 (Task 2 start, immediately following checkpoint resolution)
- **Completed:** 2026-09-23T07:43:45+05:30
- **Tasks:** 3 (Task 1 checkpoint + Task 2 + Task 3)
- **Files modified:** 17 (6 created images, 11 modified source files)

## Accomplishments

- Six vetted, real photographs (no baked-in text, on-brand) copied from `html-design/v2/assets/images/` into `dona-pattal-webApp/public/images/{hero,editorial,products}/`
- `EditorialImage.tsx` aspect-ratio bug fixed: replaced a template-string Tailwind class (`` `aspect-[${aspectRatio}]` ``, which Tailwind's static scanner cannot see and therefore silently drops) with an explicit `aspectClass: Record<AspectRatio, string>` lookup map and a narrowed `AspectRatio` union type
- `EditorialImage` caption/badge overlays swapped to match `stitch-extracted/homepage/code.html`: caption is now a bottom-left white pill with a brick accent dot, badge is a top-right dark `bg-ink/90` pill, outer container gains `shadow-xl`
- All 11 previously remote `lh3.googleusercontent.com` `<Image>` src values repointed to local `/images/...` paths with alt text rewritten to truthfully describe each photo's actual subject
- `next.config.ts`'s `images.remotePatterns` allow-list deleted entirely (bare `NextConfig` object) — closes the SSRF-adjacent optimizer surface (threat T-01-01)
- Task 1 decision (`honest-substitute`) applied: `MaterialMakingSection`, `MirzapurSection`, `FactoryDirectBanner` no longer claim to show a Mirzapur factory/workshop; they use real product/material photography with rewritten alt/caption/heading copy; the non-functional "See How We Make It" play button and "Production video coming soon" claim were removed
- Literal `\uXXXX` escape sequences replaced with real glyphs across all 7 files this plan owns
- `emerald-*`/`green-*` Tailwind classes replaced with brand tokens (`text-brass`) in `wholesale/page.tsx` and `MaterialMakingSection.tsx`
- `npm run lint`, `npm run test` (54/54 passing), and `npm run build` all pass; `/_next/image` optimizer verified returning HTTP 200 for local images (previously 500 for the remote mock URLs)

## Task Commits

1. **Task 1: Decide how to handle the three factory-photography slots** — checkpoint:decision, blocking gate. No photos existed under `dona-pattal-webApp/public/images/factory/` (verified — directory and `public/` itself did not exist). Returned structured checkpoint state to the orchestrator; user resolved with `honest-substitute` (the plan's stated default given no factory photos were supplied).
2. **Task 2: Commit vetted photography into public/images and fix EditorialImage** - `5896267` (feat)
3. **Task 3: Repoint every remote image src to a local asset and empty remotePatterns** - `fad6645` (fix)

**Plan metadata:** (this commit, pending)

## Files Created/Modified

- `dona-pattal-webApp/public/images/hero/paper-plate-stack.png` - Homepage hero / factory-slot substitute photography (tall stack of printed paper plates)
- `dona-pattal-webApp/public/images/editorial/leaf-dona-pattal.jpg` - About-page heritage photography, also reused for the two honest-substitute slots (traditional sal-leaf dona and pattal stacks)
- `dona-pattal-webApp/public/images/editorial/catering-service.jpg` - Contact/wholesale buyer-context photography (caterer serving from a buffet line)
- `dona-pattal-webApp/public/images/editorial/sweet-shop-trays.jpg` - Copied per plan asset inventory; not yet wired to a route in this plan (available for future use)
- `dona-pattal-webApp/public/images/products/product-dona.jpg` - Product card image for dona SKUs (`src/content/products.ts` already pointed here — file copy alone fixes those cards)
- `dona-pattal-webApp/public/images/products/product-plate.jpg` - Product card image for plate SKUs
- `dona-pattal-webApp/src/components/ui/EditorialImage.tsx` - Fixed aspect-ratio interpolation bug via `aspectClass` lookup map; caption/badge overlay styling realigned to Stitch reference
- `dona-pattal-webApp/src/components/ui/EditorialImage.test.tsx` - Added assertions for static `aspect-[16/9]` class and `text-ink` caption styling
- `dona-pattal-webApp/next.config.ts` - `images.remotePatterns` allow-list removed entirely
- `dona-pattal-webApp/src/components/sections/HeroSection.tsx` - Hero image repointed to local path; escapes fixed
- `dona-pattal-webApp/src/components/sections/MaterialMakingSection.tsx` - Task 1 slot: repointed to `leaf-dona-pattal.jpg`, alt/heading rewritten, play button removed; escapes and emerald color fixed
- `dona-pattal-webApp/src/components/sections/MirzapurSection.tsx` - Task 1 slot: repointed to `leaf-dona-pattal.jpg`, alt/caption rewritten to describe the product not a facility; escapes fixed
- `dona-pattal-webApp/src/components/sections/products/FactoryDirectBanner.tsx` - Task 1 slot: repointed to `paper-plate-stack.png`, alt/caption rewritten; escapes fixed
- `dona-pattal-webApp/src/components/sections/about/AboutHero.tsx` - Repointed to `leaf-dona-pattal.jpg`, alt rewritten
- `dona-pattal-webApp/src/components/sections/about/ProductFocusSection.tsx` - Three product-focus images repointed to local paths; escapes fixed
- `dona-pattal-webApp/src/components/sections/contact/ContactHero.tsx` - Repointed to `catering-service.jpg`, alt rewritten; escapes fixed
- `dona-pattal-webApp/src/app/wholesale/page.tsx` - Two images repointed to local paths, alt/caption rewritten; escapes and emerald color fixed

## Decisions Made

- **Task 1 decision: `honest-substitute`.** No real Mirzapur factory/workshop photograph exists anywhere in the repository, and none was supplied under `dona-pattal-webApp/public/images/factory/` before or during this plan's execution (verified both at the Task 1 checkpoint and again at resume — the directory does not exist). Per `.planning/PROJECT.md`'s "No fabricated assets" constraint and the plan's own acceptance criteria, the three factory-claiming slots (`MaterialMakingSection`, `MirzapurSection`, `FactoryDirectBanner`) were repointed to real, already-vetted product/material photography with all `alt`, `caption` and heading text rewritten so nothing states or implies the photo shows a factory, workshop, production line or manufacturing equipment. **Real Mirzapur factory photography is still required** as a follow-up item — see below.
- Used a Node.js script operating on raw file text (written to the session scratchpad, not part of the repo) instead of the Edit tool for every literal `\uXXXX` escape replacement, reproducing the workaround plans 01-02/01-03 used for the same known Edit-tool JSON-decoding gotcha (confirmed empirically: `JSON.stringify` of the on-disk bytes showed literal `\\u00b7` — six literal ASCII characters — and an Edit call with only an escape-sequence change failed with "old_string and new_string are exactly the same" because both parameters decoded to an identical string before ever reaching the file-match step).
- Oxblood/brass/brick token substitutions for `emerald-*` classes followed the plan's `<color_map>` exactly (no new decisions needed there).

## Deviations from Plan

None beyond what the plan's own `<design_precedence_note>` and Task 1 decision framework already anticipated and scoped. All work matches the plan's task instructions, mapping tables, escape_map and color_map verbatim.

## Issues Encountered

- The Edit tool's parameter-level JSON handling decodes literal `\uXXXX` text typed into `old_string`/`new_string` into the real Unicode character before the file-match step runs, so an edit call that changes *only* an escape sequence has identical old/new parameters after decoding and fails with a false "no changes" error, even though the file itself still contains the literal, un-decoded 6-character escape text. Resolved by using a small Node.js script (in the session scratchpad, not committed to the repo) that reads each file's raw text and does literal string replacement of the 6/12-character ASCII escape sequences with the real Unicode character, verified via `JSON.stringify` byte inspection before/after. This matches the workaround documented by sibling plans 01-02/01-03.

## User Setup Required

None - no external service configuration required.

## Follow-up Items

- **Real Mirzapur factory/manufacturing photography is still required.** `MaterialMakingSection`, `MirzapurSection` and `FactoryDirectBanner` currently show real product/material photography instead of an actual photo of the Mirzapur facility. When genuine factory photos become available, they should be placed under `dona-pattal-webApp/public/images/factory/` and the three slots' `src`, `alt`, `caption` and heading copy updated to describe them accurately (the `supply-real` option from the Task 1 decision framework).

## Next Phase Readiness

- All six route pages (`/`, `/about`, `/contact`, `/wholesale`, `/products`, `/products/[slug]`) now resolve every `<Image>` to a locally hosted file returning HTTP 200 through the Next.js image optimizer.
- `next.config.ts` allows zero remote image hosts.
- `EditorialImage` is fixed and available as a stable primitive for any future plan adding photography.
- No blockers for subsequent phases; the factory-photography follow-up item above is the only open item and does not block ship-readiness per the plan's own acceptance criteria for the `honest-substitute` option.

---
*Phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs*
*Completed: 2026-09-23*

## Self-Check: PASSED

All created files verified present on disk; both task commits (`5896267`, `fad6645`) verified present in `git log`.
