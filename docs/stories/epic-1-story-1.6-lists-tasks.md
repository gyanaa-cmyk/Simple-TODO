# Story 1.6 Lists & Tasks basic REST (read-only for canary)

As a user,
I want to fetch my lists and the (empty) tasks for the canary,
so that the UI can render an initial empty state.

Acceptance Criteria
1. `GET /lists` returns an array (empty for new guest) with 200.
2. `GET /lists/:id` returns list metadata and `tasks: []` for a new list.
3. End-to-end canary test: create guest, call `GET /lists` and assert 200 and array response.
