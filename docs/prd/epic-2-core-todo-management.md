# Epic 2: Core Todo Management

**Goal:** With authentication in place, this epic focuses on delivering the central value of the application. It will implement the complete Create, Read, Update, and Delete (CRUD) functionality for tasks. By the end of this epic, a logged-in user will be able to fully manage their personal todo list.

---

## **Story 2.1: Database Schema for Todos**
**As a** developer,
**I want** a `todos` table in the database,
**so that** I can store task information for each user.

**Acceptance Criteria:**
1. The database initialization script is updated to create a `todos` table if it doesn't exist.
2. The table includes columns for `id`, `user_id` (as a foreign key to `users.id`), `content` (text), and `is_completed` (boolean).
3. The `user_id` column has a foreign key constraint referencing the `users` table to ensure data integrity.

---

## **Story 2.2: Create and View Todos**
**As a** logged-in user,
**I want** to create new tasks and see my list of existing tasks,
**so that** I can start organizing my work.

**Acceptance Criteria:**
1. A backend endpoint (`POST /api/todos`) creates a new todo associated with the authenticated user.
2. A backend endpoint (`GET /api/todos`) retrieves all todo items belonging to the authenticated user.
3. The main dashboard displays a form for creating new tasks.
4. When the dashboard loads, it fetches and displays the user's tasks, showing their content and completion status.

---

## **Story 2.3: Update Todo Content**
**As a** logged-in user,
**I want** to edit the text of my existing tasks,
**so that** I can correct mistakes or update details.

**Acceptance Criteria:**
1. A backend endpoint (`PUT /api/todos/:id`) updates the `content` of a specific todo item.
2. The backend verifies that the todo item belongs to the authenticated user before updating.
3. On the frontend, clicking a task's text allows for in-line editing.
4. Saving the change calls the API and updates the UI.

---

## **Story 2.4: Update Todo Completion Status**
**As a** logged-in user,
**I want** to mark a task as complete or incomplete,
**so that** I can track my progress.

**Acceptance Criteria:**
1. A backend endpoint allows toggling the `is_completed` status of a todo.
2. The backend verifies ownership before making the change.
3. On the frontend, interacting with a checkbox (or similar UI element) calls the endpoint.
4. The UI visually reflects the completion status (e.g., strikethrough text).

---

## **Story 2.5: Delete Todos**
**As a** logged-in user,
**I want** to delete tasks I no longer need,
**so that** I can keep my list clean and relevant.

**Acceptance Criteria:**
1. A backend endpoint (`DELETE /api/todos/:id`) permanently removes a specific todo item.
2. The backend verifies ownership before deleting.
3. A "Delete" button/icon is present for each task in the UI.
4. Clicking the delete button (and confirming, if implemented) removes the task from the UI and the database.

---
