import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const getImageUrl = (image) => {
  if (!image) return null;

  if (typeof image === "string") {
    return image;
  }

  return image.default || image.src || null;
};

/*
 * Cards are themselves click targets, so a link inside a description
 * would open the lightbox as well as following itself. Stop it, the
 * same way the existing "Read more" link does.
 */
const linkRenderer = ({ node, ...props }) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(event) => event.stopPropagation()}
  />
);

/*
 * In a card, a markdown heading would out-shout the item's own title,
 * so headings flatten to bold. The lightbox has room for real ones.
 */
const compactComponents = {
  a: linkRenderer,
  h1: "strong",
  h2: "strong",
  h3: "strong",
  h4: "strong",
  h5: "strong",
  h6: "strong",
};

const fullComponents = {
  a: linkRenderer,
};

const Rich = ({ children, compact = false }) => {
  if (!children) return null;

  return (
    <div className="rich-text">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={compact ? compactComponents : fullComponents}
      >
        {children}
      </Markdown>
    </div>
  );
};

const News = ({ news = [] }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    if (!selectedNews) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedNews(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNews]);

  if (!news.length) return null;

  const featuredNews =
    news.find((item) => item.featured) || news[0];

  const otherNews = news.filter(
    (item) => item.id !== featuredNews.id
  );

  const featuredImage = getImageUrl(featuredNews.image);

  return (
    <>
      <section id="news" className="section news-section">
        <div className="container">
          <div className="section-head">
            <h2>News</h2>
            <span className="label">Latest updates</span>
          </div>

          <div className="news-grid">
            <article
              className={`news-featured ${
                !featuredImage
                  ? "news-featured--no-image"
                  : ""
              }`}
              onClick={() => {
                if (featuredImage) {
                  setSelectedNews(featuredNews);
                }
              }}
              role={featuredImage ? "button" : undefined}
              tabIndex={featuredImage ? 0 : undefined}
              onKeyDown={(event) => {
                if (
                  featuredImage &&
                  (event.key === "Enter" ||
                    event.key === " ")
                ) {
                  event.preventDefault();
                  setSelectedNews(featuredNews);
                }
              }}
            >
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt={featuredNews.title}
                  className="news-featured__image"
                />
              )}

              <div className="news-featured__content">
                <span className="news-category">
                  {featuredNews.category}
                </span>

                <h3>{featuredNews.title}</h3>

                <Rich compact>
                  {featuredNews.description}
                </Rich>

                <div className="news-meta">
                  <span>{featuredNews.date}</span>

                  {featuredNews.link && (
                    <a
                      href={featuredNews.link}
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      Read more →
                    </a>
                  )}
                </div>
              </div>
            </article>

            <div className="news-list">
              {otherNews.map((item) => {
                const image = getImageUrl(item.image);

                return (
                  <article
                    key={item.id}
                    className={`news-card ${
                      !image ? "news-card--no-image" : ""
                    }`}
                    onClick={() => {
                      if (image) {
                        setSelectedNews(item);
                      }
                    }}
                    role={image ? "button" : undefined}
                    tabIndex={image ? 0 : undefined}
                    onKeyDown={(event) => {
                      if (
                        image &&
                        (event.key === "Enter" ||
                          event.key === " ")
                      ) {
                        event.preventDefault();
                        setSelectedNews(item);
                      }
                    }}
                  >
                    {image && (
                      <img
                        src={image}
                        alt={item.title}
                        className="news-card__image"
                      />
                    )}

                    <div className="news-card__content">
                      <span className="news-category">
                        {item.category}
                      </span>

                      <h3>{item.title}</h3>

                      <Rich compact>
                        {item.description}
                      </Rich>

                      <div className="news-meta">
                        <span>{item.date}</span>

                        {item.link && (
                          <a
                            href={item.link}
                            onClick={(event) =>
                              event.stopPropagation()
                            }
                          >
                            Read more →
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedNews && (
        <div
          className="news-lightbox"
          onClick={() => setSelectedNews(null)}
        >
          <button
            type="button"
            className="news-lightbox__close"
            onClick={() => setSelectedNews(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="news-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={getImageUrl(selectedNews.image)}
              alt={selectedNews.title}
              className="news-lightbox__image"
            />

            <div className="news-lightbox__info">
              <span className="news-category">
                {selectedNews.category}
              </span>

              <h3>{selectedNews.title}</h3>

              {/* `body` is the long form. Falls back to the
                  description so existing items still render. */}
              <Rich>
                {selectedNews.body ||
                  selectedNews.description}
              </Rich>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;