import { useState, useEffect } from 'react';
import './App.css'
import ControlsPanel from './components/ControlsPanel';
import PreviewPanel from './components/PreviewPanel';

// Keys for local storage
const LS_KEYS = {
  TITLE: 'cardTitle',
  SUBTITLE: 'cardSubtitle',
  BG_COLOR: 'cardBgColor',
  IS_ROUNDED: 'cardIsRounded',
};

function App() {
  // Initialize state from local storage or defaults
  const [title, setTitle] = useState(() => localStorage.getItem(LS_KEYS.TITLE) || '');
  const [subtitle, setSubtitle] = useState(() => localStorage.getItem(LS_KEYS.SUBTITLE) || '');
  const [backgroundColor, setBackgroundColor] = useState(() => localStorage.getItem(LS_KEYS.BG_COLOR) || '#ffffff');
  // Need to parse boolean from string
  const [isRounded, setIsRounded] = useState(() => localStorage.getItem(LS_KEYS.IS_ROUNDED) === 'true' || false);

  // --- Effects for saving to Local Storage ---
  useEffect(() => {
    localStorage.setItem(LS_KEYS.TITLE, title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.SUBTITLE, subtitle);
  }, [subtitle]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.BG_COLOR, backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.IS_ROUNDED, String(isRounded)); // Store boolean as string
  }, [isRounded]);

  // No effect needed for initial loading as it's handled in useState initializer

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ControlsPanel
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        isRounded={isRounded}
        setIsRounded={setIsRounded}
      />
      <PreviewPanel
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
        isRounded={isRounded}
      />
    </div>
  )
}

export default App
