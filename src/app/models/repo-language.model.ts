import {Color} from '~utils'

export interface IRepoLanguage {
  // We should let this be string because we can want to
  // show display lang outside the dictionary
  label: ERepoLanguageLabel | string
  color: Color
}

export enum ERepoLanguageLabel {
  CPP = 'C++',
  TS = 'TypeScript',
  PY = 'Python',

  CMAKE = 'CMake',
  C = 'C',
  'GLSL' = 'GLSL'
}

export const REPO_LANG_DICTIONARY: Record<ERepoLanguageLabel, IRepoLanguage> = {
  [ERepoLanguageLabel.CPP]: {
    label: ERepoLanguageLabel.CPP,
    color: new Color('#346ca6'),
  },
  [ERepoLanguageLabel.PY]: {
    label: ERepoLanguageLabel.PY,
    color: new Color('#bd9d20'),
  },
  [ERepoLanguageLabel.TS]: {
    label: ERepoLanguageLabel.TS,
    color: new Color('#bd9d20'),
  },
  [ERepoLanguageLabel.C]: {
    label: ERepoLanguageLabel.C,
    color: new Color('#6f8eb6'),
  },
  [ERepoLanguageLabel.CMAKE]: {
    label: ERepoLanguageLabel.CMAKE,
    color: new Color('#6b1b1b'),
  },
  [ERepoLanguageLabel.GLSL]: {
    label: ERepoLanguageLabel.GLSL,
    color: new Color("#5586A4")
  }
}