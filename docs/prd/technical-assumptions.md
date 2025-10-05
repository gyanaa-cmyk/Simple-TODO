# Technical Assumptions

## Repository Structure: Monorepo
The project will be developed within a single monorepo managed with `npm` workspaces, containing both the `frontend` and `backend` packages.

## Service Architecture
The application will use a standard, decoupled architecture consisting of a Single-Page Application (SPA) frontend that communicates with a backend REST API. This provides a clear separation of concerns while remaining straightforward to develop and deploy for the MVP.

## Deployment & Hosting
The application will be containerized using Docker for consistency across development, testing, and production environments.

- **Local Development:** `docker-compose` will be used to orchestrate the `frontend`, `backend`, and `postgres` services locally.
- **Production Deployment:** For production, Docker images will be built and pushed to a private container registry. These images will then be deployed to a self-hosted Kubernetes (K8s) cluster.
- **Hosting:** The application will be self-hosted on a private Kubernetes cluster.

## Testing Requirements
The project will require both **Unit and Integration tests** to ensure code quality and reliability. All new features should be accompanied by sufficient tests to validate their correctness.

## Additional Technical Assumptions and Requests
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
