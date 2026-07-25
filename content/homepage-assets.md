# Terra Madre Salone del Gusto 2026 — Homepage asset register

**Верзија:** 2.2 + Editorial Chapter 01  
**Последен аудит:** 25 јули 2026  
**Архива на оригинали:** `source-asset/`  
**Правило:** оригиналите не се преместуваат, преименуваат, обработуваат или бришат.

## Резиме на аудитот

Sprint brief наведува `source-assets/`, но реалната папка во репозиториумот е `source-asset/` (еднина). Аудитирани се сите 57 слики во реалната папка:

| Папка | Број | Содржина |
|---|---:|---|
| `source-asset/campaign/` | 1 | одобрен официјален campaign exhibit за Editorial Chapter 01 |
| `source-asset/hero/` | 1 | одобрен Hero V4 master |
| `source-asset/official/` | 3 | официјални campaign composites |
| `source-asset/top-10/` | 11 | вертикални и хоризонтални campaign composites |
| `source-asset/slow-food-macedonia/` | 13 | архивски фотографии од штанд, луѓе, производи и активности |
| `source-asset/vanja/` | 21 | доставени репортажни фотографии |
| `source-asset/turin/` | 7 | настански и општи фотографии од Торино |
| `source-asset/travel/` | 0 | нема доставени фотографии |

Пронајдени се седум exact cross-folder duplicates:

- `COVER-FB.png`;
- `TERRA_MADRE_2026_MAIN_VISUAL26.jpg`;
- `TERRA_MADRE_2026_MAIN_VISUAL28.jpg`;
- `485775914_10212687096887677_7990479571301966565_n.jpg`;
- `486010366_10212688216915677_7220246656990028461_n.jpg`;
- `486083699_10212686950244011_1382224490953057766_n.jpg`;
- `502542993_10213122463731576_8048174456482731535_n.jpg`.

Првите три се дупликати меѓу `official` и `top-10`; останатите четири се дупликати меѓу `slow-food-macedonia` и `vanja`. За јавна употреба се избира само една canonical source path.

Ниту еден фајл нема вграден `Artist`, `Copyright` или usage-license запис. `AV1_1184.jpg` има EXIF датум `2024:09:26`, камера Nikon Z 6 II и Lightroom processing metadata, но нема автор или дозвола. Сите технички интегрирани архивски фотографии остануваат **approval pending**; Editorial Chapter 01 exhibit е изречно доставен како approved official campaign visual.

## Hero V4 — approved master

Sprint brief ја наведува патеката `source-assets/hero/hero-macedonia-pomegranate-master.png`. Реалната доставена патека е:

`source-asset/hero/hero-macedonia-pomegranate.png`

Овој PNG е третиран како непроменливиот, одобрен Hero master. Не е преместен, преименуван или препишан.

| Поле | Вредност |
|---|---|
| Master dimensions | 1847×851 |
| Master SHA-256 | `4B9AFAA5F489A6AD0FC0B815EE20C873D508F098046F1BADA2430388A4F3A674` |
| Source context | Slow Food Macedonia |
| Approved use | Homepage Hero |
| Desktop crop | целосната композиција; жената останува десно |
| Mobile crop | посебен crop `x=880–1530`, `y=0–851`; лицето, очите, раката и калинката се целосно задржани |
| Treatment | saturation −8%; благо затоплени highlights; локален контраст +6%; без HDR, halo sharpening или stylized grading |
| Derivatives | AVIF, WebP и PNG; 480, 768, 1024, 1440 и 1920 px; desktop и mobile |
| Public stem | `assets/images/optimized/hero/hero-macedonia-pomegranate-{desktop|mobile}-*` |
| HTML alt | „Жена во македонски овоштарник држи калинка.“ |

PNG fallback-ите се намерно поголеми; современите browser-и добиваат AVIF или WebP преку `<picture>`. Само Hero сликата се preload-ира и има `fetchpriority="high"`.

## Editorial Chapter 01 — approved campaign exhibit

Sprint brief ја наведува патеката `source-assets/campaign/tm2026-exhibit-01-biodiversity-be-diversity.png`. Реалната доставена патека е:

`source-asset/campaign/tm2026-exhibit-01-biodiversity-be-diversity.png`

