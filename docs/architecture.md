# Simple Todo - Full-Stack Architecture

## Introduction

This document outlines the comprehensive architecture for the Simple Todo application. It covers the frontend, backend, database, and infrastructure design, ensuring a cohesive, scalable, and maintainable system. This architecture is derived from the project's Product Requirements Document (PRD) and the UI/UX Specification, translating functional and non-functional requirements into a technical blueprint.

### Guiding Principles
- **Decoupled Services:** A clear separation between the frontend Single-Page Application (SPA) and the backend REST API to promote independent development and deployment.
- **Pragmatic Technology:** Utilizing a modern but stable and well-supported tech stack (React, Node.js, PostgreSQL) to ensure developer productivity and system reliability.
- **User-Centric Design:** The architecture is designed to support the fluid, responsive, and performant user experience defined in the UI/UX specification.
- **Container-First:** Standardizing on Docker for all environments to ensure consistency from local development to production.

### Change Log

| Date       | Version | Description      | Author    |
| :--------- | :------ | :--------------- | :-------- |
| 2025-10-05 | 1.0     | Initial draft    | Winston (Architect) |

---

## Overall Architecture

### System Diagram

The application follows a classic decoupled architecture, with a client-side SPA communicating with a stateless backend API, which in turn interacts with a relational database.

```mermaid
graph TD
    subgraph "User's Browser"
        A[React SPA]
    end

    subgraph "Self-Hosted Kubernetes Cluster"
        B[Backend API (Node.js/Express)]
        C[PostgreSQL Database]
    end

    A --"HTTPS (REST API Calls)"--> B
    B --"TCP"--> C
```

### Architectural Pattern
- **Decoupled SPA + REST API:** This pattern is chosen for its clear separation of concerns. The frontend handles all presentation logic, while the backend manages business logic and data persistence. This allows for independent scaling and development cycles.

### Component Overview
1.  **Frontend (SPA):** A responsive web application built with React and TypeScript. It is responsible for rendering the UI, managing client-side state, and communicating with the backend via RESTful API calls.
2.  **Backend (REST API):** A stateless API built with Node.js and Express. It handles user authentication, business logic for task management, and all database interactions.
3.  **Database:** A PostgreSQL instance used for persisting all user and application data, including user accounts and todo items.

---

## Frontend Architecture

The frontend is designed to be a modern, performant, and maintainable Single-Page Application.

### Tech Stack
- **Framework:** React (v18+) with TypeScript
- **Build Tool:** Vite for fast development and optimized builds.
- **Styling:** Tailwind CSS for a utility-first styling approach.
- **Animations:** Framer Motion for creating fluid and functional UI animations.

### Component Structure
Components will be built following a utility-first approach, as defined in the UI/UX spec. Key composite components include:
- `TaskItem`: Represents a single todo item, handling its own state (e.g., hover, edit mode).
- `TaskList`: Manages the list of `TaskItem` components, including reordering via drag-and-drop.
- `Header`: Contains the logo, search bar, and user profile dropdown.

### State Management
- **Local Component State:** For UI-specific state (e.g., input values, hover states), React's `useState` and `useReducer` hooks will be sufficient.
- **Global State:** For global concerns like user authentication status and the JWT token, React's Context API will be used. This avoids the need for a heavier external library for the current scope.

### Routing
- **Library:** `react-router-dom` will manage client-side routing.
- **Routes:**
    - `/login`: The authentication page.
    - `/`: The main dashboard, protected to only be accessible by authenticated users.
    - `/settings`: User account management page.

### Styling
- **Tailwind CSS:** All styling will be implemented using Tailwind's utility classes. A `tailwind.config.js` file will be configured with the project's specific color palette, typography, and spacing scale as defined in the UI/UX spec.

### Animations
- **Framer Motion:** This library will be used to implement the animations specified in the UI/UX spec, such as task add/remove transitions and drag-and-drop feedback.

---

## Backend Architecture

The backend is a standard RESTful API designed for security, clarity, and statelessness.

### Tech Stack
- **Runtime/Framework:** Node.js with Express.js
- **Language:** TypeScript
- **Database Driver:** `pg` (node-postgres) for communication with the PostgreSQL database.

### API Design
- **Style:** RESTful. The API will use standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) and status codes.
- **Data Format:** JSON will be used for all request and response bodies.
- **Versioning:** The API will be versioned via a URL prefix (e.g., `/api/v1`).

