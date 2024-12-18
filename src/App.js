import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import MainPageEnglish from "./components/MainPageEnglish"; // Create this component
import MainPageSinhala from "./components/MainPageSinhala"; // Create this component
import MainPageTamil from "./components/MainPageTamil"; // Create this component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/english" element={<MainPageEnglish />} />
        <Route path="/sinhala" element={<MainPageSinhala />} />
        <Route path="/tamil" element={<MainPageTamil />} />
      </Routes>
    </Router>
  );
};

export default App;
