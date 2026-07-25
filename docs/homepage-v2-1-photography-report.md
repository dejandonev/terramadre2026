# Homepage V2.1 photography integration report

**Project:** `terramadre2026.org`  
**Sprint:** Homepage V2.1 — Authentic Photography Integration  
**Implemented:** 24 July 2026  
**Status:** technically complete for local review; image-rights approval remains a production blocker  
**Deployment:** not performed

## Executive summary

Homepage V2.1 replaces the temporary typographic image placeholders with authentic, locally supplied photography while preserving the V2 editorial sequence, Macedonian copy, event facts, travel facts and design system.

The implementation uses:

- an eight-image documentary mosaic in the opening experience;
- one image in Why It Matters;
- three image-backed biodiversity panels;
- one event image and two general Turin views;
- two archival Slow Food Macedonia images;
- one non-identifying food detail in the Vanja reportage;
- one official campaign derivative for Open Graph and Twitter metadata.

No remote, stock or generated images were used. No source original is loaded by the public homepage. All public photographs are responsive WebP derivatives except the 1200 × 630 social JPEG.

## Source asset folders inspected

The supplied folder is named `source-asset/` in the repository, although the sprint brief calls it `source-assets/`. This report uses the actual repository path.

| Folder | Files inspected | Notes |
|---|---:|---|
| `source-asset/official/` | 3 | official campaign materials |
| `source-asset/top-10/` | 11 | shortlist/campaign materials |
| `source-asset/slow-food-macedonia/` | 13 | community and event archive |
| `source-asset/vanja/` | 21 | supplied reportage archive |
| `source-asset/turin/` | 7 | event and general city views |
| `source-asset/travel/` | 0 | no travel photography supplied |
| **Total** | **55** | all supplied files visually inspected |

Five contact sheets were created in `review/homepage-v2-1/source-audit/`. The audit also found seven exact duplicate pairs across folders. Duplicate copies were not published twice.

## Selected source images

### Opening experience

1. `485762971_10212686987804950_4252390066069340440_n.jpg` — tasting/community table
2. `502721199_10213122463771577_2740920871563003868_n.jpg` — globe gathering
3. `503305636_10213122768619198_2977436038924715319_n.jpg` — cheese stall
4. `485775914_10212687096887677_7990479571301966565_n.jpg` — community table
5. `486120110_10212688119913252_45923163298048899_n.jpg` — food service
6. `489106694_9960575937297637_2001787628646175983_n.jpg` — preserves stall
7. `485622304_10212686950564019_1099511759206457208_n.jpg` — preserves portrait
8. `486320814_10212688120233260_6559066823839396817_n.jpg` — food exchange

These images are treated as one decorative editorial composition. Their `<img>` elements use empty alt text and sit inside an `aria-hidden="true"` mosaic.

### Chapter mapping

| Chapter | Source | Editorial role |
|---|---|---|
| Why It Matters | `486265761_10212688113793099_6178978818987843469_n.jpg` | active food demonstration and human-scale context |
| Biodiversity I | `502841365_10213124464861603_1380026479650761261_n.jpg` | food/agricultural diversity |
| Biodiversity II | `486039416_10212688055711647_4808134469693982464_n.jpg` | social exchange |
| Biodiversity III | `486083699_10212686950244011_1382224490953057766_n.jpg` | community and local food culture |
| Turin lead | `AV1_1184.jpg` | archival event atmosphere |
| Turin support | `torino-PTOR4004.jpg.jpg` | general historic street view |
| Turin support | `torino-PTOR4255.jpg.jpg` | general skyline view |
| Macedonia lead | `486010366_10212688216915677_7220246656990028461_n.jpg` | Slow Food Macedonia stand/archive |
| Macedonia support | `502542993_10213122463731576_8048174456482731535_n.jpg` | explicitly archival Terra Madre 2024 context |
| Vanja reportage | `502655511_10213122461411518_6862804413203231454_n.jpg` | non-identifying food detail from the supplied reportage set |
| Social metadata | `TERRA_MADRE_2026_MAIN_VISUAL26.jpg` | 1200 × 630 Open Graph/Twitter derivative |

The Turin images are captioned as an archival event view and general city views. They are not used to identify specific 2026 program locations. The Macedonia images are explicitly described as archive material, not as a list of confirmed 2026 participants.

## Rejected or unused image groups

- Exact duplicates were excluded from repeat publication.
- Composite campaign layouts in `top-10/` were not used as page photography because their embedded design and text compete with the V2 interface.
- Sources with weak crops, low usable resolution or less relevant documentary content were not stretched into prominent placements.
- Images that could imply an unsupported identity were not used to portray Vanja Todorovska or any named participant.
- No image was assigned to the travel chapter because `source-asset/travel/` is empty and event/archive photography would misrepresent the paid travel service.
- No favicon was created because no separately approved brand mark was supplied.

