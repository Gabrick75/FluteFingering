// German-system soprano recorder fingering data.
//
// Encoding matches the rest of the app's hole-state convention
// ('1' closed, '0' open, '½' half-covered, '¾' three-quarters covered):
//   thumb — the back thumb hole: '1' closed, '0' fully open, '¾' pinched
//           open a crack (the second-register voicing hole)
//   holes — 7 characters for finger holes 1-7 (holes 6 and 7 are each
//           physically split into two small holes; '½' closes only the
//           upper of the pair)
//
// Source: Yamaha's official soprano recorder (German) fingering chart.

export interface RecorderFingering {
  thumb: string;
  holes: string;
  desc: string;
  src: string;
}

export interface RecorderNote {
  noteName: string;
  anchorName: string;
  variations: RecorderFingering[];
}

export interface RecorderOctave {
  number: number;
  notes: RecorderNote[];
}

const PINCH = 'Pinch the thumb hole slightly open.';

export const recorderData: RecorderOctave[] = [
  {
    number: 1,
    notes: [
      {
        noteName: 'C4',
        anchorName: 'c4',
        variations: [{ thumb: '1', holes: '1111111', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'C#4 / Db4',
        anchorName: 'db4',
        variations: [{ thumb: '1', holes: '111111½', desc: 'Shade the lower half of hole 7.', src: '' }],
      },
      {
        noteName: 'D4',
        anchorName: 'd4',
        variations: [{ thumb: '1', holes: '1111110', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'D#4 / Eb4',
        anchorName: 'eb4',
        variations: [{ thumb: '1', holes: '11111½0', desc: 'Shade the lower half of hole 6.', src: '' }],
      },
      {
        noteName: 'E4',
        anchorName: 'e4',
        variations: [{ thumb: '1', holes: '1111100', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'F4',
        anchorName: 'f4',
        variations: [{ thumb: '1', holes: '1111000', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'F#4 / Gb4',
        anchorName: 'gb4',
        variations: [{ thumb: '1', holes: '11101½½', desc: 'Shade the lower half of holes 6 and 7.', src: '' }],
      },
      {
        noteName: 'G4',
        anchorName: 'g4',
        variations: [{ thumb: '1', holes: '1110000', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'G#4 / Ab4',
        anchorName: 'ab4',
        variations: [{ thumb: '1', holes: '11011½0', desc: 'Shade the lower half of hole 6.', src: '' }],
      },
      {
        noteName: 'A4',
        anchorName: 'a4',
        variations: [{ thumb: '1', holes: '1100000', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'A#4 / Bb4',
        anchorName: 'bb4',
        variations: [{ thumb: '1', holes: '1011000', desc: 'Fork fingering.', src: '' }],
      },
      {
        noteName: 'B4',
        anchorName: 'b4',
        variations: [
          { thumb: '1', holes: '1000000', desc: 'Basic.', src: '' },
          { thumb: '1', holes: '0110000', desc: 'Alternate fingering.', src: '' },
        ],
      },
    ],
  },
  {
    number: 2,
    notes: [
      {
        noteName: 'C5',
        anchorName: 'c5',
        variations: [{ thumb: '1', holes: '0100000', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'C#5 / Db5',
        anchorName: 'db5',
        variations: [
          { thumb: '0', holes: '1100000', desc: 'Basic.', src: '' },
          { thumb: '1', holes: '0000000', desc: 'Alternate fingering.', src: '' },
        ],
      },
      {
        noteName: 'D5',
        anchorName: 'd5',
        variations: [{ thumb: '0', holes: '0100000', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'D#5 / Eb5',
        anchorName: 'eb5',
        variations: [{ thumb: '0', holes: '0111110', desc: 'Basic.', src: '' }],
      },
      {
        noteName: 'E5',
        anchorName: 'e5',
        variations: [{ thumb: '¾', holes: '1111100', desc: PINCH, src: '' }],
      },
      {
        noteName: 'F5',
        anchorName: 'f5',
        variations: [{ thumb: '¾', holes: '1111000', desc: PINCH, src: '' }],
      },
      {
        noteName: 'F#5 / Gb5',
        anchorName: 'gb5',
        variations: [
          { thumb: '¾', holes: '1110111', desc: PINCH, src: '' },
          { thumb: '¾', holes: '11101½0', desc: `Alternate fingering. ${PINCH} Shade the lower half of hole 6.`, src: '' },
        ],
      },
      {
        noteName: 'G5',
        anchorName: 'g5',
        variations: [{ thumb: '¾', holes: '1110000', desc: PINCH, src: '' }],
      },
      {
        noteName: 'G#5 / Ab5',
        anchorName: 'ab5',
        variations: [{ thumb: '¾', holes: '1110111', desc: PINCH, src: '' }],
      },
      {
        noteName: 'A5',
        anchorName: 'a5',
        variations: [{ thumb: '¾', holes: '1100000', desc: PINCH, src: '' }],
      },
      {
        noteName: 'A#5 / Bb5',
        anchorName: 'bb5',
        variations: [{ thumb: '¾', holes: '1101110', desc: `${PINCH} Fork fingering.`, src: '' }],
      },
      {
        noteName: 'B5',
        anchorName: 'b5',
        variations: [{ thumb: '¾', holes: '1101100', desc: PINCH, src: '' }],
      },
    ],
  },
  {
    number: 3,
    notes: [
      {
        noteName: 'C6',
        anchorName: 'c6',
        variations: [{ thumb: '¾', holes: '1001100', desc: PINCH, src: '' }],
      },
      {
        noteName: 'C#6 / Db6',
        anchorName: 'db6',
        variations: [{ thumb: '¾', holes: '10110½1', desc: `${PINCH} Shade the lower half of hole 6.`, src: '' }],
      },
      {
        noteName: 'D6',
        anchorName: 'd6',
        variations: [{ thumb: '¾', holes: '10110½0', desc: `${PINCH} Shade the lower half of hole 6. Highest note of the chart.`, src: '' }],
      },
    ],
  },
];