| Поле | Вредност |
|---|---|
| Type / dimensions | PNG · 1080×1920 · portrait · 0.5625 |
| SHA-256 | `D9489B62886BB53A22C1C48E18AFAFE1DBCCE7AE87612C3DBA1D86925B26049F` |
| Status | Approved official campaign exhibit |
| Approved use | Homepage · Chapter 01 · Why It Matters |
| Rendering | целосна слика, природен aspect ratio, без crop, mask, overlay, filter, animation, border или shadow |
| HTML source | canonical original; нема деривати |
| HTML alt | „Официјален кампањски визуел за Terra Madre Salone del Gusto 2026 со порака Biodiversity — Be Diversity.“ |
| Caption | “Official campaign visual” / “Terra Madre Salone del Gusto 2026” |

Оригиналот се прикажува директно и останува непроменет. Експонатот е `loading="lazy"` затоа што е под fold, но не се конвертира, компресира или responsive-crop-ира.

## Статуси

- **selected — approval pending:** технички интегрирана во локалниот прототип; правата не се потврдени.
- **reserve:** визуелно употреблива, но не е потребна за Homepage V2.1 или бара дополнителен контекст.
- **rejected — duplicate:** идентична копија на друг canonical source.
- **rejected — unsuitable crop/context:** не поддржува доволно јасна или одговорна homepage употреба.
- **rejected — campaign text:** composite со вграден текст/лого што не е погоден за responsive documentary crop.

## Официјални campaign assets

За сите редови: source/supplier е `source-asset/official/`; автор, сопственик, лиценца, crop permission и social permission се **Unknown / confirmation required**.

| Original path | Type / dimensions / orientation / ratio | Subject, faces and crop | Potential use / quality | Status / alt direction |
|---|---|---|---|---|
| `source-asset/official/COVER-FB.png` | PNG · 1920×1080 · landscape · 1.778 | Campaign collage; several faces; retain full design | Social reserve · high | reserve; no HTML alt planned |
| `source-asset/official/TERRA_MADRE_2026_MAIN_VISUAL26.jpg` | JPEG · 3815×1925 · landscape · 1.982 | Campaign collage, three prominent faces, food and biodiversity; preserve central title/date and faces | Open Graph · high | **selected — approval pending**; OG description records campaign visual, not identities |
| `source-asset/official/TERRA_MADRE_2026_MAIN_VISUAL28.jpg` | JPEG · 3815×1925 · landscape · 1.982 | Alternative campaign collage with several faces and food textures | Social reserve · high | reserve; approval required |

## `top-10` campaign composites

За сите редови: source/supplier е `source-asset/top-10/`; author, owner, permission and subject-consent status are **Unknown / confirmation required**.

