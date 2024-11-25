import React from 'react';
import './Home.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Travel with Compass</div>
      <nav className="navbar">
        <a href="#packages">Packages</a>
        <a href="#hotels">Hotels</a>
        <a href="#transport">Transport</a>
        <a href="#jobs">Jobs</a>
        <a href="#about-us">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
