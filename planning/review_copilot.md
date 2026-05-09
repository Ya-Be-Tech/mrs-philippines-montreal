Review of planning/PLAN.md and referenced files

Summary
- Reviewed: planning/PLAN.md, HOME.md, ABOUT.md, THEME.md, contestants 2019/contestants2019.md, contestants 2022/contestants2022.md, nuxt.config.ts, package.json and locales (en/fr/tl).

Findings
1. Alignment with PLAN.md
  - Nuxt 3 and Tailwind are configured (nuxt.config.ts includes @nuxtjs/tailwindcss).
  - i18n is present with locales en/fr/tl and langDir set to locales/ — good.
  - THEME.md exists and provides a clear gold/black palette and mobile-first guidance.
  - HOME.md, ABOUT.md, and event archives exist and contain starter content and embedded videos.

2. Missing or incomplete items (actionable)
  - Testing: package.json has no test or lint scripts and devDependencies for Vitest/Playwright/ESLint are missing. PLAN.md lists Vitest and Playwright but they are not installed/configured.
  - Linting/CI: No ESLint, Prettier, nor CI config (GitHub Actions) found to run lint/tests/build on push.
  - SEO: PLAN.md mentions SEO/schema. No metadata files or head tags implementation found in repository (need checks in pages/layouts/components).
  - Accessibility: Many embeds (IFRAMEs) lack aria-label or title; images and gallery markup not present here — ensure alt text and keyboard controls when implementing carousel.
  - Hero carousel: PLAN.md requires 2022 Queen carousel; HOME.md references using 2022 queen as background but no component exists yet.
  - Assets: THEME mentions unbluredticket.gif as color source — confirm high-res asset is present (unbluredticket.gif exists at repo root), and optimize images in public/.
  - Deployment scripts: package.json includes build/generate but no firebase.json or firebase configuration files checked — add deployment instructions/CI for firebase deploy.

3. Small content notes
  - ABOUT.md is well-written and ready for site content.
  - contestants markdowns include embedded Facebook videos; consider switching to YouTube or hosted optimized videos for better performance and privacy.
  - HOME.md text is minimal; expand hero copy and add structured data (schema.org) for event/year.

Recommendations (next steps)
- Add test and lint tooling: install vitest, @vue/test-utils, playwright; add npm scripts: "test:unit", "test:e2e", "lint".
- Add ESLint + Prettier and run autofix; create GitHub Action to run lint/tests on PRs.
- Implement SEO baseline: default meta tags in app.html or use Nuxt head config; add JSON-LD for event and organization.
- Replace raw iframes with accessible embed components (aria-label, title, responsive wrapper) and ensure keyboard controls.
- Implement the 2022 carousel component; use optimized images from Crowned Queen 2022 directory; include captions and alt text.
- Create firebase.json and .firebaserc, plus a CI job to run `npm run generate` and `firebase deploy --only hosting` using a deploy token.

Suggested todo list (for SQL/todos)
- add_todos: implement-carousel, add-linting-ci, add-tests, improve-seo, accessible-embeds, add-deploy-cfg

If desired, proceed to implement a prioritized subset (e.g., add linting and CI first). I can create the todo entries and open PRs for each change.

Review performed by: Copilot CLI

