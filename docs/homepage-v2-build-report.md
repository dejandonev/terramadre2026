# Terra Madre Salone del Gusto 2026 — Homepage V2 build report

**Current version:** Homepage V2.1 — Authentic Photography Integration  
**Implemented:** 24 July 2026  
**Status:** functional and visually validated local implementation; production approval is blocked by image rights and outstanding written source approvals  
**Deployment:** not performed

## 1. Executive summary

The homepage is an eleven-chapter Macedonian editorial microsite that introduces the people and ideas behind Terra Madre Salone del Gusto 2026 before presenting the organized travel offer.

Homepage V2.1 preserves the approved V2 narrative, design system and facts while integrating authentic photographs supplied in the local `source-asset/` archive. The opening is now an eight-image documentary mosaic. The story, biodiversity, Turin, Macedonia and historical-reportage chapters use responsive local derivatives with responsible captions and alt text.

Official event information, Slow Food Macedonia context, Hera Tours Bitola travel information and the historical Vanja Todorovska quotation remain clearly separated.

The page is ready for stakeholder review, not public production. The source files contain no reliable rights/license metadata, so legal approval and attribution instructions are required before deployment.

## 2. Public implementation

The V2.1 homepage includes:

1. fixed progressive-enhancement navigation;
2. full-viewport photo-led opening;
3. Why It Matters editorial split;
4. three image-backed biodiversity panels;
5. event-scale statistics;
6. Turin chapter with archive/general city photography and location list;
7. Slow Food Macedonia archive chapter;
8. historical Vanja reportage chapter;
9. practical Hera Tours travel chapter;
10. accessible FAQ;
11. final call to action and independent-site disclosure.

Only `index.html` is within the completed V2/V2.1 page scope. Secondary pages remain initial Bootstrap placeholders and need a separate consistency sprint.

## 3. Content and fact decisions

- The event is always named **Terra Madre Salone del Gusto** in public prose.
- Event dates: **24–27 September 2026**.
- Travel dates: **23–28 September 2026**.
- Travel price: **350 EUR per person**.
- Application deadline: **21 August 2026**.
- Minimum group: **35 registered travellers**.
- General event entry is described as free; selected programmed activities may require separate paid tickets.
- The public copy does not invent a hotel, room type, deposit, cancellation, baggage, seat or departure-point detail.
- No supplied image is used to identify an unsupported person, role or exact 2026 program location.
- The 2024 Macedonia image and the Vanja material are labelled as archive/historical context.

Known source conflicts remain recorded in `content/sources.md`. The 700+ producer figure follows the approved sprint and March 2026 presentation but must be reconfirmed before publication.

## 4. Photography integration

All 55 files in the supplied folders were inventoried and visually inspected. The actual repository folder is `source-asset/`, singular.

Public files:

- 52 responsive WebP derivatives in `assets/images/optimized/`;
- one 1200 × 630 JPEG in `assets/images/social/`;
- 18 `<img>` elements in the homepage;
- eight decorative opening images;
- ten informative chapter images.

No source original is referenced by `index.html`. No stock, remote or generated image was added. The empty `source-asset/travel/` folder remains represented by an intentionally empty `assets/images/optimized/travel/` directory; the travel chapter does not borrow misleading event photography.

The complete selection, rejection rationale, chapter mapping and output details are in `docs/homepage-v2-1-photography-report.md`.

## 5. Visual and UX decisions

- Creative concept: “Зад секој вкус стои човек.”
- Dark forest, cream, earth, terracotta and restrained red role-based palette.
- System serif display stack and system sans body stack; no font download.
- Documentary opening mosaic with a solid clipped readability veil; no gradients.
- Initial translucent dark header for contrast over photography, with the established light scrolled/open state.
- Large editorial headings, controlled reading widths and mobile-limited whitespace.
- Photo-backed biodiversity panels instead of generic icons or cards.
- Turin photography is explicitly an archival event view plus general city views, not a visual map of specific 2026 activities.
- Macedonia photography is paired with an archive disclaimer.
- Vanja’s quote uses a food detail rather than an unsupported portrait identity.
- The travel chapter stays practical and does not imply that event photography depicts the paid service.

## 6. SEO and sharing

The homepage includes:

- canonical URL;
- Macedonian title and description;
- Open Graph title, description, URL, site name, locale and image metadata;
- Twitter summary-large-image metadata;
- explicit social-image alt text.

`assets/images/social/og-terramadre2026.jpg` is a 1200 × 630 derivative from the supplied official campaign visual. Its technical integration does not grant social-use permission; approval is recorded as pending.

Event JSON-LD remains intentionally absent until the final production facts, official image permission and source approvals are complete.

## 7. Accessibility

