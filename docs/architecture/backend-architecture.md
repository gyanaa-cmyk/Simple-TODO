# Backend Architecture

The backend is a standard RESTful API designed for security, clarity, and statelessness.

## Tech Stack
- **Runtime/Framework:** Node.js with Express.js
- **Language:** TypeScript
- **Database Driver:** `pg` (node-postgres) for communication with the PostgreSQL database.

## API Design
- **Style:** RESTful. The API will use standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) and status codes.
- **Data Format:** JSON will be used for all request and response bodies.
- **Versioning:** The API will be versioned via a URL prefix (e.g., `/api/v1`).

## Authentication
- **Strategy:** JSON Web Tokens (JWT).
- **Flow:**
    1. A user logs in via the `/api/login` endpoint.
    2. The server validates credentials and, if successful, issues a short-lived JWT.
    3. The frontend stores this token securely (e.g., in an HttpOnly cookie or local storage).
    4. For all subsequent requests to protected endpoints, the frontend sends the JWT in the `Authorization` header.
    5. A middleware on the backend validates the token on every protected request.

## Database Interaction
- **Method:** The `pg` library will be used to execute raw SQL queries.
- **Connection Management:** The backend will use a connection pool to efficiently manage connections to the database.
- **No ORM:** As per the technical requirements, no Object-Relational Mapper (ORM) will be used. Data access logic will be encapsulated in dedicated service modules.

## Key API Endpoints
- `POST /api/register`: Create a new user account.
- `POST /api/login`: Authenticate a user and return a JWT.
- `GET /api/todos`: Get all todos for the authenticated user. Supports `?search=` query param.
- `POST /api/todos`: Create a new todo.
- `PUT /api/todos/:id`: Update a todo's content or due date.
- `PUT /api/todos/:id/status`: Toggle a todo's completion status.
- `DELETE /api/todos/:id`: Delete a todo.
- `PUT /api/todos/reorder`: Update the order of multiple todos in a transaction.

---
