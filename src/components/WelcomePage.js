import React, { useState } from "react";
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      {/* Background video */}
      <video autoPlay loop muted>
        <source src="/moving-stars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Greetings in all three languages */}
      <h1>ශ්‍රී ලංකා ග්‍රහලෝකාගාරය වෙත ඔබව සාදරයෙන් පිළිගනිමු!</h1>
      <h1>இலங்கை கோளரங்கத்திற்கு வரவேற்கிறோம்!</h1>
      <h1>Welcome to the Sri Lanka Planetarium!</h1>
      
      <div className="language-selection">
        <button>සිංහල</button>
        <button>தமிழ்</button>
        <button>English</button>
      </div>
    </div>
  );
};

export default WelcomePage;
