# Coding Standards

## **Critical Fullstack Rules**

1.  **Type Sharing**: All shared data structures (e.g., `User`, `Task` types) **must** be defined in the `packages/shared` directory and imported by both the frontend and backend. Never redefine these types.
2.  **API Client Usage**: The frontend application **must never** make direct HTTP calls (`fetch`, `axios`) from components. All API communication **must** go through the functions defined in the `API Client Service` layer.
3.  **State Management**: For any state that is shared between multiple components, the frontend **must** use the appropriate Zustand store (`authStore`, `taskStore`).
4.  **Environment Variables**: Code **must not** access environment variables directly using `process.env`. A dedicated, typed configuration object must be used.
5.  **Backend Separation of Concerns**: Backend logic **must** be separated as follows: Routes -\> Controllers -\> Services -\> Repositories.

## **Naming Conventions**

| Element | Frontend | Backend | Example |
| :--- | :--- | :--- | :--- |
| **Components** | `PascalCase` | - | `TaskCard.tsx` |
| **Hooks** | `useCamelCase`| - | `useAuth.ts` |
| **API Routes** | - | `kebab-case`| `/user-profile` |
| **Database Tables**| - | `snake_case` | `user_profiles` |

-----
