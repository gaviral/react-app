import React, { useState } from 'react';
import editIcon from '../assets/icon-edit.png'; // Assuming this is the path
import Pick from './Pick'; // Import the Pick component

// Define the structure for a Pick
interface PickData {
    name: string;
    imageUrl: string;
}

interface SixProps {
    title: string;
}

const Six: React.FC<SixProps> = ({ title: initialTitle }) => {
    const [title, setTitle] = useState(initialTitle);
    const [isEditingTitle, setIsEditingTitle] = useState(false); // Renamed for clarity
    const [editTitleValue, setEditTitleValue] = useState(initialTitle); // Renamed for clarity

    // State for the 6 picks, can be PickData or null if empty
    const [picks, setPicks] = useState<(PickData | null)[]>(Array(6).fill(null));

    const handleEditTitle = () => { // Renamed for clarity
        setEditTitleValue(title);
        setIsEditingTitle(true);
    };

    const handleSaveTitle = () => { // Renamed for clarity
        setTitle(editTitleValue);
        setIsEditingTitle(false);
    };

    const handleCancelEditTitle = () => { // Renamed for clarity
        setIsEditingTitle(false);
    };

    const handleAddPick = (index: number) => {
        const name = window.prompt("Enter pick name:");
        if (!name) return; // User cancelled or entered empty name

        const imageUrl = window.prompt("Enter pick image URL:");
        if (!imageUrl) return; // User cancelled or entered empty URL

        const newPicks = [...picks];
        newPicks[index] = { name, imageUrl };
        setPicks(newPicks);
        console.log(`Added pick at index ${index}:`, newPicks[index]);
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
                        key={index}
                        onAdd={() => handleAddPick(index)}
                        name={pickData?.name}
                        imageUrl={pickData?.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Six; 