# Mrs Philippines Montreal - Comprehensive Development Implementation Plan

**Date:** 2026-05-09  
**Status:** Ready for Implementation  
**Project Timeline:** 4 weeks (5 phases)  
**Deployment Target:** Firebase Hosting (Static)

---

## Executive Summary

The Mrs Philippines Montreal website project is a static Nuxt 3 website (Vue 3, TypeScript, Tailwind CSS, i18n) celebrating the Filipino community in Montreal. The codebase has critical blockers preventing page rendering, but the architecture, design system, content, and i18n infrastructure are solid. This plan prioritizes fixing blockers first (Phase 1), then executing design/content/testing in parallel phases (2-4), concluding with deployment (Phase 5).

**Key Metrics:**
- 5 pages to deliver (Home, About, 2019 Event, 2022 Event, Talent)
- 3 languages (EN, FR, TL)
- ~32 total hours of work across 7 team roles
- 22 new/modified files
- Critical path: Phase 1 blocks all other phases

**Total Duration:** 4 weeks (2026-05-13 to 2026-06-07)

---

## Quick Links to Detailed Sections

1. **Detailed Phase Breakdown** — Task-by-task breakdown with hours and dependencies
2. **File Architecture** — Complete list of files to create/modify with purposes
3. **Critical Path Analysis** — What must happen first; blockers and sequencing
4. **Quality Gates** — Checkpoints after each phase with validation criteria
5. **Risk Mitigation Plan** — All identified risks with concrete mitigation actions
6. **Success Metrics** — Measurable outcomes (code quality, performance, accessibility, content)
7. **Implementation Timeline** — Gantt-style weekly breakdown
8. **Team Role & Assignment** — Who does what, hours, Claude model per role

---

## Phase Summary Table

| Phase | Lead | Duration | Hours | Key Deliverable | Must Finish By |
|-------|------|----------|-------|-----------------|-----------------|
| **1. Unblock Core Infrastructure** | Frontend Dev | Week 1 | 4h | Site renders (no more NuxtWelcome); routing works | 2026-05-15 |
| **2. Design & Theme** | Designer (Opus 4.7) | Weeks 1-2 | 8h | 5 pages styled with theme, fonts, mobile-responsive | 2026-05-22 |
| **3. Content & Localization** | Content + Translator | Weeks 2-3 | 10h | All locales complete, all translations done, content validated | 2026-05-29 |
| **4. Testing & QA** | QA Tester | Weeks 3-4 | 8h | Linter clean, tests pass, accessibility certified, build verified | 2026-05-31 |
| **5. Deployment & Launch** | DevOps | Week 4 | 2h | Live on Firebase, documented, stakeholders trained | 2026-06-07 |

---

## Critical Path (Must-Happen-First Items)

These items MUST complete before anything else can proceed:

1. **Phase 1.1: Fix app/app.vue** (0.25h)
   - Replace `NuxtWelcome` with `NuxtLayout` + `NuxtPage`
   - Deadline: 2026-05-13 (Day 1)
   - Blocks: Everything

2. **Phase 1.2: Create page stubs** (0.75h)
   - Create empty pages/about.vue, pages/events/2019.vue, etc.
   - Deadline: 2026-05-14
   - Blocks: Phase 2 design, Phase 3 content, Phase 4 tests

3. **Phase 1.3: Configure SSG** (0.5h)
   - Add `ssr: false` to nuxt.config.ts
   - Deadline: 2026-05-14
   - Blocks: Phase 5 deployment

4. **Phase 2.1: Create tailwind.config.ts** (1h)
   - Load fonts, define colors, add gradients
   - Deadline: 2026-05-15
   - Blocks: All page design (Phase 2.2-2.5)

5. **Phase 3A.1-3A.5: Locale structure** (3.5h)
   - Create ~20 new i18n keys in English
   - Deadline: 2026-05-20
   - Blocks: Phase 3B translations

---

