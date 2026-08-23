import React from 'react';

/*
  Was images.js: it built an array of <img> elements at module scope,
  double-resolved each file (require.context AND require()), and gave
  React no key and no alt text. Now it exports data, and the component
  renders it.
*/
const context = require.context(
  '../Assets/ehggallery',
  false,
  /\.(png|jpe?g|gif|svg|webp)$/
);

const images = context.keys().map((key) => {
  const mod = context(key);
  return {
    key,
    src: mod.default ?? mod,
    alt: key
      .replace(/^\.\//, '')
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' '),
  };
});

const Gallery = ({ title = 'Screenshots' }) => {
  if (!images.length) return null;

  return (
    <section className="section">
      <div className="container">
        {title && (
          <div className="section-head">
            <h2>{title}</h2>
            <span className="label">{images.length} images</span>
          </div>
        )}

        <div className="gallery">
          {images.map(({ key, src, alt }) => (
            <figure className="gallery__item" key={key}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
