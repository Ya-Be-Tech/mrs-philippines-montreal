# Mrs Philippines Montreal Project — Team Structure & Implementation Plan

**Project:** Mrs Philippines Montreal Website (Static Nuxt 3 MVP)  
**Date:** 2026-05-08  
**Status:** Ready for implementation (post-review)  
**Deployment Target:** Firebase Hosting  

---

## Overview

This document defines the team roles, responsibilities, and work packages to deliver the Mrs Philippines Montreal website according to `planning/PLAN.md`, informed by reviews in `planning/review_claude.md`, `planning/review_gemini.md`, and `planning/review_codex.md`.

### Key Constraints from Reviews
- **Critical blockers (review_claude.md):** Fix `app/app.vue` and create missing pages
- **Content readiness (review_codex.md):** Validate image assets and contestant data completeness
- **Tech debt (review_gemini.md):** Locale code confirmed correct (`tl`); no rework needed
- **CLAUDE.md directives:** Theme design, SEO review, TDD approach, designer agent involvement, linter checks

---

## Claude Models & Team Assignments

Each team member is assigned a Claude model based on task complexity and specialization:

| Role | Model | Rationale |
|---|---|---|
| **Lead Developer** | Claude Sonnet 4.6 | Fast, capable for frontend architecture and component design |
| **Designer Agent** | Claude Opus 4.7 | Most capable; handles visual design decisions, accessibility audits, detailed UX review |
| **Content & Localization Lead** | Claude Sonnet 4.6 | Balanced for content coordination, i18n key management, stakeholder communication |
| **Translator** | Translator Subagent (Gemini) | Specialized translation between EN, FR, and Tagalog with cultural context |
| **QA & Tester** | Claude Sonnet 4.6 | Fast for test writing, linter configuration, test automation |
| **DevOps & Deployment Lead** | Claude Haiku 4.5 | Lightweight for straightforward infrastructure setup and deployment scripts |

---

## Team Roles & Responsibilities

### 1. Lead Developer (Frontend/Nuxt)
**Model:** Claude Sonnet 4.6  
**Responsibility:** Core architecture, routing, component structure, build configuration  
**Deliverables:**
- [ ] Fix `app/app.vue` (remove `NuxtWelcome`, use `NuxtLayout` + `NuxtPage`)
- [ ] Create missing page skeleton components: `/about`, `/events/2019`, `/events/2022`, `/talent`
- [ ] Configure Nuxt for static generation (explicit `ssr: false` or nitro preset)
- [ ] Set up Firebase deployment config (`firebase.json`, `.firebaserc`)
- [ ] Install test tools (Vitest, Playwright, ESLint, Prettier)
- [ ] Implement responsive navigation with mobile hamburger toggle
- [ ] Verify all i18n routes work (`/`, `/fr/`, `/tl/`)

**Success Criteria:**
- `npm run dev` displays home page (not Nuxt welcome screen)
- All 4 nav links load pages without 404
- Mobile menu toggle works on screens < 768px
- `npm run generate` produces static files ready for Firebase

---

### 2. Designer Agent / Theme Lead
**Model:** Claude Opus 4.7  
**Responsibility:** Visual design, branding consistency, accessibility, mobile-first approach  
**CLAUDE.md directives to fulfill:**
- Establish theme CSS for the whole site based on `THEME.md`
- Design good-looking frontpage with 2022 Queen crowning in background (images from `Crowned Queen 2022/`)
- Design talent page with YouTube video embed
- Ensure mobile-first responsive design

**Deliverables:**
- [ ] Audit and confirm `THEME.md` is fully implemented
  - Load custom fonts (Playfair Display, Montserrat) via `tailwind.config.ts`
  - Add metallic gradient utilities for gold elements (`#D4AF37` → `#F9E27E` gradient)
  - Define color tokens in Tailwind for consistency
- [ ] Design `pages/index.vue` hero section
  - Confirm 2022 Queen video background is optimized (review_gemini.md: confirm video embeds)
  - Hero text: title, subtitles, call-to-action buttons aligned with HOME.md
  - Remove emojis (👑) from rendered text (CLAUDE.md: "never use emojis")
