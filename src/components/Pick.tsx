import React from 'react';
import addIcon from '../assets/icon-add.png'; // Assuming path to add icon

interface PickProps {
    // Props will be added later, e.g., for onClick handler
    onAdd?: () => void; // Optional: A function to call when the add icon is clicked
}

const Pick: React.FC<PickProps> = ({ onAdd }) => {
    // For now, just a placeholder. Later this will show image or add button.
    // The requirements state "clicking on the + in the placeholder view"
    return (
        <div className="pick-container placeholder" onClick={onAdd} style={{ cursor: onAdd ? 'pointer' : 'default' }}>
            <img src={addIcon} alt="Add Pick" style={{ width: '50%', height: '50%', opacity: 0.7 }} />
            {/* Later, this component will also display the pick's image and name */}
        </div>
    );
};

export default Pick; 