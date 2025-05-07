import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <div className="six-wrapper">
        <Six id="six-1" title="Curious Critters" />
        <Six id="six-2" title="Another Awesome Six" />
        <Six id="six-3" title="Your Next Six!" />
      </div>
    </div>
  )
}

export default App
