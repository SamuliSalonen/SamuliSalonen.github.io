import React from 'react';
import Game from './Game';

/*
  Wraps the cards in the section / container / grid primitives so the
  cards themselves carry no width or margin. Replaces width: 49%.

  <GameGrid title="Our games" games={games} featuredId="nightfall" />
*/
const GameGrid = ({ title = 'Our games', games = [], featuredId, meta }) => (
  <section className="section">
    <div className="container">
      {title && (
        <div className="section-head">
          <h2>{title}</h2>
          {meta && <span className="label">{meta}</span>}
        </div>
      )}

      <div className="grid-cards">
        {games.map((game) => (
          <Game
            key={game.id ?? game.title}
            {...game}
            featured={featuredId ? game.id === featuredId : game.featured}
          />
        ))}
      </div>
    </div>
  </section>
);

export default GameGrid;