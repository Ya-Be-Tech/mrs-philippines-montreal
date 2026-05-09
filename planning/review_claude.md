# Code Review: Mrs Philippines Montreal Project Plan & Implementation Status

**Reviewer:** Claude (Sonnet 4.6)  
**Date:** 2026-05-08  
**Status:** BLOCKED - Critical issues prevent site from rendering

---

## 1. Executive Summary

The PLAN.md is well-structured and ambitious in scope, but the codebase has **critical blockers** that prevent any pages from rendering. The project is in an inconsistent state: some files (locales, THEME.md, HOME.md) are production-ready, while the core app structure is broken. The prior reviews by Gemini and Codex correctly identified risk areas (locale code, scope, static vs SSR), and most have been addressed in the plan — but the implementation has not caught up to the plan.

**Verdict:** Plan is solid. Implementation has critical bugs that must be fixed before any further work.

---

## 2. Critical Blockers

### 2.1 app/app.vue renders NuxtWelcome, preventing page routing

**File:** `app/app.vue`  
**Severity:** CRITICAL — Site is non-functional  
**Issue:**
```vue
<!-- Current (BROKEN) -->
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
```

**Problem:** `NuxtWelcome` is a demo component that ignores the `pages/` directory entirely. Even though `pages/index.vue`, `layouts/default.vue`, and the i18n setup exist, they are never invoked. The site shows only a Nuxt welcome screen, not the planned homepage.

