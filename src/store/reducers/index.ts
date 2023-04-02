import { combineReducers } from 'redux'

import filterReducer from './filterReducers'
import ticketReducer from './ticketReducers'
import tabsReducer from './tabsReducers'

const rootRuduser = combineReducers({
  filter: filterReducer,
  ticket: ticketReducer,
  tabs: tabsReducer,
})
export default rootRuduser
