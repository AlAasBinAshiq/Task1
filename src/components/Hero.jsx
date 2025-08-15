import React from 'react';
import './Hero.css';
import heroBg from '../assets/bg.jpg'; 

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            We Ensure better education <br /> for a better world
          </h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the knowledge,
            skills, and experiences needed to excel in the dynamic field of education.
          </p>
          <button className="hero-btn">Explore more →</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
