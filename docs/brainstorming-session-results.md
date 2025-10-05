# Brainstorming Session Results

**Session Date:** October 5, 2025
**Facilitator:** Mary (Business Analyst)

---

## Executive Summary

**Topic:** A simple full-stack todo list app with React, TypeScript, Node.js, and PostgreSQL.
**Scope:** A multi-user application with JWT-based authentication and quality-of-life features like reordering, due dates, and search.

**Session Goals:** Start with broad exploration, then prioritize and add features accordingly.

**Techniques Used:** 
- Mind Mapping

---

## Technique Sessions

### Mind Mapping

**Description:** Starting with a central concept ("Simple Full-Stack Todo App"), we will branch out to explore all potential features, components, and requirements.

**Ideas Generated:**

*   **Main Branches:**
    *   Monorepo Structure
    *   User Authentication
    *   Frontend
    *   Backend
    *   Database
    *   Docker
    *   Infrastructure
*   **Technology Specifics:**
    *   TypeScript throughout
    *   Express.js for the backend
    *   `pg` module with Raw SQL for database interaction
    *   JWT (JSON Web Tokens) for authentication.
*   **Monorepo Structure:**
    *   **Tooling:** Use `npm` workspaces for managing dependencies and running scripts.
    *   **Directory Layout:**
        *   `packages/frontend`: The React + TypeScript frontend application.
        *   `packages/backend`: The Node.js + Express backend API.
        *   `packages/database`: Houses database schema, raw SQL migration scripts, and seed files.
        *   `packages/shared-types`: For sharing common TypeScript types (e.g., the `Todo` and `User` types) between frontend and backend.
*   **User Authentication Details:**
    *   **Strategy:** Standard JWT (JSON Web Token) authentication.
    *   **Backend Flow:**
        *   User registers or logs in.
        *   Server validates credentials, generates a JWT, and returns it to the client.
        *   For subsequent requests, the client sends the JWT in the `Authorization` header.
        *   A middleware on the backend validates the token on protected routes.
    *   **Frontend Flow:**
        *   User is presented with Login/Register forms.
        *   Upon successful login, the JWT is stored securely (e.g., `localStorage` or a cookie).
        *   The token is attached to all subsequent API requests.
        *   App provides a way for users to log out (clearing the token).
*   **Frontend Details:**
    *   **Core Components:**
        *   `LoginPage`: A view for user login.
        *   `RegisterPage`: A view for new user registration.
        *   `Header`: Clean header with app title, Logout button, and a `SearchBar`.
        *   `TodoInputForm`: Input field and "Add Task" button.
        *   `TodoList`: A drag-and-drop enabled container for all todo items.
        *   `TodoItem`: The individual task item (title, checkbox, due date, edit/delete icons, drag handle).
        *   `FilterControls`: Buttons to filter by "All", "Active", "Completed".
        *   `Footer`: Displays a count of active items.
    *   **User Actions:**
        *   `login`, `register`, `logout`
        *   `addTodo`, `toggleTodoComplete`, `deleteTodo`, `editTodo`, `filterTodos`
        *   `reorderTodos`: Drag-and-drop to re-sort tasks.
        *   `setDueDate`: Add or change a task's due date.
        *   `searchTodos`: Filter tasks by text content in real-time.
    *   **Styling & UI/UX:**
        *   **Aesthetic:** Modern, sleek, clean design ("Airbnb style").
        *   **Font:** Satoshi.
        *   **Explicit "Airbnb Style" Guide:**
            *   **Color Palette:** Neutral backgrounds (white, light gray), dark gray text, and a single vibrant accent color (e.g., coral/teal) for interactive elements.
            *   **Layout & Spacing:** Spacious, uncluttered layout with a consistent grid and generous whitespace.
            *   **Iconography:** Simple, clean, lightweight line icons (e.g., Feather Icons or Heroicons).
            *   **Borders & Shadows:** Avoid harsh borders; use whitespace and subtle, soft box-shadows for depth.
        *   **Animations (using `framer-motion`):**
            *   **List Animations:** Animate tasks smoothly on add/remove and reorder.
            *   **Micro-interactions:** Subtle feedback on hover/press for buttons and checkboxes.
            *   **State Transitions:** Smooth animations for state changes (e.g., strikethrough on task completion).
    *   **State Management:**
        *   Start with React's built-in hooks (`useState`, `useReducer`, `useContext`) for managing auth state and todos.
*   **Docker Details:**
    *   **Overall Strategy:** A `docker-compose.yml` file at the root will manage all services.
    *   **Backend Service (`packages/backend`):**
        *   Will have its own `Dockerfile` using the `node:current-alpine` base image.
        *   Will be a multi-stage build for a smaller final image size.
    *   **Frontend Service (`packages/frontend`):**
        *   Will have its own `Dockerfile`.
        *   A multi-stage build that first builds the React app, then serves the static files using a lightweight server like `nginx:alpine`.
    *   **Database Service:**
        *   Defined in `docker-compose.yml` using the `postgres:16` image.
        *   Configured with environment variables for the database, user, and password.
        *   A Docker volume will be used to persist database data.
*   **Backend Details:**
    *   **Framework:** Express.js with TypeScript.
    *   **API Endpoints (RESTful approach):**
        *   **Auth Routes:**
            *   `POST /api/auth/register`: Creates a new user.
            *   `POST /api/auth/login`: Authenticates a user and returns a JWT.
        *   **Todo Routes (Protected):**
            *   `GET /api/todos`: Fetches all todos for the user. Can accept a search query parameter.
            *   `POST /api/todos`: Creates a new todo. Handles `text`, `due_date`.
            *   `PUT /api/todos/:id`: Updates a todo's `text`, `is_completed`, or `due_date`.
            *   `POST /api/todos/reorder`: A batch endpoint to update the `position` of multiple todos at once.
            *   `DELETE /api/todos/:id`: Deletes a specific todo.
    *   **Code Structure:**
        *   Organize code into `routes`, `controllers`, and `services` for maintainability. Raw SQL queries will be handled in a dedicated data access layer.
*   **Database Details:**
    *   **Platform:** PostgreSQL (version 16).
    *   **Table Schemas:**
        *   **`users` table:**
            *   `id`: `UUID` (Primary Key).
            *   `email`: `TEXT` (Unique, Not Null).
            *   `password_hash`: `TEXT` (Not Null).
            *   `created_at`: `TIMESTAMPTZ`.
            *   `updated_at`: `TIMESTAMPTZ`.
        *   **`todos` table:**
            *   `id`: `UUID` (Primary Key).
            *   `user_id`: `UUID` (Foreign Key to `users.id`).
            *   `text`: `TEXT` (Not Null).
            *   `is_completed`: `BOOLEAN` (Defaults to `false`).
            *   `position`: `INTEGER` - For ordering the tasks.
            *   `due_date`: `TIMESTAMPTZ` (Nullable) - The task's due date.
            *   `created_at`: `TIMESTAMPTZ`.
            *   `updated_at`: `TIMESTAMPTZ`.
    *   **Scripts Location:** All raw SQL schema and migration scripts will be located in the `packages/database` directory.
*   **Infrastructure Details:**
    *   **Hosting Environment:** Self-hosted on a private Kubernetes cluster.
    *   **Container Registry:** A private container registry (e.g., Harbor, Docker Hub) will be used to store built Docker images.
    *   **CI/CD:** GitHub Actions will build and push Docker images for the frontend and backend to the private registry.
    *   **Deployment:** Kubernetes manifests (YAML) will define `Deployments` for services, and an `Ingress` to expose them. PostgreSQL will run as a `StatefulSet` using Persistent Volumes for data storage.
