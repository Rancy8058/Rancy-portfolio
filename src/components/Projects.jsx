import React from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    date: 'February 2026',
    featured: true,
    tagline: 'Desktop AI & Financial Analytics Application',
    description: 'Developed a desktop-based expense management application to track daily expenses, manage monthly budgets, and monitor spending patterns.',
    features: [
      'User authentication',
      'Expense CRUD operations',
      'Recurring expenses',
      'Search/filter functionality',
      'Data import/export',
      'Database backup/restore using SQLite',
      'Interactive analytics',
      'Spending insights',
      'Budget alerts',
      'Machine-learning-based expense prediction',
      'Personalized financial analysis'
    ],
    technologies: [
      'Python',
      'CustomTkinter',
      'SQLite',
      'Matplotlib',
      'Scikit-learn',
      'NumPy',
      'ReportLab',
      'OpenPyXL'
    ],
    githubUrl: 'https://github.com/Rancy8058/Smart-Expense-Tracker'
  },
  {
    num: '02',
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    date: 'October 2025',
    featured: false,
    tagline: 'Interactive 2-Player Algorithmic Console Game',
    description: 'Developed a console-based Tic-Tac-Toe game in Python for two players with an interactive game flow.',
    features: [
      'Player turn management',
      'Move validation',
      'Winning condition detection',
      'Draw detection',
      'Clear board display',
      'Game-status messages'
    ],
    technologies: ['Python'],
    githubUrl: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-badge">Featured Software</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered applications showcasing algorithmic logic, custom GUI development, SQLite databases, and machine learning models.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className={`project-card reveal-item stagger-${idx + 1}`}>
              <div className="project-card-header">
                <div className="project-num-date">
                  <span className="project-num-badge">{project.num}</span>
                  <span className="project-date-chip">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {project.date}
                  </span>
                </div>

                {project.featured && (
                  <span className="featured-pill">Featured Project</span>
                )}
              </div>

              <div className="project-title-block">
                <span className="project-tagline">{project.tagline}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-features-container">
                <h4 className="features-heading">Core Capabilities & Architecture:</h4>
                <ul className="features-grid-list">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <div className="feature-check-wrap">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-card-footer">
                <div className="tech-tags-wrapper">
                  <span className="tech-heading-label">Tech Stack:</span>
                  <div className="tech-pill-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions-row">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm project-cta-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>View on GitHub</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  ) : (
                    <div className="console-indicator-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                      </svg>
                      <span>Python Terminal Application</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
