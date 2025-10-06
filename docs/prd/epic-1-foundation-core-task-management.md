# Epic 1: Foundation & Core Task Management
**Expanded Goal**: The goal of this Epic is to establish the complete, runnable, and deployable skeleton of the application. By the end of this Epic, a user will be able to sign up, log in, create a task, and see their list of tasks. All foundational technical setup, including the project structure, database connection, and containerization, will be in place.

---
## **Story 1.1: Project Initialization**
*As a developer, I want a complete monorepo structure with initialized frontend and backend apps, so that I can begin development in a clean, organized environment.*

**Acceptance Criteria:**
1.  A monorepo is created.
2.  A React frontend app is scaffolded in `apps/web`.
3.  A Node.js/Express backend app is scaffolded in `apps/api`.
4.  Docker and Docker Compose files are created to run both apps together.
5.  The full development environment can be started with a single command (e.g., `docker-compose up`).

---
## **Story 1.2: User Model & Database Setup**
*As a developer, I want the backend connected to the PostgreSQL database with a basic User model, so that user data can be persisted.*

**Acceptance Criteria:**
1.  The backend API successfully connects to the PostgreSQL database defined in the Docker Compose file.
2.  A User model and corresponding database table are created with fields for at least `id`, `email`, and `password_hash`.
3.  A database migration script exists to create the `users` table.

---
## **Story 1.3: User Sign Up**
*As a new user, I want to sign up for an account with my email and password, so that I can start using the application.*

**Acceptance Criteria:**
1.  A `POST /api/auth/signup` endpoint exists on the backend.
2.  The endpoint correctly validates the request, hashes the user's password, and saves the new user to the database.
3.  Upon successful sign-up, the API returns a JSON Web Token (JWT).
4.  A basic, unstyled sign-up form exists on the frontend that successfully calls this endpoint.

---
## **Story 1.4: User Log In & Authentication**
*As a returning user, I want to log in with my email and password and stay logged in, so that I can access my account.*

**Acceptance Criteria:**
1.  A `POST /api/auth/login` endpoint exists that validates user credentials.
2.  Upon successful login, the API returns a JWT.
3.  A basic, unstyled login form exists on the frontend.
4.  After logging in, the frontend stores the JWT and uses it for subsequent API requests.

---
## **Story 1.5: Core Task Functionality (API)**
*As an authenticated user, I want the backend to support creating and viewing tasks, so that I can manage my to-do list.*

**Acceptance Criteria:**
1.  A Task model and database table are created.
2.  A protected `POST /api/tasks` endpoint allows the logged-in user to create a new task.
3.  A protected `GET /api/tasks` endpoint retrieves all tasks belonging to the logged-in user.

---
## **Story 1.6: Core Task Functionality (UI)**
*As an authenticated user, I want to see a list of my tasks and add new ones, so that I can manage my to-do list.*

**Acceptance Criteria:**
1.  After logging in, the user is directed to a page that displays their tasks.
2.  This page successfully calls the `GET /api/tasks` endpoint to fetch and display the tasks.
3.  An input form is present on the page to create a new task.
4.  Submitting the form successfully calls the `POST /api/tasks` endpoint and the new task appears in the list.
