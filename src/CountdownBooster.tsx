import React, { useState } from 'react';
import './CountdownBooster.css'; // We'll create this next

interface CountdownBoosterProps {
  // Props can be added later if needed
}

const CountdownBooster: React.FC<CountdownBoosterProps> = () => {
  const [endDate, setEndDate] = useState<string>('2024-12-31T23:59:59'); // Placeholder
  const [accentColor, setAccentColor] = useState<string>('#FF0000'); // Placeholder
  const [message, setMessage] = useState<string>('Special offer!'); // Placeholder

  return (
    <div className="countdown-booster-skeleton">
      <h2>Countdown Booster (Skeleton)</h2>

      <div className="timer-display-placeholder">
        ⏰ Sale ends in HH:MM:SS
      </div>

      <div className="controls-skeleton">
        <div>
          <label htmlFor="endDate">End Date/Time: </label>
          <input type="datetime-local" id="endDate" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </div>

        <div>
          <label htmlFor="accentColor">Accent Color: </label>
          <input type="color" id="accentColor" name="accentColor" value={accentColor} onChange={e => setAccentColor(e.target.value)} />
          {/* Placeholder for preset colors */}
        </div>

        <div>
          <label htmlFor="message">Optional Message: </label>
          <input type="text" id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} maxLength={60} />
        </div>

        <div>
          <button>Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default CountdownBooster; 