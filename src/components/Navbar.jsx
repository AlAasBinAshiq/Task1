import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <img className="img" src={logo} alt="" />
          <span className="nav-brand">Edusity</span>
        </div>
        <div className="nav-right">
          <a href="#home">Home</a>
          <a href="#program">Program</a>
          <a href="#about">About us</a>
          <a href="#campus">Campus</a>
          <a href="#testimonials">Testimonials</a>
          <button className="nav-btn"><a href="#contact" >Contact us</a></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
