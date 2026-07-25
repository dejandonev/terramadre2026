# Terra Madre 2026 Project Rules

## Scope

- Build and maintain a static website for Terra Madre 2026.
- Keep draft content clearly marked with `TODO` until it is reviewed.
- Do not publish, deploy, or introduce a build system without approval.

## HTML and Bootstrap

- Use semantic HTML5 landmarks and elements (`header`, `nav`, `main`, `section`, `article`, and `footer`) according to their meaning.
- Use Bootstrap 5.3 components and utilities through the approved CDN setup.
- Keep project-specific styles in `assets/css/main.css` and reusable component styles in `assets/css/components.css`.
- Keep project-specific behavior in `assets/js/main.js`; do not add inline JavaScript unless required for structured data.

## Language and Content

- Write public-facing content in Macedonian, using the Cyrillic alphabet unless a proper name requires otherwise.
- Set `lang="mk"` on every HTML document.
- Treat all current placeholder text as non-final marketing copy.
- Follow `docs/content-guidelines.md` when approved content is added.

## Accessibility

- Target WCAG 2.2 AA.
- Ensure all interactive elements are keyboard accessible and have a visible focus state.
- Use meaningful headings in a logical hierarchy and descriptive link text.
- Provide useful alternative text for informative images and empty `alt` text for decorative images.
- Associate labels with form controls and expose validation messages accessibly.
- Preserve sufficient color contrast and support reduced-motion preferences.

## SEO

- Give every page a unique, descriptive title and meta description before launch.
- Use one clear `h1` per page and semantic heading order.
- Add canonical URLs, Open Graph metadata, structured data, and production sitemap URLs only after the public domain is confirmed.
- Keep `robots.txt` and `sitemap.xml` aligned with the deployed URL structure.

## Performance

- Prefer optimized AVIF or WebP images with explicit dimensions and responsive `srcset` values.
- Lazy-load below-the-fold media.
- Minimize third-party dependencies and avoid render-blocking assets where practical.
- Keep CSS and JavaScript small, cacheable, and free of unused code.

## Deployment

- The intended host is Cloudflare Pages.
- Deploy the repository root as a static site with no build command unless the architecture changes.
- Configure the production domain, redirects, headers, and environment-specific settings in Cloudflare only after approval.
- Never commit credentials, API keys, or private configuration.
- Do not deploy from an agent task unless the user explicitly requests it.
