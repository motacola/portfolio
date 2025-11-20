'use client';

import Image from 'next/image';

const featuredProjects = [
  {
    title: 'Multi-Model AI Development Environment',
    category: 'AI Infrastructure • Local LLMs',
    description:
      'Configured six local models (38GB+) on Apple Silicon to deliver semantic code awareness, call graphs, and IDE-quality assistance with zero API costs.',
    highlights: [
      'Unified Serena MCP stack across 5 assistants',
      '60–80% token reduction on large repos',
      'Semantic find/replace and reference tracking',
      'In-depth repo context without network calls',
    ],
    badges: ['Ollama', 'Serena MCP', 'DeepSeek-V3', 'Qwen3-Coder 30B'],
    image: 'https://placehold.co/640x400?text=Local+LLM+Stack',
  },
  {
    title: 'Open SWE – Autonomous GitHub Agent',
    category: 'LangGraph • GitHub Apps',
    description:
      'Autonomous planner/executor that watches GitHub issues, drafts plans, implements fixes locally, and opens PRs—powered entirely by on-device models.',
    highlights: [
      'LangGraph state machine for task orchestration',
      'Webhook ingestion + dashboard for triage',
      'Local qwen3/deepseek reasoning pair',
      'Open-source stack, no vendor lock-in',
    ],
    badges: ['LangGraph', 'Python', 'GitHub API', 'Ollama'],
    image: 'https://placehold.co/640x400?text=Open+SWE',
  },
  {
    title: 'Gemini CLI UI – Enterprise ChatGPT Alternative',
    category: 'Full-Stack • Live Collaboration',
    description:
      'Self-hosted web UI for Gemini with authentication, streaming responses, and per-team tool palettes—built for agencies needing internal AI portals.',
    highlights: [
      'WebSocket streaming tokens',
      'Role-based tool + prompt presets',
      'Multi-user workspaces',
      'Secure on-prem deployment',
    ],
    badges: ['React', 'Node.js', 'Gemini API', 'WebSockets'],
    image: 'https://placehold.co/640x400?text=Gemini+CLI',
  },
];

const secondaryProjects = [
  {
    title: 'Crush + DeepSeek R1 Tasks',
    tech: 'VS Code • AI Assistant',
    description: 'Five single-keystroke automations that capture repo context and send it to DeepSeek R1.',
    link: 'https://github.com/motacola',
  },
  {
    title: 'Spec-Driven Delivery System',
    tech: 'SpecKit • CLI',
    description: 'Five-stage development lifecycle powered by SpecKit with eight AI providers wired in.',
    link: 'https://github.com/motacola',
  },
  {
    title: 'Open Agent Builder + Ollama',
    tech: 'No-Code Agents',
    description: 'Forked builder with native Ollama adapters for drag-and-drop local agent creation.',
    link: 'https://github.com/motacola',
  },
  {
    title: 'Chrome DevTools MCP Server',
    tech: 'Browser Automation',
    description: 'Command-line bridge letting AI execute JS and inspect DOM nodes through MCP.',
    link: 'https://github.com/motacola',
  },
  {
    title: 'HomeFix AR Assistant',
    tech: 'Web AR • React',
    description: 'Narrated AR overlays for appliance repair workflows.',
    link: 'https://github.com/motacola/homefix-ar',
  },
  {
    title: 'Lime Now Plus',
    tech: 'Location Intelligence',
    description: '“Lime like a local” discovery app surfacing curated experiences.',
    link: 'https://github.com/motacola/lime-now-plus',
  },
];

const TechnicalAIPage = () => {
  return (
    <>
      <section className="hero technical-ai-hero">
        <div className="hero-content">
          <p className="eyebrow">Technical AI</p>
          <h1>Building Local AI Systems &amp; Creative Automation</h1>
          <p className="hero-subtitle">
            The same craft used for global campaigns now powers AI infrastructure—local LLM stacks, autonomous agents, and
            creative tooling that runs in-house.
          </p>
          <div className="technical-ai-stats">
            <div>
              <span>8+</span>
              <p>Custom AI stacks deployed locally</p>
            </div>
            <div>
              <span>671B</span>
              <p>Model parameters integrated</p>
            </div>
            <div>
              <span>60–80%</span>
              <p>Token reduction on large repos</p>
            </div>
            <div>
              <span>$0</span>
              <p>Monthly inference costs</p>
            </div>
          </div>
        </div>
      </section>

      <main id="main" className="technical-ai">
        <section className="section-pad">
          <div className="container">
            <h2>Featured Builds</h2>
            <p className="section-intro">Flagship systems that bring local AI into production workflows.</p>
            <div className="technical-featured">
              {featuredProjects.map((project) => (
                <article className="technical-card" key={project.title}>
                  <div className="technical-card__media">
                    <Image src={project.image} alt={project.title} width={640} height={400} />
                  </div>
                  <div className="technical-card__body">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="badge-row">
                      {project.badges.map((badge) => (
                        <span className="badge" key={badge}>
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="project-highlights">
                      <h4>Highlights</h4>
                      <ul>
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a className="btn primary-btn" href="https://github.com/motacola" target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad technical-secondary">
          <div className="container">
            <div className="section-heading">
              <h2>Supporting Systems</h2>
              <p>Utilities and experiments that plug into the main AI stack.</p>
            </div>
            <div className="technical-grid">
              {secondaryProjects.map((project) => (
                <article className="technical-tile" key={project.title}>
                  <p className="project-category">{project.tech}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="cta-link">
                    View project →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section technical-ai-cta">
          <div className="container">
            <h2>Need Local LLMs or Creative Automation?</h2>
            <p>
              Let’s combine storytelling with technical systems—deploying AI safely inside your environment, tuned for the
              way your teams already work.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn primary-btn">
                Start a Conversation
              </a>
              <a href="https://github.com/motacola" target="_blank" rel="noreferrer" className="btn secondary-btn">
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TechnicalAIPage;
