import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left Logo */}
        <div className="nav-left">
          <img className="img" src={logo} alt="logo" />
          <span className="nav-brand">Edusity</span>
        </div>

        {/* Right Links */}
        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#program" onClick={toggleMenu}>Program</a>
          <a href="#about" onClick={toggleMenu}>About us</a>
          <a href="#campus" onClick={toggleMenu}>Campus</a>
          <a href="#testimonials" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" onClick={toggleMenu} className="nav-btn">Contact us</a>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
