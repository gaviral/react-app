import { useState, useEffect } from 'react';
import './App.css'
import ControlsPanel from './components/ControlsPanel';
import PreviewPanel from './components/PreviewPanel';
import { Toaster, toast } from 'react-hot-toast';
import contrast from 'get-contrast'; // Import contrast checker

// Keys for local storage
const LS_KEYS = {
  TITLE: 'cardTitle',
  SUBTITLE: 'cardSubtitle',
  BG_COLOR: 'cardBgColor',
  IS_ROUNDED: 'cardIsRounded',
};

// WCAG AA contrast ratio threshold
const WCAG_AA_THRESHOLD = 4.5;

function App() {
  // Initialize state from local storage or defaults
  const [title, setTitle] = useState(() => localStorage.getItem(LS_KEYS.TITLE) || '');
  const [subtitle, setSubtitle] = useState(() => localStorage.getItem(LS_KEYS.SUBTITLE) || '');
  const [backgroundColor, setBackgroundColor] = useState(() => localStorage.getItem(LS_KEYS.BG_COLOR) || '#ffffff');
  // Need to parse boolean from string
  const [isRounded, setIsRounded] = useState(() => localStorage.getItem(LS_KEYS.IS_ROUNDED) === 'true' || false);
  const [savedUrl, setSavedUrl] = useState<string | null>(null);

  // State for contrast check
  const [contrastRatio, setContrastRatio] = useState<number | null>(null);
  const [passesContrastCheck, setPassesContrastCheck] = useState<boolean | null>(null);
  const [titleTextColor] = useState('#333333'); // Assuming a fixed dark text color for title for now

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

  // --- Effect for checking contrast ---
  useEffect(() => {
    // Use a try-catch as get-contrast might throw errors on invalid color formats
    try {
      const ratio = contrast.ratio(titleTextColor, backgroundColor);
      const passes = contrast.score(titleTextColor, backgroundColor) !== 'F'; // Fails AA and AAA

      setContrastRatio(ratio);
      setPassesContrastCheck(passes);
      // console.log(`Contrast Check: ${titleTextColor} on ${backgroundColor} = ${ratio.toFixed(2)}, Passes AA: ${passes}`);
    } catch (error) {
      console.error("Error calculating contrast:", error);
      // Handle invalid color inputs gracefully, e.g., reset state
      setContrastRatio(null);
      setPassesContrastCheck(null);
    }
  }, [backgroundColor, titleTextColor]); // Re-run when background or text color changes

  // Effect to show toast when URL is saved
  useEffect(() => {
    if (savedUrl) {
      // Show persistent toast with copy button
      toast.custom(
        (t) => (
          <div
            style={{
              background: '#333', // Dark background
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              opacity: t.visible ? 1 : 0,
              transition: 'opacity 300ms ease-in-out',
            }}
          >
            <span>Card saved!</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(savedUrl)
                  .then(() => {
                    toast.success('URL copied!', { id: 'copy-success', duration: 2000 }); // Show success feedback
                    // Optionally dismiss the main toast after copy? Or keep it persistent?
                    // toast.dismiss(t.id); // Example: dismiss main toast after copy
                  })
                  .catch(err => {
                    console.error('Failed to copy: ', err);
                    toast.error('Failed to copy URL', { id: 'copy-error' });
                  });
              }}
              style={{
                marginLeft: 'auto',
                padding: '5px 10px',
                background: '#555',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Copy URL
            </button>
             {/* Optional: Add a close button if persistence isn't strictly required */}
             {/* <button onClick={() => toast.dismiss(t.id)} style={{ ... }}>X</button> */}
          </div>
        ),
        {
          id: 'saved-card-toast', // Use an ID to prevent duplicates if save is clicked quickly
          duration: Infinity, // Make it persistent
        }
      );
    }
  }, [savedUrl]);

  // No effect needed for initial loading as it's handled in useState initializer

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Toaster position="bottom-center" />
      <ControlsPanel
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        isRounded={isRounded}
        setIsRounded={setIsRounded}
        setSavedUrl={setSavedUrl}
        contrastRatio={contrastRatio}
        passesContrastCheck={passesContrastCheck}
      />
      <PreviewPanel
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
        isRounded={isRounded}
        titleColor={titleTextColor}
      />
    </div>
  )
}

export default App
