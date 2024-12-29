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
            <p>Phone: +94 11 25 86 499  | Email: info@slplanetarium.lk</p>
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
      <nav className="nav-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#programs">About Us</a></li>
          <li><a href="#events">Services</a></li>
          <li><a href="#exhibits">Courses</a></li>
          <li><a href="#contact">Gallery</a></li>
          <li><a href="#contact">News & Events</a></li>
          <li><a href="#contact">Sky Observing</a></li>
          <li><a href="#contact">Downloads</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
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
