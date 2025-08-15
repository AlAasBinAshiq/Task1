import React, { useRef, useState } from "react";
import "./About.css";
import uniVideo from "../assets/about.mp4"; 

function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Video Card */}
        <div className="about-card">
          <video ref={videoRef} src={uniVideo} controls={isPlaying} />
          {!isPlaying && (
            <button className="play-btn" onClick={handlePlay}>
              ▶ Play Video
            </button>
          )}
        </div>

        {/* Right Text */}
        <div className="about-text">
          <h2>ABOUT UNIVERSITY</h2>
          <h3>Nurturing Tomorrow's Leaders Today</h3>
          <p>
            Embark on a transformative educational journey with our university's comprehensive
            education programs. Our cutting-edge curriculum is designed to empower students with
            the knowledge, skills, and experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs
            prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader,
            our diverse range of programs offers the perfect pathway to achieve your goals and unlock
            your full potential in shaping the future of education.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
