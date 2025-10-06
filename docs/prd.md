# Gamified To-Do List Application Product Requirements Document (PRD)

## Goals and Background Context

### Goals
* To create a to-do list application that increases user motivation and engagement through gamification.
* To build lasting organizational habits for users by making task management enjoyable and rewarding.
* To differentiate from a crowded market of purely functional productivity apps by focusing on a superior, interactive user experience.

### Background Context
The current market for to-do list applications fails to address user motivation, leading to high abandonment rates. Existing solutions are functional but uninspiring. We will solve this by building a gamified task management application specifically for our target audience of ambitious students. By incorporating an engaging UI and satisfying feedback loops, we will make productivity feel less like a chore and more like a rewarding game, driving higher user retention and success.

### Change Log
| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-10-06 | 1.0 | Initial PRD draft | John (PM) |

## Requirements

### Functional Requirements
1.  **FR1: User Authentication**: Users must be able to sign up for a new account, log in, and log out.
2.  **FR2: Task Management**: Once logged in, users must be able to create, view, edit, complete, and delete tasks.
3.  **FR3: Task Attributes**: Users must be able to assign a title and a due date to each task.
4.  **FR4: Kanban View**: Users must be able to view their tasks on a Kanban board with at least three columns: 'To Do', 'In Progress', and 'Done'.
5.  **FR5: Task State Change**: Users must be able to move tasks between the Kanban columns via a drag-and-drop interface.
6.  **FR6: Basic Gamification**: Users must earn a predetermined number of points upon completing a task.
7.  **FR7: User Score**: The user's total score must be visible somewhere in the UI.

### Non-Functional Requirements
1.  **NFR1: Platform**: The application must be a responsive web app, providing a functional experience on modern desktop and mobile browsers.
2.  **NFR2: Technology Stack**: The application must be built using React (frontend), Node.js with Express (backend), and PostgreSQL (database).
3.  **NFR3: Containerization**: The application components must be containerized using Docker and orchestrated with Docker Compose for local development.
4.  **NFR4: Deployment**: The application must be deployable to a Kubernetes (K8s) cluster.
5.  **NFR5: Usability**: The user interface must be intuitive and easy to navigate for our "Ambitious Student" persona with no training required.

## User Interface Design Goals

### Overall UX Vision
To create a user interface that is not just functional but also delightful, engaging, and motivating. The experience should feel less like a productivity tool and more like a rewarding game, encouraging daily use and habit formation. The UI will be a core differentiator, transforming mundane tasks into satisfying accomplishments.

### Key Interaction Paradigms
The user experience will be built on a foundation of direct manipulation and satisfying feedback. Key paradigms will include:
* **Drag-and-Drop**: For intuitive reordering and moving tasks between states on the Kanban board.
* **Rewarding Feedback**: Animations, sound effects, and visual flourishes upon task completion to create a sense of achievement.
* **Visible Progression**: Clear and persistent display of points, streaks, or other gamified metrics to motivate the user.

### Core Screens and Views
From a product perspective, the MVP will require the following core screens:
* Login / Sign Up Screen
* Main Dashboard (featuring the Kanban Board view)
* Task Creation / Editing Modal (or a dedicated page)
* User Profile / Score Page

### Accessibility
The application will aim for compliance with **WCAG 2.1 Level AA** standards to ensure it is accessible and usable by the widest possible audience.

### Branding
The branding identity should feel modern, vibrant, and encouraging. It must avoid the sterile, corporate aesthetic common in other productivity apps. The specific color palette, typography, and logo are to be defined, but the overall tone should be playful yet focused.

### Target Device and Platforms
The application will be built as a **Web Responsive** product. It will be designed with a mobile-first approach to ensure a seamless and fully-functional experience across all modern devices, from smartphones to desktop computers.

## Technical Assumptions

### Repository Structure
* A **Monorepo** will be used to keep the frontend and backend code organized in a single repository.

### Service Architecture
* The backend will be developed as a single, **Monolithic Server Application**.

### Testing Requirements
* The project will require **Unit + Integration** tests to ensure code quality and reliability.

### Additional Technical Assumptions and Requests
* **Frontend**: React
* **Backend**: Node.js with Express
* **Database**: PostgreSQL
* **Containerization**: The application must be containerized with Docker for development (Docker Compose) and production.
* **Hosting**: The target deployment infrastructure is Kubernetes (K8s).
* **API**: A REST API will be used for communication between the frontend and backend.

## Epic List

* **Epic 1: Foundation & Core Task Management**
    * **Goal**: Establish the project's technical foundation, enable user authentication, and deliver the core ability for users to create, view, and manage their tasks in a simple list format.
* **Epic 2: Interactive Kanban & Gamification**
    * **Goal**: Build upon the core functionality by introducing the interactive Kanban board view and implementing the basic gamification system (points for task completion).

## Epic 1: Foundation & Core Task Management
**Expanded Goal**: The goal of this Epic is to establish the complete, runnable, and deployable skeleton of the application. By the end of this Epic, a user will be able to sign up, log in, create a task, and see their list of tasks. All foundational technical setup, including the project structure, database connection, and containerization, will be in place.

---
### **Story 1.1: Project Initialization**
*As a developer, I want a complete monorepo structure with initialized frontend and backend apps, so that I can begin development in a clean, organized environment.*

