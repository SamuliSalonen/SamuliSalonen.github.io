import React from 'react';

const slug = (status = '') => status.trim().toLowerCase().replace(/\s+/g, '-');

const RoadmapPanel = ({ milestones = [], title = 'Roadmap' }) => {
  const total = milestones.length;

  /* Only completed counts. Pending is the opposite of done. */
  const completed = milestones.filter((m) => slug(m.status) === 'completed').length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  if (!total) return null;

  return (
    <section className="roadmap">
      <div className="section-head">
        <h3>{title}</h3>
        <span className="label">
          {completed} of {total} shipped
        </span>
      </div>

      <div
        className="roadmap__track"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title} progress`}
      >
        <div className="roadmap__rail">
          <div className="roadmap__fill" style={{ height: `${progress}%` }} />
        </div>

        <ol className="roadmap__nodes">
          {milestones.map((item, index) => (
            <li key={item.id ?? index} className="roadmap__node">
              <span className={`roadmap__dot is-${slug(item.status)}`} />
              <div className="roadmap__text">
                <span className="label roadmap__status">{item.status}</span>
                <span className="roadmap__desc">{item.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default RoadmapPanel;