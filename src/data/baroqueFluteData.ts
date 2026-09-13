// Baroque Flute fingering data

export type HoleState = 'c' | 'o' | 's';

export interface FingeringVariation {
  holes: string; // 7-char string: LH1-3, RH1-3, Key (c=closed, o=open, s=shaded)
  sources: string;
}

export interface NoteEntry {
  noteName: string;
  anchorName: string;
  variations: FingeringVariation[];
}

export interface OctaveData {
  number: number;
  notes: NoteEntry[];
}

export const baroqueFluteData: OctaveData[] = [
  {
    "number": 1,
    "notes": [
      {
        "noteName": "C#' or Db'",
        "anchorName": "Db",
        "variations": [
          {
            "holes": "ccccccc",
            "sources": "Ht, Mh"
          }
        ]
      },
      {
        "noteName": "D'",
        "anchorName": "D",
        "variations": [
          {
            "holes": "ccccccc",
            "sources": ""
          }
        ]
      },
      {
        "noteName": "D#' or Eb'",
        "anchorName": "Ds",
        "variations": [
          {
            "holes": "cccccco",
            "sources": ""
          }
        ]
      },
      {
        "noteName": "E'",
        "anchorName": "E",
        "variations": [
          {
            "holes": "cccccoc",
            "sources": ""
          },
          {
            "holes": "cccccoo",
            "sources": "Dl"
          }
        ]
      },
      {
        "noteName": "E#'",
        "anchorName": "Es",
        "variations": [
          {
            "holes": "ccccocc",
            "sources": "Q,QB,Mh,Dl,Gr,CT,Hr,T,W,Gu,Dv"
          },
          {
            "holes": "ccccoco",
            "sources": "Be, N, K, A"
          }
        ]
      },
      {
        "noteName": "Fb'",
        "anchorName": "Fb",
        "variations": [
          {
            "holes": "cccccoo",
            "sources": "Q, Mah"
          },
          {
            "holes": "cccccoc",
            "sources": "QB, Dl, Dv, HW, K"
          }
        ]
      },
      {
        "noteName": "F'",
        "anchorName": "F",
        "variations": [
          {
            "holes": "ccccocc",
            "sources": ""
          },
          {
            "holes": "ccccoco",
            "sources": "Be, N, K, A"
          }
        ]
      },
      {
        "noteName": "F#'",
        "anchorName": "Fs",
        "variations": [
          {
            "holes": "ccccooo",
            "sources": ""
          },
          {
            "holes": "ccccooc",
            "sources": "Q, Be"
          },
          {
            "holes": "cccoocc",
            "sources": "Q"
          }
        ]
      },
      {
        "noteName": "Gb'",
        "anchorName": "Gb",
        "variations": [
          {
            "holes": "cccoccc",
            "sources": "Ht, Q, T"
          },
          {
            "holes": "cccocco",
            "sources": "QB, Mh, Gr"
          },
          {
            "holes": "ccccooc",
            "sources": "P, Dl, Be"
          },
          {
            "holes": "ccccooo",
            "sources": ""
          }
        ]
      },
      {
        "noteName": "Fx'",
        "anchorName": "Fx",
        "variations": [
          {
            "holes": "cccoooc",
            "sources": "QB, T"
          }
        ]
      },
      {
        "noteName": "G'",
        "anchorName": "G",
        "variations": [
          {
            "holes": "cccoooc",
            "sources": "Ht, P, C, Q, QB, Mh, Gr, CT,Hr, W, Dv"
          },
          {
            "holes": "cccoooo",
            "sources": "Mh, Dl, T, Gu, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "cccooco",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "G#'",
        "anchorName": "Gs",
        "variations": [
          {
            "holes": "ccocccc",
            "sources": "Ht, P, C, Q, Mh, Gr, CT, T, W"
          },
          {
            "holes": "ccoccco",
            "sources": "QB, Dl, Hr, Gu, Dv, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ccococo",
            "sources": "Ml"
          }
        ]
      },
      {
        "noteName": "Ab'",
        "anchorName": "Ab",
        "variations": [
          {
            "holes": "ccocccc",
            "sources": "Ht, Q, Mh, Dl, Gr, CT, W"
          },
          {
            "holes": "ccooocc",
            "sources": "P"
          },
          {
            "holes": "ccoccco",
            "sources": "QB, Hr, Gu, Dv, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ccoccoc",
            "sources": "T"
          },
          {
            "holes": "ccococo",
            "sources": "Ml"
          }
        ]
      },
      {
        "noteName": "A'",
        "anchorName": "A",
        "variations": [
          {
            "holes": "ccooooc",
            "sources": "Ht, P, Q, QB, Mh, Gr, CT, Hr, W, Dv"
          },
          {
            "holes": "ccooooo",
            "sources": "C, Mh, Dl, T, Gu, Ml, HW, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "Bbb'",
        "anchorName": "Bbb",
        "variations": [
          {
            "holes": "ccooooo",
            "sources": "Gu"
          }
        ]
      },
      {
        "noteName": "A#'",
        "anchorName": "As",
        "variations": [
          {
            "holes": "cocccoc",
            "sources": "Ht, P, C, Mh, CT, Hr, W, Dv, HW"
          },
          {
            "holes": "coccccc",
            "sources": "Ht, QB, Gr, Mh"
          },
          {
            "holes": "cocccco",
            "sources": "Ht, Q, T, Mh"
          },
          {
            "holes": "cocccoc",
            "sources": "K"
          },
          {
            "holes": "cocccoo",
            "sources": "K, Dl, Gu, Ml, Be, N, A"
          },
          {
            "holes": "coccoco",
            "sources": "Bo"
          }
        ]
      },
      {
        "noteName": "Bb'",
        "anchorName": "Bb",
        "variations": [
          {
            "holes": "cocccoc",
            "sources": ""
          },
          {
            "holes": "coccccc",
            "sources": "Ht"
          },
          {
            "holes": "cocccco",
            "sources": "Ht"
          },
          {
            "holes": "coccocc",
            "sources": "Q, Mh, Dl, Dv, A"
          },
          {
            "holes": "cocoooo",
            "sources": "Mh, A"
          },
          {
            "holes": "cocccoo",
            "sources": "Gu, Ml, Be, N, K, A"
          },
          {
            "holes": "coccoco",
            "sources": "Bo"
          }
        ]
      },
      {
        "noteName": "B'",
        "anchorName": "B",
        "variations": [
          {
            "holes": "coooooc",
            "sources": "Ht, P, Q, QB, Mh, Gr, CT, Hr, W, Dv"
          },
          {
            "holes": "coooooo",
            "sources": "C, Mh, Dl, T, Gu, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "cooccco",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "B#'",
        "anchorName": "Bs",
        "variations": [
          {
            "holes": "occcooc",
            "sources": "Q, T"
          },
          {
            "holes": "occocco",
            "sources": "QB"
          },
          {
            "holes": "occoooo",
            "sources": "Mh, Dl, Gu, Ml, Be, N, K"
          },
          {
            "holes": "occoooc",
            "sources": "Mh, CT, Hr, W, Dv, HW"
          },
          {
            "holes": "ococcco",
            "sources": "Gr, W, Be, N, K, A"
          },
          {
            "holes": "ococcoo",
            "sources": "Bo"
          }
        ]
      },
      {
        "noteName": "Cb''",
        "anchorName": "Cb",
        "variations": [
          {
            "holes": "coooooo",
            "sources": "QB, Mh, Gu"
          },
          {
            "holes": "coooooc",
            "sources": "Dl"
          },
          {
            "holes": "occccoc",
            "sources": "T"
          }
        ]
      },
      {
        "noteName": "C''",
        "anchorName": "C",
        "variations": [
          {
            "holes": "occoooc",
            "sources": "Ht, P, Q, QB, Dl, CT, Hr, T, W, Dv, K, A,"
          },
          {
            "holes": "ococcoc",
            "sources": "Ht"
          },
          {
            "holes": "occoooo",
            "sources": "C, Ml, Mh, HW, Be, A"
          },
          {
            "holes": "occoooc",
            "sources": "Mh"
          },
          {
            "holes": "ococcco",
            "sources": "Gr, W, Gu, Be, N, K, A"
          },
          {
            "holes": "occocco",
            "sources": "A"
          },
          {
            "holes": "ocooooc",
            "sources": "A"
          },
          {
            "holes": "ocooooo",
            "sources": "A"
          },
          {
            "holes": "ococcoo",
            "sources": "Bo"
          }
        ]
      },
      {
        "noteName": "C#''",
        "anchorName": "Cs",
        "variations": [
          {
            "holes": "ooooooc",
            "sources": "Ht, P, Mh, Dl, Gr, T, W, Dv, HW"
          },
          {
            "holes": "ooooooo",
            "sources": "C, Q, QB, Gu, Ml, Be, N, K, A, Bo"
          },
          {
            "holes": "ooocccc",
            "sources": "Dl, CT, W"
          },
          {
            "holes": "oooccco",
            "sources": "Hr, Be, N, A, Bo"
          },
          {
            "holes": "oooocco",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "Db''",
        "anchorName": "Db1",
        "variations": [
          {
            "holes": "ooooooc",
            "sources": "Ht, P, Mh, Gr, W, Dv, HW, K"
          },
          {
            "holes": "ooooooo",
            "sources": "Q, Qb, Dl, Ml, Be, N, K, A, Bo"
          },
          {
            "holes": "ooocccc",
            "sources": "CT, W"
          },
          {
            "holes": "oooccco",
            "sources": "Hr, Gu, Be, N, A, Bo"
          },
          {
            "holes": "ooocooo",
            "sources": "T"
          }
        ]
      },
      {
        "noteName": "Cx''",
        "anchorName": "Cx",
        "variations": [
          {
            "holes": "occcccc",
            "sources": "QB, T, Gu"
          }
        ]
      }
    ]
  },
  {
    "number": 2,
    "notes": [
      {
        "noteName": "D''",
        "anchorName": "D2",
        "variations": [
          {
            "holes": "occcccc",
            "sources": ""
          },
          {
            "holes": "ccccccc",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "D#''",
        "anchorName": "Ds2",
        "variations": [
          {
            "holes": "cccccco",
            "sources": "Ht, P, C, Q, QB, Mh, Dl, Gr, W, Be, N, K, A"
          },
          {
            "holes": "occccco",
            "sources": "CT, Hr, T, Gu, Dv, HW, K, Bo"
          }
        ]
      },
      {
        "noteName": "Eb''",
        "anchorName": "Eb2",
        "variations": [
          {
            "holes": "cccccco",
            "sources": "Ht, P, Q, QB, Mh, Dl, W, Be, N, K, A"
          },
          {
            "holes": "occccco",
            "sources": "Gr, CT, Hr, T, Gu, Dv, HW, K, Bo"
          }
        ]
      },
      {
        "noteName": "E''",
        "anchorName": "E2",
        "variations": [
          {
            "holes": "cccccoc",
            "sources": ""
          }
        ]
      },
      {
        "noteName": "E#''",
        "anchorName": "Es2",
        "variations": [
          {
            "holes": "ccccocc",
            "sources": ""
          },
          {
            "holes": "ccccoco",
            "sources": "Be, A"
          }
        ]
      },
      {
        "noteName": "Fb''",
        "anchorName": "Fb2",
        "variations": [
          {
            "holes": "cccccoc",
            "sources": "QB, Dl, Gu"
          },
          {
            "holes": "cccccoo",
            "sources": "Mh, T"
          }
        ]
      },
      {
        "noteName": "F''",
        "anchorName": "F2",
        "variations": [
          {
            "holes": "ccccocc",
            "sources": ""
          },
          {
            "holes": "ccccoco",
            "sources": "Be, A"
          }
        ]
      },
      {
        "noteName": "F#''",
        "anchorName": "Fs2",
        "variations": [
          {
            "holes": "ccccooo",
            "sources": ""
          },
          {
            "holes": "ccccooc",
            "sources": "Q, T"
          },
          {
            "holes": "cccoccc",
            "sources": "Q, Mh, Gu"
          },
          {
            "holes": "cccocco",
            "sources": "Gu, Ml"
          }
        ]
      },
      {
        "noteName": "Fx''",
        "anchorName": "Fx2",
        "variations": [
          {
            "holes": "cccoooc",
            "sources": "QB, T"
          },
          {
            "holes": "cccoooo",
            "sources": "Gu"
          }
        ]
      },
      {
        "noteName": "Gb''",
        "anchorName": "Gb2",
        "variations": [
          {
            "holes": "cccocco",
            "sources": "Ht, Q, QB, Mh, Gr, T, Ml"
          },
          {
            "holes": "ccccooo",
            "sources": "P, CT, Hr, W, Gu, Dv, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ccccooc",
            "sources": "Dl"
          }
        ]
      },
      {
        "noteName": "G''",
        "anchorName": "G2",
        "variations": [
          {
            "holes": "cccoooc",
            "sources": "Ht, P, Q, QB, Mh, Gr, Ht, T, W"
          },
          {
            "holes": "cccoooo",
            "sources": "C, Mh, Dl, CT, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "G#''",
        "anchorName": "Gs2",
        "variations": [
          {
            "holes": "ccocooc",
            "sources": "Ht, P, QB, W"
          },
          {
            "holes": "ccococo",
            "sources": "Ht, C, Q, Mh"
          },
          {
            "holes": "ccocsoo",
            "sources": "Ht"
          },
          {
            "holes": "ccocooo",
            "sources": "Dl, CT, Hr, Dv, Ml, HW, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "Ab''",
        "anchorName": "Ab2",
        "variations": [
          {
            "holes": "ccocooc",
            "sources": "Ht, P, QB, W"
          },
          {
            "holes": "ccococo",
            "sources": "Ht, C, Q, Mh, Dl, Gr, Be, N, K, A, Bo"
          },
          {
            "holes": "ccocsoo",
            "sources": "Ht"
          },
          {
            "holes": "cccccoo",
            "sources": "P"
          },
          {
            "holes": "ccocooo",
            "sources": "CT, Hr, T, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ccococc",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "A''",
        "anchorName": "A2",
        "variations": [
          {
            "holes": "ccooooc",
            "sources": "Ht, P, Q, Mh, Gr, Hr, T, W"
          },
          {
            "holes": "ccooooo",
            "sources": ""
          }
        ]
      },
      {
        "noteName": "A#''",
        "anchorName": "As2",
        "variations": [
          {
            "holes": "cocoooc",
            "sources": "Ht, P, Q, Qb, Mh, Gr, CT, T, W, A"
          },
          {
            "holes": "cocoooo",
            "sources": "C, Mh, Dl, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ccoccco",
            "sources": "CT, Hr, W, HW, Be, N, K, A"
          }
        ]
      },
      {
        "noteName": "Bbb''",
        "anchorName": "Bbb2",
        "variations": [
          {
            "holes": "ccooooo",
            "sources": "Gu"
          }
        ]
      },
      {
        "noteName": "Bb''",
        "anchorName": "Bb2",
        "variations": [
          {
            "holes": "cocoooc",
            "sources": "Ht, P, Q, Dl, CT, T, W, Mh"
          },
          {
            "holes": "ccoccco",
            "sources": ""
          },
          {
            "holes": "cocoooo",
            "sources": "C, QB, Dv, Ml, HW, Be, N, K, A, Bo, Mh"
          }
        ]
      },
      {
        "noteName": "B''",
        "anchorName": "B2",
        "variations": [
          {
            "holes": "coooooc",
            "sources": "Ht, P, Q, Gr, Hr, Mh"
          },
          {
            "holes": "coooooo",
            "sources": ""
          },
          {
            "holes": "coocccc",
            "sources": "Mh"
          },
          {
            "holes": "cooccco",
            "sources": "Gu, A"
          },
          {
            "holes": "cocccco",
            "sources": "Gu"
          }
        ]
      },
      {
        "noteName": "B#''",
        "anchorName": "Bs2",
        "variations": [
          {
            "holes": "occccco",
            "sources": "Q, Dl"
          },
          {
            "holes": "occccoo",
            "sources": "Qb, Mh, G"
          },
          {
            "holes": "ococcco",
            "sources": "Mh, CT, Hr, W, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ococcoc",
            "sources": "Gr"
          },
          {
            "holes": "coccoco",
            "sources": "T, Be, N, K, A, Bo"
          },
          {
            "holes": "occccoc",
            "sources": "HW, K, A"
          }
        ]
      },
      {
        "noteName": "Cb'''",
        "anchorName": "Cb2",
        "variations": [
          {
            "holes": "cooccco",
            "sources": "Q"
          },
          {
            "holes": "coooooc",
            "sources": "QB"
          },
          {
            "holes": "coooooo",
            "sources": "Mh"
          },
          {
            "holes": "coocccc",
            "sources": "Dl, Gu"
          },
          {
            "holes": "cooccoo",
            "sources": "T"
          }
        ]
      },
      {
        "noteName": "C'''",
        "anchorName": "C2",
        "variations": [
          {
            "holes": "ococcoc",
            "sources": "Ht, P, Q, T, Gu"
          },
          {
            "holes": "ococcso",
            "sources": "Ht"
          },
          {
            "holes": "oococcc",
            "sources": "Ht"
          },
          {
            "holes": "ococcco",
            "sources": ""
          },
          {
            "holes": "ocococc",
            "sources": "Q"
          },
          {
            "holes": "oocoooo",
            "sources": "Q"
          },
          {
            "holes": "ocococo",
            "sources": "QB"
          },
          {
            "holes": "ococcoo",
            "sources": "QB"
          },
          {
            "holes": "occccoo",
            "sources": "Mh"
          },
          {
            "holes": "coccoco",
            "sources": "T, Gu, Be, N, K, A, Bo"
          },
          {
            "holes": "occccoc",
            "sources": "HW, K"
          },
          {
            "holes": "ocoocco",
            "sources": "A"
          },
          {
            "holes": "ccccoco",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "C#'''",
        "anchorName": "Cs2",
        "variations": [
          {
            "holes": "oooccco",
            "sources": "Ht, P, A"
          },
          {
            "holes": "ooccooo",
            "sources": "Ht, P"
          },
          {
            "holes": "occcooo",
            "sources": ""
          },
          {
            "holes": "ooooooo",
            "sources": "Dl, QB, A"
          },
          {
            "holes": "ooooooc",
            "sources": "Q"
          },
          {
            "holes": "scccooo",
            "sources": "Q"
          },
          {
            "holes": "occcoco",
            "sources": "Q"
          },
          {
            "holes": "ooooccc",
            "sources": "Mh"
          },
          {
            "holes": "occcoco",
            "sources": "T, Be, N, K, A, Bo"
          },
          {
            "holes": "ooococo",
            "sources": "Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "Cx'''",
        "anchorName": "Cx2",
        "variations": [
          {
            "holes": "occoooo",
            "sources": "Q, QB, Gu"
          },
          {
            "holes": "occooco",
            "sources": "T"
          }
        ]
      },
      {
        "noteName": "Db'''",
        "anchorName": "Db2",
        "variations": [
          {
            "holes": "occcoco",
            "sources": "Ht"
          },
          {
            "holes": "ooooooo",
            "sources": "Ht, P"
          },
          {
            "holes": "oooccco",
            "sources": "P, A"
          },
          {
            "holes": "ooococo",
            "sources": "Be, N, A, Bo"
          },
          {
            "holes": "occcooo",
            "sources": ""
          },
          {
            "holes": "ocococo",
            "sources": "Dl, Gu"
          }
        ]
      }
    ]
  },
  {
    "number": 3,
    "notes": [
      {
        "noteName": "D'''",
        "anchorName": "D3",
        "variations": [
          {
            "holes": "occcccc",
            "sources": "Ht, P, Q, QB, Mh, T, A"
          },
          {
            "holes": "occoooo",
            "sources": ""
          },
          {
            "holes": "occcocc",
            "sources": "Q, QB, Gu, A"
          },
          {
            "holes": "cccoooo",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "D#'''",
        "anchorName": "Ds3",
        "variations": [
          {
            "holes": "cccocco",
            "sources": ""
          },
          {
            "holes": "occscco",
            "sources": "P"
          },
          {
            "holes": "occccco",
            "sources": "Hr, A"
          },
          {
            "holes": "occocco",
            "sources": "QB, T, W, Be, N, K, A, Bo"
          },
          {
            "holes": "cccccco",
            "sources": "W, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "Eb'''",
        "anchorName": "Eb3",
        "variations": [
          {
            "holes": "cccocco",
            "sources": "Ht, P, Q, Mh, Dl, CT, Dv, Ml, HW, Be, N, A, Bo"
          },
          {
            "holes": "occccco",
            "sources": "Hr, A"
          },
          {
            "holes": "occocco",
            "sources": "QB, Gr, T, W, Be, N, K, A, Bo"
          },
          {
            "holes": "cccccco",
            "sources": "W, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "E'''",
        "anchorName": "E3",
        "variations": [
          {
            "holes": "ccoocco",
            "sources": ""
          },
          {
            "holes": "cccccoo",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "E#'''",
        "anchorName": "Es3",
        "variations": [
          {
            "holes": "ccocooo",
            "sources": "QB, Hr, T, W, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "cccccoc",
            "sources": "Dl"
          },
          {
            "holes": "ccocooc",
            "sources": "Gr"
          },
          {
            "holes": "ccoccoc",
            "sources": "CT, Hr, Gu, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "Fb'''",
        "anchorName": "Fb3",
        "variations": [
          {
            "holes": "ccooccc",
            "sources": "QB"
          },
          {
            "holes": "ccoooco",
            "sources": "Mh"
          },
          {
            "holes": "ccoocco",
            "sources": "Dl, Gu"
          }
        ]
      },
      {
        "noteName": "F'''",
        "anchorName": "F3",
        "variations": [
          {
            "holes": "ccocsoo",
            "sources": "Ht, P"
          },
          {
            "holes": "cccccoc",
            "sources": "C, Mh"
          },
          {
            "holes": "ccocooo",
            "sources": ""
          },
          {
            "holes": "scoccoo",
            "sources": "Mh"
          },
          {
            "holes": "ccocooc",
            "sources": "Gr, CT"
          },
          {
            "holes": "ccoccoc",
            "sources": "Hr, Be, N, K, A, Bo"
          }
        ]
      },
      {
        "noteName": "F#'''",
        "anchorName": "Fs3",
        "variations": [
          {
            "holes": "coccccc",
            "sources": "Ht, P, Gr, A"
          },
          {
            "holes": "cocccoc",
            "sources": "C, Mh, W, Be, N, A, Bo"
          },
          {
            "holes": "ccccooc",
            "sources": "Q, Dl, Gr, T, A"
          },
          {
            "holes": "ccocooc",
            "sources": "QB, CT, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "ccococc",
            "sources": "Mh"
          },
          {
            "holes": "ccocooo",
            "sources": "Hr"
          },
          {
            "holes": "coccooc",
            "sources": "Dv, Be, N, A, Bo"
          },
          {
            "holes": "coccocc",
            "sources": "Be, N, A, Bo"
          }
        ]
      },
      {
        "noteName": "Fx'''",
        "anchorName": "Fx3",
        "variations": [
          {
            "holes": "cocoooo",
            "sources": "QB"
          },
          {
            "holes": "cocoooc",
            "sources": "T, Gu"
          }
        ]
      },
      {
        "noteName": "Gb'''",
        "anchorName": "Gb3",
        "variations": [
          {
            "holes": "cocccoc",
            "sources": "C, Mh, W, Be, N, A, Bo"
          },
          {
            "holes": "ccccooc",
            "sources": "Q"
          },
          {
            "holes": "ccocooc",
            "sources": "QB, Dl, T, Gu, Dv, Ml, HW, Be, N, K, A, Bo"
          },
          {
            "holes": "coccooc",
            "sources": "Be, N, A, Bo"
          },
          {
            "holes": "ccococc",
            "sources": "Mh"
          },
          {
            "holes": "ccocooo",
            "sources": "Gr, Hr"
          },
          {
            "holes": "coccccc",
            "sources": "CT, K"
          },
          {
            "holes": "ccoooco",
            "sources": "T"
          },
          {
            "holes": "coccocc",
            "sources": "Be, N, A, Bo"
          },
          {
            "holes": "coocooo",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "G'''",
        "anchorName": "G3",
        "variations": [
          {
            "holes": "cocoooc",
            "sources": ""
          },
          {
            "holes": "coccocc",
            "sources": "P, A"
          },
          {
            "holes": "cocoooo",
            "sources": "P, K"
          },
          {
            "holes": "coccoco",
            "sources": "Gu, A"
          },
          {
            "holes": "cocccco",
            "sources": "A"
          },
          {
            "holes": "cccoooc",
            "sources": "A"
          },
          {
            "holes": "cccccoo",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "G#'''",
        "anchorName": "Gs3",
        "variations": [
          {
            "holes": "oocoooo",
            "sources": "C, Dl, Gr, W, Be, N, K, A, Bo"
          },
          {
            "holes": "oocoooc",
            "sources": "Q, QB, Mh, Gu"
          },
          {
            "holes": "occoooc",
            "sources": "T"
          },
          {
            "holes": "oococco",
            "sources": "Dv, N, Bo"
          },
          {
            "holes": "oocooco",
            "sources": "HW, Be, K"
          },
          {
            "holes": "oococcc",
            "sources": "K"
          },
          {
            "holes": "ooccoco",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "Ab'''",
        "anchorName": "Ab3",
        "variations": [
          {
            "holes": "oocoooc",
            "sources": "Q, Mh, T, Gu"
          },
          {
            "holes": "oocoooo",
            "sources": "QB, Gr, Be, N, K, A, Bo"
          },
          {
            "holes": "ooooooc",
            "sources": "Dl"
          },
          {
            "holes": "oococco",
            "sources": "Dv, N, Bo"
          },
          {
            "holes": "oocooco",
            "sources": "HW, Be, K"
          },
          {
            "holes": "oococcc",
            "sources": "K"
          },
          {
            "holes": "ooccoco",
            "sources": "A"
          }
        ]
      },
      {
        "noteName": "A'''",
        "anchorName": "A3",
        "variations": [
          {
            "holes": "occccoc",
            "sources": ""
          },
          {
            "holes": "occccoo",
            "sources": "Ml, K"
          }
        ]
      },
      {
        "noteName": "A#'''",
        "anchorName": "As3",
        "variations": [
          {
            "holes": "cccoooo",
            "sources": "QB"
          },
          {
            "holes": "ccocooo",
            "sources": "Mh"
          },
          {
            "holes": "ococooo",
            "sources": "Dl"
          },
          {
            "holes": "ococooc",
            "sources": "Gr, T, Gu, Be, N, K, A"
          },
          {
            "holes": "ococcoc",
            "sources": "Bo"
          }
        ]
      },
      {
        "noteName": "Bb'''",
        "anchorName": "Bb3",
        "variations": [
          {
            "holes": "ccocooo",
            "sources": "Mh, Dl"
          },
          {
            "holes": "ococooc",
            "sources": "Gr, T, Gu, Be, N, K, A"
          },
          {
            "holes": "occcooc",
            "sources": "K"
          },
          {
            "holes": "ococcoc",
            "sources": "Bo"
          }
        ]
      },
      {
        "noteName": "B'''",
        "anchorName": "B3",
        "variations": [
          {
            "holes": "osocooo",
            "sources": "Mh"
          },
          {
            "holes": "ccocooo",
            "sources": "Gu"
          }
        ]
      },
      {
        "noteName": "B#'''",
        "anchorName": "Bs3",
        "variations": [
          {
            "holes": "cocococ",
            "sources": "Mh"
          }
        ]
      }
    ]
  },
  {
    "number": 4,
    "notes": [
      {
        "noteName": "Cb''''",
        "anchorName": "Cb3",
        "variations": [
          {
            "holes": "csocooo",
            "sources": "Mh"
          }
        ]
      },
      {
        "noteName": "C''''",
        "anchorName": "C3",
        "variations": [
          {
            "holes": "cocococ",
            "sources": "Mh"
          },
          {
            "holes": "ocoococ",
            "sources": "Gu"
          }
        ]
      },
      {
        "noteName": "C#'''' or Db''''",
        "anchorName": "Cs3",
        "variations": [
          {
            "holes": "oocococ",
            "sources": "Mh"
          }
        ]
      },
      {
        "noteName": "D''''",
        "anchorName": "D4",
        "variations": [
          {
            "holes": "occcccc",
            "sources": "Mh"
          }
        ]
      }
    ]
  }
];
