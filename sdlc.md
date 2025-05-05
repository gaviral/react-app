# Software Development Life Cycle (SDLC) 🟡 Rapid Prototype version 🟡

---

### MVP Requirements

1. **Stepper form (3 steps)** inside `/style-capture` route:
   - **Step 1 — Contact** : customer _email OR phone_ (validate format; at least one required).
   - **Step 2 — Style tags** : multi-select up to **5** tags (source `/api/tags?q=` autocomplete).
     - summer/winter/garden (clothing/style)
   - **Step 3 — Optional note** (≤ 280 chars) & **Consent checkbox** (“I agree to receive recommendations”).
2. **Progress indicator** across top; “Next/Back” buttons disabled until step valid.
3. On _Submit_, POST to `/api/customers/preferences` → response `{shareUrl:"[https://six.app/p/xyz789"}`.](https://six.app/p/xyz789%22%7D`. "https://six.app/p/xyz789%22%7d%60.")
4. Show **Confirmation panel** with:
   - Shareable link displayed in input + **Copy** button (clipboard feedback).
   - **QR code** of the link (generate client-side).
5. **Persist draft state** in `localStorage` so accidental refresh doesn’t lose progress.

### Stretch Goals (offered only if they finish ≥10 min early)

- Offline → online retry queue for the POST.
- Unit tests with React Testing Library covering validation + copy feedback.
- Dark-mode toggle with CSS variables.

---

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

| Code | Design Decision              |
| ---- | ---------------------------- |
| D1   | Single-page app              |
| D2   | Functional components, Hooks |
| D3   | TypeScript                   |
| D4   | local storage                |

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

1. _(Backlog item)_
2. _(Backlog item)_
3. _(Backlog item)_
