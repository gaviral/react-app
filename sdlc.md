# Software Development Life Cycle (SDLC) 🟡 Rapid Prototype version 🟡

## 1. Planning / Requirements Engineering

quick share card customizer

associates can create

```
left half of the screen:
    - input controls
    - title (max 50 characters)
    - subtitle (optional; max 80 characters)
        - 6 products (components)
            - image
            - title (max 20 characters)
    - background color picker
    - toggle (rounded or squared corners)

- save button
  - call existing sharesix API (send: current card settings; response: shortened URL to share the card)
- toast notification (card was saved - stays there doesn't go away)
  - show button to copy the card URL.
- persistence for card settings:
  - card settings are persisted in local storage

right half of the screen:
    - live card preview


- title and subtitle inputs should be labeled for screen reader users. (accessibility)
- ensure that the color constrast passes the WCAG standards AA (4.5:1) for the title text against selected background.  (accessibility)
```

---

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

1. keeping the saved url (not just in the toast)
2. Implement product selection mechanism in Controls panel.
3. Improve overall UI/UX and visual polish.
