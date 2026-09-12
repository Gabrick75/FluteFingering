import { Link } from 'react-router-dom';
import '../styles/home.css';

const instruments = [
  {
    path: '/baroque-flute',
    label: 'Baroque Flute',
    desc: 'Traverso — complete fingering chart with historical sources',
    stats: '4 octaves · 70 notes · 256 variations',
    img: `${import.meta.env.BASE_URL}images/baroque-flute.jpg`,
  },
  {
    path: '/transverse-flute',
    label: 'Transverse Flute',
    desc: 'Modern Böhm-system flute fingering chart',
    stats: '4 octaves · 50 notes · 239 variations',
    img: `${import.meta.env.BASE_URL}images/transverse-flute.jpeg`,
  },
  {
    path: '/piccolo',
    label: 'Piccolo',
    desc: 'Piccolo fingering chart',
    stats: '3 octaves · 39 notes · 94 variations',
    img: `${import.meta.env.BASE_URL}images/piccolo.jpg`,
  },
  {
    path: '/recorder',
    label: 'Recorder',
    desc: 'Recorder (Blockflöte) fingering chart',
    img: `${import.meta.env.BASE_URL}images/recorder.jpeg`,
    badge: 'Coming soon',
  },
];

function InstrumentCard(inst: (typeof instruments)[number]) {
  const body = (
    <>
      <img src={inst.img} alt={inst.label} className="instrument-card-img" loading="lazy" />
      <div className="instrument-card-body">
        <h2>{inst.label}</h2>
        <p>{inst.desc}</p>
        {inst.stats && <span className="instrument-card-stats">{inst.stats}</span>}
        {inst.badge && <span className="instrument-card-badge">{inst.badge}</span>}
      </div>
    </>
  );

  if (inst.badge) {
    return (
      <div key={inst.path} className="instrument-card is-disabled">
        {body}
      </div>
    );
  }
  return (
    <Link key={inst.path} to={inst.path} className="instrument-card">
      {body}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="content-section">
        <p>
          Each chart below is set straight from structured fingering data — the
          same holes and keys you would find on the instrument, not a
          shorthand diagram. Historical fingerings cite their source; modern
          ones follow standard practice.
        </p>
      </section>

      <section className="content-section">
        <div className="instrument-grid">
          {instruments.map(InstrumentCard)}
        </div>
      </section>

      <section className="marginalia">
        <p>Built for the practice stand — every chart works on a phone screen, mid-piece.</p>
        <p>Dark mode remembers your choice and never redraws the charts.</p>
        <p>Historical fingerings are cited per source, never asserted.</p>
      </section>
    </>
  );
}