## Phase 1 Details: Unblock Core Infrastructure

**Lead:** Frontend Developer (Sonnet 4.6)  
**Duration:** Week 1 (Mon 2026-05-13 to Wed 2026-05-15)  
**Estimated Hours:** 4

### 1.1 Fix app/app.vue (0.25h)
**Current (BROKEN):**
```vue
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
```

**Required (FIXED):**
```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

**Verification:** `npm run dev` should show home page (not Nuxt welcome screen)

### 1.2 Create Missing Page Stubs (0.75h)

Create 4 empty page files:
- `pages/about.vue` — Template with `<h1>About</h1>` + layout
- `pages/events/2019.vue` — Template with `<h1>2019 Event</h1>`
- `pages/events/2022.vue` — Template with `<h1>2022 Event</h1>`
- `pages/talent.vue` — Template with `<h1>Talent</h1>`

**Verification:** All 4 nav links load without 404

### 1.3 Configure Static Site Generation (0.5h)

Update `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  ssr: false,  // Add this line
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/rss.xml'],
    },
    static: true  // Add this line
  }
})
```

**Verification:** `npm run generate` completes without errors; `.output/public/` contains all pages

### 1.4 Implement Mobile Nav Toggle (0.5h)

Update `layouts/default.vue` to add state management:
```vue
<script setup>
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <!-- Hamburger button -->
  <button @click="toggleMobileMenu" class="md:hidden text-[#D4AF37]">
    <!-- SVG icon -->
  </button>
  
  <!-- Mobile nav menu (show/hide based on mobileMenuOpen) -->
  <div v-show="mobileMenuOpen" class="md:hidden">
    <!-- Nav links -->
  </div>
</template>
```

**Verification:** Test on mobile DevTools (Nexus 5X, 375px width) — menu toggles on/off

### 1.5 Install Development Tools (1h)

Add to `package.json`:
```json
{
  "devDependencies": {
    "vitest": "^1.0.0",
    "@playwright/test": "^1.40.0",
    "eslint": "^8.50.0",
    "prettier": "^3.0.0",
    "@nuxt/test-utils": "^3.8.0",
    "typescript": "^5.2.0"
  }
}
```

Run: `npm install`

**Verification:** All tools installed without errors; `npm list` shows all packages

### 1.6 Verify Routing (1h)

**Test checklist:**
- [ ] `npm run dev` loads home page (index.vue) at `http://localhost:3000/`
- [ ] Click "About" nav link → loads `/about` without 404
- [ ] Click "2019 Event" → loads `/events/2019` without 404
- [ ] Click "2022 Event" → loads `/events/2022` without 404
- [ ] Click "Talent" → loads `/talent` without 404
- [ ] Click home logo → returns to `/`
- [ ] Language selector works (changes locale)
- [ ] `npm run generate` → `.output/public/` contains index.html, about/index.html, etc.

**Definition of Done (Phase 1):**
- ✅ Home page displays (not Nuxt welcome)
- ✅ All 4 nav links work
- ✅ Mobile nav toggles on < 768px
- ✅ Static build output ready

**Handoff to Phase 2/3:** Frontend Dev confirms all tests pass; Designer and Content Lead can now start their work

---

## Phase 2 Details: Design & Theme

**Lead:** Designer Agent (Opus 4.7)  
**Duration:** Weeks 1-2 (parallel to Phase 1, finishes 2026-05-22)  
**Estimated Hours:** 8

### 2.1 Create tailwind.config.ts (1h)

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'mpm-black': '#0A0A0A',
        'mpm-gold': '#D4AF37',
        'mpm-gold-light': '#F9E27E',
        'mpm-gold-dark': '#996515',
        'mpm-text': '#F5F5F5',
        'mpm-text-muted': '#B59A5A',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #996515 0%, #D4AF37 50%, #F9E27E 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
```

**Add to app.vue or global CSS:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;600&display=swap');
```

