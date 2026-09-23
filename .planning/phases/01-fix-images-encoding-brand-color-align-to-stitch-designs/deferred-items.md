# Deferred / Out-of-Scope Items — Phase 01

Discovered during 01-04 execution (sitewide verification pass). None of these block Task 1's
acceptance criteria and none were touched — logged per the executor's scope-boundary rule
("only auto-fix issues directly caused by the current task's changes").

## 1. Untracked candidate photography in `dona-pattal-webApp/public/` (root, not `public/images/`)

17 untracked PNG files sit directly in `dona-pattal-webApp/public/` (not under `public/images/`),
not referenced by any component, e.g.:

- `cinematic_documentary_travel_and_industrial_photograph_representing_mirzapur.png`
- `crisp_industrial_macro_photograph_showing_a_paper_dona_bowl_being_formed_in_a.png`
- `editorial_macro_commercial_studio_photograph_of_raw_manufacturing_material_for.png`
- `commercial_studio_product_photograph_of_an_authentic_indian_{4,6,7,8,10,12}_inch_disposable*.png`
- plus 8 more with similar AI-image-generator-style prompt filenames.

These filenames read like AI-image-generation prompts, not descriptive names a camera/phone would
produce for genuine on-site photography. They are **not verified as real Mirzapur factory
photographs**. Plan 01-01's Task 1 decision (`honest-substitute`) explicitly left "real Mirzapur
factory photography" as an open follow-up requiring a supplied genuine photo — wiring AI-generated
imagery in its place would risk violating `PROJECT.md`'s "No fabricated assets" constraint rather
than resolving the follow-up. Do not wire these into any component without an explicit user
decision on provenance (are these genuine photos of the real facility, or AI-generated stock?) —
that decision is out of scope for a verification-only plan and belongs in its own
checkpoint:decision gate in a future plan.

## 2. `dona-pattal-webApp/public/stitch_sahlok_eco_products.zip`

An untracked zip archive sitting inside `public/` would be served as a downloadable static file in
production (anything under `public/` is exposed at the site root). Flagged for follow-up — either
move it outside `public/` or confirm it's intentionally meant to be a public download — but it
predates this plan's changes and removing/relocating it is outside `files_modified` scope for
01-04.

## 3. `stitch-extracted/stitch design/new_homepage_design/` (untracked)

An untracked new Stitch design export. Phase 01 is scoped to fixing the *existing* app against the
*existing* `stitch-extracted/{homepage,products,wholesale,about,contact}/` references — not to a
redesign. If this represents a new design direction, it needs its own requirements/roadmap entry,
not silent adoption mid-verification-pass.

## Carried forward from 01-01

- **Real Mirzapur factory/manufacturing photography is still required.** `MaterialMakingSection`,
  `MirzapurSection` and `FactoryDirectBanner` show real product/material photography instead of an
  actual photo of the Mirzapur facility (see item 1 above for why the untracked candidate images
  don't resolve this automatically).

## Carried forward from REQUIREMENTS.md (v2, unchanged)

- EXP-01: loading states
- EXP-02: error/empty states
- EXP-03: font-weight normalization across equivalent heading roles
- EXP-04: reduce arbitrary Tailwind bracket spacing values
