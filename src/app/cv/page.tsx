import React from 'react';
import './cv-pdf.css';

const CVPage = () => {
  return (
    <div className="cv-pdf" id="main">
      <a href="#main-cv-content" className="skip-to-content">
        Skip to Main Content
      </a>
      <div className="cv-header" id="main-cv-content">
        <h1>Christopher Belgrave</h1>
        <p>Senior Project Manager / Producer in Advertising</p>
        <p>
          London, United Kingdom | <a href="mailto:chrisbelgrave@gmail.com">chrisbelgrave@gmail.com</a> |{' '}
          <a href="https://www.linkedin.com/in/chrisbelgrave/" target="_blank">
            LinkedIn
          </a>
        </p>
      </div>
      <div className="cv-section">
        <h2>Professional Summary</h2>
        <p>
          Experienced Project Manager/Producer with over 15 years in the advertising industry, specializing in digital innovation and operational efficiency. Expert in managing relationships with global brands and championing cutting-edge technologies such as AI, AR, 3D, and VFX to drive digital transformation while delivering tangible results that exceed client expectations.
        </p>
      </div>
      <div className="cv-section">
        <h2>Professional Experience</h2>
        <div className="cv-experience">
          <h3>Senior Project Manager EMEA</h3>
          <h4>Craft Worldwide</h4>
          <div className="date">May 2023 - Nov 2023</div>
          <ul>
            <li>Led transformative projects across EMEA, enhancing digital innovation and operational efficiency</li>
            <li>Managed the Maybelline ChromaVerse AR game, setting a standard for interactive brand experiences</li>
            <li>Championed cutting-edge technologies (AI, AR, 3D, VFX) for digital transformation</li>
            <li>Led AI Prompt training workshops</li>
            <li>Streamlined operations through offshore team setup and AI workflow automation</li>
          </ul>
        </div>
        <div className="cv-experience">
          <h3>Product/Project Manager</h3>
          <h4>BELGRAVE DIGITAL LIMITED · Freelance</h4>
          <div className="date">Oct 2011 - May 2023</div>
          <ul>
            <li>Produced and project managed dynamic HTML5 rich media banners/email campaigns for agencies including Bossa NYC, AMV BBDO, Hogarth WW, BBH, Digitas LBi</li>
            <li>Managed high profile client campaigns for Apple, Sainsbury&apos;s, Galaxy Chocolate, BT, Emirates, British Airways, L&apos;Oreal, and Vauxhall</li>
            <li>Led website redesign, CMS and build for gacaribbean.com, uk.mixa.com for L&apos;Oreal &amp; SUV car configurator visualiser for Vauxhall</li>
          </ul>
        </div>
        <div className="cv-experience">
          <h3>Senior Project Manager : OpenX</h3>
          <h4>WPP · Freelance</h4>
          <div className="date">Dec 2021 - Oct 2022</div>
          <ul>
            <li>Led end-to-end project management for global campaigns across The Coca-Cola Company&apos;s portfolio</li>
            <li>Coordinated seamless creative delivery by facilitating collaboration across multiple WPP-owned agencies</li>
          </ul>
        </div>
        <div className="cv-experience">
          <h3>Senior Producer</h3>
          <h4>R/GA · Freelance</h4>
          <div className="date">Jun 2021 - Oct 2021</div>
          <ul>
            <li>Led digital delivery and internal operations for Allianz UX internal redesign project</li>
            <li>Set up Jira/Confluence workflows, SOWs, and daily Agile standups</li>
            <li>Delivered multi-sprint planning using Figma, Miro, and UX design tools</li>
          </ul>
        </div>
        <div className="cv-experience">
          <h3>Product Manager (Freelance)</h3>
          <h4>Sennep</h4>
          <div className="date">Jul 2019 - Mar 2020</div>
          <ul>
            <li>Product managed development and design of Lumi app by Roli for iOS and Android</li>
            <li>Managed React Native and Unity sprints with internal + offshore dev teams</li>
            <li>Oversaw API and UX integration in 2-week agile delivery loops</li>
          </ul>
        </div>
      </div>
      <div className="cv-section">
        <h2>Key Skills</h2>
        <div className="cv-skills">
          <span className="cv-skill">Project Management</span>
          <span className="cv-skill">Digital Production</span>
          <span className="cv-skill">Artificial Intelligence (AI)</span>
          <span className="cv-skill">AR/VR/3D Technologies</span>
          <span className="cv-skill">Digital Media &amp; Strategy</span>
          <span className="cv-skill">Social Media</span>
          <span className="cv-skill">Digital Marketing</span>
          <span className="cv-skill">Agile Methodologies</span>
          <span className="cv-skill">CRM &amp; Email Campaigns</span>
          <span className="cv-skill">Rich Media Production</span>
          <span className="cv-skill">eCommerce Development</span>
          <span className="cv-skill">UX/UI Design Management</span>
          <span className="cv-skill">Video Production</span>
        </div>
      </div>
      <div className="cv-section">
        <h2>Tools &amp; Platforms</h2>
        <div className="cv-skills">
          <span className="cv-skill">Jira/Confluence</span>
          <span className="cv-skill">Figma/Miro</span>
          <span className="cv-skill">Adobe Creative Suite</span>
          <span className="cv-skill">React Native/Unity</span>
          <span className="cv-skill">HTML5/CSS/JS</span>
        </div>
      </div>
      <div className="cv-section">
        <h2>Notable Clients</h2>
        <p>
          <strong>Luxury &amp; Fashion:</strong> Jimmy Choo, Burberry, Dolce &amp; Gabbana, Patek Philippe, Diesel, Dunhill
        </p>
        <p>
          <strong>Technology &amp; Media:</strong> Microsoft/Skype, BBC, UKTV, BT, Mitsubishi, Roli
        </p>
        <p>
          <strong>Consumer Goods:</strong> L&apos;Oréal/Maybelline, Coca-Cola, Unilever, Halifax Bank, Virgin Media, Emirates
        </p>
      </div>
    </div>
  );
};

export default CVPage;
