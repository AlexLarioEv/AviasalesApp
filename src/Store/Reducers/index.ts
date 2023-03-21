import { combineReducers } from 'redux'

import filterReducer from './FilterReducers'

const rootRuduser = combineReducers({
  filter: filterReducer,
})
export default rootRuduser
