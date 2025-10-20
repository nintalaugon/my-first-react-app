import React from 'react';
import './Profile.css';
import myPhoto from '../assets/ninin.jpg'; // <-- Inserted your image

export default function Profile() {
  return (
    <div className="profile-container">
      {/* Left Section */}
      <div className="profile-text">
        <h1 className="profile-name">Welcome to My Profile</h1>
        <p className="profile-description">
          I am Niña Talaugon, a driven and aspiring IT professional currently 
          pursuing a Bachelor of Science in Information Technology. I am passionate 
          about technology, innovation, and creating digital solutions that make 
          everyday tasks easier and more efficient. With a positive mindset and a 
          desire to grow, I am continuously developing my skills in programming, 
          design, and information systems.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="profile-image">
        <img
          src={myPhoto}   // ✅ Your image is used here
          alt="Profile"
        />
      </div>
    </div>
  );
}
