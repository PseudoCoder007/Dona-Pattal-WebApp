---
phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
plan: 02
subsystem: ui
tags: [tailwind, react, nextjs, brand-color, cta, accessibility-copy]

# Dependency graph
requires:
  - phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs
    provides: "globals.css @theme tokens (brick/brass/oxblood/ink/paper) declared in prior work; this plan only consumes them, never edits globals.css"
provides:
  - "WhatsApp CTA (Button whatsapp variant + standalone WhatsAppButton + inline instances) restyled from Tailwind emerald/green to declared oxblood/brass brand tokens"
  - "Header and mobile-nav taglines render the real middle-dot character instead of the literal \\u00b7 escape text"
  - "Button.test.tsx green-regression guard test"
affects: [01-04-verify-and-polish]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "WhatsApp/secondary CTA colour convention: bg-oxblood hover:bg-ink text-paper (never emerald/green)"
    - "Inline WhatsApp/secondary text links: text-brick or text-oxblood depending on surface, never text-emerald-*"

key-files:
  created: []
  modified:
    - dona-pattal-webApp/src/components/ui/Button.tsx
    - dona-pattal-webApp/src/components/ui/Button.test.tsx
    - dona-pattal-webApp/src/components/ui/WhatsAppButton.tsx
    - dona-pattal-webApp/src/components/layout/Header.tsx
    - dona-pattal-webApp/src/components/layout/Footer.tsx
    - dona-pattal-webApp/src/components/layout/MobileNav.tsx
    - dona-pattal-webApp/src/app/products/page.tsx
    - dona-pattal-webApp/src/components/sections/contact/ContactInfoGrid.tsx

key-decisions:
  - "WhatsApp CTA uses bg-oxblood hover:bg-ink text-paper (not brick) per plan's design_precedence_note — keeps it visually distinct from the brick primary CTA beside it in the homepage hero"
  - "WhatsAppButton icon changed from fill-current to fill-brass; verified via production build that Tailwind 4 generates .fill-brass{fill:var(--color-brass)} from the existing @theme token, so no revert to fill-current was needed"
  - "Literal \\u00b7 escape text (6 raw characters, not real JSON unicode escapes) required a targeted Node script rather than the Edit tool, because the Edit tool's string parameters silently JSON-decoded any '\\u00b7' typed in old_string/new_string into the single middle-dot character, causing 'old_string and new_string are identical' failures and one silent no-op 'success'. Verified via raw byte inspection before and after."

requirements-completed: [COLOR-01, TXT-01, TXT-02]

# Metrics
duration: ~25min
completed: 2026-09-23
---

# Phase 01 Plan 02: Retarget WhatsApp CTA to Brand Tokens, Fix Escape Literals Summary

**All Tailwind `emerald`/`green-*` classes removed from the app's CTA system, replaced with the declared oxblood/brass/brick brand tokens, and the three literal `·` escape-text bugs in the header/mobile-nav taglines fixed to render a real middle dot.**

## Performance

- **Duration:** ~25 min
- **Completed:** 2026-09-23T01:43:33Z
- **Tasks:** 2 completed
- **Files modified:** 8 source files + 1 test file

## Accomplishments
- `Button.tsx` `whatsapp` variant and standalone `WhatsAppButton.tsx` now render `bg-oxblood hover:bg-ink text-paper`, with the WhatsApp icon tinted `fill-brass` (confirmed resolving correctly in `next build` output, `.fill-brass{fill:var(--color-brass)}`)
- Every remaining inline WhatsApp/CTA consumer (`Header.tsx`, `MobileNav.tsx`, `products/page.tsx`, `Footer.tsx`, `ContactInfoGrid.tsx`) swept clean of `emerald`/`green-*` classes per the plan's `<color_map>`
- Three literal `·` escape-text bugs (`Header.tsx:23`, `MobileNav.tsx:25`, `MobileNav.tsx:53`) replaced with the real `·` (U+00B7) character
- `Button.test.tsx` updated: renamed assertion to `bg-oxblood`, added a new regression-guard test asserting the `whatsapp` variant className never matches `/emerald|green-/`

## Task Commits

Each task was committed atomically:

1. **Task 1: Restyle the shared CTA primitives and fix their tests** - `37ec1e9` (feat)
2. **Task 2: Sweep the remaining green consumers and fix the header/nav escapes** - `9115525` (fix)

**Plan metadata:** _pending — created after this summary_

