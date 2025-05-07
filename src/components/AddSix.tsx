import React from 'react';
import addIcon from '../assets/icon-add.png';
import './AddSix.css';

interface AddSixProps {
    onAdd: () => void;
}

const AddSix: React.FC<AddSixProps> = ({ onAdd }) => {
    return (
        <div
            className="add-six-container"
            onClick={onAdd}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onAdd();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label="Add new Six"
        >
            <div className="add-six-icon-container">
                <img src={addIcon} alt="" className="add-six-icon" />
            </div>
        </div>
    );
};

export default AddSix; 