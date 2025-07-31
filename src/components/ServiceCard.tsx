import React, { useState } from 'react';

interface CardButtonProps {
    image: string;
    title: string;
    onClick?: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({ image, title, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                border: 'none',
                padding: 0,
                margin: '20px',
                cursor: 'pointer',
                background: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            }}
        >
            <div
                style={{
                    width: '350px',
                    height: '400px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: isHovered
                        ? '0 12px 24px rgba(0, 0, 0, 0.3)'
                        : '0 4px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    transition: 'box-shadow 0.3s ease',
                }}
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                />
                <div
                    style={{
                        padding: '35px',

                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#333',
                        textAlign: 'center',
                    }}
                >
                    {title}
                </div>
            </div>
        </button>
    );
};

export default CardButton;
