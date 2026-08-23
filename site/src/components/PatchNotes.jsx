import React, { useEffect, useState } from 'react';
import patchData from '../data/patchnotes.json';

const API_URL = process.env.REACT_APP_SERVER;
const PATCHNOTES_URL = `${API_URL}/api/patchnotes`;
const PAGE_SIZE = 10;

const KEYWORDS = {
  'bugfix:': 'patch-bugfix',
  'change:': 'patch-change',
  'feature:': 'patch-feature',
};

const formatText = (text) => {
  if (!text) return null;

  return text.split(/\r?\n/).map((line, i) => {
    const match = line.match(/^([-*]?\s*)(bugfix:|change:|feature:)/i);

    if (!match) return <div key={i}>{line}</div>;

    const [full, prefix, keyword] = match;

    return (
      <div key={i}>
        {prefix}
        <span className={KEYWORDS[keyword.toLowerCase()]}>
          {keyword}
        </span>
        {line.slice(full.length)}
      </div>
    );
  });
};

const PatchNotes = ({ title = 'Patch notes' }) => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPinned, setIsPinned] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const loadPatchNotes = async () => {
      try {
        const response = await fetch(PATCHNOTES_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch patch notes: ${response.status}`);
        }

        const data = await response.json();
        setNotes([...data]);
      } catch (error) {
        console.error('Failed to load patch notes from API:', error);
        setNotes([...patchData].reverse());
      }
    };

    loadPatchNotes();
  }, []);

  useEffect(() => {
    const pagination = document.querySelector('.patchnotes__pagination');

    if (!pagination) return;

    const initialTop =
      pagination.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      setIsPinned(window.scrollY > initialTop);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [notes.length]);

  if (!notes.length) return null;

  const totalPages = Math.ceil(notes.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleNotes = notes.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const goToPage = (page) => {
    const newPage = Math.max(1, Math.min(page, totalPages));

    if (newPage === currentPage) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
    }, 150);
  };

  const formatDate = (date) => {
    if (!date) return '';

    const timestamp = Number(date);

    const milliseconds =
      timestamp < 10000000000
        ? timestamp * 1000
        : timestamp;

    return new Date(milliseconds).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section id="patchnotes" className="section patchnotes-section">
      <div className="container container--narrow">
        <div className="section-head">
          <h2>{title}</h2>
          <span className="label">{notes.length} releases</span>
        </div>
      </div>

      {totalPages > 1 && (
        <nav
          className={`patchnotes__pagination ${
            isPinned ? 'patchnotes__pagination--pinned' : ''
          }`}
          aria-label="Patch notes pages"
        >
          <div className="container container--narrow">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={page === currentPage ? 'active' : ''}
                aria-current={
                  page === currentPage ? 'page' : undefined
                }
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </nav>
      )}

      <div className="container container--narrow">
        <div
          className={`patchnotes ${
            isAnimating ? 'patchnotes--animating' : ''
          }`}
        >
          {visibleNotes.map((note) => (
            <article key={note.id} className="patchnote">
              <h3 className="patchnote__title">
                Patch {note.title}

                <span className="patchnote__date">
                  {formatDate(note.date)}
                </span>
              </h3>

              <div className="patchnote__text">
                {formatText(note.contents)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatchNotes;