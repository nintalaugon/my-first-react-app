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
         As a BSIT student, I’m continuously learning how design and technology work together to shape better user experiences. I value simplicity, purpose, and innovation in every project I create.
        </p>

        <p className="about-description">I specialize in:</p>

        <ul className="about-specialties">
          <li>🎨 <strong>UI/UX Design</strong> – Creating user-friendly layouts and interactive prototypes.</li>
          <li>💻 <strong>Front-End Development</strong> – Building responsive websites using HTML, CSS, JavaScript, and React.</li>
          <li>⚙️ <strong>Design Tools</strong> – Proficient in Figma and Canva.</li>
        </ul>

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
