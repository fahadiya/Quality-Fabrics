import React from 'react';
import './BackgroundSection.css';

interface BackgroundSectionProps {
    imageUrl: string;
    children?: React.ReactNode;
    height?: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ imageUrl, children, height = "100vh" }) => {
    return (
        <div
            className="background-section"
            style={{ backgroundImage: `url(${imageUrl})`, height }}
        >
            <div className="background-content">
                {children}
            </div>
        </div>
    );
};

export default BackgroundSection;