**Acceptance Criteria:**
1.  A monorepo is created.
2.  A React frontend app is scaffolded in `apps/web`.
3.  A Node.js/Express backend app is scaffolded in `apps/api`.
4.  Docker and Docker Compose files are created to run both apps together.
5.  The full development environment can be started with a single command (e.g., `docker-compose up`).

---
### **Story 1.2: User Model & Database Setup**
*As a developer, I want the backend connected to the PostgreSQL database with a basic User model, so that user data can be persisted.*

**Acceptance Criteria:**
1.  The backend API successfully connects to the PostgreSQL database defined in the Docker Compose file.
2.  A User model and corresponding database table are created with fields for at least `id`, `email`, and `password_hash`.
3.  A database migration script exists to create the `users` table.

---
### **Story 1.3: User Sign Up**
*As a new user, I want to sign up for an account with my email and password, so that I can start using the application.*

**Acceptance Criteria:**
1.  A `POST /api/auth/signup` endpoint exists on the backend.
2.  The endpoint correctly validates the request, hashes the user's password, and saves the new user to the database.
3.  Upon successful sign-up, the API returns a JSON Web Token (JWT).
4.  A basic, unstyled sign-up form exists on the frontend that successfully calls this endpoint.

---
### **Story 1.4: User Log In & Authentication**
*As a returning user, I want to log in with my email and password and stay logged in, so that I can access my account.*

**Acceptance Criteria:**
1.  A `POST /api/auth/login` endpoint exists that validates user credentials.
2.  Upon successful login, the API returns a JWT.
3.  A basic, unstyled login form exists on the frontend.
4.  After logging in, the frontend stores the JWT and uses it for subsequent API requests.

---
### **Story 1.5: Core Task Functionality (API)**
*As an authenticated user, I want the backend to support creating and viewing tasks, so that I can manage my to-do list.*

**Acceptance Criteria:**
1.  A Task model and database table are created.
2.  A protected `POST /api/tasks` endpoint allows the logged-in user to create a new task.
3.  A protected `GET /api/tasks` endpoint retrieves all tasks belonging to the logged-in user.

---
### **Story 1.6: Core Task Functionality (UI)**
*As an authenticated user, I want to see a list of my tasks and add new ones, so that I can manage my to-do list.*

**Acceptance Criteria:**
1.  After logging in, the user is directed to a page that displays their tasks.
2.  This page successfully calls the `GET /api/tasks` endpoint to fetch and display the tasks.
3.  An input form is present on the page to create a new task.
4.  Submitting the form successfully calls the `POST /api/tasks` endpoint and the new task appears in the list.

## Epic 2: Interactive Kanban & Gamification
**Expanded Goal**: The goal of this Epic is to build the application's core differentiating features on top of the foundation from Epic 1. By the end of this Epic, the user will be able to manage their tasks on a visual, drag-and-drop Kanban board and will earn points for completion, making the experience interactive and engaging.

---
### **Story 2.1: Kanban Board UI Structure**
*As a user, I want to see my tasks displayed in 'To Do', 'In Progress', and 'Done' columns, so that I can visualize my workflow.*

**Acceptance Criteria:**
1.  The main task page renders three distinct columns with the correct titles.
2.  Tasks fetched from the API are correctly sorted and displayed in the column corresponding to their `status`.
3.  The layout of the columns is responsive and usable on both mobile and desktop screens.

---
### **Story 2.2: Drag-and-Drop Task Updates**
*As a user, I want to drag my tasks between columns on the Kanban board, so that I can easily and intuitively update their status.*

**Acceptance Criteria:**
1.  A task card can be visually dragged from one column to another.
2.  Dropping a task in a new column triggers an API call to the backend to update that task's status.
3.  The UI optimistically updates to show the task in its new column immediately.
4.  If the API call fails, the task reverts to its original column and an error is shown.

---
### **Story 2.3: Points System Logic (API)**
*As a developer, I want the backend to automatically award points and update the user's score when a task is marked as 'Done', so that the gamification system functions correctly.*

**Acceptance Criteria:**
1.  The `users` table/model is updated to include a `score` field (e.g., as an integer).
2.  When the API updates a task's status to 'Done', the backend logic adds a set number of points (e.g., 10 points) to that user's total score.
3.  The user's score is correctly persisted in the database.

---
### **Story 2.4: Score Display (UI)**
*As a user, I want to see my total score displayed in the application, so that I can feel a sense of progression and achievement.*

**Acceptance Criteria:**
1.  The user's total score is fetched from the backend when the application loads.
2.  The score is displayed in a persistent location in the UI (e.g., in the header or sidebar).
3.  The score in the UI automatically updates when a task is completed and new points are earned.

---
### **Story 2.5: Task Completion Feedback**
*As a user, I want to receive fun, interactive feedback when I complete a task, so that the experience feels satisfying and rewarding.*

**Acceptance Criteria:**
1.  When a task is successfully moved to the 'Done' column, a brief, non-intrusive animation is triggered.
2.  A visual confirmation (e.g., "+10 points") appears temporarily to acknowledge the points earned.
3.  The interaction feels delightful and reinforces the sense of accomplishment.