| Original path | Type / dimensions / orientation / ratio | Likely subject / faces / important crop | Potential section / quality | Status and reason / alt direction |
|---|---|---|---|---|
| `source-asset/top-10/4-5-2.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait with corn, leaves and one prominent face; face center is essential | Campaign reserve · high | rejected — campaign text; responsive crop would remove official composition |
| `source-asset/top-10/4-5-4.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait with flowers, livestock texture and one prominent face | Campaign reserve · high | rejected — campaign text |
| `source-asset/top-10/4-5-6.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait with grain/textile context and one prominent face | Campaign reserve · high | rejected — campaign text |
| `source-asset/top-10/888552795-eng_ig-post-1-copia-3.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait of a young person; eyes and hat are essential | Campaign reserve · high | rejected — campaign text; no identity inferred |
| `source-asset/top-10/888552796-eng_ig-post-2-copia-3.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait of a smiling person; face center is essential | Campaign reserve · high | rejected — campaign text |
| `source-asset/top-10/888552797-eng_ig-post-3-copia-3.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait with one prominent face and plant textures | Campaign reserve · high | rejected — campaign text |
| `source-asset/top-10/888552806-eng_ig-post-2-copia-4.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait with one smiling face and pastoral texture | Campaign reserve · high | rejected — campaign text |
| `source-asset/top-10/888552809-eng_ig-post-3-copia-4.png` | PNG · 1081×1351 · portrait · 0.800 | Campaign portrait with one face and bread/earth texture | Campaign reserve · high | rejected — campaign text |
| `source-asset/top-10/COVER-FB.png` | PNG · 1920×1080 · landscape · 1.778 | Exact duplicate of official cover | None | rejected — duplicate |
| `source-asset/top-10/TERRA_MADRE_2026_MAIN_VISUAL26.jpg` | JPEG · 3815×1925 · landscape · 1.982 | Exact duplicate of selected official visual | None | rejected — duplicate |
| `source-asset/top-10/TERRA_MADRE_2026_MAIN_VISUAL28.jpg` | JPEG · 3815×1925 · landscape · 1.982 | Exact duplicate of official alternative visual | None | rejected — duplicate |

## Slow Food Macedonia archive

За сите редови: supplier context is the folder name `slow-food-macedonia`; photographer, owner, license, crop permission and model/subject consent are **Unknown / confirmation required**. No photographed person is treated as a confirmed 2026 participant.

| Original path | Type / dimensions / orientation / ratio | Likely subject / faces / important crop | Potential section / quality | Status / recommended alt direction |
|---|---|---|---|---|
| `source-asset/slow-food-macedonia/485762971_10212686987804950_4252390066069340440_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | People tasting or discussing items at a table; several faces; preserve hands and table action | Opening archive · high | reserve — replaced in Hero V4 by the approved master |
| `source-asset/slow-food-macedonia/485775914_10212687096887677_7990479571301966565_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Woman holding printed/product material at a stand; face and hands essential | Opening archive · high | reserve — replaced in Hero V4 by the approved master |
| `source-asset/slow-food-macedonia/485822305_10212686951404040_7958356903953302523_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Terra Madre entrance structure and visitors; small faces; preserve gateway | Event/Turin transition · good | reserve; alt should describe gateway without claiming 2026 |
| `source-asset/slow-food-macedonia/485906208_10212686987124933_845811064228688013_n.jpg` | JPEG · 1536×2048 · portrait · 0.750 | Hanging dried food/fish and stall material; no important face | Biodiversity reserve · good | reserve; alt should describe the product display |
| `source-asset/slow-food-macedonia/486010366_10212688216915677_7220246656990028461_n.jpg` | JPEG · 1118×833 · landscape · 1.342 | Group behind a Slow Food Macedonia stand; several faces; keep full group and stand label | Macedonia · moderate resolution | **selected — approval pending**; describe group and visible stand, no identities |
| `source-asset/slow-food-macedonia/486039416_10212688055711647_4808134469693982464_n.jpg` | JPEG · 1536×2048 · portrait · 0.750 | Woman and boy holding illustrated material; two clear faces; preserve hands and material | Biodiversity / cultural exchange · high | **selected — approval pending**; no identities |
| `source-asset/slow-food-macedonia/486083699_10212686950244011_1382224490953057766_n.jpg` | JPEG · 2048×1356 · landscape · 1.510 | Visitors at a stand under hanging red peppers; several faces; peppers and gathering essential | Biodiversity / community · high | **selected — approval pending**; describe visitors and peppers |
| `source-asset/slow-food-macedonia/486120110_10212688119913252_45923163298048899_n.jpg` | JPEG · 1728×1989 · portrait · 0.869 | Person serving small plates; one clear face, hands and plates essential | Opening archive · high | reserve — replaced in Hero V4 by the approved master |
| `source-asset/slow-food-macedonia/486265761_10212688113793099_6178978818987843469_n.jpg` | JPEG · 2048×1308 · landscape · 1.566 | Four people in aprons during a food demonstration; faces, hands and table essential | Why It Matters reserve · high | reserve — replaced by the approved Editorial Chapter 01 campaign exhibit |
| `source-asset/slow-food-macedonia/486320814_10212688120233260_6559066823839396817_n.jpg` | JPEG · 2048×1414 · landscape · 1.448 | Two people holding illustrated material at a product table; faces and hands visible | Opening archive · high | reserve — replaced in Hero V4 by the approved master |
| `source-asset/slow-food-macedonia/706733998_1315963113973323_7928358741845382368_n.jpg` | JPEG · 1149×1016 · landscape · 1.131 | Two people outdoors; faces clear; Terra Madre context not visually established | None · moderate | rejected — unclear provenance/context |
| `source-asset/slow-food-macedonia/502542993_10213122463731576_8048174456482731535_n.jpg` | JPEG · 960×681 · landscape · 1.410 | Group with Slow Food flag under visible Terra Madre 2024 sign; many faces; retain sign and group | Macedonia archive · moderate | **selected — approval pending**; alt explicitly mentions 2024, no identities |
| `source-asset/slow-food-macedonia/489106694_9960575937297637_2001787628646175983_n.jpg` | JPEG · 960×720 · landscape · 1.333 | Person presenting jars and preserves; one face, hands and products essential | Opening archive · moderate | reserve — replaced in Hero V4 by the approved master |

