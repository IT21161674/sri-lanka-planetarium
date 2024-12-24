import React from "react";
import "../styles/MainPage.css";

const MainPageEnglish = () => {
  return (
    <div className="main-page">
      <div className="top-bar">
        <div className="bar-left">
          <h2>Sri Lanka Planetarium</h2>
          <h2>ශ්‍රී ලංකා ග්‍රහලෝකාගාරය</h2>
          <h2>இலங்கை கோள மண்டலம்</h2>
        </div>
        <div className="bar-right">
          <div className="contact-info">
            <p>Phone: +94 11 123 4567</p>
            <p>Email: info@slplanetarium.lk</p>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
      <header className="main-header">
        <h1>Welcome to the Sri Lanka Planetarium</h1>
      </header>
      <section className="main-content">
        <p>
          Explore the wonders of the universe! Discover our programs, events,
          and exhibits.
        </p>
        <button className="explore-button">Explore Now</button>
      </section>
      <footer className="main-footer">
        <p>© 2024 Sri Lanka Planetarium. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPageEnglish;
