# Simple Todo Product Requirements Document (PRD)

## Goals and Background Context

### Goals

*   Achieve a high Net Promoter Score (NPS) or equivalent user satisfaction rating (e.g., 4.5+ star average).
*   Validate the one-time purchase pricing model by achieving a target number of sales.
*   Position the project as a leading alternative to subscription-based todo applications.
*   Achieve a high user retention rate, with users actively managing tasks for at least three months.
*   Realize a high conversion rate from trial users to paid customers.

### Background Context

Individuals and professionals often struggle with personal organization, caught between overly simplistic free apps and expensive, feature-bloated subscription services. This project aims to solve that problem by creating a full-stack, multi-user todo list application that offers a premium, "prosumer-grade" experience without a recurring subscription. The core value is to provide a beautiful, modern, and feature-rich task management tool that users can purchase outright, filling a significant gap in the current market.

### Change Log

| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-10-05 | 1.0 | Initial draft | John (PM) |

---

## Requirements

### Functional

1.  **FR1:** Users must be able to create an account, log in, and log out securely.
2.  **FR2:** Authenticated users must be able to create, view, edit, and delete their own todo items.
3.  **FR3:** Users must be able to mark their todo items as complete or incomplete.
4.  **FR4:** Users must be able to change the order of their todo items using drag-and-drop.
5.  **FR5:** Users must be able to add an optional due date to any of their todo items.
6.  **FR6:** Users must be able to filter their visible todo list by searching for matching text content.

### Non-Functional

1.  **NFR1:** The application must be delivered as a stable, reliable hosted service.
2.  **NFR2:** The user interface must be responsive and performant, with key interactions completing in under 100ms.
3.  **NFR3:** The web application must be fully functional on the latest versions of all major modern browsers (Chrome, Firefox, Safari, Edge).
4.  **NFR4:** All API endpoints must be protected, and user identity verified (e.g., via JWT).
5.  **NFR5:** All user passwords must be securely hashed before being stored in the database.

---

## User Interface Design Goals

### Overall UX Vision
The application's user experience should be sophisticated, clean, and visually appealing, drawing inspiration from the modern, uncluttered aesthetics of platforms like Airbnb. The goal is to create a premium, intuitive interface that feels both powerful and effortless to use, making task management a pleasant experience.

### Key Interaction Paradigms
- **Drag-and-Drop:** Users will primarily manage task order through a fluid drag-and-drop interface.
- **In-line Editing:** Clicking on a task should allow for seamless in-place editing of its content.
- **Real-time Filtering:** The task list should update instantly as the user types in the search/filter bar.

### Core Screens and Views
- **Login/Sign-Up Screen:** A clean, simple entry point for user authentication.
- **Main Dashboard / Todo List:** The central view where users see, manage, and interact with their tasks. This is the primary workspace.
- **User Settings Page:** A basic screen for managing account details (e.g., changing password).

### Accessibility: WCAG AA
The application should adhere to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure it is usable by people with a wide range of disabilities.

### Branding
The visual design should follow a minimalist and modern aesthetic. While no formal style guide exists, the look and feel should be comparable to high-quality, design-focused web applications.

### Target Device and Platforms: Web Responsive
The application must be a responsive web app, providing a seamless and fully functional experience across all major modern desktop and mobile web browsers.

---

## Technical Assumptions

### Repository Structure: Monorepo
The project will be developed within a single monorepo managed with `npm` workspaces, containing both the `frontend` and `backend` packages.

### Service Architecture
The application will use a standard, decoupled architecture consisting of a Single-Page Application (SPA) frontend that communicates with a backend REST API. This provides a clear separation of concerns while remaining straightforward to develop and deploy for the MVP.

### Deployment & Hosting
The application will be containerized using Docker for consistency across development, testing, and production environments.

- **Local Development:** `docker-compose` will be used to orchestrate the `frontend`, `backend`, and `postgres` services locally.
- **Production Deployment:** For production, Docker images will be built and pushed to a private container registry. These images will then be deployed to a self-hosted Kubernetes (K8s) cluster.
- **Hosting:** The application will be self-hosted on a private Kubernetes cluster.

