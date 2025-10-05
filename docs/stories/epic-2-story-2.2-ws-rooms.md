# Story 2.2 WS server rooms & presence primitives

As a realtime engineer,
I want a `ws` server module that manages rooms, presence TTL, and basic broadcast,
so that lists can have realtime updates and presence indicators.

Acceptance Criteria
1. `server/src/ws/index.ts` exposes room join/leave and broadcast helper functions.
2. Presence uses heartbeat pings with a TTL of 30s.
3. Unit tests cover join/leave and broadcast behaviour.