**Verification:** Open DevTools → Fonts tab → Playfair Display and Montserrat load

### 2.2 Design Home Page Hero (1.5h)

Enhance `pages/index.vue`:
- Use new `font-serif` class on h1 (Playfair Display)
- Use new color tokens (mpm-gold, mpm-black, mpm-text)
- Ensure title is center-aligned with proper line-height
- Style both CTA buttons (Explore + Get Involved)
- Test on mobile (320px) and desktop (1440px)

**Deliverable:** Home page looks luxurious with gold/black theme, responsive

### 2.3 Design About Page (1.5h)

Create `pages/about.vue`:
```vue
<template>
  <div class="bg-mpm-black text-mpm-text min-h-screen px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-serif font-bold text-mpm-gold mb-12">
        {{ $t('about_title') }}
      </h1>
      
      <!-- Section 1: Evolution -->
      <section class="mb-12">
        <h2 class="text-3xl font-serif font-bold text-mpm-gold-light mb-6">
          {{ $t('about_section_1_title') }}
        </h2>
        <p class="text-lg leading-relaxed text-mpm-text">
          [ABOUT.md content: Early Years, Ambassador Shift, Mentorship]
        </p>
      </section>
      
      <!-- Section 2: Milestones Table -->
      <section class="mb-12">
        <h2 class="text-3xl font-serif font-bold text-mpm-gold-light mb-6">
          {{ $t('about_section_2_title') }}
        </h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b-2 border-mpm-gold">
              <th class="text-left py-2 px-2 text-mpm-gold">Year</th>
              <th class="text-left py-2 px-2 text-mpm-gold">Winner</th>
              <th class="text-left py-2 px-2 text-mpm-gold">Significance</th>
            </tr>
          </thead>
          <tbody>
            <!-- Rows from ABOUT.md milestone table -->
          </tbody>
        </table>
      </section>
      
      <!-- Section 3 & 4 similar structure -->
    </div>
  </div>
</template>
```

**Deliverable:** About page with all 4 sections, responsive table, proper typography

### 2.4 Design Event Archive Pages (2h)

**pages/events/2019.vue:**
```vue
<template>
  <div class="bg-mpm-black text-mpm-text min-h-screen px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-serif font-bold text-mpm-gold mb-8">
        {{ $t('events_2019_title') }}
      </h1>
      <p class="text-lg text-mpm-text-muted mb-8">
        {{ $t('events_2019_intro') }}
      </p>
      
      <!-- Facebook video embed -->
      <div class="aspect-video mb-12">
        <iframe src="[Facebook video URL]" />
      </div>
    </div>
  </div>
</template>
```

**pages/events/2022.vue:**
```vue
<template>
  <div class="bg-mpm-black text-mpm-text min-h-screen px-4 py-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl font-serif font-bold text-mpm-gold mb-8">
        {{ $t('events_2022_title') }}
      </h1>
      
      <!-- Contestant cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Raziel De Leon -->
        <div class="border border-mpm-gold p-6 rounded">
          <h3 class="text-2xl font-serif font-bold text-mpm-gold-light">
            {{ $t('contestant_name_1') }}
          </h3>
          <div class="aspect-video my-4">
            <iframe src="[Facebook video URL]" />
          </div>
        </div>
        
        <!-- Cards 2 & 3 similar -->
      </div>
    </div>
  </div>
</template>
```

**Deliverable:** Both event pages with responsive video layout and contestant cards

### 2.5 Design Talent Page (1h)

```vue
<template>
  <div class="bg-mpm-black text-mpm-text min-h-screen px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-serif font-bold text-mpm-gold mb-8">
        {{ $t('talent_title') }}
      </h1>
      
      <!-- YouTube embed -->
      <div class="aspect-video mb-12">
        <iframe src="https://www.youtube.com/embed/[VIDEO_ID]" />
      </div>
      
      <!-- Story text -->
      <p class="text-lg leading-relaxed text-mpm-text">
        {{ $t('talent_story') }}
      </p>
    </div>
  </div>
</template>
```

