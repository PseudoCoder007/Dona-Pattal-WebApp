# Landing Page v2 — Real Photography & Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `v2/index.html` — a photo-restyled copy of the existing landing page with real stock photography, torn-paper/tilted photo framing, a subtle grain texture, hand-sketched process icons, and a stamped/ticket-style button — without touching the live root `index.html` at all.

**Architecture:** Copy the current (already-fixed) root `index.html` into a new `v2/` folder, then make a sequence of additive/replacing CSS+markup+script edits inside `v2/index.html` only. Four real photos are downloaded once into `v2/assets/images/` in Task 1 and referenced by the later tasks.

**Tech Stack:** Same as v1 — plain HTML5/CSS3/vanilla JS, no build step. New: 4 JPEG images (real stock photography, Pexels License — free for commercial use, no attribution required).

**Spec:** [docs/superpowers/specs/2026-09-15-website-real-images-restyle-design.md](../specs/2026-09-15-website-real-images-restyle-design.md)

## Global Constraints

- Root `index.html` (project root, already live/pushed) must **not** be modified by any task in this plan. Every task operates on `v2/index.html` and `v2/assets/images/` only.
- No bilingual text, WhatsApp behavior, product data, or section structure changes — this is a visual-layer-only pass. The existing `applyLanguage`/`toggleLanguage`/`buildWhatsAppLink`/`refreshWhatsAppLinks`/`initScrollReveal` functions and the `PRODUCTS`/`PROCESS_STEPS`/`WHY_US` data arrays carry over unchanged.
- The 4 images (already verified live, HTTP 200, `image/jpeg`) and their intended use:
  - Hero: `https://images.pexels.com/photos/39025942/pexels-photo-39025942.jpeg?auto=compress&cs=tinysrgb&w=1200` — chef preparing Indian street food chaat.
  - About: `https://images.pexels.com/photos/34968012/pexels-photo-34968012.jpeg?auto=compress&cs=tinysrgb&w=1200` — street food vendor at a stall in Varanasi, India.
  - Product (dona type): `https://images.pexels.com/photos/8015711/pexels-photo-8015711.jpeg?auto=compress&cs=tinysrgb&w=800` — stack of plain kraft paper cups.
  - Product (plate type): `https://images.pexels.com/photos/9147812/pexels-photo-9147812.jpeg?auto=compress&cs=tinysrgb&w=800` — stack of red/white disposable paper plates.
- No automated test suite for this static page — verification is manual/browser-based, same as v1.

---

### Task 1: Create the v2 copy and download real images

**Files:**
- Create: `v2/index.html` (copy of root `index.html`)
- Create: `v2/assets/images/hero-food.jpg`, `v2/assets/images/about-varanasi.jpg`, `v2/assets/images/product-dona.jpg`, `v2/assets/images/product-plate.jpg`

**Interfaces:** none yet (this task only sets up files; no code changes).

- [ ] **Step 1: Create the v2 folder structure and copy the root file**

```bash
mkdir -p v2/assets/images
cp index.html v2/index.html
```

- [ ] **Step 2: Download the 4 verified images**

```bash
curl -sL "https://images.pexels.com/photos/39025942/pexels-photo-39025942.jpeg?auto=compress&cs=tinysrgb&w=1200" -o v2/assets/images/hero-food.jpg
curl -sL "https://images.pexels.com/photos/34968012/pexels-photo-34968012.jpeg?auto=compress&cs=tinysrgb&w=1200" -o v2/assets/images/about-varanasi.jpg
curl -sL "https://images.pexels.com/photos/8015711/pexels-photo-8015711.jpeg?auto=compress&cs=tinysrgb&w=800" -o v2/assets/images/product-dona.jpg
curl -sL "https://images.pexels.com/photos/9147812/pexels-photo-9147812.jpeg?auto=compress&cs=tinysrgb&w=800" -o v2/assets/images/product-plate.jpg
```

- [ ] **Step 3: Verify all 4 files downloaded as real JPEGs**

