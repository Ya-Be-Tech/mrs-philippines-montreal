# Project Plan: Mrs Philippines Montreal Website

## Introduction
The Mrs Philippines Montreal (MPM) website is a professional digital platform dedicated to celebrating the heritage, beauty, and leadership of the Filipino community in Montreal. This project aims to deliver a modern, sleek, and mobile-first experience using Nuxt 3 and Tailwind CSS.

## Objectives
- **Cultural Preservation:** Showcase the history and milestones of the pageant.
- **Modern Presence:** Provide a professional and elegant digital identity using the gold-and-black theme.
- **Accessibility:** Support English, French, and Filipino/Tagalog speakers with high-contrast, accessible design.
- **Engagement:** Feature past winners and current event information (2026).

## Scope (Phase 1 - Static MVP)
The initial release focuses on a high-quality static site:
- **Landing Page (Home):** Hero section with the 2022 Queen carousel and mission statement.
- **About Page:** Detailed history of MPM and FAMAS.
- **Event Archives (2019 & 2022):** Photo galleries and contestant profiles.
- **Talent Page:** Featuring the latest talent contest winner (YouTube integration).
- **Multilingual Support (i18n):** Full site translation in EN, FR, and TL (Filipino/Tagalog).

*Note: The Contact page and any backend components (Node.js, Cloud Run) have been removed from the scope as per user request. The site will be strictly static.*

## Architecture
- **Frontend:** Nuxt 3 (Vue.js) using Static Site Generation (SSG).
- **Styling:** Tailwind CSS for rapid, mobile-first design.
- **i18n:** `@nuxtjs/i18n` with `tl` (Filipino/Tagalog) locale code.
- **Hosting:** Google Firebase Hosting (Static delivery).
- **Assets:** Optimized image hosting and YouTube/Facebook video embeds.

## Technologies
- **Framework:** Nuxt 3
- **Language:** TypeScript
- **CSS Framework:** Tailwind CSS
- **i18n:** @nuxtjs/i18n
- **Testing:** Vitest (Unit/Component), Playwright (E2E)
- **Deployment:** Google Firebase Hosting

## Features
- **Mobile-First Design:** Optimized for smartphones and tablets.
- **Gold-and-Black Theme:** Luxurious aesthetic inspired by the event ticket with careful contrast checks.
- **SEO Optimization:** Metadata and schema markup for better visibility.
- **Interactive Galleries:** Smooth transitions and high-quality image displays.
- **Language Switcher:** Intuitive UI for switching between EN, FR, and TL.

## Accessibility Criteria
- **Contrast:** Ensure all gold text on black meets WCAG AA standards.
- **Navigation:** Full keyboard navigation support.
- **Media:** Alt text for all images and aria-labels for embeds.
- **Touch:** Minimum tap target sizes of 44x44px for mobile.

## Testing Strategy
Focusing on stability and user experience:
- **Smoke Tests:** Verify site builds and all pages render.
- **i18n Tests:** Confirm language switcher updates content and browser detection works.
- **UI Tests:** Verifying carousel controls and video embed responsiveness.
- **Linter/Static Analysis:** ESLint and Prettier for code quality.

## Deployment
- **Method:** `nuxt generate` to build static files.
- **Target:** `firebase deploy` to Firebase Hosting.
- **Instructions:** Comprehensive GCP setup guide for non-technical users.

## Conclusion
This refined plan delivers a world-class static website that honors the Filipino community's traditions. By focusing on a phased static approach, we ensure high performance and reliability while maintaining a sophisticated design that matches the prestige of Mrs Philippines Montreal.
