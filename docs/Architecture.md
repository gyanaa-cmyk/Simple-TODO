# FlowList — System Architecture

> Architecture created from the approved **PRD** and **Frontend Specification** for FlowList (Web + Mobile). Focus: custom auth, custom WebSocket, PostgreSQL via raw `pg`, minimal friction UX.

---

## 1) Objectives & Constraints

**Objectives**
- Premium, animation-rich UI with fast realtime collaboration.
- Full control of backend: custom auth, sessions, and WebSockets.
- Simple, explicit data model in PostgreSQL.
- Offline-friendly, conflict-minimized sync.

**Constraints**
- No ORMs (raw `pg`).
- Low latency (<250ms round-trip on typical networks).
- Web + Mobile parity (React + React Native).

---

## 2) High-Level Architecture

**Clients**: React (Web) / React Native (Mobile)
- UI: Tailwind / shadcn/ui / Framer Motion / Lottie

Frontend Implementation Requirement: The frontend must implement the visual system and motion tokens defined in `docs/FrontEnd Spec.md` (fonts, gradients, motion timing tokens, component interaction patterns). This ensures visual parity and predictable animations across Web and Mobile.
- Data: TanStack Query for REST; small Zustand bridge for sockets

**Backend**: Node.js (Fastify recommended) + `ws`
- REST API for CRUD & auth
- WebSocket server for realtime rooms & presence

**Database**: PostgreSQL 15+
- Raw `pg` pool, prepared statements, SQL migrations

**Storage/Infra**
- Deploy: Frontend (Vercel), Backend + DB (Railway/Render/Neon/Cloud SQL)
- CDN/Assets: Vercel static

**Observability**
- pino logs JSON, metrics endpoint (`/health`, `/metrics`), basic tracing hooks

```
[Web/Mobile] ⇄ (HTTPS) ⇄ [Fastify REST] ⇄ [PostgreSQL]
      │                          │
      └──── (WSS) ───> [ws server│rooms/presence]
```

---

## 3) Module Decomposition

### 3.1 Backend Services
- **Auth Service**: guest create, signup/login, session issuance/rotation, WS token mint
- **User Service**: profile, streaks
- **List Service**: lists, members, invites
- **Task Service**: tasks CRUD, reorder, comments, reactions
- **Realtime (WS) Service**: room join/leave, presence, broadcast, rate limiting

### 3.2 Frontend Apps
- **Web SPA**: Responsive layouts, keyboard shortcuts, deep-linking
- **Mobile App**: Expo/React Native, bottom tabs, native gestures

---

## 4) Data Model (ERD & DDL Summary)

### 4.1 ERD (conceptual)
```
 users (1) ──< sessions
   │
   └──< lists (owner_id)
         │
         ├──< list_members >── users
         │
         └──< tasks ──< comments
                     └──< task_reactions
 users (1) ──< streaks (1)
```

### 4.2 Core Tables (DDL Summary)
- **users**(id, email, username, password_hash, is_guest, created_at)
- **sessions**(id, user_id, token_hash, ua, ip, expires_at, created_at)
- **lists**(id, owner_id, title, is_shared, created_at)
- **list_members**(list_id, user_id, role, added_at)
- **tasks**(id, list_id, title, notes, due_date, is_done, sort_index, created_by, created_at, updated_at)
- **comments**(id, task_id, user_id, content, created_at)
- **task_reactions**(id, task_id, user_id, emoji, created_at)
- **streaks**(user_id, current, longest, updated_on)

**Indexes**
- sessions(user_id), sessions(expires_at)
- lists(owner_id)
- tasks(list_id), tasks(list_id, is_done, sort_index)
- task_reactions(task_id)

**Notes**
- `sort_index` uses fractional insert strategy to avoid renumbering on drag.
- All writes use parameterized SQL.

---

## 5) API Design (REST)

**Auth**
- `POST /auth/guest` → create guest user + session cookie
- `POST /auth/signup` → email/password (hash with argon2id)
- `POST /auth/login` → issue session cookie
- `POST /auth/logout` → revoke session
- `GET  /auth/me` → current user
- `POST /auth/ws-token` → short-lived JWT for WebSocket

**Lists**
- `GET  /lists` → user’s lists
- `POST /lists` → create
- `GET  /lists/:id` → list + tasks
- `PATCH /lists/:id` → update
- `POST /lists/:id/invite` → add member (email or code)
- `GET  /lists/:id/members` → list members

**Tasks**
- `POST /tasks` → create
- `PATCH /tasks/:id` → update (title/notes/is_done/due/sort_index)
- `DELETE /tasks/:id` → delete
- `POST /tasks/:id/reaction` → add reaction
- `POST /tasks/:id/comment` → add comment

**Conventions**
- Auth via HttpOnly cookie `sid` (Secure, Lax). JSON responses only.
- Validation via zod, error format `{ error: { code, message, details? } }`.

---

## 6) WebSocket Protocol

**Connect**: `wss://api.flowlist.app/ws?token=<jwt>` (2-min exp)

**Client → Server**
- `auth:hello` `{ token? }` (if not in URL)
- `room:join` `{ listId }`
- `room:leave` `{ listId }`
- `task:create` `{ listId, title, ... }`
- `task:update` `{ id, patch }`
- `task:reorder` `{ listId, id, targetIndex }`
- `reaction:add` `{ taskId, emoji }`
- `comment:add` `{ taskId, content }`
- `presence:ping` `{ listId }`

**Server → Client**
- `room:joined` `{ listId, members }`
- `presence:update` `{ listId, onlineUserIds }`
- `task:created|updated|reordered|deleted`
- `reaction:added`
- `comment:added`
- `streak:updated`

**Rooms**: in-memory map `{ listId: Set<Socket> }`. Presence TTL via 30s heartbeats.

**Backpressure**: max payload size, drop noisy clients, broadcast batching per tick.

---

## 7) Authentication & Sessions

**Cookie Sessions**
- On login/guest create: generate 256-bit token, store SHA-256 hash in `sessions.token_hash` with expiry (30d default), set `sid` cookie.
- Rotate token on privilege changes; purge expired sessions via daily job.

**Password Security**
- Hash with argon2id. Throttle login attempts per IP/user (sliding window).

**WS Auth**
- `/auth/ws-token` returns signed JWT (kid/alg HS256), includes `user_id`, `exp≈120s`.
- Validate on connect and on privileged events.

**AuthZ**
- For list/task mutations: check `list_members` or `lists.owner_id`.

---

## 8) Offline & Sync Strategy
# FlowList — System Architecture (Index)

This document has been sharded to `docs/architecture/` for easier collaboration. Open the individual sections below:

- Overview: `architecture/00-overview.md`
- High-Level Architecture: `architecture/01-high-level.md`
- Modules: `architecture/02-modules.md`
- Data Model: `architecture/03-data-model.md`
- API & WS: `architecture/04-api-ws.md`
- Auth & Security: `architecture/05-auth-security.md`
- Deployment & Testing: `architecture/06-deployment-testing.md`

A full backup of the original architecture is available at `docs/Architecture-full.md`.
---


