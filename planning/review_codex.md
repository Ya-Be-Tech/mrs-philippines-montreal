# Review of `planning/plan.md`

## Overall Opinion

The plan is a solid direction for the Mrs Philippines Montreal website. It identifies the right core goals: a polished cultural/community site, strong mobile experience, multilingual support, event archives, a talent page, and a premium gold-and-black visual identity.

The plan is strongest as a vision document. Before it becomes an implementation plan, it needs more detail around scope, deployment mode, content readiness, accessibility, and what should be deferred until requirements are confirmed.

## What Looks Good

- The page structure is sensible: Home, About, archives, Talent, Contact, and multilingual support.
- Nuxt 3, Tailwind CSS, TypeScript, and `@nuxtjs/i18n` are appropriate choices for this project.
- The gold-and-black theme matches the event branding and existing theme direction.
- The plan correctly calls out SEO, mobile-first design, galleries, and language switching as important.
- Testing language switching and form submission is the right instinct for the highest-risk user flows.

## Concerns

### 1. Scope Is Too Broad for a First Release

The plan includes a full multilingual site, event archives, galleries, contestant profiles, backend contact handling, testing, CI/CD, Firebase Hosting, and Cloud Run. That is a lot for the first pass.

I would split this into phases:

1. Build the static public site structure and visual theme.
2. Add the main content pages and galleries.
3. Add i18n once English copy is stable.
4. Add contact/backend functionality only after the contact requirement is confirmed.
5. Add deployment automation and broader tests after the site shape is stable.

### 2. Backend Should Be a Decision Point

The plan assumes a Node.js backend on Cloud Run for form handling. That may be unnecessary. If the contact page is still undecided, the plan should not commit to Fastify/Express and Cloud Run yet.

For this site, a static Nuxt deployment is likely enough at first. Contact could later be handled with a mail link, hosted form, Firebase Function, or Cloud Run service depending on what the customer actually wants.

### 3. Deployment Needs Clarification

The plan mentions Nuxt as SPA/SSR and also says Firebase Hosting will serve the frontend. Firebase Hosting is excellent for static generated Nuxt output, but SSR needs a server runtime.

The plan should explicitly choose the first deployment target. My recommendation is:

- Use `nuxt generate` for a static site.
- Deploy the generated site to Firebase Hosting.
- Add Cloud Run only if a real backend/API is needed later.

### 4. i18n Details Need Correction

The plan says EN, FR, and TG. In `nuxt.config.ts`, the locale code is currently `tg` for Tagalog. That is risky because `tg` usually means Tajik. Tagalog is commonly represented as `tl`, and Filipino may be represented as `fil`.

Before content work begins, decide whether the language should be labeled Tagalog or Filipino, then use the correct locale code consistently.

The plan should also specify:

- Browser-language detection behavior.
- English fallback when the browser language is unsupported.
- A visible manual language switcher.
- Whether translated routes are required or only translated page content.

### 5. Content Readiness Is the Biggest Risk

The site depends on real names, dates, contestant profiles, event history, images, winner details, and translations. The plan should include a content inventory before implementation.

Recommended content checklist:

- Confirm official event date and countdown target for 2026.
- Confirm all page copy in English.
- Confirm translations or translation review process.
- Confirm which 2019 and 2022 photos belong to which contestants.
- Confirm image usage permission.
- Confirm YouTube/Facebook embed usage and fallback content.

### 6. Accessibility Needs Real Acceptance Criteria

The plan lists accessibility as language support, but accessibility is broader than translation. The gold-on-black theme can work, but it needs careful contrast checks.

Add acceptance criteria for:

- Text contrast.
- Keyboard navigation.
- Alt text for all meaningful images.
- Labels and validation messages for forms.
- Reduced-motion behavior for carousels and transitions.
- Mobile tap target sizes.

### 7. Testing Plan Is Too Generic

The TDD section is reasonable but broad. This project does not need heavy unit testing at the start unless there is real business logic.

Better initial test targets:

- Site builds successfully.
- Main pages render.
- Language switcher works.
- Gallery/carousel controls work.
- YouTube embed renders with fallback.
- Contact form validation works, if a form is built.

## Recommended MVP

For the first useful release, I would build:

- Home page with 2022 Queen visual treatment and event message.
- About page using the existing history material.
- 2022 Queen carousel.
- Talent page with the confirmed YouTube video.
- Archive landing sections for 2019 and 2022.
- Basic i18n structure, with English content first.
- Static Firebase Hosting deployment instructions.

I would defer custom backend, Cloud Run, CI/CD, and full multilingual polish until the customer confirms the remaining content and contact requirements.

## Bottom Line

The plan is directionally good and uses the right stack, but it should be made more phased and more concrete. The best path is to launch a strong static Nuxt site first, organize the content and images carefully, fix the language-code decision, and only add backend infrastructure when a real dynamic requirement exists.
