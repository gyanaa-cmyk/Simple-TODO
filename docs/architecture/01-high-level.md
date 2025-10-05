 # High-Level Architecture

 Clients: React (Web) / React Native (Mobile)

 Backend: Node.js (Express) + `ws` (WebSocket server)

 Database: PostgreSQL 15+ (raw `pg` pool, prepared statements)

 Storage/Infra: Frontend on Vercel; Backend + DB on Railway/Render/Neon

 Observability: pino logs, health & metrics endpoints
