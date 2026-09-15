# V3 Editorial Redesign — Phase 1: Design System & Information Architecture

**Date:** 2026-09-15
**Status:** Approved for implementation
**Context:** [2026-09-15-website-landing-page-design.md](2026-09-15-website-landing-page-design.md) (v1), [2026-09-15-website-real-images-restyle-design.md](2026-09-15-website-real-images-restyle-design.md) (v2)

## Background

v1 (live at root `index.html`) and v2 (`v2/index.html`, built but not yet promoted to root) both use a warm-cream/card-based visual language. The user has since decided the site needs a fundamentally different, more ambitious direction: a full editorial redesign inspired by award-quality studio websites (large typography, real photography, restrained scroll-driven motion, asymmetric layouts) rather than a "rounded-card eco-startup" look, plus a genuine contact form (name/email/message, delivered by email). This was informed by a detailed brief the user prepared (with ChatGPT's help) describing the desired direction, regional (Mirzapur) visual identity, and a 17-topic research/build methodology.

This initiative — **v3** — is too large for one spec, so it is decomposed into six phases, each getting its own spec → plan → build cycle:

1. **Design system + information architecture** (this spec)
2. Hero + product section rebuild
3. Storytelling sections (material/making story, Mirzapur connection, trust)
4. Motion system (richer GSAP/ScrollTrigger effects)
5. Contact form + wholesale UX polish
6. Mobile pass, performance, SEO, final authenticity audit

This spec covers **Phase 1 only**: establish the visual language (design tokens) and the new homepage structure, and scaffold `v3/index.html` with section shells in that structure — not full content for every section yet.

## Goals

- Define a complete, reusable design-token system (colors, typography, spacing, borders, radius, motion timing) that reads as "editorial regional manufacturing brand," not "eco startup template."
- Define the new 8-section homepage information architecture, replacing the old Hero→About→Why-Us→Contact pattern.
- Scaffold `v3/index.html`: all 8 sections present with placeholder headings/content, styled with the new tokens, using the new typography and palette.
- Load GSAP + ScrollTrigger via CDN and replace the existing IntersectionObserver-based `.reveal` mechanism with an equivalent (but not yet elaborate) GSAP scroll-triggered fade/slide reveal.
- Carry the existing bilingual EN/HI engine and WhatsApp-link engine forward unchanged in mechanism (same `data-en`/`data-hi`/`applyLanguage`/`buildWhatsAppLink` approach), adapted to the new markup.
- v3 lives entirely in a new `v3/` folder. Root `index.html` and `v2/index.html` are **not** modified by this work.

## Non-goals (explicitly deferred to later phases)

- Full final copy/content for every section beyond placeholder headings — Phases 2-3.
- The hero's full "editorial campaign" treatment (oversized headline choreography, image overlap) — Phase 2.
- Product section's photo-forward catalog redesign in the new visual language (v2's product cards carry over as-is for now, restyled only with new tokens) — Phase 2.
- The Mirzapur storytelling section's full narrative/visual treatment — Phase 3.
- Rich GSAP effects: clip-path image reveals, sticky-pinned sections, horizontal product rails, parallax — Phase 4.
- The contact form's fields and Web3Forms wiring — Phase 5.
- Mobile-specific (not just responsive-stacked) compositions, performance budget work, SEO/structured data, and the final authenticity audit — Phase 6.

## Design tokens

