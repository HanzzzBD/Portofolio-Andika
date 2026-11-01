# Andika Rasya Putra — Portfolio

Personal portfolio for Andika Rasya Putra, web developer and RPL student at SMK Negeri 4 Bandung.

## Stack
React 19 · Vite 8 · plain CSS (custom properties, light/dark themes) · GSAP + ScrollTrigger · Framer Motion · Lucide icons.

## Scripts
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve dist/
npm run lint     # oxlint
```

## Where things live
| Path | Purpose |
|---|---|
| `src/data/content.js` | **All site copy.** Every fact is traced to a source in `docs/RESEARCH.md` — keep it that way. |
| `src/components/` | One component per section (Hero, About, Projects, Skills, Experience, Certificates, Contact, Footer) plus navigation. |
| `src/lib/gsap.js` | GSAP/ScrollTrigger registration and shared reduced-motion media queries. |
| `src/lib/motion.js` | Framer Motion easing and stagger variants. |
| `src/styles/base.css` | Design tokens (both themes), reset, buttons, tags, navigation. |
| `src/styles/sections.css` | Section layouts. |
| `public/images/` | WebP assets (portrait, certificates, project screenshots) in two widths each. |
| `docs/RESEARCH.md` | Design-reference analysis and the verified content inventory. |

## Animation rules
- **GSAP** owns the hero timeline, scroll-driven work (`[data-rule]`, `[data-clip]`, `[data-parallax]`, `[data-progress]`) and the footer reveal. Everything is registered inside `gsap.matchMedia()` and reverted on unmount via `useGSAP`.
- **Framer Motion** owns component-level motion: `Reveal` wrappers, staggered lists, nav underline, mobile menu, filters, lightbox, button feedback.
- The two never target the same element/property. Both respect `prefers-reduced-motion`.

## Updating content
Add a certificate: export the image as WebP at 640w and 1600w into `public/images/` (`<name>-640.webp`, `<name>-1600.webp`) and add an entry to `certificates` in `content.js`.

## Before deploying
Set absolute URLs for `og:image` / `twitter:image` in `index.html` once the domain is known (social scrapers need absolute URLs).
# Portofolio-Andika
