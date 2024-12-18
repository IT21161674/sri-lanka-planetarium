import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    if (language === "sinhala") {
      navigate("/sinhala");
    } else if (language === "tamil") {
      navigate("/tamil");
    } else if (language === "english") {
      navigate("/english");
    }
  };

  return (
    <div className="welcome-page">
      {/* Container for the logo and flag */}
      <div className="logo-flag-container">
        {/* National logo */}
        <img src="national-logo.png" alt="National Logo" className="national-logo" />
        
        {/* National flag */}
        <img src="national-flag.png" alt="National Flag" className="national-flag" />
      </div>
      
      {/* Background video */}
      <video autoPlay loop muted>
        <source src="/moving-stars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Greetings in all three languages */}
      <h1>ශ්‍රී ලංකා ග්‍රහලෝකාගාරය වෙත ඔබව සාදරයෙන් පිළිගනිමු!</h1>
      <h1>இலங்கை கோளரங்கத்திற்கு வரவேற்கிறோம்!</h1>
      <h1>Welcome to the Sri Lanka Planetarium!</h1>
      
      {/* Language selection buttons */}
      <div className="language-selection">
        <button onClick={() => handleLanguageSelect("sinhala")}>සිංහල</button>
        <button onClick={() => handleLanguageSelect("tamil")}>தமிழ்</button>
        <button onClick={() => handleLanguageSelect("english")}>English</button>
      </div>
    </div>
  );
};

export default WelcomePage;
