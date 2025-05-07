import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <div className="six-wrapper">
        <Six id="six-1" title="Curious Critters" />
        <Six id="six-2" title="Team Favorites" />
        <Six id="six-3" title="Personal Picks" />
      </div>

      <div className="requirements-summary">
        <h2>Project Requirements Met</h2>
        <ul>
          <li>Application mimics the basic SIX concept (title, 6 picks with name/image).</li>
          <li>Ability to view and edit the title of each SIX instance.</li>
          <li>Ability to add picks via placeholder, prompting for name and image URL.</li>
          <li>Displays pick images once added.</li>
          <li>Shows pick name as a tooltip on hover (using native title attribute).</li>
          <li>Supports multiple SIX instances on a single page with independent state.</li>
          <li>Includes a delete icon on picks to remove them.</li>
          <li>Displays pick name in an overlay at the bottom of the image.</li>
          <li>Implemented specified styling for page background, pick borders/fill, and title input border.</li>
        </ul>
      </div>
    </div>
  )
}

export default App
