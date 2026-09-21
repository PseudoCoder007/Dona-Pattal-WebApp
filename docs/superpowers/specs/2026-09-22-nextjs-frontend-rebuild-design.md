# Sahlok Eco Products — Next.js Frontend Rebuild (UI-only phase)

## Context

Sahlok Eco Products LLP is a B2B/wholesale paper dona & paper-plate manufacturer
in Mirzapur, UP. The current live site (`html-design/index.html`, formerly
root `index.html`) is a hand-built static HTML/CSS/JS page, bilingual (EN/HI).
A separate in-progress iteration lives at `html-design/v3/index.html`. `v2/`
holds the asset library (photos, logo) that both iterations share.

Seven Stitch-generated design exports now exist in `stitch design/` (as
zips). This spec rebuilds the site as a proper Next.js application using the
approved Stitch visual direction as the source of truth, **frontend only** —
no backend, no Supabase, no forms actually submitting anywhere. Backend work
starts only after this UI is reviewed and approved.

## Source-of-truth designs (resolved)

Of the Stitch exports, five share one consistent, final design system — same
approved palette (`#F4EFE6/#2B2521/#6B5D52/#B24A2E/#A87C3F/#4A1F1C/#C9C0B4`),
same photography style, same header/footer patterns:

| Zip | Maps to |
|---|---|
| `stitch_sahlok_eco_products_v3_real_data_desktop_homepage` | Homepage |
| `stitch_sahlok_eco_products_details_v1` | `/products` catalogue + product detail template |
| `Wholesale_Enquiry_page` | `/wholesale` |
| `about_shalok_v1` | `/about` |
| `contact-page` | `/contact` |

The remaining four (`desktop-homepage`, `desktop_home_v2`, `mobile-homepage`,
`stitch_sahlok_eco_products (1)`) are an earlier, superseded direction
(sage-green accents, Cinzel font, different structure) — **not used**.
`stitch_sahlok_eco_products_dona` / `_img_mix` / `_img_pattal` are standalone
product photography (no page), usable as image assets.

## Scope decisions (confirmed with stakeholder)

- **Language:** English only for this phase. The current site's EN/HI toggle
  is a real, working feature but is out of scope here — it becomes its own
  future phase (needs its own content/translation pass, not a retrofit onto
  unreviewed English copy).
- **Repo layout:** Next.js becomes the new project root. `html-design/`
  (already relocated by the user, containing the old root `index.html` and
  `v3/index.html`) and `v2/` (asset library) stay as reference/rollback,
  untouched by this work except for copying needed image assets out of
  `v2/assets/images/` into the new `public/images/`.
- **No backend, no Supabase, no auth, no admin, no real form submission.**
  Forms are frontend-only with local React state and a polished success
  state. This phase stops once the full UI renders locally and is reviewed.

## Stack

