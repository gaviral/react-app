import { useState } from 'react';
import './App.css'
import ControlsPanel from './components/ControlsPanel';
import PreviewPanel from './components/PreviewPanel';

function App() {
  // State for form inputs - add more as needed
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [isRounded, setIsRounded] = useState(false);

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
