'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Timeline, TimelineItem, TimelineDecade } from '@/components/Timeline';
import Icon from '@/components/Icon';
import './about.css';

const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const REVEAL_SELECTOR = '.skill-category, .timeline-item, .client-category, .achievement-item';

type ClientEntry = {
  name: string;
  timelineId: string;
  logoSrc: string;
};

type ClientCategory = {
  title: string;
  clients: ClientEntry[];
};

const clientCategories: ClientCategory[] = [
  {
    title: 'Luxury & Beauty',
    clients: [
      { name: "L'Oréal", timelineId: 'experience-craft', logoSrc: '/client-logos/loreal-com.png' },
      { name: 'Maybelline', timelineId: 'experience-craft', logoSrc: '/client-logos/maybelline-com.png' },
      { name: 'Dolce & Gabbana', timelineId: 'experience-hires', logoSrc: '/client-logos/dolcegabbana-com.png' },
      { name: 'Burberry', timelineId: 'experience-burberry', logoSrc: '/client-logos/burberry-com.png' },
      { name: 'Jimmy Choo', timelineId: 'experience-jimmy-choo', logoSrc: '/client-logos/jimmychoo-com.png' },
      { name: 'Diesel', timelineId: 'experience-meri', logoSrc: '/client-logos/diesel-com.png' },
      { name: 'Dunhill', timelineId: 'experience-meri', logoSrc: '/client-logos/dunhill-com.png' },
      { name: 'Patek Philippe', timelineId: 'experience-leagas', logoSrc: '/client-logos/patek-com.png' },
    ],
  },
  {
    title: 'Technology & Media',
    clients: [
      { name: 'Microsoft', timelineId: 'experience-skype', logoSrc: '/client-logos/microsoft-com.png' },
      { name: 'Skype', timelineId: 'experience-skype', logoSrc: '/client-logos/skype-com.png' },
      { name: 'Apple', timelineId: 'experience-belgrave', logoSrc: '/client-logos/apple-com.png' },
      { name: 'BBC', timelineId: 'experience-red-bee', logoSrc: '/client-logos/bbc-com.png' },
      { name: 'UKTV', timelineId: 'experience-red-bee', logoSrc: '/client-logos/uktv-co-uk.png' },
      { name: 'BT', timelineId: 'experience-belgrave', logoSrc: '/client-logos/bt-com.png' },
      { name: 'Allianz', timelineId: 'experience-rga', logoSrc: '/client-logos/allianz-com.png' },
      { name: 'Channel 4', timelineId: 'experience-tangozebra', logoSrc: '/client-logos/channel4-com.png' },
      { name: 'Nokia', timelineId: 'experience-culture-lab', logoSrc: '/client-logos/nokia-com.png' },
    ],
  },
  {
    title: 'Consumer & Automotive',
    clients: [
      { name: 'Coca-Cola', timelineId: 'experience-wpp', logoSrc: '/client-logos/coca-cola-com.png' },
      { name: 'Sprite', timelineId: 'experience-wpp', logoSrc: '/client-logos/sprite-com.png' },
      { name: 'Fanta', timelineId: 'experience-wpp', logoSrc: '/client-logos/fanta-com.png' },
      { name: 'Jack & Coke', timelineId: 'experience-wpp', logoSrc: '/client-logos/jackdaniels-com.png' },
      { name: 'Topo Chico', timelineId: 'experience-wpp', logoSrc: '/client-logos/topochico-com.png' },
      { name: 'Vauxhall', timelineId: 'experience-belgrave', logoSrc: '/client-logos/vauxhall-co-uk.png' },
      { name: 'Mitsubishi', timelineId: 'experience-critical-mass', logoSrc: '/client-logos/mitsubishi-motors-com.png' },
      { name: 'Ford', timelineId: 'experience-uniworld', logoSrc: '/client-logos/ford-com.png' },
      { name: 'Burger King', timelineId: 'experience-uniworld', logoSrc: '/client-logos/burgerking-com.png' },
      { name: 'British Airways', timelineId: 'experience-belgrave', logoSrc: '/client-logos/britishairways-com.png' },
    ],
  },
];

