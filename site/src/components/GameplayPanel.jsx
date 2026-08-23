import { useState } from "react";

export default function GameplayPanel({ game }) {
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = game.video || [];

  const handleVideoEnd = () => {
    setVideoIndex((currentIndex) =>
      (currentIndex + 1) % videos.length
    );
  };

  if (!videos.length) {
    return null;
  }

  return (
    <section id="games" className="gameplay-section">
      <div className="gameplay-panel">
        <video
          key={videos[videoIndex]}
          className="gameplay-background"
          src={videos[videoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />

        <div className="gameplay-overlay" />

        <div className="gameplay-content">
          <div className="gameplay-tags">
            {game.tags?.map((tag) => (
              <span key={tag} className="gameplay-tag">
                {tag}
              </span>
            ))}
          </div>

          <h2>{game.title}</h2>

          <p>{game.description}</p>

          {game.link && (
            <a
              href={game.link}
              className="gameplay-button"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </section>
  );
}