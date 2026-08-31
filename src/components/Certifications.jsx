import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Introduction to Python',
    provider: 'Infosys Springboard',
    date: 'January 2026',
    certificateUrl: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012664745277808640481_shared/1-daf6c156-1da2-49ab-b032-ff117f13a83d.pdf',
    topic: 'Python Programming'
  },
  {
    title: 'Introduction to Artificial Intelligence',
    provider: 'Infosys Springboard',
    date: 'March 2026',
    certificateUrl: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_8840337130015322000_shared/62a5b47c-92e6-43f6-9960-1caf0fe9b5fb.pdf',
    topic: 'AI Foundations & Concepts'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper certifications-section">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-badge">Verified Credentials</span>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications issued by Infosys Springboard validating practical programming and artificial intelligence proficiency.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className={`cert-card reveal-item stagger-${index + 1}`}>
              <div className="cert-top-row">
                <div className="cert-icon-container">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <span className="cert-date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {cert.date}
                </span>
              </div>

              <div className="cert-body">
                <span className="cert-provider-tag">{cert.provider}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-domain-info">Domain: <strong>{cert.topic}</strong></p>
              </div>

              <div className="cert-footer">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm cert-action-btn"
                >
                  <span>View Certificate</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
