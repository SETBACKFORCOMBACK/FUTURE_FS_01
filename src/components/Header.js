import React, { useState } from 'react';

const Header = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(targetId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          Imran<span>.</span>
        </a>
        <button className="nav-toggle" onClick={handleToggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

