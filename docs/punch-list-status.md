# October 6, 2026 punch-list implementation

## Scope

Follow Kyle's requested edits and Bryan's instructions. Bryan clarified that separate practice sign-off is not a development or launch gate. Use the supplied and published practice details; retain the published fax without an additional confirmation step. Kyle’s October 7 feedback supersedes the pricing request: leave numbers out and explain the exact fee will be provided in writing at the first visit. Bryan supplied Jotform for staging. The domain switch remains deferred.

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
- Pricing rechecked October 7 directly on the live Home, New Patients, FAQ, and Treatments pages, in the supplied HTML export, and in the handoff/review emails and targeted Gmail searches. No treatment prices or monthly payment amounts found. The $250 in the transition email is an agency onboarding payment, not a patient treatment price. Kyle explicitly requested typical ranges to answer "How much do braces cost in Memphis" and wrote "Needs numbers from the practice."
- [Google Maps listing](https://maps.app.goo.gl/JrZmSSodFu2KYgvYA), inspected October 6: Monday–Thursday **8 a.m.–5 p.m.**, Friday–Sunday **closed**. Google flags possible holiday differences. Coordinates **35.1142387, -89.8898953**; these differ from the old website’s approximate coordinates.
- Same Google listing supplies live reviews through Places API (New). Google's official Place ID finder verified `ChIJA3iJOgCFf4gRD9BScWOg2mc` against the exact name and Wheelis Drive address.
- Gmail handoff: `1a0cabe86287cc68` (Rooster Grin export), `1a0c943bbc7a4747` (client transition/Google Business Profile access), `1a112410038f3d03` (Kyle’s review and Bryan’s explicit Jotform/domain deferral). No pricing sheet, confirmed financing terms, review embed, or Places API configuration found in those threads or the targeted email searches. No messages sent.
- Supplied website export and assets remain the source for doctor biography, credentials, offerings, and original FAQ details.
- General education: [ABO patient information](https://exam.americanboardortho.com/patients/), [AAO first evaluation](https://aaoinfo.org/whats-trending/when-should-your-child-see-an-orthodontist/), [AAO aligners](https://aaoinfo.org/treatments/aligners/), [AAO adult questions](https://aaoinfo.org/orthodontists-respond-to-frequently-asked-questions-from-adults-considering-treatment/), [AAO emergency guidance](https://aaoinfo.org/whats-trending/what-is-an-orthodontic-emergency/).
- Local context: [Memphis Travel neighborhoods](https://www.memphistravel.com/neighborhoods), [East Memphis](https://www.memphistravel.com/neighborhoods/east-memphis), [regional landmarks](https://www.memphistravel.com/neighborhood-guide-memphis-barbecue), [Bartlett parks](https://www.cityofbartlett.org/167/City-Parks-Listing). Local references describe geography, not practice partnerships.

## October 7 feedback

- Cost & financing is now in the desktop and mobile main navigation. The menu switches to its collapsed layout earlier to accommodate the added link.
- Cost-page introduction leads with the free consultation, most insurance accepted, flexible payment plans, and an exact written fee at the first visit. The cost FAQ matches. Pricing numbers are intentionally omitted; none are awaited.
- Supplied Jotform `262794560250055` is embedded on Contact at `#form`, with automatic height adjustment and a direct-form fallback. The privacy disclosure reflects this addition. Form submission/notification delivery remains untested; no test message has been sent.
- Hero rating now includes visual stars filled according to the live aggregate rating. Fixed a loading bug: direct visits to `/#reviews` now load when the review section is visible, even when the hero is outside the viewport.
- OSM’s reference uses Trustindex. Bryan declined Trustindex; retain the custom Google slider and explain the existing ten-request daily cap. No quota/billing increase made. The cap can still cause the fallback-only state after usage is exhausted.
- Kyle says service-area pages are fine for launch; no further expansion in this round. He may send payment terms later, but prices are no longer an outstanding input. Before/after cases remain conditional on supplied material.

## Completed reviews setup — operating notes

Kyle requested a homepage Google Reviews slider (same approach as OSM) and a rating line near the hero CTA. Both are implemented. He specified neither five-star-only filtering nor a request limit. Five-star written reviews, newest first within Google's selection, follow the existing implementation preference.

The 10/day and 5/minute Google request caps are implementation settings for Bryan's approved $10/month allowance, not unfinished Kyle punch-list items. All six unused Places methods have zero daily quota. Ten homepage loads can exhaust the daily cap, after which the genuine Google profile link remains available. The key is stored privately in Cloudflare. See README for configuration and cost details; this clarification does not change the approved billing allowance.

## Verification

The recorded checks cover builds, functionality, desktop/mobile layout, and the measured homepage PageSpeed pass completed October 7. Kyle subsequently removed the pricing requirement and Bryan supplied Jotform on October 7. Launch indexing remains deferred until the domain switch.

- [Google PageSpeed Insights, October 7, 2026 at 12:06 a.m. EDT](https://pagespeed.web.dev/analysis/https-hoffman-orthodontics-pages-dev/387l22h6f2?form_factor=mobile): live staging homepage scored **97/100 mobile** and **100/100 desktop** for performance. Mobile: FCP 1.8 s, LCP 2.3 s, TBT 0 ms, CLS 0.008. Desktop: FCP/LCP 0.4 s, TBT 0 ms, CLS 0.002. Lighthouse 13.5.0 lab tests; real-user field data is not yet available. This measures the current homepage before the deferred Jotform embed. The report also records Accessibility 96, Best Practices 100, and SEO 66; the SEO failure is the intentional staging noindex. No performance changes were needed for this pass.

- Astro check: zero errors/warnings; production build: 27 HTML pages (26 content pages plus 404).
- Review handler tests cover server-fixed upstream configuration, five-star selection/date ordering, unsafe/malformed data, missing configuration, unsupported methods, cross-site requests, and redacted provider failures.
- Cloudflare Pages Functions compile. Local Pages runtime correctly serves the unconfigured endpoint as a safe JSON 503.
- All 18 legacy redirect rules resolve with HTTP 301 and successful final destinations in the local Pages runtime.
- Local audit checked 854 internal links, anchors, and assets without errors.
- Browser: all 26 content pages at 1440 and 320px widths had no horizontal overflow; mobile menu/Escape, consultation anchor, phone targets, and keyboard FAQ expansion verified. FAQ schema matches all 20 visible questions.

- Isolated launch-mode build verified all 26 canonical URLs and sitemap entries; 404 stays noindex. The deployed staging build remains noindex.
- Local-only synthetic review fixtures verified safe text rendering (no inserted scripts), live rating display, read-more expansion, mobile carousel movement, and attribution. No fixture content is included in the site build.
- Live connection verified October 6: deployment `83264313-5719-4b19-8e66-11bd0d8961e4`, commit `dbf2ad3`; endpoint HTTP 200 with JSON and browser/CDN `no-store` headers. Four real cards, newest-first dates, author avatars and source links, live hero rating, and desktop/mobile slider controls verified. No horizontal overflow at 1440px or 390px. Staging retains `noindex, nofollow`.
