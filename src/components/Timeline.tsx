'use client';

import React from 'react';
import Image from 'next/image';

const companyLogos: Record<string, { src: string }> = {
  'chromaverse ltd': { src: '/company-logos/chromaverse.svg' },
  'craft worldwide': { src: '/company-logos/craftww-com.png' },
  'wpp | openx': { src: '/company-logos/wpp-com.png' },
  'trailer farm': { src: '/company-logos/thetrailerfarm-com.png' },
  'rg/a': { src: '/company-logos/rga-com.png' },
  'sullivan and stanley': { src: '/company-logos/sullivanstanley-com.png' },
  'critical mass': { src: '/company-logos/criticalmass-com.png' },
  'sennep': { src: '/company-logos/sennep-com.png' },
  'gildan': { src: '/company-logos/gildan-com.png' },
  'belgrave digital': { src: '/company-logos/belgrave-digital.svg' },
  'meri media': { src: '/company-logos/merimedia-com.png' },
  'red bee media': { src: '/company-logos/redbeemedia-com.png' },
  'leagas delaney': { src: '/company-logos/leagasdelaney-com.png' },
  'skype / microsoft advertising': { src: '/company-logos/skype-com.png' },
  'ipc media - time inc': { src: '/company-logos/time-inc.svg' },
  'spring creative': { src: '/company-logos/springcreative-com.svg' },
  'adam&eveddb london': { src: '/company-logos/adamandeveddb-com.png' },
  'hearst magazines digital media london': { src: '/company-logos/hearst-com.png' },
  'jimmy choo': { src: '/company-logos/jimmychoo-com.png' },
  'burberry': { src: '/company-logos/burberry-com.png' },
  'ogilvy one': { src: '/company-logos/ogilvy-com.png' },
  'ddb london': { src: '/company-logos/ddb-com.png' },
  'hi-res!': { src: '/company-logos/hi-res-net.png' },
  'rehab studio': { src: '/company-logos/rehab-studio.svg' },
  'kbs albion london': { src: '/company-logos/albion-co.png' },
  'tangozebra / doubleclick / google': { src: '/company-logos/google-com.png' },
  'saint rkcr/y&r': { src: '/company-logos/yr-com.png' },
  'dna avenue a | razorfish': { src: '/company-logos/razorfish-com.png' },
  'culture lab, dallas texas, usa': { src: '/company-logos/culturelab-com.png' },
  'uniworld group, new york city, ny, usa': { src: '/company-logos/uwginc-com.png' }
};

const getCompanyLogoUrl = (company?: string) => {
  if (!company) return null;
  const key = company.toLowerCase().trim();
  return companyLogos[key]?.src ?? null;
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
