'use client';

import React, { useEffect, useRef, useState } from 'react';
import VideoCard from '@/components/VideoCard';

const videos = [
  {
    videoId: 'M1PTVmaO6Yg',
    title: "L'Oréal Paris – \"Eva's Lip-Dub\"",
    client: "L'Oréal Paris",
    description: "Ad Spot starring Eva Longoria, AI lip-synced in French L'Oréal's using Eleven Labs. Produced by Christopher Belgrave.",
    category: 'ad',
  },
  {
    videoId: 'xq8uEfXZeOQ',
    title: 'IPG Studios NYC – Capabilities Reel',
    client: 'IPG Studios',
    description: 'A high-impact sizzle introducing IPG\'s in-house production studio—from green-screen stages and XR walls to full post-production. Kinetic motion graphics and sharp transitions highlight the studio\'s end-to-end power. Produced by Christopher Belgrave.',
    category: 'ad',
  },
  {
    videoId: '0BH-2mqatoo',
    title: 'Maybelline "Chromaverse" AR Game Trailer',
    client: 'Maybelline / Gotham NYC',
    description: "An immersive teaser unveiling Chromaverse, Maybelline's AR gaming experience, where players collect virtual make-up power-ups in real surroundings. Neon UI overlays and glitch cuts echo the game's futuristic vibe. For Gotham NYC Produced by Christopher Belgrave.",
    category: 'ad',
  },
  {
    videoId: '9Ujbx5iVW9k',
    title: 'A Quiet Place 2021 Game Awards Trailer',
    client: 'Game Awards',
    description: 'The alternate trailer that never aired. Cinematic pacing and epic sound design hint at terrifying suspense while showcasing gameplay. Produced by Christopher Belgrave.',
    category: 'trailer',
  },
  {
    videoId: 'kQdGKqci8oE',
    title: "DUB Magazine – Myles Kovacs' Custom Lincoln Navigator (2007)",
    client: 'DUB Magazine',
    description: "Founder Myles Kovacs gives an insider tour of his uniquely customised Navigator—from wide-body kit to bespoke interior. Rolling beauty shots pair with candid insights for a laid-back yet authoritative feature. Directed & edited by Christopher Belgrave.",
    category: 'ad',
  },
  {
    videoId: 'x_yOGg9jlkU',
    title: 'South Pole Ladies SS 2009 – Behind the Scenes',
    client: 'South Pole',
    description: "Go inside a German photo shoot for South Pole's Spring/Summer collection. Hand-held B-roll, time-lapse set-ups, and quick designer sound-bites capture the energy of a busy day on set. Directed by Christopher Belgrave; production managed by Sebrina Pitt; post by artkill.com.",
    category: 'bts',
  },
  {
    videoId: 'uDeZV5NiKnk',
    title: 'Vauxhall Crossland X – Product Showcase',
    client: 'Vauxhall',
    description: "Dynamic product showcase for the Vauxhall Crossland X, highlighting the vehicle's key features and design elements. Professional automotive production showcasing the crossover's versatility and style. Produced by Christopher Belgrave.",
    category: 'ad',
  },
  {
    videoId: 'l934XTKC46Q',
    title: 'Commercial Production Showcase',
    client: 'Client Project',
    description: 'Professional commercial production demonstrating creative direction and technical execution. Showcasing expertise in visual storytelling and brand communication. Produced by Christopher Belgrave.',
    category: 'ad',
  },
];

const filterOptions = [
  { value: 'all', label: 'All Projects' },
  { value: 'ad', label: 'Ad Spots' },
  { value: 'trailer', label: 'Trailers' },
  { value: 'bts', label: 'Behind the Scenes' },
];

const ShowreelPage = () => {
  const [filter, setFilter] = useState('all');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [hasFiltered, setHasFiltered] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const filteredVideos = filter === 'all' ? videos : videos.filter((video) => video.category === filter);
  const filterStatus =
    filter === 'all'
      ? 'Showing all featured work'
      : `Showing ${filterOptions.find((option) => option.value === filter)?.label ?? 'selected projects'}`;

  const handleFilterChange = (value: string) => {
    setActiveVideoId(null);
    setHasFiltered(true);
    setFilter(value);
  };

  useEffect(() => {
    if (!hasFiltered) return;
    const target = mainRef.current;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [filter, hasFiltered]);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Showreel</h1>
          <p>A curated collection of advertising and production work</p>
          <a href="#main" className="scroll-indicator" aria-label="Scroll to content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
      <section className="filters">
        <div className="container">
          <div className="filter-options" role="toolbar" aria-label="Filter projects">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`filter-btn ${filter === option.value ? 'active' : ''}`}
                aria-pressed={filter === option.value}
                onClick={() => handleFilterChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className="project-tabs__status" role="status" aria-live="polite">
            {filterStatus}
          </p>
        </div>
      </section>
      <main className="showreel" id="main" ref={mainRef}>
        <div className="container">
          <div className="video-grid">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.videoId}
                {...video}
                isActive={activeVideoId === video.videoId}
                onActivate={(id) => setActiveVideoId((prev) => (prev === id ? null : id))}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ShowreelPage;