- [ ] Design `pages/about.vue` layout
  - Render ABOUT.md (4 sections: Evolution, Milestones table, Cultural impact, Current legacy)
  - Ensure visual hierarchy and readability
  - Mobile-first responsive tables
- [ ] Design event archive pages (`/events/2019`, `/events/2022`)
  - Facebook video embed layout (responsive, mobile-friendly)
  - Contestant cards/profiles (grid or list)
  - 2019: sparse data (1 video, intro text) vs 2022: 3 contestant profiles
- [ ] Design talent page
  - YouTube embed (responsive)
  - Text supporting the talent winner story
- [ ] Accessibility audit
  - Confirm gold-on-black contrast meets WCAG AA (per PLAN.md)
  - Keyboard navigation support
  - Alt text for images
  - Touch targets ≥ 44x44px

---

### 3. Content & Localization Lead
**Model:** Claude Sonnet 4.6  
**Responsibility:** Content completion, translation quality, i18n keys, language switcher  
**Deliverables:**
- [ ] Audit locales/en.json, fr.json, tl.json
  - Confirm all 13 keys are present and consistent across languages
  - Add any missing keys for About, Events, Talent pages (e.g., section headings, milestone labels)
  - Remove emojis from locale strings (review_claude.md: CLAUDE.md violation)
  - Verify Tagalog (TL) translations are culturally appropriate
- [ ] Validate 2019 contestant data (contestants2019.md)
  - Currently: 1 Facebook Reel + intro text
  - Verify with stakeholders: Are there named contestants? Need full profiles?
  - Clarify: Should 2019 page list contestant names or just show event highlight reel?
- [ ] Validate 2022 contestant data (contestants2022.md)
  - Currently: 3 named contestants (Raziel De Leon, Almaleen Castillo, Marissa Obaldo) with videos
  - Confirm: Is this the complete list? Any missing profiles?
  - Gather: Images/photos of contestants for gallery (review_codex.md: content readiness risk)
- [ ] Clarify Talent page content
  - Which winner? Which YouTube video URL?
  - Context/story text for the video
  - Translate to EN, FR, TL
- [ ] Test language switcher
  - Locale change persists (cookie-based detection via i18n strategy)
  - Browser language detection redirects correctly on first visit
  - All page content renders in selected language

**Success Criteria:**
- All locale files have same keys and no placeholder text
- All pages have i18n-enabled headings/labels
- Contestant data validated and complete
- Talent page content finalized and translated

---

### 4. Translator (Specialized Localization)
**Model:** Translator Subagent (Gemini-based)  
**Responsibility:** High-quality translation and cultural adaptation of content between English, French, and Tagalog  
**Deliverables:**
- [ ] Translate all UI strings (i18n keys)
  - English → French (Canadian French, formal tone)
  - English → Tagalog (Filipino community context, cultural sensitivity)
  - Use Translator subagent for specialized translation
- [ ] Translate page content
  - HOME.md hero text
  - ABOUT.md history (4 sections, table headers, milestones)
  - Event page descriptions (contestants, historical context)
  - Talent page supporting narrative
- [ ] Cultural adaptation review
  - Ensure Tagalog preserves Filipino cultural nuances (pageant traditions, FAMAS history)
  - Confirm French maintains Montreal cultural context
  - Review terminology (e.g., "Mrs" vs "Señora", "pageant" vs "concours")
- [ ] Quality assurance
  - Flag any idiomatic expressions that don't translate well
  - Suggest alternative phrasings for cultural appropriateness
  - Verify translated content fits responsive layouts (text length differences)

**Success Criteria:**
- All translations complete and culturally appropriate
- No untranslated placeholder text in EN, FR, TL locales
- Terminology consistent across all pages (e.g., "Mrs Philippines" vs alternatives)
- Translations reviewed by native speakers (if available)
- Text length variations accounted for in layout (FR is ~30% longer than EN)

---

### 6. QA & Tester
**Model:** Claude Sonnet 4.6  
**Responsibility:** Testing strategy, test automation, regression prevention, CLAUDE.md compliance  
**CLAUDE.md directives:**
- Follow TDD (test-driven development) approach
- Always use linter to check for errors/warnings before committing

