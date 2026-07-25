# Editorial Chapter 01 — Final Polish Report

**Проект:** Terra Madre Salone del Gusto 2026  
**Секција:** `chapter--paper` / „Зошто е важно денес“  
**Опфат:** уреднички polish без промена на layout системот  
**Статус:** имплементирано и проверено  

## Резултат

Chapter 01 сега функционира како opening spread од печатен културен магазин. Постојната 55/45 композиција е задржана, но хиерархијата е појасна: читателот прво ја прима идејата, потоа принципот, го гледа официјалниот експонат и завршува со голема уредничка реченица.

## Зошто секоја одлука го подобрува раскажувањето

### 1. Експонатот станува визуелен магнет

На desktop ширината на официјалниот campaign exhibit е зголемена од 496 px на 569 px, односно 14.7%. Односот на колоните останува точно 55% текст / 45% слика. Намалувањето на gutter-от е умерено и сè уште остава 64.8 px чист простор меѓу двете „страници“.

Поголемиот размер му дозволува на делото веднаш да го преземе погледот, без да стане background или декоративна слика. Canonical PNG останува директно вчитан и непроменет.

### 2. Museum label наместо веб-caption

Caption-от е скратен на:

> Official campaign  
> Terra Madre Salone del Gusto 2026

Google Sans на 12 px, muted боја и две тивки линии го прават caption-от да личи на музејска ознака: доволно прецизен за контекст, но без натпревар со уметничкото дело.

### 3. Помалку зборови, посилен ритам

Body copy е сведено на два пасуси. Првиот има две кратки реченици; вториот една. Првата мисла го носи читателот зад масата — кон рацете, почвата и пренесеното знаење. Втората го претвора секојдневниот избор во одлука за луѓето, пределите, вкусовите и иднината.

Отстранети се објаснувачките набројувања и институционалниот тон. Секоја реченица сега има една јасна задача.

### 4. GOOD · CLEAN · FAIR станува уреднички исказ

Трите механички распределени колони се заменети со една центрирана Publico линија:

**GOOD · CLEAN · FAIR**

Средишните точки создаваат природна пауза како во печатен наслов. Една Google Sans реченица под неа ја врзува идејата со сетилата, природата и луѓето. Нема cards, icons, columns или UI chrome.

### 5. Белината ја забавува страницата

Просторот по H2 е зголемен на:

- 100.8 px на desktop;
- 72 px на tablet;
- 64.8–70.2 px на mobile.

Оваа пауза му дава време на краткиот наслов „Секој оброк / е одлука.“ да одекне пред аргументот да продолжи. Поголемиот vertical rhythm не додава декорација; тој го контролира темпото на читање.

### 6. Завршницата е вистински editorial ending

Завршната реченица е зголемена до 86.4 px на desktop и е поделена во пет намерни линии:

> Храната  
> не е само  
> она што го јадеме.  
> Таа е светот  
> што го создаваме.

На mobile големината е намалена само колку што е потребно сите пет линии да останат точни без дополнително кршење. Големиот празен простор пред реченицата создава завршна пауза, а не уште еден body блок.

### 7. Mobile order ја чува логиката на приказната

DOM и визуелниот редослед на mobile е:

1. body идеја;
2. GOOD · CLEAN · FAIR;
3. официјален exhibit;
4. editorial ending.

Читателот прво ја разбира тезата, потоа го гледа делото како доказ и на крај ја добива завршната мисла.

## Интегритет на експонатот

- canonical source: `source-asset/campaign/tm2026-exhibit-01-biodiversity-be-diversity.png`;
- natural dimensions: 1080×1920;
- natural и rendered ratio: 0.5625;
- нема crop, blur, animation, overlay, recoloring, darkening, mask или текст над сликата;
- computed CSS: `filter: none`, `transform: none`, `animation-name: none`, `mask-image: none`, `box-shadow: none`, border 0;
- SHA-256 останува `D9489B62886BB53A22C1C48E18AFAFE1DBCCE7AE87612C3DBA1D86925B26049F`.

## Responsive QA

Проверени се 1440×1100, 1024×900, 768×1024, 390×844 и 360×800.

- H2 останува точно две линии и користи Publico.
- Body останува Google Sans и има точно два пасуси.
- GOOD · CLEAN · FAIR останува една Publico линија во сите viewport-и.
- Caption останува Google Sans 12 px.
- Exhibit ratio останува 0.5625 во сите viewport-и.
- Chapter 01 нема horizontal overflow и нема `data-reveal`.
- Страницата задржува еден H1.

## Screenshots

- `review/editorial-chapter-01-final/editorial-chapter-01-final-desktop-1440x1100.jpg`
- `review/editorial-chapter-01-final/editorial-chapter-01-final-tablet-768x1024.jpg`
- `review/editorial-chapter-01-final/editorial-chapter-01-final-mobile-390x844.jpg`
- `review/editorial-chapter-01-final/editorial-chapter-01-final-detail-exhibit-1440x1200.jpg`
- `review/editorial-chapter-01-final/editorial-chapter-01-final-detail-typography-1440x900.jpg`

Hero, typography tokens, navigation, footer, travel и сите други homepage sections остануваат непроменети. Ништо не е deploy-ирано.
