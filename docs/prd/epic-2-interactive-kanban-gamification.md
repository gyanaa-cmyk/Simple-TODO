# Epic 2: Interactive Kanban & Gamification
**Expanded Goal**: The goal of this Epic is to build the application's core differentiating features on top of the foundation from Epic 1. By the end of this Epic, the user will be able to manage their tasks on a visual, drag-and-drop Kanban board and will earn points for completion, making the experience interactive and engaging.

---
## **Story 2.1: Kanban Board UI Structure**
*As a user, I want to see my tasks displayed in 'To Do', 'In Progress', and 'Done' columns, so that I can visualize my workflow.*

**Acceptance Criteria:**
1.  The main task page renders three distinct columns with the correct titles.
2.  Tasks fetched from the API are correctly sorted and displayed in the column corresponding to their `status`.
3.  The layout of the columns is responsive and usable on both mobile and desktop screens.

---
## **Story 2.2: Drag-and-Drop Task Updates**
*As a user, I want to drag my tasks between columns on the Kanban board, so that I can easily and intuitively update their status.*

**Acceptance Criteria:**
1.  A task card can be visually dragged from one column to another.
2.  Dropping a task in a new column triggers an API call to the backend to update that task's status.
3.  The UI optimistically updates to show the task in its new column immediately.
4.  If the API call fails, the task reverts to its original column and an error is shown.

---
## **Story 2.3: Points System Logic (API)**
*As a developer, I want the backend to automatically award points and update the user's score when a task is marked as 'Done', so that the gamification system functions correctly.*

**Acceptance Criteria:**
1.  The `users` table/model is updated to include a `score` field (e.g., as an integer).
2.  When the API updates a task's status to 'Done', the backend logic adds a set number of points (e.g., 10 points) to that user's total score.
3.  The user's score is correctly persisted in the database.

---
## **Story 2.4: Score Display (UI)**
*As a user, I want to see my total score displayed in the application, so that I can feel a sense of progression and achievement.*

**Acceptance Criteria:**
1.  The user's total score is fetched from the backend when the application loads.
2.  The score is displayed in a persistent location in the UI (e.g., in the header or sidebar).
3.  The score in the UI automatically updates when a task is completed and new points are earned.

---
## **Story 2.5: Task Completion Feedback**
*As a user, I want to receive fun, interactive feedback when I complete a task, so that the experience feels satisfying and rewarding.*

**Acceptance Criteria:**
1.  When a task is successfully moved to the 'Done' column, a brief, non-intrusive animation is triggered.
2.  A visual confirmation (e.g., "+10 points") appears temporarily to acknowledge the points earned.
3.  The interaction feels delightful and reinforces the sense of accomplishment.
