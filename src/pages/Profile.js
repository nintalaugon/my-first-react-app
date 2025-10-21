import React from 'react';
import './Profile.css';
import myPhoto from '../assets/ninin.jpg'; // <-- Inserted your image

export default function Profile() {
  return (
    <div className="profile-container">
      {/* Left Section */}
      <div className="profile-text">
        <h1 className="profile-name">Hi, I'm Niña</h1>
        <p className="profile-description">
         I’m a passionate UI/UX and Front-End Developer dedicated to creating visually appealing and user-focused designs that connect creativity with functionality.
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
