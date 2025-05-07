import React, { useState, useEffect } from 'react';
import './App.css'
import Six from './components/Six'
import AddSix from './components/AddSix'

// Define type for storing Six components
interface SixData {
  id: string;
  title: string;
}

function App() {
  // Load saved sixes from localStorage on initial render
  const [sixes, setSixes] = useState<SixData[]>(() => {
    try {
      const savedSixes = localStorage.getItem('appSixes');
      if (savedSixes) {
        return JSON.parse(savedSixes);
      }
    } catch (e) {
      console.warn('Error loading sixes from localStorage', e);
    }
    // Default to just the first Six if nothing in localStorage
    return [{ id: 'six-1', title: 'Curious Critters' }];
  });

  // Save sixes to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('appSixes', JSON.stringify(sixes));
    } catch (e) {
      console.warn('Error saving sixes to localStorage', e);
    }
  }, [sixes]);

  // Add a new Six with a default title
  const handleAddSix = () => {
    const newId = `six-${Date.now()}`; // Create unique ID
    const newSix = {
      id: newId,
      title: 'New Collection'
    };
    setSixes([...sixes, newSix]);
  };

  return (
    <div className="app-container">
      <h1>SIX Showcase</h1>
      <a href="https://github.com/gaviral/react-app" target="_blank" rel="noopener noreferrer" className="github-link">
        View Source Code
      </a>

      {/* All explanatory text at the top */}
      <div className="explanation-section">
        <div className="feature-section">
          <h3>Core Requirements Delivered</h3>
          <ul>
            <li><strong>Editable Sixes</strong>: Title &amp; up to 6 Picks (Name/Image).</li>
            <li><strong>Multi-Instance</strong>: Scalable design supporting multiple SIX components.</li>
            <li><strong>Pick Creation</strong>: Via placeholder (+) with Name/URL prompts.</li>
            <li><strong>Display</strong>: Pick images and name tooltips.</li>
            <li><strong>Base Styling</strong>: Adherence to specified visual guidelines.</li>
          </ul>
        </div>

        <div className="feature-section">
          <h3>Stretch Goals Delivered</h3>
          <ul>
            <li><strong>Pick Deletion</strong>: Accessible removal controls.</li>
            <li><strong>Name Overlay</strong>: Clear name display on pick images.</li>
          </ul>
        </div>

        <div className="feature-section">
          <h3>Proactive Enhancements</h3>
          <ul>
            <li><strong>State Persistence</strong>: Local storage for seamless sessions.</li>
            <li><strong>Accessibility</strong>: Keyboard navigation &amp; ARIA support.</li>
          </ul>
        </div>

        <div className="feature-section">
          <h3>Post-Interview Enhancements</h3>
          <ul>
            <li><strong>CI/CD Deployment</strong>: Automated build and deployment pipeline.</li>
            <li><strong>UI Polish</strong>: Iterative styling, spacing, font, and layout improvements.</li>
            <li><strong>Architecture</strong>: Maintainable component structure.</li>
          </ul>
        </div>
      </div>

      {/* Dynamic Six row - renders existing Sixes plus AddSix button */}
      <div className="six-row">
        {sixes.map((six) => (
          <Six key={six.id} id={six.id} title={six.title} />
        ))}
        {sixes.length < 3 && <AddSix onAdd={handleAddSix} />}
      </div>
    </div>
  )
}

export default App
