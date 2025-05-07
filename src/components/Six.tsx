import React, { useState } from 'react';
import editIcon from '../assets/icon-edit.png'; // Assuming this is the path
import Pick from './Pick'; // Import the Pick component

interface SixProps {
    title: string;
}

const Six: React.FC<SixProps> = ({ title: initialTitle }) => {
    const [title, setTitle] = useState(initialTitle);
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(initialTitle);

    const handleEdit = () => {
        setEditValue(title); // Initialize edit input with current title
        setIsEditing(true);
    };

    const handleSave = () => {
        setTitle(editValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Optionally reset editValue to title if needed, or just close
    };

    const handleAddPick = (index: number) => {
        // Placeholder function for adding/editing a pick
        console.log(`Attempting to add/edit pick at index: ${index}`);
        // Later, this will prompt for name and image URL
    };

    return (
        <div className="six-container">
            {isEditing ? (
                <div className="title-edit">
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button> {/* Added Cancel button */}
                </div>
            ) : (
                <div className="title-display">
                    <h2>{title}</h2>
                    <img
                        src={editIcon}
                        alt="Edit Title"
                        onClick={handleEdit}
                        className="edit-icon"
                        style={{ cursor: 'pointer', width: '16px', height: '16px', marginLeft: '8px' }}
                    />
                </div>
            )}
            {/* Placeholder for Picks */}
            <div className="picks-grid">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Pick key={index} onAdd={() => handleAddPick(index)} />
                ))}
            </div>
        </div>
    );
};

export default Six; 