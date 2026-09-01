import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="section-wrapper resume-section">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-badge">Curriculum Vitae</span>
          <h2 className="section-title">
            <span className="text-gradient">Resume</span>
          </h2>
          <p className="section-subtitle">
            Academic qualifications, technical competencies, and engineering project portfolio.
          </p>
        </div>

        <div className="resume-card-glow-wrap reveal-item stagger-1">
          <div className="resume-card">
            <div className="resume-content">
              <div className="resume-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>Professional Profile</span>
              </div>

              <h3 className="resume-heading">Curriculum Vitae</h3>

              <p className="resume-description">
                Comprehensive record of coursework in B.Tech CSE (AI/ML), programming competencies in Python & C/C++, SQLite database systems, and hands-on developer projects.
              </p>

              <div className="resume-highlights-row">
                <div className="resume-highlight-tag">
                  <span className="highlight-dot"></span>
                  <span>B.Tech CSE (AI/ML)</span>
                </div>
                <div className="resume-highlight-tag">
                  <span className="highlight-dot"></span>
                  <span>Python & Core CS</span>
                </div>
                <div className="resume-highlight-tag">
                  <span className="highlight-dot"></span>
                  <span>Lovely Professional University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
