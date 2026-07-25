# Editorial Review v1

## Executive Summary

Terra Madre Salone del Gusto 2026 already has a distinctive editorial identity. The opening sequence—Hero, silent interlude, and Chapter 01—is the strongest part of the experience. It feels deliberate, culturally grounded, and unusually confident for an event website. The documentary photography, restrained palette, Publico headlines, and generous paper-like space establish trust before practical information appears.

The experience loses momentum in its middle. Chapters 02–04 contain twelve consecutive image-and-statement spreads with nearly identical dimensions, spacing, and alternating composition. Each spread is individually strong, but repetition gradually makes the exhibition language feel like a template. The journey regains clarity in the practical chapter, although the conversion ending is weakened because the FAQ follows the principal call to action.

From an international web design jury, the project would earn praise for its art direction, photographic dignity, typography, opening narrative, and ability to express place without travel-industry clichés. The likely criticism would focus on excessive middle-page repetition, insufficient responsive image optimisation, a few accessibility details, and an ending that does not give the primary CTA the final word.

The site is close to editorially launch-ready, but its image delivery is not yet performance-ready. Accessibility contrast and focus visibility should also be corrected before public release.

## Strengths

### Storytelling

- The Hero immediately communicates people, food, and place. It feels like a documentary opening rather than a promotional banner.
- Hero → Interlude → Chapter 01 is the clearest and most memorable narrative passage. The interlude creates genuine silence, then Chapter 01 converts emotion into meaning.
- Chapter 01 is the best-balanced spread: the official campaign exhibit is treated as artwork, while the concise text gives it context without competing for attention.
- Chapter 02 makes the project human. The one-person/one-thought structure avoids invented biography and lets the portraits carry emotional authority.
- Chapter 03 expands the scale naturally—from individual lives to Turin as the host city.
- Chapter 04 creates a logical bridge from the international event back to Macedonian participation.
- “Join the Journey” arrives at the correct point in the broader narrative: after inspiration and before commitment.

### Editorial rhythm and transitions

- Scrolling is calm and intentional at the beginning. Large pauses feel purposeful rather than empty.
- The transition from Hero to the warm-paper interlude is excellent.
- Interlude → Chapter 01 is natural: silence becomes an argument about food, people, nature, culture, and the future.
- Chapter 03 → Chapter 04 works well because the background change and subject change clearly move the reader from city to participation.
- Chapter 04 → Join the Journey is conceptually strong. The visual language becomes simpler precisely when the visitor needs facts.
- Individual catalogue scenes generally keep image and statement within the same desktop viewport, preserving the relationship between them.

### Typography

- The Publico and Google Sans pairing is coherent, premium, and appropriate to an editorial institution.
- The single H1 followed by chapter H2s and scene H3s creates a clear semantic and visual hierarchy.
- Body text is comfortably sized, has generous line height, and generally remains within a readable measure.
- Labels, captions, metadata, and programme information are restrained and easy to scan.
- Macedonian Cyrillic renders clearly across desktop and mobile.
- Mobile type remains expressive without becoming illegible or crowded.

### Photography

- The Hero image is the strongest single visual and establishes the project’s identity immediately.
- The official Chapter 01 campaign exhibit deserves its prominent placement and adds a valuable graphic counterpoint to the documentary photographs.
- The selected people photographs feel authentic rather than staged as commercial tourism.
- The vineyard grower, intergenerational scene, cheesemaker, and bread portrait each communicate a distinct emotional value.
- Turin’s panorama and historic café street are especially effective: one establishes scale, while the other closes with intimacy.
- Chapter 04’s archival material gives the Macedonian story documentary credibility, even when an image is less visually polished.
- Images retain natural proportions and are not subjected to distracting overlays, borders, effects, or aggressive facial crops.

### User experience and consistency

- The sticky navigation is concise and the persistent registration action is easy to find.
- The Hero provides both a narrative path and a direct practical path.
- Programme, inclusions, price, key information, and contact details are presented in the order a prospective traveller is likely to need them.
- The practical chapter simplifies the editorial language successfully without feeling like a different website.
- Spacing, alignment, backgrounds, captions, and image treatment remain visually consistent across the long page.
- There is no horizontal overflow at desktop, tablet, or mobile widths.

### Accessibility and performance foundations

