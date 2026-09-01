import React, { useState, useEffect } from 'react';
import './Hero.css';

const dynamicRoles = [
  "Software Developer",
  "AI/ML Enthusiast",
  "Python Developer",
  "Problem Solver"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typing effect
  useEffect(() => {
    const fullRole = dynamicRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(85);

        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
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
    <section id="home" className="hero-section">
      {/* Subtle Ambient Glow Shapes */}
      <div className="hero-glow-orb hero-glow-purple"></div>
      <div className="hero-glow-orb hero-glow-cyan"></div>
      <div className="hero-grid-pattern"></div>
      
      <div className="container hero-container">
        {/* Left Column: Hero Typography & Actions */}
        <div className="hero-content">
          {/* Step 1: Greeting */}
          <div className="hero-greeting-pill hero-animate-1">
            <span className="pill-dot"></span>
            <span>Hello, I'm</span>
          </div>

          {/* Step 2: Name - Strictly "Rancy" with NO dot/period */}
          <h1 className="hero-name hero-animate-2">
            Rancy
          </h1>

          {/* Step 3: Subtitle & Dynamic Role */}
          <div className="hero-role-wrapper hero-animate-3">
            <span className="hero-role-fixed">B.Tech CSE (AI/ML) Student</span>
            <span className="hero-role-divider">|</span>
            <span className="hero-dynamic-text">
              {currentText}
              <span className="typing-cursor">|</span>
            </span>
          </div>

          {/* Step 4: Description */}
          <p className="hero-intro hero-animate-4">
            Second-year Computer Science and Engineering student specializing in AI/ML, passionate about programming, problem-solving, and building practical software applications.
          </p>

          {/* Step 5: Action Buttons */}
          <div className="hero-cta-group hero-animate-5">
            <a 
              href="#projects" 
              className="btn btn-primary btn-lg hero-btn"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              <span>View My Projects</span>
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a 
              href="#contact" 
              className="btn btn-secondary btn-lg hero-btn"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>Get in Touch</span>
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
              </svg>
            </a>
          </div>

          {/* Step 6: Social Links */}
          <div className="hero-socials hero-animate-5">
            <span className="hero-socials-label">Connect:</span>
            <div className="hero-social-links">
              <a 
                href="https://www.linkedin.com/in/rancy032/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a 
                href="https://github.com/Rancy8058" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Premium AI/ML & Code Developer Visual */}
        <div className="hero-visual-wrapper hero-animate-visual">
          <div className="orbital-ring orbital-ring-outer"></div>
          <div className="orbital-ring orbital-ring-inner"></div>

          {/* Central Glassmorphic Code Console */}
          <div className="dev-console-card">
            <div className="console-top-bar">
              <div className="console-window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="console-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                <span>rancy@ai-ml-workspace: ~/core</span>
              </div>
              <div className="console-status-indicator">
                <span className="pulse-led"></span>
                <span>ACTIVE</span>
              </div>
            </div>

            <div className="console-code-body">
              <div className="code-line">
                <span className="code-num">01</span>
                <span className="code-keyword">import</span> <span className="code-var">torch</span>, <span className="code-var">numpy</span> <span className="code-keyword">as</span> <span className="code-var">np</span>
              </div>
              <div className="code-line">
                <span className="code-num">02</span>
                <span className="code-keyword">from</span> <span className="code-var">neural_core</span> <span className="code-keyword">import</span> <span className="code-class">AdaptiveModel</span>
              </div>
              <div className="code-line">
                <span className="code-num">03</span>
                <span className="code-comment"># Initializing AI/ML Intelligence Pipeline</span>
              </div>
              <div className="code-line">
                <span className="code-num">04</span>
                <span className="code-keyword">class</span> <span className="code-class">EngineerProfile</span>:
              </div>
              <div className="code-line indent">
                <span className="code-num">05</span>
                <span className="code-self">self</span>.developer = <span className="code-string">"Rancy"</span>
              </div>
              <div className="code-line indent">
                <span className="code-num">06</span>
                <span className="code-self">self</span>.focus = [<span className="code-string">"AI/ML"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"DSA"</span>]
              </div>
              <div className="code-line indent">
                <span className="code-num">07</span>
                <span className="code-self">self</span>.status = <span className="code-string">"Ready to Build & Innovate"</span>
              </div>
              <div className="code-line">
                <span className="code-num">08</span>
                <span className="code-func">print</span>(<span className="code-self">self</span>.status)
              </div>
            </div>

            <div className="console-footer-status">
              <div className="status-item">
                <span className="status-label">Runtime:</span>
                <span className="status-val">Python 3.12</span>
              </div>
              <div className="status-item">
                <span className="status-label">Optimization:</span>
                <span className="status-val text-cyan">99.8%</span>
              </div>
            </div>
          </div>

          {/* Floating Orbiting Tech Badges */}
          <div className="floating-badge badge-python">
            <div className="badge-icon-wrap icon-python">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
              </svg>
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">Python</span>
              <span className="badge-sub">Core Lang</span>
            </div>
          </div>

          <div className="floating-badge badge-ai">
            <div className="badge-icon-wrap icon-ai">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-4a2 2 0 0 1-2-2c0-2 2-3 2-5a4 4 0 0 0-4-4z"></path>
              </svg>
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">AI / ML</span>
              <span className="badge-sub">Specialization</span>
            </div>
          </div>

          <div className="floating-badge badge-cpp">
            <div className="badge-icon-wrap icon-cpp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">C / C++</span>
              <span className="badge-sub">DSA & Logic</span>
            </div>
          </div>

          <div className="floating-badge badge-sql">
            <div className="badge-icon-wrap icon-sql">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">SQL</span>
              <span className="badge-sub">Databases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
