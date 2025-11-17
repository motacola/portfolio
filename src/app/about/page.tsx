"use client";

import React, { useEffect } from 'react';
import { Timeline, TimelineItem } from '@/components/Timeline';
import './about.css';

const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const REVEAL_SELECTOR = '.skill-category, .timeline-item, .client-category, .achievement-item';

const useRevealAnimations = () => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const targets = document.querySelectorAll(REVEAL_SELECTOR);
    if (!targets.length) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' && 'matchMedia' in window
        ? window.matchMedia(MOTION_QUERY).matches
        : false;

    const canAnimate = !prefersReducedMotion && 'IntersectionObserver' in window;

    if (!canAnimate) {
      targets.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    document.body.classList.add('supports-reveal');

    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove('supports-reveal');
    };
  }, []);
};

const AboutPage = () => {
  useRevealAnimations();

  return (
    <>
      <section className="hero about-hero">
        <div className="hero-content">
          <h1>About Me</h1>
          <p>Senior Project Manager / Producer in Advertising</p>
        </div>
      </section>
      <main id="main">
        <section className="about-intro" id="main">
          <div className="container">
            <div className="profile-container">
              <div className="profile-content">
                <h2>Professional Overview</h2>
                <p>
                  With 19 years of experience in the advertising industry, I&apos;ve led transformative projects across EMEA that have enhanced digital innovation and operational efficiency. My expertise spans project management, digital production, and business analysis across luxury fashion, technology, media, and advertising sectors.
                </p>
                <p>
                  I specialize in championing cutting-edge technologies such as AI, AR, 3D, and VFX to drive digital transformation while delivering tangible results that exceed client expectations.
                </p>
                <div className="cta-buttons">
                  <a href="#experience" className="btn primary-btn">
                    See full experience
                  </a>
                  <a href="/cv" className="btn secondary-btn download-cv-btn">
                    View CV
                  </a>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">19</span>
                  <span className="stat-label">Years of Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Major Brands</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Agencies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skills-section">
          <div className="container">
            <h2>Key Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Project Management</h3>
                <ul className="skill-list">
                  <li>Digital Production</li>
                  <li>Agile Methodologies</li>
                  <li>Stakeholder Management</li>
                  <li>Budget Control</li>
                  <li>Risk Management</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Digital Expertise</h3>
                <ul className="skill-list">
                  <li>Artificial Intelligence (AI)</li>
                  <li>AR/VR/3D Technologies</li>
                  <li>Digital Media &amp; Strategy</li>
                  <li>Social Media</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Technical Skills</h3>
                <ul className="skill-list">
                  <li>CRM &amp; Email Campaigns</li>
                  <li>Rich Media Production</li>
                  <li>eCommerce Development</li>
                  <li>UX/UI Design Management</li>
                  <li>Video Production</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools &amp; Platforms</h3>
                <ul className="skill-list">
                  <li>Jira/Confluence</li>
                  <li>Figma/Miro</li>
                  <li>Adobe Creative Suite</li>
                  <li>React Native/Unity</li>
                  <li>HTML5/CSS/JS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="experience-section">
          <div className="container">
            <h2>Professional Experience</h2>
            <Timeline>
              <TimelineItem date="May 2023 – Nov 2023" title="Senior Project Manager EMEA">
                <p>
                  Spearheading high-impact initiatives across the global network to drive innovation, optimise operations, reduce costs, and boost efficiencies. Key responsibilities include:
                </p>
                <ul>
                  <li>Providing oversight on diverse projects spanning AR, video production, AI automation, and more.</li>
                  <li>Managing client relationships and partnerships with leading global brands.</li>
                  <li>Pioneering integration of cutting-edge technologies like generative AI, AR, 3D, VFX, and Adobe workflows.</li>
                  <li>Leading offshore team setup and AI workflow automation for operational efficiency.</li>
                  <li>Onboarding of newly partnered agency Threedium on AR projects for L&apos;Oreal/Maybelline.</li>
                  <li>Heading business transformation activities including virtual studio, prompt training and workflow automation.</li>
                  <li>Conducting performance analysis to inform strategies.</li>
                  <li>Fostering collaboration across the global IPG network agencies.</li>
                </ul>
              </TimelineItem>
              <TimelineItem date="Dec 2021 – Oct 2022" title="Senior Project Manager, Marketing &amp; Growth" company="WPP | OpenX">
                <p>
                  Project managing end to end Global charters integrated &amp; digital for The Coca-Cola Company (TCCC) various IPs on Sprite, Fanta &amp; emerging alcoholic RTD’s Jack &amp; Coke, Lemon Dou, Topo Chico driving integrated creative delivery across WPP owned agencies(Ogilvy, AKQA, David, Grey, Wunderman Thomson, VML Y&amp;R, Havas, Mediacom etc) working in the OpenX agency team format.
                </p>
              </TimelineItem>
              <TimelineItem date="Oct 2021 – Jan 2022" title="Project manager" company="Trailer Farm">
                <p>
                  Worked with 3D, Unreal, Unity, Maya, gaming engines, project planning using ClickUp budgets, briefs, &apos;A Quiet Place&apos; video game trailer, Marvelous Games Rune Factory 5 for game publishers &amp; AAA game studios managing teams consisting of creatives, developers, video editor and 3D artists. Producing Voiceovers with VO artists &amp; client facing.
                </p>
              </TimelineItem>
              <TimelineItem date="Jun 2021 – Oct 2021" title="Senior Project manager" company="RG/A">
                <p>
                  Allianz project management - RACI, timing plans, UX/UI design, Confluence setup, Figma, Miro, daily stand-ups, budgets &amp; SOWs.
                </p>
              </TimelineItem>
              <TimelineItem date="Dec 2020 – Feb 2021" title="Business Analyst/Product Owner" company="Sullivan and Stanley">
                <p>
                  I gathered tech and business requirements from potential partners to build an Omnichannel tech stack, including CDP , CRM, CM, etc. The tech stack is for a confidential project at a dominant company, and it evaluates mission-critical information. Further details are unavailable due to an NDA.
                </p>
              </TimelineItem>
              <TimelineItem date="Mar 2020 – Jun 2020" title="Business analyst/PO" company="Critical Mass">
                <p>
                  For Mitsubishi, I implemented cookie management for GDPR compliance on their EU websites, wrote user stories for a custom Google Tag Manager, and collaborated with third-party solutions. I also worked closely with the Dev and PM teams on two-week sprints in an agile environment.
                </p>
              </TimelineItem>
              <TimelineItem date="Jul 2019 – Nov 2019" title="Product Manager" company="Sennep">
                <p>
                  I developed a mobile cross-platform app with Roli that works with their LED electronic keyboard. The Agile Scrum framework was used for FullStack development with JS React Native, Unity, and C++. I worked closely with the API platform team, QA team, and UI/UX design teams. We delivered releases in two-week Agile sprints.
                  <a href="https://playlumi.com" target="_blank" rel="noopener noreferrer">
                    https://playlumi.com
                  </a>
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </section>
        <section className="clients-section">
          <div className="container">
            <h2>Notable Clients</h2>
            <div className="client-categories">
              <div className="client-category">
                <h3>Luxury &amp; Fashion</h3>
                <div className="client-list">
                  <span>Jimmy Choo</span>
                  <span>Burberry</span>
                  <span>Dolce &amp; Gabbana</span>
                  <span>Patek Philippe</span>
                  <span>Diesel</span>
                  <span>Dunhill</span>
                </div>
              </div>
              <div className="client-category">
                <h3>Technology &amp; Media</h3>
                <div className="client-list">
                  <span>Microsoft/Skype</span>
                  <span>BBC</span>
                  <span>UKTV</span>
                  <span>BT</span>
                  <span>Mitsubishi</span>
                  <span>Roli</span>
                </div>
              </div>
              <div className="client-category">
                <h3>Consumer Goods</h3>
                <div className="client-list">
                  <span>Coca-Cola</span>
                  <span>L&apos;Oréal</span>
                  <span>Maybelline</span>
                  <span>Vauxhall</span>
                  <span>Galaxy</span>
                  <span>Sainsbury&apos;s</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="achievements-section">
          <div className="container">
            <h2>Key Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="fas fa-vr-cardboard"></i>
                </div>
                <h3>AR Gaming Innovation</h3>
                <p>Led the development of Maybelline&apos;s ChromaVerse AR game, setting new standards for interactive brand experiences in the beauty industry.</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>AI Implementation</h3>
                <p>Pioneered AI workflow automation strategies that reduced production time by 40% while maintaining creative quality standards.</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Team Leadership</h3>
                <p>Established and managed offshore production teams, creating efficient workflows that saved clients over £500K annually.</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Global Campaign Management</h3>
                <p>Successfully delivered multi-market campaigns for Coca-Cola brands across 20+ countries, ensuring consistent brand messaging and local relevance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
