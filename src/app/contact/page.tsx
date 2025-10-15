'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './contact.css';

const encode = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formDisabled =
    isSubmitting || !name.trim() || !email.trim() || !subject.trim() || !message.trim();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (botField.trim()) {
      form.reset();
      setBotField('');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setStatus('success');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    const formName = form.getAttribute('name') ?? 'contact';
    const payload = encode({
      'form-name': formName,
      name,
      email,
      subject,
      message,
      'bot-field': botField,
    });

    try {
      const action = form.getAttribute('action') || '/';

      const response = await fetch(action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setBotField('');
    } catch (error) {
      console.error('Error submitting contact form', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="hero contact-hero">
        <div className="hero-content">
          <h1>Contact Me</h1>
          <p>Let&apos;s discuss your next project</p>
        </div>
      </section>
      <main>
        <section className="contact-section" id="main">
          <div className="container">
            <div className="contact-container">
              <div className="contact-info">
                <div className="profile-image-container">
                  <div className="profile-avatar" role="img" aria-label="Portrait of Christopher Belgrave">
                    <span aria-hidden="true">CB</span>
                  </div>
                </div>
                <h2>Get In Touch</h2>
                <p>
                  I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question about my work or want to discuss a potential collaboration, feel free to reach out.
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
                      <a href="https://www.linkedin.com/in/chrisbelgrave/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/chrisbelgrave
                      </a>
                    </p>
                  </div>
                </div>
                <div className="social-links-large">
                  <a
                    href="https://www.linkedin.com/in/chrisbelgrave/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <h2>Send Me a Message</h2>
                <form
                  id="contactForm"
                  name="contact"
                  method="POST"
                  action="/"
                  acceptCharset="UTF-8"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="visually-hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:
                      <input
                        name="bot-field"
                        autoComplete="off"
                        value={botField}
                        onChange={(event) => setBotField(event.target.value)}
                      />
                    </label>
                  </p>
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
                  <button
                    type="submit"
                    className="btn primary-btn form-submit-btn"
                    disabled={formDisabled}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="form-status" role="status" aria-live="polite">
                    {status === 'success' && 'Thank you for your message!'}
                    {status === 'error' && 'Sorry, something went wrong. Please try again.'}
                  </p>
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
      </main>
    </>
  );
};

export default ContactPage;