**Palette** (CSS custom properties):
- `--paper: #F4EFE6` — base background (warm kraft/paper tone, replacing v1/v2's brighter cream).
- `--ink: #2B2521` — primary text (warm charcoal, not pure black).
- `--ink-soft: #6B5D52` — secondary/muted text.
- `--brick: #B24A2E` — primary accent (muted brick/terracotta, less saturated than v1/v2's terracotta).
- `--brass: #A87C3F` — secondary accent (brass/ochre, a subtle nod to Mirzapur's brassware craft without being literal/decorative about it).
- `--oxblood: #4A1F1C` — dark section background (replacing v1/v2's brighter maroon).
- `--stone: #C9C0B4` — borders/dividers/hairlines.
- `--card: #FFFFFF` — only used where a true white surface is needed (e.g. form inputs), not as a default card background — v3 avoids the "everything is a white rounded card" pattern.

**Typography:**
- Display/heading font: **Fraunces** (Google Font, variable, has an optical-size axis suited to very large display type) — `font-family: 'Fraunces', Georgia, serif;`
- Body font: **IBM Plex Sans** (Latin) — `font-family: 'IBM Plex Sans', system-ui, sans-serif;`
- Hindi body font: **IBM Plex Sans Devanagari** (same family, pairs visually with the Latin body face) — used wherever `[lang="hi"]` content that is *not* a display heading appears.
- **Known trade-off, stated explicitly:** Fraunces has no Devanagari glyphs. Hindi headlines fall back to IBM Plex Sans Devanagari at a reduced size rather than Fraunces — this is intentional, not a bug, and is called out here so it isn't "discovered" during review.
- Type scale uses `clamp()` for fluid sizing: display headings scale roughly 2.5rem→5.5rem, section headings 1.75rem→2.75rem, body stays fixed at 1rem/1.05rem.

**Spacing/layout:**
- 8px base spacing unit; section vertical padding uses a larger fluid scale (`clamp(64px, 8vw, 140px)`) to support more generous editorial whitespace than v1/v2's fixed 72px.
- Grid: a 12-column CSS Grid at desktop widths for asymmetric layouts (e.g. a 7/5 or 8/4 split instead of always-centered content), collapsing to a single column under 720px.

**Borders/shape:**
- Thin 1px hairline borders (`--stone`) instead of soft box-shadows as the primary way to separate content — shadows are used sparingly (only on the torn-paper photo treatment carried over from v2, and on interactive hover states).
- Border-radius is small and consistent (4-6px) or zero — no pill shapes, no large rounded "card" corners.

**Motion timing:**
- Standard ease: `power2.out` (GSAP's built-in easing name) for reveals; duration 0.6-0.9s depending on element size.
- Respect `prefers-reduced-motion`: when set, GSAP animations play with duration near-zero (content appears immediately) rather than being skipped via separate code paths.

## Information architecture (new homepage structure)

Replacing v1/v2's Header→Hero→About→Process→Products→Why-Us→Contact→Footer:

1. **Hero** — headline, real photo, location/status metadata (Mirzapur, pre-launch), primary WhatsApp CTA. (Full treatment: Phase 2.)
2. **Product Range** — the 6 dona/plate sizes, photo-forward. (Carries v2's cards forward with new tokens in this phase; full redesign in Phase 2.)
3. **Who We Supply** — target customer segments (caterers, restaurants, sweet shops, hotels, banquet halls, event/bhandara organizers, distributors, retailers) stated as a plain editorial list, not generic feature cards.
4. **Material & Making Story** — paper → pressed → checked → packed, as a narrative rather than 4 identical boxes. (Placeholder shell this phase; full treatment Phase 3.)
5. **Mirzapur Connection** — "built here, supplying the businesses around us." (Placeholder shell this phase; full treatment Phase 3.)
6. **Wholesale / Bulk Ordering** — clear path to pricing, restates the introductory-rate offer from v1/v2.
7. **Contact** — owner/phone/address (carried from root's current content) plus the new form. (Form fields/wiring: Phase 5. This phase shows a placeholder note where the form will go.)
8. **Final CTA + Footer**

Navigation reflects the new section anchors; language toggle and WhatsApp header button carry over from v1/v2.

**What "placeholder shell" means concretely for this phase:** each of the 8 sections gets a real `<section>` with its own id/anchor, a real heading using the section name above (e.g. "Who We Supply", "Material & Making Story") — not literal "TBD" text — styled with the new tokens, plus one short sentence of real (not lorem-ipsum) placeholder body copy describing that section's eventual purpose. Sections 1, 2, 6, and 7 (Hero, Product Range, Wholesale/Bulk Ordering, Contact) additionally carry over their actual working content/data from v1/v2 (real copy, the product array, real contact details, WhatsApp links) since that content already exists and there's no reason to blank it out — only its visual styling changes in this phase. Sections 3, 4, and 5 (Who We Supply, Material & Making Story, Mirzapur Connection) are new to the IA and get the heading + one-sentence placeholder only, since their full content is written in Phases 2-3.

## File structure

- Create: `v3/index.html` — new file, not a copy of `v2/index.html` this time (the markup/CSS structure changes enough that starting fresh and porting over the *mechanisms* — bilingual engine, WhatsApp-link builder, product data array — is cleaner than editing a copy). Product photo assets are referenced from `../v2/assets/images/` (no need to re-download identical files).
- No new asset files this phase beyond Google Fonts links (Fraunces, IBM Plex Sans, IBM Plex Sans Devanagari) and the GSAP/ScrollTrigger CDN `<script>` tags.

## Testing / validation

No automated test suite (same as v1/v2) — manual browser verification: all 8 section shells render with the new palette/typography, GSAP + ScrollTrigger load without console errors and the reveal-on-scroll effect works, language toggle still swaps every `data-en`/`data-hi` element (including the Hindi-headline-font fallback rendering correctly), WhatsApp links still build correctly, `prefers-reduced-motion` is respected, and neither root `index.html` nor `v2/index.html` are modified (checked via `git log`/`git diff`, same pattern as v2's Task 7).

## Open items for later phases

- Full section content/copy (Phases 2-3).
- Product photography specific to the new visual language (Phase 2 may keep v2's photos or source new ones — decide then).
- Contact form fields and Web3Forms access key (Phase 5) — a placeholder access key will be used until the user provides a real one from web3forms.com.
- Rich motion, mobile-specific composition, performance/SEO, and the final authenticity audit (Phases 4/6).
