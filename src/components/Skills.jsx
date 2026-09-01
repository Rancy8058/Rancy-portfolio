import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  IconCode, 
  IconDatabase, 
  IconTools, 
  IconBrain, 
  IconUsers, 
  IconSparkles 
} from './Icons';

export const Skills = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <IconCode size={22} />,
      color: '#6C5CE7',
      description: 'Foundational and modern languages for algorithmic problem solving and development.',
      skills: [
        { name: 'C/C++', tag: 'System & DSA' },
        { name: 'Python', tag: 'Core & AI/ML' },
        { name: 'SQL', tag: 'Data Querying' }
      ]
    },
    {
      title: 'Databases',
      icon: <IconDatabase size={22} />,
      color: '#38BDF8',
      description: 'Relational & NoSQL database management, query design, and local storage.',
      skills: [
        { name: 'PL/SQL', tag: 'Procedural SQL' },
        { name: 'MongoDB', tag: 'Document Store' },
        { name: 'SQLite', tag: 'Embedded DB' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <IconTools size={22} />,
      color: '#7C6FF2',
      description: 'Development environment, version control systems, and coding platforms.',
      skills: [
        { name: 'VS Code', tag: 'IDE' },
        { name: 'Git', tag: 'Version Control' },
        { name: 'GitHub', tag: 'Collaboration' },
        { name: 'HackerRank', tag: 'Problem Solving' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: <IconBrain size={22} />,
      color: '#A855F7',
      description: 'Essential computer science fundamentals and theoretical foundations.',
      skills: [
        { name: 'Data Structures & Algorithms', tag: 'Core' },
        { name: 'OOPS', tag: 'Software Design' },
        { name: 'DBMS', tag: 'Architecture' },
        { name: 'Computer Networks', tag: 'Protocols' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <IconUsers size={22} />,
      color: '#06B6D4',
      description: 'Interpersonal competencies for team success and effective leadership.',
      skills: [
        { name: 'Leadership', tag: 'Initiative' },
        { name: 'Teamwork', tag: 'Collaboration' },
        { name: 'Adaptability', tag: 'Quick Learner' },
        { name: 'Problem-Solving', tag: 'Analytical' },
        { name: 'Time Management', tag: 'Efficiency' }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header reveal-item ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Expertise</span>
          </div>
          <h2 className="section-title">
            Technical &amp; Professional <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, databases, tools, core computer science concepts, and soft skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className={`skill-category-card glass-card reveal-item delay-${(catIndex % 4) + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="skill-card-top">
                <div 
                  className="skill-category-icon-box"
                  style={{ background: `rgba(${category.color === '#6C5CE7' ? '108, 92, 231' : category.color === '#38BDF8' ? '56, 189, 248' : category.color === '#7C6FF2' ? '124, 111, 242' : category.color === '#A855F7' ? '168, 85, 247' : '6, 182, 212'}, 0.15)` }}
                >
                  <span style={{ color: category.color }}>{category.icon}</span>
                </div>
                <div className="skill-category-heading">
                  <h3 className="skill-cat-title">{category.title}</h3>
                  <span className="skill-count-badge">{category.skills.length} competencies</span>
                </div>
              </div>

              <p className="skill-cat-desc">{category.description}</p>

              <div className="skill-chips-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-chip-dot" style={{ backgroundColor: category.color }} />
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className="skill-chip-tag">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
