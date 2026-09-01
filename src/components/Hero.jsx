import React, { useEffect, useState } from 'react';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrowRight,
  IconDownload,
  IconSparkles
} from './Icons';

export const Hero = () => {
  const roles = [
    'Aspiring AI/ML Engineer',
    'Aspiring Software Developer',
    'Python Developer',
    'AI/ML Enthusiast'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleLeaving, setRoleLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Current role flies upward
      setRoleLeaving(true);

      // New role enters from below
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleLeaving(false);
      }, 650);
    }, 3200);

    return () => clearInterval(interval);
  }, [roles.length]);

  const handleProjectsClick = (e) => {
    e.preventDefault();

    const target = document.getElementById('projects');

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero-section hero-section-full">
      <div className="container hero-container hero-container-single">

        <div className="hero-content hero-content-center">

          {/* HELLO */}
          <div className="hero-greeting hero-animate hero-greeting-animation">
            <span className="greeting-pill">
              <IconSparkles
                size={16}
                className="sparkle-icon continuous-sparkle"
              />
              <span>Hello, I&apos;m</span>
            </span>
          </div>

          {/* RANCY */}
          <h1 className="hero-name hero-name-continuous">
            <span className="name-gradient">
              Rancy
            </span>
          </h1>

          {/* COURSE */}
          <div className="hero-course-wrap hero-course-animation">
            <h2 className="hero-role-main">
              B.Tech CSE (AI/ML) Student
            </h2>
          </div>

          {/* CONTINUOUS FLYING ROLE */}
          <div className="hero-changing-role-container">
            <div className="role-fly-box">

              <span
                key={currentRoleIndex}
                className={`dynamic-role-text ${roleLeaving
                    ? 'role-flying-out'
                    : 'role-flying-in'
                  }`}
              >
                {roles[currentRoleIndex]}
              </span>

            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="hero-description hero-description-animation">
            Second-year Computer Science and Engineering student
            specializing in AI/ML, passionate about programming,
            problem-solving, and building practical software
            applications.
          </p>

          {/* BUTTONS */}
          <div className="hero-actions hero-actions-animation">

            <a
              href="#projects"
              onClick={handleProjectsClick}
              className="btn btn-primary hero-btn interactive-hover"
            >
              <span>View My Projects</span>
              <IconArrowRight
                size={18}
                className="arrow-move"
              />
            </a>

            <a
              href="/resume/Rancy_Resume.pdf"
              download="Rancy_Resume.pdf"
              className="btn btn-secondary hero-btn interactive-hover"
              aria-label="Download Rancy's Resume"
            >
              <IconDownload size={18} />
              <span>Download Resume</span>
            </a>

          </div>

          {/* SOCIAL */}
          <div className="hero-social-wrapper hero-social-animation">

            <span className="social-label">
              Connect with me:
            </span>

            <div className="social-links-list">

              <a
                href="https://www.linkedin.com/in/rancy032/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn linkedin social-continuous-1"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <IconLinkedin size={20} />
              </a>

              <a
                href="https://github.com/Rancy8058"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn github social-continuous-2"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <IconGithub size={20} />
              </a>

              <a
                href="mailto:rancybudgujjar8058@gmail.com"
                className="social-link-btn email social-continuous-3"
                aria-label="Send Email"
                title="Send Email"
              >
                <IconMail size={20} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};