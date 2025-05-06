import { useState } from 'react';
import './App.css'

function App() {
  // State for form inputs - add more as needed
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [isRounded, setIsRounded] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left half: Controls */}
      <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h2>Controls</h2>

        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={50}
            aria-label="Card Title"
            style={{ width: '90%', padding: '5px' }}
          />
        </div>

        <div>
          <label htmlFor="subtitleInput">Subtitle (Optional):</label>
          <input
            id="subtitleInput"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            maxLength={80}
            aria-label="Card Subtitle"
            style={{ width: '90%', padding: '5px' }}
          />
        </div>

        {/* Placeholder for 6 Product Components */}
        <fieldset style={{ border: '1px solid #eee', padding: '10px' }}>
           <legend>Products</legend>
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} style={{ marginBottom: '10px', border: '1px dashed #ccc', padding: '5px' }}>
               Product {i} Placeholder (Image + Title)
             </div>
           ))}
        </fieldset>

        <div>
          <label htmlFor="bgColorPicker">Background Color:</label>
          <input
            id="bgColorPicker"
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            aria-label="Background Color Picker"
          />
        </div>

        <div>
           <label>
             <input
               type="checkbox"
               checked={isRounded}
               onChange={(e) => setIsRounded(e.target.checked)}
               aria-label="Toggle Rounded Corners"
             />
             Use Rounded Corners
           </label>
        </div>

        <button style={{ padding: '10px', marginTop: 'auto' }}>Save Card</button>

      </div>

      {/* Right half: Preview */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: backgroundColor }}>
        <h2>Preview</h2>
        <div style={{
             border: `2px solid ${isRounded ? 'blue' : 'green'}`,
             borderRadius: isRounded ? '15px' : '0',
             padding: '20px',
             marginTop: '20px'
           }}>
          <h3>{title || 'Card Title Preview'}</h3>
          <h4>{subtitle || 'Card Subtitle Preview'}</h4>
          <p>Live Card Preview Placeholder</p>
          <p>Products will appear here...</p>
        </div>
      </div>
    </div>
  )
}

export default App
