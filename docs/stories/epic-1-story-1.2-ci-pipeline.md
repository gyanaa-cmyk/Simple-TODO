# Story 1.2 CI pipeline (lint, typecheck, test)

As a maintainer,
I want a CI workflow that runs lint, type checks, and unit tests on PRs,
so that each change is verified before merge.

Acceptance Criteria
1. A `.github/workflows/ci.yml` (or equivalent) exists and runs on PRs.
2. CI runs ESLint, TypeScript typecheck (if TS used), and a fast unit test task (e.g., `vitest --run`).
3. CI reports failure for lint/type/test errors.
