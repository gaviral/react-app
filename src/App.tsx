import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <a href="https://github.com/gaviral/react-app" target="_blank" rel="noopener noreferrer" className="github-link">
        View Source Code
      </a>

      {/* All explanatory text at the top */}
      <div className="explanation-section">
        <div className="feature-section">
          <h3>Core Requirements Delivered</h3>
          <ul>
            <li><strong>Editable Sixes</strong>: Title &amp; up to 6 Picks (Name/Image).</li>
            <li><strong>Multi-Instance</strong>: Scalable design supporting multiple SIX components.</li>
            <li><strong>Pick Creation</strong>: Via placeholder (+) with Name/URL prompts.</li>
            <li><strong>Display</strong>: Pick images and name tooltips.</li>
            <li><strong>Base Styling</strong>: Adherence to specified visual guidelines.</li>
          </ul>
        </div>

        <div className="feature-section">
          <h3>Stretch Goals Delivered</h3>
          <ul>
            <li><strong>Pick Deletion</strong>: Accessible removal controls.</li>
            <li><strong>Name Overlay</strong>: Clear name display on pick images.</li>
          </ul>
        </div>

        <div className="feature-section">
          <h3>Proactive Enhancements</h3>
          <ul>
            <li><strong>State Persistence</strong>: Local storage for seamless sessions.</li>
            <li><strong>Accessibility</strong>: Keyboard navigation &amp; ARIA support.</li>
          </ul>
        </div>

        <div className="feature-section">
          <h3>Post-Interview Enhancements</h3>
          <ul>
            <li><strong>CI/CD Deployment</strong>: Automated build and deployment pipeline.</li>
            <li><strong>UI Polish</strong>: Iterative styling, spacing, font, and layout improvements.</li>
            <li><strong>Architecture</strong>: Maintainable component structure.</li>
          </ul>
        </div>
      </div>

      {/* Three SIX components in a horizontal row */}
      <div className="six-row">
        <Six id="six-1" title="Wildlife Collection" />
        <Six id="six-2" title="Photography Portfolio" />
        <Six id="six-3" title="Custom Curation" />
      </div>
    </div>
  )
}

export default App
