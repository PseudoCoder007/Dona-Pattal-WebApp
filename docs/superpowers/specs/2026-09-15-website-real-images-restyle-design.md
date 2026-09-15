# Landing Page v2 — Real Photography & De-AI-ify Restyle

**Date:** 2026-09-15
**Status:** Approved for implementation
**Supersedes/extends:** [2026-09-15-website-landing-page-design.md](2026-09-15-website-landing-page-design.md) (the v1 page is already built and live at `index.html` / pushed to `github.com/PseudoCoder007/Dona-Pattal-WebApp`)

## Background

The v1 landing page shipped with custom inline-SVG illustrations (stacked-plates motif, bowl/plate icons) instead of photography, since no real factory/product photos exist yet (pre-launch business). User feedback on the live result: it "looks too static and without real images," and the styling still reads as generic/AI-templated despite the earlier motif/animation/wave-divider work. This spec covers a v2 pass: add real photography, and make further concrete styling changes that specifically counter the "AI-generated" tell.

## Goals

- Replace the abstract SVG illustrations in the hero, about, and product-card sections with real photographs.
- Make the page read as hand-crafted/artisanal rather than templated: photo-forward cards, torn-paper/tilted photo framing, a subtle paper-grain texture, and a less generic button shape.
- Keep everything else from v1 intact: bilingual EN/HI engine, WhatsApp CTAs, scroll-reveal, mobile nav, palette, process/why-us/contact sections.

## Non-goals

- No real photos of *this specific* factory/products (none exist — business is pre-launch). Images are real, freely-licensed stock photography that authentically depicts the *category* (paper donas/plates, Indian street food, catering scenes), not a claim that these are photos of Sahlok Eco Products' own operation.
- No CMS/upload mechanism for swapping images later — that's a manual file replacement in `assets/images/` whenever real photos become available (noted as an open item).
- No change to bilingual text content, WhatsApp behavior, product data, or page structure/sections — this is a visual-layer pass only.

## Image sourcing

- Source: Unsplash (free for commercial use, no attribution required). During implementation, use WebSearch/WebFetch to find and verify specific real photo pages/URLs — never fabricate a photo URL from memory.
- Download images to a local `assets/images/` folder and reference them locally (not hotlinked), so the site doesn't depend on an external host staying up. This means the page is no longer a single self-standing file — it becomes `index.html` + an `assets/images/` folder, which supersedes the v1 spec's "single file" constraint.
- Four images needed, each with a specific real-world subject to search for:
  1. **Hero** — Indian street food/chaat served in paper donas or bowls (wide/landscape orientation).
  2. **About** — a bhandara/wedding-catering buffet scene, or a Varanasi ghats/cultural shot, reinforcing the "made for Varanasi" narrative (portrait or square orientation).
  3. **Product photo — dona type** — a close-up of paper donas/bowls (used for the 4" and 6" dona products).
  4. **Product photo — plate type** — a close-up of paper plates (used for the 7"/8"/10"/12" plate products).
- Each `<img>` gets a static English `alt` attribute describing the photo (not bilingual-swapped — alt text is not primary visible content, so this is an intentional scope simplification, not an oversight).
- If an image fails to load for any reason, the existing card/section background color still reads fine (no layout collapse) — verified as part of the manual QA pass.

## Visual changes

### Hero
Replace the `#hero-art` SVG stack with the sourced street-food/dona photo, framed with the torn-paper/tilt treatment (see below) instead of a plain rectangle.

### About
Replace the `#about-art` SVG stack with the sourced Varanasi/bhandara photo, same torn-paper/tilt treatment, on the opposite tilt direction from the hero photo for visual variety.

### Product cards
Restructure from icon-top to **photo-forward**: the photo (dona-type or plate-type, chosen by the existing `type` field) fills the top of the card edge-to-edge (no torn-paper effect here — full-bleed photo reads as a catalog/menu photo, which is the point of contrast with the hero/about's craft-framed photos), name/use-case/spec/WhatsApp-link stack below it as before.

### Process section icons
Left as SVG (these are 4 abstract steps, not a photographable "thing"), but restyled to look hand-sketched: replace the current clean geometric strokes with a slightly-imperfect, hand-drawn-style stroke (achieved via a subtle SVG `feTurbulence`-based displacement filter applied once, reused by all four icons) rather than commissioning new art per icon.

### Torn-paper / tilt photo framing (hero & about only)
- A reusable `.torn-photo` CSS class: `clip-path: polygon(...)` with an irregular jagged edge along the bottom, defined once as a fixed set of coordinates (deterministic, no runtime randomness).
- A small fixed rotation (`transform: rotate(-3deg)` for hero, `rotate(2deg)` for about) plus a soft drop shadow, so each photo reads as if placed at a slight angle rather than perfectly aligned to the grid.

### Grain texture overlay
- A single inline SVG noise filter (`feTurbulence` + `feColorMatrix`), rendered once as a data-URI background image at very low opacity (~0.04) applied to section backgrounds via a shared CSS class — breaks up the flat, too-clean vector-gradient look without needing an external texture asset.

### Button restyle
- Move off the fully-rounded pill shape (a very common generic/AI-template tell) to a rectangular button with a modest fixed corner radius (~6px) plus a second, slightly rotated dashed-border layer behind it (via `::before`) — reads as a hand-stamped ticket/label rather than a generic SaaS button.

## File structure changes

- New: `assets/images/hero-food.jpg`, `assets/images/about-varanasi.jpg`, `assets/images/product-dona.jpg`, `assets/images/product-plate.jpg` (exact filenames may adjust slightly based on what's actually sourced; downloaded and committed to the repo).
- Modified: `index.html` — CSS additions (torn-photo, grain overlay, button restyle classes), hero/about markup swapped from SVG containers to `<img>` tags, product-card render function updated to render an `<img>` instead of an icon SVG.
- The process-icon hand-sketch filter is added to the existing inline `<svg>` icon strings in the script block (no new files).

## Testing / validation

Same as v1: no automated test suite for this static page. Manual browser verification after implementation — confirm all 4 images load and display correctly, torn-paper/tilt effect renders as intended on hero and about, product cards show the correct photo per product `type`, grain overlay is subtle (not distracting), buttons read clearly at both desktop and mobile widths, and the existing bilingual/WhatsApp/animation/mobile-nav behavior from v1 is unaffected.

## Open items for later

- Swap in real photos of Sahlok Eco Products' own factory/products once available, replacing the category-representative stock photos.
- Consider per-product distinct photos (rather than 2 shared type-photos) once real product photography exists.
