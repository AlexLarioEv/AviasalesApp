import { ITabsState, TTabsAction, ETabsActionTypes } from '../../types/tabs'

const initState: ITabsState = {
  cheaperTab: { check: true },
  fasterTab: { check: false },
  optimalTab: { check: false },
}

const tabsReducer = (state = initState, action: TTabsAction): ITabsState => {
  switch (action.type) {
    case ETabsActionTypes.TOGGLE_CHEAPER_TAB:
      return { cheaperTab: { check: true }, fasterTab: { check: false }, optimalTab: { check: false } }
    case ETabsActionTypes.TOGGLE_FASTER_TAB:
      return { cheaperTab: { check: false }, fasterTab: { check: true }, optimalTab: { check: false } }
    case ETabsActionTypes.TOGGLE_OPTIMAL_TAB:
      return { cheaperTab: { check: false }, fasterTab: { check: false }, optimalTab: { check: true } }
    default:
      return state
  }
}
export default tabsReducer
