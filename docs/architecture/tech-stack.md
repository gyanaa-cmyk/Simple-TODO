# Tech Stack

| Category | Technology | Version | Purpose | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend Language** | TypeScript | `~5.4.5` | Main language for frontend code | Provides type safety and scalability for React applications. |
| **Frontend Framework**| React | `~18.3.1` | UI library for building components | User's choice. Industry standard for building interactive UIs. |
| **UI Component Library**| Radix UI | `~1.0.0` | Headless components for accessibility | Aligns with the UI/UX spec's custom design goals, providing accessibility without imposing styles. |
| **State Management** | Zustand | `~4.5.2` | Lightweight global state management | A simple, modern alternative to Redux for managing state that needs to be shared across components. |
| **Backend Language** | TypeScript | `~5.4.5` | Main language for backend code | Ensures type safety and consistency with the frontend codebase. |
| **Backend Framework** | Express.js | `~4.19.2` | Web server framework for Node.js | User's choice. A minimal and flexible standard for building APIs. |
| **API Style** | REST | `N/A` | Client-server communication protocol | A well-understood and standard approach for web APIs. |
| **Database** | PostgreSQL | `16` | Relational database | User's choice. A powerful and reliable open-source SQL database. |
| **ORM** | Prisma | `~5.14.0` | Object-Relational Mapper | Provides a type-safe and modern way to interact with the PostgreSQL database from TypeScript. |
| **Authentication** | Passport.js | `~0.7.0` | Authentication middleware for Node.js | The de-facto standard for handling authentication in Express applications. |
| **Frontend Testing** | Jest & RTL | `~29.7.0` | Component and unit testing | Industry standard for testing React applications (React Testing Library). |
| **Backend Testing** | Jest & Supertest | `~29.7.0`| API and unit testing | Jest for the test runner and Supertest for making HTTP requests to the API. |
| **E2E Testing** | Playwright | `~1.44.0` | End-to-end browser testing | A modern and reliable tool for testing the application from a real user's perspective. |
| **Build Tool (FE)** | Vite | `~5.2.11` | Frontend build and dev server | Provides an extremely fast development experience and optimized builds for React. |
| **IaC Tool** | Helm | `~3.15.2` | Package manager for Kubernetes | Simplifies the process of defining, installing, and upgrading our application on Kubernetes. |
| **Logging** | Pino | `~9.1.0` | High-performance logger for Node.js | A fast and structured logger, essential for production environments. |
| **CSS Framework** | Tailwind CSS | `~3.4.3` | Utility-first CSS framework | The best choice for creating a custom "Airbnb-style" design without writing custom CSS from scratch. |

-----
