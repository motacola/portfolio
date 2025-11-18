import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  children: React.ReactNode;
  hidden?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company, children, hidden }) => (
  <div className={`timeline-item ${hidden ? 'hidden' : ''}`}>
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <div className="timeline-date">{date}</div>
      <h3>{title}</h3>
      {company && <h4>{company}</h4>}
      <div className="timeline-body">{children}</div>
    </div>
  </div>
);

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="timeline">
      {children}
    </div>
  );
};

interface TimelineDecadeProps {
  decade: string;
  years: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const TimelineDecade: React.FC<TimelineDecadeProps> = ({ decade, years, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={`timeline-decade ${isOpen ? 'is-open' : ''}`}>
      <button
        className="timeline-decade-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        type="button"
      >
        <div className="timeline-decade-info">
          <h3 className="timeline-decade-title">{decade}</h3>
          <span className="timeline-decade-years">{years}</span>
        </div>
        <svg
          className="timeline-decade-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className="timeline-decade-content">
        {children}
      </div>
    </div>
  );
};

export { Timeline, TimelineItem, TimelineDecade };