## Turin archive

За сите редови: supplier context is `source-asset/turin`; author, owner, license, crop permission and public-web approval are **Unknown / confirmation required**. Images are not assigned to named squares without supporting metadata.

| Original path | Type / dimensions / orientation / ratio | Likely subject / faces / important crop | Potential section / quality | Status / recommended alt direction |
|---|---|---|---|---|
| `source-asset/turin/AV1_1184.jpg` | JPEG · 2000×1331 · landscape · 1.503 | Event installation with globe and circular ribbons; many small faces; preserve globe and circle | Turin lead · high | **selected — approval pending**; archive event atmosphere, no square name |
| `source-asset/turin/DJI_20240926133340_0021_D-min.jpg` | JPEG · 8064×6048 · landscape · 1.333 | Aerial view of circular event installation; people small; preserve full geometry | Event-scale reserve · very high resolution | reserve; useful if aerial context is later required |
| `source-asset/turin/torino-PTOR4004.jpg.jpg` | JPEG · 1920×1280 · landscape · 1.500 | Historic Turin street with pedestrians and tables; faces not identifiable | Turin · high | **selected — approval pending**; general street description only |
| `source-asset/turin/torino-PTOR4039.jpg.jpg` | JPEG · 1920×1280 · landscape · 1.500 | Brick historic complex and lawn; no important faces; exact location unsupported | Turin reserve · high | reserve; do not name the site without metadata |
| `source-asset/turin/torino-PTOR4116.jpg.jpg` | JPEG · 1920×1280 · landscape · 1.500 | Ornate museum or palace interior; no faces; exact building unsupported | Turin reserve · high | reserve; needs location confirmation |
| `source-asset/turin/torino-PTOR4182.jpg.jpg` | JPEG · 1920×1280 · landscape · 1.500 | Church façade and open square; people very small; exact location unsupported | Turin reserve · high | reserve; needs location confirmation |
| `source-asset/turin/torino-PTOR4255.jpg.jpg` | JPEG · 1920×1280 · landscape · 1.500 | Turin panorama with Mole Antonelliana; no faces; skyline must remain visible | Turin · high | **selected — approval pending**; general Turin panorama |

## Vanja reportage folder

Folder placement supports association with the supplied reportage package, but it does not identify any photographed person as Vanja. For every row, creator, owner, license, crop permission, publication approval and subject consent are **Unknown / confirmation required**.

