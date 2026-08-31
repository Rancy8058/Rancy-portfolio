import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-gradient-line"></div>
      
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <span className="logo-badge-icon">&lt;/&gt;</span>
              <span className="logo-text">Rancy</span>
            </a>
            <p className="footer-tagline">
              B.Tech CSE (AI/ML) Student | Aspiring Software Developer
            </p>
          </div>

          <div className="footer-quick-nav">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
            <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')}>Certifications</a>
            <a href="#resume" onClick={(e) => handleNavClick(e, '#resume')}>Resume</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </div>

          <div className="footer-social-links">
            <a 
              href="https://github.com/Rancy8058" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/in/rancy032/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a 
              href="mailto:rancybudgujjar8058@gmail.com" 
              className="footer-social-icon"
              aria-label="Email"
              title="Send an Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>

            <button 
              onClick={scrollToTop} 
              className="footer-back-to-top"
              aria-label="Scroll back to top"
              title="Scroll to Top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Rancy | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
