'use client';

import React from 'react';
import Image from 'next/image';

interface VideoCardProps {
  videoId: string;
  title: string;
  client: string;
  description: string;
  category: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, client, description, category }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleActivate = () => {
    setIsPlaying(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleActivate();
    }
  };

  return (
    <div className="video-item" data-category={category}>
      <div
        className="video-container"
        role="button"
        tabIndex={0}
        aria-label={`Play ${title} video`}
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`${title} video player`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="video-poster"
            width={1280}
            height={720}
            unoptimized
          />
        )}
      </div>
      <div className="video-info">
        <h3>{title}</h3>
        <p className="client">{client}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
