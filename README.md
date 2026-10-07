# Hoffman Family Orthodontics

Astro website with static pages and one Cloudflare Pages Function for live Google reviews. GitHub Actions publishes this repository’s `main` branch to the existing staging project, `hoffman-orthodontics`:

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
- `src/components/ConsultationRequest.astro`: supplied Jotform embed at `/contact/#form`
- `functions/api/google-reviews.ts` and `worker/google-reviews.ts`: Pages adapter and private review handler
- `public/_redirects`: 301 rules for known legacy URLs
- `docs/punch-list-status.md`: source evidence, completed work, and remaining inputs

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Project | `hoffman-orthodontics` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | Repository root |
| Node version | `22.22.2` |

`wrangler.jsonc` targets the actual Pages project. `cf:preview` and `cf:validate` are aliases for the Pages commands. `cf:deploy` is an explicit publish command and requires authentication to the intended Cloudflare account.

Normal updates use `.github/workflows/deploy.yml`: pushes to `main` install the locked dependencies, check and test the site, build it, validate Functions, and deploy with Wrangler. The workflow can also be run manually from GitHub's Actions tab on `main`. It uses the repository secret `CLOUDFLARE_API_TOKEN` and the agency Cloudflare account ID; the token is available only to the publishing step. The repository is `alphadogagency/Hoffman-Orthodontics-`. Its ownership transfer disconnected the old Cloudflare Git integration, so GitHub Actions now handles publishing to the same Pages project and URL. Disable the old automatic Git deployments in Cloudflare to avoid competing deployment paths.

The root `functions/` directory must be included in deployment. A static dashboard upload or the old private Sites preview will not run the reviews Function. `_routes.json` limits function invocation to `/api/google-reviews`; static pages and legacy redirects remain on the asset path.

## Google reviews

The review slider and hero rating use the Places API (New) through this practice's Google Cloud project, `hoffman-orthodontics-reviews`. Bryan approved the agency's Firebase Payment billing account, a $10/month allowance, and private storage of the restricted key in Cloudflare on October 6, 2026.

Configuration:

1. The active key, named **Hoffman Cloudflare Reviews**, is restricted to Places API (New), without a service account or access to private Google account data. It is stored only as the Pages production secret `GOOGLE_PLACES_API_KEY`. The temporary onboarding key was removed. Cloudflare does not provide stable outbound IPs for this setup; browser-referrer restrictions do not apply to server calls.
2. Google's official Place ID finder verified `ChIJA3iJOgCFf4gRD9BScWOg2mc` for **Hoffman Family Orthodontics, 5159 Wheelis Drive, Memphis, TN 38117**. The public ID is in `wrangler.jsonc`.
3. The GitHub Actions build sets `PUBLIC_ENABLE_GOOGLE_REVIEWS=true` and `PUBLIC_ALLOW_INDEXING=false`; `wrangler.jsonc` supplies the runtime bindings. The dashboard manages the encrypted Google API secret, which stays in the existing Pages project and is not needed in GitHub. Redeploy after changing bindings.
4. Google quotas are **10 GetPlace requests per day** and **5 per minute**. The six unused methods (autocomplete, photo media, media search, nearby search, review-post search, text search) each have a daily quota of zero. These are enforced request limits, not budget alerts.

At the verified October 6 [price](https://developers.google.com/maps/billing-and-pricing/pricing) of $25 per 1,000 Place Details Enterprise + Atmosphere requests, 10 daily requests cost at most $7.75 in a 31-day month before credits/taxes. This leaves room within the approved $10 allowance without assuming any shared billing-account free allowance remains. Ten homepage loads can consume the daily allowance. When exhausted, the site shows the genuine Google profile link until quota resets. This cap is an implementation setting for Bryan's approved budget, not a remaining requirement from Kyle's MD. Changing it must remain within the authorized spending allowance.

Only the Pages production environment is connected. Branch previews and plain Astro development do not inherit the secret. For a local live review check, use ignored `.dev.vars` and build with `PUBLIC_ENABLE_GOOGLE_REVIEWS=true`; local requests share the same quota. No static reviews or rating are embedded.

Live verification on October 6 confirmed HTTP 200 JSON with no-store headers, four written five-star cards, the aggregate hero rating, loaded author avatars, newest-first dates, direct review links, and working desktop/mobile controls. Staging remains noindex.

The endpoint requests only reviews, provider attribution, aggregate rating and review count. It reads a fixed server-configured business, rejects cross-site browser fetches, bounds upstream time to six seconds, does not follow redirects with credentials, and sends no-store headers. Browser fetching runs once when the hero rating enters view. Cross-site checks are not a substitute for provider quota or host rate limits.

Five-star written reviews are filtered from Google’s selection of at most five and sorted newest first within that selection. Review words, authors, profile links/photos, dates, individual source links, and provider attribution are preserved. Official Google Maps attribution is included. No review content is stored in a database or bundled into the static build.

## Preview and launch

Keep `PUBLIC_ALLOW_INDEXING=false` on staging. Page-level `noindex, nofollow` remains in place; robots permits crawling so search engines can read that instruction. Staging has an empty sitemap.

At the custom-domain launch deferred by Bryan, set `PUBLIC_ALLOW_INDEXING=true` in the workflow build environment and `wrangler.jsonc`, then rebuild. This adds production canonicals and a sitemap of the 26 content URLs. Validate the custom domain, both host variants, redirects, and indexing headers. Keep Pages preview hosts excluded from indexing or redirect them appropriately after launch.

Jotform `262794560250055`, supplied by Bryan October 7, is embedded in `src/components/ConsultationRequest.astro` at `/contact/#form`. Jotform's handler resizes the iframe; the embed omits the original unconditional scroll-to-top so consultation anchors remain usable. Phone and direct-form fallbacks remain. Form fields, delivery, and notifications are managed in the supplied Jotform; rendering and required-field validation are checked without submitting a message.

The original privacy policy is retained with limited additions covering the map, reviews, and supplied Jotform. Per Bryan's scope clarification, separate practice sign-off on the existing policy or new copy is not an added launch requirement.
