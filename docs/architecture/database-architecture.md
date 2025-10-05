# Database Architecture

## System
- **Database:** PostgreSQL (version 16)
- **Reasoning:** A robust, open-source relational database that provides the data integrity needed for this application.

## Schema Design
The schema will be initialized via a raw SQL script.

**`users` table:**
```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

**`todos` table:**
```sql
CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    order_index INTEGER NOT NULL,
    due_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
        REFERENCES users(id)
        ON DELETE CASCADE
);
```

## Data Integrity
- **Foreign Keys:** A foreign key constraint (`fk_user`) links `todos.user_id` to `users.id`. The `ON DELETE CASCADE` clause ensures that when a user is deleted, all of their associated todos are also automatically deleted.
- **Constraints:** `NOT NULL` and `UNIQUE` constraints are used to enforce data rules at the database level.

## Initialization
- **Strategy:** The backend application will execute the `CREATE TABLE IF NOT EXISTS` SQL scripts on startup. This ensures the necessary tables exist without requiring an external migration tool, simplifying the setup process.

---