### Authentication
- **Strategy:** JSON Web Tokens (JWT).
- **Flow:**
    1. A user logs in via the `/api/login` endpoint.
    2. The server validates credentials and, if successful, issues a short-lived JWT.
    3. The frontend stores this token securely (e.g., in an HttpOnly cookie or local storage).
    4. For all subsequent requests to protected endpoints, the frontend sends the JWT in the `Authorization` header.
    5. A middleware on the backend validates the token on every protected request.

### Database Interaction
- **Method:** The `pg` library will be used to execute raw SQL queries.
- **Connection Management:** The backend will use a connection pool to efficiently manage connections to the database.
- **No ORM:** As per the technical requirements, no Object-Relational Mapper (ORM) will be used. Data access logic will be encapsulated in dedicated service modules.

### Key API Endpoints
- `POST /api/register`: Create a new user account.
- `POST /api/login`: Authenticate a user and return a JWT.
- `GET /api/todos`: Get all todos for the authenticated user. Supports `?search=` query param.
- `POST /api/todos`: Create a new todo.
- `PUT /api/todos/:id`: Update a todo's content or due date.
- `PUT /api/todos/:id/status`: Toggle a todo's completion status.
- `DELETE /api/todos/:id`: Delete a todo.
- `PUT /api/todos/reorder`: Update the order of multiple todos in a transaction.

---

## Database Architecture

### System
- **Database:** PostgreSQL (version 16)
- **Reasoning:** A robust, open-source relational database that provides the data integrity needed for this application.

### Schema Design
The schema will be initialized via a raw SQL script.

**`users` table:**
```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

**`todos` table:**
```sql
CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    order_index INTEGER NOT NULL,
    due_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
        REFERENCES users(id)
        ON DELETE CASCADE
);
```

### Data Integrity
- **Foreign Keys:** A foreign key constraint (`fk_user`) links `todos.user_id` to `users.id`. The `ON DELETE CASCADE` clause ensures that when a user is deleted, all of their associated todos are also automatically deleted.
- **Constraints:** `NOT NULL` and `UNIQUE` constraints are used to enforce data rules at the database level.

### Initialization
- **Strategy:** The backend application will execute the `CREATE TABLE IF NOT EXISTS` SQL scripts on startup. This ensures the necessary tables exist without requiring an external migration tool, simplifying the setup process.

---

## Infrastructure & Deployment

### Monorepo Strategy
- **Tool:** `npm` workspaces will be used to manage the `frontend` and `backend` packages within a single repository.
- **Benefit:** Simplifies dependency management and cross-package development.

### Containerization
- **Tool:** Docker.
- **Files:**
    - A `Dockerfile` will be created for both the `frontend` and `backend` services to build production-ready container images.
    - A `docker-compose.yml` file will orchestrate the local development environment, including the frontend, backend, and postgres services.

### Local Environment
- **Orchestration:** `docker-compose up` will be the single command needed to start the entire application stack locally.

### Production Environment
- **Hosting:** The application will be deployed to a self-hosted Kubernetes (K8s) cluster.
- **Process:**
    1. On merge to the main branch, a CI/CD pipeline will build Docker images.
    2. Images will be pushed to a private container registry.
    3. Kubernetes deployment manifests will be applied to the cluster to roll out the new version of the application.

---

## Cross-Cutting Concerns

### Security
- **Authentication:** Handled by JWTs as described above.
- **Authorization:** API endpoints will verify that a user owns the resource they are trying to access (e.g., a user can only modify their own todos).
- **Password Hashing:** Passwords will be hashed using a strong, modern algorithm (e.g., bcrypt).
- **Input Sanitization:** All user input will be validated and sanitized to prevent injection attacks (e.g., SQL injection, XSS).

### Performance
- **Frontend:**
    - **Optimistic UI:** UI updates will happen instantly, as specified in the UI/UX spec.
    - **Code Splitting:** Route-based code splitting will be implemented by Vite out-of-the-box.
    - **Asset Optimization:** Assets will be compressed and cached.
- **Backend:**
    - **Efficient Queries:** Database queries will be indexed and optimized.
    - **Connection Pooling:** The database connection pool will minimize connection latency.

### Testing Strategy
- **Unit Tests:** Each package (`frontend`, `backend`) will have its own unit test suite (e.g., using Jest/Vitest and React Testing Library for the frontend). All new business logic and components should be accompanied by unit tests.
- **Integration Tests:** A separate test suite will run against a live (but local) version of the application stack (via `docker-compose`) to test the integration between the frontend and backend, covering key user flows like login and task creation.
