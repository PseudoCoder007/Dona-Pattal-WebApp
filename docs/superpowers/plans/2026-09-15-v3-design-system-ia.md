# V3 Phase 1 — Design System & Information Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `v3/index.html` — a fresh, editorial-styled landing page scaffold using new design tokens (Fraunces + IBM Plex Sans/Devanagari typography, paper/brick/brass/oxblood palette, hairline borders, 12-col asymmetric grid), the new 8-section information architecture, and a GSAP + ScrollTrigger scroll-reveal system — while carrying forward the working bilingual EN/HI engine, WhatsApp-link engine, and product catalog from v2, without touching root `index.html` or `v2/index.html`.

**Architecture:** One new self-contained file, `v3/index.html`, referencing v2's already-downloaded product/hero images via a relative `../v2/assets/images/` path (no re-download). Same "vanilla JS, no build step" approach as v1/v2, with GSAP + ScrollTrigger added via CDN as the site's first external JS dependency.

**Tech Stack:** HTML5, CSS3 (custom properties, CSS Grid, `clamp()`), vanilla JS (ES5-compatible). Google Fonts: Fraunces, IBM Plex Sans, IBM Plex Sans Devanagari. GSAP 3.12.5 + ScrollTrigger 3.12.5 via cdnjs (both URLs verified returning HTTP 200 during planning).

**Spec:** [docs/superpowers/specs/2026-09-15-v3-design-system-ia-design.md](../specs/2026-09-15-v3-design-system-ia-design.md)

## Global Constraints

