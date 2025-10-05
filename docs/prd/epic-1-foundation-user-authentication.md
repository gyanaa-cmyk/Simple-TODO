# Epic 1: Foundation & User Authentication

**Goal:** This epic lays the groundwork for the entire application. It involves setting up the project structure, development environment, and database connections. The primary user-facing outcome is a complete and secure authentication system where users can create an account, log in, and log out, protecting their data from unauthorized access.

---

## **Story 1.1: Project Scaffolding**
**As a** developer,
**I want** a monorepo with separate `frontend` and `backend` packages,
**so that** I can develop application components in an organized structure.

**Acceptance Criteria:**
1. A root `package.json` configured with `npm` workspaces is present.
2. `frontend` and `backend` packages exist, each with its own `package.json`.
3. Core dependencies (React, Node, TypeScript, Vite, Express) are installed in the appropriate packages.
4. A basic "canary" page/endpoint can be run for both frontend and backend to verify the setup.

---

## **Story 1.2 (Revised): Backend & Database Initialization**
**As a** developer,
**I want** the backend server to connect to the PostgreSQL database and initialize the schema using raw SQL,
**so that** the application can persist and retrieve data without relying on an external migration tool.

**Acceptance Criteria:**
1. The Express server starts without errors.
2. The server successfully establishes a connection to the PostgreSQL database using the `pg` library.
3. A `users` table (with columns for `id`, `email`, `password_hash`) is created using a raw SQL script, executed by the application on startup if the table does not already exist.
4. A basic health-check API endpoint (e.g., `/api/health`) returns a success status, confirming the server is running.

---

## **Story 1.3: User Registration**
**As a** new user,
**I want** to create an account using my email and a password,
**so that** I can access the application.

**Acceptance Criteria:**
1. A backend endpoint (`/api/register`) accepts an `email` and `password`.
2. The endpoint validates that the email is not already in use.
3. The password is securely hashed before the new user record is saved to the database.
4. A simple frontend form allows a user to input their email and password and submit to register.
5. The UI provides clear feedback on success or failure (e.g., "Email already exists").

---

## **Story 1.4: User Login**
**As an** existing user,
**I want** to log in with my email and password,
**so that** I can access my personal todo list.

**Acceptance Criteria:**
1. A backend endpoint (`/api/login`) validates user credentials.
2. On successful validation, the endpoint returns a JWT (JSON Web Token).
3. A frontend login form captures email and password.
4. On successful login, the JWT is stored securely in the browser, and the user is redirected to the main application dashboard.
5. The UI provides clear feedback on login failure.

---

## **Story 1.5: Logout & Route Protection**
**As a** logged-in user,
**I want** to log out and ensure private pages are protected,
**so that** my session is ended securely and my data is safe.

**Acceptance Criteria:**
1. A "Logout" button is visible to authenticated users.
2. Clicking "Logout" clears the JWT from the browser and redirects the user to the login page.
3. Backend middleware is implemented to protect routes (e.g., all `/api/todos/*` routes).
4. Requests to protected routes without a valid JWT are rejected with a `401 Unauthorized` error.
5. Frontend routing prevents unauthenticated users from accessing the main dashboard.

---
