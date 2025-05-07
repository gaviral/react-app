import React, { useState, useEffect, useRef } from 'react';
import editIcon from '../assets/icon-edit.png'; // Assuming this is the path
import Pick from './Pick'; // Import the Pick component
import './Six.css'; // Import the CSS file

// Define the structure for a Pick
interface PickData {
    name: string;
    imageUrl: string;
}

// Test data from the SDLC file
const TEST_DATA: PickData[] = [
    { name: "Red Panda", imageUrl: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1130384453-scaled.jpg" },
    { name: "Axolotl", imageUrl: "https://www.rd.com/wp-content/uploads/2018/05/shutterstock_231680788.jpg" },
    { name: "Serval", imageUrl: "https://www.rd.com/wp-content/uploads/2018/05/shutterstock_327407618.jpg" },
    { name: "Antelope Squirrel", imageUrl: "https://www.rd.com/wp-content/uploads/2018/05/shutterstock_764401411.jpg" },
    { name: "Chevrotain", imageUrl: "https://www.rd.com/wp-content/uploads/2018/05/shutterstock_368014985.jpg" },
    { name: "Sand Cat", imageUrl: "https://www.rd.com/wp-content/uploads/2018/05/shutterstock_717462397.jpg" }
];

interface SixProps {
    id: string; // Added id prop for unique localStorage key
    title: string;
}

// Helper to determine Pick position classes
const getPositionClasses = (index: number): string => {
    let classes = '';
    // Assuming 2 columns
    if (index === 0) classes += ' is-top-left';       // Top-left
    if (index === 1) classes += ' is-top-right';      // Top-right
    // Indices 2 and 3 are middle, no special outer corners
    if (index === 4) classes += ' is-bottom-left';    // Bottom-left
    if (index === 5) classes += ' is-bottom-right';   // Bottom-right
    return classes.trim();
};

const Six: React.FC<SixProps> = ({ id, title: initialTitle }) => {
    const localStorageKey = `sixState-${id}`;
    const isFirstSix = id === 'six-1';
    const isInitialMount = useRef(true);

    // Function to load state from localStorage
    const loadState = (): { title: string; picks: (PickData | null)[] } => {
        // For the first Six, always use the test data regardless of localStorage
        if (isFirstSix) {
            return { title: initialTitle, picks: TEST_DATA };
        }

        try {
            const serializedState = localStorage.getItem(localStorageKey);
            if (serializedState === null) {
                return { title: initialTitle, picks: Array(6).fill(null) };
            }
            const storedState = JSON.parse(serializedState);
            // Ensure picks array is always length 6, even if stored data was malformed/old
            const validPicks = Array(6).fill(null);
            if (Array.isArray(storedState.picks)) {
                for (let i = 0; i < Math.min(storedState.picks.length, 6); i++) {
                    if (storedState.picks[i] && typeof storedState.picks[i].name === 'string' && typeof storedState.picks[i].imageUrl === 'string') {
                        validPicks[i] = storedState.picks[i];
                    }
                }
            }
            return {
                // Always use initialTitle from props
                title: initialTitle,
                picks: validPicks,
            };
        } catch (e) {
            console.warn("Error loading state from localStorage for", id, e);
            return { title: initialTitle, picks: Array(6).fill(null) };
        }
    };

    const [title, setTitle] = useState<string>(() => loadState().title);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [editTitleValue, setEditTitleValue] = useState<string>(""); // Initialize empty, set on edit
    const [picks, setPicks] = useState<(PickData | null)[]>(() => loadState().picks);

    // Clear localStorage for all components on first mount to ensure
    // we respect the initialTitle
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            // Reset localStorage for this Six component
            localStorage.removeItem(localStorageKey);

            // Reset title to match initialTitle
            setTitle(initialTitle);

            // Set data appropriately
            if (isFirstSix) {
                setPicks(TEST_DATA);
            }
        }
    }, [isFirstSix, localStorageKey, initialTitle, id]);

    // Effect to save state to localStorage whenever title or picks change
    useEffect(() => {
        // Skip for first Six if we want it to always use test data
        if (isFirstSix) return;

        try {
            const stateToSave = { title, picks };
            const serializedState = JSON.stringify(stateToSave);
            localStorage.setItem(localStorageKey, serializedState);
        } catch (e) {
            console.warn("Error saving state to localStorage for", id, e);
        }
    }, [title, picks, localStorageKey, isFirstSix, id]);

    const handleEditTitle = () => {
        setEditTitleValue(title);
        setIsEditingTitle(true);
    };

    const handleSaveTitle = () => {
        setTitle(editTitleValue);
        setIsEditingTitle(false);
    };

    const handleCancelEditTitle = () => {
        setIsEditingTitle(false);
    };

    const handleAddPick = (index: number) => {
        const name = window.prompt("Enter pick name:");
        if (!name) return;

        const imageUrl = window.prompt("Enter pick image URL:");
        if (!imageUrl) return;

        const newPicks = [...picks];
        newPicks[index] = { name, imageUrl };
        setPicks(newPicks);
        console.log(`Added pick at index ${index}:`, newPicks[index]);
    };

    const handleDeletePick = (index: number) => {
        const newPicks = [...picks];
        newPicks[index] = null; // Set the pick at the index to null
        setPicks(newPicks);
        console.log(`Deleted pick at index ${index}`);
    };

    return (
        <div className="six-container">
            {isEditingTitle ? (
                <div className="title-edit">
                    <input
                        type="text"
                        value={editTitleValue}
                        onChange={(e) => setEditTitleValue(e.target.value)}
                    />
                    <button onClick={handleSaveTitle}>Save</button>
                    <button onClick={handleCancelEditTitle}>Cancel</button>
                </div>
            ) : (
                <div className="title-display">
                    <h2>{title}</h2>
                    <button
                        onClick={handleEditTitle}
                        className="icon-button edit-title-button"
                        aria-label="Edit title"
                    >
                        <img
                            src={editIcon}
                            alt="" // Alt text is redundant due to aria-label on button
                            className="edit-icon" // Keep class if used for styling img itself
                        />
                    </button>
                </div>
            )}
            <div className="picks-grid">
                {picks.map((pickData, index) => (
                    <Pick
                        key={`${id}-pick-${index}`}
                        onAdd={() => !pickData && handleAddPick(index)}
                        name={pickData?.name}
                        imageUrl={pickData?.imageUrl}
                        onDelete={() => pickData && handleDeletePick(index)}
                        positionClasses={getPositionClasses(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Six; 