### Testing Requirements
The project will require both **Unit and Integration tests** to ensure code quality and reliability. All new features should be accompanied by sufficient tests to validate their correctness.

### Additional Technical Assumptions and Requests
- **Frontend:**
    - **Framework:** React with TypeScript
    - **Build Tool:** Vite
    - **Styling:** Tailwind CSS
    - **Animations:** Framer Motion
- **Backend:**
    - **Runtime/Framework:** Node.js with Express
    - **Language:** TypeScript
- **Database:**
    - **System:** PostgreSQL (version 16)
- **Database Initialization:** The database schema will be initialized using raw SQL scripts executed by the application on startup, rather than using a dedicated migration tool/library.

---

## Epic List

1.  **Epic 1: Foundation & User Authentication:** Establish the project's foundational infrastructure (monorepo, CI/CD, database setup) and deliver a complete, secure user authentication system.
2.  **Epic 2: Core Todo Management:** Implement the essential todo list functionality, allowing authenticated users to create, view, edit, delete, and mark their tasks as complete.
3.  **Epic 3: Enhanced Task Interactions:** Introduce advanced features that define the premium user experience, including drag-and-drop reordering, due dates, and text-based search.

---

## Epic 1: Foundation & User Authentication

**Goal:** This epic lays the groundwork for the entire application. It involves setting up the project structure, development environment, and database connections. The primary user-facing outcome is a complete and secure authentication system where users can create an account, log in, and log out, protecting their data from unauthorized access.

---

### **Story 1.1: Project Scaffolding**
**As a** developer,
**I want** a monorepo with separate `frontend` and `backend` packages,
**so that** I can develop application components in an organized structure.

**Acceptance Criteria:**
1. A root `package.json` configured with `npm` workspaces is present.
2. `frontend` and `backend` packages exist, each with its own `package.json`.
3. Core dependencies (React, Node, TypeScript, Vite, Express) are installed in the appropriate packages.
4. A basic "canary" page/endpoint can be run for both frontend and backend to verify the setup.

---

### **Story 1.2 (Revised): Backend & Database Initialization**
**As a** developer,
**I want** the backend server to connect to the PostgreSQL database and initialize the schema using raw SQL,
**so that** the application can persist and retrieve data without relying on an external migration tool.

**Acceptance Criteria:**
1. The Express server starts without errors.
2. The server successfully establishes a connection to the PostgreSQL database using the `pg` library.
3. A `users` table (with columns for `id`, `email`, `password_hash`) is created using a raw SQL script, executed by the application on startup if the table does not already exist.
4. A basic health-check API endpoint (e.g., `/api/health`) returns a success status, confirming the server is running.

---

### **Story 1.3: User Registration**
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

### **Story 1.4: User Login**
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

### **Story 1.5: Logout & Route Protection**
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

## Epic 2: Core Todo Management

**Goal:** With authentication in place, this epic focuses on delivering the central value of the application. It will implement the complete Create, Read, Update, and Delete (CRUD) functionality for tasks. By the end of this epic, a logged-in user will be able to fully manage their personal todo list.

---

### **Story 2.1: Database Schema for Todos**
**As a** developer,
**I want** a `todos` table in the database,
**so that** I can store task information for each user.

**Acceptance Criteria:**
1. The database initialization script is updated to create a `todos` table if it doesn't exist.
2. The table includes columns for `id`, `user_id` (as a foreign key to `users.id`), `content` (text), and `is_completed` (boolean).
3. The `user_id` column has a foreign key constraint referencing the `users` table to ensure data integrity.

---

### **Story 2.2: Create and View Todos**
**As a** logged-in user,
**I want** to create new tasks and see my list of existing tasks,
**so that** I can start organizing my work.

**Acceptance Criteria:**
1. A backend endpoint (`POST /api/todos`) creates a new todo associated with the authenticated user.
2. A backend endpoint (`GET /api/todos`) retrieves all todo items belonging to the authenticated user.
3. The main dashboard displays a form for creating new tasks.
4. When the dashboard loads, it fetches and displays the user's tasks, showing their content and completion status.

