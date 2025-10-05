# FlowList — Frontend Specification

---

## 🎨 Design & UX Overview

FlowList’s frontend focuses on delivering a **visually immersive and emotionally engaging** experience while maintaining seamless usability. The product takes heavy inspiration from **Airbnb’s design language**, emphasizing clarity, micro-interactions, and smooth motion.

### ✨ Design Principles
1. **Visual Clarity:** Prioritize whitespace, large typography, and clear color contrast.
2. **Human Motion:** Motion should serve meaning—micro-animations guide user attention.
3. **Effortless Flow:** Minimize taps and visual friction; transitions should feel natural and soft.
4. **Responsive by Design:** Every component scales gracefully across desktop and mobile.
5. **Playful but Calm:** Joyful animations that never overwhelm; visual comfort is key.

---

## 🧱 Core Technologies
| Area | Technology |
|------|-------------|
| Framework | React (Web) + React Native (Mobile) |
| Styling | TailwindCSS + Shadcn/UI |
| Animations | Framer Motion + Lottie |
| State Management | TanStack Query + Zustand |
| Routing | React Router (Web) / Expo Router (Mobile) |
| Forms | React Hook Form |

---

## 🖼️ Component System

### 🧩 TaskCard
- **Purpose:** Represents a task with title, due date, and status.
- **Animation:** Hover lift (`scale: 1.02`), completion confetti via Lottie.
- **States:** Active, Completed (faded gradient overlay), Hover.
- **Interactions:** Swipe right → Complete, Swipe left → Delete (mobile).

### ➕ AddTaskButton (FAB)
- **Purpose:** Floating button for adding tasks.
- **Animation:** Morphs into modal via Framer Motion shared layout.
- **States:** Idle (pulsing gradient), Active (expanding morph).
- **Motion Specs:** Spring physics `damping: 24`, `stiffness: 260`.

### 🗂️ ListCard
- **Purpose:** Displays a list with member avatars and task preview.
- **Animation:** Slide-up entry, background fade.
- **Interactions:** Tap to open, long-press for share options.

### 👥 PresenceIndicator
- **Purpose:** Real-time online user display.
- **Animation:** Soft pulse; enters via fade scale.
- **States:** Active (color glow), Idle (low opacity).

### 💬 ReactionBubble
- **Purpose:** Quick emoji feedback on tasks.
- **Animation:** Pop-in scale + 0.2s fade-in.
- **States:** Hover expands reaction options.

---

## 📱 Layouts & Navigation

### 🧭 Web Layout
- **Navbar:** Left rail with icons (Home, Lists, Shared, Profile).
- **Content Area:** Center-aligned cards, animated route transitions.
- **FAB:** Lower-right, global add task access.

### 📱 Mobile Layout
- **Navigation:** Bottom tab bar with 4 icons (Home, Lists, Shared, Profile).
- **Gestures:** Swipe between tabs; pull-to-refresh in task lists.
- **FAB:** Center floating button with morph animation.

---

## 🌈 Visual System

| Token | Value | Purpose |
|--------|--------|----------|
| **Font Headings** | Satoshi Variable | Modern, minimal sans-serif |
| **Font Body** | Inter | Readable UI font |
| **Accent Gradient** | `linear-gradient(90deg, #FF6A00, #EE0979)` | Vibrant brand identity |
| **Card Radius** | `1.5rem` | Soft, modern aesthetic |
| **Shadow** | `0 8px 30px rgba(0,0,0,0.06)` | Airy depth |
| **Primary Motion Curve** | `easeOutBack` | Natural elasticity |

---

## ⚙️ Interaction & Motion Tokens

| Token | Type | Example Use |
|--------|------|--------------|
| `motion.fast` | 150ms | Button hover, input focus |
| `motion.medium` | 300ms | Modal open/close |
| `motion.slow` | 600ms | Page transitions |
| `spring.tight` | damping: 22, stiffness: 320 | Button press | 
| `spring.loose` | damping: 26, stiffness: 260 | Modal morph |

---

## 🧩 Page Blueprints

### 🏠 Home Dashboard
- **Purpose:** Daily overview of all active tasks.
- **Key Interactions:** Reorder via drag, quick complete, progress ring animation.
- **Transitions:** Fade-slide cards into view.

### 🧠 Shared Lists
- **Purpose:** Real-time collaborative lists.
- **UI Behavior:** Presence avatars pulse; streaks show animated progress.
- **Socket Events:** `task:update`, `reaction:add`, `presence:update`.

### 👤 Profile
- **Purpose:** Show streaks and stats.
- **Design:** Animated chart rise with `easeOutElastic` curve.
- **Interaction:** Tap streak → small confetti burst.

---

## 🚀 Performance Targets
- Initial load < 1.5s (Web, 4G)
- Animation budget ≤ 16ms/frame
- Bundle size ≤ 300kb gzipped
- Lighthouse score ≥ 95 (Performance, Accessibility)

---

## 🧭 Accessibility Targets
- WCAG 2.1 AA compliance
- Keyboard navigation supported across all components
- Motion reduced for users with prefers-reduced-motion enabled

---

## ✅ Deliverables
- Fully responsive UI (Web + Mobile)
- Component library (Storybook optional)
- Design tokens for typography, colors, motion
- Reusable animation templates (Framer Motion variants)

---

**End of Frontend Specification — FlowList**