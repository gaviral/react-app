import React from 'react';
import addIcon from '../assets/icon-add.png'; // Assuming path to add icon
import deleteIcon from '../assets/icon-delete.png'; // Import delete icon
import './Pick.css'; // Import the CSS file

interface PickProps {
    // Props will be added later, e.g., for onClick handler
    onAdd?: () => void; // Optional: A function to call when the add icon is clicked
    name?: string;      // New prop for pick's name
    imageUrl?: string;  // New prop for pick's image URL
    onDelete?: () => void; // New prop for delete handler
}

const Pick: React.FC<PickProps> = ({ onAdd, name, imageUrl, onDelete }) => {
    // For now, still showing the add icon placeholder if there's no image.
    // In the next step, we'll use name and imageUrl to display the image and tooltip.
    const hasPickData = imageUrl && name;

    if (hasPickData) {
        // TODO: In next step, display image here using imageUrl
        // and use name for tooltip/overlay.
        // For now, just show a simple text to indicate data is present.
        return (
            <div className="pick-container has-data" title={name}>
                <img src={imageUrl} alt={name} className="pick-image" />
                {onDelete && (
                    <img
                        src={deleteIcon}
                        alt="Delete Pick"
                        className="delete-icon"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent onAdd if wrapped or parent click logic
                            onDelete();
                        }}
                    />
                )}
                {/* TODO: Add overlay for name as per later requirement */}
            </div>
        );
    }

    // If no imageUrl, show the add placeholder
    return (
        <div
            className="pick-container placeholder"
            onClick={onAdd}
            style={{
                cursor: onAdd ? 'pointer' : 'default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img src={addIcon} alt="Add Pick" className="add-icon" />
            {/* Later, this component will also display the pick's image and name */}
        </div>
    );
};

export default Pick; 