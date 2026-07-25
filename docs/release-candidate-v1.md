# Release Candidate v1.0

## Summary

The Version 1.0 homepage has completed its production-polish pass without changing its editorial structure, story, chapter order, typography system, colour identity, navigation structure, or motion language.

The principal technical release risk identified in the editorial review—unoptimised editorial photography—has been resolved. Accessibility focus visibility, muted text contrast on cream surfaces, image-driven layout stability, structured data, and favicon support have also been completed.

The homepage is technically strong and visually stable. Links to unfinished destinations and invalid sitemap exposure have now been resolved. The repository remains unavailable for production release until the documented travel, editorial, and image-rights approvals are recorded.

## Implemented Improvements

- Generated responsive AVIF, WebP, and fallback PNG/JPEG derivatives for all 13 below-the-fold editorial images.
- Added width-based `srcset` and accurate `sizes` values to Chapter 01 and Chapters 02–04.
- Preserved every approved source photograph and campaign master without modification.
- Kept the Hero image pipeline unchanged because it already uses responsive AVIF/WebP/PNG sources, preload, and `fetchpriority="high"`.
- Preserved lazy loading and asynchronous decoding for all below-the-fold editorial images.
- Stabilised People scene height by constraining loaded photography to the scene’s existing 700–800px desktop height system.
- Added an SVG favicon using the existing project palette.
- Added Schema.org `WebSite` structured data.
- Strengthened keyboard focus visibility with a two-layer treatment that remains identifiable on both light paper and dark forest surfaces.
- Applied a minimally darker contextual muted text value on cream sections without changing the global colour tokens.

High-priority review recommendations that would alter story structure, scene count, CTA order, transitions, or typography were not implemented because they conflict with the explicit Release Candidate scope and the Creative Bible’s locked chapters.

## Performance Notes

- The 13 original editorial source files total approximately 13.7 MB.
- The responsive AVIF candidates selected during the 1440px browser pass total approximately 1.08 MB across the complete page, a reduction of about 92% compared with loading the raw sources.
- Editorial images remain lazy-loaded, so the full 1.08 MB set is not part of the initial Hero request.
- The largest 4.3 MB Turin source is delivered as an appropriately sized responsive derivative.
- The 3.1 MB campaign PNG is delivered as a responsive AVIF where supported, with WebP and PNG fallbacks.
- All 14 rendered images retain explicit intrinsic dimensions.
- At 1440×900, total page height remained exactly 23,317px before and after loading all lazy editorial images.
- Editorial scene heights also remained unchanged before and after image loading, eliminating the previously observed image-driven layout growth.
- Publico preload, Google Fonts preconnects, and `display=swap` were already correctly configured and were retained.
- Bootstrap was not removed because `AGENTS.md` explicitly requires the approved Bootstrap 5.3 CDN setup.
- Duplicate and legacy CSS cleanup was not performed because it was classified as low priority in the editorial review and was outside this sprint’s implementation scope.

## Accessibility Notes

- Confirmed one H1 and a logical H2/H3 hierarchy.
- Confirmed `lang="mk"` on the homepage.
- Confirmed useful alternative text on all 14 images; no missing or empty image alternatives.
- Confirmed no duplicate IDs.
- Confirmed every `aria-controls` reference resolves to an existing element.
- Confirmed FAQ controls update `aria-expanded` and panel visibility correctly.
- Confirmed the mobile navigation exposes state and closes after link selection.
- Confirmed the skip link is present and keyboard focusable.
- The focus indicator now combines the existing yellow outline with a dark outer ring, providing a visible boundary on both light and dark surfaces.
- Contextual muted text on cream now uses `#666a62`, measuring approximately 4.53:1 against `#f1e8d4` and meeting WCAG AA for normal text.
- Reduced-motion support remains present.

## SEO Notes

