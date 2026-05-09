================================================================================
PHASE 1 KICKOFF — Mrs Philippines Montreal Website
Date: 2026-05-09
Start: 2026-05-13
Deadline: 2026-05-15
================================================================================

👋 TEAM: Phase 1 is ready for execution. Read below, then open the files listed.

================================================================================
WHAT IS PHASE 1?
================================================================================

Phase 1 "Unblock Core Infrastructure" is the critical foundation. Currently:
- Nothing renders (stuck on NuxtWelcome)
- No tests exist
- No dev tools installed

We MUST complete Phase 1 before Phase 2 (Design) and Phase 3 (Content) can begin.

Duration: 3 days (May 13–15, 2026)
Work: ~4 hours total across team
Principle: TDD (Test-Driven Development) — tests first, then code

================================================================================
TEAM ASSIGNMENTS
================================================================================

👤 QA TESTER (Sonnet 4.6)
   Starts: May 13 (Day 1)
   Tasks: QA-1 (install tools) → QA-2 (write failing tests) → QA-3 (verify)
   You go first. Frontend Dev waits for you.

💻 FRONTEND DEVELOPER (Sonnet 4.6)
   Starts: May 14 (Day 2) — after QA-2 finishes
   Tasks: FE-1 (fix app.vue) → FE-2 (page stubs) → FE-3 (SSG) → FE-4 (mobile nav)
   Each task makes a set of failing tests turn green.

================================================================================
FILES TO READ NOW (in order)
================================================================================

1. planning/TEAM_ASSIGNMENTS.md
   → Quick reference card. 2-min read. Shows who does what and when.

2. planning/PHASE_1_KICKOFF.md
   → Full kickoff document. Detailed instructions for each task.
   → Includes code snippets and verification steps.

3. planning/TRACKING.md
   → Live tracking file. You update this as tasks complete.
   → One row per task. Update Status, Date Started, Date Completed.

4. planning/PLAN.md (already has Phase 1 summary at top)
   → High-level plan for all 5 phases. Context.

5. planning/IMPLEMENTATION_PLAN.md
   → Full detailed plan for Phases 1–5. Reference as needed.

================================================================================
TDD ENFORCEMENT
================================================================================

This is MANDATORY. No exceptions.

Step 1: QA writes ALL tests in FAILING state (red)
        Tests describe the expected behavior but code doesn't exist yet.

Step 2: Frontend Dev implements code to make tests PASS (green)
        Minimum implementation. Not defensive. Not over-engineered.

Step 3: QA verifies everything is green
        All tests pass. Linter clean. Build output ready.

DO NOT skip step 1. DO NOT implement before tests exist.

================================================================================
SUCCESS CRITERIA (Phase 1 Definition of Done)
================================================================================

✓ npm run test → all tests pass
✓ npm run test:e2e → all E2E tests pass
✓ npm run lint → 0 errors, 0 warnings
✓ npm run dev → home page renders (not NuxtWelcome)
✓ All 4 nav links work without 404
✓ Mobile nav toggles at 375px width
✓ npm run generate → .output/public/ has 15 route HTML files
✓ planning/TRACKING.md shows all tasks DONE with dates

================================================================================
NEXT STEPS
================================================================================

QA Tester:
  1. Read planning/TEAM_ASSIGNMENTS.md (2 min)
  2. Read planning/PHASE_1_KICKOFF.md, "Task QA-1" section (5 min)
  3. Start QA-1: Add devDependencies to package.json
  4. Update planning/TRACKING.md with status

Frontend Developer:
  1. Read planning/TEAM_ASSIGNMENTS.md (2 min)
  2. Wait for QA-2 to complete (QA will notify)
  3. Read planning/PHASE_1_KICKOFF.md, "Task FE-1" section
  4. Start FE-1 when notified

Everyone:
  1. Keep planning/TRACKING.md updated as you work
  2. Post progress updates to the conversation
  3. Ask questions if unclear (don't guess)

================================================================================
TIMELINE
================================================================================

Monday May 13:  QA-1 (install) → QA-2 (write failing tests, all red)
Tuesday May 14: FE-1 → FE-2 → FE-3 → FE-4 (make tests green)
Wednesday May 15: QA-3 (final verification) → Phase 1 DONE ✅

================================================================================
QUESTIONS?
================================================================================

All answers are in the docs. Read them first.

If stuck:
1. Check planning/PHASE_1_KICKOFF.md for detailed instructions
2. Check planning/TECHNICAL_ARCHITECTURE.md for code patterns
3. Ask in the conversation with specific context

================================================================================
LET'S BUILD 🎉
================================================================================

Phase 1 is the foundation. Do it right. Follow TDD. Update tracking.
Phase 2 and 3 teams are waiting for Phase 1 to be done.

Good luck!
