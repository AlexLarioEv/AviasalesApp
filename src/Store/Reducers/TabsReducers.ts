import { TabsState, TabsAction, TabsActionTypes } from '../../Types/Tabs'

const initState: TabsState = {
  cheaperTab: { check: true },
  fasterTab: { check: false },
  optimalTab: { check: false },
}

const tabsReducer = (state = initState, action: TabsAction): TabsState => {
  switch (action.type) {
    case TabsActionTypes.TOGGLE_CHEAPER_TAB:
      return { cheaperTab: { check: true }, fasterTab: { check: false }, optimalTab: { check: false } }
    case TabsActionTypes.TOGGLE_FASTER_TAB:
      return { cheaperTab: { check: false }, fasterTab: { check: true }, optimalTab: { check: false } }
    case TabsActionTypes.TOGGLE_OPTIMAL_TAB:
      return { cheaperTab: { check: false }, fasterTab: { check: false }, optimalTab: { check: true } }
    default:
      return state
  }
}
export default tabsReducer