Run: `file v2/assets/images/*.jpg`
Expected: all 4 report `JPEG image data`, each file size > 10KB (not an HTML error page saved by mistake).

- [ ] **Step 4: Verify the v2 copy still renders identically to root before any edits**

Serve the project root (`python -m http.server 8199` using the existing `.claude/launch.json` "preview-server" config, or equivalent) and open `http://localhost:8199/v2/index.html`. Expected: page looks pixel-identical to `http://localhost:8199/index.html` (same SVG hero/about art, same icon-based product cards, same pill buttons) since `v2/index.html` is still an untouched copy at this point. No console errors.

- [ ] **Step 5: Commit**

```bash
git add v2/
git commit -m "Create v2 copy of landing page and download real stock photos"
```

---

### Task 2: Stamped/ticket-style button restyle

**Files:**
- Modify: `v2/index.html`

**Interfaces:**
- Consumes: existing `.btn`, `.btn--primary`, `.btn--ghost` classes (already applied throughout the markup — this task only changes their CSS, not any markup).
- Produces: no new JS/functions — CSS-only change.

- [ ] **Step 1: Replace the pill-shaped button CSS with a stamped/ticket style**

Find this block in `v2/index.html`:

```css
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 26px;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    font-size: 1rem;
  }
  .btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-soft); }
```

Replace it with:

```css
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 26px;
    border-radius: 6px;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    font-size: 1rem;
    position: relative;
  }
  .btn::before {
    content: "";
    position: absolute;
    inset: -4px;
    border: 2px dashed currentColor;
    border-radius: 8px;
    opacity: 0.5;
    transform: rotate(-1.5deg);
    pointer-events: none;
  }
  .btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-soft); }
```

- [ ] **Step 2: Verify in browser**

Reload `http://localhost:8199/v2/index.html`. Expected: every button (hero CTAs, "See Our Products", per-product "Ask for this size", "Chat on WhatsApp", "Or Call Directly") now has a squared-off corner (not a full pill) with a slightly rotated dashed outline sitting just outside its border, giving a hand-stamped/ticket look. No layout breakage (buttons still align/wrap correctly), no console errors.

- [ ] **Step 3: Commit**

```bash
git add v2/index.html
git commit -m "Restyle buttons from pill shape to stamped/ticket style"
```

---

### Task 3: Subtle grain texture overlay

**Files:**
- Modify: `v2/index.html`

**Interfaces:** CSS-only change; no new JS.

- [ ] **Step 1: Add a `--grain` CSS variable and apply it as a background image**

In the `:root` block, add the new variable (after `--max-width: 1120px;`):

```css
    --max-width: 1120px;
    --grain: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='linear' slope='0.06'/></feComponentTransfer></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
```

(The `feComponentTransfer`/`feFuncA slope='0.06'` bakes a ~6% opacity directly into the noise texture, so it can be used as a plain `background-image` without any extra pseudo-element or opacity layering.)

Then find:

```css
  body {
    margin: 0;
    font-family: var(--font-body);
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.55;
  }
```

Replace with:

```css
  body {
    margin: 0;
    font-family: var(--font-body);
    background-color: var(--color-bg);
    background-image: var(--grain);
    color: var(--color-text);
    line-height: 1.55;
  }
```

- [ ] **Step 2: Apply the same grain to the two sections with their own opaque background color**

Find:

```css
  /* Process */
  .process { background: var(--color-bg-soft); }
```

Replace with:

```css
  /* Process */
  .process { background-color: var(--color-bg-soft); background-image: var(--grain); }
```

Find:

```css
  /* Contact */
  .contact { background: var(--color-maroon); color: #fff; }
```

Replace with:

