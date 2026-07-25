# Typography V1 — Publico Headline integration report

## 1. Executive summary

Publico Headline Medium is integrated as the restricted editorial display face for the homepage. The Hero, primary chapter headings, selected editorial H3 headings, large quotation treatments and selected statistics now use the real licensed font at weight 500. Body copy and interface typography remain on the existing sans-serif stack.

The implementation is typography-only. Content, photography, navigation structure, travel facts, FAQ content, footer content and JavaScript behavior were not changed.

## 2. Font files discovered

The licensed files remain in `assets/fonts/publico-headline/` with their supplied names:

| File | Format signature | Size | SHA-256 |
|---|---|---:|---|
| `PublicoHeadline-Medium-Web.woff2` | WOFF2 | 75,592 bytes / 73.82 KiB | `FC22E85A7DF438ED25E4D940B9EEADD6B972A85DEB3E850FAE7A5D3EAB2BB384` |
| `PublicoHeadline-Medium-Web.woff` | WOFF | 119,028 bytes / 116.24 KiB | `378454FB827316B209C906803F82038927893C6C3F701DC134D8FD3EC64B2678` |

No font file was renamed, converted, subset, regenerated, copied, edited or moved.

## 3. License README status

The font subdirectory does not contain its own README. The governing local note is `assets/fonts/README.md`. It identifies Commercial Type as the vendor, Dejan Donev as the license holder and self-hosted web use on `terramadre2026.org` as the licensed use.

The note prohibits redistribution, conversion, subsetting, renaming, modification and use outside the licensed project/domain. It does not create a self-hosting blocker for this project, so integration proceeded.

## 4. Macedonian Cyrillic validation

Validation passed.

- `review/typography-v1/validate-woff.mjs` reads only the supplied WOFF container metadata and Unicode character map.
- It tested 62 unique characters from the requested alphabet and homepage vocabulary.
- The font uses a Unicode cmap format 4 table for these characters.
- Missing characters: none.
- Browser validation confirmed the loaded `Publico Headline` face at weight 500 for `Ѓ`, `Ќ`, `Ѕ`, `Љ`, `Њ`, `Џ`, their lowercase forms and the requested homepage words.
- The rendered specimen showed no replacement boxes, clipped accents or silent mixed-glyph fallback.

The local QA page is not linked from the site navigation or sitemap.

## 5. `@font-face` implementation

One declaration was added to `assets/css/main.css`:

```css
@font-face {
  font-family: "Publico Headline";
  src:
    url("../fonts/publico-headline/PublicoHeadline-Medium-Web.woff2") format("woff2"),
    url("../fonts/publico-headline/PublicoHeadline-Medium-Web.woff") format("woff");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
```

There is no `local()` source, Base64/data URI, `unicode-range`, synthetic style or duplicate declaration.

## 6. CSS token changes

The typography tokens are:

