'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './contact.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <section className="hero contact-hero">
        <div className="hero-content">
          <h1>Contact Me</h1>
          <p>Let's discuss your next project</p>
        </div>
      </section>

      <main className="contact-section" id="main">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <div className="profile-image-container">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E35AQESDx-L7JXI8Q/profile-framedphoto-shrink_200_200/B4EZcxZIiPHYAc-/0/1748880361900?e=1753048800&v=beta&t=mWnQcPrPyoB5lnIC3VCl6j1zIX-vNDKeiY7cgLiJFo0"
                  alt="Christopher Belgrave, Senior Project Manager"
                  className="profile-image"
                  loading="lazy"
                  decoding="async"
                  width="180"
                  height="180"
                />
              </div>
              <h2>Get In Touch</h2>
              <p>
                I'm always interested in hearing about new projects and opportunities. Whether you have a question about my work or want to discuss a potential collaboration, feel free to reach out.
              </p>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:chrisbelgrave@gmail.com">chrisbelgrave@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+447912360075">+44&nbsp;79123&nbsp;60075</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>London, United Kingdom</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </div>
                <div className="info-content">
                  <h3>LinkedIn</h3>
                  <p>
                    <a href="https://www.linkedin.com/in/chrisbelgrave/" target="_blank" rel="noopener">
                      linkedin.com/in/chrisbelgrave
                    </a>
                  </p>
                </div>
              </div>
              <div className="social-links-large">
                <a href="https://www.linkedin.com/in/chrisbelgrave/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn Profile">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <h2>Send Me a Message</h2>
              <form id="contactForm" noValidate onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn primary-btn form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Looking for My Work?</h2>
          <p>Check out my showreel and experience to see what I can bring to your project.</p>
          <div className="cta-buttons">
            <Link href="/" className="btn primary-btn">
              View Showreel
            </Link>
            <Link href="/about" className="btn secondary-btn">
              About Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
