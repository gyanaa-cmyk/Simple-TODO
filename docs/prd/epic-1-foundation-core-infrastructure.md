<!-- Epic: Foundation & Core Infrastructure -->

# Epic 1: Foundation & Core Infrastructure

Goal
: Establish the project repository, CI, basic server scaffolding, and a minimal end-to-end "canary" flow (guest create → view empty lists) so the team can deploy and verify a working baseline. This epic delivers foundational infra and a small vertical slice that validates deployments, DB connectivity, auth sessions, and a simple UI canary.

Stories (sequenced)

## Story 1.1 - Repo scaffold & dev scripts
As a developer,
I want a repository scaffold with server and web app folders, dev scripts, and a README,
so that I can run and iterate on the project locally.

Acceptance Criteria
1. A `/server` and `/web` folder exist with minimal starter files (server package manifest, web package manifest).
2. `README.md` includes quick start commands for installing deps and running the apps locally.
3. `scripts` in the root package.json (or simple shell scripts) provide `dev`, `start`, and `test` shortcuts.

## Story 1.2 - CI pipeline (lint, typecheck, test)
As a maintainer,
I want a CI workflow that runs lint, type checks, and unit tests on PRs,
so that each change is verified before merge.

Acceptance Criteria
1. A `.github/workflows/ci.yml` (or equivalent) exists and runs on PRs.
2. CI runs ESLint, TypeScript typecheck (if TS used), and a fast unit test task (e.g., `vitest --run`).
3. CI reports failure for lint/type/test errors.

## Story 1.3 - Server: basic Express scaffold + health routes
As a backend developer,
I want an Express-based server scaffold with `/health` and `/metrics` routes,
so that we have a stable entrypoint for deployments and readiness checks.

Acceptance Criteria
1. `/server/src/server.ts` (or `index.ts`) starts an Express app and responds 200 on `/health` with JSON `{status: 'ok'}`.
2. `/metrics` exposes a simple text response or placeholder for future metrics.
3. Server reads `PORT` and `DATABASE_URL` from env and logs startup info.

## Story 1.4 - Postgres connection & migrations setup
As a backend developer,
I want a `pg` connection pool and a migration directory with an initial schema,
so that the app can persist users, sessions, lists, and tasks.

Acceptance Criteria
1. `server/src/db/pool.ts` exports a configured `pg.Pool` using `DATABASE_URL`.
2. `server/db/migrations/001_init.sql` contains the DDL for users, sessions, lists, tasks (basic columns) and can be applied locally.
3. A simple `npm` script runs the migration against `DATABASE_URL` (e.g., `node ./scripts/run-migrations.js` or `psql` command documented in README).

## Story 1.5 - Auth: guest create + session cookie
As an end user (guest),
I want to open the app and have a guest session created with a cookie,
so that I can try the app without registering.

Acceptance Criteria
1. `POST /auth/guest` creates a guest `users` row with `is_guest=true` and a `sessions` row with a token_hash; returns 201 and sets an HttpOnly `sid` cookie.
2. `GET /auth/me` returns user info when `sid` cookie is present.
3. Session cookie uses `HttpOnly`, `Secure` (if served over https), and reasonable expiry (e.g., 30 days) per config.

## Story 1.6 - Lists & Tasks basic REST (read-only for canary)
As a user,
I want to fetch my lists and the (empty) tasks for the canary,
so that the UI can render an initial empty state.

Acceptance Criteria
1. `GET /lists` returns an array (empty for new guest) with 200.
2. `GET /lists/:id` returns list metadata and `tasks: []` for a new list.
3. End-to-end canary test: create guest, call `GET /lists` and assert 200 and array response.

## Story 1.7 - Web: minimal canary UI
As a user,
I want a minimal web page that triggers guest creation and shows the lists endpoint result,
so that we can visually verify the backend and cookie flow in the browser.

Acceptance Criteria
1. A simple SPA page `/web/src/App.*` with a button "Start as Guest" that calls `POST /auth/guest` and then `GET /lists` and displays the JSON response.
2. The page reflects a successful guest session (e.g., shows "Guest created" and the lists array).
3. The UI is reachable via a `dev` server and documented in README.

## Story 1.8 - WebSocket skeleton & WS auth token endpoint
As a realtime engineer,
I want a minimal `ws` server skeleton and an endpoint `/auth/ws-token` that returns a short-lived JWT,
so that the realtime layer can authenticate clients in future epics.

Acceptance Criteria
1. A `ws` module exists with a skeleton server that accepts connections and can echo/ping.
2. `POST /auth/ws-token` returns a signed JWT with `user_id` and `exp` short expiry (e.g., 120s) when provided a valid session.
3. The canary may not fully exercise WS, but the token endpoint is tested via unit/integration tests.

Notes
- Size stories so each is a small vertical slice (2-4 hours for a focused engineer/AI agent). Break down further if any story appears too big during grooming.
- Prioritize Story 1.1 → 1.3 → 1.4 → 1.5 → 1.6 → 1.7 → 1.8 for minimal end-to-end verification.
