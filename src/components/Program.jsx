import React from 'react';
import './Program.css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpeg';

function Program() {
  return (
    <section id="program" className="program-section">
      <p className="program-subtitle">OUR PROGRAM</p>
      <h2 className="program-title">What We Offer</h2>

      <div className="program-grid">
        {/* Card 1 */}
        <div className="program-card">
          <img src={img1} alt="Bachelor Degree" />
          <div className="overlay">
            <span className="icon">🎓</span>
            <p>Bachelor's Degree</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="program-card">
          <img src={img2} alt="Masters Degree" />
          <div className="overlay">
            <span className="icon">🏆</span>
            <p>Masters Degree</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="program-card">
          <img src={img3} alt="Post Graduate" />
          <div className="overlay">
            <span className="icon">📚</span>
            <p>Post Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program;
