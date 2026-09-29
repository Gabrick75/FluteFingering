import { memo } from 'react';
import { type RecorderFingering } from '../data/recorderData';

type HoleState = 'closed' | 'open' | 'half' | 'quarter';

function holeState(s: string): HoleState {
  if (s === '1') return 'closed';
  if (s === '½') return 'half';
  if (s === '¾') return 'quarter';
  return 'open';
}

const CX = 70;
const R_MAIN = 12;
const R_SMALL = 9;
const R_PAIR = 7.5;
const PAIR_GAP = 10;

const ROWS = [
  { y: 118, r: R_MAIN }, // hole 1
  { y: 162, r: R_MAIN }, // hole 2
  { y: 206, r: R_MAIN }, // hole 3
  { y: 250, r: R_MAIN }, // hole 4
  { y: 290, r: R_SMALL }, // hole 5
];

function renderHole(cx: number, cy: number, r: number, state: HoleState, key: string) {
  if (state === 'half') {
    return (
      <g key={key}>
        <path d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy} Z`} className="fd-hole fd-hole-top" />
        <path d={`M${cx - r},${cy} A${r},${r} 0 0,0 ${cx + r},${cy} Z`} className="fd-hole fd-hole-bottom" />
        <circle cx={cx} cy={cy} r={r} className="fd-hole-ring" />
      </g>
    );
  }
  if (state === 'quarter') {
    return (
      <g key={key}>
        <circle cx={cx} cy={cy} r={r} className="fd-hole closed" />
        <path
          d={`M${cx},${cy} L${cx + r},${cy} A${r},${r} 0 0,1 ${cx},${cy + r} Z`}
          className="fd-hole fd-hole-top"
        />
        <circle cx={cx} cy={cy} r={r} className="fd-hole-ring" />
      </g>
    );
  }
  return <circle key={key} cx={cx} cy={cy} r={r} className={`fd-hole ${state}`} />;
}

function renderPair(cy: number, state: HoleState, key: string) {
  // The physical hole is split in two; 'half' closes only the left half.
  const left: HoleState = state === 'half' ? 'closed' : state;
  const right: HoleState = state === 'half' ? 'open' : state;
  return (
    <g key={key}>
      {renderHole(CX - PAIR_GAP / 2, cy, R_PAIR, left, `${key}-l`)}
      {renderHole(CX + PAIR_GAP / 2, cy, R_PAIR, right, `${key}-r`)}
    </g>
  );
}

interface RecorderDiagramProps {
  fingering: RecorderFingering;
  noteLabel?: string;
}

function RecorderDiagram({ fingering: f, noteLabel }: RecorderDiagramProps) {
  const thumb = holeState(f.thumb);
  const holes = [...f.holes.padEnd(7, '0')].map(holeState);

  return (
    <svg
      viewBox="0 0 140 420"
      className="recorder-diagram"
      role="img"
      aria-label={`Fingering for ${noteLabel ?? 'note'} on German recorder`}
    >
      {/* body silhouette — beak, tube, flared foot, as one smooth outline */}
      <path
        className="rd-body"
        d="
          M59,10
          Q59,6 63,6
          L77,6
          Q81,6 81,10
          L81,34
          C81,46 87,49 87,62
          L87,332
          C87,349 94,349 94,362
          Q94,370 86,372
          L54,372
          Q46,370 46,362
          C46,349 53,349 53,332
          L53,62
          C53,49 59,46 59,34
          Z
        "
      />

      {/* joint bands — headjoint/body and body/foot */}
      <rect x="53" y="60" width="34" height="5" className="rd-joint" />
      <rect x="47" y="330" width="46" height="5" className="rd-joint" />

      {/* thumb hole, on the back of the instrument */}
      {renderHole(CX - 30, ROWS[0].y, 9, thumb, 'thumb')}

      {/* holes 1-5 */}
      {ROWS.map((row, i) => renderHole(CX, row.y, row.r, holes[i], `h${i + 1}`))}

      {/* holes 6-7, each physically split in two */}
      {renderPair(326, holes[5], 'h6')}
      {renderPair(360, holes[6], 'h7')}
    </svg>
  );
}

RecorderDiagram.displayName = 'RecorderDiagram';

export default memo(RecorderDiagram);
