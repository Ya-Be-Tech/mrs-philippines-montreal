# Team Assignments — Phase 1 Execution

## Quick Reference

### 🔍 QA Tester (Sonnet 4.6)
**Days: May 13–15**

| Task | Day | Duration | Action |
|------|-----|----------|--------|
| **QA-1** | May 13 | 1h | Install vitest, playwright, eslint, prettier in `package.json` + npm install |
| **QA-2** | May 13–14 | 2h | Write failing tests (routing, i18n-keys, E2E pages) |
| **QA-3** | May 15 | 1h | Run all tests, lint, generate — verify 100% green |

**Tracking:** Update `planning/TRACKING.md` when each task is done  
**Blocks:** Everything — QA must finish QA-1 and QA-2 before FE can start

---

### 💻 Frontend Developer (Sonnet 4.6)
**Days: May 14–15 (starts after QA-2)**

| Task | Day | Duration | Action |
|------|-----|----------|--------|
| **FE-1** | May 14 | 15m | Fix `app/app.vue` — replace `<NuxtWelcome />` |
| **FE-2** | May 14 | 30m | Create 4 page stubs (about, events/2019, events/2022, talent) |
| **FE-3** | May 14 | 30m | Add SSG config to `nuxt.config.ts` |
| **FE-4** | May 14–15 | 1h | Fix mobile nav toggle in `layouts/default.vue` |

**Tracking:** Update `planning/TRACKING.md` when each task is done  
**Depends on:** QA-2 tests must be red before you start

---

## File Assignments

| File | Who | Status | Task |
|------|-----|--------|------|
| `package.json` | QA | NEW | QA-1: Add devDependencies + scripts |
| `tests/unit/routing.spec.ts` | QA | NEW | QA-2: Write routing tests |
| `tests/unit/i18n-keys.spec.ts` | QA | NEW | QA-2: Write i18n tests |
| `tests/e2e/pages.spec.ts` | QA | NEW | QA-2: Write E2E tests |
| `app/app.vue` | FE | MODIFY | FE-1: Replace NuxtWelcome |
| `pages/about.vue` | FE | NEW | FE-2: Stub |
| `pages/events/2019.vue` | FE | NEW | FE-2: Stub |
| `pages/events/2022.vue` | FE | NEW | FE-2: Stub |
| `pages/talent.vue` | FE | NEW | FE-2: Stub |
| `nuxt.config.ts` | FE | MODIFY | FE-3: Add SSG config |
| `layouts/default.vue` | FE | MODIFY | FE-4: Add mobile nav logic |
| `planning/TRACKING.md` | BOTH | NEW | Tracking file (update as you go) |

---

## TDD Enforcement

```
QA writes tests FIRST (in red state)
         ↓
FE implements SECOND (to make tests go green)
         ↓
QA verifies THIRD (all green, lint clean, generate working)
```

**This is non-negotiable.** Tests before code. Always.

---

## Communication Protocol

When you **START** a task:
```
🔄 **[TASK-ID] IN_PROGRESS** (Date)
- Brief description of what you're doing
- Expected test(s) to make green
```

When you **FINISH** a task:
```
✅ **[TASK-ID] DONE** (Date)
- What you changed
- Test results (e.g., "✓ FE-1 test now green", "✓ all routing tests pass")
- Next step (who starts next)
```

Update `planning/TRACKING.md` at the same time.

---

## Key Dates

| Date | Event | Who |
|------|-------|-----|
| **2026-05-13** | QA-1 & QA-2 | QA Tester |
| **2026-05-14** | FE-1, FE-2, FE-3, FE-4 | Frontend Dev |
| **2026-05-15** | QA-3 (final verification) | QA Tester |
| **2026-05-15 EOD** | Phase 1 DONE | Team |

---

## Resources

- **Full Plan:** `planning/PLAN.md`
- **Detailed Implementation:** `planning/IMPLEMENTATION_PLAN.md`
- **Technical Architecture:** `planning/TECHNICAL_ARCHITECTURE.md`
- **This Kickoff:** `planning/PHASE_1_KICKOFF.md`
- **Tracking:** `planning/TRACKING.md` ← **UPDATE LIVE**

---

## Success = All Boxes Checked

- [ ] npm run test — all pass
- [ ] npm run test:e2e — all pass
- [ ] npm run lint — 0 errors
- [ ] npm run dev — home page renders (not welcome)
- [ ] All 4 nav links work (no 404)
- [ ] Mobile nav toggles at 375px
- [ ] npm run generate — 15 route HTML files in `.output/public/`
- [ ] All tasks in TRACKING.md marked DONE

**Phase 2 & 3 can begin only when Phase 1 is 100% DONE.**
