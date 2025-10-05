<!-- Epic: Architecture Implementation & Core Services -->

# Epic 2: Architecture Implementation & Core Services

Goal
: Implement the core architectural components required for FlowList: a hardened Postgres schema and migrations, WebSocket room/presence primitives, session/auth refinements, observability endpoints, and deployment infra so subsequent epics can build features on a stable platform.

Stories (sequenced)

## Story 2.1 - Complete DB schema & seed
As a backend developer,
I want a complete SQL migration (`001_init.sql`) that defines tables (users, sessions, lists, list_members, tasks, comments, task_reactions, streaks) and basic indexes, plus a small seed file,
so that environments can be provisioned consistently.

Acceptance Criteria
1. `server/db/migrations/001_init.sql` contains DDL for the tables with appropriate constraints and indexes.
2. `server/db/seed.sql` inserts at least one demo user and a sample list for local testing.
3. Migration runs successfully against a local Postgres instance (documented in README).

## Story 2.2 - WS server rooms & presence primitives
As a realtime engineer,
I want a `ws` server module that manages rooms, presence TTL, and basic broadcast,
so that lists can have realtime updates and presence indicators.

Acceptance Criteria
1. `server/src/ws/index.ts` exposes room join/leave and broadcast helper functions.
2. Presence uses heartbeat pings with a TTL of 30s.
3. Unit tests cover join/leave and broadcast behaviour.

## Story 2.3 - Sessions: rotation & cleanup job
As an ops engineer,
I want session rotation on privilege change and a daily cleanup job for expired sessions,
so that stale sessions are removed and security posture is maintained.

Acceptance Criteria
1. Session rotation API exists and updates `sessions.token_hash` appropriately.
2. A script or scheduled job `scripts/cleanup-sessions.js` deletes expired sessions when run.
3. Tests or a smoke script validate cleanup logic.

## Story 2.4 - Observability: metrics & structured logs
As a SRE,
I want `/metrics` exposing basic app metrics and structured pino logs,
so that we can monitor health and key indicators in staging/prod.

Acceptance Criteria
1. `/metrics` returns basic counters (uptime, total_connections, total_requests) in plain text or Prometheus format.
2. pino logger is configured and emits structured JSON on startup and errors.

## Story 2.5 - Infra: deployment scripts & config
As a devops engineer,
I want documented deployment steps and configuration (env examples, migration commands),
so that CI/CD can deploy services reliably.

Acceptance Criteria
1. `deploy/` contains example config files and a `README-deploy.md` with steps.
2. Environment variable list is documented (`DATABASE_URL`, `SESSION_SECRET`, `WS_JWT_SECRET`, etc.).

## Story 2.6 - Security review & threat model basics
As a security engineer,
I want a short threat model and checklist covering auth, cookie handling, and WS auth,
so that we capture major risks before feature expansion.

Acceptance Criteria
1. `docs/architecture/security-checklist.md` contains the threat model and mitigations.
2. Checklist includes CSRF, token leakage, rate limiting, and logging redaction.

Notes
- Keep stories small and testable; each should be implementable by a single engineer or AI agent in a focused session.
- Prioritize DB schema, WS primitives, and observability early in the sequence.
