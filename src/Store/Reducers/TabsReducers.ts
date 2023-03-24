import { FilterState, FilterAction, FilterActionTypes } from '../../Types/Filter'

const initState: FilterState = {
  checkboxAll: { check: false },
  checkboxNoneTransfer: { check: false },
  checkboxOneTransfer: { check: false },
  checkboxTwoTransfer: { check: false },
  checkboxThreeTransfer: { check: false },
}

const filterReducer = (state = initState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_ALL:
      return {
        checkboxAll: { check: action.payload },
        checkboxNoneTransfer: { check: action.payload },
        checkboxOneTransfer: { check: action.payload },
        checkboxTwoTransfer: { check: action.payload },
        checkboxThreeTransfer: { check: action.payload },
      }
    case FilterActionTypes.TOGGLE_NONE_TRANSFER:
      if (state.checkboxOneTransfer.check && state.checkboxTwoTransfer.check && state.checkboxThreeTransfer.check) {
        return { ...state, checkboxNoneTransfer: { check: action.payload }, checkboxAll: { check: action.payload } }
      }
      return { ...state, checkboxNoneTransfer: { check: action.payload } }

    case FilterActionTypes.TOGGLE_ONE_TRANSFER:
      if (state.checkboxNoneTransfer.check && state.checkboxTwoTransfer.check && state.checkboxThreeTransfer.check) {
        return { ...state, checkboxOneTransfer: { check: action.payload }, checkboxAll: { check: action.payload } }
      }
      return { ...state, checkboxOneTransfer: { check: action.payload } }

    case FilterActionTypes.TOGGLE_TWO_TRANSFER:
      if (state.checkboxNoneTransfer.check && state.checkboxOneTransfer.check && state.checkboxThreeTransfer.check) {
        return { ...state, checkboxTwoTransfer: { check: action.payload }, checkboxAll: { check: action.payload } }
      }
      return { ...state, checkboxTwoTransfer: { check: action.payload } }

    case FilterActionTypes.TOGGLE_THREE_TRANSFER:
      if (state.checkboxNoneTransfer.check && state.checkboxOneTransfer.check && state.checkboxTwoTransfer.check) {
        return { ...state, checkboxThreeTransfer: { check: action.payload }, checkboxAll: { check: action.payload } }
      }
      return { ...state, checkboxThreeTransfer: { check: action.payload } }

    default:
      return state
  }
}
export default filterReducer
