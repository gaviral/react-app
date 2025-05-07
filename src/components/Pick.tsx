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
    positionClasses?: string; // Added prop for positional classes
}

const Pick: React.FC<PickProps> = ({ onAdd, name, imageUrl, onDelete, positionClasses }) => {
    // For now, still showing the add icon placeholder if there's no image.
    // In the next step, we'll use name and imageUrl to display the image and tooltip.
    const hasPickData = imageUrl && name;
    const containerClasses = `pick-container ${positionClasses || ''} ${hasPickData ? 'has-data' : 'placeholder add-pick-placeholder'}`.trim();

    if (hasPickData) {
        // TODO: In next step, display image here using imageUrl
        // and use name for tooltip/overlay.
        // For now, just show a simple text to indicate data is present.
        return (
            <div className={containerClasses} title={name}>
                <img src={imageUrl} alt={name} className="pick-image" />
                {onDelete && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="icon-button delete-pick-button"
                        aria-label={name ? `Delete pick: ${name}` : "Delete pick"}
                    >
                        <img
                            src={deleteIcon}
                            alt="" // Alt text redundant
                            className="delete-icon"
                        />
                    </button>
                )}
                <div className="pick-name-overlay">{name}</div>
            </div>
        );
    }

    // If no imageUrl, show the add placeholder
    return (
        <div
            className={containerClasses}
            onClick={onAdd}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onAdd) {
                    e.preventDefault(); // Prevent scrolling on spacebar
                    onAdd();
                }
            }}
            role="button"
            tabIndex={0} // Make it focusable
            aria-label="Add new pick"
            style={{ cursor: onAdd ? 'pointer' : 'default' }}
        >
            <div className="add-icon-container">
                <img src={addIcon} alt="" className="add-icon" /> {/* Alt text redundant */}
            </div>
        </div>
    );
};

export default Pick; 