**Deliverable:** Talent page with responsive YouTube embed and story text

### 2.6 Accessibility Audit (1h)

**Checklist:**
- [ ] WebAIM Contrast Checker: #D4AF37 on #0A0A0A = 4.5:1 ratio ✓
- [ ] Keyboard navigation: Tab through all nav links, buttons, language selector
- [ ] Mobile DevTools: Test on Nexus 5X (320px), iPhone SE (375px)
- [ ] Alt text plan: All images to have descriptive alt text
- [ ] Tap targets: All buttons ≥ 44x44px (measure with DevTools)

**Definition of Done (Phase 2):**
- ✅ All 5 pages render with custom fonts
- ✅ Mobile-responsive (320px, 768px, 1024px, 1440px)
- ✅ Gold-on-black contrast ≥ 4.5:1 (WCAG AA)
- ✅ Keyboard navigation works
- ✅ Emojis removed from rendered HTML

---

## Phase 3 Details: Content & Localization

**Leads:** Content & Localization Lead (Sonnet 4.6, 6h) + Translator (Translator Subagent, 4h)  
**Duration:** Weeks 2-3 (parallel to Phase 2, finishes 2026-05-29)  
**Estimated Hours:** 10

### 3A.1 Audit & Update Locales (1.5h)

Current locale files: `locales/en.json`, `locales/fr.json`, `locales/tl.json`

**Tasks:**
1. Remove emojis from all 3 files (find & replace 👑 → crown)
2. Add ~20 new i18n keys for About, Events, Talent pages
3. Verify all 3 files have identical key counts

**Target structure:**
```json
{
  "home": "Home",
  "about": "About",
  "about_title": "About Mrs Philippines Montreal",
  "about_section_1_title": "The Evolution of the Pageant",
  // ... ~28 total keys
}
```

**Verification:** Key count in EN = FR = TL

### 3A.2-3A.4 Validate Content (3h)

1. **2019 Event:** Confirm with stakeholder
   - Is it 1 video only, or are there contestant names/profiles?
   - Get final Facebook video URL

2. **2022 Event:** Confirm with stakeholder
   - Verify 3 contestants: Raziel De Leon, Almaleen Castillo, Marissa Obaldo
   - Confirm all Facebook video URLs work
   - Optional: Gather photos/images

3. **Talent Page:** CRITICAL — Currently undefined
   - Which winning video? YouTube URL?
   - Story/context text (English version)
   - Must finalize by 2026-05-20 for Translator

### 3A.5 Implement i18n Keys (1.5h)

Write English versions of all new keys in `locales/en.json`:
```json
{
  "about_title": "About Mrs Philippines Montreal",
  "about_section_1_title": "The Evolution of the Pageant",
  "about_section_1_content": "[Content from ABOUT.md...]",
  "about_section_2_title": "Key Milestones & Winners",
  // ... source text for translator
  "talent_title": "Talent Contest Winner",
  "talent_story": "[Story from stakeholder...]"
}
```

**Deliverable:** All English keys written; ready for Translator

### 3A.6 Test Language Switcher (0.5h)

Manual QA:
- [ ] Change locale to FR → page content updates (title, nav, buttons)
- [ ] Change locale to TL → page content updates
- [ ] Refresh page → locale persists (cookie-based)
- [ ] Browser language: Set to FR → first visit redirects to /fr/

**Verification:** Language switching works in all 3 locales

---

### 3B.1-3B.5 Translator Tasks (Parallel to 3A)

**Using Translator Subagent (Gemini-based)**

### 3B.1 Translate UI Strings (1.5h)

Take EN locale keys and translate to FR and TL:
- `home` → FR: `Accueil`, TL: `Home`
- `about_title` → FR: `À propos de Mrs Philippines Montréal`, TL: `Tungkol sa Mrs Philippines Montreal`
- Etc. for all ~28 keys

