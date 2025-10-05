# Story 2.1 Complete DB schema & seed

As a backend developer,
I want a complete SQL migration (`001_init.sql`) that defines tables (users, sessions, lists, list_members, tasks, comments, task_reactions, streaks) and basic indexes, plus a small seed file,
so that environments can be provisioned consistently.

Acceptance Criteria
1. `server/db/migrations/001_init.sql` contains DDL for the tables with appropriate constraints and indexes.
2. `server/db/seed.sql` inserts at least one demo user and a sample list for local testing.
3. Migration runs successfully against a local Postgres instance (documented in README).

