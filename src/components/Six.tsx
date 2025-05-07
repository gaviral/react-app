import React, { useState } from 'react';
import editIcon from '../assets/icon-edit.png'; // Assuming this is the path

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
                    <div key={index} className="pick-placeholder">
                        +
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Six; 