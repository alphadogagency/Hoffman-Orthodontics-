# Hoffman Family Orthodontics

Astro homepage with static output for Cloudflare. The approved design, copy, fonts, imagery, and interactions are preserved. No server adapter is needed for the current homepage.

## Local development

Use Node 22.12 or newer; `.node-version` pins the validated Node version.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

`dist/` is generated output. Edit `src/` and `public/`, not `dist/`.

- `src/pages/index.astro`: homepage sections
- `src/layouts/BaseLayout.astro`: document metadata and shared layout
- `src/components/`: shared header and footer
- `src/styles/global.css`: existing responsive design
- `src/scripts/navigation.ts`: mobile menu
- `public/assets/`: original local images, logo, and fonts
- `content-sources.json`: provenance and content review notes

## Cloudflare Pages

Connect this repository to Pages using these build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | Repository root (or `homepage` if the enclosing workspace is committed as one repository) |
| Node version | `22.22.2` |

No Cloudflare adapter or Pages Functions are required. The generated `dist` folder can also be uploaded directly to Pages. A Pages account/project has not been provisioned by this migration.

## Cloudflare Workers static hosting

`wrangler.jsonc` configures the same static build for Workers. The local project name can be changed before the first deployment.

```sh
npm run build
npm run cf:validate
npm run cf:preview
```

When ready to create or update the Cloudflare deployment, authenticate Wrangler to the intended account and run `npm run cf:deploy`. This command publishes; the migration only validates the configuration locally.

## Preview and launch

The existing private Sites preview continues to use the generated `dist/` folder via `.openai/hosting.json`.

Review builds default to `noindex, nofollow`. At the approved live launch, set the **build-time** environment variable `PUBLIC_ALLOW_INDEXING=true` and rebuild. The production canonical origin is configured in `astro.config.mjs`.

This round contains only the homepage. Detail links and the consultation link still use the existing Hoffman website until the remaining pages and contact workflow are replaced.

Official references: [Astro Cloudflare deployment](https://docs.astro.build/en/guides/deploy/cloudflare/) and [Cloudflare Pages Astro builds](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).
