'use client';

import React from 'react';
import Image from 'next/image';

const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}`;

const companyLogoDomains: Record<string, string> = {
  'chromaverse ltd': 'chromaverse.ai',
  'craft worldwide': 'craftww.com',
  'wpp | openx': 'wpp.com',
  'trailer farm': 'thetrailerfarm.com',
  'rg/a': 'rga.com',
  'sullivan and stanley': 'sullivanstanley.com',
  'critical mass': 'criticalmass.com',
  'sennep': 'sennep.com',
  'gildan': 'gildan.com',
  'belgrave digital': 'belgravedigital.com',
  'meri media': 'merimedia.com',
  'red bee media': 'redbeemedia.com',
  'leagas delaney': 'leagasdelaney.com',
  'skype / microsoft advertising': 'skype.com',
  'ipc media - time inc': 'timeinc.com',
  'spring creative': 'springcreative.com',
  'adam&eveddb london': 'adamandeveddb.com',
  'hearst magazines digital media london': 'hearst.com',
  'jimmy choo': 'jimmychoo.com',
  'burberry': 'burberry.com',
  'ogilvy one': 'ogilvy.com',
  'ddb london': 'ddb.com',
  'hi-res!': 'hi-res.net',
  'rehab studio': 'wearerehab.com',
  'kbs albion london': 'albion.co',
  'tangozebra / doubleclick / google': 'google.com',
  'saint rkcr/y&r': 'yr.com',
  'dna avenue a | razorfish': 'razorfish.com',
  'culture lab, dallas texas, usa': 'culturelab.com',
  'uniworld group, new york city, ny, usa': 'uwginc.com'
};

const getCompanyLogoUrl = (company?: string) => {
  if (!company) return null;
  const key = company.toLowerCase().trim();
  const domain = companyLogoDomains[key];
  return domain ? getLogoUrl(domain) : null;
};

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  children: React.ReactNode;
  hidden?: boolean;
  id?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company, children, hidden, id }) => {
  const [logoError, setLogoError] = React.useState(false);
  const logoUrl = React.useMemo(() => getCompanyLogoUrl(company), [company]);

  React.useEffect(() => {
    setLogoError(false);
  }, [company]);

  return (
    <div className={`timeline-item ${hidden ? 'hidden' : ''}`} id={id}>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-date">{date}</div>
        <h3>{title}</h3>
        {company && (
          <h4 className="timeline-company">
            {logoUrl && !logoError ? (
              <span className="timeline-company__logo">
                <Image
                  src={logoUrl}
                  alt=""
                  width={36}
                  height={36}
                  sizes="36px"
                  className="timeline-company__logo-image"
                  onError={() => setLogoError(true)}
                />
              </span>
            ) : (
              <span className="timeline-company__logo timeline-company__logo--fallback" aria-hidden="true">
                {company.charAt(0)}
              </span>
            )}
            <span className="timeline-company__name">{company}</span>
          </h4>
        )}
        <div className="timeline-body">{children}</div>
      </div>
    </div>
  );
};

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
