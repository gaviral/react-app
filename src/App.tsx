import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <a href="https://github.com/gaviral/react-app" target="_blank" rel="noopener noreferrer" className="github-link">
        View on GitHub
      </a>
      <div className="main-content-area">
        <div className="six-column">
          <Six id="six-1" title="Curious Critters" />
          <Six id="six-2" title="Example User SIX" />
        </div>
        <div className="feature-showcase">
          <div className="feature-section">
            <h3>Core Requirements Delivered</h3>
            <ul>
              <li><strong>SIX Concept</strong>: Implemented core functionality with editable titles and up to 6 customizable picks (name/image).</li>
              <li><strong>Multi-Instance Support</strong>: Designed for scalability, allowing multiple independent SIX components per page.</li>
              <li><strong>Title Editing</strong>: Integrated accessible controls for seamless title modification.</li>
              <li><strong>Pick Management</strong>: Provided intuitive pick creation via placeholder prompts for name and image URL.</li>
              <li><strong>Pick Display</strong>: Ensured clear image presentation with informative tooltips.</li>
              <li><strong>Base Styling</strong>: Applied specified visual styles for page background, pick containers, and inputs.</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>Stretch Goals Delivered</h3>
            <ul>
              <li><strong>Pick Deletion</strong>: Added accessible controls for removing individual picks.</li>
              <li><strong>Name Overlay</strong>: Enhanced pick display with a clear name overlay on images.</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>Proactive Enhancements</h3>
            <ul>
              <li><strong>State Persistence</strong>: Implemented local storage to retain user state across sessions, improving usability.</li>
              <li><strong>Accessibility</strong>: Incorporated ARIA attributes and keyboard navigation support for enhanced accessibility.</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>Continued Refinements</h3>
            <ul>
              <li><strong>UI Polish</strong>: Iteratively refined component spacing, fonts, icon styling, and layout based on feedback and best practices.</li>
              <li><strong>Code Structure</strong>: Maintained component-based architecture suitable for further expansion.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