**Deliverable:** FR and TL locales with all UI strings translated

### 3B.2 Translate Page Content (1.5h)

Translate detailed page content (ABOUT.md, Talent story, Event descriptions):
- HOME.md hero text (title + subtitles, no emojis)
- ABOUT.md (4 sections, milestone table headers)
- Event descriptions (2019 intro, 2022 intro)
- Talent story from stakeholder

**Deliverable:** All page content in FR and TL

### 3B.3 Translate Talent Narrative (0.5h)

Once stakeholder provides English story, translate to FR and TL:
- Ensure tone matches the winning talent's story
- Cultural context preserved

### 3B.4 Cultural Adaptation Review (0.5h)

**For Tagalog (TL):**
- Verify Filipino cultural traditions are preserved (pageant terminology, FAMAS history)
- Check for idioms that don't translate (flag for alternative phrasing)
- Confirm "Mrs Philippines" terminology is correct

**For French (FR):**
- Verify Montreal cultural context (use "Montréal" with accent)
- Check formal vs informal tone (formal is appropriate for this audience)
- Ensure Quebec French terminology where applicable

**Flag issues:**
- Idioms that don't translate
- Terminology inconsistencies
- Text length issues (FR ~30% longer than EN)

### 3B.5 Quality Assurance: Text Length Check (0.5h)

Test all translated content in responsive layouts:
- Does FR text fit in buttons? (Expected: FR 20-30% longer, should still fit)
- Do table headers wrap? (Adjust column widths if needed)
- Do hero subtitles fit on mobile? (Test on 320px DevTools)

**Deliverable:** All translations complete, culturally reviewed, layout-tested

---

**Definition of Done (Phase 3):**
- ✅ All i18n keys present and consistent (EN = FR = TL)
- ✅ No emojis in locale files
- ✅ All content validated with stakeholder
- ✅ All translations complete and culturally appropriate
- ✅ Language switcher tested in all 3 locales
- ✅ Translator sign-off on cultural accuracy

---

## Phase 4 Details: Testing & QA

**Lead:** QA & Tester (Sonnet 4.6)  
**Duration:** Weeks 3-4 (parallel to Phase 3, finishes 2026-05-31)  
**Estimated Hours:** 8

### 4.1 ESLint + Prettier Setup (1h)

**Create `.eslintrc.json`:**
```json
{
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "@nuxt/eslint-config",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-debugger": "warn",
    "vue/multi-word-component-names": "off"
  }
}
```

**Create `.prettierrc.json`:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

**Add to package.json scripts:**
```json
{
  "scripts": {
    "lint": "eslint . --ext .vue,.ts,.js",
    "lint:fix": "eslint . --ext .vue,.ts,.js --fix",
    "format": "prettier --write '**/*.{vue,ts,js,json,css,md}'"
  }
}
```

**Verification:** `npm run lint` runs without errors

### 4.2 Unit Tests (2h)

**Create `tests/unit/i18n.spec.ts`:**
```typescript
import { describe, it, expect } from 'vitest'
import { useI18n } from 'vue-i18n'

describe('i18n - Language Switching', () => {
  it('switches from EN to FR', () => {
    // Test that locale changes and content updates
  })
  
  it('switches from EN to TL', () => {
    // Test that locale changes and content updates
  })
  
  it('persists locale preference in cookie', () => {
    // Test that localStorage/cookie remembers locale
  })
})
```

**Create `tests/unit/routing.spec.ts`:**
```typescript
describe('Routing', () => {
  it('loads home page at /', () => {
    // Verify index.vue renders
  })
  
  it('loads about page at /about', () => {
    // Verify about.vue renders
  })
  
  it('loads events 2019 page', () => {
    // Test /events/2019
  })
  
  it('loads events 2022 page', () => {
    // Test /events/2022
  })
  
  it('loads talent page', () => {
    // Test /talent
  })
})
```

