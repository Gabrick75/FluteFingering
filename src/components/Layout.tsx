import { Link, useLocation } from 'react-router-dom';
import DarkToggle from './DarkToggle';
import BackToTop from './BackToTop';
import type { ReactNode } from 'react';

const SUBTITLE_MAP: Record<string, string> = {
  '/baroque-flute': 'Baroque Flute',
  '/transverse-flute': 'Transverse Flute',
  '/piccolo': 'Piccolo',
  '/recorder': 'Recorder',
};

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const subtitle = SUBTITLE_MAP[location.pathname];

  return (
    <div id="wrapper">
      <header className={isHome ? 'site-header site-header--hero' : 'site-header'}>
        {isHome && <div className="header-ornament" aria-hidden="true" />}
        <h1>
          <Link to="/">Flute Fingering Charts</Link>
          {subtitle && <span className="subtitle">{subtitle}</span>}
        </h1>
        {isHome && (
          <p className="hero-tagline">
            Every fingering drawn as it appears on the instrument itself —
            holes, keys, and hand position, not a simplified diagram.
          </p>
        )}
        {!isHome && (
          <Link to="/" className="back-link">← All Instruments</Link>
        )}
      </header>

      {children}

      <div id="footer">
        site by <a href="https://github.com/Gabrick75" title="Gabrick">Gabrick75</a>
      </div>

      <DarkToggle />
      <BackToTop />
    </div>
  );
}