**Expected (from plan):**
```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

**Impact:** Blocks all pages from rendering. Must be fixed first before testing home page, about page, or any routing.

---

### 2.2 Missing page components planned in PLAN.md

**Files:** Missing from `pages/`  
**Severity:** CRITICAL

Pages planned in PLAN.md but not implemented:
- `/pages/about.vue` — About page with FAMAS history and milestones
- `/pages/events/2019.vue` — 2019 event archive page
- `/pages/events/2022.vue` — 2022 event archive page
- `/pages/talent.vue` — Talent page with YouTube video integration

**Current state:** Only `/pages/index.vue` exists. The layout points to these pages via `navLinks`:
```javascript
{ to: '/events/2019', label: 'events_2019' }
{ to: '/events/2022', label: 'events_2022' }
```
But clicking these links results in 404.

---

## 3. Plan vs Codebase Gap Analysis

### 3.1 Architecture & Setup

| Aspect | Plan | Codebase | Status |
|---|---|---|---|
| Nuxt 3 + Vue 3 | ✓ Specified | ✓ nuxt ^3.11.2, vue ^3.4.21 | **OK** |
| TypeScript | ✓ Specified | ✓ tsconfig.json present | **OK** |
| Tailwind CSS | ✓ Specified | ✓ @nuxtjs/tailwindcss ^6.12.0 in nuxt.config | **OK** |
| i18n (@nuxtjs/i18n) | ✓ Specified | ✓ @nuxtjs/i18n ^8.3.1 configured | **OK** |
| Static Site Generation (SSG) | ✓ Specified | ❌ nuxt.config.ts has no explicit SSG/static config | **MISSING** |
| Locale code `tl` (Tagalog) | ✓ Specified | ✓ Correct in nuxt.config.ts | **OK** (Codex bug fixed) |
| Gold-and-black theme | ✓ Specified in THEME.md | ✓ Colors correct in CSS (hex codes match) | **OK** |

### 3.2 Font Configuration

| Expected | Found | Status |
|---|---|---|
| Display: Playfair Display or Cinzel | None loaded; generic `font-serif` used | **MISSING** |
| Body: Montserrat or Lato | None loaded; generic `font-sans` used | **MISSING** |
| Custom gradients for gold (#D4AF37) | Not defined | **MISSING** |

**Issue:** THEME.md specifies custom fonts and metallic gradients, but there is no `tailwind.config.ts` to load Google Fonts or define gradient utilities. The current implementation uses Tailwind's system fonts, which are correct but not luxurious.

---

### 3.3 Pages & Content

| Page | Plan | Status | Notes |
|---|---|---|---|
| **Home** | Hero with 2022 Queen carousel, gold button, call-to-action | 🟡 Partial | Hero and video background exist; missing "Get Involved" button and emojis |
| **About** | History, milestones table, cultural impact (4 sections) | ❌ Missing | Content exists in ABOUT.md but no pages/about.vue |
| **2019 Event** | Contestant profiles, Facebook video | ❌ Missing | Data in contestants2019.md (1 video) but no pages/events/2019.vue |
| **2022 Event** | Contestant profiles, Facebook videos (3 entries so far) | ❌ Missing | Data in contestants2022.md but no pages/events/2022.vue |
| **Talent** | YouTube video integration of latest winner | ❌ Missing | No pages/talent.vue |

---

### 3.4 i18n & Localization

| Key | EN | FR | TL | Status |
|---|---|---|---|---|
| `home` | "Home" | "Accueil" | "Home" | ✓ OK |
| `about` | "About" | "À propos" | "Tungkol sa amin" | ✓ OK |
| `home_title` | "Mrs Philippines Montreal" | "Mrs Philippines Montréal" | "Mrs Philippines Montreal" | ✓ OK |
| `home_subtitle_1` | Contains 👑 emoji | Contains 👑 emoji | Contains 👑 emoji | ⚠️ Violates CLAUDE.md |
| `home_subtitle_2` | "What a beautiful journey…" (no emoji) | "Quel beau voyage…" (no emoji) | "Isang napakagandang paglalakbay…" (no emoji) | ⚠️ Inconsistent with HOME.md |
| `get_involved` | ✓ Defined | ✓ Defined | ✓ Defined | ❌ Not rendered on pages/index.vue |
| `see_you_september` | ✓ Defined | ✓ Defined | ✓ Defined | ✓ Rendered |

**Issue:** The plan/HOME.md calls for "What a beautiful journey…♥️💙" but the locales have neither the heart emojis nor the exclamation count correct (plan has "What a beautiful journey…♥️💙", implementation has "What a beautiful journey…").

---

### 3.5 Testing & Build Tools

| Tool | Plan Spec | In package.json | Status |
|---|---|---|---|
| Vitest | ✓ Unit/Component tests | ❌ Not installed | **MISSING** |
| Playwright | ✓ E2E tests | ❌ Not installed | **MISSING** |
| ESLint | ✓ Linting | ❌ Not found | **MISSING** |
| Prettier | ✓ Formatting | ❌ Not found | **MISSING** |

---

### 3.6 Deployment & Configuration

| Item | Plan | Codebase | Status |
|---|---|---|---|
| Firebase Hosting target | ✓ Specified | ❌ No firebase.json or .firebaserc | **MISSING** |
| Nitro static preset | ✓ (implicit in plan) | ❌ Not in nuxt.config.ts | **MISSING** |
| `nuxt generate` script | ✓ Specified in plan | ✓ In package.json scripts | **OK** |
| Build script | ✓ Specified | ✓ In package.json | **OK** |

---

## 4. Prior Reviews Cross-Reference

### 4.1 What Codex flagged:
1. ✅ **Locale code `tg` vs `tl`** — FIXED: Now correctly `tl` for Tagalog
2. ✅ **SSR vs SSG ambiguity** — PLAN addresses it (mentions "SSG" and `nuxt generate`), but nuxt.config.ts still doesn't explicitly set `ssr: false`
3. ⚠️ **Content readiness** — Partially ready: locales and ABOUT.md are done; 2019/2022 contestant data exists but is sparse
4. ⚠️ **Scope too broad** — Plan correctly scoped down to static MVP; implementation hasn't started yet on most pages

### 4.2 What Gemini approved:
1. ✅ Architecture is correct (static Nuxt 3, Firebase)
2. ✅ Locale code is correct (`tl`)
3. ✅ Contestant files cleaned up (redundant 2026 text removed, inconsistent "Mrs" standardized)
4. ✅ i18n strategy approved

---

## 5. Code Quality Notes

### 5.1 CLAUDE.md Violations

**CLAUDE.md Rule:** "Never use emojis in code or in print statements or logging"

**Found:** `locales/en.json`, `locales/fr.json`, `locales/tl.json` all contain `👑` in `home_subtitle_1`

```json
"home_subtitle_1": "From wearing the crown to passing it on 👑"
```

**Impact:** Minor style violation. Emoji is user-facing content (in HTML), not logging. Could argue it's content, not code; but CLAUDE.md says "never" globally.

---

### 5.2 Mobile Navigation Not Functional

**File:** `layouts/default.vue` line with hamburger button  
**Issue:** Button renders but has no click handler or v-model to toggle mobile menu visibility.

```vue
<!-- Hamburger is present but: -->
<button class="md:hidden text-[#D4AF37]">
  <!-- No click handler, no v-show/v-if toggling nav visibility -->
