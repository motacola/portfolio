'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './contact.css';
import Icon from '@/components/Icon';

const PROFILE_IMAGE = '/profile.jpg';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState('');

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('Sending…');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': 'contact',
          name,
          email,
          subject,
          message,
          'bot-field': botField,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('Thank you for your message!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setBotField('');
    } catch (error) {
      console.error('Contact submission failed', error);
      setStatus('Sorry, something went wrong. Please try again.');
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
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Christopher Belgrave, Senior Project Manager"
                    className="profile-image"
                    width={180}
                    height={180}
                    priority
                  />
                </div>
                <h2>Get In Touch</h2>
                <p>
                  I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question about my work or want to discuss a potential collaboration, feel free to reach out.
                </p>
                <div className="info-item">
                  <div className="info-icon" aria-hidden="true">
                    <Icon name="email" className="info-icon__symbol" />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:chrisbelgrave@gmail.com">chrisbelgrave@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon" aria-hidden="true">
                    <Icon name="phone" className="info-icon__symbol" />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+447912360075">+44&nbsp;79123&nbsp;60075</a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon" aria-hidden="true">
                    <Icon name="location" className="info-icon__symbol" />
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>London, United Kingdom</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon" aria-hidden="true">
                    <Icon name="linkedin" className="info-icon__symbol" />
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
                    <Icon name="linkedin" className="info-icon__symbol" />
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <h2>Send Me a Message</h2>
                <form
                  id="contactForm"
                  name="contact"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don&apos;t fill this out:{' '}
                      <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
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
                  <button type="submit" className="btn primary-btn form-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                  {status && (
                    <p className="form-status" role="status" aria-live="polite">
                      {status}
                    </p>
                  )}
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
