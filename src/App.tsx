import './App.css'
import Six from './components/Six'

function App() {
  return (
    <div className="app-container">
      <h1>My SIX App</h1>
      <Six id="six-1" title="Six Title" />
      <hr />
      <Six id="six-2" title="Another Awesome Six" />
    </div>
  )
}

export default App
