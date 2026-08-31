import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        text: 'Please fill in all fields before sending.'
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hello Rancy,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    
    window.location.href = `mailto:rancybudgujjar8058@gmail.com?subject=${subject}&body=${body}`;

    setFormStatus({
      type: 'success',
      text: 'Opening your default mail client to send your message'
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a question, collaborative idea, or opportunity? Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-panel reveal-item stagger-1">
            <h3 className="panel-title">Contact Channels</h3>
            <p className="panel-description">
              I am open to technical discussions, student collaborative projects, AI/ML exploration, and software engineering opportunities.
            </p>

            <div className="contact-links-list">
              {/* Email */}
              <a 
                href="mailto:rancybudgujjar8058@gmail.com" 
                className="contact-card-link"
              >
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-text-meta">
                  <span className="contact-label">Email Address</span>
                  <span className="contact-value">rancybudgujjar8058@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+919050803098" 
                className="contact-card-link"
              >
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-text-meta">
                  <span className="contact-label">Phone & WhatsApp</span>
                  <span className="contact-value">+91 9050803098</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/rancy032/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-link"
              >
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="contact-text-meta">
                  <span className="contact-label">LinkedIn Profile</span>
                  <span className="contact-value">linkedin.com/in/rancy032</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Rancy8058" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-link"
              >
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div className="contact-text-meta">
                  <span className="contact-label">GitHub Repository</span>
                  <span className="contact-value">github.com/Rancy8058</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel reveal-item stagger-2">
            <h3 className="panel-title">Send a Direct Message</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {formStatus && (
                <div className={`form-feedback-alert ${formStatus.type === 'error' ? 'alert-error' : 'alert-success'}`}>
                  {formStatus.text}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-lg submit-btn">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
