# Sahlok Eco Products Website (Dona Pattal)

## What This Is

Marketing/lead-gen website for Sahlok Eco Products LLP, a Mirzapur-based manufacturer of eco-friendly paper dona/pattal products. Built with Next.js App Router, lives at `dona-pattal-webApp/`. It introduces the business, presents product sizes, and drives WhatsApp/phone enquiries from hotels, caterers, and event organisers.

## Core Value

A visitor can see real product photography, read clean (non-garbled) copy, and reach the business via WhatsApp/phone without friction, on any device.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] IMG-01: All product/hero/factory images render (no broken `lh3.googleusercontent.com` mock URLs)
- [ ] TXT-01: No literal `\uXXXX` escape sequences visible in rendered UI copy
- [ ] COLOR-01: CTAs use the brand's 2-accent system (brick/brass), not off-brand green
- [ ] DESIGN-01: Each route visually matches its `stitch-extracted/` reference at desktop/tablet/mobile

### Out of Scope

- Full GSD requirements-gathering interview — skipped by user choice; this phase is scoped directly from `docs/UI-REVIEW.md` findings.
- Backend/CMS work, e-commerce/checkout — this is a lead-gen brochure site only.

## Context

- Migrated from repo root into `dona-pattal-webApp/` (see commit `cbfa37e`) — Next 16, React 19, Tailwind 4, Vitest.
- `docs/UI-REVIEW.md` — retroactive whole-app 6-pillar audit (13/24), run against the live app before the migration. Identifies the 3 blockers above plus secondary findings (font-weight inconsistency, arbitrary spacing, missing loading/error/empty states).
- `stitch-extracted/{homepage,about,products,wholesale,contact}/` — approved Stitch designs (DESIGN.md + code.html + screen.png per page). Treated as the design source of truth in place of a UI-SPEC.md.
- `public/` has zero real image assets — every image reference points at ephemeral Stitch-mockup URLs.

## Constraints

- **Tech stack**: Next.js 16 (Turbopack), React 19, Tailwind 4, TypeScript, Vitest — do not introduce new frameworks.
- **Design source**: `stitch-extracted/` is authoritative for visual intent; do not redesign beyond closing gaps to it.
- **No fabricated assets**: broken images must be replaced with the intended real asset, not invented placeholders, unless genuinely unavailable (then document as unresolved).

## Key Decisions

| Decision | Date | Why |
|---|---|---|
| Skip full GSD requirements interview; scope Phase 1 directly from UI-REVIEW.md | 2026-09-23 | Work is already precisely diagnosed (file:line findings); a fresh interview would re-derive what's already known. |
