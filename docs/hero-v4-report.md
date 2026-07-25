# Hero V4 implementation report

## Outcome

The homepage opening has been rebuilt as a single-image editorial cover using the approved Macedonian pomegranate portrait. The work is limited to the Hero, its initial transparent header treatment, responsive image delivery, entrance motion, documentation and review captures. The homepage content beginning with the following section remains unchanged.

## Master-image integrity

- Requested master path: `source-assets/hero/hero-macedonia-pomegranate-master.png`
- Master found in the repository: `source-asset/hero/hero-macedonia-pomegranate.png`
- Source dimensions: `1847 × 851`
- SHA-256 after all processing: `4B9AFAA5F489A6AD0FC0B815EE20C873D508F098046F1BADA2430388A4F3A674`
- The source file was read only. It was not renamed, replaced or overwritten.

## Design decisions

### One photograph, one human focus

The previous image mosaic was removed from the Hero. A single full-bleed portrait creates an immediate human point of view and makes the opening read like a documentary frame instead of a collection of website cards.

### Protected composition

The desktop derivative retains the complete master composition, with the subject held on the right and the left side reserved for type. The mobile derivative uses a dedicated portrait crop (`880, 0, 1530, 851`) rather than a resized desktop frame. It keeps the eyes, face, hand and pomegranate in view.

### Editorial image treatment

All responsive derivatives use a deterministic, restrained treatment:

- saturation reduced by 8%;
- a small local-contrast adjustment;
- slightly warmer highlights;
- no HDR, sharpening, blur or generative alteration.

This preserves natural skin, orchard and fruit colour while giving the frame enough separation for large editorial typography.

### Typography and negative space

The text block occupies the protected left field and is capped so the photograph can breathe. The headline is authored as three fixed lines:

1. `Зад секој`
2. `вкус`
3. `стои човек.`

`вкус` is enlarged and offset as the visual centre. The paragraph has a maximum width of `520px`, with explicit editorial line breaks matching the sprint.

### Overlay and header

The Hero overlay is a left-to-right gradient using the specified forest values: `rgba(18,30,24,.68)`, `rgba(18,30,24,.32)` and transparent. It fades before the portrait's focal area. The header begins transparent, without a shadow or backdrop. Its quiet cream surface appears only after the first scroll so the opening frame remains uninterrupted.

### Actions and scroll cue

The primary action uses cream, forest text and a 2px border; its hover state reverses those colours. The secondary action is deliberately a text link. The bottom-centre cue uses a thin line and a dot animated only through opacity.

### Motion and accessibility

Hero entrance motion uses only opacity and `translateY`, with the complete stagger finishing within 700ms. Under `prefers-reduced-motion: reduce`, the content appears without entrance movement and the scroll dot becomes static. Semantic headings, descriptive alternative text, visible focus states and a labelled scroll link are retained.

## Responsive image delivery

Thirty derivatives were generated in `assets/images/optimized/hero/`:

- compositions: desktop and mobile;
- formats: AVIF, WebP and PNG fallback;
- widths: 480, 768, 1024, 1440 and 1920.

The `<picture>` element selects the mobile crop through 991px and the desktop composition from 992px. AVIF is preferred, WebP follows, and PNG is the fallback. Only the Hero carries `fetchpriority="high"`. Matching responsive AVIF preloads are provided for the mobile and desktop media ranges; all images outside the Hero remain lazy-loaded.

## Verification

- Browser checks passed at 360×800, 390×844, 768×1024, 1024×768, 1440×900 and 1920×1080.
- The expected `95svh` mobile and `100svh` desktop heights were confirmed.
- Mobile and desktop AVIF sources switched at the intended breakpoint.
- No horizontal overflow was found.
- Exactly one image has high fetch priority; no image outside the Hero became eager.
- The initial header remained transparent with no shadow; its scrolled state gained the intended surface without a shadow.
- All 30 derivatives decode at their declared widths.
- The master checksum remained unchanged.
- The homepage markup from the next section onward retained its pre-sprint checksum.
- All 34 requested local HTML, CSS, JavaScript and Hero asset URLs returned HTTP 200.
- Browser console checks returned no errors.

## Review captures

- `review/hero-v4/hero-v4-opening-1440x900.png`
- `review/hero-v4/hero-v4-desktop-1440x900.png`
- `review/hero-v4/hero-v4-mobile-390x844.png`

The capture filenames record the requested browser viewport. The browser chrome reduces the resulting page bitmap to `1425 × 891` on desktop and `375 × 812` on mobile.
