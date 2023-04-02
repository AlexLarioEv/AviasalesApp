import { IFilterState, TFilterAction, EFilterActionTypes } from '../../types/filter'

const initState: IFilterState = {
  checkboxs: [false, false, false, false, false],
}

const filterReducer = (state = initState, action: TFilterAction): IFilterState => {
  switch (action.type) {
    case EFilterActionTypes.TOGGLE_FILTER:
      return { checkboxs: action.payload }
    default:
      return state
  }
}
export default filterReducer
