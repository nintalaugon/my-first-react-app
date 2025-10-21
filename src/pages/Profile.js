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
         I’m passionate about designing and developing beautiful, user-centered interfaces that bring ideas to life. My focus is on crafting smooth digital experiences through clean design, responsive layouts, and intuitive user flows. I enjoy transforming complex concepts into simple, elegant, and interactive web designs that people love to use.
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
