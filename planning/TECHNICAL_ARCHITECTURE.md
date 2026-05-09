# Mrs Philippines Montreal — Technical Architecture

**Date:** 2026-05-09  
**Architect:** Claude Sonnet 4.6  
**Status:** Design complete, ready for implementation  
**Complements:** `planning/IMPLEMENTATION_PLAN.md`

---

## Table of Contents

1. [Patterns & Conventions Found](#1-patterns--conventions-found)
2. [Component Architecture](#2-component-architecture)
3. [Data Flow & State Management](#3-data-flow--state-management)
4. [Styling Strategy](#4-styling-strategy)
5. [File Organization & Patterns](#5-file-organization--patterns)
6. [SEO & Meta Tags Strategy](#6-seo--meta-tags-strategy)
7. [i18n Implementation Details](#7-i18n-implementation-details)
8. [Testing Strategy](#8-testing-strategy)
9. [Build & Deployment Configuration](#9-build--deployment-configuration)
10. [Performance Considerations](#10-performance-considerations)
11. [Error Handling & Debugging](#11-error-handling--debugging)
12. [Page-Specific Technical Patterns](#12-page-specific-technical-patterns)

---

## 1. Patterns & Conventions Found

### Established Patterns (with file references)

**`app/app.vue:3-5`** — **CRITICAL BLOCKER:** Renders `NuxtWelcome` which ignores the `pages/` directory entirely. Phase 1 fix: replace with `<NuxtLayout><NuxtPage /></NuxtLayout>`.

**`layouts/default.vue:1-43`** — Establishes the full design language: sticky glassmorphism header, `bg-[#0A0A0A]/80`, `border-b border-[#D4AF37]/30`, gold text colors. All five pages inherit this chrome. Do not duplicate it in page components.

**`layouts/default.vue:14`** — `v-model="$i18n.locale"` on the `<select>` is the correct and complete i18n switcher pattern. It triggers locale change, route prefix update, and cookie write automatically.

**`layouts/default.vue:19`** — Hamburger button has no `@click` handler. Mobile navigation is non-functional. Needs one `ref(false)` and a `v-show` directive.

**`pages/index.vue:41-47`** — `useHead()` called directly in `<script setup>`. This is the established SEO pattern. Every new page must follow this exact pattern.

**`locales/en.json`** — Flat `snake_case` key structure. All new keys follow `page_section_detail` naming. Emoji present in `home_subtitle_1` — must be removed.

**`nuxt.config.ts:5-19`** — i18n strategy is `prefix_except_default`: English at `/about`, French at `/fr/about`, Tagalog at `/tl/about`. This configuration is correct and must not change.

**`nuxt.config.ts`** — No `nitro.preset` or explicit SSG config. Must add `nitro: { preset: 'static' }` for static generation.

**`contestants 2022/contestants2022.md`** — Three complete entries: Raziel De Leon, Almaleen Castillo, Marissa Obaldo. This is the complete 2022 dataset.

**`contestants 2019/contestants2019.md`** — Single Facebook Reel and intro only. The 2019 page is a single-video archive, not a grid.

---

## 2. Component Architecture

### Decision: Minimal Extraction

Extract to `components/` only when the same markup-plus-logic pattern appears in two or more places. This is a 5-page static site.

**Three justified extractions:**

1. **`VideoEmbed.vue`** — Responsive iframe wrapper. Used 5 times across 3 pages.
2. **`ContestantCard.vue`** — Card with name, title, role, and video. Used 3 times on the 2022 page.

### Layout Hierarchy

```
app/app.vue
  └── NuxtLayout → layouts/default.vue
        ├── <header> sticky nav
        ├── <main>
        │     └── <slot /> ← NuxtPage renders here
        └── <footer>
```

### Component: `VideoEmbed.vue`

```typescript
interface Props {
  src: string                     // Full iframe src URL
  title: string                   // Accessible label
  aspectRatio?: '16/9' | '9/16'  // default '16/9'
}
```

Template structure:

```html
<template>
  <div
    class="relative w-full"
    :class="aspectRatio === '9/16' ? 'aspect-[9/16] max-w-xs mx-auto' : 'aspect-video'"
  >
    <iframe
      :src="src"
      :title="title"
      class="absolute inset-0 w-full h-full"
      loading="lazy"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>
```

The `max-w-xs mx-auto` on 9:16 containers constrains Facebook portrait Reels to a sensible width on desktop.

### Mobile Navigation Fix

In `layouts/default.vue` `<script setup>`:

```typescript
const mobileOpen = ref(false)
```

Update hamburger button:

```html
<button
  @click="mobileOpen = !mobileOpen"
  class="md:hidden text-mpm-gold"
  aria-label="Toggle navigation"
  :aria-expanded="mobileOpen"
>
  <!-- SVG icon -->
</button>
```

Add mobile drawer:

```html
<div
  v-show="mobileOpen"
  data-testid="mobile-menu"
  class="absolute top-full left-0 right-0 bg-mpm-black border-b border-mpm-gold/30 md:hidden"
>
  <nav class="flex flex-col px-4 py-2">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.to"
      :to="link.to"
      class="py-3 border-b border-mpm-gold/20 hover:text-mpm-gold transition-colors"
      @click="mobileOpen = false"
    >
      {{ $t(link.label) }}
    </NuxtLink>
  </nav>
</div>
```

---

## 3. Data Flow & State Management

### Data Sources (Static Site — No API)

| Source | What it provides | How accessed |
|---|---|---|
| `locales/*.json` | All user-facing text strings | `$t('key')` in templates |
| Page-level constants | Contestant data, video URLs | Typed array in `<script setup>` |
| `assets/images/` | Crown queen photos | `<NuxtImg>` component |

### i18n Data Flow

```
nuxt.config.ts i18n config
  → @nuxtjs/i18n loads locale JSON files
    → provides $t(), $i18n globally
      → layouts/default.vue: nav labels via $t()
      → pages/*.vue: page content via $t()
      → useSeoMeta composable: SEO strings
```

### Contestant Data: Inline in Page

```typescript
interface Contestant {
  nameKey: string
  titleKey?: string
  roleKey?: string
  videoSrc: string
}

const contestants: Contestant[] = [
  {
    nameKey: 'contestant_raziel_name',
    videoSrc: 'https://www.facebook.com/plugins/video.php?...',
  },
  // ... 2 more contestants
]
```

Contestant names/titles are i18n keys so they can be translated.

### No Pinia or Vuex

No shared mutable state exists. The only reactive state:
- `mobileOpen: ref(false)` — local to `layouts/default.vue`
- `$i18n.locale` — managed entirely by `@nuxtjs/i18n`

---

## 4. Styling Strategy

### Design Tokens (from `THEME.md`)

| Tailwind Token | Hex | Usage |
|---|---|---|
| `mpm-black` | `#0A0A0A` | All page backgrounds |
| `mpm-gold` | `#D4AF37` | Primary accent: headings, borders, CTAs |
| `mpm-gold-light` | `#F9E27E` | Hover states, section sub-headings |
| `mpm-gold-dark` | `#996515` | Gradient start, secondary borders |
| `mpm-text` | `#F5F5F5` | All body text |
| `mpm-text-muted` | `#B59A5A` | Secondary labels, sub-text |

### `tailwind.config.ts`

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
        serif: ['\"Playfair Display\"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        'mpm-black':      '#0A0A0A',
        'mpm-gold':       '#D4AF37',
        'mpm-gold-light': '#F9E27E',
        'mpm-gold-dark':  '#996515',
        'mpm-text':       '#F5F5F5',
        'mpm-text-muted': '#B59A5A',
      },
    },
  },
  plugins: [],
} satisfies Config
```

### Font Loading

In `assets/css/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;600&display=swap');
```

---

## 5. File Organization & Patterns

### Target Structure

```
mrsphilippinesmontreal/
├── app/app.vue
├── assets/css/main.css
├── components/
│   ├── VideoEmbed.vue
│   └── ContestantCard.vue
├── composables/useSeoMeta.ts
├── layouts/default.vue
├── locales/
│   ├── en.json
│   ├── fr.json
│   └── tl.json
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── talent.vue
│   └── events/
│       ├── 2019.vue
│       └── 2022.vue
├── tests/
│   ├── unit/i18n-keys.spec.ts
│   └── e2e/pages.spec.ts
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

### Naming Conventions

**File names:** `kebab-case` for multi-word components. Routes match URL segments exactly.

**Component names:** PascalCase in templates (`<VideoEmbed />`). Nuxt auto-imports.

**i18n keys:** `snake_case`, flat. Format: `{page}_{section}_{detail}`.

### Composable: `useSeoMeta`

```typescript
export function useSeoMeta({ title, description, path }: SeoMetaOptions) {
  const baseUrl = 'https://mrsphilippinesmontreal.web.app'
  const ogImage = `${baseUrl}/og-image.jpg`

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: `${baseUrl}${path}` },
    ],
  })
}
```

---

## 6. SEO & Meta Tags Strategy

### Approach: Static per Page

With `nitro.preset: 'static'`, Nuxt bakes `useHead()` output into the generated HTML at build time.

### Required Meta per Page

| Page | title key | description key |
|---|---|---|
| `/` | `home_seo_title` | `home_seo_description` |
| `/about` | `about_seo_title` | `about_seo_description` |
| `/events/2019` | `events_2019_seo_title` | `events_2019_seo_description` |
| `/events/2022` | `events_2022_seo_title` | `events_2022_seo_description` |
| `/talent` | `talent_seo_title` | `talent_seo_description` |

All 10 keys must exist in all three locale files.

### Open Graph Image

Create `public/og-image.jpg` — 1200x630px, cropped from the best `Crowned Queen 2022/` image.

---

## 7. i18n Implementation Details

### Complete Key Inventory (~44 keys total)

```json
{
  "home": "Home",
  "about": "About",
  "events_2019": "2019 Event",
  "events_2022": "2022 Event",
  "talent": "Talent",
  
  "home_title": "Mrs Philippines Montreal",
  "home_subtitle_1": "From wearing the crown to passing it on",
  "home_subtitle_2": "What a beautiful journey",
  "home_seo_title": "Mrs Philippines Montreal - Official Website",
  "home_seo_description": "Official website celebrating the Filipino community in Montreal.",
  
  "about_title": "About Mrs Philippines Montreal",
  "about_section_1_title": "The Evolution of the Pageant",
  "about_seo_title": "About Mrs Philippines Montreal - History & Legacy",
  "about_seo_description": "Learn about the history of Mrs Philippines Montreal.",
  
  "events_2019_title": "Mrs Philippines Montreal 2019",
  "events_2019_intro": "A glimpse into the elegance and grace of the 2019 candidates.",
  
  "events_2022_title": "Mrs Philippines Montreal 2022",
  "contestant_raziel_name": "Raziel De Leon",
  "contestant_almaleen_name": "Almaleen Castillo",
  "contestant_almaleen_title": "Mrs Philippines Visayas 2022",
  
  "talent_title": "Talent Contest Winner",
  "talent_story": "[To be provided by stakeholder]"
}
```

### Emoji Removal

Remove `👑` from `home_subtitle_1` in all three locale files.

### French Text Length

French runs 20-30% longer than English. Impacts nav labels, buttons, and table headers.

---

## 8. Testing Strategy

### Unit Tests

**`tests/unit/i18n-keys.spec.ts`** — Most critical test:

```typescript
it('fr has same keys as en', () => {
  expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort())
})

it('no locale value contains emoji', () => {
  const emojiRegex = /\p{Emoji_Presentation}/u
  for (const value of Object.values(en)) {
    expect(emojiRegex.test(value as string)).toBe(false)
  }
})
```

### E2E Tests

**`tests/e2e/pages.spec.ts`:**

```typescript
test('home page renders h1', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('h1')).toContainText('Mrs Philippines Montreal')
})

test('language switcher changes content', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.selectOption('select[aria-label="Select language"]', 'fr')
  await expect(page.locator('nav')).toContainText('Accueil')
})
```

---

## 9. Build & Deployment Configuration

### `nuxt.config.ts` Target State

```typescript
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/about', '/talent', '/events/2019', '/events/2022',
        '/fr/', '/fr/about', '/fr/talent', '/fr/events/2019', '/fr/events/2022',
        '/tl/', '/tl/about', '/tl/talent', '/tl/events/2019', '/tl/events/2022',
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/image'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'tl', name: 'Tagalog', file: 'tl.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
```

Note: `ssr: true` with `preset: 'static'` is the correct SSG combination.

### Firebase Configuration

**`firebase.json`:**

```json
{
  "hosting": {
    "public": ".output/public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|woff|woff2|ttf)",
        "headers": [{ "key": "Cache-Control", "value": "max-age=31536000, immutable" }]
      },
      {
        "source": "**/*.html",
        "headers": [{ "key": "Cache-Control", "value": "max-age=3600" }]
      }
    ]
  }
}
```

---

## 10. Performance Considerations

### Hero Image vs Facebook Iframe

Strategy:
- **Mobile (< 768px):** Static image only — no iframe
- **Desktop (>= 768px):** Facebook iframe as overlay, positioned behind text with `pointer-events-none`

### YouTube Embed

Use privacy-enhanced URL:

```
https://www.youtube-nocookie.com/embed/dw75giq5L8g
```

---

## 11. Error Handling & Debugging

### 404 Handling

Firebase's rewrite serves the Nuxt app shell. Nuxt's built-in 404 page displays.

### No Error Boundaries Needed

This is a static content site with no complex component trees.

### Logging

ESLint rule: `"no-console": "warn"`. Remove all `console.log` before deployment.

---

## 12. Page-Specific Technical Patterns

### HOME PAGE Hero (Hybrid Approach)

```html
<template>
  <section class="relative min-h-screen flex items-center justify-center">
    
    <!-- Static image: always present -->
    <div class="absolute inset-0 z-0">
      <NuxtImg src="~/assets/images/crowned-queen-2022/portrait-1.jpg" />
      <div class="absolute inset-0 bg-black/55"></div>
    </div>

    <!-- Facebook iframe: desktop only, behind text, non-interactive -->
    <div class="absolute inset-0 z-0 hidden md:block pointer-events-none">
      <iframe src="https://www.facebook.com/plugins/video.php?..." />
    </div>

    <!-- Content overlay -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-serif font-bold text-mpm-gold">
        {{ $t('home_title') }}
      </h1>
      <!-- ... subtitles and CTAs ... -->
    </div>
  </section>
</template>
```

### ABOUT PAGE (Milestones Table)

```html
<section>
  <h2 class="text-2xl font-serif font-bold text-mpm-gold-light">
    {{ $t('about_section_2_title') }}
  </h2>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[480px]">
      <thead>
        <tr class="border-b-2 border-mpm-gold">
          <th class="text-left py-3 px-3">{{ $t('about_milestone_year') }}</th>
          <!-- ... more headers ... -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in milestones" :key="m.year">
          <td>{{ m.year }}</td>
          <td>{{ $t(m.nameKey) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

### TALENT PAGE (YouTube Embed)

```html
<div class="relative w-full aspect-video mb-10 rounded-lg overflow-hidden">
  <iframe
    src="https://www.youtube-nocookie.com/embed/dw75giq5L8g"
    title="Mrs Philippines Montreal Talent Contest Winner"
    class="absolute inset-0 w-full h-full"
    frameborder="0"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>
```

---

**Document prepared by:** Claude Sonnet 4.6 (Architect)  
**Date:** 2026-05-09  
**Status:** Ready for implementation team

This technical architecture complements `planning/IMPLEMENTATION_PLAN.md` and guides all component design, data flow, styling, and testing decisions.
