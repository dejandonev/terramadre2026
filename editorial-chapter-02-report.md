# Editorial Chapter 02 — Report

## Scope

This sprint changes only the homepage chapter “The People.” The Hero, editorial interlude, “Why it matters now,” Turin, Macedonia, travel, FAQ, navigation, footer, typography tokens, and design system remain unchanged.

## Editorial direction

The previous reportage block has been replaced by a quiet portrait exhibition. The chapter opens with the restrained line “Секоја идеја има лице.” and then follows a single repeated rhythm: portrait, statement, silence. There are no biographies, profile details, calls to action, captions, cards, or interface decoration.

The alternating 45/55 desktop composition gives every encounter its own wall-like space while preventing the sequence from becoming a conventional gallery grid. Large gaps separate the portraits so the reader meets each image independently. On mobile, every portrait precedes its statement, preserving the intended narrative order without side-by-side compression.

## Portrait choices

### 1. Preparation

Source: `source-asset/slow-food-macedonia/486120110_10212688119913252_45923163298048899_n.jpg`

The photograph was chosen because the person, hands, food, and working surface coexist in one complete composition. It makes human care visible without requiring a name or invented biography. The image is displayed at its natural aspect ratio, with no crop, mask, overlay, or visual effect.

Statement: “Добрата храна почнува многу пред да стигне на масата.”

The sentence shifts attention from the finished plate to the unseen work that precedes it. It is deliberately short and universal; it does not claim anything about the photographed person.

### 2. Continuity

Source: `source-asset/slow-food-macedonia/486039416_10212688055711647_4808134469693982464_n.jpg`

The shared gesture between an adult and a child expresses continuity more clearly than a descriptive paragraph could. Both faces, their hands, and the illustrated material remain visible. No relationship, identity, or personal history is inferred.

Statement: “Традицијата живее кога знаењето преминува од една рака во друга.”

The line treats tradition as an active choice and a transfer of knowledge, not as nostalgia. “Од една рака во друга” connects the idea to the visible gesture while remaining an editorial statement rather than a caption.

### 3. Curiosity

Source: `source-asset/vanja/502579866_10213122461731526_711122335652711042_n.jpg`

The photograph captures a quiet act of attention: a visitor reading an illustrated menu. The face, hands, and complete menu remain in frame. The scene closes the sequence with discovery rather than spectacle, and the visitor is intentionally not identified.

Statement: “Иднината почнува со љубопитноста да погледнеме подлабоко.”

The sentence connects attention with future possibility. It avoids describing what the visitor thinks and makes no factual claim beyond the image.

## Typography and restraint

The existing Typography V2 system is unchanged. Publico Headline is used for the chapter title, the three statements, and the final line. The established Google Sans treatment remains on the small uppercase chapter label. Open Sans Italic is not used because none of the statements is a sourced quotation.

No hover state, animation, border, shadow, icon, badge, decorative graphic, or card treatment has been introduced. The photographs are lazy-loaded below the fold and use explicit intrinsic dimensions to reserve layout space.

## Ending

“Зад секој производ / стои / човек.” is centered and isolated after the final portrait. It resolves the chapter’s three ideas into one quiet conclusion, without turning the moment into a call to action.

## Responsive behavior

- Desktop: 45% portrait and 55% statement, alternating left/right/left.
- Tablet: the alternating two-column exhibition rhythm is retained with fluid type and spacing.
- Mobile: each entry stacks portrait first and statement second; the source image remains proportional and uncropped.

## Content safeguards

Only repository photographs were used. The available archive register does not provide verified identities for these subjects, so the HTML, alternative text, and editorial copy do not name them or create biographies. Alternative text describes only visible content.
