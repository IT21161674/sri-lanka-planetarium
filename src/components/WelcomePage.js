import React, { useState } from "react";
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Optionally, you can display content in the selected language.
  };

  return (
    <div className="welcome-page">
      {/* Background video */}
      <video autoPlay loop muted>
        <source src="/moving-stars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>Welcome to the Sri Lanka Planetarium!</h1>
      
      <div className="language-selection">
        <button onClick={() => handleLanguageChange("Sinhala")}>සිංහල</button>
        <button onClick={() => handleLanguageChange("Tamil")}>தமிழ்</button>
        <button onClick={() => handleLanguageChange("English")}>English</button>
      </div>
    </div>
  );
};

export default WelcomePage;
