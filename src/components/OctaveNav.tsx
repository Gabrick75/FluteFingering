import { useEffect, useState } from 'react';

export default function OctaveNav() {
  const [octaves, setOctaves] = useState<number[]>([]);

  useEffect(() => {
    const bodies = [...document.querySelectorAll<HTMLElement>('[id^="octave-"]')]
      .map((el) => Number(el.id.replace('octave-', '')))
      .filter((n) => Number.isFinite(n))
      .sort((a, b) => a - b);
    setOctaves(bodies);
  }, []);

  useEffect(() => {
    const ids = octaves.map((n) => `octave-${n}`);
    if (ids.length === 0) return;

    const links = document.querySelectorAll('#octave-nav .octave-link');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => {
              l.classList.toggle(
                'active',
                l.getAttribute('href') === '#' + e.target.id
              );
            });
          }
        });
      },
      { rootMargin: '-70px 0px -50% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [octaves]);

  return (
    <nav id="octave-nav">
      <span className="nav-label">Octaves</span>
      {octaves.map((n) => (
        <a key={n} href={`#octave-${n}`} className="octave-link">
          <span className="octave-num">{n}</span>
        </a>
      ))}
    </nav>
  );
}
