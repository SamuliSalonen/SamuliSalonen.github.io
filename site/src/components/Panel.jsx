import React from 'react';

/*
  Was reusing .game-panel / .game-info, which no longer exist.
  Now a plain prose block with its own class.
*/
const Panel = ({ title, description, children }) => (
  <section className="panel">
    {title && <h3 className="panel__title">{title}</h3>}
    <div className="panel__body">{children ?? <p>{description}</p>}</div>
  </section>
);
export default Panel;