# Software Development Life Cycle (SDLC) 🟡 Rapid Prototype version 🟡

# Product Requirements Notes:

- countdown booster
- ticking timer can nudge shopper to act
- in browser tool for the associate to create a countdown booster which they can drop into any recommendation page.
  - counter should show: ⏰ Sale ends in HH:MM:SS
  - input control:
    - end-date and time (optional; default: tomorrow (next day 23:59:59))
    - accent color picker hex or preset colors
    - optional message line: what the associate wants to write (60 characters max)
- save button:
  - when clicked, sends the settings to the server (we are not concerned with backend ; mock the response or dummy response)
  - show a toast notification saying banner saved successfully and a copy link button.
- draft persistence: local storage (for accidental page reloads)
- accessibility baselines:
  - ok with screen reader
  - Colour-contrast for banner text must meet WCAG AA (≈ 4.5 : 1)

stretch goals:

- draggable timer

## Exhaustive Roadmap

**Phase 0: Skeleton Setup**

1.  **Component Creation & Basic Structure:**
    - Create the `CountdownBooster.tsx` component file.
    - Lay out the basic HTML structure for the entire component, including placeholders for:
      - Timer display area (e.g., "⏰ Sale ends in HH:MM:SS").
      - End-date/time input(s).
      - Accent color picker.
      - Optional message input.
      - Save button.
2.  **Placeholder Styling:**
    - Apply minimal CSS to make the skeleton visually distinct and organized on the page.
3.  **Basic State Management (Placeholders):**
    - Initialize state variables for all configurable options (end date/time, accent color, message) with placeholder or default values. No functionality, just setup.

**Phase 1: Core Countdown Timer UI & Logic** 4. **Component Setup:** \* _(This step is largely covered by Phase 0, but we'll refine the specific timer area here if needed)_ 5. **Timer Display:**
_ Implement logic to calculate and display remaining time in HH:MM:SS format based on state.
_ Ensure the timer updates every second.
_ Connect to the placeholder timer display area.
_ Display the "⏰ Sale ends in " prefix. 6. **End-Date/Time Input:**
_ Make the end-date/time input(s) functional.
_ Update state on input change.
_ Implement default end time logic ("next day 23:59:59").
_ Ensure the timer logic uses this state.

**Phase 2: Customization Features** 7. **Accent Color Picker:**
_ Add an input control for selecting an accent color (hex or preset options).
_ Implement state management for the accent color.
_ Apply the selected accent color to relevant parts of the banner dynamically. 8. **Optional Message Line:**
_ Add a text input for an optional message (max 60 characters).
_ Implement state management for the message.
_ Display the message on the banner if provided. \* Enforce the 60-character limit.

**Phase 3: Functionality & Persistence** 9. **Save Button & Mock API:**
_ Add a "Save" button.
_ On click, simulate sending settings to a server (mock the API call and response). 10. **Toast Notification & Copy Link:**
_ Upon successful "save," display a toast notification: "Banner saved successfully."
_ Include a "Copy Link" button within or alongside the toast notification (initially, this can be a placeholder, or copy a dummy link). 11. **Draft Persistence (Local Storage):**
_ Implement functionality to save the current booster settings (end date/time, color, message) to local storage as the user changes them.
_ On component mount, check local storage for saved drafts and pre-fill the inputs if a draft exists.

**Phase 4: Accessibility & Styling** 12. **Screen Reader Compatibility:**
_ Review and ensure all interactive elements and content are properly announced by screen readers (ARIA attributes, semantic HTML). 13. **Color Contrast:**
_ Verify that the color contrast for banner text (against its background, considering the accent color) meets WCAG AA (≈ 4.5:1).
_ Provide a mechanism or guidance if a chosen accent color leads to poor contrast. 14. **Basic Styling:**
_ Apply basic CSS to make the countdown booster presentable and user-friendly.

**Phase 5: (Stretch Goal) Interactivity** 15. **Draggable Timer:** \* Implement functionality to make the countdown timer component draggable within the page.

## 1. Planning / Requirements Engineering

#### 1.1.1 Functional Requirements

| Code | Priority | Requirement                       | Status  |
| ---- | -------- | --------------------------------- | ------- |
| R1   | P0       | _(define functional requirement)_ | _(TBD)_ |
| R2   | P0       | _(define functional requirement)_ | _(TBD)_ |
| R3   | P1       | _(define functional requirement)_ | _(TBD)_ |
| R4   | P2       | _(define functional requirement)_ | _(TBD)_ |

#### 1.1.2 Non-functional Requirements

| Code | Priority | Requirement                                                 | Status  |
| ---- | -------- | ----------------------------------------------------------- | ------- |
| NR1  | P0       | _(define non-functional requirement. Example: Scrappy)_     | _(TBD)_ |
| NR2  | P1       | _(define non-functional requirement. Example: Easy-to-use)_ | _(TBD)_ |

## 2. Design

_(Outline high-level architecture, data structures, and approach.)_

| Code | Design Decision                                                    |
| ---- | ------------------------------------------------------------------ |
| D1   | _(define design decisions. Example: Single-page app)_              |
| D2   | _(define design decisions. Example: Functional components, Hooks)_ |
| D3   | _(define design decisions. Example: TypeScript)_                   |
| D4   | _(define design decisions. Example: React Context)_                |
| D5   | _(define design decisions. Example: Mermaid diagram)_              |

## 3. Implementation

Plan:

1. _(define step)_
2. _(define step)_
3. _(define step)_
4. _(define step)_
5. _(define step)_

## 4. Testing

_(List manual tests or unit-test stubs for critical paths.)_

## 5. Deployment / Maintenance

_(Note deployment pipeline and long-term maintenance considerations.)_

## 6. Continuous Improvement (Extra-time Tasks)

### 6.1 UI / UX Enhancements

- Polish visual design, accessibility, and interaction flows.
- Implement progressive disclosure and micro-interactions as time permits.

## 6.2 Code & Architecture Refinement

- Refactor toward beneficial design patterns (e.g., MVC, Factory, Strategy).
- Enforce SOLID principles; eliminate code smells.

## 6.3 Best Practices & First-Principles Review

- Re-evaluate decisions using first-principles thinking.
- Update documentation, logging, observability; verify performance budgets.

## 7. Backlog

1. grid-movement
2. _(Backlog item)_
3. _(Backlog item)_
4. Revisit and improve overall styling and color scheme of CountdownBooster
5. Show character count/remaining for the optional message input
