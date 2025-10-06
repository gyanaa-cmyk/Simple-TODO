# Database Schema

```sql
-- Enable UUID generation function if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the users table
CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password_hash" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create the tasks table
CREATE TABLE "tasks" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "title" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'TODO' CHECK ("status" IN ('TODO', 'IN_PROGRESS', 'DONE')),
    "due_date" TIMESTAMPTZ NULL,
    "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for performance optimization
CREATE INDEX "idx_tasks_user_id" ON "tasks"("user_id");
CREATE INDEX "idx_tasks_status" ON "tasks"("status");
```

-----
