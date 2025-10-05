# Frontend Architecture

The frontend is designed to be a modern, performant, and maintainable Single-Page Application.

## Tech Stack
- **Framework:** React (v18+) with TypeScript
- **Build Tool:** Vite for fast development and optimized builds.
- **Styling:** Tailwind CSS for a utility-first styling approach.
- **Animations:** Framer Motion for creating fluid and functional UI animations.

## Component Structure
Components will be built following a utility-first approach, as defined in the UI/UX spec. Key composite components include:
- `TaskItem`: Represents a single todo item, handling its own state (e.g., hover, edit mode).
- `TaskList`: Manages the list of `TaskItem` components, including reordering via drag-and-drop.
- `Header`: Contains the logo, search bar, and user profile dropdown.

## State Management
- **Local Component State:** For UI-specific state (e.g., input values, hover states), React's `useState` and `useReducer` hooks will be sufficient.
- **Global State:** For global concerns like user authentication status and the JWT token, React's Context API will be used. This avoids the need for a heavier external library for the current scope.

## Routing
- **Library:** `react-router-dom` will manage client-side routing.
- **Routes:**
    - `/login`: The authentication page.
    - `/`: The main dashboard, protected to only be accessible by authenticated users.
    - `/settings`: User account management page.

## Styling
- **Tailwind CSS:** All styling will be implemented using Tailwind's utility classes. A `tailwind.config.js` file will be configured with the project's specific color palette, typography, and spacing scale as defined in the UI/UX spec.

## Animations
- **Framer Motion:** This library will be used to implement the animations specified in the UI/UX spec, such as task add/remove transitions and drag-and-drop feedback.

---