- The document has one H1 and a logical H2/H3 hierarchy.
- Images have meaningful alternative text and explicit intrinsic dimensions.
- A skip link is present.
- Keyboard focus styles exist for links, buttons, and FAQ controls.
- FAQ controls expose expanded state and controlled-panel relationships.
- Reduced-motion preferences are respected.
- The Hero has responsive AVIF, WebP, and PNG sources, is preloaded, and receives high fetch priority.
- Below-fold photography is lazy-loaded.
- Publico is self-hosted and preloaded; external font connections are prepared efficiently.

## Weaknesses

### Storytelling and editorial rhythm

- The middle of the page is too long and too uniform. Five People scenes, four Turin scenes, and three Macedonia scenes create twelve consecutive catalogue spreads with almost the same height and roughly the same gap.
- The alternating left/right pattern remains predictable for too long. By late Chapter 02, the reader understands the system and begins to anticipate layout rather than discover content.
- Chapter 01 → Chapter 02 is thematically coherent but spatially overextended. A large Chapter 01 ending, a large People introduction, and substantial whitespace delay the first portrait.
- Chapter 02 → Chapter 03 is the weakest transition. Both chapters use the same paper background, oversized closing/opening typography, and the same spread construction, so their boundaries blur.
- Chapter 03’s opening-ceremony scene and drone/globe scene communicate related ideas about global gathering. The stronger globe scene already carries the chapter’s visual centre.
- At mobile width, the page extends to roughly twenty-six screens. The experience remains readable, but the accumulation risks fatigue before practical information appears.

### Typography

- Several long scene statements use the same near-poster scale as short statements. On desktop, the longest Turin statements occupy six to eight lines and can approach the full height of their scenes.
- Repeating very large statement typography across twelve scenes reduces its impact. A scale intended for emphasis becomes the default texture of the middle chapters.
- The chapter introductions and conclusions are individually elegant, but successive oversized blocks make transitions feel heavier than necessary.
- The travel chapter is highly readable, yet its denser informational rhythm makes the preceding catalogue repetition feel even more pronounced.

### Photography

- The woman-and-child publication photograph is the weakest image in Chapter 02. It is warm and relevant, but its event-snapshot composition and busy background are less visually commanding than the other portraits.
- If Chapter 02 is reduced, that publication image is the clearest candidate for removal or reserve status.
- Turin could work with three images if a tighter chapter is desired. The opening-ceremony image is the most conceptually redundant beside the stronger drone/globe centre.
- The historical Macedonian stand photograph is aesthetically weaker than the contemporary images, but it earns its place through documentary value. Its archival role should remain explicit.

### Transitions and user experience

- The visitor does not always know their position within a page exceeding 23,000 desktop pixels. Navigation has no active chapter state or other quiet progress cue.
- “Story” is broader than the chapter it targets, and there is no direct navigation label for the People chapter.
- The main CTA is not the final page beat. FAQ follows it, so the journey ends in utility questions rather than commitment.
- The CTA itself is prominent and correctly styled, but its placement cannot deliver a true conclusion while additional content remains below it.
- Keyboard order is logical, although placing six FAQ controls after the main CTA reinforces the same weak ending.

### Visual consistency

- Consistency becomes sameness in Chapters 02–04. Scene heights commonly sit near 768px with similar inter-scene gaps, creating a mechanical cadence.
- People, City, and Macedonia use largely duplicated catalogue styling. They look consistent, but the implementation is harder to maintain and invites small future divergences.
- The opening chapters use silence and contrast as narrative tools; the middle chapters rely almost entirely on alternation. This creates an imbalance between a highly composed opening and a more procedural middle.

### Accessibility

- Muted text `#676b63` on the cream background `#f1e8d4` measures approximately 4.46:1, narrowly below the 4.5:1 WCAG AA threshold for normal text.
- The yellow focus outline `#f3bd34` has only about 1.62:1 contrast against the paper background. It is clear on forest green but does not consistently meet the 3:1 non-text contrast expectation on light surfaces.
- The transparent header’s light CTA sits over a bright portion of the Hero photograph. Its text remains understandable, but the control boundary should be verified against the brightest responsive crops.
- Meaningful alt text is present, but repeated editorial images and nearby statements should continue to avoid redundant announcement as content evolves.

### Performance

