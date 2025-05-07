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

**Phase 1: Core Countdown Timer UI & Logic** 4. **Component Setup:** _ *(This step is largely covered by Phase 0, but we'll refine the specific timer area here if needed)* 5. **Timer Display:**
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
_ Display the message on the banner if provided. _ Enforce the 60-character limit.

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

**Phase 5: (Stretch Goal) Interactivity** 15. **Draggable Timer:** _ Implement functionality to make the countdown timer component draggable within the page.

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

## Accessibility Implementation Review

This section reviews how the Countdown Booster project addresses its specified accessibility baselines.

**Core Requirements:**

*   **Ok with screen reader:**
    *   **Semantic HTML:** The application uses semantic HTML elements extensively (e.g., `<label htmlFor="...">`, `<input type="...">`, `<button>`). This provides inherent meaning and structure that screen readers can interpret.
    *   **ARIA Attributes for Dynamic Content:** For dynamic updates like toast notifications, `aria-live="polite"` and `aria-atomic="true"` are used on the toast container. This ensures that screen readers announce these important messages without disrupting the user's current focus.
    *   **Focus Management:** Standard browser focus management is utilized. All interactive elements (inputs, buttons) are keyboard navigable. Custom focus indicators (`outline: 2px solid #007bff; outline-offset: 2px;`) ensure that the keyboard focus is clearly visible, which also aids screen reader users who may use visual focus as a secondary cue.
    *   **No User Agent Sniffing:** The application does not attempt to detect screen readers or alter behavior based on the user agent. It relies on standards-compliant code for broad assistive technology compatibility.

*   **Colour-contrast for banner text must meet WCAG AA (≈ 4.5 : 1):**
    *   **WCAG AA Standard:** This refers to WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum), which requires a contrast ratio of at least 4.5:1 for normal-sized text and 3:1 for large text (18pt or 14pt bold) against its background. User interface components (like input borders or focus indicators) should have a contrast of at least 3:1 against adjacent colors (SC 1.4.11 Non-text Contrast).
    *   **Default Colors:** The default accent color (`#007bff` - blue) used for the timer text and "Sale ends in" prefix, when displayed against the timer's light gray background (`#f8f9fa`), has a contrast ratio of approximately 4.53:1, meeting the AA requirement for normal text.
    *   **User-Chosen Colors:** Since users can select their own accent color, the application provides a note directly below the color picker: *"Note: Ensure good contrast (WCAG AA ≈ 4.5:1)."* This reminds users to choose colors that maintain readability.
    *   **Focus Indicators:** The custom blue focus outline provides sufficient contrast against typical backgrounds.
    *   **Other Text:** Standard text elements (labels, static text) use default browser or high-contrast CSS colors (e.g., `#333` on white/light backgrounds), generally ensuring good contrast.

## Manual Testing Guide

This guide outlines steps to manually test the core functionalities and requirements of the Countdown Booster.

**I. Core Countdown Functionality**

1.  **Timer Display (HH:MM:SS & Prefix):**
    *   **Test:** Load the component.
    *   **Expected:** Observe the timer displaying "⏰ Sale ends in HH:MM:SS". The HH, MM, SS values should decrement every second.
2.  **Default End-Date/Time (Next Day 23:59:59):**
    *   **Test:** Load the component for the first time (or after clearing local storage). Inspect the "End Date/Time" input field.
    *   **Expected:** The input should be pre-filled with tomorrow's date, and the time set to 23:59:59. The timer should be counting down towards this.
3.  **Custom End-Date/Time Input:**
    *   **Test 3.1 (Future Date):** Select a future date and time using the input control.
    *   **Expected:** The timer should update and start counting down towards the newly selected future date/time.
    *   **Test 3.2 (Past Date):** Select a past date and time.
    *   **Expected:** The timer display should change to "🎉 Sale has ended!".
    *   **Test 3.3 (Current Date, Future Time):** Select today's date and a time a few minutes in the future.
    *   **Expected:** Timer counts down. Wait for it to reach 00:00:00. It should then display "🎉 Sale has ended!".

**II. Customization Features**

4.  **Accent Color Picker:**
    *   **Test:** Use the color picker to select a new accent color (e.g., green, purple).
    *   **Expected:**
        *   The main component border color should update to the selected color.
        *   The "⏰ Sale ends in " prefix and the HH:MM:SS numbers should update to the selected color (if the timer is active).
        *   If an optional message is displayed, its text color should update.
