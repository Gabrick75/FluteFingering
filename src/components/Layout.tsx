import { Link, useLocation } from 'react-router-dom';
import DarkToggle from './DarkToggle';
import BackToTop from './BackToTop';
import TrebleClefSprite from './TrebleClefSprite';
import { usePageMeta } from '../hooks/usePageMeta';
import type { ReactNode } from 'react';

const SUBTITLE_MAP: Record<string, string> = {
  '/baroque-flute': '1-key Baroque Flute',
  '/transverse-flute': 'Transverse Flute',
  '/piccolo': 'Piccolo',
  '/recorder': 'Recorder',
};

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Flute Fingering Charts — Baroque Flute, Transverse Flute, Piccolo',
    description:
      'Free fingering charts for the 1-key baroque traverso, modern transverse flute, and piccolo — every fingering drawn as it appears on the instrument, with historical sources.',
  },
  '/baroque-flute': {
    title: '1-key Baroque Flute Fingering Chart | Flute Fingering Charts',
    description:
      'Complete fingering chart for the 1-key baroque traverso, covering every note across four octaves with historical sources from Hotteterre to Nicholson.',
  },
  '/transverse-flute': {
    title: 'Transverse Flute Fingering Chart | Flute Fingering Charts',
    description:
      'Complete Boehm-system transverse flute fingering chart, covering every note and alternate fingering across four octaves.',
  },
  '/piccolo': {
    title: 'Piccolo Fingering Chart | Flute Fingering Charts',
    description:
      'Complete piccolo fingering chart, covering every note and alternate fingering across three octaves.',
  },
  '/recorder': {
    title: 'Recorder Fingering Chart | Flute Fingering Charts',
    description: 'Recorder (Blockflöte) fingering chart — coming soon.',
  },
};

const DEFAULT_META = PAGE_META['/'];

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const subtitle = SUBTITLE_MAP[location.pathname];
  const meta = PAGE_META[location.pathname] ?? DEFAULT_META;
  usePageMeta(meta.title, meta.description);

  return (
    <div id="wrapper">
      <TrebleClefSprite />
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
