# Future Earnings Expert

Production marketing site for **Future Earnings Expert** — forensic economics and economic damages expert witness services for US litigation attorneys.

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS 4
- Static generation, Formspree contact form
- `middleware.ts` — apex → www redirect
- `SITE_URL` = https://www.futureearningsexpert.com

## Setup

```bash
npm install
cp .env.example .env.local
# Add NEXT_PUBLIC_FORMSPREE_FORM_ID
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Site architecture

- **60+ pages**: services (8), damages contexts (3), earnings types (8), case types (10), guides (6), pillar page, FAQ, glossary (30 terms), experts, fees, qualifications, legal
- Content in `src/lib/content/`
- No placeholder copy — update expert profiles and phone as needed for launch

## SEO (sitemap & robots)

Generated files in `public/` — see `docs/SEO.md`:

```bash
npm run seo:generate   # public/sitemap.xml + robots.txt
npm run seo:verify     # confirm sitemap matches URL inventory
```

`npm run build` runs `seo:generate` automatically.