**Coverage Target:** 80%+ for i18n, routing, and SEO meta tags

**Verification:** `npm run test` → All tests pass

### 4.3 E2E Tests with Playwright (2h)

**Create `tests/e2e/pages.spec.ts`:**
```typescript
import { test, expect } from '@playwright/test'

test.describe('Page Rendering', () => {
  test('home page loads and displays content', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await expect(page.locator('h1')).toContainText('Mrs Philippines Montreal')
  })
  
  test('about page loads without 404', async ({ page }) => {
    await page.goto('http://localhost:3000/about')
    await expect(page).not.toHaveURL('**/404')
  })
  
  test('2019 event page loads', async ({ page }) => {
    await page.goto('http://localhost:3000/events/2019')
    await expect(page.locator('h1')).toContainText('2019')
  })
  
  test('2022 event page loads with contestant cards', async ({ page }) => {
    await page.goto('http://localhost:3000/events/2022')
    const cards = page.locator('[data-testid="contestant-card"]')
    await expect(cards).toHaveCount(3)
  })
  
  test('talent page loads with YouTube embed', async ({ page }) => {
    await page.goto('http://localhost:3000/talent')
    const iframe = page.locator('iframe[src*="youtube"]')
    await expect(iframe).toBeVisible()
  })
})
```

**Create `tests/e2e/i18n.spec.ts`:**
```typescript
test.describe('Language Switching', () => {
  test('changes content when locale changes to FR', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    // Select FR from language dropdown
    // Verify content updates (e.g., "Accueil" instead of "Home")
  })
  
  test('changes content when locale changes to TL', async ({ page }) => {
    // Similar for Tagalog
  })
  
  test('mobile nav toggle works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }) // Mobile
    const toggleButton = page.locator('button.hamburger')
    await toggleButton.click()
    // Verify nav menu appears
  })
})
```

**Verification:** `npm run test:e2e` → All E2E tests pass across Chrome and Firefox

### 4.4 SEO Audit (1h)

**Checklist per page:**
- [ ] Home: `useHead()` includes title, description, og:image, og:url
- [ ] About: Same meta tags
- [ ] 2019 Event: Same meta tags
- [ ] 2022 Event: Same meta tags
- [ ] Talent: Same meta tags

**Example implementation:**
```vue
<script setup>
useHead({
  title: 'Mrs Philippines Montreal - Home',
  meta: [
    { name: 'description', content: 'Official website of Mrs Philippines Montreal.' },
    { property: 'og:title', content: 'Mrs Philippines Montreal' },
    { property: 'og:description', content: 'Official website celebrating the Filipino community in Montreal.' },
    { property: 'og:image', content: 'https://...image-url...' },
    { property: 'og:url', content: 'https://mrsphilippinesmontreal.web.app/' },
  ]
})
</script>
```

