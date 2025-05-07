import React, { useState, useEffect, useRef } from 'react';
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

interface BoosterSettings {
    endDate: string;
    accentColor: string;
    message: string;
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

const LOCAL_STORAGE_KEY = 'countdownBoosterDraft';

const CountdownBooster: React.FC<CountdownBoosterProps> = () => {
    const [endDate, setEndDate] = useState<string>(() => {
        const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedDraft) {
            const settings: BoosterSettings = JSON.parse(savedDraft);
            // Optional: Add validation for saved endDate, e.g., if it's in the past
            if (new Date(settings.endDate) > new Date()) {
                return settings.endDate;
            }
        }
        return calculateDefaultEndDate();
    });

    const [accentColor, setAccentColor] = useState<string>(() => {
        const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedDraft ? JSON.parse(savedDraft).accentColor : '#007bff'; // Default blue
    });

    const [message, setMessage] = useState<string>(() => {
        const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedDraft ? JSON.parse(savedDraft).message : 'Your special offer!'; // Default message
    });

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>('');

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStartOffset = useRef({ x: 0, y: 0 });
    const boosterRef = useRef<HTMLDivElement>(null);

    // Effect for saving to local storage
    useEffect(() => {
        const settings: BoosterSettings = { endDate, accentColor, message };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings));
    }, [endDate, accentColor, message]);

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

    const handleSave = () => {
        const settings: BoosterSettings = { endDate, accentColor, message };
        console.log('Saving settings to server (mock):', settings);
        // Simulate API call
        setTimeout(() => {
            console.log('Server responded: Save successful (mock)');
            setToastMessage('Banner saved successfully!');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        }, 1000);
    };

    const handleCopyLink = () => {
        // In a real app, generate and copy a shareable link/embed code
        const dummyLink = `https://example.com/countdown?endDate=${encodeURIComponent(endDate)}&color=${encodeURIComponent(accentColor)}&message=${encodeURIComponent(message)}`;
        navigator.clipboard.writeText(dummyLink)
            .then(() => {
                setToastMessage('Link copied to clipboard!');
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy link: ', err);
                setToastMessage('Failed to copy link.');
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
            });
    };

    const formatTime = (value: number) => String(value).padStart(2, '0');

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
        setIsDragging(true);
        if (boosterRef.current) {
            const rect = boosterRef.current.getBoundingClientRect();
            dragStartOffset.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false);
        // Ensure clientX/Y are not 0 (can happen if drag is cancelled weirdly)
        if (e.clientX !== 0 || e.clientY !== 0) {
            setPosition({
                x: e.clientX - dragStartOffset.current.x,
                y: e.clientY - dragStartOffset.current.y,
            });
        }
    };

    return (
        <div
            ref={boosterRef}
            className={`countdown-booster ${isDragging ? 'dragging' : ''}`}
            style={{
                borderColor: accentColor,
                position: 'absolute', // Changed to absolute for draggable positioning
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
            }}
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        // onDragOver={(e) => e.preventDefault()} // May be needed if dropping onto specific targets
        >
            <h2 style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>Countdown Booster</h2> {/* Make h2 draggable header-like */}

            <div className="timer-display" style={{ color: timeLeft ? accentColor : undefined }}>
                {timeLeft ? (
                    <>
                        <span style={{ color: accentColor }}>⏰ Sale ends in </span>{
                            timeLeft.days > 0 && <>{`${timeLeft.days}d `}</>}
                        {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
                    </>
                ) : (
                    <span>🎉 Sale has ended!</span>
                )}
            </div>

            {message && (
                <div className="custom-message" style={{ color: accentColor }}>
                    {message}
                </div>
            )}

            {showToast && (
                <div className="toast-notification" aria-live="polite" aria-atomic="true">
                    {toastMessage}
                    {toastMessage === 'Banner saved successfully!' && (
                        <button onClick={handleCopyLink} className="copy-link-button">Copy Link</button>
                    )}
                </div>
            )}

            <div className="controls">
                <div>
                    <label htmlFor="endDate">End Date/Time: </label>
                    <input type="datetime-local" id="endDate" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="accentColor">Accent Color: </label>
                    <input type="color" id="accentColor" name="accentColor" value={accentColor} onChange={e => setAccentColor(e.target.value)} />
                    <small className="contrast-note">Note: Ensure good contrast (WCAG AA ≈ 4.5:1).</small>
                </div>

                <div>
                    <label htmlFor="message">Optional Message (max 60): </label>
                    <input type="text" id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} maxLength={60} />
                </div>

                <div>
                    <button onClick={handleSave}>Save Settings</button>
                </div>
            </div>
        </div>
    );
};

export default CountdownBooster; 