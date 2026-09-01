import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  IconFileText, 
  IconDownload, 
  IconExternalLink, 
  IconSparkles, 
  IconCheck 
} from './Icons';

export const Resume = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const resumeUrl = '/resume/Rancy_Resume.pdf';

  const resumeHighlights = [
    { title: 'Education', desc: 'B.Tech CSE (AI/ML) 2nd Year, LPU Punjab (8.21 CGPA)' },
    { title: 'Core Stack', desc: 'Python, C/C++, SQL, PL/SQL, MongoDB, SQLite' },
    { title: 'Projects', desc: 'Smart Expense Tracker (Desktop & ML), Tic-Tac-Toe' },
    { title: 'Certifications', desc: 'Infosys Springboard (Python, AI), HackerRank CSS' }
  ];

  return (
    <section id="resume" className="section resume-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header reveal-item ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive record of my academic qualifications, technical abilities, and engineering projects.
          </p>
        </div>

        {/* Resume Box */}
        <div className={`resume-wrapper glass-card reveal-item delay-1 ${isVisible ? 'is-visible' : ''}`}>
          <div className="resume-glow-ambient" />
          
          <div className="resume-content-layout">
            {/* Left Preview Box */}
            <div className="resume-preview-box">
              <div className="doc-icon-circle">
                <IconFileText size={48} />
              </div>
              <h3 className="preview-name">Rancy</h3>
              <p className="preview-role">B.Tech CSE (AI/ML) &bull; Software Developer</p>
              <div className="preview-badge">PDF Format Document</div>
            </div>

            {/* Right Details & Action Buttons */}
            <div className="resume-details-box">
              <div className="resume-highlights-header">
                <h4 className="resume-sub-title">Quick Profile Highlights:</h4>
              </div>

              <div className="resume-highlights-grid">
                {resumeHighlights.map((item, idx) => (
                  <div key={idx} className="resume-highlight-item">
                    <div className="highlight-check-wrap">
                      <IconCheck size={14} />
                    </div>
                    <div>
                      <strong className="hl-title">{item.title}: </strong>
                      <span className="hl-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="resume-actions-group">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary resume-action-btn"
                  aria-label="View Rancy's Resume in a new tab"
                >
                  <IconExternalLink size={18} />
                  <span>View Resume</span>
                </a>

                <a
                  href={resumeUrl}
                  download="Rancy_Resume.pdf"
                  className="btn btn-secondary resume-action-btn"
                  aria-label="Download Rancy's Resume PDF"
                >
                  <IconDownload size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
