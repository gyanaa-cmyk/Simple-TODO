 # Goals & Success Metrics

 ## Primary Goals
 1. Deliver Airbnb-level UI and motion design across Web + Mobile.
 2. Enable real-time collaboration with reactions and streaks.
 3. Instant guest onboarding with seamless upgrade.
 4. Offline-first reliability.
 5. Custom backend control (auth + sockets + PostgreSQL).

 ## Secondary Goals
 - Light gamification (streaks, reactions)
 - Accessibility and performance parity
 - Future-ready premium model

 ## KPIs
 - DAU / Sign-ups: ≥ 40%
 - 7-day retention: ≥ 55%
 - Shared lists: ≥ 25%
 - Task latency: < 250ms
 - User rating: ≥ 4.5
 - Guest → Registered conversion: ≥ 20%

## Epics
- Epic 1: Foundation & Core Infrastructure — `prd/epic-1-foundation-core-infrastructure.md` (establish infra, CI, guest auth, basic lists/tasks canary)
 - Epic 2: Architecture Implementation & Core Services — `prd/epic-2-architecture.md` (DB schema, WS rooms/presence, sessions, observability, deployment)
 - Epic UI: UI Component Library & Canary — `prd/epic-ui-canary.md` (frontend tokens, scaffold, TaskCard, FAB, canary)
