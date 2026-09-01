import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  IconGithub, 
  IconExternalLink, 
  IconSparkles, 
  IconCheck, 
  IconCalendar,
  IconCode
} from './Icons';

export const Projects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const projectsData = [
    {
      id: 'smart-expense-tracker',
      title: 'Smart Expense Tracker',
      date: 'February 2026',
      featured: true,
      category: 'Desktop App & Machine Learning',
      description:
        'Developed a desktop-based expense management application to track daily expenses, manage monthly budgets, and monitor spending patterns.',
      features: [
        'User authentication & profile security',
        'Comprehensive Expense CRUD operations',
        'Recurring expenses management',
        'Multi-parameter search and filter functionality',
        'Data import & export capabilities',
        'Database backup & restore using SQLite',
        'Interactive visual analytics & charts',
        'Automated spending insights & budget alerts',
        'Machine-learning-based expense prediction',
        'Personalized financial analysis reports'
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
      id: 'tic-tac-toe',
      title: 'Tic-Tac-Toe',
      date: 'October 2025',
      featured: false,
      category: 'Game Development & Algorithms',
      description:
        'Developed a console-based Tic-Tac-Toe game in Python for two players with an interactive game flow.',
      features: [
        'Structured player turn management',
        'Robust move validation & error handling',
        'Real-time winning condition detection',
        'Automatic draw detection mechanism',
        'Clear, formatted dynamic board display',
        'Interactive game-status & feedback messages'
      ],
      technologies: [
        'Python'
      ],
      githubUrl: null // As strictly instructed: Do NOT invent a GitHub link for this project
    }
  ];

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header reveal-item ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software applications demonstrating Python engineering, algorithmic logic, and AI/ML integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card glass-card reveal-item delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              {/* Project Card Header */}
              <div className="project-card-header">
                <div className="project-badge-row">
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-date">
                    <IconCalendar size={14} />
                    {project.date}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              {/* Key Features List */}
              <div className="project-features-box">
                <h4 className="features-subheading">Key Highlights &amp; Features:</h4>
                <ul className="features-list">
                  {project.features.map((feat, fIndex) => (
                    <li key={fIndex} className="feature-item">
                      <IconCheck size={14} className="feature-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Stack Chips */}
              <div className="project-tech-box">
                <h4 className="tech-subheading">Technologies Used:</h4>
                <div className="tech-chips-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Action Button Footer */}
              <div className="project-card-footer">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-action-btn"
                  >
                    <IconGithub size={18} />
                    <span>View on GitHub</span>
                    <IconExternalLink size={15} />
                  </a>
                ) : (
                  <div className="project-standalone-note">
                    <IconCode size={16} />
                    <span>Console Application &bull; Python Core</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
