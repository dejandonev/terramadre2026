# Typography V2 — извештај

**Проект:** Terra Madre Salone del Gusto 2026  
**Опфат:** типографија, вертикален ритам и font loading  
**Статус:** имплементирано и проверено  

## Резултат

Типографијата сега има три јасно одвоени семантички улоги:

- `--font-display`: Publico Headline Medium само за H1, H2, editorial H3, large pull headings и major chapter titles.
- `--font-body` и `--font-ui`: Google Sans за body copy и сите функционални UI категории.
- `--font-quote`: Open Sans 400 Italic само за цитати, pull quotes и historical citations.

Publico фајловите и нивниот `@font-face` останаа непроменети. Декоративните индекси и статистиките се префрлени на Google Sans, така што display-фамилијата не се појавува надвор од дозволените уреднички наслови.

## Скала и метрики

| Улога | Скала | Line-height |
|---|---:|---:|
| Hero H1 | 80–104 px на desktop | 0.91 |
| H2 | 52–64 px на desktop | 0.94 |
| Editorial H3 | 36–42 px | 1.0 |
| Large body | 20–24 px | 1.55 |
| Body | 18–20 px | 1.55 |
| Small text | 16 px | component-specific |
| Metadata | 14 px | component-specific |
| Buttons | 16 px | component-specific |
| Navigation | 16 px | component-specific |
| Quotes | fluid by component | 1.6 |

Display spacing е благо негативен, body spacing е normal, navigation користи `0.02em`, а uppercase labels `0.12em`. Параграфите се ограничени на најмногу `70ch`.

На 1440 px Hero H1 е 93.6 px, намалување од 7.14% во однос на претходните 100.8 px и во дозволениот максимум од 8%. Мобилната композиција и нејзината големина не се менувани. За ниски desktop viewport-и се намалени само типографските margins, за текстот да дише во рамките на постојниот `100svh` Hero.

## Quotes

Повторно употребливата `.quote` компонента користи Open Sans Italic, голем лев border и елегантен quotation mark. Нема card, shadow или декоративен background. Истите quote метрики се применети на editorial statement, pull quote и historical citation улогите.

## Font loading и перформанси

- Google Sans 400–700 variable и Open Sans 400 Italic се бараат со еден Google Fonts stylesheet URL.
- Додадени се preconnect врски кон Google Fonts stylesheet и font asset origins.
- Барањето користи `display=swap`.
- Publico WOFF2 останува единствениот критичен font preload.
- Нема дупликат Google Fonts барања.

Fallback проверката не покажа overflow или видлива промена на висината на body/quote блоковите. Навигациската ширина се менува минимално при присилен fallback, без судир или прелевање.

## QA

Проверени viewport-и: 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900 и 1920×1080.

- Македонските знаци `Ѓ Ќ Ѕ Љ Њ Џ` се достапни во сите три активни font улоги.
- Hero останува три реда, без промена на композиција и без прелевање.
- Сите H2 се Publico Medium и немаат horizontal overflow.
- Quotes се Open Sans Italic и немаат внатрешно прелевање.
- Body/UI се Google Sans; navigation и buttons се точно 16 px.
- Hero висината останува `95svh` на mobile и `100svh` на поголеми viewport-и.
- Страницата има еден H1, нема duplicate IDs и нема page-level horizontal overflow.

## Снимки

- `review/typography-v2/typography-v2-hero-1440x900.png`
- `review/typography-v2/typography-v2-hero-390x844.png`
- `review/typography-v2/typography-v2-tablet-768x1024.png`
- `review/typography-v2/typography-v2-chapter-1440x900.png`
- `review/typography-v2/typography-v2-quote-1440x900.png`
- `review/typography-v2/typography-v2-travel-1440x900.png`

Не се менувани содржината, фотографијата, Hero композицијата, структурата на навигацијата или структурата на страницата. Ништо не е deploy-ирано.
