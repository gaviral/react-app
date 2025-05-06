import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left half: Controls */}
      <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '20px' }}>
        <h2>Controls</h2>
        <p>Title Input Placeholder</p>
        <p>Subtitle Input Placeholder</p>
        <p>Product 1 Placeholder</p>
        <p>Product 2 Placeholder</p>
        <p>Product 3 Placeholder</p>
        <p>Product 4 Placeholder</p>
        <p>Product 5 Placeholder</p>
        <p>Product 6 Placeholder</p>
        <p>Background Color Picker Placeholder</p>
        <p>Corner Style Toggle Placeholder</p>
        <p>Save Button Placeholder</p>
      </div>

      {/* Right half: Preview */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Preview</h2>
        <p>Live Card Preview Placeholder</p>
      </div>
    </div>
  )
}

export default App
