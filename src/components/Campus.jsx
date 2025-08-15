import React from "react";
import "./Campus.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img2.jpeg";

function Campus() {
  return (
    <section id="campus" className="campus-section">
      <div className="campus-container">
        {/* Headings */}
        <h3 className="campus-subtitle">Gallery</h3>
        <p className="campus-text">Campus Photos</p>

        {/* Image Grid */}
        <div className="campus-grid">
          <div className="campus-card">
            <img src={img1} alt="Campus 1" />
          </div>
          <div className="campus-card">
            <img src={img2} alt="Campus 2" />
          </div>
          <div className="campus-card">
            <img src={img3} alt="Campus 3" />
          </div>
          <div className="campus-card">
            <img src={img4} alt="Campus 4" />
          </div>
        </div>

        {/* See More Button */}
        <button className="see-more-btn">See More →</button>
      </div>
    </section>
  );
}

export default Campus;
