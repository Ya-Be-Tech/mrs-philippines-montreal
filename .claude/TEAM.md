# Scheduler Implementation Team Structure

## Team Members & Responsibilities

### 1. **Architect** (Claude Opus 4.7)
- **Role:** System decisions, overall architecture, cross-team coordination
- **Responsibilities:**
  - Phase planning and sequencing
  - Architectural decisions (patterns, technologies, trade-offs)
  - Code review and integration points between modules
  - Dependency management between team work
  - Risk mitigation and escalation

### 2. **Frontend Engineer** (Claude Sonnet 4.6)
- **Role:** UI components and frontend logic
- **Responsibilities:**
  - Implement i18n keys (en, fr, tl)
  - Vitest unit tests for composables and components
  - CSS/styling with Tailwind CSS


### 3. **Designer** (Claude Opus 4.7)
- **Role:** make good looking color and design choices
- **Responsibilities:**
  - Implement a good and profesionnal looking website
  - Implement all the requested page with apeareance in mind
  - Write the CSS/styling using Tailwind
  - Implement a fun to navigate and pleasant website and pages

### 4.  **Integration Tester** (Claude Haiku 4.5)
- **Role:** End-to-end testing and quality assurance
- **Responsibilities:**
  - Write Playwright E2E tests (`frontend/tests/e2e/scheduler.spec.ts`)
  - Run tests against mocked APIs
  - Report failing tests back to respective team members
  - Verify cross-module integration
  - Test user workflows (booking flow, admin functions, error states)

### 5. **DevOps Engineer** (Claude Sonnet 4.6)
- **Role:** Containerization, deployment, and scripts
- **Responsibilities:**
  - Docker configuration for backend
  - Build and deployment scripts
  - Environment variable management
  - CI/CD pipeline setup
  - Container image for Cloud Run deployment


---

## Work Phases & Dependencies

### **Phase 0: Foundation (Parallel)**
- **LLM Engineer:** OAuth2 Service (tests + implementation)
- **Database Engineer:** Firestore Service + Working Hours Service (tests + implementations)
- **DevOps Engineer:** (Prerequisites) Firestore setup per DB-SCHEDULER.md — service account, env vars, emulator
- **Architect:** Oversee, validate architecture decisions

### **Phase 1: Backend Services (Parallel)**
- **LLM Engineer:** Google Calendar Service (tests + implementation)
- **Backend API Engineer:** Route handlers (tests + implementation)
- **Architect:** Integration point validation

### **Phase 2: Frontend (Parallel)**
- **Frontend Engineer:** Composable, Page, Widget, i18n
- **Backend API Engineer:** (Available for API adjustments if needed)
- **Architect:** API contract validation

### **Phase 3: Integration & Testing (Sequential)**
- **Integration Tester:** Write and run E2E tests
- **All Team Members:** Fix issues reported by tester

### **Phase 4: Deployment (Sequential)**
- **DevOps Engineer:** Docker, scripts, deployment
- **Architect:** Final architecture review

---

## Communication Protocol

1. **Blockers:** Escalate to Architect immediately
2. **Design Questions:** Architect decision within 1 iteration
3. **Cross-team Dependencies:** Flagged in phase planning
4. **Test Failures:** Report to responsible team member with details
5. **Code Review:** Architect reviews integration points

---

## Success Criteria

-  All TAP backend tests pass (26 total)
-  All Vitest frontend tests pass (10+ total)
-  All Playwright E2E tests pass (5+ scenarios)
-  No regressions in existing routes (health, contact, chat)
-  Widget builds successfully to standalone IIFE
-  All environment variables configured and documented

---

## File Ownership Matrix



## Next Steps

1. **Architect** reviews and approves team structure
2. **Architect** creates detailed phase plan with dependencies
3. Teams begin Phase 0 in parallel
4. Daily sync on blockers and integration points
