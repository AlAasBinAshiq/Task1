import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Program from './components/Program';
import About from './components/About';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />
      <About />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
