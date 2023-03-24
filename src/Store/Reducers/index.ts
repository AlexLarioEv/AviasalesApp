import { combineReducers } from 'redux'

import filterReducer from './FilterReducers'
import ticketReducer from './TicketReducers'
import tabsReducer from './TabsReducers'

const rootRuduser = combineReducers({
  filter: filterReducer,
  ticket: ticketReducer,
  tabs: tabsReducer,
})
export default rootRuduser
