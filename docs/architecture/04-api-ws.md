 # API & WebSocket Protocol

 ## REST API
- Auth: `POST /auth/guest`, `POST /auth/login`, `GET /auth/me`, `POST /auth/ws-token`
- Lists: `GET /lists`, `POST /lists`, `GET /lists/:id`
- Tasks: `POST /tasks`, `PATCH /tasks/:id`, `DELETE /tasks/:id`

## WebSocket Protocol
- Connect: `wss://.../ws?token=<jwt>` (2-min exp)
- Client↔Server events: `room:join`, `task:created`, `reaction:added`, etc.
