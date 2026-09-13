// Parses the free-text note names already used across the chart data
// ("C#' or Db'" — apostrophe octave marks; "B3 / Cb4" — scientific pitch
// notation) into a structured pitch, then maps that pitch to a vertical
// position on a treble staff.

export type Accidental = 'natural' | 'sharp' | 'flat' | 'double-sharp' | 'double-flat';

export interface Pitch {
  letter: string; // 'A'..'G'
  accidental: Accidental;
  octave: number; // scientific pitch notation octave (written/read pitch)
}

const LETTER_STEP: Record<string, number> = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };

const ACCIDENTAL_MAP: Record<string, Accidental> = {
  '': 'natural',
  '#': 'sharp',
  b: 'flat',
  x: 'double-sharp',
  bb: 'double-flat',
};

// Scientific pitch notation, e.g. "D4", "C#7", "Bb3" (transverse flute / piccolo data).
const SCIENTIFIC_RE = /^([A-G])(x|bb|#|b)?(\d+)$/;
// Apostrophe octave marks, e.g. "D'", "C#''", "Bbb'" (baroque flute data).
const APOSTROPHE_RE = /^([A-G])(x|bb|#|b)?('+)$/;

/**
 * A note name may list two enharmonic spellings ("C#' or Db'", "B3 / Cb4");
 * we always notate the first-listed spelling, per the data's own canonical order.
 */
export function parseNoteName(noteName: string): Pitch | null {
  const first = noteName.split(/\s+or\s+|\s*\/\s*/)[0].trim();

  let m = first.match(SCIENTIFIC_RE);
  if (m) {
    const [, letter, acc = '', octaveStr] = m;
    return { letter, accidental: ACCIDENTAL_MAP[acc], octave: parseInt(octaveStr, 10) };
  }

  m = first.match(APOSTROPHE_RE);
  if (m) {
    const [, letter, acc = '', marks] = m;
    // octave.number 1..4 in the data == 1..4 apostrophes == scientific octave 4..7
    // (the baroque flute's lowest note, D', is D4).
    return { letter, accidental: ACCIDENTAL_MAP[acc], octave: 3 + marks.length };
  }

  return null;
}

// Bottom line of the treble staff is E4; each diatonic step (letter name change)
// moves half a line-space, alternating between a line and the space above it.
const BASELINE_DIATONIC = 4 * 7 + LETTER_STEP.E;

/** Diatonic half-steps above the bottom staff line (E4 = 0, F4 = 1, G4 = 2, ...). */
export function staffStep(pitch: Pitch): number {
  return pitch.octave * 7 + LETTER_STEP[pitch.letter] - BASELINE_DIATONIC;
}

/**
 * Ledger line positions (in the same half-step units as staffStep) needed for a
 * note that falls outside the 5-line staff (steps 0-8). Lines sit every 2 steps.
 */
export function ledgerLineSteps(step: number): number[] {
  const lines: number[] = [];
  if (step <= -2) {
    for (let s = -2; s >= step; s -= 2) lines.push(s);
  } else if (step >= 10) {
    for (let s = 10; s <= step; s += 2) lines.push(s);
  }
  return lines;
}

// From C6 up (staffStep 12 — the 2nd ledger line above the staff), draw the
// note an octave (or more) lower and flag it with an "8va"/"15ma" mark
// instead of piling on ledger lines. One octave = 7 diatonic steps.
const OTTAVA_THRESHOLD_STEP = 12;
const STEPS_PER_OCTAVE = 7;

export interface OttavaShift {
  /** How many octaves lower the note is actually drawn (0 = drawn as written). */
  octaves: number;
  /** "8va", "15ma", "22ma", ... — undefined when no shift applies. */
  label?: string;
}

export function ottavaShift(step: number): OttavaShift {
  let octaves = 0;
  while (step - octaves * STEPS_PER_OCTAVE >= OTTAVA_THRESHOLD_STEP) octaves++;
  if (octaves === 0) return { octaves };
  const interval = octaves * STEPS_PER_OCTAVE + 1; // 8, 15, 22, ...
  return { octaves, label: interval === 8 ? '8va' : `${interval}ma` };
}
