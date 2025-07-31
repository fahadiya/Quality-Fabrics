import React, { useState } from 'react';
import workImage from '../assets/workimage.png';

const AboutSection: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="about" style={{ padding: '40px 10px', display: 'flex', justifyContent: 'center', overflowX: 'hidden' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '0' }}>
                <h2 style={{ fontSize: '40px', textAlign: 'center', color: '#222', marginBottom: '0' }}>
                    QUALITY FABRICS
                </h2>

                <div
                    style={{
                        width: '100%',
                        marginLeft: '30px',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Text Content */}
                    <div style={{ flex: '1 1 500px', margin: '0', padding: '0', width: '50%' }}>
                        <p style={{ fontSize: '20px', lineHeight: 1.8, color: '#444', fontFamily: 'cursive' }}>
                            At <strong>Quality Aluminium & Signage Solutions</strong>, we specialize in delivering
                            high-end aluminium fabrication and creative branding services that transform spaces and
                            elevate businesses. Our expertise includes premium <strong>3D signboards</strong> and
                            custom <strong>signboard work</strong> designed to capture attention and enhance
                            visibility. We provide elegant <strong>glass sticker branding</strong> that adds a
                            unique identity to storefronts and interiors, while our precision in
                            <strong> window works</strong> and <strong>kitchen solutions</strong> blends
                            functionality with modern design. From durable <strong>door installations</strong> to
                            seamless <strong>frameless glass work</strong>, every project reflects our commitment to
                            quality, style, and long-lasting performance. With creative vision and skilled
                            craftsmanship, we help bring your ideas to life — beautifully and professionally.
                        </p>
                    </div>

                    {/* Image Content */}
                    <div style={{ flex: '1 1 400px', textAlign: 'center', marginRight: '50px' }}>
                        <img
                            src={workImage}
                            alt="Our Work"
                            style={{
                                maxWidth: '100%',
                                height: '100%',
                                borderRadius: '10px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: isHovered
                                    ? '0 8px 20px rgba(0,0,0,0.3)'
                                    : '0 4px 20px rgba(0,0,0,0.2)',
                                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
