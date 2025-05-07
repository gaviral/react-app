import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <div className="main-content-area">
        <div className="six-column">
          <Six id="six-1" title="Curious Critters" />
          <Six id="six-2" title="Team Favorites" />
        </div>
        <div className="feature-showcase">
          <h2>Application Highlights</h2>
          <ul>
            <li><strong>Dynamic SIX Creation</strong>: Easily manage multiple SIX instances, each with its own editable title and collection of up to six customizable picks.</li>
            <li><strong>Interactive Pick Management</strong>: Add new picks with names and image URLs via a simple interface. Displayed picks feature tooltips and clear name overlays.</li>
            <li><strong>Intuitive Controls</strong>: Includes accessible edit icons for titles and straightforward deletion for individual picks.</li>
            <li><strong>Persistent State</strong>: User progress (titles, picks) is automatically saved via local storage for a seamless experience (excluding initial example).</li>
            <li><strong>Accessibility Focused</strong>: Interactive elements designed for keyboard navigation and screen reader compatibility.</li>
            <li><strong>Refined Styling</strong>: Adheres to specified visual guidelines with layout and clarity enhancements.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
