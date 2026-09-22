# Plan: v3 Process Section (How It's Made)

## Goal
Replace the `making-story` placeholder section in v3/index.html with a proper 4-step "How It's Made" process section using adapted v2 SVGs in v3's design system, animated with GSAP ScrollTrigger.

## Scope
- Single file: `v3/index.html`
- Replace section `#making-story` (lines 332-340)
- Add 4 process steps with inline SVGs
- GSAP staggered scroll reveal

## Design Decisions (Locked)
| Decision | Choice |
|----------|--------|
| Section replacement | Replace `making-story` entirely |
| Icon source | Adapt v2's 4 inline SVGs to v3 colors |
| Colors | `--brick` (#B24A2E) for primary strokes, `--brass` (#A87C3F) for accents |
| Animation | GSAP ScrollTrigger stagger (0.12s) |
| Layout | CSS Grid, 1-col mobile, 2-col tablet, 4-col desktop |
| Typography | `--font-display` for step numbers, `--font-body` for labels |

## Implementation Steps

### 1. Create 4 Adapted SVGs
Map v2 SVGs → v3 palette:
- Step 1 (Paper Sourced): Rect + lines → `--brick` stroke, `--brass` lines
- Step 2 (Pressed & Moulded): Circle + path → `--brick` stroke, `--brass` path
- Step 3 (Quality Checked): Checkmark path → `--brick` stroke
- Step 4 (Packed for Delivery): Box + lid → `--brick` stroke, `--brass` accent

Each SVG: `viewBox="0 0 64 64"`, `fill="none"`, `stroke-width="2.5"`

### 2. HTML Structure (replaces lines 332-340)
```html
<section class="section process" id="process">
  <div class="container">
    <p class="section__eyebrow reveal" data-en="Our Process" data-hi="हमारी प्रक्रिया"></p>
    <h2 class="heading reveal" data-en="How It's Made" data-hi="यह कैसे बनता है"></p>
    <div class="process-grid" id="process-grid"></div>
  </div>
</section>
```

### 3. CSS Additions (in `<style>`)
```css
.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
}
@media (max-width: 1024px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .process-grid { grid-template-columns: 1fr; } }

.process-step {
  text-align: center;
  padding: 24px 16px;
}
.process-step__icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  opacity: 0;
  transform: translateY(20px);
}
.process-step__number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--brick);
  opacity: 0.15;
  line-height: 1;
  margin-bottom: 8px;
}
.process-step__name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 6px;
}
.process-step__desc {
  font-size: 0.9rem;
  color: var(--ink-soft);
  margin: 0;
}
```

### 4. JS Data & Rendering (in script)
```js
var PROCESS_STEPS = [
  { num: 1, nameEn: 'Paper Sourced', nameHi: 'कागज़ की खरीद', descEn: 'Quality paper rolls sourced and checked for GSM and strength.', descHi: 'गुणवत्तापूर्ण पेपर रोल की खरीद, GSM और मजबूती की जांच के साथ।', svg: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="10" width="36" height="44" rx="4" stroke="var(--brick)" stroke-width="2.5"/><path d="M20 20h24M20 30h24M20 40h16" stroke="var(--brass)" stroke-width="2.5" stroke-linecap="round"/></svg>' },
  { num: 2, nameEn: 'Pressed & Moulded', nameHi: 'प्रेस और मोल्ड', descEn: 'Machine-pressed into shape using heat and precision dies.', descHi: 'गर्मी और सटीक डाई का उपयोग करके मशीन से आकार में ढाला जाता है।', svg: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="20" stroke="var(--brick)" stroke-width="2.5"/><path d="M32 16v16l12 8" stroke="var(--brass)" stroke-width="2.5" stroke-linecap="round"/></svg>' },
  { num: 3, nameEn: 'Quality Checked', nameHi: 'गुणवत्ता जांच', descEn: 'Each batch checked for rigidity, finish and leak-resistance.', descHi: 'हर बैच की मजबूती, फिनिश और रिसाव-रोधी क्षमता की जांच की जाती है।', svg: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 32l12 12 24-24" stroke="var(--brick)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  { num: 4, nameEn: 'Packed for Delivery', nameHi: 'डिलीवरी के लिए पैकिंग', descEn: 'Counted, bundled and packed ready for bulk dispatch.', descHi: 'गिनती, बंडलिंग और थोक डिस्पैच के लिए पैकिंग।', svg: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="22" width="44" height="30" rx="3" stroke="var(--brick)" stroke-width="2.5"/><path d="M10 30h44" stroke="var(--brick)" stroke-width="2.5"/><path d="M32 22v-8m-8 8l8-8 8 8" stroke="var(--brass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' }
];

function renderProcessSteps() {
  var grid = document.getElementById('process-grid');
  PROCESS_STEPS.forEach(function (step) {
    var el = document.createElement('article');
    el.className = 'process-step reveal';
    el.innerHTML =
      '<div class="process-step__icon">' + step.svg + '</div>' +
      '<div class="process-step__number">' + step.num + '</div>' +
      '<h3 class="process-step__name" data-en="' + step.nameEn + '" data-hi="' + step.nameHi + '"></h3>' +
      '<p class="process-step__desc" data-en="' + step.descEn + '" data-hi="' + step.descHi + '"></p>';
    grid.appendChild(el);
  });
}
```

### 5. GSAP Animation (in `initScrollReveal` or new `initProcessAnimations`)
```js
function initProcessAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Stagger icons
  gsap.utils.toArray('.process-step__icon').forEach(function (icon, i) {
    gsap.from(icon, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: icon, start: 'top 85%', once: true },
      delay: i * 0.12
    });
  });

  // Stagger text content
  gsap.utils.toArray('.process-step__name, .process-step__desc').forEach(function (el, i) {
    gsap.from(el, {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      delay: (i % 2) * 0.08
    });
  });
}
```

Call `initProcessAnimations()` in DOMContentLoaded after `renderProcessSteps()`.

### 6. Language Support
- All text uses `data-en`/`data-hi` attributes
- Existing `applyLanguage()` handles translation automatically
- No additional JS needed

## Ponytail Checks
- [ ] No new dependencies (GSAP already loaded)
- [ ] Inline SVGs only (no external files)
- [ ] Reuses existing `reveal` pattern and `applyLanguage()`
- [ ] Single file change (`v3/index.html`)
- [ ] CSS variables for colors (no hardcoded hex in SVG)
- [ ] Deletes placeholder section (removes dead code)

## Verification
1. Open `v3/index.html` in browser
2. Scroll to Process section - verify 4 steps render
3. Switch language (हिंदी/English) - verify translation
4. Scroll - verify GSAP stagger animation triggers
5. Mobile viewport - verify 1-col layout
6. Tablet viewport - verify 2-col layout
7. Desktop - verify 4-col layout
8. Check console for errors

## Rollback
If issues: revert `v3/index.html` to current state (git checkout).