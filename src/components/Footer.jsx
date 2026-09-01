import React from 'react';
import { IconGithub, IconLinkedin, IconMail } from './Icons';

export const Footer = () => {
  const currentYear = 2026;

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#home" onClick={scrollToTop} className="brand-logo" aria-label="Rancy Home">
              <span className="brand-badge">&lt;R /&gt;</span>
              <span className="brand-name">Rancy</span>
            </a>
            <p className="footer-brand-sub">
              B.Tech CSE (AI/ML) Student | Aspiring Software Developer
            </p>
            <p className="footer-bio-short">
              Passionate about software development, AI/ML problem solving, and building practical digital solutions.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-social-text">Feel free to connect or drop a message anytime.</p>
            <div className="footer-social-icons">
              <a
                href="https://github.com/Rancy8058"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <IconGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rancy032/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedin size={18} />
              </a>

              <a
                href="mailto:rancybudgujjar8058@gmail.com"
                className="footer-social-btn"
                aria-label="Send Email"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Divider & Copyright */}
        <div className="footer-bottom-row">
          <div className="footer-divider" />
          <div className="footer-bottom-content">
            <p className="copyright-text">
              &copy; {currentYear} Rancy. All rights reserved.
            </p>
            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top">
              <span>Back to top</span>
              &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
