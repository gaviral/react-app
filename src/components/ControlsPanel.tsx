import React from 'react';

interface ControlsPanelProps {
  title: string;
  setTitle: (title: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  isRounded: boolean;
  setIsRounded: (rounded: boolean) => void;
  setSavedUrl: (url: string | null) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  backgroundColor,
  setBackgroundColor,
  isRounded,
  setIsRounded,
  setSavedUrl,
}) => {

  const handleSave = () => {
    const mockUrl = `https://example.com/share/${Date.now()}`;
    console.log('Simulating save, generated URL:', mockUrl);
    setSavedUrl(mockUrl);
  };

  return (
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
         {/* Future: Implement product selection here */}
         <p style={{ fontStyle: 'italic', color: '#777' }}>Product selection TBD. Displaying 6 fixed products in preview.</p>
         {/* {[1, 2, 3, 4, 5, 6].map((i) => (
           <div key={i} style={{ marginBottom: '10px', border: '1px dashed #ccc', padding: '5px' }}>
             Product {i} Placeholder (Image + Title)
           </div>
         ))} */}
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

      <button
        style={{ padding: '10px', marginTop: 'auto' }}
        onClick={handleSave}
      >
        Save Card
      </button>

    </div>
  );
};

export default ControlsPanel; 