Unused does not mean rejected permanently. It means the file did not provide the strongest, safest fit for this homepage version.

## Derivative output

Public derivatives are organized in:

- `assets/images/optimized/homepage/`
- `assets/images/optimized/turin/`
- `assets/images/optimized/macedonia/`
- `assets/images/optimized/reportage/`
- `assets/images/optimized/travel/` — intentionally empty
- `assets/images/social/`

Generation rules:

- WebP quality: 78;
- Lanczos resampling;
- aspect ratio preserved;
- no upscaling;
- available responsive widths selected from 480, 768, 1024, 1440 and 1920 pixels according to source size and display need;
- social derivative: JPEG, 1200 × 630, quality 88.

Validation found 52 valid WebP files (3.92 MiB for the reusable derivative library) and one valid 1200 × 630 JPEG social image. The largest single WebP is 289.0 KiB.

## Opening strategy

The opening keeps the V2 statement and call to action intact while replacing the previous typographic blocks with documentary imagery. A solid clipped forest veil protects text contrast without gradients. The fixed header uses a translucent dark initial background and switches to the existing light scrolled state.

Desktop uses the full eight-image composition. Tablet simplifies the grid. Phone widths show five tiles behind a stronger full-width veil. Only the first opening image uses `fetchpriority="high"`; below-fold chapter images use native lazy loading.

## Responsive behavior

Browser checks passed at:

- 360 × 800;
- 390 × 844;
- 768 × 1024;
- 1024 × 768;
- 1366 × 768;
- 1440 × 900;
- 1920 × 1080.

No viewport allowed horizontal scrolling. The Turin supporting images stack at phone widths to protect their subjects from narrow two-column crops. Macedonia and reportage media also return to normal document flow on small screens.

## Performance

Measured from the responsive source selected by the browser:

| Measure | Result |
|---|---:|
| Opening derivative set referenced by the page | 8 files / 258.1 KiB |
| Mobile visible mosaic subset | 5 files / 160.7 KiB |
| All 18 selected responsive files at the tested source choices | 744.1 KiB |
| Full reusable WebP derivative library | 52 files / 3.92 MiB |
| Open Graph JPEG | 253.9 KiB |

CSS hides three opening tiles on phones, but `<img>` elements can still be fetched by the browser; 160.7 KiB is therefore a visible-subset figure, not a guaranteed mobile transfer total. The full opening set remains 258.1 KiB. The homepage does not load source originals, remote images, web fonts, a JavaScript framework or an animation library.

## Accessibility

- All 18 homepage `<img>` elements include explicit `alt`, `width` and `height`.
- The eight-image opening mosaic is decorative and hidden from assistive technology.
- Every informative chapter image has concise Macedonian alt text describing visible content without inventing names, roles or locations.
- Archive captions separate historical imagery from claims about 2026.
- One `h1`, semantic landmarks, skip link, visible focus, reduced-motion handling and progressive enhancement remain intact.
- The page content and FAQ remain readable without JavaScript.

## Rights and attribution

The supplied files contain no reliable creator, copyright or license metadata. Folder names are treated only as supplier context. The Turin lead contains camera/date EXIF but no creator or rights record.

All 19 public uses—including the social derivative—are recorded individually in `docs/image-rights-register.md`. Every item is marked as legally pending. Technical integration is not production approval.

## Remaining production blockers

1. Confirm creator and rights owner for every selected source.
2. Confirm public website, crop/resize and responsive derivative permission.
3. Confirm consent status where people are recognizable.
4. Confirm required attribution wording and placement.
5. Confirm social-sharing permission for the official campaign derivative.
6. Reconfirm the 700+ producer figure against the final official 2026 source.
7. Obtain final written source approvals for the travel offer, Slow Food Macedonia copy and Vanja quotation.

## QA evidence

- 64 local HTML, CSS, JavaScript and image URLs returned HTTP 200.
- 18 images found; no missing alt, width or height attributes.
- One high-priority image; no source-original references.
- One `h1`; no duplicate IDs; no visible TODO text.
- JavaScript syntax passed `node --check`.
- CSS braces balance; no `!important`; no gradients.
- Browser console: zero errors and zero warnings.
- Review screenshots:
  - `review/homepage-v2-1/homepage-v2-1-1440x900.png`
  - `review/homepage-v2-1/homepage-v2-1-390x844.png`
  - `review/homepage-v2-1/homepage-v2-1-opening-1440x900.png`
  - `review/homepage-v2-1/homepage-v2-1-travel-1440x900.png`

Nothing was deployed, committed or pushed.
