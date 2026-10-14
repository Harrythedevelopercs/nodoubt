# Repository working agreement

- Run `npm run lint:content`, `npm run lint`, and `npm run build` before marking implementation work complete.
- Keep public brand facts in `src/app/seo/site.js` and supporting policy in `docs/brand-fact-pack.md`.
- Do not add outcome guarantees, fabricated reviews, ratings, awards, prices, client identities, or expert identities.
- Keep secrets in server-side environment variables and document only blank placeholders in `.env.example`.
- Regenerate `public/sitemap.xml` after adding, removing, or renaming public routes.
- Maintain exactly five noindex routes unless an approved SEO decision changes the list: `/landing/lp1`, `/landing/lp2`, `/refund-form`, `/thank-you`, and `/book-writing-services-2`.
