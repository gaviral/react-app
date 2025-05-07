import React from 'react';

interface SixProps {
    title: string;
}

const Six: React.FC<SixProps> = ({ title }) => {
    return (
        <div className="six-container">
            <h2>{title}</h2>
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