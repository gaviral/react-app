# Software Development Life Cycle (SDLC) 🟡 Rapid Prototype version 🟡

## 1. Planning / Requirements Engineering

### 1.1.1 Product Requirements

Build a simple React web application to mimic the basic concept of a SIX. It should allow you to
view and edit a SIX which has a title and can contain up to 6 Picks. A pick consists of a name
and an image.

Details
This should be a single page with multiple React components. It should be possible to add more
than one Six to a page without significant changes.
The Six title should have an edit icon which puts it in an edit mode, allowing the title to be
modified.
It should be possible to add Picks by clicking on the + in the placeholder view. When a pick is
added it should prompt for the name and image URL. The image should be displayed in the Six
once set. The name should be set as a tooltip on the image that appears on hover.
As time permits, add a delete icon for picks that are present which resets back to the default
state of no pick (showing the + option again).
As time permits, add an overlay at the bottom of the pick image showing the pick name.
Style Info
- Page background color: #F5F5F1
- Pick border color: #E8E8E8, 1px dotted
- Pick fill color: #FFFFFF 50% opacity
- Title input border color: #E4E4D9

Test Data
Pick Name Image URL
Red Panda https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1130384453-scaled.jpg
Axolotl https://www.rd.com/wp-content/uploads/2018/05/shutterstock_231680788.jpg
Serval https://www.rd.com/wp-content/uploads/2018/05/shutterstock_327407618.jpg
Antelope Squirrel https://www.rd.com/wp-content/uploads/2018/05/shutterstock_764401411.jpg
Chevrotain https://www.rd.com/wp-content/uploads/2018/05/shutterstock_368014985.jpg
Sand Cat https://www.rd.com/wp-content/uploads/2018/05/shutterstock_717462397.jpg
Quokka https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg


## Implementation Roadmap

1.  **Setup Project Structure:**
    *   Create basic folder structure for components (`src/components`), assets, etc.
    *   Define main App component.
2.  **Develop `Six` Component:**
    *   Display title.
    *   Implement title edit functionality (edit icon, input field, save).
    *   Container for up to 6 `Pick` components.
3.  **Develop `Pick` Component:**
    *   Placeholder view with '+' to add a pick.
    *   Logic to prompt for pick name and image URL.
    *   Display image.
    *   Show name as a tooltip on hover.
4.  **Implement Multiple `Six` Instances:**
    *   Ensure the `App` component can render multiple `Six` components with independent state.
5.  **Styling:**
    *   Apply page background color.
    *   Style `Pick` component (border, fill).
    *   Style `Six` title input (border).
6.  **(Time Permitting) Develop `Pick` Deletion:**
    *   Add delete icon to `Pick` component.
    *   Implement logic to reset `Pick` to placeholder state.
7.  **(Time Permitting) Develop `Pick` Name Overlay:**
    *   Add an overlay at the bottom of the `Pick` image showing the pick name.

<!--
### 1.1.2 Functional Requirements

| Code | Priority | Requirement                       | Status  |
| ---- | -------- | --------------------------------- | ------- |
| R1   | P0       | _(define functional requirement)_ | _(TBD)_ |
| R2   | P0       | _(define functional requirement)_ | _(TBD)_ |
| R3   | P1       | _(define functional requirement)_ | _(TBD)_ |
| R4   | P2       | _(define functional requirement)_ | _(TBD)_ |

### 1.1.3 Non-functional Requirements

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

-->

## 7. Backlog

1. Persist Six state (title and picks) using local storage to prevent data loss on page refresh.
2. Accessibility improvements (e.g., ARIA attributes, keyboard navigation).
3. Research potential future features for the SIX application.
4. Handle incorrect image URLs gracefully (e.g., show placeholder or error message).
5. Refactor: Split large 'remaining tasks' commit into smaller, focused commits.

## 8. Visual Differences Between Prototype and Implementation

The following differences were observed between the provided prototype and current implementation:

1. **Pick Container Corners**: 
   - Prototype: Picks have rounded corners with varied radius (more pronounced in some corners, like the top-right corner of the top-right pick)
   - Current: Picks have uniform square corners

2. **Pick Container Border**:
   - Prototype: More subtle dotted border with a softer appearance
   - Current: More defined border around pick containers

3. **Layout & Spacing**:
   - Prototype: Single Six component with more spacing between picks
   - Current: Two Six components with horizontal separator, less spacing between picks

4. **Container Styling**:
   - Prototype: Pick containers have a softer, more subtle appearance
   - Current: More defined container borders and structure

5. **Plus Sign Styling**:
   - Prototype: Larger plus signs with different styling/emphasis
   - Current: Smaller, more uniform plus signs

6. **Title Style**:
   - Prototype: Single "Six Title" with simpler styling
   - Current: App title plus individual Six component titles with edit icons

7. **Background Contrast**:
   - Prototype: Subtly different background/foreground contrast
   - Current: Different color relationships between elements

These visual refinements should be addressed to more closely match the prototype design.
