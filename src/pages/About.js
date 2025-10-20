import React from 'react';
import './About.css';
import myPhoto from '../assets/ninin.jpg'; // usba ang path kung lain

export default function About() {
  return (
    <div className="about-container">
      {/* LEFT SIDE IMAGE */}
      <div className="about-image">
        <img src={myPhoto} alt="About" />
      </div>

      {/* RIGHT SIDE TEXT */}
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I consider myself a dedicated, creative, and goal-oriented BSIT student. I enjoy exploring different areas of IT such as web development, system applications, and cybersecurity. I love learning through hands-on experiences and collaborating with others on projects that challenge my skills and creativity.
          <br /><br />
          My long-term goal is to build a career in the IT industry where I can apply my knowledge, adapt to new technologies, and contribute to meaningful digital solutions. I believe in continuous growth, hard work, and staying curious in everything I do.
        </p>

        <div className="about-icons">
          <i className="fab fa-behance"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
