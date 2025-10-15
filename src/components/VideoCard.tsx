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

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-item" data-category={category}>
      {isPlaying ? (
        <div className="video-container" role="region" aria-label={`${title} video player`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <button
          type="button"
          className="video-container video-trigger"
          onClick={handleClick}
          aria-label={`Play ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={`${title} video thumbnail`}
            className="video-poster"
            width={1280}
            height={720}
            unoptimized
          />
        </button>
      )}
      <div className="video-info">
        <h3>{title}</h3>
        <p className="client">{client}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
