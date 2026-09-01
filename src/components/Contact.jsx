import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  IconMail, 
  IconPhone, 
  IconLinkedin, 
  IconGithub, 
  IconSend, 
  IconSparkles,
  IconCheck,
  IconExternalLink
} from './Icons';

export const Contact = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger safe client-side mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:rancybudgujjar8058@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contactCards = [
    {
      title: 'Email Address',
      value: 'rancybudgujjar8058@gmail.com',
      href: 'mailto:rancybudgujjar8058@gmail.com',
      icon: <IconMail size={22} />,
      actionText: 'Send Email',
      color: '#6C5CE7'
    },
    {
      title: 'Phone Number',
      value: '+91 9050803098',
      href: 'tel:+919050803098',
      icon: <IconPhone size={22} />,
      actionText: 'Call Directly',
      color: '#38BDF8'
    },
    {
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/rancy032',
      href: 'https://www.linkedin.com/in/rancy032/',
      icon: <IconLinkedin size={22} />,
      actionText: 'View Profile',
      isExternal: true,
      color: '#7C6FF2'
    },
    {
      title: 'GitHub Profile',
      value: 'github.com/Rancy8058',
      href: 'https://github.com/Rancy8058',
      icon: <IconGithub size={22} />,
      actionText: 'View Repositories',
      isExternal: true,
      color: '#A855F7'
    }
  ];

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header reveal-item ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project collaboration, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-cards-column">
            {contactCards.map((card, idx) => (
              <a
                key={card.title}
                href={card.href}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noopener noreferrer' : undefined}
                className={`contact-info-card glass-card reveal-item delay-${idx + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="contact-card-icon-box" style={{ borderColor: card.color, color: card.color }}>
                  {card.icon}
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">{card.title}</span>
                  <strong className="contact-card-value">{card.value}</strong>
                  <span className="contact-card-action">
                    {card.actionText} {card.isExternal ? <IconExternalLink size={12} /> : '&rarr;'}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className={`contact-form-column glass-card reveal-item delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="form-heading">Send a Direct Message</h3>
            <p className="form-description">
              Fill in your details below to send an email inquiry directly to my inbox.
            </p>

            {isSubmitted && (
              <div className="form-success-banner">
                <IconCheck size={18} />
                <span>Preparing your default email app to deliver the message...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <span>Send Message</span>
                <IconSend size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
