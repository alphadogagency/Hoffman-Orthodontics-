# Hoffman Family Orthodontics

Astro website with static pages and one Cloudflare Pages Function for live Google reviews. The existing staging project is `hoffman-orthodontics`, connected to this repository’s `main` branch:

https://hoffman-orthodontics.pages.dev/

## Develop and verify

Use Node 22.12 or newer (`.node-version` pins the validated version).

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run pages:validate
npm run pages:preview
```

Astro dev previews static pages. `pages:preview` serves the built `dist/` through the local Cloudflare runtime at `http://127.0.0.1:8788`, including Functions and redirects. For local live reviews, copy `.dev.vars.example` to ignored `.dev.vars` and provide this practice’s runtime configuration. Do not put secrets in public environment variables.

Edit `src/` and `public/`, not generated `dist/`.

- `src/data/practice.ts`: contact information, hours, map, and business/doctor schema
- `src/data/treatments.ts`: eight individual treatment guides
- `src/data/areas.ts`: seven community pages, all directing to the single East Memphis office
- `src/data/faqs.ts`: visible FAQ content and the source for FAQPage schema
- `src/components/ConsultationRequest.astro`: deferred Jotform insertion point
- `functions/api/google-reviews.ts` and `worker/google-reviews.ts`: Pages adapter and private review handler
- `public/_redirects`: 301 rules for known legacy URLs
- `docs/punch-list-status.md`: source evidence, completed work, remaining approvals

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Project | `hoffman-orthodontics` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | Repository root |
| Node version | `22.22.2` |

`wrangler.jsonc` now targets the actual Pages project. `cf:preview` and `cf:validate` are aliases for the Pages commands. `cf:deploy` is an explicit publish command and requires authentication to the intended Cloudflare account. Normal updates use the existing Git integration.

The root `functions/` directory must be included in deployment. A static dashboard upload or the old private Sites preview will not run the reviews Function. `_routes.json` limits function invocation to `/api/google-reviews`; static pages and legacy redirects remain on the asset path.

## Google reviews: activation pending

The review slider and hero rating use the Places API (New). They are not connected yet. The staging page currently offers the real Google profile link; it displays no invented reviews or hardcoded rating.

To activate:

1. Select the intended agency Google Cloud project with billing and Places API (New). Establish an approved request quota before activation; requests can be billable, and budget alerts do not cap spending.
2. Obtain the Place ID for **Hoffman Family Orthodontics, 5159 Wheelis Drive, Memphis, TN 38117**. Use the verified [Google listing](https://maps.app.goo.gl/JrZmSSodFu2KYgvYA) to disambiguate similarly named practices.
3. Restrict the server API key to Places API (New). Bind secret `GOOGLE_PLACES_API_KEY` and server variable `GOOGLE_PLACE_ID` to the appropriate Pages deployment environment. Keep the key out of source and browser bundles.
4. Set build variable `PUBLIC_ENABLE_GOOGLE_REVIEWS=true` and redeploy.
5. Verify `/api/google-reviews` returns JSON with this practice’s real reviews, then verify desktop/mobile cards and the hero rating.

The endpoint requests only reviews, provider attribution, aggregate rating and review count. It reads a fixed server-configured business, rejects cross-site browser fetches, bounds upstream time to six seconds, does not follow redirects with credentials, and sends no-store headers. Browser fetching runs once when the hero rating enters view. Cross-site checks are not a substitute for provider quota or host rate limits.

Five-star written reviews are filtered from Google’s selection of at most five and sorted newest first within that selection. Review words, authors, profile links/photos, dates, individual source links, and provider attribution are preserved. Official Google Maps attribution is included. No review content is stored in a database or bundled into the static build.

## Preview and launch

Keep `PUBLIC_ALLOW_INDEXING=false` on staging. Page-level `noindex, nofollow` remains in place; robots permits crawling so search engines can read that instruction. Staging has an empty sitemap.

At the separately approved custom-domain launch, set `PUBLIC_ALLOW_INDEXING=true` and rebuild. This adds production canonicals and a sitemap of the 26 content URLs. Validate the custom domain, both host variants, redirects, and indexing headers before submission to Search Console. Keep Pages preview hosts excluded from indexing or redirect them appropriately after launch.

Add the supplied Jotform embed to `src/components/ConsultationRequest.astro`, preserving `/contact/#form`. Until then the section has working phone/email links and does not submit patient data. Verify the submission recipient, confirmation behavior, mobile layout, and privacy wording when the embed arrives.

The original privacy policy is retained with a limited addition covering the new map/review features. Its practice-wide claims and final form behavior still need practice review before launch. New educational and community copy is draft marketing content for approval, not a claim of clinical review.
