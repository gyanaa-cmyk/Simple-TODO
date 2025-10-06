# Data Models

## Data Model: User

**Purpose**: Represents a registered user of the application. This model stores authentication credentials and tracks the user's gamification score.
**Key Attributes**:

  * `id`: `UUID` - A unique identifier for the user.
  * `email`: `String` - The user's login email. Must be unique.
  * `passwordHash`: `String` - The securely hashed password. **This is never sent to the client.**
  * `score`: `Int` - The user's total gamification score. Defaults to `0`.
  * `createdAt`: `DateTime` - Timestamp of when the user account was created.
  * `updatedAt`: `DateTime` - Timestamp of the last update to the user account.
    **Relationships**: A **User** can have many **Tasks**.
    **TypeScript Interface (Shared)**:

<!-- end list -->

```typescript
interface User {
  id: string;
  email: string;
  score: number;
  createdAt: string; // ISO 8601 Date String
}
```

## Data Model: Task

**Purpose**: Represents a single to-do item created by a user.
**Key Attributes**:

  * `id`: `UUID` - A unique identifier for the task.
  * `title`: `String` - The main content/description of the task.
  * `status`: `String` (Enum: `TODO`, `IN_PROGRESS`, `DONE`) - The current status of the task.
  * `dueDate`: `DateTime` (Optional) - The date the task is due.
  * `userId`: `UUID` - A foreign key that links the task to the `User` who owns it.
  * `createdAt`: `DateTime` - Timestamp of when the task was created.
  * `updatedAt`: `DateTime` - Timestamp of the last update to the task.
    **Relationships**: A **Task** belongs to one **User**.
    **TypeScript Interface (Shared)**:

<!-- end list -->

```typescript
enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  dueDate?: string | null; // Optional ISO 8601 Date String
  userId: string;
  createdAt: string; // ISO 8601 Date String
}
```

-----
