import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Programming Languages',
    badgeText: 'Core Syntax & Logic',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: ['C/C++', 'Python', 'SQL']
  },
  {
    category: 'Databases',
    badgeText: 'Storage & Querying',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    skills: ['PL/SQL', 'MongoDB', 'SQLite']
  },
  {
    category: 'Tools & Platforms',
    badgeText: 'Developer Workflow',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    skills: ['VS Code', 'Git', 'GitHub', 'HackerRank']
  },
  {
    category: 'Core Concepts',
    badgeText: 'CS Fundamentals',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    skills: ['Data Structures & Algorithms', 'OOPS', 'DBMS', 'Computer Networks']
  },
  {
    category: 'Soft Skills',
    badgeText: 'Professional Competencies',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    skills: ['Leadership', 'Teamwork', 'Adaptability', 'Problem-Solving', 'Time Management']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-badge">Technical Stack</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive breakdown of my programming languages, developer tools, database systems, and core computer science knowledge.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div 
              key={cat.category} 
              className={`skill-category-card card-glow-${idx % 3} reveal-item stagger-${(idx % 5) + 1}`}
            >
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  {cat.icon}
                </div>
                <div className="skill-header-meta">
                  <span className="skill-cat-badge">{cat.badgeText}</span>
                  <h3 className="skill-category-title">{cat.category}</h3>
                </div>
              </div>

              <div className="skill-badges-wrapper">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-chip">
                    <span className="chip-led"></span>
                    <span className="chip-label">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
