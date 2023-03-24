import { combineReducers } from 'redux'

import filterReducer from './FilterReducers'
import ticketReducer from './TicketReducers'

const rootRuduser = combineReducers({
  filter: filterReducer,
  ticket: ticketReducer,
})
export default rootRuduser