- Verified the homepage title and meta description.
- Verified canonical URL.
- Verified Open Graph title, description, URL, locale, site name, image, dimensions, and image alternative text.
- Verified Twitter summary card metadata and image alternative text.
- Verified the 1200×630 Open Graph image dimensions.
- Verified `robots.txt` and its production sitemap reference.
- Verified `sitemap.xml`.
- Added Schema.org `WebSite` structured data with production URL, Macedonian language, project name, and description.
- Added an SVG favicon and confirmed it returns the correct image MIME type.
- Verified that the official external website URL resolves successfully.
- Verified the published event dates, Turin city-centre location, and free general entry against the [official Terra Madre Salone del Gusto 2026 information](https://2026.terramadresalonedelgusto.com/en/dates-and-location/).

## Remaining Known Issues

### Production blockers

1. The travel offer’s dates, price, accommodation, departure details, minimum traveller count, deadline, telephone number, email address, organiser details, inclusions, exclusions, and legal wording require final written stakeholder approval.
2. A final proofread and factual sign-off by the Macedonian editorial owner and an authorised Slow Food Macedonia representative are not recorded in the repository.
3. `docs/image-rights-register.md` states that no integrated homepage or social image is production-approved. Creator, owner, public-web permission, derivative permission, subject consent, social-sharing permission, and attribution requirements remain unconfirmed.

### Verification still required

- Native Edge, Firefox, and Safari testing remains outstanding. The completed browser pass used the project’s local Chromium-based in-app browser.
- Cloudflare Pages production headers, caching, redirects, domain configuration, and rollback settings remain unconfirmed in `docs/deployment.md`.
- Client, editorial, design, and technical approvals in `docs/launch-checklist.md` remain unsigned.

### Intentionally deferred

- CTA/FAQ reordering.
- Reduction of People or Turin scenes.
- Chapter 02 → Chapter 03 transition changes.
- Editorial statement typography rebalancing.
- Active navigation state.
- Catalogue CSS consolidation and legacy selector removal.

These items were not changed because this sprint explicitly prohibited changes to editorial structure, story, chapter order, typography, colours, and components, or because the editorial review classified them as low priority.

## Final Blocker Resolution

### Blockers resolved

- Removed the homepage link to unfinished `pages/faq.html` and retained the information as non-interactive text.
- Audited every anchor in `index.html` and all seven retained scaffold pages.
- Replaced scaffold navigation links to unfinished destinations with links to completed homepage sections where equivalent confirmed content exists.
- Rendered “Галерија” as non-interactive text because no completed gallery destination exists.
- Added `noindex, nofollow` to all seven unfinished scaffold pages.
- Removed every unfinished secondary URL from `sitemap.xml`.
- Confirmed that the production sitemap contains exactly one URL: `https://terramadre2026.org/`.
- Confirmed that canonical metadata, Open Graph URL, Schema.org URL, `robots.txt`, and `sitemap.xml` consistently use `https://terramadre2026.org/`.
- Confirmed there are no empty links, `href="#"`, `javascript:void(0)`, links to unfinished page files, broken internal paths, or broken fragments.
- Confirmed that every navigation and Hero anchor resolves to an existing homepage section.
- Confirmed that the registration CTA and displayed email links use `mailto:t.a-heratours@hotmail.com`.
- Confirmed that the displayed telephone links use `tel:+38977500989`.
- Confirmed that the official Terra Madre external link resolves to the live 2026 website.
- Confirmed that all 195 local homepage asset references exist.
- Confirmed that all 189 generated AVIF, WebP, PNG, and JPEG responsive/fallback image files are valid and readable.
- Confirmed valid structured data and a loadable SVG favicon.
- Confirmed zero console errors.
- Confirmed no broken images or horizontal overflow at 1440×900, 1280×800, 768×1024, 390×844, and 320×568.
- Confirmed the mobile menu opens, closes, releases the page scroll lock, and reaches its target section.

### Blockers still open

#### PENDING STAKEHOLDER APPROVAL — travel information

The following public fields were preserved exactly as supplied and were not altered:

- travel dates: 23–28 September 2026;
- price: 350 €;
- three hotel nights with breakfast;
- tourist tax;
- departure from Bitola;
- minimum 35 travellers;
- registration deadline: 21 August 2026;
- telephone: 077 500 989 / `+38977500989`;
- email: `t.a-heratours@hotmail.com`;
- transport and included services;
- travel insurance and personal expenses as exclusions;
- the organiser name “Hera Tours Bitola”;
- the relationship between the organised trip and the Macedonian delegation.

Repository documentation contains project-approved working facts, but also requires a final written and legally reviewed document from Hera Tours Bitola before production publication.

#### PENDING STAKEHOLDER APPROVAL — editorial and participation claims

- Final Macedonian and English proofreading.
- Approval of the “Macedonian delegation” wording and participation description by an authorised Slow Food Macedonia representative.
- Confirmation of the 2022, 2024, and archival captions and their contextual accuracy.
- Final approval of organiser naming and the independent-site disclaimer.

#### PENDING STAKEHOLDER APPROVAL — photography and social media

- Creator and rights owner for every integrated photograph and campaign visual.
- Public website permission.
- Permission to create responsive derivatives.
- Consent for recognisable people.
- Required attribution wording and placement.
- Permission to use the Open Graph/Twitter derivative for social sharing.

`docs/image-rights-register.md` must record the approving person and approval date for each selected asset.

### Exact stakeholder decisions required

1. An authorised Hera Tours Bitola representative must approve or correct every travel field listed above, confirm the exact registered organiser name, and provide the final legally reviewed offer.
2. An authorised Slow Food Macedonia representative must approve the delegation/participation wording, historical context, and archive captions.
3. The project owner must provide documented image rights, consent, derivative, attribution, and social-sharing decisions for every image used by `index.html` and social metadata.
4. The editorial owner must record final Macedonian and English proofreading approval.
5. The client must complete the Editorial, Design, Technical, and Client approval fields in `docs/launch-checklist.md`.
6. The technical owner must complete native Edge, Firefox, and Safari testing and confirm Cloudflare Pages headers, caching, redirects, domain configuration, and rollback settings.

### Final recommendation

**NOT READY**

All repository-resolvable link, sitemap, domain-consistency, asset, interaction, and responsive blockers are closed. Production publication remains blocked by explicit travel, editorial, and image-rights approvals that cannot be inferred or created from the repository.

**Confidence: 99%**

## Release Recommendation

**NOT READY**

The homepage implementation and production routing scope are technically suitable for release. Deployment should wait until the travel offer, Slow Food Macedonia participation language, archive context, image permissions, proofreading, browser matrix, Cloudflare configuration, and launch approvals are documented.

**Confidence: 99%**
