# 🚀 PHASE 1 KICKOFF — Mrs Philippines Montreal Website

**Date:** 2026-05-09  
**Phase 1 Start:** 2026-05-13  
**Phase 1 Deadline:** 2026-05-15  
**Status:** Ready for team execution

---

## What is Phase 1?

Phase 1 "Unblock Core Infrastructure" is the **critical path** that gates everything else. Currently, the site renders nothing (stuck on NuxtWelcome), there are no tests, and no dev tools are installed.

**Phase 1 must complete before Phase 2 (Design) and Phase 3 (Content) can begin.**

---

## TDD (Test-Driven Development) Mandate

This project **strictly follows TDD + SOLID principles**:

1. **Tests written first** — QA writes ALL tests in a failing ("red") state
2. **Implementation second** — Frontend Dev implements minimum code to make tests pass ("green")
3. **No implementation without tests** — Every FE commit must tie to a passing test
4. **Lint before marking done** — `npm run lint` must report 0 errors

---

## Team Assignments

### 👤 QA Tester (Sonnet 4.6)

**Starts Day 1 (May 13). You go first.**

#### Task QA-1: Install Dev Tools
- **File:** `package.json`
- **Add devDependencies:** vitest ^2, @playwright/test ^1.44, eslint ^9, prettier ^3, @nuxt/test-utils ^3.12, typescript ^5.4
- **Add npm scripts:**
  ```json
  "test": "vitest run",
  "test:e2e": "playwright test",
  "lint": "eslint . --ext .vue,.ts,.js",
  "lint:fix": "eslint . --fix"
  ```
- **Run:** `npm install`
- **Verify:** `npm list vitest` shows version ≥ 2
- **When done:** Update `planning/TRACKING.md` — mark QA-1 DONE with today's date

#### Task QA-2: Write Failing Tests (before FE touches code)
**Critical:** Write these tests and verify they FAIL before Frontend Dev starts.

Create three test files:

**`tests/unit/routing.spec.ts`**
```typescript
// Tests that all 5 pages render without errors
// Should test: home, about, events/2019, events/2022, talent
// Tests will FAIL until FE-2 page stubs are created
```

**`tests/unit/i18n-keys.spec.ts`**
```typescript
// Tests that all 3 locale files (en, fr, tl) have matching keys
// Tests that no locale value contains emoji
// Will FAIL until locales are expanded and emoji removed
```

**`tests/e2e/pages.spec.ts`** (Playwright)
```typescript
// Tests that each page loads and displays correct h1
// Tests that mobile nav button toggles at 375px width
// Will FAIL until FE-1 and FE-4 are complete
```

- **When done:** Run `npm run test` — verify tests exist but FAIL (red)
- **Update:** `planning/TRACKING.md` — mark QA-2 DONE
- **Then notify:** "QA-2 complete. All tests red. Frontend Dev: you're unblocked. FE-1 starts now."

#### Task QA-3: Final Verification (after all FE tasks done)
- Run `npm run test` — all tests pass (green)
- Run `npm run test:e2e` — all E2E tests pass
- Run `npm run lint` — 0 errors, 0 warnings
- Run `npm run generate` — verify `.output/public/` contains 15 HTML route files
- **Update:** `planning/TRACKING.md` — mark QA-3 DONE

---

### 👤 Frontend Developer (Sonnet 4.6)

**Starts Day 2 (May 14). Wait for QA-2 to finish (all tests red).**

Each of your 4 tasks fixes a specific set of failing tests.

#### Task FE-1: Fix `app/app.vue`
- **File:** `app/app.vue`
- **Current (broken):**
  ```vue
  <template>
    <div>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
    </div>
  </template>
  ```
- **Change to:**
  ```vue
  <template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  ```
- **Verification:**
  - `npm run dev` → home page renders (NOT the Nuxt welcome screen)
  - Routing tests go GREEN
- **When done:** Update `planning/TRACKING.md` — mark FE-1 DONE

#### Task FE-2: Create Page Stubs
- **Scope:** Bare stubs only — Phase 2 Designer will add content/SEO
- **Files to create:**

**`pages/about.vue`**
```vue
<template>
  <main class="pt-24">
    <h1>About</h1>
  </main>
</template>
```

**`pages/events/2019.vue`**
```vue
<template>
  <main class="pt-24">
    <h1>2019 Event</h1>
  </main>
</template>
```

**`pages/events/2022.vue`**
```vue
<template>
  <main class="pt-24">
    <h1>2022 Event</h1>
  </main>
</template>
```

**`pages/talent.vue`**
```vue
<template>
  <main class="pt-24">
    <h1>Talent</h1>
  </main>
</template>
```

- **Verification:**
  - Click all 4 nav links in `npm run dev` — no 404 errors
  - E2E tests for page loads go GREEN
- **When done:** Update `planning/TRACKING.md` — mark FE-2 DONE

#### Task FE-3: Configure SSG (Static Site Generation)
- **File:** `nuxt.config.ts`
- **Add to config:**
  ```typescript
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/about', '/talent', '/events/2019', '/events/2022',
        '/fr/', '/fr/about', '/fr/talent', '/fr/events/2019', '/fr/events/2022',
        '/tl/', '/tl/about', '/tl/talent', '/tl/events/2019', '/tl/events/2022'
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  ```
- **Verification:**
  - `npm run generate` completes without errors
  - `.output/public/index.html` exists (and all 15 route variants)
