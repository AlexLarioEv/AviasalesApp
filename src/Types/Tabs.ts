export interface TabsState {
  cheaperTab: { check: boolean }
  fasterTab: { check: boolean }
  optimalTab: { check: boolean }
}

export enum TabsActionTypes {
  TOGGLE_CHEAPER_TAB = 'TOGGLE_CHEAPER_TAB',
  TOGGLE_FASTER_TAB = 'TOGGLE_FASTER_TAB',
  TOGGLE_OPTIMAL_TAB = 'TOGGLE_OPTIMAL_TAB',
}

interface ToggleCheaperTab {
  type: TabsActionTypes.TOGGLE_CHEAPER_TAB
}

interface ToggleFasterTab {
  type: TabsActionTypes.TOGGLE_FASTER_TAB
}

interface ToggleOptimalTab {
  type: TabsActionTypes.TOGGLE_OPTIMAL_TAB
}

export type TabsAction = ToggleCheaperTab | ToggleFasterTab | ToggleOptimalTab
