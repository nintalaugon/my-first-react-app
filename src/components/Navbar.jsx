import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="nav-wrap">
      <nav className="navbar">
        {/* Logo and Brand */}
        <div className="brand">
          <Link to="/" className="logo">N</Link>
        </div>

        {/* Burger menu for mobile */}
        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
        >
          <span /><span /><span />
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${open ? 'show' : ''}`}>
          <li>
            <Link className={isActive('/') ? 'active' : ''} to="/" onClick={() => setOpen(false)}>Profile</Link>
          </li>
          <li>
            <Link className={isActive('/about') ? 'active' : ''} to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link className={isActive('/contact') ? 'active' : ''} to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hero-spacer" />
    </header>
  );
}