- **When done:** Update `planning/TRACKING.md` — mark FE-3 DONE

#### Task FE-4: Fix Mobile Nav Toggle
- **File:** `layouts/default.vue`
- **Current state:** Hamburger button exists but has no `@click` handler; no mobile menu drawer
- **Changes:**
  - Add to `<script setup>`:
    ```typescript
    const mobileOpen = ref(false)
    ```
  - Find hamburger button, add:
    ```html
    @click="mobileOpen = !mobileOpen"
    :aria-expanded="mobileOpen"
    ```
  - After nav, add mobile drawer:
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
- **Verification:**
  - DevTools mobile emulation: set viewport to 375px (iPhone SE size)
  - Click hamburger button → menu appears
  - Click menu link → menu closes
  - E2E mobile nav tests go GREEN
- **When done:** Update `planning/TRACKING.md` — mark FE-4 DONE

---

## Execution Timeline

```
Monday 2026-05-13 (Day 1):
  ↓ QA-1 (install tools)
  ↓ QA-2 (write failing tests, all red)
  → Frontend Dev notified: "QA-2 done. You're unblocked."

Tuesday 2026-05-14 (Day 2):
  ↓ FE-1 (fix app.vue)
  ↓ FE-2 (create page stubs)
  ↓ FE-3 (configure SSG)
  ↓ FE-4 (mobile nav toggle)

Wednesday 2026-05-15 (Day 3):
  ↓ QA-3 (final verification)
  → All tests green, lint clean, build output ready
  → Phase 1 DONE ✅
  → Phase 2 (Design) and Phase 3 (Content) unblocked

```

---

## Files Modified

| File | Created/Modified | Who | What |
|---|---|---|---|
| `package.json` | Modified | QA | Add devDependencies + scripts |
| `tests/unit/routing.spec.ts` | Created | QA | Routing tests (initially red) |
| `tests/unit/i18n-keys.spec.ts` | Created | QA | i18n tests (initially red) |
| `tests/e2e/pages.spec.ts` | Created | QA | E2E tests (initially red) |
| `app/app.vue` | Modified | FE | Replace NuxtWelcome |
| `pages/about.vue` | Created | FE | Bare stub |
| `pages/events/2019.vue` | Created | FE | Bare stub |
| `pages/events/2022.vue` | Created | FE | Bare stub |
| `pages/talent.vue` | Created | FE | Bare stub |
| `nuxt.config.ts` | Modified | FE | Add SSG preset |
| `layouts/default.vue` | Modified | FE | Add mobile nav logic |
| `planning/TRACKING.md` | Created | All | Task tracking (update as you go) |

---

## How to Track Progress

**Everyone updates this file as you work:**
👉 `planning/TRACKING.md`

When you **start** a task:
- Change Status → `IN_PROGRESS`
- Add Date Started

When you **finish** a task:
- Change Status → `DONE`
- Add Date Completed
- Add test result (e.g., "✓ ALL PASS" or list failures)
- Post a message in the conversation with your update

**Example:**
```
✅ **QA-1 DONE** (2026-05-13)
- Added vitest, playwright, eslint, prettier to package.json
- Added npm scripts: test, test:e2e, lint, lint:fix
- npm install completed without errors
- npm list vitest → vitest 2.0.0 ✓
- Next: QA-2 (write failing tests)
```

---

## Success Criteria (Phase 1 Definition of Done)

- [ ] `npm run test` passes with 0 failures
- [ ] `npm run test:e2e` passes with 0 failures
- [ ] `npm run lint` reports 0 errors, 0 warnings
- [ ] `npm run dev` — home page renders (not NuxtWelcome)
- [ ] All 4 nav links work without 404
- [ ] Mobile nav toggles at 375px width
- [ ] `npm run generate` outputs `.output/public/` with all 15 locale-route HTML files
- [ ] `planning/TRACKING.md` shows all 7 tasks DONE with dates
- [ ] All code follows SOLID principles (no defensive programming, TDD first)

---

## Questions?

- **How do I write the tests?** — See `planning/IMPLEMENTATION_PLAN.md` Phase 4 (Testing & QA) for detailed test examples
- **Where are the i18n keys?** — `locales/en.json`, `locales/fr.json`, `locales/tl.json`
- **How do I know what the nav links are?** — Check `layouts/default.vue` — the `navLinks` array is already defined
- **What if a test fails after I implement?** — Fix the code, not the test. The test describes the correct behavior.

---

## Next Steps After Phase 1

Once Phase 1 is DONE:
- **Phase 2 (Design & Theme)** — Designer Agent (Opus 4.7) starts styling pages with gold/black theme, fonts, responsive layouts
- **Phase 3 (Content & Localization)** — Content Lead + Translator expand i18n keys, add page content, translate to FR and TL

Phase 2 and 3 run in parallel and have their own team assignments and tracking.

---

**Let's build! 🎉**

*Questions? Update this doc and ping the team.*
