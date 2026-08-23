import React from 'react';
import GameplayPanel from './GameplayPanel';
const Game = ({
  title,
  video,
  image,
  tags = [],
  description,
  link,
  linkLabel = 'View on Steam',
  featured = false,
}) => (
  <article className={`game-card${featured ? ' game-card--featured' : ''}`}>

    {(video || image) && (
      <div className="game-card__media">
        {video ? (
          <iframe
            src={video}
            title={title ? `${title} trailer` : 'Game trailer'}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img src={image} alt={title ? `${title} key art` : ''} loading="lazy" />
        )}
      </div>
    )}

    <div className="game-card__body">
      <h3 className="game-card__title">{title}</h3>
     
      
      {tags.length > 0 && (
        <div className="game-card__meta">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      {description && <p className="game-card__desc">{description}</p>}

      {link && (
        <div className="game-card__actions">
          <a
            className="btn-primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkLabel}
          </a>
        </div>
      )}
    </div>
  </article>
);

export default Game;