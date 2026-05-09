# Phase 1 — Task Tracking

**Phase:** Unblock Core Infrastructure  
**Start Date:** 2026-05-13  
**Deadline:** 2026-05-15  
**Lead:** Frontend Developer (Sonnet 4.6)

---

## Task Status Board

| Task ID | Assignee | Title | Status | Date Started | Date Completed | Tests Passing |
|---------|----------|-------|--------|---------------|----------------|---|
| **QA-1** | QA Tester | Install Dev Tools (vitest, playwright, eslint, prettier) | PENDING | — | — | N/A |
| **QA-2** | QA Tester | Write Failing Tests (routing, i18n-keys, E2E pages) | PENDING | — | — | N/A |
| **FE-1** | Frontend Dev | Fix `app/app.vue` — Replace NuxtWelcome | PENDING | — | — | — |
| **FE-2** | Frontend Dev | Create Page Stubs (about, events/2019, events/2022, talent) | PENDING | — | — | — |
| **FE-3** | Frontend Dev | Configure SSG in `nuxt.config.ts` | PENDING | — | — | — |
| **FE-4** | Frontend Dev | Fix Mobile Nav Toggle in `layouts/default.vue` | PENDING | — | — | — |
| **QA-3** | QA Tester | Phase 1 Verification (all tests green, lint clean, generate working) | PENDING | — | — | — |

---

## Instructions for Assignees

When you **start** a task:
1. Update Status to `IN_PROGRESS`
2. Update Date Started to today's date

When you **complete** a task:
1. Update Status to `DONE`
2. Update Date Completed to today's date
3. Update Tests Passing with "✓ ALL PASS" or list any failures
4. Post your update message to the conversation with the task link

**Example:**
```
✅ **FE-1 DONE** (2026-05-14)
- Replaced <NuxtWelcome /> with <NuxtLayout><NuxtPage />
- npm run dev shows home page (not welcome screen)
- Routing tests now passing
- Next: FE-2 starts
```

---

## Phase 1 Definition of Done

- [ ] All 7 tasks marked DONE with dates
- [ ] `npm run test` — all unit tests pass
- [ ] `npm run test:e2e` — all E2E tests pass
- [ ] `npm run lint` — 0 errors, 0 warnings
- [ ] `npm run dev` — home page renders (not NuxtWelcome)
- [ ] All 4 nav links work without 404
- [ ] Mobile nav toggles at 375px width
- [ ] `npm run generate` outputs `.output/public/` with all 15 locale-route HTML files

---

## Blocking Dependencies

```
QA-1 (install tools) → QA-2 (write tests)
                    ↓
FE-1 → FE-2 → FE-3 → FE-4
↓      ↓      ↓      ↓
All FE tasks must complete → QA-3 (final verification)
```

- **QA-1 must complete before FE work begins**
- **QA-2 must complete and all tests must be red before FE work begins**
- **QA-3 happens after all FE tasks are done**

---

## Phase 2 Handoff

Once Phase 1 is DONE (all tasks complete, all tests passing):
- **Designer Agent (Opus 4.7)** begins Phase 2: Design & Theme
- **Content Lead** begins Phase 3: Content & Localization
- Both can work in parallel
