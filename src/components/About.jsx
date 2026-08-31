import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-badge">Get to Know Me</span>
          <h2 className="section-title">
            About <span className="text-gradient">My Journey</span>
          </h2>
          <p className="section-subtitle">
            An overview of my academic foundation, engineering mindset, and passion for artificial intelligence.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="about-card about-narrative-card reveal-item stagger-1">
            <div className="about-card-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Personal Narrative</span>
            </div>
            
            <p className="about-text-content">
              I am a second-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. I am passionate about software development, problem-solving, and learning new technologies. I enjoy building practical projects using Python and exploring concepts related to computer science and AI/ML.
            </p>

            <div className="about-pill-container">
              <div className="about-pill">
                <span className="pill-indicator-dot"></span>
                <span>AI & Machine Learning Focus</span>
              </div>
              <div className="about-pill">
                <span className="pill-indicator-dot"></span>
                <span>Python & Practical Software Development</span>
              </div>
              <div className="about-pill">
                <span className="pill-indicator-dot"></span>
                <span>Algorithmic Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Education Highlight Card */}
          <div className="about-card education-card reveal-item stagger-2">
            <div className="about-card-badge badge-education">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span>Education Highlight</span>
            </div>

            <div className="edu-content-block">
              <span className="edu-year-chip">2nd Year Undergraduate</span>
              <h3 className="edu-program-title">B.Tech CSE (AI/ML)</h3>
              <h4 className="edu-university-name">Lovely Professional University</h4>
              
              <div className="edu-location-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Phagwara, Punjab</span>
              </div>
            </div>

            <div className="edu-specs-box">
              <div className="spec-row">
                <span className="spec-label">Specialization:</span>
                <span className="spec-value text-cyan">Artificial Intelligence & ML</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Current Academic Level:</span>
                <span className="spec-value">2nd Year (Ongoing)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
