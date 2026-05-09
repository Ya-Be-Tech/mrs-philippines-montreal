Review of planning/PLAN.md and referenced files

Summary
- Reviewed: planning/PLAN.md, HOME.md, ABOUT.md, THEME.md, contestants 2019/contestants2019.md, contestants 2022/contestants2022.md, nuxt.config.ts, package.json, locales (en/fr/tl), pages/index.vue, layouts/default.vue, Crowned Queen 2022 assets, and public/ (robots/favicon).

Findings
1. Positive implementations
  - Nuxt 3 + Tailwind are configured (nuxt.config.ts includes @nuxtjs/tailwindcss).
  - i18n present and configured with en/fr/tl and langDir = locales/.
  - THEME.md provides a clear gold/black palette and mobile-first guidance.
  - pages/index.vue and layouts/default.vue exist: index uses useHead() (title + meta description) and layout implements i18n selector and navigation.
  - Crowned Queen 2022 images are present (useful for the hero/carousel). public/ contains robots.txt and favicon.ico.

2. Missing or incomplete items (actionable)
  - Pages: About and Events pages referenced in PLAN.md are not implemented (no pages/about.vue or pages/events/* found).
  - Tests & Linting: package.json lacks test and lint scripts; devDependencies for Vitest/Playwright/ESLint/Prettier are not installed.
  - CI: No GitHub Actions workflows (.github/workflows) detected to run lint/tests/build/deploy.
  - Deployment config: No firebase.json or .firebaserc present; deployment steps in PLAN.md are not wired to repo.
  - SEO: index.vue has basic head meta, but global/default meta, Open Graph, and JSON-LD (schema.org) are not implemented site-wide.
  - Accessibility: Embedded iframes lack title/aria attributes. The index iframe is a visual background using pointer-events-none (non-interactive) — OK for background but accessible alternatives and proper aria-hidden/title should be added.
  - Carousel & Galleries: No carousel components or gallery markup found; needs implementation using optimized images and accessible controls.
  - Linting/formatting: No ESLint/Prettier config detected (.eslintrc, .prettierrc missing).

3. Content notes
  - ABOUT.md is polished and ready to be used in an About page.
  - contestants markdowns contain Facebook embeds — consider YouTube or self-hosted optimized media for privacy and performance.
  - HOME.md copy is minimal; index.vue already uses locales for strings but could use richer hero content and structured data.

Concrete recommendations
- Implement missing pages (about, events/2019, events/2022) using existing .md content or Vue components.
- Add linting & formatting: install ESLint + Prettier, add configs, add "lint" script and a pre-commit hook (husky) to run lint staged files.
  Example: npm install -D eslint prettier eslint-config-prettier eslint-plugin-vue @vue/eslint-config-typescript
- Add tests: install vitest + @vue/test-utils and playwright; add "test:unit" and "test:e2e" scripts and a smoke test that runs `npm run build`.
- CI: Add GitHub Action to run: install, lint, test, nuxt generate; add optional deploy step using firebase CLI and a secret token.
- Deployment: Run `firebase init hosting` (or add firebase.json/.firebaserc) and add CI job to run `npm run generate` then `firebase deploy --only hosting` using a deploy token.
- SEO & Social: Add site-wide head config (app.vue or useHead in root) with default meta, Open Graph, and JSON-LD for Organization/Event.
- Accessibility: Make embeds accessible (aria-hidden when decorative, title when interactive), ensure carousel is keyboard-operable and images include alt text.
- Carousel: Create a responsive hero/carousel component that uses images from "Crowned Queen 2022" with lazy loading and caption support.

Suggested todo list (for SQL/todos)
- implement-carousel: Build responsive hero carousel using Crowned Queen 2022 assets, ensure accessibility and i18n.
- create-about-page: Convert ABOUT.md into pages/about.vue or use markdown-based route.
- create-events-pages: Create pages/events/2019.vue and pages/events/2022.vue using contestants markdowns.
- add-linting-ci: Install ESLint/Prettier and add GitHub Action for linting.
- add-tests: Install Vitest and Playwright and add basic unit & e2e tests.
- improve-seo: Implement site-wide meta, Open Graph, and JSON-LD.
- accessible-embeds: Replace raw iframes with accessible embed component or wrappers.
- add-deploy-cfg: Add firebase.json, .firebaserc and CI deploy job.

Next steps offer
- Can implement one item now (recommended order: add-linting-ci, create-about-page, implement-carousel).
- Can add the above todos into the session tracker and open PRs incrementally.

Review performed by: Copilot CLI
