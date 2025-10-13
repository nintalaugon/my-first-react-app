import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className="nav-wrap">
      <nav className="navbar">
        <div className="brand" onClick={() => { setActive('Home'); setOpen(false); }}>
          <div className="logo">N</div>
         
        </div>

        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'show' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={active === link ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link);
                  setOpen(false);
                  const el = document.getElementById(link.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="action">
          <button className="cta">Get Started</button>
        </div>
      </nav>

      {/* spacer so page content isn't hidden */}
      <div className="hero-spacer" />
    </header>
  );
}
