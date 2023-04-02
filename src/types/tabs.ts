export interface ITabsState {
  cheaperTab: { check: boolean }
  fasterTab: { check: boolean }
  optimalTab: { check: boolean }
}

export enum ETabsActionTypes {
  TOGGLE_CHEAPER_TAB = 'TOGGLE_CHEAPER_TAB',
  TOGGLE_FASTER_TAB = 'TOGGLE_FASTER_TAB',
  TOGGLE_OPTIMAL_TAB = 'TOGGLE_OPTIMAL_TAB',
}

interface IToggleCheaperTab {
  type: ETabsActionTypes.TOGGLE_CHEAPER_TAB
}

interface IToggleFasterTab {
  type: ETabsActionTypes.TOGGLE_FASTER_TAB
}

interface IToggleOptimalTab {
  type: ETabsActionTypes.TOGGLE_OPTIMAL_TAB
}

export type TTabsAction = IToggleCheaperTab | IToggleFasterTab | IToggleOptimalTab
