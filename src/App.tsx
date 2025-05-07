import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <div className="main-content-area">
        <div className="six-column">
          <Six id="six-1" title="Curious Critters" />
          <Six id="six-2" title="Example User SIX" />
        </div>
        <div className="feature-showcase">
          <h2>Application Highlights</h2>

          <div className="feature-section">
            <h3>Core Features</h3>
            <ul>
              <li><strong>Dynamic SIX Creation</strong>: Manage multiple SIX instances with editable titles and up to 6 customizable picks (name/image).</li>
              <li><strong>Title Editing</strong>: View and modify SIX titles via an accessible edit icon.</li>
              <li><strong>Pick Management</strong>: Add picks via placeholder (+), prompting for name and image URL.</li>
              <li><strong>Basic Pick Display</strong>: Shows pick images and names as tooltips.</li>
              <li><strong>Multi-Instance Support</strong>: Demonstrates capability to render multiple SIX components with independent state.</li>
              <li><strong>Base Styling</strong>: Implements specified page background, pick borders/fill, and title input styles.</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>Stretch Goals Achieved</h3>
            <ul>
              <li><strong>Pick Deletion</strong>: Includes an accessible delete icon on picks for easy removal.</li>
              <li><strong>Enhanced Pick Display</strong>: Features a clear name overlay at the bottom of each pick image.</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>Additional Enhancements</h3>
            <ul>
              <li><strong>Persistent State</strong>: Automatically saves user progress (titles, picks) via local storage (excluding initial example).</li>
              <li><strong>Accessibility Focused</strong>: Interactive elements designed for robust keyboard navigation and screen reader compatibility.</li>
              <li><strong>UI Refinements</strong>: Includes improved component spacing, adjusted fonts, and enhanced icon styling for clarity.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
