# Testing Strategy

## **Testing Pyramid**

```
      /-----------\
     /   E2E Tests   \
    /-----------------\
   / Integration Tests \
  /---------------------\
 /  Unit Tests (FE & BE) \
/-----------------------\
```

## **Test Organization**

### **Frontend Tests (`apps/web`)**

```
apps/web/src/
└── features/
    └── KanbanBoard/
        └── components/
            ├── TaskCard.tsx
            └── TaskCard.test.tsx  <-- Test file co-located with component
```

### **Backend Tests (`apps/api`)**

```
apps/api/src/
└── features/
    └── tasks/
        ├── __tests__/
        │   ├── tasks.service.test.ts
        │   └── tasks.routes.test.ts
        ├── tasks.controller.ts
        └── tasks.service.ts
```

### **E2E Tests (Root)**

```
gamified-todo-app/
└── e2e/
    ├── login.spec.ts
    └── tasks.spec.ts
```

## **Test Examples**

### **Frontend Component Test (Jest & React Testing Library)**

```typescript
import { render, screen } from '@testing-library/react';
import { TaskCard } from './TaskCard';

test('renders task title correctly', () => {
  const task = { id: '1', title: 'Test My Component', status: 'TODO' };
  render(<TaskCard task={task} />);
  const titleElement = screen.getByText(/Test My Component/i);
  expect(titleElement).toBeInTheDocument();
});
```

### **Backend API Test (Jest & Supertest)**

```typescript
import request from 'supertest';
import app from '../../server';

describe('GET /api/tasks', () => {
  it('should respond with 401 Unauthorized if no token is provided', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.statusCode).toBe(401);
  });
});
```

### **E2E Test (Playwright)**

```typescript
import { test, expect } from '@playwright/test';

test('user can log in and see the dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'password123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toHaveText('My Tasks');
});
```

-----
