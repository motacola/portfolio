'use client';

import React, { useState } from 'react';
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
];

const ShowreelPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredVideos = filter === 'all' ? videos : videos.filter((video) => video.category === filter);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Showreel</h1>
          <p>A curated collection of advertising and production work</p>
        </div>
      </section>
      <section className="filters">
        <div className="container">
          <div className="filter-options">
            <button type="button" className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              All Projects
            </button>
            <button type="button" className={`filter-btn ${filter === 'ad' ? 'active' : ''}`} onClick={() => setFilter('ad')}>
              Ad Spots
            </button>
            <button type="button" className={`filter-btn ${filter === 'trailer' ? 'active' : ''}`} onClick={() => setFilter('trailer')}>
              Trailers
            </button>
            <button type="button" className={`filter-btn ${filter === 'bts' ? 'active' : ''}`} onClick={() => setFilter('bts')}>
              Behind the Scenes
            </button>
          </div>
        </div>
      </section>
      <main className="showreel" id="main">
        <div className="container">
          <div className="video-grid">
            {filteredVideos.map((video) => (
              <VideoCard key={video.videoId} {...video} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ShowreelPage;
