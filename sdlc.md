# Software Development Life Cycle

# 1. Planning / Requirements Engineering

## 1.1 Requirements Collection

- search box for products
- staff in stores can send personal recommendations to customers
  - select up to 3 items (next button)
  - personal message (note)
  - button(generate a shareable link)
  - next screen: preview card with product thumbnails, note, and "copy link" button

<!-- ### 1.1.1 Functional Requirements

| Code  | Priority | Requirement                       | Status  |
| ----- | -------- | --------------------------------- | ------- |
| FR-01 | P0       | _(define functional requirement)_ | _(TBD)_ |
| FR-02 | P1       | _(define functional requirement)_ | _(TBD)_ |

### 1.1.2 Non-functional Requirements

| Code   | Priority | Requirement                           | Status  |
| ------ | -------- | ------------------------------------- | ------- |
| NFR-01 | P0       | _(define non-functional requirement)_ | _(TBD)_ |
| NFR-02 | P2       | _(define non-functional requirement)_ | _(TBD)_ | -->

# 2. Design

_(Outline high-level architecture, data structures, and approach.)_

# 3. Implementation

_(Describe core functionality and coding priorities.)_

# 4. Testing

_(List manual tests or unit-test stubs for critical paths.)_

# 5. Deployment / Maintenance

_(Note deployment pipeline and long-term maintenance considerations.)_

# 6. Continuous Improvement (Extra-time Tasks)

## 6.1 UI / UX Enhancements

- Polish visual design, accessibility, and interaction flows.
- Implement progressive disclosure and micro-interactions as time permits.

## 6.2 Code & Architecture Refinement

- Refactor toward beneficial design patterns (e.g., MVC, Factory, Strategy).
- Enforce SOLID principles; eliminate code smells.

## 6.3 Best Practices & First-Principles Review

- Re-evaluate decisions using first-principles thinking.
- Update documentation, logging, observability; verify performance budgets.

# 7. Backlog Items

## 7.1 Navigation & User Flow

| Priority | Item                | Description                                                                                   |
| -------- | ------------------- | --------------------------------------------------------------------------------------------- |
| High     | Back Navigation     | Add ability to navigate back to previous screens in the workflow (back button or breadcrumbs) |
| Medium   | Workflow Indicators | Add progress indicators to show users which stage of the workflow they're in                  |
| Low      | Animations          | Add subtle animations for transitions between workflow stages                                 |

## 7.2 UI/UX Improvements

| Priority | Item                     | Description                                                                         |
| -------- | ------------------------ | ----------------------------------------------------------------------------------- |
| High     | Text Contrast in Preview | Fix contrast issue with text in preview recommendation screen to ensure readability |
| Medium   | Search Box Background    | Improve the background color of the search box for better visual distinction        |
| Medium   | Mobile Responsiveness    | Optimize layout for smaller screen sizes                                            |
| Low      | Dark Mode                | Add support for dark mode theme                                                     |

## 7.3 Features

| Priority | Item               | Description                                                                              |
| -------- | ------------------ | ---------------------------------------------------------------------------------------- |
| High     | Link Functionality | Implement actual functionality for the generated link so it opens with selected products |
| Medium   | Product Filtering  | Add ability to filter products by category or type                                       |
| Medium   | Save Drafts        | Allow users to save recommendation drafts for later completion                           |
| Low      | Product Search API | Replace mock data with actual API calls to product database                              |
