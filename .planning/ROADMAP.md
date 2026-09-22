# Roadmap: Sahlok Eco Products Website

## Overview

Site was already fully migrated into `dona-pattal-webApp/` and audited (`docs/UI-REVIEW.md`, 13/24 overall). This roadmap covers the fix-and-design-alignment work that audit surfaced: broken images, a JSX-escape rendering bug, off-brand accent color, and gaps against the approved `stitch-extracted/` designs across desktop/tablet/mobile.

## Phases

- [ ] **Phase 1: Fix Images, Encoding & Brand Color; Align to Stitch Designs** - Replace broken image sources, fix the `\uXXXX` JSX-escape bug, correct off-brand CTA color, and close visual gaps against Stitch references on all 5 routes.

## Phase Details

### Phase 1: Fix Images, Encoding & Brand Color; Align to Stitch Designs

**Goal**: Every route (`/`, `/products`, `/products/[slug]`, `/wholesale`, `/about`, `/contact`) renders real images, clean copy, and on-brand colors, and matches its `stitch-extracted/` reference at desktop/tablet/mobile.
**Depends on**: Nothing (first phase)
**Requirements**: IMG-01, IMG-02, TXT-01, TXT-02, COLOR-01, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05
**Success Criteria** (what must be TRUE):

  1. No page shows an empty/broken image box — every `<Image>` resolves to a real, locally-hosted or correctly-configured asset
  2. No visible `\uXXXX`-style text appears anywhere in the rendered UI
  3. WhatsApp/CTA elements use only brick/brass accent colors, no generic green
  4. Each of the 5 routes visually matches its Stitch reference's layout, spacing, and typography at 375px, 768px, and 1440px widths
  5. `npm run lint`, `npm run test`, and `npm run build` all pass from `dona-pattal-webApp/`

**Plans**: 4 plans across 2 waves
Plans:
**Wave 1**

- [ ] 01-01-PLAN.md — Commit real photography into `public/images/`, repoint all 11 remote image sources, fix the `EditorialImage` aspect-ratio bug, empty `next.config.ts` remotePatterns (wave 1, has decision checkpoint)
- [ ] 01-02-PLAN.md — Replace every `emerald`/`green-*` class with oxblood/brick/brass in the CTA primitives, layout and contact grid (wave 1)
- [ ] 01-03-PLAN.md — Replace literal `\uXXXX` escapes with real glyphs across 13 component files and normalize `src/content/*.ts` (wave 1)

**Wave 2** *(blocked on Wave 1 completion)*

- [ ] 01-04-PLAN.md — Sitewide regression gates, responsive audit of 6 routes at 375/768/1440, residual fixes, human visual sign-off (wave 2)

**Wave structure:**

| Wave | Plans | Parallel-safe | Autonomous |
|------|-------|---------------|------------|
| 1 | 01-01, 01-02, 01-03 | yes — zero `files_modified` overlap | 01-01 no (decision checkpoint), 01-02 yes, 01-03 yes |
| 2 | 01-04 | n/a (single plan) | no (human-verify checkpoint) |

## Progress

**Execution Order:**
Phase 1 only (single phase, ad-hoc scope from UI-REVIEW.md — not a full milestone roadmap)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Fix Images, Encoding & Brand Color | 0/4 | Planned | - |