| Original path | Type / dimensions / orientation / ratio | Likely subject / faces / important crop | Potential section / quality | Status / recommended alt direction |
|---|---|---|---|---|
| `source-asset/vanja/485622304_10212686950564019_1099511759206457208_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Woman holding jars at a product stand; one clear face, hands and jars essential | Opening archive · high | reserve — replaced in Hero V4 by the approved master |
| `source-asset/vanja/485775914_10212687096887677_7990479571301966565_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Exact duplicate of selected Slow Food Macedonia source | None | rejected — duplicate |
| `source-asset/vanja/485793476_10212687108767974_1576751521051902198_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Close personal selfie with three faces; limited event context | None · good | rejected — unsuitable personal context and unresolved consent |
| `source-asset/vanja/486010366_10212688216915677_7220246656990028461_n.jpg` | JPEG · 1118×833 · landscape · 1.342 | Exact duplicate of selected Slow Food Macedonia stand image | None | rejected — duplicate |
| `source-asset/vanja/486083699_10212686950244011_1382224490953057766_n.jpg` | JPEG · 2048×1356 · landscape · 1.510 | Exact duplicate of selected community/pepper image | None | rejected — duplicate |
| `source-asset/vanja/486109114_10212687093527593_3225096084462528741_n.jpg` | JPEG · 2048×991 · landscape · 2.067 | Discussion or presentation with several people; faces visible; wide crop essential | Reportage reserve · good | reserve; context and consent need confirmation |
| `source-asset/vanja/502499087_10213122462891555_6990807383859661257_n.jpg` | JPEG · 1080×1479 · portrait · 0.730 | Visitor near a textile display; one face; keep textile and figure | Reportage reserve · good | reserve; do not identify the visitor |
| `source-asset/vanja/502506771_10213122462371542_1782167418077133824_n.jpg` | JPEG · 720×960 · portrait · 0.750 | Visitor in a vineyard landscape; one face; preserve landscape | Reportage reserve · limited desktop resolution | reserve; mobile-only candidate |
| `source-asset/vanja/502524121_10213122462731551_2989996798693786478_n.jpg` | JPEG · 770×960 · portrait · 0.802 | Person holding a national flag; face partly outside the strongest crop | None · limited | rejected — unsuitable crop and potentially misleading national framing |
| `source-asset/vanja/502542993_10213122463731576_8048174456482731535_n.jpg` | JPEG · 960×681 · landscape · 1.410 | Exact duplicate of selected Slow Food Macedonia 2024 group image | None | rejected — duplicate |
| `source-asset/vanja/502579866_10213122461731526_711122335652711042_n.jpg` | JPEG · 2048×1973 · near-square · 1.038 | Visitor reading a menu; one clear face; menu and hands essential | Reportage reserve · high | reserve; do not identify person |
| `source-asset/vanja/502655511_10213122461411518_6862804413203231454_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Pasta dish on a colorful table; no face; preserve full plate | Vanja/reportage · high | **selected — approval pending**; describe visible dish only |
| `source-asset/vanja/502721199_10213122463771577_2740920871563003868_n.jpg` | JPEG · 960×695 · landscape · 1.381 | Visitor gesturing toward a globe installation; one face; globe and gesture essential | Opening archive · moderate | reserve — replaced in Hero V4 by the approved master |
| `source-asset/vanja/502841365_10213124464861603_1380026479650761261_n.jpg` | JPEG · 1080×1053 · near-square · 1.026 | Bread products and handwritten board; no faces; retain labels and basket | Biodiversity · good | **selected — approval pending**; describe bread display |
| `source-asset/vanja/502949392_10213122766219138_2160867076047377432_n.jpg` | JPEG · 1536×2048 · portrait · 0.750 | Packaged food with labels and leaves; no face; central package essential | Biodiversity reserve · good | reserve; labels/provenance need review |
| `source-asset/vanja/503305636_10213122768619198_2977436038924715319_n.jpg` | JPEG · 2048×1536 · landscape · 1.333 | Cheese stall with one vendor; clear face, product and hands/context essential | Opening archive · high | reserve — replaced in Hero V4 by the approved master |
| `source-asset/vanja/503405940_10213124463341565_4243373979290151486_n.jpg` | JPEG · 1295×2048 · portrait · 0.632 | Cropped people and clothing/textile detail; faces incomplete | None · good | rejected — unsuitable crop |
| `source-asset/vanja/503513477_10213124463021557_6345586549589414754_n.jpg` | JPEG · 1536×2048 · portrait · 0.750 | Visitor beside colorful textile display; one face; artwork and figure essential | Reportage reserve · high | reserve; no identity |
| `source-asset/vanja/503555330_10213124466341640_8794978548590322516_n.jpg` | JPEG · 2048×1882 · near-square · 1.088 | Two visitors seated at a table; faces clear; limited event action | Reportage reserve · good | reserve; consent and context pending |
| `source-asset/vanja/503578521_10213124466021632_5818093402221850819_n.jpg` | JPEG · 1536×2048 · portrait · 0.750 | Visitor near an event hospitality area; one face; retain environmental context | Reportage reserve · good | reserve; no identity |
| `source-asset/vanja/503796390_10213144905812614_1263141764466419800_n.jpg` | JPEG · 1200×1600 · portrait · 0.750 | Visitor near a tall outdoor installation; one face; structure and person essential | Reportage reserve · good | reserve; no identity |

## Selected homepage mapping and derivatives

