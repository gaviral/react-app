import React, { useState, useEffect } from 'react';
import './CountdownBooster.css'; // We'll create this next

interface CountdownBoosterProps {
  // Props can be added later if needed
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateDefaultEndDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999);
  // Format to YYYY-MM-DDTHH:MM:SS (datetime-local input requires seconds)
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  const hours = String(tomorrow.getHours()).padStart(2, '0');
  const minutes = String(tomorrow.getMinutes()).padStart(2, '0');
  const seconds = String(tomorrow.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

const CountdownBooster: React.FC<CountdownBoosterProps> = () => {
  const [endDate, setEndDate] = useState<string>(calculateDefaultEndDate());
  const [accentColor, setAccentColor] = useState<string>('#FF0000'); // Placeholder
  const [message, setMessage] = useState<string>('Special offer!'); // Placeholder
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return null; // Timer has expired
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    // Initialize timer on mount
    setTimeLeft(calculateTimeLeft(endDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount or when endDate changes
  }, [endDate]); // Rerun effect if endDate changes

  const formatTime = (value: number) => String(value).padStart(2, '0');

  return (
    <div className="countdown-booster">
      <h2>Countdown Booster</h2>

      <div className="timer-display">
        {timeLeft ? (
          <>
            ⏰ Sale ends in {
              timeLeft.days > 0 && <>{`${timeLeft.days}d `}</>
            }
            {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
          </>
        ) : (
          <span>🎉 Sale has ended!</span>
        )}
      </div>

      <div className="controls">
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