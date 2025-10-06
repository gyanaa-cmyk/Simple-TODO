# Frontend Architecture

## **Component Architecture**

This defines how we'll structure our React components to keep the codebase organized, maintainable, and easy to work with.

### **Component Organization**

We will use a feature-based folder structure. All files related to a specific feature will be co-located within a single folder. Reusable, shared components will live in a separate top-level `components` directory.

```
apps/web/src/
├── components/         # Shared, reusable UI components (e.g., Button, Modal)
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   └── ...
├── features/           # Feature-based modules
│   ├── Authentication/
│   │   └── components/
│   │       └── LoginForm.tsx
│   └── KanbanBoard/
│       └── components/
│           ├── KanbanBoard.tsx
│           ├── KanbanColumn.tsx
│           └── TaskCard.tsx
└── ...
```

### **Component Template**

All new React components must follow this functional component template using TypeScript.

```typescript
import React from 'react';

// Define the component's props with TypeScript
interface MyComponentProps {
  title: string;
  onPress: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onPress }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <button
        onClick={onPress}
        className="px-4 py-2 mt-2 text-white bg-primary-500 rounded-md"
      >
        Click Me
      </button>
    </div>
  );
};
```

## **State Management Architecture**

This is how we'll manage data that needs to be shared across different components in our application. We'll use **Zustand**.

### **Store Structure**

We will co-locate all our Zustand state stores in a dedicated `store` directory.

```
apps/web/src/
├── store/
│   ├── authStore.ts
│   ├── taskStore.ts
│   └── index.ts
└── ... (other folders)
```

### **State Management Patterns**

Each store will follow a standard pattern including state, actions, and computed values.

```typescript
import { create } from 'zustand';

// Define the shape of the store's state and actions
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: () => boolean; // A computed value
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // Initial State
  user: null,
  token: null,

  // Computed Value
  isAuthenticated: () => !!get().token,

  // Action
  login: (user, token) => {
    set({ user, token });
  },

  // Action
  logout: () => {
    set({ user: null, token: null });
  },
}));
```

## **Routing Architecture**

This defines how users navigate between pages and how we protect certain pages.

### **Route Organization**

```
apps/web/src/
├── pages/              # Contains the top-level component for each page
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   └── ...
├── routes/
│   └── index.tsx       # Central file to define all application routes
└── ...
```

### **Protected Route Pattern**

```typescript
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Renders the child route element
};
```

## **Frontend Services Layer**

This is the dedicated part of our code responsible for all communication with the backend API.

### **API Client Setup**

We will create a single, centralized `axios` instance with an "interceptor" that automatically attaches the user's authentication token to every request.

```typescript
// Located at: apps/web/src/lib/apiClient.ts
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const apiClient = axios.create({
  baseURL: '/api',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
```

### **Service Example**

```typescript
// Located at: apps/web/src/features/KanbanBoard/services/taskService.ts
import apiClient from '../../../lib/apiClient';

const taskService = {
  getAll: async (): Promise<Task[]> => {
    const response = await apiClient.get('/tasks');
    return response.data;
  },
  // ... other functions
};

export default taskService;
```

-----
