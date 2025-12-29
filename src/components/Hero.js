import React from 'react';

const Hero = ({ onNavClick }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(targetId);
    }
  };

  return (
    <section id="home" className="hero container">
      <div className="hero-image">
        <img src="/profile.jpg" alt="Imran Sheik" className="hero-avatar" />
      </div>
      <div className="hero-content">
        <h1>Imran Sheik</h1>
        <h2>AI Enthusiast & Frontend Developer</h2>
        <p className="hero-subtitle">
          Python | C | Web Development | Community Builder in AI
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary" onClick={(e) => handleNavClick(e, 'projects')}>
            View My Work
          </a>
          <a href="#contact" className="btn outline" onClick={(e) => handleNavClick(e, 'contact')}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

