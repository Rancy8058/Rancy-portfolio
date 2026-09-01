import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  IconCertificate, 
  IconAward, 
  IconExternalLink, 
  IconSparkles, 
  IconCalendar,
  IconCheck
} from './Icons';

export const CertificationsAchievements = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const certifications = [
    {
      title: 'Introduction to Python',
      provider: 'Infosys Springboard',
      date: 'January 2026',
      url: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012664745277808640481_shared/1-daf6c156-1da2-49ab-b032-ff117f13a83d.pdf',
      badgeColor: '#6C5CE7'
    },
    {
      title: 'Introduction to Artificial Intelligence',
      provider: 'Infosys Springboard',
      date: 'March 2026',
      url: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_8840337130015322000_shared/62a5b47c-92e6-43f6-9960-1caf0fe9b5fb.pdf',
      badgeColor: '#38BDF8'
    },
    {
      title: 'CSS (Basic) Skill Certification',
      provider: 'HackerRank',
      date: 'November 2025',
      url: 'https://www.hackerrank.com/certificates/5540c7f0d104',
      badgeColor: '#7C6FF2'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Gold Badge in Python',
      highlight: 'HackerRank',
      description: 'Achieved Gold Badge in Python on HackerRank.',
      tag: 'Coding Excellence'
    },
    {
      id: 2,
      title: '100+ Coding Problems Solved',
      highlight: 'Multi-Platform Mastery',
      description: 'Solved 100+ coding Problems on different platforms like LeetCode, GeeksforGeeks, HackerRank etc.',
      tag: 'Problem Solving'
    },
    {
      id: 3,
      title: 'Hackathons & Collaborative Challenges',
      highlight: 'Real-World Innovation',
      description: 'Participated in hackathon and collaborative coding challenges focused on real-world problem solving.',
      tag: 'Team Collaboration'
    }
  ];

  return (
    <section id="certifications" className="section cert-achieve-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header reveal-item ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Credentials &amp; Milestones</span>
          </div>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Industry credentials and competitive problem-solving milestones validating continuous growth.
          </p>
        </div>

        {/* Subsection 1: Certifications */}
        <div className="cert-subsection">
          <div className={`cert-sub-header reveal-item delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="sub-icon-box">
              <IconCertificate size={22} />
            </div>
            <div>
              <h3 className="sub-heading">Professional Certifications</h3>
              <p className="sub-caption">Verified certificates from industry leaders and evaluation platforms</p>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`cert-card glass-card reveal-item delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="cert-card-top">
                  <div className="cert-icon-wrapper" style={{ borderColor: cert.badgeColor }}>
                    <IconCertificate size={24} style={{ color: cert.badgeColor }} />
                  </div>
                  <span className="cert-provider-badge">{cert.provider}</span>
                </div>

                <div className="cert-card-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-date">
                      <IconCalendar size={14} />
                      {cert.date}
                    </span>
                  </div>
                </div>

                <div className="cert-card-footer">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm cert-btn"
                    aria-label={`View Certificate for ${cert.title}`}
                  >
                    <span>View Certificate</span>
                    <IconExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Achievements (Anchored for navigation) */}
        <div id="achievements" className="achieve-subsection">
          <div className={`cert-sub-header reveal-item delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="sub-icon-box award-badge">
              <IconAward size={22} />
            </div>
            <div>
              <h3 className="sub-heading">Key Achievements</h3>
              <p className="sub-caption">Competitive milestones and problem-solving benchmarks</p>
            </div>
          </div>

          <div className="achieve-grid">
            {achievements.map((achieve, index) => (
              <div 
                key={achieve.id}
                className={`achieve-card glass-card reveal-item delay-${index + 2} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="achieve-number-badge">
                  <span>0{achieve.id}</span>
                </div>

                <div className="achieve-card-body">
                  <div className="achieve-top-tag">
                    <IconCheck size={14} className="achieve-check" />
                    <span>{achieve.tag}</span>
                  </div>
                  <h4 className="achieve-title">{achieve.title}</h4>
                  <p className="achieve-desc">{achieve.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
