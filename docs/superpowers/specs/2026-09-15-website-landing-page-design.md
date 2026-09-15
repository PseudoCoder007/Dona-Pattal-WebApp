# Sahlok Eco Products LLP — Website Landing Page Design

**Date:** 2026-09-15
**Status:** Approved for implementation

## Background

Sahlok Eco Products LLP (working name, may change later) is a pre-launch paper
dona & pattal (disposable paper bowl/plate) manufacturing business setting up
in Varanasi, Uttar Pradesh. It targets B2B wholesale buyers — hotels,
restaurants, sweet shops, caterers, and banquet halls — first in Varanasi,
then expanding regionally. Business context is documented in
`docs/Varanasi_Paper_Dona_Pattal_Business_Plan.docx` and
`docs/Varanasi_Dona_Pattal_Business_Plan.docx`.

This spec covers a first-pass website: a single static HTML page to show what
the site should look like. No backend, no build tooling — one self-contained
file.

## Goals

- Serve as a combined brochure + product showcase + wholesale-inquiry
  landing page (all three, not one at the expense of the others).
- Read as **pre-launch**: inviting inquiries, sample requests, and
  introductory bulk rates — not claiming an existing track record or
  customer base.
- Primary conversion action: WhatsApp click-to-chat (no backend available).
- Bilingual: English and Hindi, toggle-able, no page reload.
- Visual style: warm, traditional-Indian palette (terracotta, maroon,
  marigold/saffron, warm off-white) — not generic corporate blue/white, and
  not a generic AI-template look (see Design Principles below).

## Non-goals

- No real backend, database, or working form submission.
- No e-commerce/checkout.
- No real product photography (none available yet) — use illustrated
  SVG/CSS visuals instead of stock photos.
- No multi-page routing — everything lives on one scrolling page for this
  first pass.

## Content facts (as given)

- Brand name: **Sahlok Eco Products LLP** (explicitly "for now" — may change).
- Owner: **Sahil Gupta**.
- Phone / WhatsApp: **+91 93206 24706**.
- No email address provided — do not invent one.
- No physical address provided — do not invent one; keep location references
  to "Varanasi, Uttar Pradesh" only (already established in the business
  plan docs).
- No real product photos — build illustrative visuals instead.

## Page structure (single scrolling page)

1. **Sticky header** — brand name, nav links (About / Products / Process /
   Why Us / Contact), language toggle (EN/HI), WhatsApp button.
2. **Hero** — headline framing the pre-launch angle (e.g. "Launching
   Varanasi's newest eco-friendly dona & pattal unit"), subheadline, primary
   CTA (WhatsApp bulk pricing), secondary CTA (scroll to products).
3. **About** — what the business makes, why paper/eco-friendly, Varanasi
   basis, pre-launch/introductory-rate framing.
4. **Products** — grid of cards for core sizes (6", 7", 8", 10", 12" dona
   and plates), each showing size, typical use case (chaat/curry/full
   meal/sweets), and a per-product "Ask for this size" WhatsApp link.
   Rendered from a JS data array, not hand-authored per card.
5. **How It's Made / Quality** — short 3-4 step visual strip (paper sourced →
   pressed & moulded → quality checked → packed for delivery) to build trust
   in the absence of a track record.
6. **Why Choose Us** — feature tiles: eco-friendly/biodegradable, food-safe/
   hygienic, wholesale bulk pricing, local Varanasi-based reliability.
7. **Contact / Inquiry** — owner name, phone, WhatsApp-based "inquiry form"
   (prefilled message links, not a real submission), invitation to request
   samples.
8. **Footer** — brand name, tagline, phone, small print.

## Visual design

- **Palette**: terracotta primary, deep maroon for headers/accents,
  marigold/saffron for highlights and CTAs, warm off-white/cream background,
  dark brown/charcoal text. No stark white, no generic corporate blue.
- **Typography**: one Google Font for headings — **Baloo 2** (warm, rounded
  display face that also has Devanagari-script support, so Hindi headings
  keep the same visual warmth as English ones instead of falling back to a
  generic system font when the language toggle switches). System font stack
  for body text in both languages.
- **Visuals**: no stock photography. Custom inline SVG illustrations —
  a stylized stack of dona/pattal, a recurring marigold-garland or
  temple-arch motif tying to Varanasi — instead of generic icon-in-circle
  clipart.
- **Layout**: mobile-first, card-based grids, generous spacing, rounded
  corners. Sections vary in layout (not every section is "centered heading +
  N identical cards") to avoid a templated feel.
- **Motion**: scroll-triggered reveal animations as sections enter view,
  smooth anchor scrolling from nav clicks, hover depth/lift on cards and
  buttons, a subtle entrance animation on the hero, small interactive touches
  on product cards (e.g. slight tilt/expand on hover). Custom angled/wave
  section dividers instead of plain straight lines.

## Design principles: avoid a generic/AI-templated look

This was explicit user feedback and should guide every section:

- No centered-hero-with-gradient-blob default layout.
- No repeated "icon in circle + heading + paragraph" card pattern used
  identically everywhere.
- Prefer a recurring, brand-specific illustrated motif over generic stock
  icons.
- Vary section layout/rhythm rather than a uniform grid-of-cards for every
  section.
- Use real, purposeful motion (see above) rather than static-only sections.

## Bilingual mechanism

- Every visible string (nav, headings, body copy, product labels, CTAs) has
  paired English/Hindi text baked into the page (e.g. as data attributes or
  a small text object per element).
- A single toggle switches which language is shown, instantly, no reload.
- Last-selected language is remembered via `localStorage` for that browser.

## Products data

A small JS array of objects, one per SKU, each with: name (EN/HI), size
(diameter), GSM range, typical use case (EN/HI), pack size. Cards are
rendered from this array at load time so adding/editing a product later
doesn't require touching markup.

## WhatsApp / contact behavior

- All CTAs link to `https://wa.me/919320624706` with a prefilled message
  (varies slightly by context, e.g. mentioning the specific product size
  when clicked from a product card).
- Phone number also shown as a plain tap-to-call link for users without
  WhatsApp.
- No email or physical address shown, since none was provided.

## Responsiveness & validation

- Mobile-first design; single-column stacking on narrow viewports; nav
  collapses appropriately on small screens.
- Since this is a static mockup with no automated test suite, verification
  is manual: open in a browser preview and check both language states,
  mobile and desktop widths, and that every WhatsApp link is well-formed
  (correct number, readable prefilled message, opens correctly).

## Open items for later (not blocking this first pass)

- Real product photography to replace illustrated SVG visuals.
- Real email address / physical address, once available.
- Confirm final brand name (currently "for now": Sahlok Eco Products LLP).