**Deliverables:**
- [ ] Set up ESLint + Prettier
  - Configure for Vue 3 + TypeScript + Nuxt 3
  - Run on pre-commit hook
  - Enforce CLAUDE.md style rules (no emojis in code, clear docstrings, short methods)
- [ ] Write unit tests (Vitest)
  - i18n locale switching logic
  - Nav link routing
  - SEO meta tags (review_claude.md: review SEO optimization per CLAUDE.md directive #3)
- [ ] Write E2E tests (Playwright)
  - Home page renders correctly in all 3 languages
  - Nav links navigate without 404
  - Mobile nav toggle works
  - Video embeds load (Facebook/YouTube iframes)
  - Carousel functionality if present
- [ ] Smoke test static build
  - `npm run generate` completes without errors
  - All pages present in `.output/public/`
  - All locale variants exist (`/`, `/fr/`, `/tl/`)
- [ ] SEO audit (CLAUDE.md directive #3)
  - Verify useHead() meta tags on all pages
  - Confirm og:image, og:title, og:description for social sharing
  - Check schema markup (if applicable) for event/person types
  - Test Open Graph preview in social media validators
- [ ] Accessibility testing
  - Color contrast checker (gold-on-black)
  - Keyboard navigation (Tab through all interactive elements)
  - Screen reader test (landmark regions, alt text)
  - Mobile tap target sizes (≥ 44x44px)

**Success Criteria:**
- Linter runs cleanly on all commits
- All critical tests pass (home, about, routing, i18n, static build)
- SEO meta tags present and valid
- WCAG AA accessibility confirmed

---

### 7. DevOps & Deployment Lead
**Model:** Claude Haiku 4.5  
**Responsibility:** Build configuration, Firebase setup, CI/CD readiness, deployment documentation  
**Deliverables:**
- [ ] Configure Firebase Hosting
  - Create `firebase.json` with deployment rules (cache static assets, route SPA correctly)
  - Create `.firebaserc` with project ID
  - Set up `firebase deploy` script in package.json
- [ ] Document Firebase setup for non-technical stakeholders (review_codex.md: "comprehensive GCP setup guide")
  - Step-by-step gcloud login
  - Firebase project creation
  - Deploy command walkthrough
- [ ] Validate static generation
  - Confirm `nuxt.config.ts` has explicit static mode (no SSR)
  - Test `npm run generate` produces correct output
  - Pre-render strategy for dynamic routes (if any)
- [ ] Set up deployment checklist
  - Pre-deploy linter check
  - Static build verification
  - SEO meta tags validation
  - Performance metrics (Lighthouse score target?)

**Success Criteria:**
- `firebase deploy` command successfully deploys to Firebase Hosting
- Site is live at Firebase URL
- All pages load without 404 or server errors
- Setup documentation is clear enough for non-developers to repeat

---

## Work Packages & Phase Plan

### Phase 1: Unblock Core Infrastructure (Weeks 1)
**Lead:** Frontend Developer  
**Time estimate:** ~4 hours

1. Fix `app/app.vue` — Replace `NuxtWelcome` with `NuxtLayout` + `NuxtPage`
2. Create missing page stubs: `pages/about.vue`, `pages/events/2019.vue`, `pages/events/2022.vue`, `pages/talent.vue`
3. Install missing tools: Vitest, Playwright, ESLint, Prettier
4. Configure static generation in `nuxt.config.ts`

**Definition of Done:**
- `npm run dev` displays home page
- All nav links work (no 404s)
- `npm run generate` completes without errors

---

### Phase 2: Design & Theme (Weeks 1–2)
**Lead:** Designer Agent  
**Parallel to Phase 1**  
**Time estimate:** ~8 hours

1. Create `tailwind.config.ts`
   - Load Playfair Display (serif), Montserrat (sans)
   - Define color tokens for gold/black theme
   - Add gradient utilities
2. Design home page hero section
   - Integrate 2022 Queen video background
   - Style title, subtitles, CTA buttons
   - Ensure mobile-first responsive
3. Design About page layout
   - Structure ABOUT.md content (4 sections)
   - Milestones table styling
   - Responsive typography
4. Design event archive pages
   - Video embed layout
   - Contestant card/profile layout
5. Design talent page
   - YouTube embed layout
   - Supporting text/story section
6. Accessibility review
   - Color contrast audit
   - Keyboard nav walkthrough
   - Alt text validation

**Definition of Done:**
- All pages render with custom fonts and theme
- Mobile-first responsive on all screen sizes
- WCAG AA contrast confirmed
- No emoji emojis in rendered HTML (removed from locales)

---

### Phase 3: Content & Localization (Weeks 2–3)
**Leads:** Content & Localization Lead + Translator  
**Parallel to Phase 2**  
**Time estimate:** ~10 hours (6 hours content lead + 4 hours translator)

#### Content & Localization Lead Tasks:
1. Complete i18n locale files
   - Add missing keys for new pages
   - Remove emojis from strings
   - Provide source English text for Translator
2. Validate & complete contestant data
   - Confirm 2019 contestants list
   - Confirm 2022 contestants list
   - Gather images/photos
3. Define Talent page content
   - Identify winning video
   - Write supporting narrative in English
4. Test language switcher
   - Locale persistence
   - Browser detection

#### Translator Tasks (Parallel to Content Lead):
1. Translate all UI strings using Translator Subagent
   - English → French (Canadian French)
   - English → Tagalog (Filipino cultural context)
2. Translate page content
   - HOME.md hero text
   - ABOUT.md history (4 sections)
   - Event descriptions
   - Talent page narrative
3. Cultural adaptation review
   - Verify Tagalog preserves Filipino traditions (pageant, FAMAS history)
   - Confirm French maintains Montreal context
   - Flag any idiomatic expressions or cultural nuances
4. Quality assurance
   - Check for text length variations (FR ~30% longer than EN)
   - Ensure consistent terminology across all pages

**Definition of Done:**
- All locale files complete and emoji-free
- Contestant data validated
- Talent page content ready
- All translations (EN, FR, TL) complete and culturally appropriate
- Language switcher tested in all 3 locales
- Translator sign-off on cultural accuracy

---

### Phase 4: Testing & QA (Weeks 3–4)
**Lead:** QA Tester  
**Parallel to Phase 3**  
**Time estimate:** ~8 hours

1. Set up ESLint + Prettier
2. Write unit tests (i18n, routing, meta tags)
3. Write E2E tests (nav, pages, language switching)
4. SEO audit
   - Meta tags on all pages
   - Open Graph validation
   - Schema markup (if applicable)
5. Accessibility testing
   - Color contrast checker
   - Keyboard navigation
   - Screen reader
   - Touch target sizes
6. Smoke test static build

**Definition of Done:**
- Linter passes with 0 errors/warnings
- All unit & E2E tests pass
- SEO audit completed and documented
- Accessibility audit completed and documented
- Static build verified

---

### Phase 5: Deployment & Launch (Week 4)
**Lead:** DevOps Lead  
**Time estimate:** ~2 hours

1. Configure Firebase Hosting
   - `firebase.json`, `.firebaserc`
2. Document Firebase setup for stakeholders
3. Deploy to Firebase
4. Verify site live and functional
5. Final smoke test in production

**Definition of Done:**
- Site live on Firebase Hosting URL
- All pages load without errors
- Deployment documentation complete
- Stakeholders can re-deploy if needed

---

## Risk Mitigation (from reviews)

| Risk | Source | Mitigation |
|---|---|---|
| **Content gaps (2019 contestants, Talent page, images)** | review_codex.md: "content readiness is biggest risk" | Content Lead validates all data early (Phase 3) |
| **Font/theme mismatch** | review_claude.md: "fonts not loaded" | Designer creates tailwind.config.ts (Phase 2) |
| **Mobile nav broken** | review_claude.md: "hamburger has no logic" | Frontend Dev implements toggle in Phase 1 |
| **SEO not optimized** | CLAUDE.md directive #3: "review SEO optimization" | QA Tester runs audit in Phase 4 |
| **Static generation misconfigured** | review_claude.md: "no explicit SSG config" | Frontend Dev sets `ssr: false` in Phase 1 |
| **Emoji compliance** | review_claude.md: CLAUDE.md violation | Content Lead removes from locales in Phase 3 |
| **Firebase not ready** | review_claude.md: "no Firebase config" | DevOps Lead creates config files in Phase 5 |

---

## Acceptance Criteria (Definition of Done for Full Project)

### Functional
- ✅ Home page displays with 2022 Queen video background
- ✅ About page displays ABOUT.md content with proper styling
- ✅ Events pages display contestant info and video embeds (no 404s)
- ✅ Talent page displays YouTube video with context
- ✅ Language switcher works in all 3 languages (EN, FR, TL)
- ✅ Mobile navigation toggles correctly on small screens
- ✅ All pages render from static build (`npm run generate`)

### Quality
- ✅ ESLint passes with 0 errors/warnings
- ✅ All unit tests pass (i18n, routing, SEO)
- ✅ All E2E tests pass (nav, pages, language switching)
- ✅ WCAG AA accessibility confirmed
- ✅ SEO meta tags present and valid on all pages

### Content
- ✅ All i18n keys present in EN, FR, TL
- ✅ All contestant data validated and complete
- ✅ Talent page has finalized content and video
- ✅ No emojis in rendered HTML (removed from locales)

### Deployment
- ✅ Firebase Hosting configured (firebase.json, .firebaserc)
- ✅ Site deployed and live at Firebase URL
- ✅ Deployment documentation provided for stakeholders
- ✅ Firebase setup guide is clear for non-developers

---

## Dependencies & Assumptions

### Assumptions
1. Images for hero section exist in `Crowned Queen 2022/` directory (review_gemini.md: "pictures of 2022 event")
2. Facebook video URLs in contestant files are valid and will embed correctly
3. Talent page YouTube video URL will be provided by stakeholder (currently undefined)
4. Tagalog (TL) translations are culturally appropriate (review_gemini.md: confirmed locale code)
5. Firebase project credentials are available for deployment
6. Designer Agent is available for Phase 2 (per CLAUDE.md directives)
7. Translator Subagent (Gemini-based) is available for Phase 3 for EN ↔ FR ↔ TL translations
8. Native Tagalog and French speakers available for cultural review (optional but recommended)

### External Dependencies
- Google Fonts API (Playfair Display, Montserrat)
- Facebook Graph API (video embeds)
- YouTube embed API
- Firebase Hosting account & credentials

---

## Communication & Handoffs

- **Phase 1 → Phase 2:** Frontend Dev delivers working page structure to Designer
- **Phase 2 → Phase 3:** Designer delivers styled pages to Content Lead; Content Lead delivers i18n keys to Translator
- **Phase 3 (parallel):** 
  - Content Lead provides English source text to Translator
  - Translator uses Translator Subagent to translate EN → FR and EN → TL
  - Translator delivers translations back to Content Lead for integration
  - Content Lead delivers final locales (all 3 languages) and validated content to Developer & QA
- **Phase 3 → Phase 4:** Content Lead delivers final locales to QA Tester; Translator sign-off on cultural accuracy
- **Phase 4 → Phase 5:** QA Tester delivers test report to DevOps Lead; DevOps Lead prepares deployment
- **Phase 5 → Stakeholders:** DevOps Lead delivers live site and deployment docs

---

## Summary

This team structure enables parallel work across design, content, code, and translation. With 7 specialized roles (Frontend Dev, Designer, Content Lead, Translator, QA, DevOps), we can address all review findings (critical blockers first, then design/content/translation, then testing/deployment) and deliver the static Mrs Philippines Montreal website in ~4 weeks with high quality, cultural accuracy, and stakeholder confidence.

**Key advantage:** Dedicated Translator role using the Translator Subagent ensures professional, culturally appropriate translations for the English, French, and Tagalog-speaking communities served by the website.

**Next Step:** Assign roles and start Phase 1 (unblock core infrastructure).
