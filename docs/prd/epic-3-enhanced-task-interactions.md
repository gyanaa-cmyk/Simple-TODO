# Epic 3: Enhanced Task Interactions

**Goal:** This epic elevates the application from a basic todo list to a premium product by introducing advanced, user-friendly features. It focuses on improving the user's workflow and efficiency through fluid interactions like drag-and-drop, better task metadata with due dates, and powerful filtering via search.

---

## **Story 3.1: Database Schema for Ordering & Due Dates**
**As a** developer,
**I want** to update the `todos` table to support ordering and due dates,
**so that** I can store this additional task information.

**Acceptance Criteria:**
1. The database initialization script is updated to add an `order_index` (integer) and a nullable `due_date` (timestamp) column to the `todos` table.
2. When a new task is created, it is automatically assigned the next available `order_index` (i.e., placed at the end of the list).
3. The `GET /api/todos` endpoint is updated to return tasks sorted by their `order_index`.

---

## **Story 3.2: Implement Due Dates**
**As a** logged-in user,
**I want** to add and edit an optional due date for my tasks,
**so that** I can manage my deadlines effectively.

**Acceptance Criteria:**
1. Backend endpoints for creating and updating todos are updated to accept an optional `due_date`.
2. The `GET /api/todos` endpoint includes the `due_date` in its response.
3. The frontend UI displays a task's due date and provides a date picker to add, edit, or remove it.
4. Due dates that are in the past are visually distinguished from upcoming ones.

---

## **Story 3.3: Implement Drag-and-Drop Reordering**
**As a** logged-in user,
**I want** to reorder my tasks by dragging and dropping them,
**so that** I can prioritize my work visually and intuitively.

**Acceptance Criteria:**
1. A new backend endpoint (`PUT /api/todos/reorder`) accepts an ordered list of todo IDs and updates their `order_index` in the database.
2. The backend logic performs this update within a single transaction to ensure data integrity.
3. A drag-and-drop library is implemented on the frontend task list.
4. When a user drops a task in a new position, the UI updates instantly, and the new order is sent to the backend to be persisted.

---

## **Story 3.4: Implement Text Search/Filter**
**As a** logged-in user,
**I want** to filter my task list by typing text into a search bar,
**so that** I can quickly find specific tasks.

**Acceptance Criteria:**
1. The `GET /api/todos` endpoint is updated to accept an optional `search` query parameter.
2. If the `search` parameter is provided, the backend returns only tasks whose content contains the search string (case-insensitive).
3. A search input field is added to the main dashboard UI.
4. As the user types into the search field, the displayed list of tasks updates in real-time to show only matching results.
