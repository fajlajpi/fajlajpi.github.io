# Prague Fox Tours

Website for **Prague Fox Tours**: private tours of Prague's 20th century with a native, licensed guide.

Production domain: https://praguefoxtours.cz · Test deployment: GitHub Pages (on every push to `main`).

Built with [Astro](https://astro.build) and Tailwind CSS as a fully static site. Originally based on the MIT-licensed [maucariapacom-church-starter](https://github.com/MauCariApa-com/maucariapacom-church-starter) template (see `LICENSE`).

## Editing content

| What | Where |
|---|---|
| Business details (email, phone, IČO, address, Formspree endpoint) | `src/config/site.ts` |
| Tours (one Markdown file per tour; frontmatter = price, duration, meeting point, etc.) | `src/content/tours/*.md` |
| Tour fields and their meaning | `src/content/config.ts` |
| FAQ | `src/pages/faq.astro` |
| Home / About / Contact | `src/pages/index.astro`, `about.astro`, `contact.astro` |
| Terms of service / Privacy policy | `src/pages/terms-of-service.astro`, `privacy-policy.astro` |
| Images | `public/uploads/` (tour photos in `public/uploads/tours/`) |

To add a tour, copy an existing file in `src/content/tours/`, change the frontmatter, and give it a unique `order` (lowest first; the first four appear on the home page). `draft: true` hides it in production. A single entry in `pricingTiers` shows as a flat "€X per group" price; several show as "From €X".

### Booking form

The form on `/contact/` posts to Formspree (endpoint in `src/config/site.ts`). Linking to `/contact/?tour=<tour-slug>` preselects that tour.

## Commands

```sh
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # build to ./dist
npm run preview    # preview the production build
```

## Going live on praguefoxtours.cz

1. Point the domain's DNS at the host (for GitHub Pages: add `public/CNAME` containing `praguefoxtours.cz` and set the custom domain in the repo's Pages settings).
2. Set up a 301 redirect from `bluefoxtours.cz` to `https://praguefoxtours.cz` at the registrar or DNS provider (GitHub Pages cannot redirect another domain).
3. Submit `https://praguefoxtours.cz/sitemap-index.xml` in Google Search Console.
