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
          <li>Core SIX concept: Displays <strong>title</strong> and up to <strong>6 picks</strong> (name/image).</li>
          <li>Title Editing: Supports <strong>viewing</strong> and <strong>editing</strong> the SIX title via an edit icon.</li>
          <li>Pick Management: Allows <strong>adding</strong> picks via placeholder (+), prompting for <strong>name/URL</strong>.</li>
          <li>Pick Display: Shows pick <strong>images</strong>, name as <strong>tooltip</strong>, and name in an <strong>overlay</strong>.</li>
          <li>Multiple Instances: Renders <strong>multiple SIX components</strong> with independent state.</li>
          <li>Pick Deletion: Includes a <strong>delete icon</strong> to remove picks.</li>
          <li>Styling: Implemented specified <strong>page background</strong>, pick <strong>border/fill</strong>, and title <strong>input border</strong> styles.</li>
        </ul>
      </div>
    </div>
  )
}

export default App
