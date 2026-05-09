# Updated Review of `planning/plan.md`

## Overall Assessment

The plan is much stronger now. It has moved from an over-broad full-stack plan to a focused static MVP, which fits this project better. Removing the contact/backend scope and standardizing on Nuxt static generation plus Firebase Hosting is the right call for a community event website whose current needs are mostly content, images, galleries, video embeds, and multilingual presentation.

The plan now aligns well with the current project setup: Nuxt 3, Tailwind CSS, `@nuxtjs/i18n`, TypeScript, and the `tl` locale code are all reflected in the repo configuration.

## What Improved

- The scope is now clearly labeled as **Phase 1 - Static MVP**.
- Backend and Cloud Run have been removed from the initial release, which reduces complexity.
- Deployment is now clear: `nuxt generate` followed by Firebase Hosting.
- The Tagalog/Filipino locale has been corrected from `tg` to `tl`.
- Accessibility is no longer treated only as translation; the plan now includes contrast, keyboard navigation, media labels, and touch target criteria.
- The testing plan is more practical and focused on build stability, i18n, carousel controls, and responsive embeds.

## Remaining Findings

### 1. Content Inventory Still Needs to Be Explicit

The biggest remaining risk is still content readiness. The plan should add a concrete inventory step before page implementation.

Recommended checklist:

- Confirm final English copy for each page.
- Confirm who will review French and Tagalog/Filipino translations.
- Confirm official 2026 event date for any countdown or event messaging.
- Map each 2019 and 2022 photo to the correct contestant/event section.
- Confirm names, titles, years, and spellings for winners and contestants.
- Confirm image and video usage permissions.

### 2. "Full Site Translation" May Be Too Much for Phase 1

The plan says full site translation in EN, FR, and TL. That is a good goal, but it can block launch if translations are not ready.

I would phrase Phase 1 as:

- i18n infrastructure included.
- English content complete first.
- French and Tagalog/Filipino translations added as content becomes approved.

That keeps the site build moving without lowering the multilingual goal.

### 3. Facebook Video Embeds Need a Fallback Plan

The plan mentions YouTube/Facebook video embeds. YouTube embeds are usually straightforward. Facebook embeds can be more fragile, slower, and less predictable on mobile or privacy-restricted browsers.

For the home hero/background, I would avoid depending on a Facebook iframe as the primary visual. Use a locally optimized image or video asset where possible, and keep Facebook as a secondary embed or source reference.

### 4. Static Hosting and Dynamic Features Should Stay Clearly Separated

The plan correctly removes backend scope. Keep that boundary strict during implementation.

Avoid adding features that quietly require server behavior, such as:

- Custom form submission.
- Voting.
- Login/admin editing.
- Server-rendered private data.
- Runtime image processing.

If any of those become required later, they should be added as a new phase with a separate architecture decision.

### 5. SEO Plan Needs Specific Page Requirements

"Metadata and schema markup" is a good target, but the plan should specify the minimum SEO requirements per page.

Suggested baseline:

- Unique title and meta description for every page.
- Open Graph image and sharing metadata.
- Canonical URLs.
- Event schema only if the 2026 event details are confirmed.
- Organization schema only if official organization details are confirmed.

### 6. Gallery Requirements Need More Detail

"Interactive galleries" is still vague. The plan should define what the galleries must do.

Recommended decisions:

- Carousel or grid per page/section.
- Whether images open in a lightbox.
- Whether captions are required.
- How contestant profiles connect to images.
- How galleries behave on mobile.
- Whether images should be lazy-loaded.

### 7. Testing Tools Are Listed but Not Installed Yet

The plan lists Vitest, Playwright, ESLint, and Prettier, but the current `package.json` does not include those packages. That is fine, but the plan should identify them as setup tasks.

For Phase 1, I would prioritize:

- `npm run generate`
- A basic lint/format setup
- A small Playwright smoke test only after routes exist

Vitest can wait unless the project gains reusable logic worth unit testing.

## Suggested Next Implementation Order

1. Confirm content inventory and image mapping.
2. Build shared layout, navigation, footer, theme tokens, and responsive structure.
3. Implement i18n routing and language switcher using `en`, `fr`, and `tl`.
4. Build Home, About, Talent, and Archive pages in English.
5. Add galleries/carousels with optimized local assets.
6. Add translations once English copy is stable.
7. Add SEO metadata and accessibility pass.
8. Generate and deploy static output to Firebase Hosting.

## Bottom Line

The revised plan is now technically coherent and much more realistic. The static MVP approach is the right foundation. The remaining work is mostly about making content, gallery behavior, translation workflow, and SEO acceptance criteria more concrete before implementation starts.
