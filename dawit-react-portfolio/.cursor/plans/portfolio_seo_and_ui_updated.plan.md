---
name: Portfolio SEO and UI (updated)
overview: "Branding is aligned to Dawit Tefera Tamiru; remaining work is SEO head/crawl, design tokens, optional CV polish (e.g. Spiralytix), hero image path, a11y."
todos:
  - id: content-cv-spiralytix
    content: "If missing vs CV/LinkedIn: add Spiralytix (Full-stack / BA / IT lead) and reconcile overlapping dates in src/data/experience.js; keep About in sync with one-line pitch."
  - id: image-hero
    content: "Hero uses image-DT.png; switch to lnkdn.JPG in public if preferred. Fix img src to /assets/... (leading slash) for reliable Vite public URLs."
  - id: linkedin-urls
    content: "Ensure https://www.linkedin.com/in/dawit-tefera-tamiru in Footer, Contact, and JSON-LD sameAs; remove any placeholder # hrefs."
  - id: head-meta-og
    content: "index.html: meta description, canonical, Open Graph, Twitter, JSON-LD Person (Dawit Tefera Tamiru + role); fix broken favicon (code.png / type)."
  - id: tokens-header
    content: "Add --color-muted in index.css; fix primary-* vs accent in tailwind/Header."
  - id: crawl-files
    content: "Add public/robots.txt and sitemap.xml with production site URL."
  - id: hero-a11y-ui
    content: "Hero h1 hierarchy, mobile image height, prefers-reduced-motion, optional theme toggle."
---

# Portfolio: current repo vs remaining tasks

## Re-check (Dawit Tefera) — **verified 2026-04-23**

- **No “Yeaymrokal”** in `src` or `index.html` (only mentioned in this plan as historical). Branding is **Dawit** / **Dawit Tefera Tamiru** / **Dawit T. Tamiru** depending on the line.
- **[`index.html`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\index.html):** `<title>Dawit Tefera Tamiru</title>`.
- **[`Hero.jsx`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\src\components\sections\Hero.jsx):** **Dawit T. Tamiru** + **Full Stack Developer**; tagline and CTAs are dev-appropriate. Image `src` is `assets/images/image-DT.png` (no leading `/` — can break; prefer **`/assets/images/...`**).
- **Hero image file:** `public/assets/images` currently has **`favicon.svg`** and **`image-avatar.png` only** — **`image-DT.png` is not in the tree**. Either add that file under `public/assets/images` or use **`lnkdn.JPG`**: copy the root file to e.g. `public/assets/images/lnkdn.jpg` and point the hero to `/assets/images/lnkdn.jpg`.
- **[`Header.jsx`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\src\components\Layout\Header.jsx) / [`Footer.jsx`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\src\components\Layout\Footer.jsx):** **Dawit Tamiru** in nav/footer. Footer LinkedIn: `linkedin.com/in/dawit-tefera-tamiru-6b9496136` — **differs** from the canonical public profile [linkedin.com/in/dawit-tefera-tamiru](https://www.linkedin.com/in/dawit-tefera-tamiru); pick one and align **Footer + Contact + JSON-LD** `sameAs`.
- **[`About.jsx`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\src\components\sections\About.jsx):** **Dawit**; resume `Resume_Dawit_Tamiru.pdf`.
- **[`src/data/experience.js`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\src\data\experience.js):** **Freelance**, **BlockCertsAI**, **Lisa Production / Leyu Tune**, **Heineken** — no legacy SMM list.

**Optional full-name consistency:** `index.html` uses **Dawit Tefera Tamiru**; hero uses **Dawit T. Tamiru** — both fine; use the same in JSON-LD as on the title for SEO.

**Still check vs CV/LinkedIn:** [Spiralytix](https://www.linkedin.com/company/spiralytix) (current full-stack / BA / IT lead) does **not** appear in `experience.js` — add if you want parity with [linkedin.com/in/dawit-tefera-tamiru](https://www.linkedin.com/in/dawit-tefera-tamiru).

**Contact:** [`Contact.jsx`](c:\Users\Victus\Documents\D\pf\Dawit-Portfolio-React\dawit-react-portfolio\src\components\sections\Contact.jsx) still has a **LinkedIn placeholder** (comment) — close the loop in the `linkedin-urls` todo.

## Outdated plan notes (removed)

- The previous **“Identity mismatch / Yeaymrokal”** section is **obsolete**; the app copy now reflects **Dawit** and full-stack focus.

## Prior technical items (unchanged)

- `index.html` lacks meta description, OG/Twitter, canonical; favicon still points to missing/wrong `code.png`.
- `--color-muted` and `primary-*` in Header may still need fixes (see code audit).
- `public/robots.txt` and `sitemap.xml` not added yet.

## Suggested order

1. **Spiralytix + experience** (if you want full parity with LinkedIn).  
2. **Hero image** path + optional `lnkdn` swap.  
3. **SEO** head + JSON-LD + favicon.  
4. **Tokens, crawlers, a11y.**

When you want implementation, switch to **Agent** mode and reference this file.
