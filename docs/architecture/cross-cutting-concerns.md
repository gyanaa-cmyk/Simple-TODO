# Cross-Cutting Concerns

## Security
- **Authentication:** Handled by JWTs as described above.
- **Authorization:** API endpoints will verify that a user owns the resource they are trying to access (e.g., a user can only modify their own todos).
- **Password Hashing:** Passwords will be hashed using a strong, modern algorithm (e.g., bcrypt).
- **Input Sanitization:** All user input will be validated and sanitized to prevent injection attacks (e.g., SQL injection, XSS).

## Performance
- **Frontend:**
    - **Optimistic UI:** UI updates will happen instantly, as specified in the UI/UX spec.
    - **Code Splitting:** Route-based code splitting will be implemented by Vite out-of-the-box.
    - **Asset Optimization:** Assets will be compressed and cached.
- **Backend:**
    - **Efficient Queries:** Database queries will be indexed and optimized.
    - **Connection Pooling:** The database connection pool will minimize connection latency.

## Testing Strategy
- **Unit Tests:** Each package (`frontend`, `backend`) will have its own unit test suite (e.g., using Jest/Vitest and React Testing Library for the frontend). All new business logic and components should be accompanied by unit tests.
- **Integration Tests:** A separate test suite will run against a live (but local) version of the application stack (via `docker-compose`) to test the integration between the frontend and backend, covering key user flows like login and task creation.
