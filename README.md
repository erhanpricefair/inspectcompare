# InspectCompare

Programmatic SEO directory for building & pest inspections across Australia.
AdSense-first monetisation; lead capture and paid listings layered in once traffic is flowing.

## How it's structured

- `data/cities.ts` — the 8 launch cities. Add a city here and it auto-generates a full page at
  `/building-pest-inspections/[slug]`. No manual page-building needed.
- `data/providers.ts` — inspector listings, keyed by city. `featured: true` renders above the
  fold — this is the paid-placement hook for later monetisation.
- `data/guides.ts` — the 15 launch guide articles. Currently stubs with `status: 'planned'`.
  Write content, drop it into the guide page component, flip status to `'published'`.
- `app/building-pest-inspections/[city]/page.tsx` — city page template (pulls from cities +
  providers data, statically generated at build time).
- `app/guides/[slug]/page.tsx` — guide article template.

## Local setup

```bash
npm install
npm run dev
```

Then visit http://localhost:3000

## Deploy

Push to GitHub, import into Vercel (matches your existing AFLEdge/Form Board stack). Zero config
needed — it's a standard Next.js app.

## Next steps (in order)

1. **Seed real providers** — replace the placeholder entries in `data/providers.ts` with actual
   vetted inspectors for each of the 8 cities (aim for 3-5 per city minimum before launch).
2. **Write the 15 guides** — start with the cost guide (`building-and-pest-inspection-cost-guide`),
   it's the pillar page everything else links to.
3. **Add real metadata/OG images** once content is in.
4. **Apply for AdSense** after guides are published and the site has a few weeks of indexing —
   don't apply on a near-empty site, it'll get rejected.
5. **Add a provider submission form** (currently a placeholder on each city page) once you're
   ready to open self-submission alongside the seeded list.
6. **Suburb-level pages** once a city page starts ranking — same pattern as city pages, one level
   deeper.

## Design notes

- Colour/typography kept deliberately plain for now — swap the `brand` palette in
  `tailwind.config.js` once you've settled on a name/logo.
- No lead-capture forms wired up yet — intentional, per the AdSense-first sequencing.
