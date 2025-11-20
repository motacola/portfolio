'use client';

import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';

type Sender = 'user' | 'bot';

type ChatMessage = {
  id: number;
  sender: Sender;
  text: string;
};

type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
};

const createKnowledgeBase = (): KnowledgeEntry[] => [
  {
    id: 'summary',
    keywords: ['who are you', 'about', 'summary', 'introduction', 'profile', 'portfolio'],
    answer:
      "I'm Christopher Belgrave, a London-based Senior Project Manager and Producer with more than 15 years in advertising. I specialise in blending creative storytelling with emerging tech—AI, AR, 3D, and VFX—to ship digital experiences that outperform expectations for global brands.",
  },
  {
    id: 'craft',
    keywords: ['craft', 'emea', 'chromaverse', 'maybelline', 'ar game', 'offshore team'],
    answer:
      "At Craft Worldwide I was Senior Project Manager for EMEA. I led the Maybelline ChromaVerse AR game rollout, introduced AI prompt training, and set up automation plus offshore delivery models to streamline multi-market production.",
  },
  {
    id: 'belgrave-digital',
    keywords: ['belgrave', 'freelance', 'digital limited', 'html5', 'banner', 'campaign'],
    answer:
      "Through Belgrave Digital I delivered over a decade of freelance Product/Project Management across agencies like AMV BBDO, BBH, Hogarth, and Digitas. I produced dynamic HTML5 rich media, CRM programmes, and full site builds for Apple, Sainsbury’s, Galaxy, BT, Emirates, British Airways, L’Oréal, and Vauxhall.",
  },
  {
    id: 'openx',
    keywords: ['openx', 'wpp', 'coca', 'coke', 'coca-cola', 'global campaign'],
    answer:
      "Embedded within WPP’s OpenX team I coordinated global campaign delivery for The Coca-Cola Company. I managed cross-agency workflows so multiple WPP shops could ship cohesive creative at speed.",
  },
  {
    id: 'rga',
    keywords: ['r/ga', 'rga', 'allianz', 'ux', 'operations'],
    answer:
      "While Senior Producer at R/GA I rebuilt Allianz’s internal UX programme. That meant establishing Jira/Confluence rituals, detailed SOWs, sprint planning in Figma and Miro, plus stewarding day-to-day Agile ceremonies.",
  },
  {
    id: 'sennep',
    keywords: ['sennep', 'lumi', 'roli', 'react native', 'unity', 'app'],
    answer:
      "With Sennep I product managed the Lumi music-learning app for Roli across iOS and Android. I orchestrated React Native and Unity squads, managed API/UX integrations, and delivered on two-week release cadences with distributed teams.",
  },
  {
    id: 'clients',
    keywords: ['client', 'brand', 'worked with', 'partnership'],
    answer:
      "Selected clients include Jimmy Choo, Burberry, Dolce & Gabbana, Patek Philippe, Diesel, Dunhill, Microsoft, BBC, BT, Mitsubishi, Roli, L’Oréal/Maybelline, Coca-Cola, Unilever, Virgin Media, Halifax, Emirates, and Vauxhall.",
  },
  {
    id: 'skills',
    keywords: ['skill', 'strength', 'what can you do', 'core capabilities', 'expertise'],
    answer:
      'Key skills: project & product management, digital production, AI/AR/3D innovation, CRM and email programmes, rich media production, eCommerce builds, UX/UI leadership, agile delivery, and video/post supervision.',
  },
  {
    id: 'tools',
    keywords: ['tools', 'software', 'stack', 'platforms'],
    answer:
      'Tools & platforms: Jira, Confluence, Figma, Miro, Adobe Creative Suite, React Native, Unity, HTML5/CSS/JS, plus AI tooling for ideation and automation.',
  },
  {
    id: 'location',
    keywords: ['where are you based', 'location', 'london', 'uk'],
    answer: 'I operate out of London, partnering with teams across the UK, EMEA, and US time zones.',
  },
  {
    id: 'services',
    keywords: ['hire', 'engage', 'available', 'services', 'what do you offer'],
    answer:
      'I guide creative and production teams through concepting, scoping, budgeting, vendor sourcing, sprint delivery, and post-production. Essentially, I bridge creative ambition with the workflows, teams, and tech needed to deliver it.',
  },
  {
    id: 'timeline',
    keywords: ['experience', 'work history', 'career path', 'background'],
    answer:
      'Career snapshot: Craft Worldwide (Sr. Project Manager EMEA), Belgrave Digital (Product/Project Manager for global agencies), OpenX/WPP (Sr. PM for Coca-Cola), R/GA (Sr. Producer for Allianz UX), and Sennep (Product Manager for Roli’s Lumi app).',
  },
  {
    id: 'training',
    keywords: ['ai', 'automation', 'prompt', 'training', 'innovation'],
    answer:
      'I routinely lead AI prompt labs and automation initiatives—documenting workflows, training teams, and using gen-AI to accelerate ideation, localisation, and QA without compromising craft.',
  },
];

