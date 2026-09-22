# Sahlok Eco Products — Whole-Application UI Review

**Audited:** 2026-09-22
**Baseline:** `stitch-extracted/{homepage,products,wholesale,about,contact}/` (DESIGN.md + screen.png + code.html) treated as design contract, supplemented by abstract 6-pillar standards
**Screenshots:** Captured (desktop 1440x900, tablet 768x1024, mobile 375x812) via `npx playwright screenshot` against local dev server at `http://localhost:3000`. Playwright browsers were not pre-installed and were installed during this audit.

This is a retroactive whole-application audit (no `.planning/` phase structure exists in this repo). Scope: `/`, `/products`, `/products/8-inch-plate`, `/wholesale`, `/about`, `/contact`.

---

## Routes Audited

| Route | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| `/` (homepage) | Captured | Captured | Captured |
| `/products` | Captured | Captured | Captured |
| `/products/8-inch-plate` | Captured | Captured | Captured |
| `/wholesale` | Captured | Captured | Captured |
| `/about` | Captured | Captured | Captured |
| `/contact` | Captured | Captured | Captured |

Screenshots stored at `.planning/ui-reviews/shots/` (gitignored — `.planning/ui-reviews/.gitignore` created/verified before capture).

---

## Pillar Scores

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 2/4 | Copy strategy is strong and specific, but a sitewide JSX-escaping bug renders `→`, `✓`, `•`, `’`, `·`, `“/”` as literal text on every page — visible on buttons, bullet lists, and pull quotes. |
| 2. Visuals | 1/4 | Every photographic image on every page is broken (Next/Image proxy returns HTTP 500 for all `lh3.googleusercontent.com` Stitch-mockup URLs). The entire "Editorial Natural" photography-led identity from the design contract is absent — hero, product cards, factory shots, video thumbnail are all blank. |
| 3. Color | 3/4 | Approved palette (paper/ink/muted/brick/brass/oxblood/stone/card) matches DESIGN.md exactly and no hardcoded off-palette hex was found in components. However, WhatsApp CTAs sitewide use Tailwind default `emerald`/`green` — a third saturated accent not in the declared 2-accent (brick + brass) system, appearing on nearly every section. |
| 4. Typography | 2/4 | Font families (serif display + Plex Sans body) match contract. But 10 distinct `text-*` sizes (xs→6xl) and 6 distinct `font-*` weights (light/normal/medium/semibold/bold/extrabold) are in use, well beyond the abstract 4-size/2-weight guidance, with inconsistent weight choice for equivalent heading roles (`font-extrabold` vs `font-bold` on comparable H1/H2 across pages). |
| 5. Spacing | 3/4 | Spacing is mostly disciplined via Tailwind scale classes; only 69 arbitrary-bracket values found, concentrated in a handful of files (badge positioning, aspect ratios) rather than layout-critical spacing — acceptable but not perfectly clean. |
| 6. Experience Design | 2/4 | Forms have real client-side validation, disabled/"SENDING..." submit state, and a success message — good. But there is no loading state, no `error.tsx`/`not-found.tsx`, and no skeleton/spinner anywhere in the app; a slow network or bad product slug has no handled UX path. |

**Overall: 13/24**

---

## Top 3 Priority Fixes

1. **All product/hero/factory photography is broken sitewide (blank boxes on every page)** — Users see an empty, template-like site with zero product photography, directly undermining the brand's manufacturing/editorial credibility and making it impossible to evaluate product quality before enquiring. Root cause: components (`HeroSection.tsx:47`, `AboutHero.tsx:40`, `MaterialMakingSection.tsx:41`, `MirzapurSection.tsx:11`, `ContactHero.tsx:41`, `ProductCard.tsx` image, etc.) hot-link ephemeral Stitch-mockup URLs (`lh3.googleusercontent.com/aida*`) that Next/Image's optimizer fails to proxy (`/_next/image?...` returns HTTP 500). Fix: replace every `EditorialImage`/`ProductCard` `src` with real, licensed product/factory photography stored in `public/` (or a stable CDN), verify each resolves 200 through `/_next/image`, and add `next/image` `onError` fallback handling as defense-in-depth.

