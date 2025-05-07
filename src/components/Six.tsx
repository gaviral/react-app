import React, { useState, useEffect } from 'react';
import editIcon from '../assets/icon-edit.png'; // Assuming this is the path
import Pick from './Pick'; // Import the Pick component
import './Six.css'; // Import the CSS file

// Define the structure for a Pick
interface PickData {
    name: string;
    imageUrl: string;
}

interface SixProps {
    id: string; // Added id prop for unique localStorage key
    title: string;
}

const Six: React.FC<SixProps> = ({ id, title: initialTitle }) => {
    const localStorageKey = `sixState-${id}`;

    // Function to load state from localStorage
    const loadState = (): { title: string; picks: (PickData | null)[] } => {
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
                title: storedState.title || initialTitle,
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

    // Effect to save state to localStorage whenever title or picks change
    useEffect(() => {
        try {
            const stateToSave = { title, picks };
            const serializedState = JSON.stringify(stateToSave);
            localStorage.setItem(localStorageKey, serializedState);
        } catch (e) {
            console.warn("Error saving state to localStorage for", id, e);
        }
    }, [title, picks, localStorageKey]);

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
                    <img
                        src={editIcon}
                        alt="Edit Title"
                        onClick={handleEditTitle}
                        className="edit-icon"
                        style={{ cursor: 'pointer', width: '16px', height: '16px', marginLeft: '8px' }}
                    />
                </div>
            )}
            <div className="picks-grid">
                {picks.map((pickData, index) => (
                    <Pick
                        key={`${id}-pick-${index}`} // Ensure unique key for picks too
                        onAdd={() => !pickData && handleAddPick(index)}
                        name={pickData?.name}
                        imageUrl={pickData?.imageUrl}
                        onDelete={() => pickData && handleDeletePick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Six; 