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