**Verification:** Validate with [Open Graph debugger](https://developers.facebook.com/tools/debug/og/object)

### 4.5 Accessibility Testing (1.5h)

**Color Contrast:**
- Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Test #D4AF37 (gold) on #0A0A0A (black) → Should be ≥ 4.5:1 ✓

**Keyboard Navigation:**
- Tab through all nav links, buttons, form inputs
- Verify focus indicator is visible
- Ensure tab order is logical (left-to-right, top-to-bottom)

**Screen Reader Testing:**
- Use NVDA (Windows) or VoiceOver (Mac)
- Verify landmarks are announced (header, main, footer)
- Verify all images have alt text
- Verify form labels are associated with inputs
- Verify video embeds have aria-label

**Touch Target Sizes:**
- Measure with DevTools: All buttons should be ≥ 44x44px
- Test on actual mobile device if possible

**Deliverable:** Accessibility audit report with pass/fail for each criterion

### 4.6 Static Build Verification (0.5h)

```bash
npm run generate
```

**Verify output:**
- [ ] `.output/public/index.html` exists (home page)
- [ ] `.output/public/about/index.html` exists
- [ ] `.output/public/events/2019/index.html` exists
- [ ] `.output/public/events/2022/index.html` exists
- [ ] `.output/public/talent/index.html` exists
- [ ] `.output/public/fr/index.html` exists (French home)
- [ ] `.output/public/tl/index.html` exists (Tagalog home)
- [ ] All locale variants exist for all pages (15 route combinations)
- [ ] No broken links (check `.output/public/**/*.html` for 404s)

**Definition of Done (Phase 4):**
- ✅ ESLint: 0 errors, 0 warnings
- ✅ All unit tests pass
- ✅ All E2E tests pass (15 route variants)
- ✅ SEO audit complete (meta tags on all pages)
- ✅ WCAG AA accessibility 100% pass
- ✅ Static build verified (all routes present)
- ✅ Lighthouse mobile ≥ 85, desktop ≥ 90 (local build)

---

## Phase 5 Details: Deployment & Launch

**Lead:** DevOps & Deployment Lead (Haiku 4.5)  
**Duration:** Week 4 (Mon-Tue 2026-06-03 to 2026-06-07)  
**Estimated Hours:** 2

### 5.1 Firebase Hosting Configuration (1h)

**Create `firebase.json`:**
```json
{
  "hosting": {
    "public": ".output/public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|ico|png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=3600"
          }
        ]
      }
    ]
  }
}
```

**Create `.firebaserc`:**
```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

**Add to package.json:**
```json
{
  "scripts": {
    "deploy": "npm run generate && firebase deploy"
  }
}
```

### 5.2 Deployment Documentation (0.75h)

Create `docs/DEPLOYMENT.md` with step-by-step guide for non-technical stakeholders:

```markdown
# How to Deploy Mrs Philippines Montreal Website

## Prerequisites
- Google Cloud account (ask yann@mpm.ca for access)
- Firebase CLI installed (`npm install -g firebase-tools`)

## Steps

### 1. Authenticate
\`\`\`bash
firebase login
\`\`\`
Follow browser prompts to log in with your Google account.

### 2. Build the static site
\`\`\`bash
npm run generate
\`\`\`
This creates the `.output/public/` directory with all compiled pages.

### 3. Deploy
\`\`\`bash
firebase deploy
\`\`\`

### 4. Verify
- Open the Firebase URL shown in terminal output
- Test all 5 pages load correctly
- Verify language switcher works

## Troubleshooting

**Error: "Permission denied"**
- Contact GCP admin to add your email to the Firebase project

**Error: "Invalid firebase.json"**
- Check firebase.json syntax (JSON lint tool)

**Deployment succeeded but site shows 404**
- Verify `.output/public/` exists and contains `index.html`
- Check firebase.json `public` path is correct

## Rolling Back
\`\`\`bash
firebase hosting:channels:list  # See previous deployments
firebase hosting:clone [previous-version]  # Restore previous
\`\`\`
```

### 5.3 Deploy to Firebase (0.25h)

```bash
npm run deploy
```

**Pre-deploy checklist:**
- ✅ `npm run lint` passes
- ✅ All tests pass
- ✅ `npm run generate` completes without errors
- ✅ Firebase login successful: `firebase auth:login`
- ✅ Dry-run passed: `firebase deploy --dry-run`

**After deploy:**
- Note the Firebase Hosting URL (e.g., `https://mrsphilippinesmontreal.web.app`)
- Note build time and file sizes from Firebase console

### 5.4 Post-Launch Validation (0.25h)

**Smoke test on live site:**
- [ ] Home page loads (not Nuxt welcome)
- [ ] All 5 nav links work
- [ ] Language switcher works (set locale, refresh, persists)
- [ ] Video embeds load from production
- [ ] No console errors (Chrome DevTools)
- [ ] Lighthouse production score ≥ 85 mobile, ≥ 90 desktop
- [ ] Page load time < 3s on 4G throttle

**Announcement:**
- Email stakeholders with live URL
- Provide link to deployment documentation

**Definition of Done (Phase 5):**
- ✅ Site live on Firebase Hosting
- ✅ All pages accessible without 404
- ✅ Language switcher works in production
- ✅ Deployment documentation complete
- ✅ Stakeholders trained and can re-deploy

---

## Files to Create & Modify

### New Files (15 total)

**Pages (4):**
- `pages/about.vue`
- `pages/events/2019.vue`
- `pages/events/2022.vue`
- `pages/talent.vue`

**Config (5):**
- `tailwind.config.ts`
- `.eslintrc.json`
- `.prettierrc.json`
- `firebase.json`
- `.firebaserc`

**Tests (4):**
- `tests/unit/i18n.spec.ts`
- `tests/unit/routing.spec.ts`
- `tests/e2e/pages.spec.ts`
- `tests/e2e/i18n.spec.ts`

**Documentation (2):**
- `docs/DEPLOYMENT.md`
- `docs/TESTING.md`

### Files to Modify (8 total)

- `app/app.vue` — Replace NuxtWelcome
- `nuxt.config.ts` — Add SSG config
- `layouts/default.vue` — Add mobile nav logic
- `pages/index.vue` — Enhance styling
- `locales/en.json` — Add ~20 new keys
- `locales/fr.json` — Add ~20 new keys
- `locales/tl.json` — Add ~20 new keys
- `package.json` — Add dev dependencies

---

## Success Metrics

### Code Quality
- ✅ Linter: 0 errors, 0 warnings
- ✅ Tests: 100% pass rate (12 unit + 33 E2E)
- ✅ Coverage: 80%+ for critical code paths
- ✅ Type safety: 0 TypeScript errors

### Performance
- ✅ Lighthouse mobile ≥ 85
- ✅ Lighthouse desktop ≥ 90
- ✅ FCP < 2s
- ✅ LCP < 2.5s
- ✅ CLS < 0.1

### Accessibility
- ✅ WCAG AA: 100% pass
- ✅ Color contrast ≥ 4.5:1
- ✅ Keyboard navigation: Fully functional
- ✅ Screen reader: No errors
- ✅ Touch targets ≥ 44x44px

### Content
- ✅ i18n consistency: 100% (EN = FR = TL keys)
- ✅ No emojis in locales
- ✅ All content validated
- ✅ All translations complete
- ✅ Translator sign-off

### Deployment
- ✅ Live on Firebase
- ✅ All pages load
- ✅ No 404s
- ✅ Documentation complete
- ✅ Stakeholders trained

---

## Timeline

**Week 1 (May 13-19):**
- Phase 1: Fix core infrastructure (Mon-Tue)
- Phase 2 starts: Design & theme (Wed-Fri)

**Week 2 (May 20-26):**
- Phase 2 continues: Page designs (Mon-Thu)
- Phase 3 starts: Content & localization (Mon-Fri)

**Week 3 (May 27-Jun 2):**
- Phase 3 continues: Content wrap-up (Mon-Tue)
- Phase 4: Testing & QA (Mon-Fri)

**Week 4 (Jun 3-7):**
- Phase 5: Deploy & launch (Mon-Tue)
- ✅ LIVE: Site goes live (Tue June 3)

**Total: 4 weeks**

---

## Next Steps

1. ✅ **Review this plan** with the team (15 min)
2. ✅ **Assign roles** to team members (5 min)
3. ✅ **Kick off Phase 1** (Frontend Dev starts Monday May 13)
4. ✅ **Daily standups** (10 min, 10 AM ET, starting Monday)
5. ✅ **Weekly reviews** (Fri 4 PM ET, before next phase handoff)

---

**Plan prepared by:** Architect (Claude Sonnet 4.6)  
**Date:** 2026-05-09  
**Status:** Ready for Team Review  
**Next Review:** After Phase 1 completion (2026-05-19)