| Section | Canonical original | Derivative stem | Rendered treatment | Alt |
|---|---|---|---|---|
| Hero V4 | `hero/hero-macedonia-pomegranate.png` | `hero/hero-macedonia-pomegranate-{desktop|mobile}-*` | informative, responsive desktop/mobile crops | Жена во македонски овоштарник држи калинка. |
| Why It Matters | `campaign/tm2026-exhibit-01-biodiversity-be-diversity.png` | none — canonical original | approved exhibit; full image; natural ratio; no processing | Официјален кампањски визуел за Terra Madre Salone del Gusto 2026 со порака Biodiversity — Be Diversity. |
| Biodiversity I | `vanja/502841365…jpg` | `homepage/biodiversity-food-bread-*` | informative | Лебови и пакувања изложени во кошница покрај рачно напишана табла. |
| Biodiversity II | `slow-food-macedonia/486039416…jpg` | `homepage/biodiversity-human-exchange-*` | informative | Жена и момче држат илустриран материјал пред штанд со посетители. |
| Biodiversity III | `slow-food-macedonia/486083699…jpg` | `homepage/biodiversity-community-peppers-*` | informative | Посетители разговараат покрај штанд украсен со сушени црвени пиперки. |
| Turin lead | `turin/AV1_1184.jpg` | `turin/turin-event-circle-*` | informative, archive context | Голема земјина топка над кружна инсталација со посетители на настан. |
| Turin street | `turin/torino-PTOR4004.jpg.jpg` | `turin/turin-street-*` | informative, no square name | Историска улица во центарот на Торино со пешаци и маси покрај фасадите. |
| Turin skyline | `turin/torino-PTOR4255.jpg.jpg` | `turin/turin-skyline-*` | informative | Панорамски поглед кон Торино и Моле Антонелијана. |
| Macedonia lead | `slow-food-macedonia/486010366…jpg` | `macedonia/macedonia-slow-food-stand-*` | informative, archive context | Група посетители зад штанд со ознака Slow Food Macedonia. |
| Macedonia archive | `slow-food-macedonia/502542993…jpg` | `macedonia/macedonia-archive-group-*` | informative, 2024 explicit | Група со знаме на Slow Food пред влезната ознака Terra Madre 2024. |
| Vanja/reportage | `vanja/502655511…jpg` | `reportage/reportage-pasta-detail-*` | informative food detail | Чинија со тестенини и босилек на шарена маса, од доставените репортажни материјали. |
| Open Graph | `official/TERRA_MADRE_2026_MAIN_VISUAL26.jpg` | `social/og-terramadre2026.jpg` | 1200×630 campaign crop | Metadata-only description; not an HTML image |

## Processing rules applied

- Originals remain unchanged in `source-asset/`.
- Editorial Chapter 01 го прикажува approved campaign exhibit директно од canonical PNG, без деривати, crop, filter, overlay или анимација.
- Hero V4 derivatives use AVIF, WebP and PNG at 480, 768, 1024, 1440 and 1920 px for both desktop and mobile crops.
- Hero V4 processing uses saturation 0.92, subtle highlight warmth and restrained local contrast; the master SHA-256 remains unchanged.
- WebP derivatives use aspect-preserving Lanczos resizing and quality 78.
- Existing chapter-image derivatives use widths selected from 480, 768, 1024, 1440 and 1920 without upscaling. Hero V4 follows the sprint's exact requested width set, including its 1920 px derivative.
- Informative HTML images use `srcset`, `sizes`, `width`, `height`, `loading="lazy"` and `decoding="async"`.
- Only the Hero V4 image has `fetchpriority="high"` and responsive preload hints.
- Open Graph output is a 1200×630 JPEG crop from the supplied official visual.
- AVIF was not added because WebP already provides reliable, compact outputs without expanding the derivative matrix.
- No favicon was created because no separately approved visual mark or typographic favicon treatment was supplied.

## Production blockers

1. Written confirmation of creator and rights owner for every selected source.
2. Permission for public web use, responsive resizing and cropping.
3. Confirmation of social-sharing permission for the official Open Graph source.
4. Subject/model consent status where people are recognizable.
5. Required attribution wording, if any.
6. Confirmation that `source-asset/vanja/` is the approved reportage package and not only a working collection.
7. Approval of the two archive captions and the use of visible 2024 material.
