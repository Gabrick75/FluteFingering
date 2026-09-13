import { useEffect, Fragment } from 'react';
import { baroqueFluteData, type OctaveData } from '../data/baroqueFluteData';
import OctaveNav from '../components/OctaveNav';
import NoteStaff from '../components/NoteStaff';

const HOLE_CLASS: Record<string, string> = {
  c: 'closed',
  o: 'open',
  s: 'shaded',
};

function renderHole(state: string) {
  const cls = HOLE_CLASS[state] || 'open';
  return <span className={`hole ${cls}`}></span>;
}

// Maps 10-column table position → 7-char data index (-1 = spacer)
const POS_TO_DATA = [0, 1, 2, -1, 3, 4, 5, -1, 6, -1];

function renderFingeringRow(holes: string, sources: string) {
  return (
    <tr key={holes + sources}>
      {POS_TO_DATA.map((dataIdx, i) => (
        <td key={i}>
          {dataIdx >= 0 ? renderHole(holes[dataIdx]) : '\u00A0'}
        </td>
      ))}
      <td>{sources || <br />}</td>
    </tr>
  );
}

function renderNote(note: { noteName: string; anchorName: string; variations: Array<{ holes: string; sources: string }> }) {
  return (
    <Fragment key={note.anchorName}>
      <tr className="note-header">
        <td colSpan={11}>
          <div className="note-header-row">
            <NoteStaff noteName={note.noteName} className="note-staff" />
            <h3><a id={note.anchorName}>{note.noteName}</a></h3>
          </div>
        </td>
      </tr>
      {note.variations.map((v, i) => renderFingeringRow(v.holes, v.sources))}
      <tr><td colSpan={11}>&nbsp;</td></tr>
    </Fragment>
  );
}

const ORDINAL_SUFFIX = ['', 'st', 'nd', 'rd', 'th'];

function renderOctave(octave: OctaveData) {
  const suffix = ORDINAL_SUFFIX[octave.number] || 'th';
  return (
    <tbody key={octave.number} id={`octave-${octave.number}`}>
      <tr className="octave-header">
        <td colSpan={11}>{octave.number}{suffix} Octave</td>
      </tr>
      {octave.notes.map(renderNote)}
    </tbody>
  );
}

function shortNoteLabel(noteName: string): string {
  return noteName.replace(/'+/g, '').replace(/ or /g, '/');
}

function renderQuickJumpIndex(data: OctaveData[]) {
  return (
    <tbody>
      {data.map((octave) => (
        <tr key={octave.number}>
          <td colSpan={11}>
            <b>{octave.number}</b>{' '}
            {octave.notes.map((note) => (
              <a key={note.anchorName} href={`#${note.anchorName}`}>
                {shortNoteLabel(note.noteName)}{' '}
              </a>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function renderAbbreviations() {
  const entries = [
    { date: '1707', author: 'Hotteterre', abbrev: 'Ht' },
    { date: '1730/31', author: 'Prelleur', abbrev: 'P' },
    { date: 'c1740', author: 'Corrette', abbrev: 'C' },
    { date: '1752', author: 'Quantz', abbrev: 'Q' },
    { date: '1753', author: 'Quantz Berlin', abbrev: 'QB' },
    { date: '1759', author: 'Mahaut', abbrev: 'Mh' },
    { date: '1761', author: 'Delusse', abbrev: 'Dl' },
    { date: '1766', author: 'Compleat Tutor', abbrev: 'CT' },
    { date: '1766', author: 'Granom', abbrev: 'Gr' },
    { date: '1771', author: 'Heron', abbrev: 'Hr' },
    { date: '1791', author: 'Tromlitz', abbrev: 'T' },
    { date: '1792', author: 'Wragg', abbrev: 'W' },
    { date: '1794', author: 'Devienne', abbrev: 'Dv' },
    { date: 'c1795', author: 'Gunn', abbrev: 'Gu' },
    { date: '1799', author: 'Miller', abbrev: 'Ml' },
    { date: '1804', author: 'Hugot & Wunderlich', abbrev: 'HW' },
    { date: '1815', author: 'Beale', abbrev: 'Be' },
    { date: '1816', author: 'Nicholson', abbrev: 'N' },
    { date: '1816-22', author: 'Keith', abbrev: 'K' },
    { date: 'c1821', author: 'Alexander', abbrev: 'A' },
    { date: 'c1825', author: 'Bown', abbrev: 'Bo' },
  ];

  return (
    <section className="content-section" style={{ maxWidth: '780px', margin: '48px auto' }}>
      <h2 id="abb">Abbreviations</h2>
      <table className="abbrev-table" cellPadding={5}>
        <tbody>
          <tr><td><b>Date</b></td><td><b>Author</b></td><td><b>Abbreviation</b></td></tr>
          {entries.map((e) => (
            <tr key={e.abbrev}>
              <td>{e.date}</td>
              <td>{e.author}</td>
              <td>{e.abbrev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function BaroqueFluteChart() {
  useEffect(() => {
    // Handle initial hash on load
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView(), 100);
      }
    }
  }, []);

  return (
    <>
      <div className="chart-legend">
        <span className="chart-legend-item">
          <span className="hole closed"></span> Closed
        </span>
        <span className="chart-legend-item">
          <span className="hole open"></span> Open
        </span>
        <span className="chart-legend-item">
          <span className="hole shaded"></span> Half-hole
        </span>
      </div>

      <OctaveNav />

      <table id="fingering-chart" cellPadding={3} cellSpacing={0}>
        {renderQuickJumpIndex(baroqueFluteData)}
        {baroqueFluteData.map(renderOctave)}
      </table>

      {renderAbbreviations()}
    </>
  );
}
