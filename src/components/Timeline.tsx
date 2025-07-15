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
      {children}
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

export { Timeline, TimelineItem };
