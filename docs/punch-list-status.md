# October 6, 2026 punch-list implementation

## Applied

- Eight treatment guides, linked from the Treatments hub: metal braces, ceramic braces, Invisalign, Angel Aligners, early evaluation, teens, adults, retainers.
- Cost/financing page with the confirmed complimentary consultation, flexible payment plans, and insurance information. No unsupplied prices, interest rates, monthly minimums, or insurer names.
- Expanded FAQ from 11 to 20 questions, including board certification, age 7, consultation planning, adults, cost, payment plans, treatment comparisons, and emergencies. JSON-LD is generated from the same answers.
- Seven community pages and a directory, with East Memphis first, then Germantown, Downtown, Midtown, Collierville, Bartlett, Cordova. Each has distinct visit-planning copy and directions; all clearly identify the single East Memphis office. No fabricated local branches, affiliations, patient stories, or travel-time promises.
- Valid Schema.org `Dentist` (a LocalBusiness subtype), Person on About, FAQPage on FAQ. `Orthodontist` is not used as an unsupported Schema.org type. No self-serving aggregate review markup.
- Hours in the homepage contact block, footer, Contact, and community visit details. Map embed from the exact Google listing. Corrected map coordinates from the old export.
- Conversational Dr. Rachel naming, full name in page introductions, About punctuation cleanup, and a homepage explanation of board certification.
- Sticky mobile call/consult bar, working `tel:` links, and homepage CTAs pointing directly to `/contact/#form`.
- 18 tested 301 rules covering legacy slashless paths, index.html forms, and the old Invisalign route. Conditional production sitemap/canonicals. Staging remains noindex.
- Google review endpoint, responsive slider, live hero rating, attribution, and failure/empty fallback are connected and verified on Cloudflare staging. The API returned four five-star written reviews and a 5.0 aggregate rating from five reviews during verification; these values are fetched live, not hardcoded.

## Verified sources

- [Current Contact page](https://www.hoffmanfamilyorthodontics.com/contact): phone **901.625.0202**, fax **901.425.0202**, address **5159 Wheelis Drive, Memphis, TN 38117**, existing email/social links. Fax matches the supplied export; this verifies consistency with published sources, not a fresh confirmation from the practice.
- [Current New Patients page](https://www.hoffmanfamilyorthodontics.com/new-patients): complimentary consultation, flexible payment plans, most insurance providers. No price ranges, carrier list, payment terms, or standard consult length supplied.
- [Google Maps listing](https://maps.app.goo.gl/JrZmSSodFu2KYgvYA), inspected October 6: Monday–Thursday **8 a.m.–5 p.m.**, Friday–Sunday **closed**. Google flags possible holiday differences. Coordinates **35.1142387, -89.8898953**; these differ from the old website’s approximate coordinates.
- Same Google listing supplies live reviews through Places API (New). Google's official Place ID finder verified `ChIJA3iJOgCFf4gRD9BScWOg2mc` against the exact name and Wheelis Drive address.
- Gmail handoff: `1a0cabe86287cc68` (Rooster Grin export), `1a0c943bbc7a4747` (client transition/Google Business Profile access), `1a112410038f3d03` (Kyle’s review and Bryan’s explicit Jotform/domain deferral). No pricing sheet, confirmed financing terms, review embed, or Places API configuration found in those threads or the targeted email searches. No messages sent.
- Supplied website export and assets remain the source for doctor biography, credentials, offerings, and original FAQ details.
- General education: [ABO patient information](https://exam.americanboardortho.com/patients/), [AAO first evaluation](https://aaoinfo.org/whats-trending/when-should-your-child-see-an-orthodontist/), [AAO aligners](https://aaoinfo.org/treatments/aligners/), [AAO adult questions](https://aaoinfo.org/orthodontists-respond-to-frequently-asked-questions-from-adults-considering-treatment/), [AAO emergency guidance](https://aaoinfo.org/whats-trending/what-is-an-orthodontic-emergency/).
- Local context: [Memphis Travel neighborhoods](https://www.memphistravel.com/neighborhoods), [East Memphis](https://www.memphistravel.com/neighborhoods/east-memphis), [regional landmarks](https://www.memphistravel.com/neighborhood-guide-memphis-barbecue), [Bartlett parks](https://www.cityofbartlett.org/167/City-Parks-Listing). Local references describe geography, not practice partnerships.

## Remaining

1. **Review capacity before public launch:** Bryan approved the new `hoffman-orthodontics-reviews` project under Alpha Dog's Firebase Payment account and a $10/month allowance. The restricted key is saved privately in the Pages production environment. Google caps review lookups at 10/day and 5/minute; all six unused Places methods have a zero daily quota. This conservatively stays under the allowance without relying on shared free credits, but ten homepage loads can exhaust the daily cap. The genuine profile link remains available after quota exhaustion. Review this staging cap against expected launch traffic before increasing it. See README for configuration and cost calculations. Local Wrangler remains unauthenticated; deployment uses the existing Git integration.
2. **Practice confirmation:** approve clinical/marketing drafts, verify published hours and fax remain current, supply pricing ranges/plan terms/insurance details if numeric cost content is desired. Hours were found, so there is no need to ask the practice to recreate them from scratch.
3. **Jotform:** explicitly deferred by Bryan; embed and submission recipient still needed. `#form` lands on the current phone/email consultation section.
4. **Before/after photographs:** no verified, consented Hoffman patient case set supplied. Template/other-practice images are not presented as Hoffman outcomes.
5. **Launch only:** domain transition, remove noindex in the approved production build, verify both domain variants, sitemap and any host-level indexing controls.
6. **Legacy URL coverage:** the current public sitemap has seven routes, all preserved. Rules also cover relevant exported aliases. Obtain a Search Console indexed-URL export before launch to identify any URLs outside the public sitemap/export. Old empty `/blog/` and `/thank-you/` placeholders have no equivalent published content and are not redirected indiscriminately to Home.

## Verification

- Astro check: zero errors/warnings; production build: 27 HTML pages (26 content pages plus 404).
- Review handler tests cover server-fixed upstream configuration, five-star selection/date ordering, unsafe/malformed data, missing configuration, unsupported methods, cross-site requests, and redacted provider failures.
- Cloudflare Pages Functions compile. Local Pages runtime correctly serves the unconfigured endpoint as a safe JSON 503.
- All 18 legacy redirect rules resolve with HTTP 301 and successful final destinations in the local Pages runtime.
- Local audit checked 854 internal links, anchors, and assets without errors.
- Browser: all 26 content pages at 1440 and 320px widths had no horizontal overflow; mobile menu/Escape, consultation anchor, phone targets, and keyboard FAQ expansion verified. FAQ schema matches all 20 visible questions.

- Isolated launch-mode build verified all 26 canonical URLs and sitemap entries; 404 stays noindex. The deployed staging build remains noindex.
- Local-only synthetic review fixtures verified safe text rendering (no inserted scripts), live rating display, read-more expansion, mobile carousel movement, and attribution. No fixture content is included in the site build.
- Live connection verified October 6: deployment `83264313-5719-4b19-8e66-11bd0d8961e4`, commit `dbf2ad3`; endpoint HTTP 200 with JSON and browser/CDN `no-store` headers. Four real cards, newest-first dates, author avatars and source links, live hero rating, and desktop/mobile slider controls verified. No horizontal overflow at 1440px or 390px. Staging retains `noindex, nofollow`.