## Files Created/Modified
- `dona-pattal-webApp/src/components/ui/Button.tsx` - `whatsapp` variant retargeted to `bg-oxblood hover:bg-ink text-paper`
- `dona-pattal-webApp/src/components/ui/Button.test.tsx` - renamed emerald assertion to oxblood; added green-regression guard test
- `dona-pattal-webApp/src/components/ui/WhatsAppButton.tsx` - same colour retarget; icon `fill-current` -> `fill-brass`
- `dona-pattal-webApp/src/components/layout/Header.tsx` - WhatsApp CTA retargeted; tagline `·` -> `·`
- `dona-pattal-webApp/src/components/layout/Footer.tsx` - WhatsApp link `hover:text-emerald-700 text-emerald-800` -> `hover:text-brick text-oxblood`
- `dona-pattal-webApp/src/components/layout/MobileNav.tsx` - WhatsApp CTA retargeted; two `·` occurrences -> `·`
- `dona-pattal-webApp/src/app/products/page.tsx` - inline WhatsApp CTA retargeted
- `dona-pattal-webApp/src/components/sections/contact/ContactInfoGrid.tsx` - secondary link `text-emerald-700` -> `text-brick`

## Decisions Made
- Kept `WhatsAppButton` icon as `fill-brass` (not reverted to `fill-current`) — verified in the production build that Tailwind 4 emits a valid `.fill-brass` rule from the existing `--color-brass` token in `globals.css`, so the plan's fallback contingency (1c) was not triggered.
- Used a small Node script (not the Edit tool) to perform the three `·` -> `·` replacements after the Edit tool's JSON string-parameter handling silently decoded literal `·` text in `old_string`/`new_string` into the real middle-dot character mid-call, making the tool see `old_string === new_string` (or, in one case, report success without actually changing the file). Verified via raw byte inspection (`Buffer`/`repr`) before and after the script ran, and via `grep -c 'u00b7'` / `grep -c '·'` against the acceptance-criteria counts.

## Deviations from Plan

### Auto-fixed Issues

None — no Rule 1/2/3 auto-fixes were required. The only deviation from the literal task instructions was a **tooling substitution**, not a scope or correctness change: task 2b's escape-literal replacement was performed via a Node script instead of the `Edit` tool, because the `Edit` tool could not reliably express the distinction between the literal 6-character text `·` and the single real character `·` in its string parameters. The resulting file content is identical to what the plan specified (verified via `grep -c 'u00b7'` returning 0 and `grep -c '·'` matching the plan's acceptance-criteria counts of 1 for Header.tsx and 2 for MobileNav.tsx).

---

**Total deviations:** 0 auto-fixed (1 tooling-only substitution, no scope/correctness change)
**Impact on plan:** None on scope. All acceptance criteria met exactly as specified.

## Issues Encountered
- The `Edit` tool's string parameters JSON-decode literal `·` text typed into `old_string`/`new_string` into the actual middle-dot character before the tool compares/writes, which meant two of three escape-literal edit attempts failed with "old_string and new_string are exactly the same" and one reported success while leaving the file byte-for-byte unchanged. Resolved by writing a small Node script (`String.fromCharCode(92) + 'u00b7'` vs `String.fromCharCode(0xb7)`) that operates on the file content directly, bypassing the ambiguous string-literal parsing. Verified via raw byte/`repr` inspection and final grep counts matching the plan's acceptance criteria exactly.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All plan 01-02 acceptance criteria verified: `grep -c 'bg-oxblood'` returns 1 in both `Button.tsx` and `WhatsAppButton.tsx`; no `emerald`/`green-` matches remain in `src/components/ui/`, `src/components/layout/`, `src/app/products/page.tsx`, or `ContactInfoGrid.tsx`; `grep -c 'bg-brick'` in `Button.tsx` still returns 1 (primary variant untouched); no `\uXXXX`-style escape literals remain in `src/components/layout/`; `·` counts match (1 in Header.tsx, 2 in MobileNav.tsx); `bg-oxblood` count is 1 in each of Header.tsx, MobileNav.tsx, and products/page.tsx.
- Site-wide sweep confirms the only remaining `emerald`/`green-*` matches in `dona-pattal-webApp/src` are in `src/app/wholesale/page.tsx` and `src/components/sections/MaterialMakingSection.tsx`, both explicitly owned by plan 01-01 — matches the plan's `<verification>` item 1 expectation exactly.
- `npm run lint` exits 0. `npm run test` exits 0 (17 test files, 52 tests passing). `npm run build` succeeds; production CSS chunk confirms `.fill-brass{fill:var(--color-brass)}` is emitted.
- Ready for plan 01-04 (sitewide verification/polish gate) once plans 01-01 and 01-03 (same wave) also complete.

---
*Phase: 01-fix-images-encoding-brand-color-align-to-stitch-designs*
*Completed: 2026-09-23*

## Self-Check: PASSED

- FOUND: dona-pattal-webApp/src/components/ui/Button.tsx
- FOUND: dona-pattal-webApp/src/components/ui/WhatsAppButton.tsx
- FOUND: .planning/phases/01-fix-images-encoding-brand-color-align-to-stitch-designs/01-02-SUMMARY.md
- FOUND commit: 37ec1e9
- FOUND commit: 9115525
- FOUND commit: 561f000
