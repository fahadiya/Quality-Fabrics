import React from "react";
import CardButton from "./ServiceCard";
// import signboard from "../assets/3d-signboard2.jpg";

const OurServiceSection: React.FC = () => (
    <section id="about" style={{ padding: '0px 10px', display: 'flex', justifyContent: 'center', overflowX: 'hidden' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '0' }}>
            <h2 style={{ fontSize: '40px', textAlign: 'center', color: '#222', marginBottom: '0' }}>
                SERVICE GALLARY
            </h2>
            <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }}>
                <CardButton
                    image="/images/3dsignboard2.jpg"
                    title="3D SIGNBOARD"
                />
                <CardButton
                    image="/images/3dsignboard2.jpg"
                    title="3D SIGNBOARD"
                />
                <CardButton
                    image="/images/3dsignboard2.jpg"
                    title="3D SIGNBOARD"
                />
            </div>
            <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }}>
                <CardButton
                    image="/images/3dsignboard2.jpg"
                    title="3D SIGNBOARD"
                />
                <CardButton
                    image="/images/3dsignboard2.jpg"
                    title="3D SIGNBOARD"
                />
                <CardButton
                    image="/images/3dsignboard2.jpg"
                    title="3D SIGNBOARD"
                />
            </div>

        </div>
    </section>
)
export default OurServiceSection;