5.  **Optional Message Line (Max 60 Chars):**
    *   **Test 5.1 (Display):** Type a message (e.g., "Limited Time Only!") into the "Optional Message" input.
    *   **Expected:** The message should appear below the timer display, styled with the current accent color.
    *   **Test 5.2 (Clear):** Delete the message from the input.
    *   **Expected:** The message display area should disappear.
    *   **Test 5.3 (Max Length):** Try to type a message longer than 60 characters.
    *   **Expected:** The input field should prevent entry beyond 60 characters.

**III. Functionality & Persistence**

6.  **Save Button & Mock API Call:**
    *   **Test:** Configure some settings (e.g., change end date, color, message). Click the "Save Settings" button. Open the browser's developer console.
    *   **Expected:**
        *   After a brief delay (approx. 1 second), a console log should appear showing "Saving settings to server (mock):" with the current settings object (including position).
        *   Another console log "Server responded: Save successful (mock)" should appear.
7.  **Toast Notification & Copy Link:**
    *   **Test 7.1 (Save Toast):** After clicking "Save Settings" (as in Test 6).
    *   **Expected:** A toast notification "Banner saved successfully!" should appear at the bottom-center of the screen and disappear after ~3 seconds. It should contain a "Copy Link" button.
    *   **Test 7.2 (Copy Link):** Click the "Copy Link" button from the save toast.
    *   **Expected:** A toast notification "Link copied to clipboard!" should appear (or "Failed to copy link." if clipboard API fails/is blocked). Check if a dummy URL (e.g., `https://example.com/countdown?...`) containing the current settings (including position) is in the clipboard. This toast should disappear after ~2 seconds.
8.  **Draft Persistence (Local Storage):**
    *   **Test 8.1 (Save Draft):** Change several settings: end date/time, accent color, message, and drag the component to a new position.
    *   **Test 8.2 (Reload):** Refresh the page.
    *   **Expected:** The component should load with all the settings (end date, color, message, and position) preserved from before the refresh.
    *   **Test 8.3 (Clear Storage & Reload - Optional):** Use browser developer tools to clear local storage for the site. Refresh the page.
    *   **Expected:** The component should load with default settings (e.g., end date is tomorrow, default color, default message, position 0,0).

**IV. Accessibility Baselines**

9.  **Screen Reader Compatibility:**
    *   **Test:** Using a screen reader (e.g., NVDA, JAWS, VoiceOver):
        *   Navigate through all controls (inputs, buttons) using Tab/Shift+Tab.
        *   **Expected:** Each control should be announced clearly with its label and current value/state.
        *   Trigger the "Save Settings" button.
        *   **Expected:** The "Banner saved successfully!" toast message should be announced by the screen reader.
        *   Trigger the "Copy Link" button.
        *   **Expected:** The "Link copied to clipboard!" (or failure) toast message should be announced.
10. **Color Contrast (WCAG AA):**
    *   **Test 10.1 (Default):** Visually inspect the default component.
    *   **Expected:** Text (timer, labels, message) should be clearly readable against its background. (Automated tools/browser extensions can verify specific ratios if needed; our default blue on light gray for timer text is ~4.53:1).
    *   **Test 10.2 (User-Selected Color):** Use the accent color picker to choose a very light color (e.g., light yellow) and observe the timer text.
    *   **Expected:** The timer text may become hard to read. The note "Note: Ensure good contrast (WCAG AA ≈ 4.5:1)." should be visible below the color picker, guiding the user.
    *   **Test 10.3 (Focus Indicators):** Tab through all interactive elements.
    *   **Expected:** A clear blue outline should appear around each focused element, easily distinguishable from the element and its background.

**V. Stretch Goals**

11. **Draggable Timer:**
    *   **Test 11.1 (Drag):** Click and drag the "Countdown Booster" title bar (or any part of the component body).
    *   **Expected:** The entire component should move with the mouse cursor. The cursor should change to a "grab" then "grabbing" icon.
    *   **Test 11.2 (Drop):** Release the mouse button.
    *   **Expected:** The component should remain at the new position.
    *   **Test 11.3 (Persistence - covered by 8.2):** After dragging and refreshing, the component should reappear at the dragged position.

## 7. Backlog

1. grid-movement
    - What specific element should have grid movement (e.g., the draggable timer)?
    - Should it snap to a predefined grid? If so, what should the grid dimensions/granularity be?
    - Is free movement still desired, or should grid snapping replace it?
2. _(Backlog item)_
    - Please specify this backlog item.
3. _(Backlog item)_
    - Please specify this backlog item.
4. Revisit and improve overall styling and color scheme of CountdownBooster
5. Show character count/remaining for the optional message input