- Next.js (App Router, latest stable), TypeScript, npm
- Tailwind CSS installed via PostCSS (not Stitch's Play CDN script)
- No animation library dependency beyond CSS transitions / IntersectionObserver
  for scroll-reveal (matches "restrained animation" requirement; avoids
  pulling in GSAP just to replicate a fade+translate)

## Design tokens

Stitch generated five *slightly* different token sets across the five source
pages (different alias names, and a font split: homepage used
`Fraunces + Playfair Display + Public Sans`, the other four used
`Literata + IBM Plex Sans`). This rebuild unifies on one token set so the
site reads as one system:

- **Colors** (`tailwind.config.ts` theme, single source): `paper #F4EFE6`,
  `ink #2B2521`, `muted #6B5D52`, `brick #B24A2E`, `brass #A87C3F`,
  `oxblood #4A1F1C`, `stone #C9C0B4`, `card #FFFFFF`.
- **Typography:** display/headline = Fraunces → Playfair Display → Georgia
  fallback stack; body = IBM Plex Sans. This matches the homepage Stitch
  export, matches the CLAUDE.md-approved font list, and matches the current
  production site's typography (continuity), while keeping a body font with
  Devanagari coverage for when Hindi returns.
- **Radius:** 4px default (matches Stitch `border-radius: 0.125rem` pattern
  across all five pages).

## Routes (App Router)

```
/                      Homepage
/products              Product catalogue
/products/[slug]       Product detail (one template, 6 generated routes)
/wholesale             Wholesale enquiry
/about                 About Sahlok
/contact               Contact
```

`[slug]` values: `4-inch-dona`, `6-inch-dona`, `7-inch-plate`, `8-inch-plate`,
`10-inch-plate`, `12-inch-plate` — generated via `generateStaticParams` from
`content/products.ts`, not six hand-written page files.

## Content/data architecture

```
src/content/
  site.ts       business info (name, address, phone/WhatsApp, owner),
                nav links, footer content, and a `claimsToVerify` block
                listing unverified claims (factory, certifications, capacity
                etc.) carried over from the Stitch copy, flagged for a later
                factual-cleanup pass — not scattered through JSX.
  products.ts   the 6 products as data: id, slug, name, category
                (dona|plate), size, use, gsm, packSize, description, image
                path, whatsappMessage template.

src/lib/
  whatsapp.ts   buildWhatsAppUrl(phone, message) — single source of truth,
                every WhatsApp CTA and product-specific enquiry link goes
                through this.
```

`ProductCard`, `ProductGrid`, etc. receive product data as props; they do not
know about content files directly (keeps them reusable and later
Supabase-ready — swapping `content/products.ts` for a Supabase fetch later
touches one file, not every component).

## Image architecture

```
public/images/
  brand/        logo (from v2/assets/images/sahlok-eco-logo.svg + .png)
  products/     product-dona.jpg, product-plate.jpg (from v2), plus the
                Stitch-generated dona/pattal/mix photography where useful
  about/        about-dona-pattal.jpg, about-paper-pattal.png, about-sweets.jpg (from v2)
  backgrounds/  hero-cover-bg.png / finlal_bg.png (from v2) as candidates
                for the homepage hero — real local files, not the temporary
                lh3.googleusercontent.com/aida/... URLs Stitch embedded
```

Any Stitch image that has no local equivalent yet stays referenced by URL,
but only from inside `content/*.ts` — never inline in JSX — so it's a
one-line swap when real product photography is ready.

## Component inventory

```
components/layout/   Header, MobileNav, Footer
components/ui/       Button, WhatsAppButton, SectionHeading, EditorialImage
components/product/  ProductCard, ProductGrid, ProductSpecTable
components/forms/    EnquiryForm, FormField
components/sections/ per-page section components (HeroSection, WhoWeSupply,
                      MaterialStory, MirzapurConnection, BuyerCategoryGrid,
                      ProcessSteps, LocationSection, CTASection, etc.)
```

`EnquiryForm` is one shared component (props control which fields show) reused
across the wholesale page, contact page, and product-detail enquiry — all
three Stitch forms use the same field set: full name, company name,
phone/WhatsApp, email (optional), product/category select, quantity, city,
state, message.

## Responsive & accessibility

Stitch supplied a desktop layout for the five approved pages; there is no
matching approved mobile homepage (the only mobile export is part of the
rejected direction). Mobile/tablet layouts for all pages are built fresh,
following the same visual system, checked at 1440/1280/1024/768/390/375/320,
no horizontal overflow, touch-friendly targets, working mobile nav.
Semantic HTML, heading hierarchy, alt text, labeled form fields, visible
focus states, `prefers-reduced-motion` respected for scroll-reveal.

## SEO

Per-route `metadata` exports (title/description/OpenGraph), titles following
the patterns already specified by the stakeholder (e.g. "6 Inch Paper Dona
Wholesale | Sahlok Eco Products").

## Explicit non-goals (this phase)

No cart/checkout/payment, no fake pricing/stock/reviews/certifications beyond
what Stitch copy already contains (flagged in `claimsToVerify`, not rewritten
now), no Supabase/database/auth/admin/API routes, no real form submission, no
Hindi content.

## Documentation

`docs/` gets planning stubs (`PRD.md`, `ARCHITECTURE.md`, `ROUTES.md`,
`UI-SYSTEM.md`, `COMPONENTS.md`) with `TBD / DECISION REQUIRED` markers for
anything that depends on post-approval backend decisions (ERD, API, auth) —
no invented implementation detail.

## Verification

`npm install && npm run dev` must serve all 10 routes locally with no
horizontal overflow, working nav/forms/WhatsApp links, at each of the 7
target breakpoints, before this phase is reported complete.
