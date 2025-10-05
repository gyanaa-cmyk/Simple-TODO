 # FlowList — Product Requirements Document (Full Backup)

 ## 🧱 Product Overview
 **Product Name:** FlowList  
 **Tagline:** Your day, beautifully organized.

 FlowList transforms daily productivity into a visually delightful, frictionless experience. It merges elegant design, fluid micro-animations, and seamless collaboration to make staying organized feel inspiring rather than mechanical.

 **Mission:** Make personal and team productivity visually engaging, emotionally rewarding, and effortless across web and mobile.

 **Core Problem:** Existing to-do apps lack emotional connection, visual delight, and easy collaboration.

 **Solution:** A design-first, human-centered productivity platform focusing on visual excellence, real-time collaboration, and low-friction onboarding.

 ----

 ## 🎯 Goals & Success Metrics

 ### Primary Goals
 1. Deliver Airbnb-level UI and motion design across Web + Mobile.
 2. Enable real-time collaboration with reactions and streaks.
 3. Instant guest onboarding with seamless upgrade.
 4. Offline-first reliability.
 5. Custom backend control (auth + sockets + PostgreSQL).

 ### Secondary Goals
 - Light gamification (streaks, reactions)
 - Accessibility and performance parity
 - Future-ready premium model

 ### KPIs
 | Category | Metric | Target |
 |-----------|---------|--------|
 | Engagement | DAU / Sign-ups | ≥ 40% |
 | Retention | 7-day retention | ≥ 55% |
 | Collaboration | Shared lists | ≥ 25% |
 | Performance | Task latency | < 250ms |
 | Design Quality | User rating | ≥ 4.5 |
 | Conversion | Guest → Registered | ≥ 20% |

 ----

 ## ⚙️ Core Features

 ### Task Management
 - CRUD, reorder, completion animations.
 - Multi-select actions with physics-based drag.

 ### Collaborative Lists
 - Invite via email/code.
 - Real-time updates via WebSockets.
 - Reactions, comments, and visual presence.

 ### Instant Guest Mode
 - Guest sessions auto-created.
 - Upgrade seamlessly.

 ### Custom Auth
 - Password, magic link, or passkey.
 - Raw PostgreSQL sessions with SHA256 token hashes.

 ### Realtime Infrastructure
 - Custom `ws` server.
 - JWT handshake, list-based rooms.

 ### Design System
 - React + Tailwind + Shadcn/UI.
 - Satoshi + Inter font pairing.
 - Consistent motion curves.

 ### Gamified Feedback
 - Streak visualization, achievements, confetti bursts.

 ----

 ## 🎨 User Experience

 ### Design Philosophy
 - Human feel, tactile feedback, warm gradients.
 - Predictable delight and progressive complexity.

 ### Information Architecture
 | Screen | Purpose | Interaction |
 |--------|----------|--------------|
 | Dashboard | Today’s tasks | Animated card stack |
 | Lists | Manage personal/shared | Slide-in glass cards |
 | Task Modal | Add/Edit tasks | FAB morph animation |
 | Shared View | Teams & presence | Reactions + confetti |
 | Profile | Stats, streaks | Parallax charts |

 ### Interaction Patterns
 - FAB morph transitions.
 - Confetti completion bursts.
 - Swipe gestures for actions.
 - Realtime reaction feedback.
 - Mobile gestures + web rail navigation.

 ### Accessibility & Performance
 - WCAG AA color contrast.
 - Motion preferences respected.
 - Load ≤1.5s, 60fps animations.

 ----

 ## 🧰 Technical Overview

 ### Architecture
 Frontend: React (Web) + React Native (Mobile)  
 Backend: Node.js (Fastify/Express)  
 Database: PostgreSQL (raw `pg`)  
 Realtime: Custom `ws` WebSocket  
 Auth: Cookie sessions (custom)  
 Infra: Vercel + Railway/Render

 ### Auth & Authorization
 Guest → Registered flow, PostgreSQL sessions, role-based access.

 ### WebSocket Layer
 JWT handshake, heartbeat pings, room broadcasts.

 ### Frontend Frameworks
 React + Tailwind + Shadcn/UI + Framer Motion + Lottie.

 ### Data Model
 Users, Sessions, Lists, Tasks, ListMembers, Reactions, Comments, Streaks.

 ### DevOps & Tooling
 Node 20+, pnpm, ESLint, Vitest, CI/CD, pino logs.

 ----

 ## 📦 MVP Scope

 ### Included in MVP
 | Category | Feature | Notes |
 |-----------|----------|-------|
 | Auth | Guest + custom login | Low friction |
 | Tasks | CRUD + reorder | Physics-based motion |
 | Lists | Shared lists | Realtime sync |
 | Collaboration | Reactions + streaks | Visual polish |
 | UI | Responsive Airbnb-style | Shared system |
 | WebSocket | Full duplex sync | Custom built |
 | Offline | Local cache sync | TanStack Query |
 | Profile | Streaks + stats | Animated |
 | Mobile | React Native parity | Gestures |

 ### Post-MVP
 Push notifications, voice input, theming, advanced roles, premium tiers.

 ### Constraints
 6–8 weeks dev, Web + Mobile, target 500+ DAU month 1.
