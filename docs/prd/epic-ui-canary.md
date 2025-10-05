<!-- Epic: UI Component Library & Canary -->

# Epic: UI Component Library & Canary

Goal
: Deliver a small, launchable UI surface that implements the design tokens and motion system from `docs/FrontEnd Spec.md`, provides a TaskCard and FAB component using Framer Motion, and exposes a minimal canary page that verifies backend guest flow. This epic is scoped to frontend-only work and is intended to be completed quickly to validate visual system integration.

Stories (sequenced)

## Story UI.1 - Frontend tokens & design system files
As a frontend developer,
I want a token file (colors, gradients, fonts, motion timings) and a small design-system utilities file,
so that components can import consistent visual tokens from `docs/FrontEnd Spec.md`.

Acceptance Criteria
1. `web/src/styles/tokens.ts` (or `.css`) exists and exports/imports tokens for fonts, primary gradient, radii, shadows, and motion timings (`motion.fast|medium|slow`).
2. Fonts (Satoshi, Inter) are referenced in the project and documented in README.
3. A small usage example shows TaskCard styling reading tokens.

## Story UI.2 - Scaffold web app with Tailwind + shadcn
As a developer,
I want a minimal `/web` scaffold with Tailwind and shadcn installed and configured,
so that we have a consistent environment to build components.

Acceptance Criteria
1. `web/package.json` exists with `dev` script and required deps (react, tailwindcss, shadcn, framer-motion).
2. `web/tailwind.config.js` and a minimal `postcss` setup are present.
3. `web/src/main.*` and `web/src/App.*` boot the app and import `tokens`.

## Story UI.3 - TaskCard + FAB (Framer Motion morph)
As a user,
I want a TaskCard component and a FAB that morphs into an Add Task modal using Framer Motion,
so that the core interaction and motion patterns from the spec are validated.

Acceptance Criteria
1. `web/src/components/TaskCard.*` implements the visual states and uses `motion` tokens for hover/complete animation.
2. `web/src/components/FAB.*` morphs into a modal with shared layout or scale animation using Framer Motion.
3. Story or demo page shows both components and their interactions.

## Story UI.4 - Canary page + accessibility check
As a QA/Frontend dev,
I want a `/` canary page that calls `POST /auth/guest` then `GET /lists` and displays results, and basic accessibility checks,
so that we can validate backend integration and confirm keyboard/reduced-motion behavior.

Acceptance Criteria
1. `web/src/App.*` contains a "Start as Guest" button that triggers guest flow and displays `GET /lists` response.
2. Keyboard navigation works (tab order) and `prefers-reduced-motion` is respected (no non-essential motion).
3. README contains run steps to start the web canary locally.

Notes
- Keep each story small and focused; prefer functionally complete vertical slices.
- This epic is frontend-only and must use tokens from `docs/FrontEnd Spec.md`.
