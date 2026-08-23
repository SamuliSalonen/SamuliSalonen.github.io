import React, { useEffect, useState } from 'react';

const LINKS = [
  { href: '#games', label: 'Games' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#patchnotes', label: 'Patch notes' },
  { href: '#about', label: 'About' },
];

const Header = ({ logo, wordmark = 'Ember Hollow', steamLink }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="site-logo" href="#top">
          {logo && <img src={logo} alt="" />}
          <span className="wordmark">{wordmark}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <nav>
          <ul
            id="site-nav"
            className={`site-nav${open ? ' is-open' : ''}`}
            onClick={() => setOpen(false)}
          >
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a className="site-nav__link" href={href}>
                  {label}
                </a>
              </li>
            ))}

            {steamLink && (
              <li>
                <a
                  className="btn-primary"
                  href={steamLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wishlist on Steam
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;