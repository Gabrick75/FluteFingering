import { useEffect, Fragment } from 'react';
import { type FluteOctave, type FluteNote, type FluteFingering } from '../data/transverseFluteData';
import OctaveNav from './OctaveNav';
import KeyLever from './KeyLever';
import FluteDiagram from './FluteDiagram';
import NoteStaff from './NoteStaff';

const HOLE_CLASS: Record<string, string> = {
  '1': 'closed',
  '2': 'closed',
  '3': 'closed',
  '0': 'open',
  '-': 'open',
  '½': 'shaded',
  '¾': 'quarter',
};

const TRIL_KEYS = new Set(['Bb', 'D', 'D#']);
const FOOT_KEY_ORDER = ['B', 'C', 'C#', 'Eb', 'Gizmo'];
const COLSPAN = 12;

function renderHole(state: string) {
  return <span className={`hole ${HOLE_CLASS[state] || 'open'}`}></span>;
}

function renderThumb(thumb: string) {
  const either = thumb === 'T';
  return (
    <span className="keys-cluster thumb-cluster">
      <KeyLever kind="b-thumb" label="B" pressed={either || thumb === 'Bb'} className="key-thumb" />
      <KeyLever kind="bb-thumb" label="Bb" pressed={either || thumb === 'B'} className="key-thumb" />
    </span>
  );
}

function renderGSharp(gSharp: boolean) {
  return (
    <span className="keys-cluster">
      <KeyLever kind="gsharp" label="G#" pressed={gSharp} className="key-gsharp" />
    </span>
  );
}

function footKeysFor(data: FluteOctave[]) {
  const used = new Set(
    data.flatMap((o) => o.notes.flatMap((n) => n.variations.flatMap((v) => v.keys)))
  );
  return FOOT_KEY_ORDER.filter((k) => k !== 'Gizmo' || used.has(k));
}

function renderKeysCell(v: FluteFingering, footKeys: string[]) {
  return (
    <span className="keys-cluster">
      {footKeys.map((name) => (
        <KeyLever
          key={name}
          kind={name === 'Eb' ? 'eb' : 'foot'}
          label={name}
          pressed={v.keys.includes(name)}
          className={name === 'Gizmo' ? 'key-gizmo' : 'key-pinky'}
        />
      ))}
      {v.keys
        .filter((k) => TRIL_KEYS.has(k))
        .map((k) => (
          <KeyLever key={k} kind="trill" label={k} pressed className="key-trill" />
        ))}
      {v.bell ? (
        <span className="flute-key bell" title="Close the foot/bell end">
          X
        </span>
      ) : null}
    </span>
  );
}

function sigOf(v: FluteFingering) {
  return `${v.thumb}|${v.lh}|${v.gSharp}|${v.rh}|${v.keys.join(',')}|${v.bell ? 'X' : ''}`;
}

function renderFingeringRow(v: FluteFingering, footKeys: string[], noteName: string, diagram: boolean, instrument: 'flute' | 'piccolo') {
  if (diagram) {
    return (
      <tr key={sigOf(v)}>
        <td colSpan={COLSPAN - 1} className="fd-cell">
          <FluteDiagram fingering={v} noteLabel={noteName} instrument={instrument} />
        </td>
        <td className="desc-cell">
          {v.desc || <br />}
          {v.src && <span className="src"> ({v.src})</span>}
        </td>
      </tr>
    );
  }
  return (
    <tr key={sigOf(v)}>
      <td>{renderThumb(v.thumb)}</td>
      {[...v.lh].map((s, i) => (
        <td key={i}>{renderHole(s)}</td>
      ))}
      <td>{renderGSharp(v.gSharp)}</td>
      <td className="spacer"></td>
      {[...v.rh].map((s, i) => (
        <td key={i}>{renderHole(s)}</td>
      ))}
      <td className="spacer"></td>
      <td className="keys-cell">{renderKeysCell(v, footKeys)}</td>
      <td className="desc-cell">
        {v.desc || <br />}
        {v.src && <span className="src"> ({v.src})</span>}
      </td>
    </tr>
  );
}

