 # Technical Overview

 ## Architecture
 Frontend: React (Web) + React Native (Mobile)
 Backend: Node.js (Fastify/Express)
 Database: PostgreSQL (raw `pg`)
 Realtime: Custom `ws` WebSocket
 Auth: Cookie sessions (custom)
 Infra: Vercel + Railway/Render

## Auth & Authorization
 Guest → Registered flow, PostgreSQL sessions, role-based access.

## WebSocket Layer
 JWT handshake, heartbeat pings, room broadcasts.

## Frontend Frameworks
 React + Tailwind + Shadcn/UI + Framer Motion + Lottie.

## Data Model
 Users, Sessions, Lists, Tasks, ListMembers, Reactions, Comments, Streaks.

## DevOps & Tooling
 Node 20+, pnpm, ESLint, Vitest, CI/CD, pino logs.
