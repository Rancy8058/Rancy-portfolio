import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { IconGraduationCap, IconMapPin, IconCalendar, IconSparkles, IconCheck } from './Icons';

export const About = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [imgLoaded, setImgLoaded] = useState(false);

  const educationData = [
    {
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      specialization: 'Specialization in Artificial Intelligence & Machine Learning',
      metricLabel: 'CGPA',
      metricValue: '8.21',
      period: '2nd Year (Ongoing)',
      current: true
    },
    {
      institution: 'Star Way Sr. Sec. School',
      location: 'Yamuna Nagar, Haryana',
      degree: 'Intermediate (Senior Secondary)',
      specialization: 'Science Stream (Physics, Chemistry, Mathematics)',
      metricLabel: 'Percentage',
      metricValue: '93.6%',
      period: 'Completed',
      current: false
    },
    {
      institution: 'Star Way Sr. Sec. School',
      location: 'Yamuna Nagar, Haryana',
      degree: 'Matriculation (Secondary School)',
      specialization: 'Core Academic Curriculum',
      metricLabel: 'Percentage',
      metricValue: '93.6%',
      period: 'Completed',
      current: false
    }
  ];

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container about-container">
        {/* Section Header */}
        <div className={`section-header reveal-item ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Discover</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know my academic background, technical focus, and passion for technology.
          </p>
        </div>

        {/* Main About Overview: Profile Photo Beside Content */}
        <div className={`about-split-layout reveal-item delay-1 ${isVisible ? 'is-visible' : ''}`}>
          {/* Left Column: About Profile Image */}
          <div className="about-image-column">
            <div className="about-photo-wrapper">
              <div className="about-photo-glow" />
              <div className="about-photo-frame">
                <img
                  src="/resume/images/rancy-profile.jpg"
                  alt="Rancy - About Me"
                  className={`about-photo-img ${imgLoaded ? 'loaded' : ''}`}
                  onLoad={() => setImgLoaded(true)}
                />
                <div className="about-photo-overlay">
                  <span className="about-photo-name">Rancy</span>
                  <span className="about-photo-role">B.Tech CSE (AI/ML)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Information Cards */}
          <div className="about-text-column glass-card">
            <div className="bio-glow-border" />
            <div className="bio-content-wrapper">
              <h3 className="about-card-heading">Engineering &amp; AI/ML Aspirations</h3>
              <p className="about-bio-text">
                I am a second-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. I am passionate about software development, problem-solving, and learning new technologies. I enjoy building practical projects using Python and exploring concepts related to computer science and AI/ML.
              </p>

              <div className="about-highlights-grid">
                <div className="highlight-pill">
                  <span className="pill-dot"></span>
                  <div className="pill-text-wrap">
                    <span className="pill-title">Focus:</span>
                    <span className="pill-value">AI/ML &amp; Software Dev</span>
                  </div>
                </div>
                <div className="highlight-pill">
                  <span className="pill-dot"></span>
                  <div className="pill-text-wrap">
                    <span className="pill-title">Academic Standing:</span>
                    <span className="pill-value">8.21 CGPA</span>
                  </div>
                </div>
                <div className="highlight-pill">
                  <span className="pill-dot"></span>
                  <div className="pill-text-wrap">
                    <span className="pill-title">University:</span>
                    <span className="pill-value">Lovely Professional University</span>
                  </div>
                </div>
                <div className="highlight-pill">
                  <span className="pill-dot"></span>
                  <div className="pill-text-wrap">
                    <span className="pill-title">Location:</span>
                    <span className="pill-value">Phagwara, Punjab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Subsection (Placed directly inside About) */}
        <div className="education-subsection">
          <div className={`education-header reveal-item delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="edu-icon-badge">
              <IconGraduationCap size={24} />
            </div>
            <h3 className="education-title">
              Academic <span className="gradient-text">Education</span>
            </h3>
            <p className="education-sub">
              A solid foundation in computer science, mathematics, and analytical problem-solving.
            </p>
          </div>

          <div className="education-timeline">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`education-card glass-card reveal-item delay-${index + 2} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="edu-timeline-dot">
                  <div className="dot-inner" />
                </div>

                <div className="edu-card-body">
                  <div className="edu-top-row">
                    <div className="edu-main-info">
                      <h4 className="edu-institution">{item.institution}</h4>
                      <div className="edu-meta-items">
                        <span className="edu-meta-item">
                          <IconMapPin size={14} />
                          {item.location}
                        </span>
                        <span className="edu-meta-item">
                          <IconCalendar size={14} />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="edu-score-badge">
                      <span className="score-label">{item.metricLabel}</span>
                      <span className="score-number">{item.metricValue}</span>
                    </div>
                  </div>

                  <div className="edu-degree-row">
                    <div className="degree-title">
                      <IconCheck size={16} className="check-icon" />
                      <strong>{item.degree}</strong>
                    </div>
                    {item.specialization && (
                      <p className="degree-specialization">{item.specialization}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