```css
--font-display: "Publico Headline", Georgia, "Times New Roman", serif;
--font-body: Inter, "Aptos", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
--font-ui: Inter, "Aptos", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

Publico components explicitly use weight 500 and `font-synthesis: none`. Publico is never requested at italic or at an unavailable weight.

## 7. Components using Publico

- Hero H1;
- all primary homepage chapter H2 headings;
- the travel-section H2;
- the final CTA H2;
- biodiversity panel editorial H3 headings;
- the large editorial statement;
- the Vanja pull quote;
- the large event statistics;
- decorative biodiversity Roman numerals.

## 8. Components retaining the sans-serif

- body paragraphs and chapter ledes;
- Hero supporting paragraph;
- navigation and mobile menu;
- buttons and text links;
- brand and footer identity;
- eyebrows, labels, metadata and captions;
- FAQ questions and answers;
- travel price and currency label;
- travel fact values and supporting labels;
- itinerary and inclusion headings;
- Turin location list;
- phone number and legal/disclaimer text.

## 9. Hero typography adjustments

The desktop line logic remains exactly:

1. `Зад секој`
2. `вкус`
3. `стои човек.`

Desktop settings were rebalanced for Publico’s metrics with a `7vw` scale limited by `11.5vh`, a 7.7rem maximum, `0.91` line-height and `-0.018em` tracking. The vertical-height cap keeps the Hero at exactly `100svh` on 1366×768 without shrinking the 1440×900 presentation. `вкус` remains enlarged and offset as the centre of the composition.

Mobile uses its own scale: `clamp(2.2rem, 9.5vw, 2.75rem)`, `0.95` line-height and a smaller focus offset. At 390px the title block is approximately 200px wide instead of 269px, stopping at the portrait edge rather than crossing the face. All three intended lines remain single lines, while the approved mobile image crop is unchanged.

The Hero paragraph moved back to the body sans-serif because it is supporting prose, not a display heading.

## 10. Chapter typography adjustments

- H2 headings use weight 500, `0.98` line-height, `-0.018em` tracking, balanced wrapping and no hyphenation.
- Biodiversity editorial H3 headings use Publico at weight 500; functional travel and itinerary H3 headings remain sans-serif.
- The pull quote was reduced to `clamp(3rem, 5.5vw, 5.5rem)` so it remains editorial without competing with the Hero or overflowing at 1024–1440px.
- Large statistics use Publico 500 with restrained `-0.035em` tracking.
- Synthetic italic was removed from the display-face quotation and Roman-numeral treatments.
- Travel price, facts and phone numerals remain bold sans-serif for functional clarity.

## 11. Font loading and file-size findings

- Modern-browser load count: one font file, the 75,592-byte WOFF2.
- The WOFF fallback is present second in `src`, but is not preloaded and is not selected by the tested WOFF2-capable browser.
- One WOFF2 preload is present above the stylesheets and is consumed immediately by the Hero H1.
- `font-display: swap` preserves visible content during loading.
- Browser CSS Font Loading API status reached `loaded`, and the computed Hero and chapter families resolved to the Publico stack.
- Both local font URLs returned HTTP 200.
- The Python preview server reports the files with the generic `application/octet-stream` MIME type; same-origin browser loading still succeeded without CORS failure. Production Cloudflare headers should be checked for the standard `font/woff2` and `font/woff` types before launch.

No JavaScript font loader was added.

## 12. Layout-shift and fallback findings

A controlled missing-family test forced the Georgia/Times fallback while retaining the production layout:

- desktop H1 block width changed from approximately 610px to 569px; height remained approximately 287px;
- mobile H1 block width changed from approximately 200px to 186px; height remained approximately 111px;
- content remained visible;
- CTAs remained inside the Hero;
- no horizontal overflow occurred at 390×844, 720×450 or 1440×900.

The measured metric change is bounded and does not cause overlap or architecture breakage. The critical WOFF2 preload reduces the duration of the swap. No numeric CLS value is claimed because the local browser surface did not expose a reliable PerformanceObserver trace for this run.

## 13. Accessibility checks

- Semantic headings and the single H1 were preserved.
- Duplicate IDs: none.
- Text remains selectable HTML; no text was converted to images or outlines.
- Existing contrast, focus states and reduced-motion behavior remain unchanged.
- Publico renders at Medium rather than a thin weight.
- Macedonian accents and distinctive glyphs remain legible.
- No large display heading uses hyphenation.
- No clipped display text or horizontal page scrolling was found.
- A 720×450 reflow check, equivalent to a 1440×900 layout at 200% zoom, retained visible H1 and CTAs without horizontal overflow. The Hero grows vertically at this zoom-equivalent size instead of clipping content.
- Body, navigation, buttons, price details and FAQ controls retain the more functional sans-serif.

## 14. Responsive checks

The final browser matrix passed:

| Viewport | Publico loaded | Hero line logic | Hero height | Page overflow | Pull-quote overflow |
|---|---|---|---|---|---|
| 360×800 | yes | 3 single lines | 95svh | none | none |
| 390×844 | yes | 3 single lines | 95svh | none | none |
| 768×1024 | yes | 3 single lines | 100svh | none | none |
| 1024×768 | yes | 3 single lines | 100svh | none | none |
| 1366×768 | yes | 3 single lines | 100svh | none | none |
| 1440×900 | yes | 3 single lines | 100svh | none | none |
| 1920×1080 | yes | 3 single lines | 100svh | none | none |

The Hero face and pomegranate remained visible in the reviewed desktop and mobile captures. FAQ controls, travel facts, price presentation, final CTA and footer retained their existing structure and readable sans-serif treatment.

## 15. Screenshot paths

- `review/typography-v1/typography-v1-hero-1440x900.png`
- `review/typography-v1/typography-v1-hero-390x844.png`
- `review/typography-v1/typography-v1-homepage-1440x900.png`
- `review/typography-v1/typography-v1-travel-1440x900.png`
- `review/typography-v1/typography-v1-cyrillic-specimen.png`

These captures are review-only assets and are not referenced by production HTML.

## 16. Remaining blockers and production checks

- No font-license blocker is present for self-hosted use on `terramadre2026.org`.
- Confirm Cloudflare Pages serves `.woff2` and `.woff` with their standard font MIME types before production launch.
- The existing photography-rights and content-approval blockers documented elsewhere remain unchanged and are outside this sprint.

## Local preview

From the repository root:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`.

Nothing was deployed, committed, pushed or published during this sprint.
