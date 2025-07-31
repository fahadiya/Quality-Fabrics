import React from "react";
import './App.css';
import Header from "./components/Header";
import BackgroundSection from "./components/backgroundSection";
import AboutSection from "./components/AboutSection";
import OurServiceSection from "./components/OurServiceSection";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <BackgroundSection imageUrl="/images/frameless-glass-work.jpg">
        <div className="hero-content">
          <h1>--Quality You Can Trust--</h1>
          {/* <p>This section has a reusable background!</p> */}
        </div>
      </BackgroundSection>

      <main>
        <AboutSection />
        <OurServiceSection />
      </main>
    </>
  );
};

export default App;