const quickPrompts = [
  'What are your key skills?',
  'Tell me about your work at Craft Worldwide.',
  'Which brands have you partnered with?',
];

const friendlyGreeting =
  "Hey there! I'm the chat assistant for Christopher's portfolio. Ask me about his experience, clients, or the tech he brings to projects.";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, sender: 'bot', text: friendlyGreeting },
  ]);
  const nextId = useRef(1);
  const messageListRef = useRef<HTMLDivElement | null>(null);

  const knowledgeBase = useMemo(() => createKnowledgeBase(), []);

  const addMessage = (sender: Sender, text: string) => {
    setMessages((prev) => [...prev, { id: nextId.current++, sender, text }]);
  };

  const getAnswer = (question: string) => {
    const normalized = question.toLowerCase();

    if (['hi', 'hello', 'hey', 'hola'].some((greet) => normalized.includes(greet))) {
      return 'Hi! Keen to chat about projects, clients, tools, or anything else you spot on the site.';
    }

    if (normalized.includes('contact') || normalized.includes('email')) {
      return 'You can reach Christopher at chrisbelgrave@gmail.com or connect via LinkedIn. The contact page has a form if you prefer.';
    }

    if (normalized.includes('skill')) {
      return knowledgeBase.find((entry) => entry.id === 'skills')?.answer ?? '';
    }

    if (normalized.includes('tool') || normalized.includes('software')) {
      return knowledgeBase.find((entry) => entry.id === 'tools')?.answer ?? '';
    }

    if (normalized.includes('client') || normalized.includes('brand')) {
      return knowledgeBase.find((entry) => entry.id === 'clients')?.answer ?? '';
    }

    const matchedEntry = knowledgeBase.find((entry) =>
      entry.keywords.some((keyword) => normalized.includes(keyword))
    );

    if (matchedEntry) {
      return matchedEntry.answer;
    }

    return "I'm tuned for Christopher's background—try asking about his experience, skills, favourite tools, or the brands he's produced work for.";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleQuestion(inputValue);
  };

  const handleQuestion = (question: string) => {
    const value = question.trim();
    if (!value) return;

    addMessage('user', value);
    setInputValue('');
    const answer = getAnswer(value);
    addMessage('bot', answer);
  };

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  return (
    <div className="chatbot-container" aria-live="polite">
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
      >
        {isOpen ? 'Close chatbot' : 'Ask about Chris'}
      </button>
      {isOpen && (
        <div className="chatbot-panel" id="chatbot-panel">
          <header className="chatbot-header">
            <div>
              <p className="chatbot-title">Career & skills assistant</p>
              <p className="chatbot-subtitle">Ask about experience, clients, or tooling.</p>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </header>
          <div className="chatbot-body">
            <div className="chatbot-messages" ref={messageListRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chatbot-message chatbot-message-${message.sender}`}
                >
                  <span className="chatbot-message-label">
                    {message.sender === 'bot' ? 'ChrisBot' : 'You'}
                  </span>
                  <p className="chatbot-message-text">{message.text}</p>
                </div>
              ))}
            </div>
            <div className="chatbot-quick-prompts" aria-label="Quick questions">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="chatbot-chip"
                  onClick={() => handleQuestion(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <form className="chatbot-input" onSubmit={handleSubmit}>
            <label htmlFor="chatbot-question" className="sr-only">
              Ask a question
            </label>
            <input
              id="chatbot-question"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Ask about work history, skills, tools..."
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
