# Story 1.4 Postgres connection & migrations setup

As a backend developer,
I want a `pg` connection pool and a migration directory with an initial schema,
so that the app can persist users, sessions, lists, and tasks.

Acceptance Criteria
1. `server/src/db/pool.ts` exports a configured `pg.Pool` using `DATABASE_URL`.
2. `server/db/migrations/001_init.sql` contains the DDL for users, sessions, lists, tasks (basic columns) and can be applied locally.
3. A simple `npm` script runs the migration against `DATABASE_URL` (e.g., `node ./scripts/run-migrations.js` or `psql` command documented in README).