- `lang="mk"`.
- One `h1` and logical heading order.
- Skip link and semantic landmarks.
- Keyboard-operable mobile menu with `aria-expanded`, Escape handling and focus return.
- FAQ buttons with `aria-controls` and `aria-expanded`.
- FAQ content remains available without JavaScript.
- Visible `:focus-visible` and practical touch targets.
- Reduced-motion fallback.
- Reveal effects are progressive enhancement.
- All 18 images have explicit width, height and alt attributes.
- Decorative mosaic images use empty alt and are hidden from assistive technology.
- Informative images use concise Macedonian descriptions without invented identities.
- Archive captions qualify historical material.

## 8. Responsive coverage

Validated browser sizes:

- 360 × 800;
- 390 × 844;
- 768 × 1024;
- 1024 × 768;
- 1366 × 768;
- 1440 × 900;
- 1920 × 1080.

No tested viewport permits horizontal scrolling. The opening grid simplifies at tablet and phone widths. The Turin support photos stack on phones. Statistics, travel facts, inclusions, itinerary, Macedonia media and reportage media reflow into readable single-column patterns.

## 9. Performance

- No JavaScript framework, animation library or Bootstrap JavaScript.
- One small deferred vanilla JavaScript file.
- No web-font downloads or remote images.
- Responsive `srcset`/`sizes` on all public photography.
- Intrinsic dimensions on all images.
- One `fetchpriority="high"` opening image.
- Native lazy loading on below-fold informative photography.
- WebP derivative library: 52 files / 3.92 MiB.
- Largest WebP: 289.0 KiB.
- Opening derivative set referenced by the page: 8 files / 258.1 KiB.
- Mobile visible mosaic subset: 5 files / 160.7 KiB; hidden CSS tiles may still be fetched, so this is not a guaranteed transfer total.
- All 18 tested selected sources: 744.1 KiB.
- Open Graph JPEG: 253.9 KiB.

## 10. QA results

- `node --check assets/js/main.js`: passed.
- Images: 18.
- Missing alt attributes: 0.
- Missing width attributes: 0.
- Missing height attributes: 0.
- High-priority images: 1.
- Source-original references: 0.
- Duplicate IDs: 0.
- `h1` count: 1.
- Visible TODO text: 0.
- CSS brace balance: 0.
- `!important` rules: 0.
- Gradient rules: 0.
- Browser console errors/warnings: 0.
- Local HTTP requests: 64 checked / 64 returned 200.
- WebP validation: 52 valid files.
- Open Graph validation: JPEG, 1200 × 630.
- Mobile menu open/close behavior visually checked.
- Page remains readable and navigable without JavaScript by construction and progressive-enhancement CSS.

Review screenshots:

- `review/homepage-v2-1/homepage-v2-1-1440x900.png`
- `review/homepage-v2-1/homepage-v2-1-390x844.png`
- `review/homepage-v2-1/homepage-v2-1-opening-1440x900.png`
- `review/homepage-v2-1/homepage-v2-1-travel-1440x900.png`

## 11. Rights status

Rights, creator, ownership, consent and attribution metadata were not present in the supplied files. EXIF on the Turin lead confirms a capture date/camera workflow but not authorship or permission.

`docs/image-rights-register.md` records each of the 19 public uses, including the social derivative. All are marked:

- technically integrated;
- editorially selected;
- legally pending.

Source-folder placement is not treated as permission.

## 12. Remaining production blockers

1. Written image rights and derivative/crop permission.
2. Consent confirmation where people are recognizable.
3. Required attribution wording and placement.
4. Social-sharing permission for the campaign visual.
5. Final Hera Tours written offer/source approval.
6. Written approval for Slow Food Macedonia copy and archive use.
7. Original Vanja reportage context and publication approval.
8. Final official reconfirmation of the 700+ producer figure.
9. V2 visual/content alignment for secondary pages.

## 13. Files modified for V2.1

- `index.html`
- `assets/css/main.css`
- `assets/css/components.css`
- `content/homepage-v2.md`
- `content/homepage-assets.md`
- `content/sources.md`
- `docs/homepage-v2-build-report.md`
- `README.md`

## 14. Files and directories created for V2.1

- `assets/images/optimized/homepage/`
- `assets/images/optimized/turin/`
- `assets/images/optimized/macedonia/`
- `assets/images/optimized/reportage/`
- `assets/images/optimized/travel/`
- `assets/images/social/`
- `docs/homepage-v2-1-photography-report.md`
- `docs/image-rights-register.md`
- `review/homepage-v2-1/source-audit/`
- `review/homepage-v2-1/homepage-v2-1-1440x900.png`
- `review/homepage-v2-1/homepage-v2-1-390x844.png`
- `review/homepage-v2-1/homepage-v2-1-opening-1440x900.png`
- `review/homepage-v2-1/homepage-v2-1-travel-1440x900.png`

## 15. Release state

Nothing was deployed, committed, pushed or published. Source originals were not modified, moved or deleted.