---

### **Story 2.3: Update Todo Content**
**As a** logged-in user,
**I want** to edit the text of my existing tasks,
**so that** I can correct mistakes or update details.

**Acceptance Criteria:**
1. A backend endpoint (`PUT /api/todos/:id`) updates the `content` of a specific todo item.
2. The backend verifies that the todo item belongs to the authenticated user before updating.
3. On the frontend, clicking a task's text allows for in-line editing.
4. Saving the change calls the API and updates the UI.

---

### **Story 2.4: Update Todo Completion Status**
**As a** logged-in user,
**I want** to mark a task as complete or incomplete,
**so that** I can track my progress.

**Acceptance Criteria:**
1. A backend endpoint allows toggling the `is_completed` status of a todo.
2. The backend verifies ownership before making the change.
3. On the frontend, interacting with a checkbox (or similar UI element) calls the endpoint.
4. The UI visually reflects the completion status (e.g., strikethrough text).

---

### **Story 2.5: Delete Todos**
**As a** logged-in user,
**I want** to delete tasks I no longer need,
**so that** I can keep my list clean and relevant.

**Acceptance Criteria:**
1. A backend endpoint (`DELETE /api/todos/:id`) permanently removes a specific todo item.
2. The backend verifies ownership before deleting.
3. A "Delete" button/icon is present for each task in the UI.
4. Clicking the delete button (and confirming, if implemented) removes the task from the UI and the database.

---

## Epic 3: Enhanced Task Interactions

**Goal:** This epic elevates the application from a basic todo list to a premium product by introducing advanced, user-friendly features. It focuses on improving the user's workflow and efficiency through fluid interactions like drag-and-drop, better task metadata with due dates, and powerful filtering via search.

---

### **Story 3.1: Database Schema for Ordering & Due Dates**
**As a** developer,
**I want** to update the `todos` table to support ordering and due dates,
**so that** I can store this additional task information.

**Acceptance Criteria:**
1. The database initialization script is updated to add an `order_index` (integer) and a nullable `due_date` (timestamp) column to the `todos` table.
2. When a new task is created, it is automatically assigned the next available `order_index` (i.e., placed at the end of the list).
3. The `GET /api/todos` endpoint is updated to return tasks sorted by their `order_index`.

---

### **Story 3.2: Implement Due Dates**
**As a** logged-in user,
**I want** to add and edit an optional due date for my tasks,
**so that** I can manage my deadlines effectively.

**Acceptance Criteria:**
1. Backend endpoints for creating and updating todos are updated to accept an optional `due_date`.
2. The `GET /api/todos` endpoint includes the `due_date` in its response.
3. The frontend UI displays a task's due date and provides a date picker to add, edit, or remove it.
4. Due dates that are in the past are visually distinguished from upcoming ones.

---

### **Story 3.3: Implement Drag-and-Drop Reordering**
**As a** logged-in user,
**I want** to reorder my tasks by dragging and dropping them,
**so that** I can prioritize my work visually and intuitively.

**Acceptance Criteria:**
1. A new backend endpoint (`PUT /api/todos/reorder`) accepts an ordered list of todo IDs and updates their `order_index` in the database.
2. The backend logic performs this update within a single transaction to ensure data integrity.
3. A drag-and-drop library is implemented on the frontend task list.
4. When a user drops a task in a new position, the UI updates instantly, and the new order is sent to the backend to be persisted.

---

### **Story 3.4: Implement Text Search/Filter**
**As a** logged-in user,
**I want** to filter my task list by typing text into a search bar,
**so that** I can quickly find specific tasks.

**Acceptance Criteria:**
1. The `GET /api/todos` endpoint is updated to accept an optional `search` query parameter.
2. If the `search` parameter is provided, the backend returns only tasks whose content contains the search string (case-insensitive).
3. A search input field is added to the main dashboard UI.
4. As the user types into the search field, the displayed list of tasks updates in real-time to show only matching results.