function renderNote(note: FluteNote, footKeys: string[], diagram: boolean, instrument: 'flute' | 'piccolo') {
  return (
    <Fragment key={note.anchorName}>
      <tr className="note-header">
        <td colSpan={COLSPAN}>
          <div className="note-header-row">
            <NoteStaff noteName={note.noteName} className="note-staff" />
            <h3><a id={note.anchorName}>{note.noteName}</a></h3>
          </div>
        </td>
      </tr>
      {note.variations.map((v) => renderFingeringRow(v, footKeys, note.noteName, diagram, instrument))}
      <tr><td colSpan={COLSPAN}>&nbsp;</td></tr>
    </Fragment>
  );
}

const ORDINAL_SUFFIX = ['', 'st', 'nd', 'rd', 'th'];

function renderOctave(octave: FluteOctave, footKeys: string[], diagram: boolean, instrument: 'flute' | 'piccolo') {
  const suffix = ORDINAL_SUFFIX[octave.number] || 'th';
  return (
    <tbody key={octave.number} id={`octave-${octave.number}`}>
      <tr className="octave-header">
        <td colSpan={COLSPAN}>{octave.number}{suffix} Octave</td>
      </tr>
      {octave.notes.map((note) => renderNote(note, footKeys, diagram, instrument))}
    </tbody>
  );
}

function shortNoteLabel(noteName: string): string {
  return noteName.replace(/'+/g, '').replace(/ or /g, '/');
}

function renderQuickJumpIndex(data: FluteOctave[]) {
  return (
    <tbody>
      {data.map((octave) => (
        <tr key={octave.number}>
          <td colSpan={COLSPAN}>
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

function renderColumnHeader(diagram: boolean) {
  if (diagram) {
    return (
      <thead>
        <tr className="column-header">
          <th colSpan={COLSPAN - 1}>Fingering</th>
          <th>Notes</th>
        </tr>
      </thead>
    );
  }
  return (
    <thead>
      <tr className="column-header">
        <th>Thumb</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>G#</th>
        <th className="spacer"></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th className="spacer"></th>
        <th>Keys</th>
        <th>Notes</th>
      </tr>
    </thead>
  );
}

function renderLegend(diagram: boolean) {
  if (diagram) {
    return (
      <div className="chart-legend">
        <span className="chart-legend-item">
          <span className="fd-legend closed"></span> Closed hole / key pressed
        </span>
        <span className="chart-legend-item">
          <span className="fd-legend open"></span> Open hole / key released
        </span>
        <span className="chart-legend-item">
          <span className="fd-legend half"></span> Half-hole / press half
        </span>
        <span className="chart-legend-item">
          <span className="fd-legend quarter"></span> &frac34; hole / cover most
        </span>
      </div>
    );
  }
  return (
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
      <span className="chart-legend-item">
        <span className="hole quarter"></span> &frac34; hole
      </span>
      <span className="chart-legend-item">
        <KeyLever kind="foot" label="C" pressed className="key-pinky" /> press a key
      </span>
      <span className="chart-legend-item">
        <KeyLever kind="foot" label="C" pressed={false} className="key-pinky" /> do not press
      </span>
      <span className="chart-legend-item">
        <span className="flute-key bell">X</span> Close the foot/bell
      </span>
    </div>
  );
}

interface FluteChartTableProps {
  data: FluteOctave[];
  diagram?: boolean;
  instrument?: 'flute' | 'piccolo';
}

export default function FluteChartTable({ data, diagram = false, instrument = 'flute' }: FluteChartTableProps) {
  const footKeys = footKeysFor(data);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView(), 100);
    }
  }, []);

  return (
    <>
      {renderLegend(diagram)}
      <OctaveNav />
      <table
        id="flute-chart"
        cellPadding={3}
        cellSpacing={0}
        className={diagram ? 'diagram-mode' : ''}
      >
        {renderColumnHeader(diagram)}
        {renderQuickJumpIndex(data)}
        {data.map((o) => renderOctave(o, footKeys, diagram, instrument))}
      </table>
    </>
  );
}
