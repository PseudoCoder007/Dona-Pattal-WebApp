# Requirements: Sahlok Eco Products Website

**Defined:** 2026-09-23
**Core Value:** A visitor can see real product photography, read clean copy, and reach the business via WhatsApp/phone without friction, on any device.

## v1 Requirements

Derived directly from `docs/UI-REVIEW.md` (whole-app retroactive audit, overall 13/24). Sourced from findings, not a fresh discovery interview.

### Images

- [x] **IMG-01**: Every hero, product card, and factory-process image on every route renders a real photo (no broken `lh3.googleusercontent.com/aida*` mock URLs, no empty boxes)
- [x] **IMG-02**: Next `<Image>` usages have correct `src`, `alt`, sizing/`fill`, and `object-fit`/`object-position` for their container

### Copy / Encoding

- [x] **TXT-01**: No literal `\uXXXX`-style escape sequences render as visible text anywhere in the UI (CTAs, bullet lists, quotes)
- [x] **TXT-02**: Any other mojibake/garbled-character artifacts found during the fix pass are corrected without touching intentional typography

### Color / Brand

- [x] **COLOR-01**: WhatsApp CTAs and all other accent usage stay within the brick/brass 2-accent system defined in `stitch-extracted/*/DESIGN.md`; no generic Tailwind `emerald`/`green`

### Design Alignment

- [x] **DESIGN-01**: `/` (homepage) matches `stitch-extracted/homepage` at desktop/tablet/mobile
- [ ] **DESIGN-02**: `/products` and `/products/[slug]` match `stitch-extracted/products`
- [ ] **DESIGN-03**: `/wholesale` matches `stitch-extracted/wholesale`
- [ ] **DESIGN-04**: `/about` matches `stitch-extracted/about`
- [ ] **DESIGN-05**: `/contact` matches `stitch-extracted/contact`

## v2 Requirements (deferred — noted in UI-REVIEW.md, not blocking)

### Experience Design

- **EXP-01**: Add loading states for async UI (forms, image loading)
- **EXP-02**: Add error/empty states where currently absent
- **EXP-03**: Normalize font-weight usage across equivalent heading roles
- **EXP-04**: Reduce arbitrary Tailwind bracket spacing values to the standard scale

## Out of Scope

| Feature | Reason |
|---------|--------|
| Full GSD discovery/requirements interview | Work already diagnosed via UI-REVIEW.md; re-deriving would duplicate known findings |
| Backend/CMS/e-commerce | Site is a lead-gen brochure only |
| Redesigning beyond Stitch references | Stitch is the approved design source of truth — not a redesign exercise |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| IMG-01 | Phase 1 | Complete |
| IMG-02 | Phase 1 | Complete |
| TXT-01 | Phase 1 | Complete |
| TXT-02 | Phase 1 | Complete |
| COLOR-01 | Phase 1 | Complete |
| DESIGN-01 | Phase 1 | Complete |
| DESIGN-02 | Phase 1 | Pending |
| DESIGN-03 | Phase 1 | Pending |
| DESIGN-04 | Phase 1 | Pending |
| DESIGN-05 | Phase 1 | Pending |

**Coverage:**

- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0

---
*Requirements defined: 2026-09-23*
*Last updated: 2026-09-23 after initial definition from UI-REVIEW.md*
