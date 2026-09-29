import { useEffect } from 'react';
import { type RecorderOctave, type RecorderFingering } from '../data/recorderData';
import OctaveNav from './OctaveNav';
import RecorderDiagram from './RecorderDiagram';
import NoteStaff from './NoteStaff';

function sigOf(v: RecorderFingering) {
  return `${v.thumb}|${v.holes}`;
}

function shortNoteLabel(noteName: string): string {
  return noteName.replace(/ \/ /g, '/');
}

const ORDINAL_SUFFIX = ['', 'st', 'nd', 'rd'];

function renderLegend() {
  return (
    <div className="chart-legend">
      <span className="chart-legend-item">
        <span className="fd-legend closed"></span> Closed hole
      </span>
      <span className="chart-legend-item">
        <span className="fd-legend open"></span> Open hole
      </span>
      <span className="chart-legend-item">
        <span className="fd-legend half"></span> Half-hole — shade the near half
      </span>
      <span className="chart-legend-item">
        <span className="fd-legend quarter"></span> Pinched thumb hole (2nd register)
      </span>
    </div>
  );
}

function renderQuickJump(data: RecorderOctave[]) {
  return (
    <div className="recorder-quick-jump">
      {data.map((octave) => (
        <p key={octave.number}>
          <b>{octave.number}</b>{' '}
          {octave.notes.map((note) => (
            <a key={note.anchorName} href={`#${note.anchorName}`}>
              {shortNoteLabel(note.noteName)}{' '}
            </a>
          ))}
        </p>
      ))}
    </div>
  );
}

interface RecorderChartTableProps {
  data: RecorderOctave[];
}

export default function RecorderChartTable({ data }: RecorderChartTableProps) {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView(), 100);
    }
  }, []);

  return (
    <>
      {renderLegend()}
      <OctaveNav />
      {renderQuickJump(data)}
      {data.map((octave) => (
        <section key={octave.number} id={`octave-${octave.number}`} className="recorder-octave">
          <h2 className="recorder-octave-header">
            {octave.number}
            {ORDINAL_SUFFIX[octave.number] || 'th'} Octave
          </h2>
          <div className="recorder-grid">
            {octave.notes.map((note) => (
              <div key={note.anchorName} id={note.anchorName} className="recorder-note-card">
                <NoteStaff noteName={note.noteName} className="note-staff" />
                <h3>{note.noteName}</h3>
                {note.variations.map((v) => (
                  <div key={sigOf(v)} className="recorder-variation">
                    <RecorderDiagram fingering={v} noteLabel={note.noteName} />
                    <p className="recorder-desc">
                      {v.desc}
                      {v.src && <span className="src"> ({v.src})</span>}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
