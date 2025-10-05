# Overall Architecture

## System Diagram

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

## Architectural Pattern
- **Decoupled SPA + REST API:** This pattern is chosen for its clear separation of concerns. The frontend handles all presentation logic, while the backend manages business logic and data persistence. This allows for independent scaling and development cycles.

## Component Overview
1.  **Frontend (SPA):** A responsive web application built with React and TypeScript. It is responsible for rendering the UI, managing client-side state, and communicating with the backend via RESTful API calls.
2.  **Backend (REST API):** A stateless API built with Node.js and Express. It handles user authentication, business logic for task management, and all database interactions.
3.  **Database:** A PostgreSQL instance used for persisting all user and application data, including user accounts and todo items.

---
