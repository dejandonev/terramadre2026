# Terra Madre Salone del Gusto 2026

Static website for the Macedonian Terra Madre Salone del Gusto 2026 microsite and the organized travel offer from North Macedonia.

## Project structure

- `index.html` — homepage
- `pages/` — secondary site pages
- `assets/css/` — global and component styles
- `assets/js/` — project JavaScript
- `assets/fonts/` — licensed self-hosted webfonts; see `assets/fonts/README.md` before use or distribution
- `assets/images/` — image collections grouped by subject
- `assets/images/optimized/` — responsive public WebP derivatives
- `assets/images/social/` — social-sharing derivatives
- `assets/icons/` — local icon assets
- `source-asset/` — supplied source originals; never reference these from public HTML
- `content/` — content planning and page drafts
- `docs/` — design, deployment, and editorial guidance
- `review/` — local QA screenshots and audit contact sheets
- `robots.txt` and `sitemap.xml` — search-engine discovery files

## Preview locally

The site has no build step. From the project root, start any static HTTP server.

Using Python:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`.

Using Node.js:

```powershell
npx serve .
```

Opening `index.html` directly also works for basic review, but a local server more closely matches production behavior.

Publico Headline Medium is licensed for self-hosted use on `terramadre2026.org`. Keep its supplied WOFF2/WOFF files unchanged and inside `assets/fonts/publico-headline/`; do not copy, convert, subset or redistribute them.

## Status

Homepage V2.1 has been implemented as a responsive, photo-led editorial experience. The supplied photography has been inventoried, converted to responsive local derivatives, integrated and tested across the required viewport matrix. The secondary pages remain initial placeholders.

Before production approval, confirm image ownership, web/crop/social permissions, subject consent and attribution requirements in `docs/image-rights-register.md`. The remaining content/source approvals are listed in `docs/homepage-v2-build-report.md`.

Deployment is intentionally not configured or performed.
