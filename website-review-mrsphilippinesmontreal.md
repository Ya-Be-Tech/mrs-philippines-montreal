# Website Review: mrsphilippinesmontreal.com

**Last updated:** 2026-05-14 (end of day)
**Review originally conducted:** 2026-05-13

---

## Overview

**Site:** [mrsphilippinesmontreal.com](https://mrsphilippinesmontreal.com)
**Purpose:** Official website for the Mrs Philippines Montreal pageant — a personality, talent, and wit contest celebrating Filipino-Canadian mothers and Filipino heritage in Montreal.
**Framework:** Nuxt 3 (Vue.js SSR) with Tailwind CSS, `@nuxtjs/i18n`, Firebase App Hosting.
**Multilingual:** English (default), Français, Tagalog — full i18n parity enforced by automated tests.

---

## Site Structure

### Current Pages

| Route | Page | Status |
|---|---|---|
| `/` | Home | Active |
| `/about` | About / History | Active |
| `/events` | Events Archive (2019, 2022, 2026 cards) | Active |
| `/events/2019` | 2019 Event | Active |
| `/events/2022` | 2022 Event (highlights video + talent section) | Active |
| `/events/2026` | 2026 Upcoming Event | **Added 2026-05-14** |
| `/talent` | Talent Contest Winner | Active (file kept, removed from nav) |

### Navigation

- Top-level sticky nav bar with `logomrsphilippines.svg` logo (transparent background, renders on dark header).
- Navigation items: Home, About, Events — **3 links (Talent removed 2026-05-14, merged into /events/2022)**.
- Language switcher: English / Français / Tagalog.
- Mobile hamburger menu with proper `aria-expanded` and toggle.

---

## Page-by-Page Analysis

### Homepage (`/`)

**Current state (as of 2026-05-14):**
- Hero section: queen photo (`hero-queen-2022.png`) with gold overlay and headline.
- Tagline: *"From wearing the crown to passing it on"*
- Single CTA: "Explore Our History" → `/about`.
- Announcement banner: "See you September 26th, 2026!" (all 3 languages).
- Sponsors section in footer: proper card layout with logo, URL, and sponsor text.

**Completed:**
- ✅ Removed non-functional "Get Involved" CTA (YB decision).
- ✅ Updated announcement banner with specific date: September 26th, 2026.
- ✅ Renamed hero image from `FB_IMG_1778016152022.png` → `hero-queen-2022.png`.
- ✅ Replaced minimal Ya Be Tech banner with a proper sponsors card section.

**Pending (Phase 2):**
- 🔄 Homepage feels thin — needs intro paragraph, highlights, and/or photo gallery.

---

### About Page (`/about`)

**Current state:** Vertical gold timeline (1960s → 1990s → 2010 → 2011 → 2012 → 2019 → 2022 → 2026) with gold dot markers, year labels, titles, and links to event pages. Cultural impact and legacy sections retained below.

**Completed:**
- ✅ Visual timeline component implemented (replaced flat text + table).
- ✅ Photos skipped — YB has no pictures available.

**Pending (Phase 2):**
- 🔄 Mission/vision statement section.
- 🔄 Organizer info — not yet discussed.

---

### Events Archive (`/events`)

**Current state:** Card grid with 3 events — 2026 (Coming Soon badge, top), 2022, 2019. Each card links to its event page.

**Completed:**
- ✅ `/events/2026` upcoming event page — "Coming Soon" badge, September 26th date, trilingual "candidates will be revealed soon" teaser.
- ✅ 2026 card added to the archive index, ordered most recent first.

---

### 2022 Event Page (`/events/2022`)

**Current state:** Three sections in order:
1. Evening Highlights — `public/videos/event-2022-highlights.mp4` with trilingual description.
2. Talent Contest Winner — Raziel De Leon YouTube embed with name and story text.
3. Contestant cards — Raziel De Leon, Almaleen Castillo, Marissa Obaldo (Facebook reels).

**Completed:**
- ✅ Evening highlights video added.
- ✅ Talent section merged in from `/talent` page.

---

### 2019 Event Page (`/events/2019`)

**Current state:** Facebook video embed. No changes made.

**Pending (Phase 2):**
- 🔄 Standardize structure with 2022 page (if more media becomes available).

---

### Talent Page (`/talent`)

**Current state:** File kept (routing test references it), removed from nav. Content duplicated into `/events/2022`.

---

## Technical Review

### Strengths

- Nuxt 3 with SSR and static prerendering — good SEO foundation.
- Full i18n parity across EN / FR / TL enforced by unit tests.
- Tailwind CSS with a consistent design system (`mpm-gold`, `mpm-black`, custom fonts).
- TDD: unit tests covering routing and i18n key parity.

### Issues to Address

#### SEO & Meta

- ⬜ Page titles generic — could add more keywords and tagline.
- ⬜ Open Graph / Twitter Card meta tags missing or minimal.
- ⬜ No structured data (JSON-LD) for Event schema on event pages.

#### Performance & Assets

- ⬜ Hero image not served in WebP/AVIF — still a PNG.
- ⬜ Sponsor banner images not lazy-loaded.
- ⬜ `font-display: swap` not explicitly verified on Google Fonts import.

#### Accessibility

- ⬜ Skip-to-content link missing.
- ⬜ Color contrast not audited (hero overlay text vs. gold).
- ⬜ Mobile nav missing `aria-hidden` on hidden state.

#### Architecture

- ⬜ No custom 404 page.
- ⬜ `robots.txt` present but sitemap not generated.

---

## UX / Design Review

### What Works

- Clean gold-on-black luxury aesthetic, consistent with THEME.md.
- Tagline is warm and community-oriented.
- Simplified nav (4 items) is cleaner on mobile.

### Still Needed

- ⬜ Contact page — no way for sponsors or contestants to reach the org.
- ⬜ Social media links (Facebook 724+ likes, YouTube) not linked anywhere on the site.
- ⬜ Footer bare — needs social links, quick nav, contact info.
- ⬜ No registration/ticket flow for September 26th, 2026 event.

---

## Priority Action Items

### Completed ✅

- [x] Remove "Get Involved" CTA
- [x] Update announcement banner with specific date (September 26th, 2026)
- [x] Rename hero image to `hero-queen-2022.png`
- [x] Redesign sponsor section (proper card with heading, logo, URL, text)
- [x] Create unified events archive at `/events`
- [x] Add full evening highlights video to `/events/2022` with trilingual description
- [x] Simplify nav to 3 links (Home / About / Events)
- [x] Create `/events/2026` upcoming event page ("candidates will be revealed soon")
- [x] Merge talent section into `/events/2022`
- [x] Add visual timeline to About page (1960s → 2026)
- [x] Replace "MPM" text with vectorial logo (`logomrsphilippines.svg`)
- [x] Favicon — self-contained gold crown SVG on black (`public/favicon.svg`)

### Phase 2 — Not Yet Started

### Phase 2 — Not Yet Decided (open for discussion)

- [ ] Add contact page with email/form
- [ ] Add social media links (Facebook, YouTube) to header/footer
- [ ] Enhance footer (quick links, contact, social icons)
- [ ] Queens / Hall of Fame page
- [ ] Open Graph meta tags for social sharing
- [ ] Structured data (JSON-LD) for event pages
- [ ] Image optimization (WebP/AVIF, responsive srcset)
- [ ] Skip-to-content accessibility link
- [ ] Custom 404 page
- [ ] Sitemap generation
- [ ] Blog / News section
- [ ] Homepage content (intro paragraph, gallery, stats)

---

## Tech Stack (Confirmed)

- **Nuxt 3.15** with SSR + static prerendering (Firebase App Hosting)
- **Tailwind CSS** via `@nuxtjs/tailwindcss` — custom `mpm-*` color tokens, Playfair Display + Montserrat fonts
- **i18n** via `@nuxtjs/i18n 10.3.0` — `prefix_except_default` strategy, browser detection with cookie
- **Testing** — Vitest (unit: routing + i18n parity), Playwright (E2E)
- **`useHead()`** composable for per-page SEO meta tags