2. **JSX attribute/text escape bug renders `→`, `✓`, `•`, `’`, `“/”`, `·` as literal characters on every page** — Every "Ask for this size →", bullet list (Guaranteed B2B Consistency, Direct Mirzapur Production), quote mark, and apostrophe ("We'll", "Don't", "Let's") shows raw escape-code text to the visitor, reading as broken/unprofessional to a B2B buyer evaluating supplier credibility. Root cause: `→` etc. are written inside plain JSX attribute strings and JSX text nodes (e.g. `src/components/product/ProductCard.tsx:38`, `src/app/wholesale/page.tsx:26-116`, `src/components/sections/MaterialMakingSection.tsx:58-64`, `src/components/sections/about/MirzapurTransitSection.tsx:19-25`, `src/components/sections/about/MaterialSection.tsx:27`), where JSX does NOT interpret backslash-u escapes as JS string literals do — they are printed verbatim. Fix: replace every literal `\uXXXX` occurrence with the actual Unicode character (→, ✓, •, ', ", ") or `{'→'}` wrapped as a genuine JS expression, and add a lint rule/grep-based CI check to prevent recurrence.

3. **WhatsApp CTA green (`emerald-700`/`green-*`) is a third, undeclared accent color used on the primary conversion action across every page** — DESIGN.md specifies only two accents (terracotta brick for primary CTA, brass for secondary/eyebrow), explicitly warning against "generic green environmental imagery" and Shopify-template aesthetics; the shipped site nonetheless uses stock Tailwind green for every WhatsApp button (`Button.tsx:variant`, `WhatsAppButton.tsx:15`, `Header.tsx`, `Footer.tsx`, `MobileNav.tsx`, `wholesale/page.tsx`, `products/page.tsx`, `ContactInfoGrid.tsx`, `MaterialMakingSection.tsx`), breaking the 60/30/10 discipline and visually contradicting the brand's stated "NOT generic ecommerce/green environmental" identity. Fix: recolor WhatsApp CTAs to the approved brick/brass/oxblood palette (e.g., oxblood fill with brass icon, or a dedicated approved "whatsapp" token added intentionally to `globals.css` and documented, not a default Tailwind color).

---

## Detailed Findings

### Pillar 1: Copywriting (2/4)

**Strengths:** Copy is specific and B2B-appropriate, not generic ("Ask for this size", "Request Bulk Pricing Details", "Direct from Mirzapur to Your Doorstep"), avoiding the generic-label failure mode. Form validation copy is specific ("Full name is required", "Estimated quantity is required" — `EnquiryForm.tsx:55-61`). Success state copy names a real contact (`EnquiryForm.tsx:45`).

**Failures (differs from Stitch reference — the reference renders these as actual glyphs, not escape text):**
- `src/app/wholesale/page.tsx:26,29,31,34,36,85,92,99,116` — checkmarks/bullets/phone/mail icons render as `✓`, `•`, `☎`, `✉`.
- `src/components/product/ProductCard.tsx:38` — button label "Ask for this size →" renders literally.
- `src/components/sections/MaterialMakingSection.tsx:58,60,62,64` — process-step arrows broken.
- `src/components/sections/MirzapurSection.tsx:36`, `ProductRangeSection.tsx:18`, `contact/ProductsShortcut.tsx:18,43`, `about/ProductFocusSection.tsx:14,84`, `wholesale/QuantityTierGrid.tsx:37` — all CTA arrow suffixes broken.
- `src/components/sections/products/FactoryDirectBanner.tsx:17-19`, `CatalogueHero.tsx:59-62` — bullet lists broken (visible in `products_desktop.png` "Guaranteed B2B Consistency" box and "Direct from Mirzapur" list).
- `src/components/sections/about/MaterialSection.tsx:27` (recycle emoji `♻️`) and `ProductJourneySection`/`MirzapurTransitSection` arrows (`:19-25`) — same bug.
- Apostrophes/quotes broken too: `wholesale/page.tsx` "We’ll Help You Plan the Order", "You don’t need...", "Let’s Discuss" all render literally (visible in `wholesale_desktop.png`); `about` closing statement renders `“Start focused...”` instead of curly quotes (visible in `about_desktop.png`).
- This is sitewide, present on all 6 audited routes, and affects primary CTAs — not a cosmetic edge case.

### Pillar 2: Visuals (1/4)

- No image files exist anywhere under `public/` (`find public -iname "*.jpg" -o -iname "*.png" -o -iname "*.webp"` returned nothing).
- Every `EditorialImage` usage across the app (`HeroSection.tsx:47`, `AboutHero.tsx:40`, `MaterialMakingSection.tsx:41`, `MirzapurSection.tsx:11`, `ContactHero.tsx:41`, product card images, product spec-deep-dive image) points to a `lh3.googleusercontent.com/aida*` URL — these are Google Stitch mockup-tool preview links, not production assets.
- Verified via `curl` that Next.js's own `/_next/image?url=...` optimizer proxy returns **HTTP 500** for these URLs when requested through the running dev server, confirming the images fail to render for every visitor, not just this audit's browser.
- Visible in every captured screenshot: hero image area (home, about, contact) is an empty bordered box; all 6 product cards on `/products` and the homepage show empty gray placeholders instead of dona/plate photography; the "See How We Make It" video section on the homepage has no thumbnail; the product detail page (`products_8-inch-plate_desktop.png`) has no hero product image at all.
- This is a direct, total deviation from the Stitch reference (`stitch-extracted/homepage/screen.png`, `stitch-extracted/products/screen.png`), where photography of stacked dona/plates, factory workers, and packaging is the dominant visual element on every section ("Large photography as storytelling" per DESIGN.md).
- No `alt`-only fallback or skeleton/placeholder graphic is shown in place of the failed image — visitors just see an empty box with a border, which reads as an unfinished/broken page rather than an intentional loading state.

### Pillar 3: Color (3/4)

- `src/app/globals.css:4-11` defines exactly the palette specified in `stitch-extracted/homepage/DESIGN.md` (paper `#F4EFE6`, ink `#2B2521`, muted `#6B5D52`, brick `#B24A2E`, brass `#A87C3F`, oxblood `#4A1F1C`, stone `#C9C0B4`, card `#FFFFFF`) — good discipline, no hardcoded hex/rgb drift found via `grep -rn "#[0-9a-fA-F]{3,8}"` outside this file and a couple of test/util files.
- Deviation: `emerald`/`green-*` Tailwind classes appear in 10 files (`Button.tsx`, `WhatsAppButton.tsx`, `Header.tsx`, `Footer.tsx`, `MobileNav.tsx`, `products/page.tsx`, `wholesale/page.tsx`, `MaterialMakingSection.tsx`, `ContactInfoGrid.tsx`) and are visible as a bright green "CHAT ON WHATSAPP" button on literally every screenshot captured — this is the single most repeated colored element on the site and is not part of the approved 2-accent system. DESIGN.md explicitly says "Do NOT use generic green environmental imagery" — while this is a CTA color rather than imagery, the visual effect (a generic green sustainability-brand button dominating every fold) is exactly what the contract warns against.
- 60/30/10 balance for the *rest* of the palette (paper background dominant, ink/muted text, brick/brass restrained accents) is respected in the code and matches screenshots reasonably well.

### Pillar 4: Typography (2/4)

- Font family setup is correct and matches contract: serif display (`--font-family-serif`, Fraunces/Playfair) for headlines, Plex Sans for body (`globals.css:13-14`), consistent with DESIGN.md's "Editorial serif... IBM Plex Sans for readability."
- Size distribution grep found 10 distinct `text-*` tokens in active use (`xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl`) — an editorial site with a hero/eyebrow/stat/body hierarchy can justify more than 4 sizes, but this count is high and several pages use 3 or 4 different heading sizes within one page (e.g. `wholesale/page.tsx:17` alone spans `text-3xl md:text-4xl lg:text-5xl xl:text-6xl` for one heading — reasonable as responsive scaling, but combined with `text-2xl` stat numbers and `text-xs` eyebrows elsewhere it adds up to a large working set).
- Weight distribution found 6 distinct `font-*` tokens (`light, normal, medium, semibold, bold, extrabold`), exceeding the abstract 2-weight guidance. More importantly, usage is **inconsistent for equivalent roles**: H1 hero headline uses `font-extrabold` on the homepage (`HeroSection.tsx:22`) and on the product detail page (`products/[slug]/page.tsx:54`), but `font-normal`/serif-default on the About and Wholesale page H1s (`AboutHero.tsx:11`, `wholesale/page.tsx:17` uses `font-normal`) — the same semantic element (page H1) has different visual weight across routes, undermining a consistent type hierarchy.

### Pillar 5: Spacing (3/4)

- Most layout spacing (`p-*, px-*, py-*, gap-*, space-*`) uses standard Tailwind scale values consistently across sections — no evidence of ad hoc pixel-pushing in section/container padding.
- 69 arbitrary bracket values (`[...px]`/`[...rem]`) were found across 28 files, but sampling shows these are concentrated in non-spacing contexts: `aspect-[4/3]`, `aspect-[4/5]`, tracking (`tracking-[0.14em]` — matches DESIGN.md's declared `0.14em` eyebrow tracking exactly, so this is intentional and correct, not a violation), and line-height (`leading-[1.12]`). No arbitrary values were found overriding core margin/padding/gap spacing.
- Deduction is for volume/consistency of arbitrary values rather than misuse — a documented spacing/type scale in `globals.css` (currently only `--tracking-eyebrow` is centralized) would reduce the 69 inline arbitrary values scattered per-component.

### Pillar 6: Experience Design (2/4)

- Positive: `EnquiryForm.tsx` and `ContactForm.tsx` implement real required-field validation with per-field error copy (`EnquiryForm.tsx:55-61`), a disabled + "SENDING..." submit state (`EnquiryForm.tsx:217-218`), and a named success message (`EnquiryForm.tsx:45,101`) — this is genuine state coverage, not a stub.
- Gap: no loading state exists anywhere in `src` (`grep -rn "isLoading|Spinner|skeleton"` returned zero matches) — given the site is otherwise mostly static content this is lower risk, but the broken-image situation (Pillar 2) means users currently get an indefinite "loading" appearance with no skeleton or fallback.
- Gap: no `error.tsx` or `not-found.tsx` exists in `src/app` — an invalid product slug or a thrown error during render has no custom handled state; Next.js will fall back to its default error page, which is inconsistent with the site's design system.
- No confirmation modal is needed here (no destructive actions in this B2B lead-gen site), so that sub-criterion doesn't apply.

---

## Files Audited

- `src/app/page.tsx`, `src/app/products/page.tsx`, `src/app/products/[slug]/page.tsx`, `src/app/wholesale/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`
- `src/components/layout/Header.tsx`, `Footer.tsx`, `MobileNav.tsx`
- `src/components/ui/Button.tsx`, `SectionHeading.tsx`, `WhatsAppButton.tsx`, `EditorialImage.tsx` (+ test)
- `src/components/product/ProductCard.tsx`, `ProductSpecTable.tsx`
- `src/components/forms/EnquiryForm.tsx`, `FormField.tsx`
- `src/components/sections/HeroSection.tsx`, `ProductRangeSection.tsx`, `WhoWeSupplySection.tsx`, `MaterialMakingSection.tsx`, `MirzapurSection.tsx`, `WholesaleCtaSection.tsx`, `ContactSection.tsx`
- `src/components/sections/about/*` (AboutHero, ProductFocusSection, MaterialSection, ApproachSection, BuyerSegmentsSection, MirzapurTransitSection, ProductJourneySection, BrandStatementSection, ClosingCtaSection)
- `src/components/sections/products/*` (CatalogueHero, FactoryDirectBanner, SectorsGrid)
- `src/components/sections/wholesale/*` (BuyerTypeGrid, QuantityTierGrid, EnquiryProcessSteps)
- `src/components/sections/contact/*` (ContactHero, ContactForm, ContactInfoGrid, LocationSection, ProductsShortcut, WhatsAppBanner, BuyerCtaSection)
- `src/content/products.ts`, `src/content/site.ts`
- `next.config.ts`
- `stitch-extracted/homepage/DESIGN.md`, `stitch-extracted/homepage/screen.png`, `stitch-extracted/products/screen.png` (reference comparison)
- Screenshots: `.planning/ui-reviews/shots/{home,products,products_8-inch-plate,wholesale,about,contact}_{desktop,tablet,mobile}.png` (18 files)

**Registry audit:** No `components.json` found — shadcn not initialized in this project. Registry Safety audit skipped per instructions.
