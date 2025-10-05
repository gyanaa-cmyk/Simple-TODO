# Story 1.3 Server: basic Express scaffold + health routes

As a backend developer,
I want an Express-based server scaffold with `/health` and `/metrics` routes,
so that we have a stable entrypoint for deployments and readiness checks.

Acceptance Criteria
1. `/server/src/server.ts` (or `index.ts`) starts an Express app and responds 200 on `/health` with JSON `{status: 'ok'}`.
2. `/metrics` exposes a simple text response or placeholder for future metrics.
3. Server reads `PORT` and `DATABASE_URL` from env and logs startup info.
