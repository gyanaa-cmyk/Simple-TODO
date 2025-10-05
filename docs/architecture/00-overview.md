 # Architecture — Overview

 This shard summarizes the architecture objectives, constraints, and high-level goals for FlowList.

 Key objectives:
 - Premium, animation-rich UI with fast realtime collaboration.
 - Full control of backend: custom auth, sessions, and WebSockets.
 - Simple, explicit data model in PostgreSQL.

 Constraints:
 - No ORMs (raw `pg`).
 - Low latency (<250ms round-trip).
 - Web + Mobile parity.
