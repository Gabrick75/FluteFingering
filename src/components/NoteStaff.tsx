import { parseNoteName, staffStep, ledgerLineSteps, type Accidental } from '../utils/pitch';

// ── SIZE KNOB ────────────────────────────────────────────────────────────
// Edit this one number and save — Vite hot-reloads instantly. It scales the
// whole staff (lines, clef, notehead, accidentals) together, keeping their
// proportions correct. The clef in particular MUST stay sized relative to
// the staff's own line spacing, or it starts and ends short of where its
// loops need to be and looks like it's missing pieces — so don't resize the
// clef on its own; this is the only lever.
const SCALE = 2;

// Geometry below is tuned at SCALE = 1, in SVG user units (~1 unit ≈ 1px at
// that scale). Kept intentionally simple — no stems, no time signature, no
// full engraving — just enough to read a pitch at a glance: 5 lines, clef,
// notehead, accidental, ledger lines.
const HALF_GAP = 3 * SCALE; // vertical distance per diatonic half-step
const STAFF_BOTTOM_Y = 24 * SCALE; // y of the bottom line (E4, step 0)
const STAFF_WIDTH = 72 * SCALE;

const CLEF_X = 3 * SCALE;
const CLEF_HEIGHT = 40 * SCALE; // 1.5x the staff height — matches a real clef's reach above/below the lines
const CLEF_ASPECT = 1100 / 3000; // width / height of the source glyph
const CLEF_WIDTH = CLEF_HEIGHT * CLEF_ASPECT;
// The clef's coil is drawn starting on the G4 line (the staff's 2nd line from
// the bottom); this is the fraction down from the glyph's top that lands there.
const CLEF_ANCHOR_FRACTION = 0.5;

const ACCIDENTAL_X = CLEF_X + CLEF_WIDTH + 7 * SCALE;
const NOTE_X = ACCIDENTAL_X + 11 * SCALE;
const LEDGER_HALF_WIDTH = 6 * SCALE;
const PADDING = 3 * SCALE;
const LINE_STROKE = 0.9 * SCALE;
const NOTE_RX = 4 * SCALE;
const NOTE_RY = 3 * SCALE;

const INK = '#241608';

const stepY = (step: number) => STAFF_BOTTOM_Y - step * HALF_GAP;

const ACCIDENTAL_GLYPH: Partial<Record<Accidental, string>> = {
  sharp: '♯',
  flat: '♭',
  'double-flat': '♭♭',
};

function Accidental({ kind, x, y }: { kind: Accidental; x: number; y: number }) {
  if (kind === 'natural') return null;
  if (kind === 'double-sharp') {
    const r = 2.4 * SCALE;
    return (
      <g stroke={INK} strokeWidth={1.1 * SCALE} strokeLinecap="round">
        <line x1={x - r} y1={y - r} x2={x + r} y2={y + r} />
        <line x1={x - r} y1={y + r} x2={x + r} y2={y - r} />
      </g>
    );
  }
  return (
    <text
      x={x}
      y={y}
      fill={INK}
      fontSize={(kind === 'double-flat' ? 10 : 11) * SCALE}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {ACCIDENTAL_GLYPH[kind]}
    </text>
  );
}

interface NoteStaffProps {
  noteName: string;
  className?: string;
}

export default function NoteStaff({ noteName, className }: NoteStaffProps) {
  const pitch = parseNoteName(noteName);
  if (!pitch) return null;

  const step = staffStep(pitch);
  const noteY = stepY(step);
  const ledgerYs = ledgerLineSteps(step).map(stepY);

  // Raises just the clef glyph by one staff line-space, independent of the
  // staff lines, notehead, and accidental — edit the multiplier to nudge
  // further (0 = back to sitting on the G4 line, 2 = up two lines, etc.).
  const CLEF_LIFT = 1 * (2 * HALF_GAP);
  const clefTopY = stepY(2) - CLEF_ANCHOR_FRACTION * CLEF_HEIGHT - CLEF_LIFT;
  const clefBottomY = clefTopY + CLEF_HEIGHT;

  const contentTops = [0, clefTopY, noteY - NOTE_RY, ...ledgerYs];
  const contentBottoms = [STAFF_BOTTOM_Y, clefBottomY, noteY + NOTE_RY, ...ledgerYs];
  const top = Math.min(...contentTops) - PADDING;
  const bottom = Math.max(...contentBottoms) + PADDING;

  return (
    <svg
      className={className}
      width={STAFF_WIDTH}
      height={bottom - top}
      viewBox={`0 ${top} ${STAFF_WIDTH} ${bottom - top}`}
      role="img"
      aria-label={`Staff notation for ${noteName}`}
    >
      {[0, 2, 4, 6, 8].map((s) => (
        <line
          key={s}
          x1={0}
          y1={stepY(s)}
          x2={STAFF_WIDTH}
          y2={stepY(s)}
          stroke={INK}
          strokeWidth={LINE_STROKE}
        />
      ))}

      <use
        href="#treble-clef-glyph"
        x={CLEF_X}
        y={clefTopY}
        width={CLEF_WIDTH}
        height={CLEF_HEIGHT}
        fill={INK}
      />

      {ledgerYs.map((y) => (
        <line
          key={y}
          x1={NOTE_X - LEDGER_HALF_WIDTH}
          y1={y}
          x2={NOTE_X + LEDGER_HALF_WIDTH}
          y2={y}
          stroke={INK}
          strokeWidth={LINE_STROKE}
        />
      ))}

      <Accidental kind={pitch.accidental} x={ACCIDENTAL_X} y={noteY} />

      <ellipse
        cx={NOTE_X}
        cy={noteY}
        rx={NOTE_RX}
        ry={NOTE_RY}
        fill={INK}
        transform={`rotate(-20 ${NOTE_X} ${noteY})`}
      />
    </svg>
  );
}