</button>
```

The desktop nav is hidden on mobile (`hidden md:flex`), but there's no way to show it on small screens.

---

### 5.3 Responsive Design Approach

**Good:** Mobile-first utility classes (md: breakpoints) are used correctly.  
**Example:** `class="text-4xl md:text-6xl"` — good scaling.

---

## 6. Recommended Next Steps (Prioritized)

### Phase 1: Fix Critical Blockers (MUST DO FIRST)

1. **Fix app/app.vue** — Replace `NuxtWelcome` with `NuxtLayout` + `NuxtPage`
   - Impact: Site becomes renderable
   - Time: 2 minutes
   - Verify: `npm run dev` should show home page, not Nuxt welcome screen

2. **Create missing page files** — Build stub components for /about, /events/2019, /events/2022, /talent
   - Impact: All nav links work; no more 404s
   - Time: 30 minutes
   - Verify: All 4 nav links render a page (even empty pages are OK for now)

---

### Phase 2: Implement Content (Planned for pages)

3. **pages/about.vue** — Render ABOUT.md content
   - Source: ABOUT.md (4 sections with table)
   - Components needed: Hero section, section headings, milestone table, footer CTA
   - i18n keys: Add history-related keys to locales/

4. **pages/events/2019.vue** — Render contestants2019.md
   - Source: contestants2019.md (1 Facebook Reel + intro text)
   - Components: Video embed, text, hashtag list

5. **pages/events/2022.vue** — Render contestants2022.md
   - Source: contestants2022.md (3 named contestants, 3 Facebook Reels)
   - Components: Card grid or list for contestants, video embeds per contestant

6. **pages/talent.vue** — Create Talent page
   - Content: Not yet specified (plan mentions "YouTube video integration of latest winner")
   - Need: Clarify which winner/video

---

### Phase 3: Polish & Accessibility

7. **Fix mobile navigation** — Add toggle handler and mobile menu in layout
   - Impact: Site is mobile-usable
   - Time: 20 minutes

8. **Add custom fonts** — Create tailwind.config.ts, load Playfair Display and Montserrat via @import
   - Impact: Matches THEME.md visual design
   - Time: 15 minutes

9. **Remove emojis from locales** — Replace 👑 with text "crown" or remove
   - Impact: CLAUDE.md compliance
   - Time: 5 minutes

10. **Add Firebase config** — Create firebase.json and .firebaserc for deployment
    - Impact: Ready to deploy
    - Time: 10 minutes

---

### Phase 4: Testing & Build

11. **Install test tools** — Add Vitest and Playwright to package.json
    - Needed for: Build verification, regression tests, E2E validation

12. **Test static generation** — Run `npm run generate` and verify output
    - Impact: Confirms SSG mode works before deployment

13. **Test i18n routing** — Verify /en/ and /fr/ and /tl/ routes work, browser detection works

---

## 7. Content Readiness Summary

### Ready Now:
- ✅ Home page text (HOME.md) — short, clear
- ✅ About page (ABOUT.md) — comprehensive 4-section article
- ✅ Locales (en.json, fr.json, tl.json) — 13 keys defined across 3 languages
- ✅ Theme CSS (THEME.md) — colors, fonts, components specified
- ✅ 2022 contestant data — 3 contestants with videos

### Needs Clarification:
- ❓ Talent page — No specification for which winner or video URL
- ❓ 2019 event — Only 1 video embed, missing contestant names/profiles
- ❓ Image assets — Plan mentions "2022 Queen carousel" but no image gallery structure
- ❓ "Crowned Queen 2022/" directory — Unknown contents; may contain hero image

---

## 8. Summary Table: Overall Status

| Category | Ready? | Blockers | Notes |
|---|---|---|---|
| **Tech Stack** | ✅ Yes | None | Correct Nuxt/Vue/Tailwind/i18n setup |
| **Routing** | ❌ No | Missing 4 pages | app.vue must be fixed first |
| **Styling** | 🟡 Partial | Missing fonts & tailwind.config | Colors OK, fonts need setup |
| **Content** | 🟡 Partial | Talent page unspecified | Home, About, 2019/2022 ready |
| **i18n** | ✅ Yes | Emoji style issue | Locales complete; remove emojis |
| **Deployment** | ⚠️ Needs config | Firebase config missing | scripts exist, but no deployment setup |
| **Testing** | ❌ No | Tools not installed | Vitest, Playwright needed |

---

## Conclusion

The plan is sound and well-scoped. The prior reviews (Codex, Gemini) identified the right issues and most have been addressed at the plan level. However, the codebase is in a broken state: `app/app.vue` prevents any pages from rendering, and 4 of 5 planned pages don't exist. 

**Start immediately with Phase 1** (2 fixes, ~30 min total) to get a working site. Then implement content pages one at a time, following Phase 2. The design, colors, and i18n infrastructure are solid; it's just missing the page implementations and a few config files.

**Confidence level:** High that the implementation will succeed once Phase 1 blockers are cleared. No architectural surprises or scope creep ahead.
