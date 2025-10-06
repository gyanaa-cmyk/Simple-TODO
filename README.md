# Simple-TODO (Attempt 4)

> This Readme documents/lists every steps taken while building this application. it also explins why it was taken and lists the reason behind it as well.


## How this README is structured

- One section per agent (Analyst, PM, UX Expert, Architect, Scrum Master, Dev, QA, PO)
- Each agent section follows the same pattern:
	- Where to use (Web UI or CLI Tool)
	- What the agent does
	- Why this matters
	- How it works (commands)
	- Recommended step-by-step
	- Example (Simple-TODO)
	- New dev: where to go next
- We explicitly state the agent’s execution context (Web UI vs CLI Tool) at the top of each agent section.
- Navigation: Use the Contents below to jump directly to any subsection. As new agents are documented, their sub-links will be added to the Contents.
- Outputs: When an agent creates a doc, save it under `docs/` (e.g., `docs/project-brief.md`, `docs/prd.md`). Sharding is performed via the CLI Tool and will define its own output paths.


## Contents
1. [Analyst Phase](#analyst-phase)
    - [Where to use](#where-to-use)
	- [What the Analyst does](#what-the-analyst-does)
	- [Why this matters](#why-this-matters)
	- [How it works (commands)](#how-it-works-commands)
	- [Recommended step-by-step](#recommended-step-by-step)
	- [Example: Simple-TODO MVP](#example-simple-todo-mvp)
	- [New dev: where to go next](#new-dev-where-to-go-next)
	- [Outcome & next steps](#outcome--next-steps)

2. [Product Manager (PM)](#product-manager-pm)
	- [Where to use](#where-to-use-1)
	- [What the PM does](#what-the-pm-does)
	- [Why this matters](#why-this-matters-1)
	- [How it works (commands)](#how-it-works-commands-1)
	- [Recommended step-by-step](#recommended-step-by-step-1)
	- [Example: Simple-TODO PRD](#example-simple-todo-prd)
	- [New dev: where to go next](#new-dev-where-to-go-next-1)
	- [Outcome & next steps](#outcome--next-steps-1)

3. [UX Expert](#ux-expert)
	- [Where to use](#where-to-use-2)
	- [What the UX Expert does](#what-the-ux-expert-does)
	- [Why this matters](#why-this-matters-2)
	- [How it works (commands)](#how-it-works-commands-2)
	- [Recommended step-by-step](#recommended-step-by-step-2)
	- [Example: Simple-TODO Front-end Spec](#example-simple-todo-front-end-spec)
	- [New dev: where to go next](#new-dev-where-to-go-next-2)
	- [Outcome & next steps](#outcome--next-steps-2)

4. [Architect](#architect)
	- [Where to use](#where-to-use-3)
	- [What the Architect does](#what-the-architect-does)
	- [Why this matters](#why-this-matters-3)
	- [How it works (commands)](#how-it-works-commands-3)
	- [Recommended step-by-step](#recommended-step-by-step-3)
	- [Example: Simple-TODO Front-end Architecture](#example-simple-todo-front-end-architecture)
	- [New dev: where to go next](#new-dev-where-to-go-next-3)
	- [Outcome & next steps](#outcome--next-steps-3)

5. [Product Owner (PO) Web UI](#product-owner-po-web-ui)
	- [Where to use](#where-to-use-4)
	- [What the PO does](#what-the-po-does)
	- [Why this matters](#why-this-matters-4)
	- [How it works (commands)](#how-it-works-commands-4)
	- [Recommended step-by-step](#recommended-step-by-step-4)
	- [Example: Simple-TODO PO validation](#example-simple-todo-po-validation)
	- [New dev: where to go next](#new-dev-where-to-go-next-4)
	- [Outcome & next steps](#outcome--next-steps-4)

6. [Product Owner (PO) CLI](#product-owner-po-cli)
	- [Where to use](#where-to-use-5)
	- [What the PO does](#what-the-po-does-1)
	- [Why this matters](#why-this-matters-5)
	- [How it works (commands)](#how-it-works-commands-5)
	- [Recommended step-by-step](#recommended-step-by-step-5)
	- [Example: Simple-TODO sharding](#example-simple-todo-sharding)
	- [New dev: where to go next](#new-dev-where-to-go-next-5)
	- [Outcome & next steps](#outcome--next-steps-5)


---

## Analyst Phase

> Suggested use of a **Web UI**, because suggested because they can are cheap per token as compared to the IDE's and can handle huge context, preferred **Gemini Gem** access avaliable in company email.

#### Where to use
- **Web UI** (preferred). Rationale: lower cost per token, handles large context, and supports faster exploratory work. Example tools: company Gemini Gem, or your preferred web LLM UI.

#### What the Analyst does
- Facilitates structured brainstorming to explore and prioritize ideas.
- Runs advanced elicitation to clarify goals, users, constraints, risks, and success metrics.
- Performs market/competitor research to ground decisions in reality.
- Produces a concise Project Brief that downstream agents (PM/UX/Architect) can build on.
 - Generates deep research prompts to accelerate credible information gathering.
 - Documents existing projects for brownfield analysis when needed.

#### Why this matters
- Aligns stakeholders on the “why” and “who” early, reducing rework later.
- Surfaces risks, assumptions, and acceptance/success criteria up front.
- Ensures the PRD and Architecture start from a solid, validated foundation.

#### How it works (commands)
All commands start with an asterisk and are run after switching to the Analyst.

- Switch to Analyst: `*agent analyst`
- Brainstorm: `*brainstorm {topic}`
- Deep elicitation (optional): `*elicit`
- Market research doc (optional): `*perform-market-research`
- Create project brief: `*create-project-brief`
- Export current document: `*doc-out`

Outputs are Markdown files you can save into a `docs/` folder (e.g., `docs/project-brief.md`).

#### Recommended step-by-step
1. Switch to Analyst: `*agent analyst`
2. (Optional) Elicit goals/users/constraints/risks: `*elicit`
3. Brainstorm MVP scope and priorities: `*brainstorm "Simple-TODO MVP scope"`
4. (Optional) Capture market notes: `*perform-market-research`
5. Generate Project Brief: `*create-project-brief`
6. Export: `*doc-out` → save as `docs/project-brief.md`

#### Example: Simple-TODO MVP
Objective: Create a minimal, delightful to-do app focused on speed and clarity.

Example interaction:
1) `*agent analyst`
2) `*elicit` → Provide answers such as:
	- Users: Busy professionals and students on desktop/mobile
	- Goals: Frictionless task capture and daily review
	- Constraints: MVP first; offline optional; keyboard-first
	- Success: Time-to-add-task < 2s; 80% tasks added without mouse
3) `*brainstorm "Simple-TODO MVP features and scope"` → Ideas:
	- P0: Quick add, keyboard shortcuts, due date, today view
	- P1: Tags, simple search, basic reminders
	- Out of scope: Collaboration, sharing, complex recurring tasks
4) `*perform-market-research` → Note differentiators vs Todoist/MS To Do (speed, minimal UI)
5) `*create-project-brief` → Produces a brief covering problem, users, scope, risks, success criteria
6) `*doc-out` → save as `docs/project-brief.md`

Deliverable for this phase: `docs/project-brief.md`


#### New dev: where to go next
- If you already have a brief/clear write-up: Skip Analyst and proceed to the PM agent to create a PRD (then continue to the next agent as needed).
- If you only have an idea: Use Analyst to brainstorm (and optionally elicit details), generate the Project Brief, then proceed to the PM agent.


#### Outcome & next steps
Outcome
- Project Brief saved at `docs/project-brief.md` (plus optional brainstorming and market research docs if exported)
- Clarified goals, users, MVP scope vs later, risks/assumptions, and success metrics

Next step
- Create the PRD: switch to the PM agent (`*agent pm`) → run `*create-prd` → `*doc-out` to save as `docs/prd.md`.

---

## Product Manager (PM)

#### Where to use
- **Web UI** (preferred) for interactive drafting and quick iteration. CLI Tool can be used later for automations (e.g., sharding), but PRD creation is typically done in the Web UI.

#### What the PM does
- Translates the Project Brief into a Product Requirements Document (PRD).
- Defines scope (MVP vs later), user stories, acceptance criteria, and success metrics.
- Aligns product decisions and creates a single source of truth for downstream agents.
 - Supports brownfield work by creating focused epics/stories when needed.
 - Updates the PRD if architecture suggests changes to stories or scope.

#### Why this matters
- Prevents scope creep with clear priorities (P0/P1) and non-goals.
- Makes stories testable and implementable with unambiguous acceptance criteria.
- Enables UX/Architect/Dev to work in parallel with confidence.

#### How it works (commands)
- Switch to PM: `*agent pm`
- Create PRD: `*create-prd`
- Export PRD: `*doc-out` → save as `docs/prd.md`

#### Recommended step-by-step
1. `*agent pm`
2. `*create-prd`
3. `*doc-out` → save as `docs/prd.md`

#### Example: Simple-TODO PRD
Minimal PRD outline tailored for Simple-TODO:
- Problem & Users: Busy people need frictionless capture and daily review.
- Goals: Keyboard-first, 2s add flow, clear Today view.
- MVP Scope (P0): Quick add, keyboard shortcuts, due date, Today list.
- Later (P1): Tags, simple search, basic reminders.
- Non-goals: Collaboration, sharing, complex recurring.
- Stories (sample):
	- As a user, I can add a task with a single shortcut and press Enter to save.
	- As a user, I can mark tasks done and they disappear from Today.
	- As a user, I can set an optional due date during add.
- Acceptance Criteria (sample):
	- Given focus in the input, when I type and press Enter, the task is added within 2s.
	- Given a task is due today, it appears in Today until completed.
- Success Metrics: Median add flow < 2s; 80% adds via keyboard; <1% failed adds.

Deliverable for this phase: `docs/prd.md`

#### New dev: where to go next
- Proceed to the UX Expert to create the front-end spec from the PRD.

#### Outcome & next steps
Outcome
- PRD saved at `docs/prd.md` with stories, acceptance criteria, and clear scope.

Next step
- Create the front-end spec: switch to the UX Expert agent (`*agent ux-expert`) → run `*create-front-end-spec` → `*doc-out` to save as `docs/front-end-spec.md`.

---

## UX Expert

#### Where to use
- **Web UI** (preferred). Rationale: rapid iteration, visual thinking, and easy refinement. Optionally generate UI prompts for external tools (e.g., v0, Lovable) if you plan to bootstrap a UI project.

#### What the UX Expert does
- Turns the PRD into a front-end specification with flows, screens, components, states, and accessibility notes.
- Defines UX principles, interaction patterns, and design constraints to guide build quality.
- Optionally generates an AI UI prompt you can paste into a UI generator.
 - Defines the visual design system: styles, color palette, typography/fonts, spacing, elevations, animations/motion, and component states (ideally as design tokens).

#### Why this matters
- Reduces ambiguity for developers with concrete flows and component specs.
- Improves usability and accessibility from the start.
- Enables consistent UI patterns that scale as features grow.

#### How it works (commands)
- Switch to UX Expert: `*agent ux-expert`
- Create front-end spec: `*create-front-end-spec`
- (Optional) Generate AI UI prompt: `*generate-ui-prompt`
- Export spec: `*doc-out` → save as `docs/front-end-spec.md`

#### Recommended step-by-step
1. `*agent ux-expert`
2. `*create-front-end-spec`
3. `*doc-out` → save as `docs/front-end-spec.md`
4. (Optional) `*generate-ui-prompt` for an AI UI tool

#### Example: Simple-TODO Front-end Spec
Outline tailored for Simple-TODO:
- Flows: Add task (keyboard-first), complete task, set due date, Today review.
- Screens/Views: Today view (default), All tasks (optional later), Quick add input.
- Components: QuickAddInput, TaskItem (states: default/hover/focus/done), TodayList, DatePicker (lightweight).
- Interaction & Shortcuts: Global focus shortcut (e.g., "/"), Enter to add, Space or click to toggle done.
- States & Empty UI: Friendly empty state with quick hint for keyboard usage.
- Accessibility: Proper labels, focus states, announce added/removed items for screen readers.
- Visual Style: Minimal, high-contrast, responsive; avoids distractions.
- Design System: Color palette (e.g., neutral background, accent for primary actions), typography scale (e.g., Inter 14/16/20), spacing scale (4/8/12/16), motion (150–200ms ease-out for add/complete), component states documented.
- Success Metrics: Add flow completion < 2s; keyboard adds ≥80%; zero blocking a11y issues.

Deliverable for this phase: `docs/front-end-spec.md`

#### New dev: where to go next
- Proceed to the Architect to create the front-end architecture from this spec.

#### Outcome & next steps
Outcome
- Front-end spec saved at `docs/front-end-spec.md` with flows, components, interactions, and accessibility guidance.

Next step
- Create the front-end architecture: switch to the Architect agent (`*agent architect`) → run `*create-front-end-architecture` → `*doc-out` to save as `docs/front-end-architecture.md`.

---

## Architect

#### Where to use
- **Web UI** (preferred) for drafting the architecture document. Use the CLI Tool later for any automation tasks.

#### What the Architect does
- Converts PRD and front-end spec into a concrete architecture: component boundaries, state management, data flow, and integration points.
- Selects technologies and patterns appropriate for the scope (keep it simple for MVP).
- Documents decisions, constraints, NFRs, and development conventions.
 - Performs targeted technical research to inform decisions when required.
 - Can document existing systems for brownfield scenarios to bootstrap architecture work.

#### Why this matters
- Reduces rework by aligning on structure, state, and interfaces before coding.
- Improves performance, accessibility, and developer experience by design.
- Creates shared understanding across Dev and QA for testability.

#### How it works (commands)
- Switch to Architect: `*agent architect`
- Front-end: `*create-front-end-architecture`
- Backend: `*create-backend-architecture`
- Full-stack: `*create-full-stack-architecture`
- Export: `*doc-out` → save under `docs/` (choose an appropriate filename)

#### Recommended step-by-step
1. `*agent architect`
2. Run ONE of:
	- Front-end: `*create-front-end-architecture`
	- Backend: `*create-backend-architecture`
	- Full-stack: `*create-full-stack-architecture`
3. `*doc-out` → save under `docs/` (e.g., `docs/front-end-architecture.md`, `docs/architecture.md`, or `docs/fullstack-architecture.md`)

#### Example: Simple-TODO Front-end Architecture
Outline tailored for Simple-TODO:
- Tech Stack: React (or similar), lightweight date utility, no heavy state libs for MVP.
- Component Map: AppShell, TodayView, QuickAddInput, TaskList, TaskItem, DatePicker.
- State Management: Local state with lifting where needed; consider Context for app-wide keyboard/focus.
- Data Model: Task { id, title, dueDate?, completed, createdAt }.
- Data Flow: QuickAddInput → addTask() → TaskList renders; toggleComplete(taskId) updates item.
- Routing: Single-page Today view for MVP; All Tasks optional later.
- Accessibility: Focus management, ARIA live region for add/remove announcements.
- Performance: Debounce input when needed; avoid unnecessary re-renders on toggle.
- Testing: Component tests for QuickAddInput and TaskItem; integration test for add/complete flow.

Deliverable for this phase: Architecture document saved under `docs/` (front-end, backend, or full-stack)

#### New dev: where to go next
- Proceed to the Product Owner to validate documents with the PO checklist.

#### Outcome & next steps
Outcome
- Front-end architecture saved at `docs/front-end-architecture.md` with component map, state/data flow, and key NFRs.

Next step
- Validate the docs: switch to the PO agent (`*agent po`) → run the PO checklist to confirm consistency and readiness.

---

## Product Owner (PO) Web UI

#### Where to use
- **Web UI** (validation).

#### What the PO does
- Validates PRD, front-end spec, and architecture for consistency and completeness using the PO master checklist.
 - Runs a change checklist when significant scope changes occur to ensure alignment.

#### Why this matters
- Catches inconsistencies across PRD/spec/architecture before story creation and development.

#### How it works (commands)
- Switch to PO: `*agent po`
- Run checklist: `*execute-checklist-po` (or `*execute-checklist` with the PO checklist)

#### Recommended step-by-step
1. `*agent po`
2. Run the PO checklist and address any issues in PRD/spec/architecture.

#### Example: Simple-TODO PO validation
- Confirm PRD stories and acceptance criteria align with MVP goals (keyboard-first, 2s add, Today view).
- Ensure the front-end spec includes key flows, shortcuts, and due date handling.

Deliverable for this phase: PO checklist completed; issues resolved in PRD/spec/architecture.

#### New dev: where to go next
- Proceed to Product Owner (PO) CLI to shard documents for story creation.

#### Outcome & next steps
Outcome
- PO checklist completed in Web UI; inconsistencies resolved.

Next step
- Shard documents via CLI Tool to prepare for Scrum Master story creation (see next section).

---

## Product Owner (PO) CLI

#### Where to use
- **CLI Tool** (sharding after validation).

#### What the PO does
- Shards long documents (PRD and/or architecture) into IDE-friendly chunks to support story creation and implementation.

#### Why this matters
- Splits long documents into focused chunks for faster reading, easier story creation, and smoother IDE workflows.

#### How it works (commands)
- Run the CLI Tool to shard your PRD (and architecture if needed).
- The tool will print the output location; this README does not assume a fixed path.

#### Recommended step-by-step
1. Run the CLI Tool pointing at your PRD (and architecture if needed).
2. Note the output paths reported by the tool.

#### Example: Simple-TODO sharding
- Shard `docs/prd.md` into smaller sections per epic/story using the CLI Tool.
- Record the output directory path the tool prints so the Scrum Master can reference it.

Deliverable for this phase: Sharded docs created by the CLI Tool (output paths as reported by the tool).

#### New dev: where to go next
- Proceed to the Scrum Master to create the next story from the sharded docs.

#### Outcome & next steps
Outcome
- Sharded docs generated via the CLI Tool; output paths recorded.

Next step
- Create the next story: switch to the Scrum Master (`*agent sm`) and create the next story using the sharded docs.

