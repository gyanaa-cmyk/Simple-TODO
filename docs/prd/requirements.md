# Requirements

## Functional Requirements
1.  **FR1: User Authentication**: Users must be able to sign up for a new account, log in, and log out.
2.  **FR2: Task Management**: Once logged in, users must be able to create, view, edit, complete, and delete tasks.
3.  **FR3: Task Attributes**: Users must be able to assign a title and a due date to each task.
4.  **FR4: Kanban View**: Users must be able to view their tasks on a Kanban board with at least three columns: 'To Do', 'In Progress', and 'Done'.
5.  **FR5: Task State Change**: Users must be able to move tasks between the Kanban columns via a drag-and-drop interface.
6.  **FR6: Basic Gamification**: Users must earn a predetermined number of points upon completing a task.
7.  **FR7: User Score**: The user's total score must be visible somewhere in the UI.

## Non-Functional Requirements
1.  **NFR1: Platform**: The application must be a responsive web app, providing a functional experience on modern desktop and mobile browsers.
2.  **NFR2: Technology Stack**: The application must be built using React (frontend), Node.js with Express (backend), and PostgreSQL (database).
3.  **NFR3: Containerization**: The application components must be containerized using Docker and orchestrated with Docker Compose for local development.
4.  **NFR4: Deployment**: The application must be deployable to a Kubernetes (K8s) cluster.
5.  **NFR5: Usability**: The user interface must be intuitive and easy to navigate for our "Ambitious Student" persona with no training required.
