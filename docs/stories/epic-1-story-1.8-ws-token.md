# Story 1.8 WebSocket skeleton & WS auth token endpoint

As a realtime engineer,
I want a minimal `ws` server skeleton and an endpoint `/auth/ws-token` that returns a short-lived JWT,
so that the realtime layer can authenticate clients in future epics.

Acceptance Criteria
1. A `ws` module exists with a skeleton server that accepts connections and can echo/ping.
2. `POST /auth/ws-token` returns a signed JWT with `user_id` and `exp` short expiry (e.g., 120s) when provided a valid session.
3. The canary may not fully exercise WS, but the token endpoint is tested via unit/integration tests.
