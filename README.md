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

## Google reviews

The review slider and hero rating use the Places API (New) through this practice's Google Cloud project, `hoffman-orthodontics-reviews`. Bryan approved the agency's Firebase Payment billing account, a $10/month allowance, and private storage of the restricted key in Cloudflare on October 6, 2026.

Configuration:

1. The active key, named **Hoffman Cloudflare Reviews**, is restricted to Places API (New), without a service account or access to private Google account data. It is stored only as the Pages production secret `GOOGLE_PLACES_API_KEY`. The temporary onboarding key was removed. Cloudflare does not provide stable outbound IPs for this setup; browser-referrer restrictions do not apply to server calls.
2. Google's official Place ID finder verified `ChIJA3iJOgCFf4gRD9BScWOg2mc` for **Hoffman Family Orthodontics, 5159 Wheelis Drive, Memphis, TN 38117**. The public ID is in `wrangler.jsonc`.
3. `wrangler.jsonc` supplies `PUBLIC_ENABLE_GOOGLE_REVIEWS=true` and `PUBLIC_ALLOW_INDEXING=false` to Cloudflare's build. The dashboard manages the encrypted secret; non-secret configuration belongs in Wrangler. Redeploy after changing bindings.
4. Google quotas are **10 GetPlace requests per day** and **5 per minute**. The six unused methods (autocomplete, photo media, media search, nearby search, review-post search, text search) each have a daily quota of zero. These are enforced request limits, not budget alerts.

At the verified October 6 [price](https://developers.google.com/maps/billing-and-pricing/pricing) of $25 per 1,000 Place Details Enterprise + Atmosphere requests, 10 daily requests cost at most $7.75 in a 31-day month before credits/taxes. This leaves room within the approved $10 allowance without assuming any shared billing-account free allowance remains. Revisit the cap before public launch: ten homepage loads can consume the daily allowance. When exhausted, the site shows the genuine Google profile link until quota resets. Do not raise these limits or use the key for additional operations without reviewing the approved allowance.

Only the Pages production environment is connected. Branch previews and plain Astro development do not inherit the secret. For a local live review check, use ignored `.dev.vars` and build with `PUBLIC_ENABLE_GOOGLE_REVIEWS=true`; local requests share the same quota. No static reviews or rating are embedded.

Live verification on October 6 confirmed HTTP 200 JSON with no-store headers, four written five-star cards, the aggregate hero rating, loaded author avatars, newest-first dates, direct review links, and working desktop/mobile controls. Staging remains noindex.

The endpoint requests only reviews, provider attribution, aggregate rating and review count. It reads a fixed server-configured business, rejects cross-site browser fetches, bounds upstream time to six seconds, does not follow redirects with credentials, and sends no-store headers. Browser fetching runs once when the hero rating enters view. Cross-site checks are not a substitute for provider quota or host rate limits.

Five-star written reviews are filtered from Google’s selection of at most five and sorted newest first within that selection. Review words, authors, profile links/photos, dates, individual source links, and provider attribution are preserved. Official Google Maps attribution is included. No review content is stored in a database or bundled into the static build.

## Preview and launch

Keep `PUBLIC_ALLOW_INDEXING=false` on staging. Page-level `noindex, nofollow` remains in place; robots permits crawling so search engines can read that instruction. Staging has an empty sitemap.

At the separately approved custom-domain launch, set `PUBLIC_ALLOW_INDEXING=true` and rebuild. This adds production canonicals and a sitemap of the 26 content URLs. Validate the custom domain, both host variants, redirects, and indexing headers before submission to Search Console. Keep Pages preview hosts excluded from indexing or redirect them appropriately after launch.

Add the supplied Jotform embed to `src/components/ConsultationRequest.astro`, preserving `/contact/#form`. Until then the section has working phone/email links and does not submit patient data. Verify the submission recipient, confirmation behavior, mobile layout, and privacy wording when the embed arrives.

The original privacy policy is retained with a limited addition covering the new map/review features. Its practice-wide claims and final form behavior still need practice review before launch. New educational and community copy is draft marketing content for approval, not a claim of clinical review.