- Neither root `index.html` nor `v2/index.html` may be modified by any task in this plan. All work happens in a new `v3/index.html`.
- Design tokens (exact values): `--paper:#F4EFE6; --ink:#2B2521; --ink-soft:#6B5D52; --brick:#B24A2E; --brass:#A87C3F; --oxblood:#4A1F1C; --stone:#C9C0B4; --card:#FFFFFF;`
- Typography: display headings use `'Fraunces', Georgia, serif`; body uses `'IBM Plex Sans', system-ui, sans-serif`; when `html[lang="hi"]`, headings fall back to `'IBM Plex Sans Devanagari', 'IBM Plex Sans', system-ui, sans-serif` at a reduced size (Fraunces has no Devanagari glyphs — this is an intentional, documented trade-off, not a bug to fix).
- No rounded-pill buttons, no soft box-shadow cards, no wave dividers, no torn-paper photo framing (those were v1/v2's motifs) — hairline 1px borders (`--stone`), small/no border-radius (4px), asymmetric CSS Grid layouts.
- Bilingual engine (`data-en`/`data-hi` attributes, `applyLanguage`/`toggleLanguage`/`getStoredLang`/`setStoredLang`) and WhatsApp engine (`buildWhatsAppLink`/`refreshWhatsAppLinks`, number `918787201971`) are ported with identical logic and the **same** `localStorage` key (`sahlok_lang`) as v1/v2, so a visitor's language choice is consistent across all three versions (they share an origin).
- Product images referenced as `../v2/assets/images/hero-food.jpg`, `../v2/assets/images/product-dona.jpg`, `../v2/assets/images/product-plate.jpg` — not re-downloaded.
- Sections 3 (Who We Supply), 4 (Material & Making Story), 5 (Mirzapur Connection) get a real heading + one real sentence of body copy each (not literal "TBD"/lorem-ipsum) — full narrative treatment is out of scope for this phase (Phase 3).
- No automated test suite — verification is manual/browser-based, same as v1/v2.

---

### Task 1: Scaffold, design tokens, bilingual/WhatsApp engine, GSAP reveal system, header, hero

**Files:**
- Create: `v3/index.html`

**Interfaces:**
- Produces (globals later tasks depend on): `window.currentLang`, `applyLanguage(lang)`, `toggleLanguage()`, `getStoredLang()`, `buildWhatsAppLink(message)`, `refreshWhatsAppLinks()`, `initScrollReveal()`. Later tasks append their markup with `data-en`/`data-hi`/`.whatsapp-link`/`.reveal` elements **before** the existing `DOMContentLoaded` handler's final `applyLanguage(getStoredLang()); initScrollReveal();` calls run — since those two calls are always the last two lines added to the handler, later tasks insert their own render/wiring calls **above** that pair, never below.
- Produces (empty container later tasks render into): `#products-grid` (empty in this task; the Product Range section heading exists, the grid itself is populated by Task 2).

- [ ] **Step 1: Create `v3/index.html`** with the full document below.

```html
<!DOCTYPE html>
<html lang="en" id="html-root">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sahlok Eco Products LLP — Paper Foodware, Mirzapur</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<style>
  :root {
    --paper: #F4EFE6;
    --ink: #2B2521;
    --ink-soft: #6B5D52;
    --brick: #B24A2E;
    --brass: #A87C3F;
    --oxblood: #4A1F1C;
    --stone: #C9C0B4;
    --card: #FFFFFF;
    --font-display: 'Fraunces', Georgia, serif;
    --font-body: 'IBM Plex Sans', system-ui, sans-serif;
    --font-body-hi: 'IBM Plex Sans Devanagari', 'IBM Plex Sans', system-ui, sans-serif;
    --section-pad: clamp(64px, 8vw, 140px);
    --max-width: 1200px;
    --radius: 4px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: var(--font-body);
    background: var(--paper);
    color: var(--ink);
    line-height: 1.6;
  }
  h1, h2, h3, .brand-name { font-family: var(--font-display); color: var(--ink); margin: 0 0 0.5em; font-weight: 600; }
  .display { font-size: clamp(2.5rem, 6vw, 5.5rem); line-height: 1.05; }
  .heading { font-size: clamp(1.75rem, 3.5vw, 2.75rem); line-height: 1.1; }
  p { margin: 0 0 1em; color: var(--ink-soft); }
  a { color: inherit; }
  .container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
  .section { padding: var(--section-pad) 0; position: relative; }
  .section__eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.78rem;
    color: var(--brass);
    font-weight: 600;
    margin-bottom: 12px;
  }

  /* Hindi typography: Fraunces has no Devanagari glyphs, so headings fall
     back to the body face at a reduced size when lang=hi. */
  html[lang="hi"] .display { font-family: var(--font-body-hi); font-size: clamp(2rem, 4.5vw, 4rem); }
  html[lang="hi"] .heading { font-family: var(--font-body-hi); font-size: clamp(1.5rem, 3vw, 2.2rem); }
  html[lang="hi"] .brand-name { font-family: var(--font-body-hi); }
  html[lang="hi"] .product-card__name { font-family: var(--font-body-hi); }

  .grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
  .span-7 { grid-column: span 7; }
  .span-5 { grid-column: span 5; }
  @media (max-width: 860px) {
    .grid-12 { grid-template-columns: 1fr; }
    .span-7, .span-5 { grid-column: 1; }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-radius: var(--radius);
    font-weight: 600;
    text-decoration: none;
    border: 1px solid var(--ink);
    transition: background-color 0.2s ease, color 0.2s ease;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--font-body);
  }
  .btn--primary { background: var(--brick); color: var(--paper); border-color: var(--brick); }
  .btn--primary:hover { background: var(--oxblood); border-color: var(--oxblood); }
  .btn--ghost { background: transparent; color: var(--ink); border-color: var(--ink); }
  .btn--ghost:hover { background: var(--ink); color: var(--paper); }

  /* Header */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(244, 239, 230, 0.94);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid var(--stone);
  }
  .site-header__inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .brand-name { font-size: 1.4rem; margin: 0; }
  .brand-name span { color: var(--brick); }
  .nav-links { display: flex; gap: 22px; align-items: center; }
  .nav-links a { text-decoration: none; font-weight: 500; color: var(--ink); font-size: 0.92rem; }
  .nav-links a:hover { color: var(--brick); }
  .lang-toggle {
    border: 1px solid var(--brass);
    background: transparent;
    color: var(--ink);
    border-radius: var(--radius);
    padding: 6px 12px;
    font-weight: 600;
    font-size: 0.82rem;
    cursor: pointer;
  }
  .header-cta { display: none; }
  @media (min-width: 720px) { .header-cta { display: inline-flex; } }
  .nav-toggle { display: none; background: none; border: none; font-size: 1.5rem; color: var(--ink); cursor: pointer; }
  @media (max-width: 720px) {
    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--paper);
      flex-direction: column;
      align-items: flex-start;
      padding: 16px 24px 24px;
      border-bottom: 1px solid var(--stone);
      gap: 14px;
    }
    .nav-links.is-open { display: flex; }
    .nav-toggle { display: inline-flex; }
  }

  /* Hero */
  .hero { padding-top: 48px; }
  .hero__sub { font-size: 1.1rem; max-width: 46ch; }
  .hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
  .hero__photo { width: 100%; height: clamp(320px, 40vw, 520px); object-fit: cover; border: 1px solid var(--stone); display: block; }

  /* Footer */
  .site-footer { background: var(--oxblood); color: rgba(244,239,230,0.8); padding: 40px 0; font-size: 0.9rem; }
  .site-footer__inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }
</style>
</head>
<body>

<header class="site-header">
  <div class="site-header__inner">
    <p class="brand-name">Sahlok <span>Eco</span> Products</p>
    <nav class="nav-links">
      <a href="#product-range" data-en="Products" data-hi="उत्पाद">Products</a>
      <a href="#who-we-supply" data-en="Who We Supply" data-hi="हम किसे आपूर्ति करते हैं">Who We Supply</a>
      <a href="#making-story" data-en="Making Story" data-hi="निर्माण कहानी">Making Story</a>
      <a href="#mirzapur" data-en="Mirzapur" data-hi="मिर्ज़ापुर">Mirzapur</a>
      <a href="#wholesale" data-en="Wholesale" data-hi="थोक">Wholesale</a>
      <a href="#contact" data-en="Contact" data-hi="संपर्क करें">Contact</a>
      <button class="lang-toggle" id="lang-toggle" type="button">हिंदी</button>
    </nav>
    <a href="#wholesale" class="btn btn--primary header-cta" data-en="Get Bulk Pricing" data-hi="थोक मूल्य जानें"></a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Menu">☰</button>
  </div>
</header>

<main>

  <section class="section hero" id="hero">
    <div class="container grid-12">
      <div class="span-7 reveal">
        <p class="section__eyebrow" data-en="Mirzapur, Uttar Pradesh — Pre-Launch" data-hi="मिर्ज़ापुर, उत्तर प्रदेश — लॉन्च-पूर्व"></p>
        <h1 class="display" data-en="Paper Foodware, Made For Everyday India" data-hi="रोज़मर्रा के भारत के लिए बना पेपर फूडवेयर"></h1>
        <p class="hero__sub" data-en="Bulk-ready paper donas and plates for hotels, restaurants, sweet shops, caterers and banquet halls in Mirzapur." data-hi="मिर्ज़ापुर में होटल, रेस्टोरेंट, मिठाई की दुकानों, कैटरर्स और बैंक्वेट हॉल के लिए थोक में तैयार पेपर दोना और पत्तल।"></p>
        <div class="hero__actions">
          <a class="btn btn--primary whatsapp-link" target="_blank" rel="noopener"
             data-en="Get Bulk Pricing on WhatsApp" data-hi="व्हाट्सएप पर थोक मूल्य जानें"
             data-msg-en="Hi, I'm interested in bulk wholesale pricing for paper dona/pattal. Could you share details?"
             data-msg-hi="नमस्ते, मुझे पेपर दोना/पत्तल के थोक मूल्य में रुचि है। कृपया जानकारी साझा करें।"></a>
        </div>
      </div>
      <div class="span-5 reveal">
        <img class="hero__photo" src="../v2/assets/images/hero-food.jpg" alt="Chef preparing Indian street food chaat with fresh toppings and spices" loading="lazy">
      </div>
    </div>
  </section>

  <section class="section product-range" id="product-range">
    <div class="container">
      <div class="reveal">
        <p class="section__eyebrow" data-en="Product Range" data-hi="उत्पाद श्रृंखला"></p>
        <h2 class="heading" data-en="Six Sizes, One Reliable Supply" data-hi="छह आकार, एक भरोसेमंद आपूर्ति"></h2>
      </div>
      <div class="product-grid" id="products-grid"></div>
    </div>
  </section>

</main>

<footer class="site-footer">
  <div class="container site-footer__inner">
    <div>
      <p class="brand-name" style="color:var(--paper); font-size:1.1rem;">Sahlok Eco Products LLP</p>
      <p data-en="Mirzapur, Uttar Pradesh · Eco-friendly paper packaging" data-hi="मिर्ज़ापुर, उत्तर प्रदेश · इको-फ्रेंडली पेपर पैकेजिंग"></p>
    </div>
    <div>
      <p>+91 87872 01971</p>
    </div>
  </div>
</footer>

<script>
(function () {
  var STORAGE_KEY = 'sahlok_lang';
  var WHATSAPP_NUMBER = '918787201971';
  window.currentLang = 'en';

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { return 'en'; }
  }
  function setStoredLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode etc: ignore */ }
  }
  function buildWhatsAppLink(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }
  function refreshWhatsAppLinks() {
    document.querySelectorAll('.whatsapp-link').forEach(function (el) {
      var msg = window.currentLang === 'hi' ? el.getAttribute('data-msg-hi') : el.getAttribute('data-msg-en');
      if (msg) { el.href = buildWhatsAppLink(msg); }
    });
  }
  function applyLanguage(lang) {
    window.currentLang = lang;
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = lang === 'hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
      if (text !== null) { el.textContent = text; }
    });
    document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi' : 'en');
    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) { toggleBtn.textContent = lang === 'hi' ? 'English' : 'हिंदी'; }
    refreshWhatsAppLinks();
  }
  function toggleLanguage() {
    var next = window.currentLang === 'hi' ? 'en' : 'hi';
    setStoredLang(next);
    applyLanguage(next);
  }

  function initScrollReveal() {
    var items = document.querySelectorAll('.reveal');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      items.forEach(function (el) { el.style.opacity = 1; });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    items.forEach(function (el) {
      gsap.set(el, { opacity: 0, y: reduceMotion ? 0 : 24 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: reduceMotion ? 0.01 : 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) { toggleBtn.addEventListener('click', toggleLanguage); }

    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('is-open');
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { navLinks.classList.remove('is-open'); });
      });
    }

    applyLanguage(getStoredLang());
    initScrollReveal();
  });
})();
</script>
</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Serve the project root (`python -m http.server 8199`, matching `.claude/launch.json`'s "preview-server" config) and open `http://localhost:8199/v3/index.html`.

Expected:
- Header, hero (headline in Fraunces, real photo with a thin hairline border, WhatsApp CTA) and footer render with the new palette — warm paper background, brick-red button, no rounded pill shapes, no soft shadows.
- The Product Range section shows its heading but an empty grid (expected — populated in Task 2).
- Open devtools console and confirm zero errors, then run:
  ```js
  typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined'
  ```
  Expected: `true`.
- Click the "हिंदी" toggle: hero heading switches to Hindi text in the IBM Plex Sans Devanagari fallback face (inspect via `getComputedStyle(document.querySelector('h1')).fontFamily`), and the WhatsApp button's `href` rebuilds with the Hindi message. Click it again to switch back.
- At a narrow viewport (<720px), the nav collapses to a "☰" button that opens/closes a dropdown.

- [ ] **Step 3: Commit**

```bash
git add v3/index.html
git commit -m "Scaffold v3 with new design system, bilingual/WhatsApp engine, GSAP reveal, header and hero"
```

---

### Task 2: Product Range section

**Files:**
- Modify: `v3/index.html`

**Interfaces:**
- Consumes: `#products-grid` (from Task 1), `applyLanguage`/`refreshWhatsAppLinks` (called by the existing `DOMContentLoaded` handler after this task's render call runs).
- Produces: `renderProducts()` — appends 6 `.product-card.reveal` cards into `#products-grid`.

- [ ] **Step 1: Add product-card CSS** — insert directly after the `.hero__photo { ... }` rule:

```css
  /* Product range */
  .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-top: 40px; }
  .product-card { border: 1px solid var(--stone); display: flex; flex-direction: column; background: var(--card); }
  .product-card__photo { width: 100%; height: 170px; object-fit: cover; display: block; }
  .product-card__body { padding: 20px; display: flex; flex-direction: column; gap: 6px; }
  .product-card__name { font-size: 1.15rem; margin: 0; }
  .product-card__use { font-size: 0.9rem; margin: 0; }
  .product-card__spec { font-size: 0.85rem; color: var(--brick); font-weight: 600; margin: 0 0 8px; }
  .product-card__link {
    margin-top: auto;
    text-decoration: none;
    font-weight: 600;
    color: var(--ink);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-top: 1px solid var(--stone);
    padding-top: 10px;
  }
  .product-card__link:hover { color: var(--brick); }
```

- [ ] **Step 2: Add the `PRODUCTS` data array and `renderProducts()` function** — insert directly above the existing `function getStoredLang() {` line:

```js
  var PRODUCTS = [
    { id: 'dona-4', type: 'dona', nameEn: '4" Mini Paper Dona', nameHi: '4" मिनी पेपर दोना', useEn: 'Sweets & dry snacks', useHi: 'मिठाई और सूखे नाश्ते', gsm: '80–100 GSM', pack: '100 pcs/pack' },
    { id: 'dona-6', type: 'dona', nameEn: '6" Paper Dona', nameHi: '6" पेपर दोना', useEn: 'Chaat & curry bowls', useHi: 'चाट और करी बाउल', gsm: '80–110 GSM', pack: '100 pcs/pack' },
    { id: 'plate-7', type: 'plate', nameEn: '7" Paper Plate', nameHi: '7" पेपर प्लेट', useEn: 'Snacks & light meals', useHi: 'नाश्ता और हल्का भोजन', gsm: '100–130 GSM', pack: '100 pcs/pack' },
    { id: 'plate-8', type: 'plate', nameEn: '8" Paper Plate', nameHi: '8" पेपर प्लेट', useEn: 'Full meals', useHi: 'पूरा भोजन', gsm: '120–150 GSM', pack: '100 pcs/pack' },
    { id: 'plate-10', type: 'plate', nameEn: '10" Paper Plate', nameHi: '10" पेपर प्लेट', useEn: 'Buffets & parties', useHi: 'बुफे और पार्टियां', gsm: '150–180 GSM', pack: '100 pcs/pack' },
    { id: 'plate-12', type: 'plate', nameEn: '12" Paper Plate', nameHi: '12" पेपर प्लेट', useEn: 'Banquets & bulk catering', useHi: 'बैंक्वेट और थोक कैटरिंग', gsm: '180–220 GSM', pack: '50 pcs/pack' }
  ];

  // Elements are built with DOM APIs (not innerHTML string concatenation)
  // because product names contain literal double-quote characters (e.g. 4").
  function renderProducts() {
    var grid = document.getElementById('products-grid');
    PRODUCTS.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'product-card reveal';

      var photo = document.createElement('img');
      photo.className = 'product-card__photo';
      photo.loading = 'lazy';
      photo.src = p.type === 'plate' ? '../v2/assets/images/product-plate.jpg' : '../v2/assets/images/product-dona.jpg';
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

- [ ] **Step 3: Call it from `DOMContentLoaded`** — change:

```js
  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('lang-toggle');
```

to:

```js
  document.addEventListener('DOMContentLoaded', function () {
    renderProducts();

    var toggleBtn = document.getElementById('lang-toggle');
```

- [ ] **Step 4: Verify in browser**

Reload. Expected: 6 product cards render (2 with the kraft-paper-cup photo, 4 with the red/white-plate photo), each with a hairline border (no shadow), name/use/spec/link stacked below the photo. In devtools:
```js
Array.from(document.querySelectorAll('#products-grid .whatsapp-link')).every(a => a.href.indexOf('https://wa.me/918787201971?text=') === 0)
```
Expected: `true`. No console errors.

- [ ] **Step 5: Commit**

```bash
git add v3/index.html
git commit -m "Add Product Range section with photo-forward catalog"
```

---

### Task 3: New narrative section shells (Who We Supply, Material & Making Story, Mirzapur Connection, Wholesale)

**Files:**
- Modify: `v3/index.html`

**Interfaces:** none beyond existing bilingual/reveal mechanisms (static markup only, no new JS).

- [ ] **Step 1: Add section-background CSS** — insert directly after the `.product-card__link:hover { color: var(--brick); }` rule:

```css

  /* Who we supply / mirzapur (placeholder shells this phase) */
  .who-we-supply, .mirzapur { background: rgba(168,124,63,0.08); }
```

- [ ] **Step 2: Insert the four sections** — find:

```html
  </section>

</main>
```

Replace with:

```html
  </section>

  <section class="section who-we-supply" id="who-we-supply">
    <div class="container">
      <div class="reveal">
        <p class="section__eyebrow" data-en="Who We Supply" data-hi="हम किसे आपूर्ति करते हैं"></p>
        <h2 class="heading" data-en="Built For Businesses That Serve Food Every Day" data-hi="रोज़ भोजन परोसने वाले व्यवसायों के लिए बनाया गया"></h2>
        <p data-en="Caterers, restaurants, sweet shops, street-food businesses, hotels, banquet halls, event and bhandara organizers, wholesale distributors and local retailers." data-hi="कैटरर्स, रेस्टोरेंट, मिठाई की दुकानें, स्ट्रीट-फूड व्यवसाय, होटल, बैंक्वेट हॉल, इवेंट और भंडारा आयोजक, थोक वितरक और स्थानीय खुदरा विक्रेता।"></p>
      </div>
    </div>
  </section>

  <section class="section making-story" id="making-story">
    <div class="container">
      <div class="reveal">
        <p class="section__eyebrow" data-en="Material &amp; Making" data-hi="सामग्री और निर्माण"></p>
        <h2 class="heading" data-en="From Paper To Plate" data-hi="कागज़ से थाली तक"></h2>
        <p data-en="Paper is sourced, pressed into shape under heat and precision dies, checked for strength, and packed for dispatch — the full story of how each piece is made is coming soon." data-hi="कागज़ की खरीद होती है, गर्मी और सटीक डाई से आकार में दबाया जाता है, मजबूती की जांच होती है, और डिस्पैच के लिए पैक किया जाता है — हर टुकड़े के बनने की पूरी कहानी जल्द आ रही है।"></p>
      </div>
    </div>
  </section>

  <section class="section mirzapur" id="mirzapur">
    <div class="container">
      <div class="reveal">
        <p class="section__eyebrow" data-en="Mirzapur Connection" data-hi="मिर्ज़ापुर से जुड़ाव"></p>
        <h2 class="heading" data-en="Built Here. Supplying The Businesses Around Us." data-hi="यहीं बना। हमारे आसपास के व्यवसायों को आपूर्ति।"></h2>
        <p data-en="Sahlok is setting up in Mirzapur, Uttar Pradesh — a region with its own strong material and craft traditions. Our full story here is coming soon." data-hi="साहलोक मिर्ज़ापुर, उत्तर प्रदेश में स्थापित हो रहा है — एक ऐसा क्षेत्र जिसकी अपनी मज़बूत सामग्री और शिल्प परंपराएं हैं। यहां हमारी पूरी कहानी जल्द आ रही है।"></p>
      </div>
    </div>
  </section>

  <section class="section wholesale" id="wholesale">
    <div class="container">
      <div class="reveal">
        <p class="section__eyebrow" data-en="Wholesale" data-hi="थोक"></p>
        <h2 class="heading" data-en="An Introductory Rate For Your First Order" data-hi="आपके पहले ऑर्डर पर एक परिचयात्मक दर"></h2>
        <p data-en="We're pre-launch and taking early wholesale enquiries. First buyers get a limited-time discounted rate — a good time to lock in a reliable local supplier before we scale up." data-hi="हम लॉन्च-पूर्व चरण में हैं और शुरुआती थोक पूछताछ ले रहे हैं। पहले खरीदारों को सीमित समय के लिए विशेष दर मिलेगी।"></p>
        <a class="btn btn--primary whatsapp-link" target="_blank" rel="noopener"
           data-en="Get Wholesale Price" data-hi="थोक मूल्य जानें"
           data-msg-en="Hi, I'd like to enquire about wholesale pricing for paper dona/pattal."
           data-msg-hi="नमस्ते, मुझे थोक में पेपर दोना/पत्तल की कीमत के बारे में पूछताछ करनी है।"></a>
      </div>
    </div>
  </section>

</main>
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: after the Product Range grid, four new sections appear in order (Who We Supply, Material & Making, Mirzapur, Wholesale), each with a real heading and one real sentence of body copy (readable English, no "TBD"/lorem-ipsum), fading in on scroll. The Wholesale section's WhatsApp button href builds correctly. Toggling language swaps all four sections' text. No console errors.

- [ ] **Step 4: Commit**

```bash
git add v3/index.html
git commit -m "Add Who We Supply, Material and Making Story, Mirzapur Connection, and Wholesale section shells"
```

---

### Task 4: Contact section

**Files:**
- Modify: `v3/index.html`

**Interfaces:** none beyond existing bilingual/WhatsApp mechanisms (static markup only).

**Design note:** the spec's IA lists section 8 as "Final CTA + Footer." This phase realizes that as the Contact section's own "Chat on WhatsApp" button (the natural final call-to-action, right before the footer) rather than a separate ninth section — there is no independent content for a standalone final-CTA band to say that Contact doesn't already say. Revisit this if a later phase's content makes a distinct closing CTA worthwhile.

- [ ] **Step 1: Add contact-section CSS** — insert directly after the `.who-we-supply, .mirzapur { background: rgba(168,124,63,0.08); }` rule:

```css

  /* Contact */
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 32px; }
  @media (max-width: 720px) { .contact-grid { grid-template-columns: 1fr; } }
  .contact-card, .contact-form-placeholder { border: 1px solid var(--stone); padding: 28px; background: var(--card); }
  .contact-row { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-weight: 600; margin-bottom: 14px; }
  .contact-row span:first-child { color: var(--ink-soft); font-weight: 500; }
  .contact-card .btn { margin-right: 10px; margin-bottom: 10px; }
```

- [ ] **Step 2: Insert the contact section** — find:

```html
  </section>

</main>
```

Replace with:

```html
  </section>

  <section class="section contact" id="contact">
    <div class="container">
      <p class="section__eyebrow reveal" data-en="Contact" data-hi="संपर्क करें"></p>
      <h2 class="heading reveal" data-en="Let's Talk Bulk Pricing" data-hi="थोक मूल्य पर बात करें"></h2>
      <div class="contact-grid">
        <div class="contact-card reveal">
          <div class="contact-row"><span data-en="Owner" data-hi="स्वामी"></span><span>Alok Dwivedi</span></div>
          <div class="contact-row"><span data-en="Call / WhatsApp" data-hi="कॉल / व्हाट्सएप"></span><span>+91 87872 01971</span></div>
          <div class="contact-row"><span data-en="Address" data-hi="पता"></span><span>Civil Line Road, Saripur Jalapur, Mirzapur – 231001</span></div>
          <a class="btn btn--primary whatsapp-link" target="_blank" rel="noopener"
             data-en="Chat on WhatsApp" data-hi="व्हाट्सएप पर चैट करें"
             data-msg-en="Hi, I'd like to enquire about ordering paper dona/pattal in bulk."
             data-msg-hi="नमस्ते, मुझे थोक में पेपर दोना/पत्तल ऑर्डर करने के बारे में पूछताछ करनी है।"></a>
          <a class="btn btn--ghost" id="tel-link" href="tel:+918787201971" data-en="Or Call Directly" data-hi="या सीधे कॉल करें"></a>
        </div>
        <div class="contact-form-placeholder reveal">
          <p data-en="A contact form (name, email, message) is coming in the next phase." data-hi="अगले चरण में एक संपर्क फ़ॉर्म (नाम, ईमेल, संदेश) आ रहा है।"></p>
        </div>
      </div>
    </div>
  </section>

</main>
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: the Contact section shows the owner name, phone, and address on the left in a bordered card, a "Chat on WhatsApp" and "Or Call Directly" button, and a bordered placeholder note on the right about the form arriving in a future phase. The `tel:` link reads `tel:+918787201971`. Language toggle swaps all contact-section text. No console errors.

- [ ] **Step 4: Commit**

```bash
git add v3/index.html
git commit -m "Add Contact section with real contact details and form placeholder"
```

---

### Task 5: Full cross-check pass

**Files:**
- Modify: `v3/index.html` (only if a real issue is found)

**Interfaces:** none (verification-only task).

- [ ] **Step 1: Confirm root and v2 files were never touched**

```bash
git status --porcelain index.html v2/index.html
git log -1 --format=%s -- index.html
git log -1 --format=%s -- v2/index.html
```

Expected: the first command prints nothing, the second still names the "Update location to Mirzapur..." commit, and the third still names the "Replace about-section photo..." commit — i.e. neither file gained a new commit during this plan.

- [ ] **Step 2: Desktop visual pass**

Open `http://localhost:8199/v3/index.html` at ≥1200px width. Confirm, scrolling top to bottom: header with sticky nav, hero with asymmetric 7/5 split (Fraunces headline + real photo), Product Range's 6 photo-forward cards, Who We Supply / Material & Making / Mirzapur / Wholesale sections with real placeholder copy, Contact section with real details, oxblood footer. No rounded pill buttons, no soft-shadow cards anywhere.

- [ ] **Step 3: Mobile visual pass**

Resize to ~390px width and reload. Confirm: single-column stacking throughout, mobile nav hamburger opens/closes, no horizontal scroll:
```js
document.documentElement.scrollWidth <= window.innerWidth + 1
```
Expected: `true`.

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
  telHref: document.getElementById('tel-link').getAttribute('href'),
  headingFont: getComputedStyle(document.querySelector('h1')).fontFamily
})
```
Expected: `attrParity: true`, `allWhatsAppValid: true`, `telHref: "tel:+918787201971"`, `headingFont` containing `"IBM Plex Sans Devanagari"`. Click the toggle again to leave it on English.

- [ ] **Step 5: Reduced-motion check**

In devtools, emulate `prefers-reduced-motion: reduce` (Rendering tab → Emulate CSS media feature), reload the page, and confirm every `.reveal` element is immediately visible (no visible fade/slide-in delay) rather than stuck at `opacity: 0`.

- [ ] **Step 6: Console/error check**

Confirm devtools console shows zero errors or warnings on load, on language toggle, and on mobile-nav open/close.

- [ ] **Step 7: Final commit**

```bash
git add -A
git status
git commit -m "Final cross-check pass for v3 Phase 1" --allow-empty
```

(Use `--allow-empty` only if Steps 1-6 found nothing to fix; if you changed `v3/index.html` to fix a real issue, drop `--allow-empty` and describe the fix instead.)
