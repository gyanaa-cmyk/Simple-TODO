# API Specification

```yaml
openapi: 3.0.0
info:
  title: Gamified To-Do List API
  version: 1.0.0
paths:
  /auth/signup:
    post:
      summary: Register a new user
      security: []
      # ... (details omitted for brevity) ...
  /auth/login:
    post:
      summary: Log in a user
      security: []
      # ... (details omitted for brevity) ...
  /tasks:
    get:
      summary: Get all tasks for the logged-in user
      # ... (details omitted for brevity) ...
    post:
      summary: Create a new task
      # ... (details omitted for brevity) ...
  /tasks/{taskId}:
    put:
      summary: Update a task's status
      # ... (details omitted for brevity) ...
# Full spec content from previous turn would be here
```

-----