const ClientChip: React.FC<{ client: ClientEntry }> = ({ client }) => {
  return (
    <a
      className="client-chip"
      href={`#${client.timelineId}`}
      aria-label={`Jump to the ${client.name} work in the experience timeline`}
    >
      <span className="client-logo" aria-hidden="true">
        {client.logoSrc ? (
          <Image src={client.logoSrc} alt="" width={40} height={40} sizes="40px" className="client-logo__image" />
        ) : (
          <span className="client-logo--fallback">{client.name.charAt(0)}</span>
        )}
      </span>
      <span className="client-name">{client.name}</span>
    </a>
  );
};

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
              <TimelineDecade decade="2020s" years="2020 - Present" defaultOpen={true}>
                <TimelineItem date="Dec 2023 – Present" title="Freelance Programme / Project Manager / Director" company="Chromaverse LTD">
                  <p>
                    Delivering freelance programme and project management across AI, digital, and experiential projects for international organisations.
                  </p>
                  <ul>
                    <li><strong>Inter-American Development Bank (IDB):</strong> Designed and managed GDPR-compliant, AI-driven outreach across the Caribbean. Built strategy targeting 50,000+ businesses, created survey funnels with incentives, and produced two years of regional news analysis to inform reports and guide stakeholder engagement.</li>
                    <li><strong>Skyviews:</strong> Directed app and website enhancements with AI + PostgreSQL integration. Delivered API documentation, testing and security recommendations, and a roadmap for scalability (microservices, GraphQL, CI/CD, 2FA).</li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  id="experience-craft"
                  date="May 2023 – Nov 2023"
                  title="Senior Project Manager EMEA"
                  company="Craft Worldwide"
                >
                  <p>
                    Spearheading high-impact initiatives across the global network to drive innovation, optimise operations, reduce costs, and boost efficiencies.
                  </p>
                  <ul>
                    <li>Providing oversight on diverse projects spanning AR, video production, AI automation, and more.</li>
                    <li>Managing client relationships and partnerships with leading global brands.</li>
                    <li>Pioneering integration of cutting-edge technologies like generative AI, AR, 3D, VFX, and Adobe workflows.</li>
                    <li>Leading offshore team setup and AI workflow automation for operational efficiency.</li>
                    <li>Onboarding of newly partnered agency Threedium on AR projects for L&apos;Oreal/Maybelline.</li>
                    <li>Heading business transformation activities including virtual studio, prompt training and workflow automation.</li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  id="experience-wpp"
                  date="Dec 2021 – Oct 2022"
                  title="Senior Project Manager, Marketing &amp; Growth"
                  company="WPP | OpenX"
                >
                  <p>
                    Project managing end to end Global charters integrated &amp; digital for The Coca-Cola Company (TCCC) various IPs on Sprite, Fanta &amp; emerging alcoholic RTD&apos;s Jack &amp; Coke, Lemon Dou, Topo Chico driving integrated creative delivery across WPP owned agencies (Ogilvy, AKQA, David, Grey, Wunderman Thomson, VML Y&amp;R, Havas, Mediacom etc) working in the OpenX agency team format.
                  </p>
                </TimelineItem>
                <TimelineItem date="Oct 2021 – Jan 2022" title="Project Manager" company="Trailer Farm">
                  <p>
                    Worked with 3D, Unreal, Unity, Maya, gaming engines, project planning using ClickUp budgets, briefs, &apos;A Quiet Place&apos; video game trailer, Marvelous Games Rune Factory 5 for game publishers &amp; AAA game studios managing teams consisting of creatives, developers, video editor and 3D artists. Producing Voiceovers with VO artists &amp; client facing.
                  </p>
                </TimelineItem>
                <TimelineItem id="experience-rga" date="Jun 2021 – Oct 2021" title="Senior Project Manager" company="RG/A">
                  <p>
                    Allianz project management - RACI, timing plans, UX/UI design, Confluence setup, Figma, Miro, daily stand-ups, budgets &amp; SOWs.
                  </p>
                </TimelineItem>
                <TimelineItem date="Dec 2020 – Feb 2021" title="Business Analyst/Product Owner" company="Sullivan and Stanley">
                  <p>
                    I gathered tech and business requirements from potential partners to build an Omnichannel tech stack, including CDP, CRM, CM, etc. The tech stack is for a confidential project at a dominant company, and it evaluates mission-critical information. Further details are unavailable due to an NDA.
                  </p>
                </TimelineItem>
                <TimelineItem id="experience-critical-mass" date="Mar 2020 – Jun 2020" title="Business Analyst/PO" company="Critical Mass">
                  <p>
                    For Mitsubishi, I implemented cookie management for GDPR compliance on their EU websites, wrote user stories for a custom Google Tag Manager, and collaborated with third-party solutions. I also worked closely with the Dev and PM teams on two-week sprints in an agile environment.
                  </p>
                </TimelineItem>
              </TimelineDecade>
              
              <TimelineDecade decade="2010s" years="2010 - 2019">
                <TimelineItem date="Jul 2019 – Nov 2019" title="Product Manager" company="Sennep">
                  <p>
                    I developed a mobile cross-platform app with Roli that works with their LED electronic keyboard. The Agile Scrum framework was used for FullStack development with JS React Native, Unity, and C++. I worked closely with the API platform team, QA team, and UI/UX design teams. We delivered releases in two-week Agile sprints.{' '}
                    <a href="https://playlumi.com" target="_blank" rel="noopener noreferrer">
                      https://playlumi.com
                    </a>
                  </p>
                </TimelineItem>
                <TimelineItem date="Jun 2018 – Sep 2018" title="Project Manager" company="Gildan">
                  <p>
                    I worked on multiple website designs with IT and eCommerce teams, including American Apparel and other Gildan clothing brands. My responsibilities involved scoping, budgeting, and integrating Oracle JDEdwards on eCommerce platforms and Smarter Commerce CMS. I also managed daily project tasks with Smartsheet and liaised with digital development teams.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-belgrave"
                  date="Oct 2014 – 2021"
                  title="Independent Producer/Project Manager"
                  company="Belgrave Digital"
                >
                  <p>
                    Integrated producing &amp; project managing along with client facing Dynamic HTML5 rich media banners/eCRM email campaigns for agencies such as Bossa NYC, AMV BBDO, Hogarth WW, BBH, Digitas LBi WilliamsLeaTAG, The Corner London, Freedman International, MRM, Fundamental Media &amp; Wunderman.
                  </p>
                  <ul>
                    <li>High profile and large budget client campaigns both print and Digital for Apple, Oracle, checkout.com, Sainsburys, Galaxy Chocolate, BT, Emirates, British Airways, Skip, Standard Life, Fitbit, H&amp;M, iRobot, Lloyds Banking Group, BTMI, Flybe, L&apos;Oréal, Autotrader &amp; Vauxhall/Opal.</li>
                    <li>Website redesign and build for gacaribbean.com in collaboration with fitdigital.co.uk along with a Sitecore Build uk.mixa.com for L&apos;Oreal.</li>
                  </ul>
                </TimelineItem>
                <TimelineItem id="experience-meri" date="Nov 2014 – Jan 2015" title="Senior Project Manager" company="Meri Media">
                  <p>
                    Client facing and launch of a new clothing line from Diesel called D:CODE. Creating CRM and brand identity/Guidelines. Dunhill Luxury Men&apos;s clothing banner Campaign. Generated Scopes of work and timing plans for specific projects along with managing a creative team including art directors, designers/developers and video editors.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-red-bee"
                  date="Feb 2014 – Oct 2014"
                  title="Digital Producer"
                  company="Red Bee Media"
                >
                  <p>
                    Responsive Footer and banner webpage creative for BBC and UKTV&apos;s home page website properties (Doctor Who) which included a playable leaderboard banner game &amp; content. Pitch delivery team, creative concepting along with day-to-day project management duties and managed a small team of designers/developers.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-leagas"
                  date="Nov 2013 – Dec 2013"
                  title="Digital Projects Director"
                  company="Leagas Delaney"
                >
                  <p>
                    I have managed global campaigns like Patek Philippe and worked on rich media banners, iAd iOS mobile creative, and email marketing. I&apos;ve organized creative and design teams, used MediaMind&apos;s ad platform for uploading creatives, and managed outsourcing to third-party vendors. Also handling accounts payable for clients. Feel Unique Facebook app build, Pictet and MSC.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-skype"
                  date="Apr 2013 – Oct 2013"
                  title="Advertising Product Manager"
                  company="Skype / Microsoft Advertising"
                >
                  <p>
                    Global digital solutions provider working with Microsoft and 3rd party agencies across time zones. Offered technical and creative support for web/mobile platforms. Collaborated on ideation, ad proposals, user flows, and project delivery. Provided consulting to clients, sales, and external partners.
                  </p>
                </TimelineItem>
                <TimelineItem date="Nov 2012 – Mar 2013" title="Digital Product Marketing Manager" company="IPC Media - Time Inc">
                  <p>
                    Led digital marketing campaigns and strategy across digital, mobile, and social platforms for trustedreviews.com. Set KPIs, metrics, identified innovations and partnerships. Supported marketing solutions through process improvements and content uploads. Worked with developers using Agile and Scrum, and utilized SEO, analytics, and social media tools.
                  </p>
                </TimelineItem>
                <TimelineItem date="Jun 2012 – Sep 2012" title="Technical Project Manager" company="Spring Creative">
                  <p>
                    Working with luxury fashion brands along with four in-house developers with client facing consultation. The main software used was Magento, Enterprise resource planning (ERP), JavaScript, HTML 5/CSS on a large fashion eCommerce build. huntergather.com and dblspk.com.
                  </p>
                </TimelineItem>
                <TimelineItem date="Feb 2012 – Mar 2012" title="Digital Producer" company="adam&amp;eveDDB London">
                  <p>
                    Produced green screen video shoot for Halifax Bank&apos;s rich media banner page takeovers. Managed third party delivery and client/in-house creative liaising.
                  </p>
                </TimelineItem>
                <TimelineItem date="Jan 2012 – Feb 2012" title="Project Manager" company="Hearst Magazines Digital Media London">
                  <p>
                    Cross-branded advertorials on Hearst&apos;s sites, interactive videos and photo shoots for Cosmopolitan and Dorothy Perkins.
                  </p>
                </TimelineItem>
                <TimelineItem id="experience-jimmy-choo" date="Nov 2011" title="Digital Project Manager" company="Jimmy Choo">
                  <p>
                    Build and design of Jimmy Choo US website and eCommerce content management.
                  </p>
                </TimelineItem>
                <TimelineItem id="experience-burberry" date="Jun 2011 – Jul 2011" title="Digital Project Manager" company="Burberry">
                  <p>
                    Implemented a redesign of the world site, Worldstore, (responsive UI) mobile site and iPhone Facebook app. Duties involved organising UX, design and build schedules with 3rd parties involving Creative agencies and IT partners (Capgemini) in an Agile and waterfall process.
                  </p>
                </TimelineItem>
                <TimelineItem date="Apr 2011 – May 2011" title="Digital Project Manager" company="Ogilvy One">
                  <p>
                    Unilever products Comfort, Unilever corporate. Comfort Facebook game and Global intranet for Unilever employees. Budgeted for internal UX teams with third party developers.
                  </p>
                </TimelineItem>
                <TimelineItem date="Jun 2010 – Mar 2011" title="Digital Producer" company="DDB London">
                  <p>
                    Clients: Virgin Media, Tropicana, Financial Times B2B, Remember a Charity, Johnson &amp; Johnson, Star Alliance.
                  </p>
                </TimelineItem>
                <TimelineItem id="experience-hires" date="Sep 2009 – Apr 2010" title="Digital Producer" company="Hi-ReS!">
                  <p>
                    Clients: Dolce &amp; Gabbana multi languages (Procter &amp; Gamble), Jägermeister, Anna Molinari fashion brands, Webby award winner The Economist &quot;Thinking spaces&quot; (AMVBBDO) Starbucks (BBDO NY).
                  </p>
                </TimelineItem>
              </TimelineDecade>

              <TimelineDecade decade="2000s" years="2005 - 2009">
                <TimelineItem date="Jul 2009 – Sep 2009" title="Digital Producer" company="Rehab Studio">
                  <p>
                    Clients: Toilet Duck (DraftFCB), Faberge, and Toyota.
                  </p>
                </TimelineItem>
                <TimelineItem date="Apr 2008 – Sep 2008" title="Digital Producer" company="KBS Albion London">
                  <p>
                    Managed the build of a Facebook app for BT that recruited 70,000 users for the world&apos;s biggest online Mexican wave. Also created a speaking clock art installation for Accurist. Worked with Blackberry, eBay, Skype, Remington, Air New Zealand, BT Fon, Capital One, BSkyB, Accurist, and Absolute Radio.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-tangozebra"
                  date="Nov 2007 – Jan 2008"
                  title="Digital Producer"
                  company="Tangozebra / DoubleClick / Google"
                >
                  <p>
                    Clients: Channel 4, Selftrade, Financial Times, Seiko and Microsoft.
                  </p>
                </TimelineItem>
                <TimelineItem date="Jun 2007 – Aug 2007" title="Senior Producer" company="Saint RKCR/Y&amp;R">
                  <p>
                    Clients: Visit London, Bacardi and the UK Home Office.
                  </p>
                </TimelineItem>
                <TimelineItem date="Mar 2007 – May 2007" title="Producer" company="DNA Avenue A | Razorfish">
                  <p>
                    Clients: NSPCC, Oxfam, Standard Life Bank, Yorkshire Building Society and Weight Watchers.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-culture-lab"
                  date="Jan 2007 – Mar 2007"
                  title="Creative/Producer"
                  company="Culture Lab, Dallas Texas, USA"
                >
                  <p>
                    Creative team concepting, strategy, overseeing production and project management. Clients: Nokia and Scion.
                  </p>
                </TimelineItem>
                <TimelineItem
                  id="experience-uniworld"
                  date="Oct 2005 – Jan 2007"
                  title="Interactive Creative Producer"
                  company="Uniworld Group, New York City, NY, USA"
                >
                  <p>
                    Filmed and created online interactive video content for websites and banners, cross branding for the urban market. Clients: Lincoln, Ford, Burger King, fundraising and online viral events for US President Barack Obama.
                  </p>
                </TimelineItem>
              </TimelineDecade>
            </Timeline>
          </div>
        </section>
        <section className="clients-section">
          <div className="container">
            <h2>Notable Clients</h2>
            <div className="client-categories">
              {clientCategories.map((category) => (
                <div className="client-category" key={category.title}>
                  <h3>{category.title}</h3>
                  <div className="client-list">
                    {category.clients.map((client) => (
                      <ClientChip key={client.name} client={client} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="achievements-section">
          <div className="container">
            <h2>Key Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-icon">
                  <Icon name="achievement-ar" className="achievement-icon__symbol" title="AR" />
                </div>
                <h3>AR Gaming Innovation</h3>
                <p>Led the development of Maybelline&apos;s ChromaVerse AR game, setting new standards for interactive brand experiences in the beauty industry.</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">
                  <Icon name="achievement-ai" className="achievement-icon__symbol" title="AI" />
                </div>
                <h3>AI Implementation</h3>
                <p>Pioneered AI workflow automation strategies that reduced production time by 40% while maintaining creative quality standards.</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">
                  <Icon name="achievement-team" className="achievement-icon__symbol" title="Team" />
                </div>
                <h3>Team Leadership</h3>
                <p>Established and managed offshore production teams, creating efficient workflows that saved clients over £500K annually.</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">
                  <Icon name="achievement-world" className="achievement-icon__symbol" title="World" />
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