```css
  /* Contact */
  .contact { background-color: var(--color-maroon); background-image: var(--grain); color: #fff; }
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: a faint, barely-there paper-grain texture is visible across the whole page (cream sections, the soft-peach process section, and the maroon contact section) when you look closely, but it must **not** be distracting or muddy the text contrast — zoom in via the `zoom` tool on a text-heavy area (e.g. the About paragraph) to confirm text stays crisp and readable. No console errors.

- [ ] **Step 4: Commit**

```bash
git add v2/index.html
git commit -m "Add subtle grain texture overlay across all sections"
```

---

### Task 4: Real photos for hero and about, with torn-paper/tilt framing

**Files:**
- Modify: `v2/index.html`

**Interfaces:**
- Consumes: `v2/assets/images/hero-food.jpg`, `v2/assets/images/about-varanasi.jpg` (from Task 1).
- Removes: `renderHeroArt(targetId, size)` function and its two call sites (no longer needed — replaced by static `<img>` markup). Nothing later in this plan calls `renderHeroArt`.
- Produces: `.torn-photo`, `.tilt-left`, `.tilt-right` CSS classes (used only in this task).

- [ ] **Step 1: Add the torn-paper/tilt CSS**

Find this block:

```css
  /* Divider */
  .divider--wave {
```

Insert immediately before it:

```css
  /* Real-photo framing */
  .torn-photo {
    display: block;
    width: 100%;
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 95% 96%, 90% 91%, 85% 97%, 80% 92%, 75% 98%, 70% 93%, 65% 97%, 60% 91%, 55% 96%, 50% 92%, 45% 97%, 40% 93%, 35% 98%, 30% 92%, 25% 96%, 20% 91%, 15% 97%, 10% 93%, 5% 98%, 0% 92%);
    box-shadow: 0 20px 40px rgba(58,35,24,0.25);
  }
  .tilt-left { transform: rotate(-3deg); }
  .tilt-right { transform: rotate(2deg); }

  /* Divider */
  .divider--wave {
```

- [ ] **Step 2: Give the hero and about photo wrappers a fixed size**

Find:

```css
  .hero__art { opacity: 0; transform: translateY(16px) scale(0.96); animation: hero-in 0.9s ease 0.15s forwards; }
```

Replace with:

```css
  .hero__art { opacity: 0; transform: translateY(16px) scale(0.96); animation: hero-in 0.9s ease 0.15s forwards; max-width: 420px; }
  .hero__art .torn-photo { height: 320px; }
```

Find:

```css
  .about__art { justify-self: center; }
```

Replace with:

```css
  .about__art { justify-self: center; max-width: 280px; }
  .about__art .torn-photo { height: 360px; }
```

- [ ] **Step 3: Replace the hero/about markup**

Find:

```html
      <div class="hero__art" id="hero-art"></div>
```

Replace with:

```html
      <div class="hero__art"><img class="torn-photo tilt-left" src="assets/images/hero-food.jpg" alt="Chef preparing Indian street food chaat with fresh toppings and spices" loading="lazy"></div>
```

Find:

```html
      <div class="about__art reveal" id="about-art"></div>
```

Replace with:

```html
      <div class="about__art reveal"><img class="torn-photo tilt-right" src="assets/images/about-varanasi.jpg" alt="Street food vendor at a traditional stall in Varanasi, India" loading="lazy"></div>
```

- [ ] **Step 4: Remove the now-unused `renderHeroArt` function and its calls**

Find and delete this entire function:

```js
  function renderHeroArt(targetId, size) {
    var el = document.getElementById(targetId);
    if (!el) { return; }
    el.innerHTML = '<svg viewBox="0 0 220 220" width="' + size + '" height="' + size + '" xmlns="http://www.w3.org/2000/svg">' +
      '<ellipse cx="110" cy="190" rx="90" ry="14" fill="#F4A63A" opacity="0.35"/>' +
      '<ellipse cx="110" cy="150" rx="80" ry="16" fill="#FDECD8" stroke="#8C3A20" stroke-width="3"/>' +
      '<ellipse cx="110" cy="120" rx="70" ry="15" fill="#FFF8F0" stroke="#C1502E" stroke-width="3"/>' +
      '<ellipse cx="110" cy="92" rx="60" ry="14" fill="#FDECD8" stroke="#8C3A20" stroke-width="3"/>' +
      '<g transform="translate(140,40)">' +
      '<circle cx="0" cy="0" r="10" fill="#F4A63A"/><circle cx="16" cy="6" r="10" fill="#F4A63A"/>' +
      '<circle cx="-16" cy="6" r="10" fill="#F4A63A"/><circle cx="0" cy="16" r="10" fill="#C1502E"/>' +
      '</g></svg>';
  }

```

Then find:

```js
  document.addEventListener('DOMContentLoaded', function () {
    renderHeroArt('hero-art', 220);
    renderHeroArt('about-art', 160);
    renderProcessSteps();
```

Replace with:

```js
  document.addEventListener('DOMContentLoaded', function () {
    renderProcessSteps();
```

- [ ] **Step 5: Verify in browser**

Reload. Expected: the hero shows the real chaat-preparation photo, tilted slightly left with a jagged torn-paper bottom edge and a soft drop shadow; the about section shows the real Varanasi street-vendor photo, tilted slightly right with the same torn-edge treatment. Both still fade/slide in on load (hero) or on scroll (about) — the entrance animation still works because it's on the wrapper div, not the tilted image. No console errors (confirms no leftover reference to the deleted `renderHeroArt` or to `hero-art`/`about-art` ids elsewhere in the script).

- [ ] **Step 6: Commit**

```bash
git add v2/index.html
git commit -m "Replace hero/about SVG art with real torn-paper-framed photos"
```

---

### Task 5: Photo-forward product cards

**Files:**
- Modify: `v2/index.html`

**Interfaces:**
- Consumes: `v2/assets/images/product-dona.jpg`, `v2/assets/images/product-plate.jpg` (from Task 1), the existing `PRODUCTS` array's `type` field (unchanged).
- Removes: `DONA_ICON_SVG`, `PLATE_ICON_SVG` string constants (no longer used anywhere after this task).
- Produces: `.product-card__photo`, `.product-card__body` CSS classes.

- [ ] **Step 1: Restructure the product-card CSS to be photo-forward**

Find:

```css
  .product-card {
    background: var(--color-card);
    border-radius: var(--radius);
    padding: 24px;
    box-shadow: var(--shadow-soft);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .product-card:hover {
    transform: translateY(-6px) rotate(-0.5deg);
    box-shadow: 0 16px 32px rgba(107,30,35,0.18);
  }
  .product-card__icon { width: 56px; height: 56px; margin-bottom: 8px; }
```

Replace with:

```css
  .product-card {
    background: var(--color-card);
    border-radius: var(--radius);
    padding: 0;
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
  }
  .product-card:hover {
    transform: translateY(-6px) rotate(-0.5deg);
    box-shadow: 0 16px 32px rgba(107,30,35,0.18);
  }
  .product-card__photo { width: 100%; height: 170px; object-fit: cover; display: block; }
  .product-card__body { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 6px; }
  .product-card__icon { width: 56px; height: 56px; margin-bottom: 8px; }
```

(`.product-card__icon` is kept — it's still used by the process steps in Task 6, just no longer by product cards.)

- [ ] **Step 2: Replace the product-icon constants and rendering with photos**

Find and delete these two constants:

```js
  var DONA_ICON_SVG = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M8 28c0 14 10.7 24 24 24s24-10 24-24" stroke="#C1502E" stroke-width="4" stroke-linecap="round"/>' +
    '<ellipse cx="32" cy="28" rx="26" ry="7" fill="#F4A63A" stroke="#8C3A20" stroke-width="2"/>' +
    '</svg>';

  var PLATE_ICON_SVG = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<ellipse cx="32" cy="34" rx="27" ry="11" fill="#FDECD8" stroke="#8C3A20" stroke-width="2"/>' +
    '<ellipse cx="32" cy="30" rx="27" ry="11" fill="#F4A63A" stroke="#C1502E" stroke-width="3"/>' +
    '<ellipse cx="32" cy="30" rx="13" ry="5" fill="#FFF8F0" stroke="#C1502E" stroke-width="1.5"/>' +
    '</svg>';

```

Find the `renderProducts` function:

```js
  function renderProducts() {
    var grid = document.getElementById('products-grid');
    PRODUCTS.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'product-card reveal';

      var icon = document.createElement('div');
      icon.className = 'product-card__icon';
      icon.innerHTML = p.type === 'plate' ? PLATE_ICON_SVG : DONA_ICON_SVG;

      var name = document.createElement('h3');
      name.className = 'product-card__name';
      name.setAttribute('data-en', p.nameEn);
      name.setAttribute('data-hi', p.nameHi);

      var use = document.createElement('p');
      use.className = 'product-card__use';
      use.setAttribute('data-en', p.useEn);
      use.setAttribute('data-hi', p.useHi);

      var spec = document.createElement('p');
      spec.className = 'product-card__spec';
      spec.textContent = p.gsm + ' · ' + p.pack;

      var link = document.createElement('a');
      link.className = 'product-card__link whatsapp-link';
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('data-en', 'Ask for this size →');
      link.setAttribute('data-hi', 'इस साइज़ के लिए पूछें →');
      link.setAttribute('data-msg-en', 'Hi, I am interested in bulk pricing for the ' + p.nameEn + '. Could you share details?');
      link.setAttribute('data-msg-hi', 'नमस्ते, मुझे ' + p.nameHi + ' के थोक मूल्य में रुचि है। कृपया जानकारी साझा करें।');

      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(use);
      card.appendChild(spec);
      card.appendChild(link);
      grid.appendChild(card);
    });
  }
```

Replace with:

```js
  function renderProducts() {
    var grid = document.getElementById('products-grid');
    PRODUCTS.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'product-card reveal';

      var photo = document.createElement('img');
      photo.className = 'product-card__photo';
      photo.loading = 'lazy';
      photo.src = p.type === 'plate' ? 'assets/images/product-plate.jpg' : 'assets/images/product-dona.jpg';
      photo.alt = p.type === 'plate' ? 'Stack of red and white disposable paper plates' : 'Stack of plain kraft paper cups';

      var body = document.createElement('div');
      body.className = 'product-card__body';

      var name = document.createElement('h3');
      name.className = 'product-card__name';
      name.setAttribute('data-en', p.nameEn);
      name.setAttribute('data-hi', p.nameHi);

      var use = document.createElement('p');
      use.className = 'product-card__use';
      use.setAttribute('data-en', p.useEn);
      use.setAttribute('data-hi', p.useHi);

      var spec = document.createElement('p');
      spec.className = 'product-card__spec';
      spec.textContent = p.gsm + ' · ' + p.pack;

      var link = document.createElement('a');
      link.className = 'product-card__link whatsapp-link';
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('data-en', 'Ask for this size →');
      link.setAttribute('data-hi', 'इस साइज़ के लिए पूछें →');
      link.setAttribute('data-msg-en', 'Hi, I am interested in bulk pricing for the ' + p.nameEn + '. Could you share details?');
      link.setAttribute('data-msg-hi', 'नमस्ते, मुझे ' + p.nameHi + ' के थोक मूल्य में रुचि है। कृपया जानकारी साझा करें।');

      body.appendChild(name);
      body.appendChild(use);
      body.appendChild(spec);
      body.appendChild(link);
      card.appendChild(photo);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: all 6 product cards now show a real photo across the top (4"/6" dona-type cards show the kraft-paper-cups photo, 7"/8"/10"/12" plate-type cards show the red/white-plates photo), with name/use-case/spec/link stacked below in the card body. Hover still lifts/tilts the card. Run in devtools:
```js
Array.from(document.querySelectorAll('#products-grid .product-card__photo')).map(img => img.src.split('/').pop())
```
Expected: `["product-dona.jpg","product-dona.jpg","product-plate.jpg","product-plate.jpg","product-plate.jpg","product-plate.jpg"]`. No console errors (confirms no leftover reference to `DONA_ICON_SVG`/`PLATE_ICON_SVG`).

- [ ] **Step 4: Commit**

```bash
git add v2/index.html
git commit -m "Restructure product cards to be photo-forward with real images"
```

---

### Task 6: Hand-sketched process-step icons

**Files:**
- Modify: `v2/index.html`

**Interfaces:** CSS + one small markup addition; no changes to `renderProcessSteps` or `PROCESS_ICON_SVG` themselves.

- [ ] **Step 1: Add a hidden SVG filter definition right after `<body>`**

Find:

```html
<body>

<header class="site-header">
```

Replace with:

```html
<body>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="sketchy-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" seed="7" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
  </filter>
</svg>

<header class="site-header">
```

- [ ] **Step 2: Apply the filter to process-step icons only**

Find:

```css
  .product-card__icon { width: 56px; height: 56px; margin-bottom: 8px; }
```

Replace with:

```css
  .product-card__icon { width: 56px; height: 56px; margin-bottom: 8px; }
  .process__step .product-card__icon svg { filter: url(#sketchy-filter); }
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: the 4 process-step icons (Paper Sourced / Pressed & Moulded / Quality Checked / Packed for Delivery) now look slightly wobbly/hand-drawn instead of perfectly clean geometric strokes, while still being clearly recognizable as their respective icon (box, clock/circle, checkmark, package). The product-card photos (Task 5) and any other SVG on the page are unaffected, since the filter selector is scoped to `.process__step .product-card__icon svg` specifically. No console errors.

- [ ] **Step 4: Commit**

```bash
git add v2/index.html
git commit -m "Apply hand-sketched filter to process-step icons"
```

---

### Task 7: Full cross-check pass

**Files:**
- Modify: `v2/index.html` (only if a real issue is found)

**Interfaces:** none (verification-only task).

- [ ] **Step 1: Confirm the root file was never touched**

```bash
git status --porcelain index.html
git log -1 --format=%s -- index.html
```

Expected: the first command prints nothing (no uncommitted changes to root `index.html`), and the second still prints `Update contact info: new phone number and owner name (Alok Dwivedi)` — i.e. no task in this plan added a newer commit touching root `index.html`.

- [ ] **Step 2: Desktop visual pass**

Open `http://localhost:8199/v2/index.html` at ≥1200px width. Confirm top to bottom: stamped-style buttons throughout, faint grain visible but text still crisp, tilted torn-paper hero/about photos, photo-forward product cards (correct photo per type), hand-sketched process icons, why-us/contact/footer unchanged from v1.

- [ ] **Step 3: Mobile visual pass**

Resize to ~390px width and reload. Confirm: single-column stacking, mobile nav hamburger opens/closes, no horizontal scroll (`document.documentElement.scrollWidth <= window.innerWidth + 1` in devtools), photos and cards scale down cleanly without overflow.

- [ ] **Step 4: Bilingual + WhatsApp regression check**

In devtools console:
```js
document.getElementById('lang-toggle').click();
var enCount = document.querySelectorAll('[data-en]').length;
var hiCount = document.querySelectorAll('[data-hi]').length;
var links = Array.from(document.querySelectorAll('.whatsapp-link'));
JSON.stringify({
  attrParity: enCount === hiCount,
  allWhatsAppValid: links.every(a => a.href.indexOf('https://wa.me/918787201971?text=') === 0),
  telHref: document.getElementById('tel-link').getAttribute('href')
})
```
Expected: `attrParity: true`, `allWhatsAppValid: true`, `telHref: "tel:+918787201971"` (confirms the phone-number fix already on root carried over correctly into v2, and nothing in this visual pass broke the bilingual/WhatsApp engine). Click the toggle again to leave it back on English.

- [ ] **Step 5: Console/error check**

Confirm devtools console shows zero errors or warnings through all of the above.

- [ ] **Step 6: Final commit**

```bash
git add -A
git status
git commit -m "Final cross-check pass for v2 landing page" --allow-empty
```

(Use `--allow-empty` only if Steps 1-5 found nothing to fix; otherwise drop it and describe the fix.)
