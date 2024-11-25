import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home-content">
      <div className="hero-section">
        <h1>Discover the World</h1>
        <p>Your journey begins here.</p>
        <p>Explore amazing destinations and create unforgettable memories.</p>
        
      </div>
      <section className="tour-types">
        <br></br>
        <br></br>
        <br></br>

        <h2>Choose Tour Types</h2>
        <div className="tour-grid">
            <button className="tour-card">Adventure Tour</button>
            <button className="tour-card">City Tour</button>
            <button className="tour-card">Beach Holidays</button>

        </div>
        <br></br>

        <div className="tour-grid">

            <button className="tour-card">Camping</button>
            <button className="tour-card">Cultural Events</button>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </section>
    </main>
  );
};

export default Home;