- The principal performance weakness is the raw below-fold photography. The editorial source images total approximately 13.7 MB.
- The Chapter 01 campaign PNG is about 3.1 MB.
- One Turin photograph is approximately 8064 × 6048 pixels and 4.3 MB; another is about 2.5 MB. These dimensions greatly exceed their rendered size, particularly on mobile.
- Below-fold editorial images do not use responsive `srcset` candidates or AVIF/WebP derivatives. Lazy loading postpones the cost but does not reduce it.
- The first People scenes show a small potential layout shift as loaded image proportions make their rendered scenes grow beyond the reserved minimum height.
- Bootstrap CSS is loaded even though the current homepage does not appear to use Bootstrap component or utility classes. It is render-blocking overhead unless another project requirement still depends on it.
- Legacy travel and CTA selectors remain in the stylesheets after the practical chapter’s evolution.
- Near-identical People, City, and Macedonia rule sets add duplication and maintenance cost.

## Priority Improvements

1. **Create responsive derivatives for every editorial image.** Supply appropriately sized AVIF and WebP sources with JPEG/PNG fallbacks and `srcset`/`sizes`. Prioritise the 4.3 MB Turin image, the 3.1 MB campaign exhibit, and the 2.5 MB panorama. Preserve the originals as archival masters.

2. **Give the main CTA the final word.** Keep FAQ available, but place the decisive CTA after it or repeat a restrained closing CTA after the FAQ. The visitor should finish on a clear action, not an accordion.

3. **Shorten or vary the catalogue middle.** The clearest editorial reduction is four People portraits instead of five, reserving the woman-and-child publication photograph. In Turin, either remove the opening-ceremony scene or differentiate its narrative role from the globe scene. The goal is not faster scrolling; it is restoring surprise.

4. **Strengthen the Chapter 02 → Chapter 03 transition.** Create a clearer chapter boundary using the existing system—spacing, pacing, and established background logic—without introducing a new visual pattern.

5. **Correct accessibility contrast before launch.** Darken muted text slightly on cream surfaces and replace the single yellow focus ring with a focus treatment that remains at least 3:1 against both light paper and dark forest backgrounds.

6. **Reserve image geometry to prevent layout shift.** Use stable aspect-ratio containers or equivalent intrinsic sizing for editorial photographs so loaded media cannot increase scene height unexpectedly.

7. **Rebalance only the longest editorial statements.** Preserve the typography tokens, but constrain the longest statements through scene-specific measure or a modest responsive size adjustment. Short declarations should remain visually dominant; long statements should remain readable within the spread.

## Low Priority Improvements

- Add a restrained active-chapter state to the existing navigation so readers can orient themselves on the long page.
- Review whether “Story” is the most precise label for its target and whether People requires direct navigation access.
- Consolidate repeated People, City, and Macedonia catalogue rules into shared structural selectors.
- Remove unused legacy travel and CTA styles after verifying they are not referenced by secondary pages.
- Audit the Bootstrap dependency. If project governance no longer requires it on this page, remove the unused render-blocking stylesheet; otherwise document why it remains.
- Recheck the transparent-header CTA across every Hero crop and viewport, especially against bright sky.
- Keep the historical Macedonia image, but make its archival/documentary role consistently clear through its supporting label.
- Re-run the full keyboard path and screen-reader landmark audit after any CTA or FAQ reordering.

## Launch Readiness Score

| Area | Score | Assessment |
|---|---:|---|
| Storytelling | 8.5/10 | Exceptional opening and logical narrative arc; the repeated middle rhythm and muted final beat reduce momentum. |
| Editorial Quality | 8.8/10 | Strong authorship, restraint, and cultural intelligence; catalogue repetition needs one final edit. |
| Design | 8.7/10 | Premium typography, photography, colour, and whitespace; some large statements and transitions need rebalancing. |
| UX | 7.6/10 | Navigation and practical information are clear, but orientation on the long page and CTA closure can improve. |
| Accessibility | 7.5/10 | Good semantic foundation, alt text, focus support, and reduced motion; two contrast failures require correction. |
| Performance | 5.8/10 | Hero delivery is strong, but oversized, non-responsive editorial images are a material launch risk. |
| Overall | 8.0/10 | A distinctive, jury-worthy editorial website that needs a focused optimisation and final-edit pass before launch. |

**Launch readiness: 7.6/10.** Editorially strong and suitable for final stakeholder review. Public launch should wait until responsive editorial images, contrast-safe focus treatment, stable media geometry, and the final CTA sequence are resolved.
