import React from 'react';

const nf = new Intl.NumberFormat('en-US');
const format = (value) => (typeof value === 'number' ? nf.format(value) : value);

const PlaytestRoster = ({
  taken = 0,
  capacity = 0,
  build,
  eyebrow = 'Closed playtest',
  figures = [],
  note,
  link,
  linkLabel = 'Join the playtest',
  fullLabel = 'Join the waitlist',
  external = true,
  maxTicks = 240,
}) => {
  const seats = Math.max(0, Math.min(taken, capacity || taken));
  const remaining = Math.max(0, capacity - seats);
  const isFull = capacity > 0 && remaining === 0;

  // Past maxTicks one mark stands for several seats, so the band keeps
  // its shape however big the playtest gets. The caption stays exact.
  const ticks = capacity > 0 ? Math.min(capacity, maxTicks) : 0;
  const filled = ticks > 0 ? Math.round((seats / capacity) * ticks) : 0;

  return (
    <section className="roster">
      <div className="container">
        <p className="roster__eyebrow label">
          <span className="roster__live" aria-hidden="true" />
          {eyebrow}
          {build && ` \u00b7 Build ${build}`}
        </p>

        <h2 className="roster__headline">
          {`${nf.format(seats)} people are already breaking it. `}
          {capacity > 0 && (
            <em>
              {isFull
                ? 'The next round opens soon.'
                : `${nf.format(remaining)} seats left.`}
            </em>
          )}
        </h2>

        {ticks > 0 && (
          <div
            className="roster__wall"
            role="img"
            aria-label={`${nf.format(seats)} of ${nf.format(capacity)} playtest seats taken`}
          >
            {Array.from({ length: ticks }, (_, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={i < filled ? { '--i': i } : undefined}
                className={`roster__tick${i < filled ? ' roster__tick--filled' : ''}${
                  !isFull && i === filled ? ' roster__tick--next' : ''
                }`}
              />
            ))}
          </div>
        )}

        {capacity > 0 && (
          <p className="roster__caption">
            <b>{nf.format(seats)}</b>
            {` of ${nf.format(capacity)} seats`}
            {!isFull && ' \u2014 the blinking mark is the next one'}
          </p>
        )}

        {figures.length > 0 && (
          <dl className="roster__figures">
            {figures.map(({ label, value, suffix }) => (
              <div className="roster__figure" key={label}>
                <dt className="label">{label}</dt>
                <dd className="roster__value">
                  {format(value)}
                  {suffix && <small>{suffix}</small>}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {(link || note) && (
          <div className="roster__actions">
            {link && (
              <a
                className="btn-primary"
                href={link}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {isFull ? fullLabel : linkLabel}
              </a>
            )}

            {note && <p className="roster__note">{note}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlaytestRoster;