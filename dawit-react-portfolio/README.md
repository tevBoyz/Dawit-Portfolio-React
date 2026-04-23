# Dawit Tefera Tamiru Portfolio

Professional portfolio built with React and Vite, focused on full-stack development and business analysis experience.

## Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- EmailJS

## Getting started

1. Install dependencies:
   - `npm install`
2. Start local development:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Preview production build locally:
   - `npm run preview`

## Project structure

- `src/components/sections` - portfolio sections (Hero, About, Experience, Projects, Skills, Contact)
- `src/components/Layout` - Header and Footer
- `src/data` - experience, projects, and skills data sources
- `public/assets/images` - static images used by the site
- `public/robots.txt` and `public/sitemap.xml` - SEO crawl assets

## Environment variables

Contact form uses EmailJS via:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
