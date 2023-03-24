import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TicketActionCreators from '../Store/ActionCreators/Ticket'

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(TicketActionCreators, dispatch)
}

export default useActions
