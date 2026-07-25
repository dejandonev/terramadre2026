# Editorial Interlude 01 — извештај

**Проект:** Terra Madre Salone del Gusto 2026  
**Позиција:** Hero → Editorial Interlude 01 → Why Now  
**Статус:** имплементирано и проверено  

## Намера

Интерлудиумот не додава ново поглавје. Тој додава тишина.

По визуелно и емоционално густ Hero, читателот добива празна paper површина, една мисла и доволно време да ја прими. Дури потоа започнува аргументот на Why Now. Оваа пауза ја менува брзината на читање без да додава навигација, информациски блок или нова тема.

## Зошто тишината е важна

Премиум печатените изданија не ја исполнуваат секоја страница со содржина. Празниот простор е дел од раскажувањето: тој одвојува две идеи, му дава тежина на следниот наслов и му дозволува на читателот да направи сопствена врска.

Во оваа editorial journey, интерлудиумот прави три работи:

1. го смирува погледот по фотографскиот Hero;
2. ја сведува темата на една човечка мисла;
3. го подготвува прашањето „зошто е важно денес“ без да го објаснува однапред.

## Уреднички одлуки

### 1. Не е chapter или веб-секција

Markup-от е едноставен `div`, не нов semantic `section`. Нема heading, anchor, navigation target или chapter chrome. Така интерлудиумот останува пауза, а не уште една дестинација на страницата.

### 2. Само warm paper

Background-от го користи постојниот `--color-paper`. Нема фотографија, илустрација, icon, border, gradient или декоративен слој. Континуитетот со paper површината на Why Now прави преминот да биде природен.

### 3. Висина што го запира скролот

Интерлудиумот е `80svh` на desktop и tablet, а `82svh` на mobile. Тој е доволно долг да се почувствува како самостојна страница, но не станува нов full-screen Hero.

### 4. Една центрирана мисла

Publico текстот има максимална ширина од 700 px и пет намерни линии:

> Храната е повеќе  
> од производ.  
> Таа е однос  
> меѓу човекот  
> и природата.

На mobile истите линии остануваат центрирани и ниту една нема повеќе од три зборови. Publico ја носи мислата како editorial statement, не како body copy.

### 5. Тивок принцип

`Good · Clean · Fair` е единствениот елемент под мислата. Google Sans, 11.2 px, uppercase rendering, muted боја и `0.18em` tracking го прават да делува како мала печатена ознака, а не како наслов или CTA.

### 6. Reveal без движење

Интерлудиумот го користи постојниот Intersection Observer, но со целосно изолиран treatment:

- само opacity;
- 560 ms;
- `transform: none`;
- без delay, blur, parallax или movement;
- `prefers-reduced-motion` го прави веднаш видлив.

Не е додаден или изменет JavaScript.

## Responsive QA

Проверени се desktop, tablet и mobile viewport-и.

- Висината останува во бараниот опсег од приближно 70–90vh.
- Statement-от останува во рамки од 700 px.
- Сите пет линии се задржуваат без дополнително кршење.
- Mobile нема линија подолга од три зборови.
- Reveal transition е само `opacity 560ms`.
- Нема horizontal overflow.
- DOM редоследот е Hero → Interlude → Why Now.

## Screenshots

- `review/editorial-interlude-01/editorial-interlude-01-desktop-1440x900.jpg`
- `review/editorial-interlude-01/editorial-interlude-01-tablet-768x1024.jpg`
- `review/editorial-interlude-01/editorial-interlude-01-mobile-390x844.jpg`

Hero, Why Now, сите други chapters, typography system, navigation, footer, travel, FAQ, design system и фотографиите остануваат непроменети. Ништо не е deploy-ирано.
