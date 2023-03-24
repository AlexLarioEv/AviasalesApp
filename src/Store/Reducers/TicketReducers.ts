import { TicketState, TicketAction, TicketActionTypes } from '../../Types/Ticket'

const initState: TicketState = {
  data: [],
  identificator: '',
  loading: false,
  error: null,
}

const ticketReducer = (state = initState, action: TicketAction): TicketState => {
  switch (action.type) {
    case TicketActionTypes.FETCH_TICKET:
      return { loading: true, error: null, data: state.data, identificator: state.identificator }
    case TicketActionTypes.FETCH_TICKET_SUCCESS:
      return { loading: false, error: null, data: [...state.data, ...action.payload], identificator: state.identificator }
    case TicketActionTypes.FETCH_TICKET_ERROR:
      return { loading: false, error: action.payload, data: state.data, identificator: state.identificator }
    case TicketActionTypes.FETCH_SEARCH_ID:
      return { loading: false, error: null, data: state.data, identificator: action.payload }
    case TicketActionTypes.SKIP_ERROR:
      return { loading: false, error: action.payload, data: state.data, identificator: state.identificator }
    case TicketActionTypes.FETCH_TICKET_END:
      return { loading: action.payload, error: state.error, data: state.data, identificator: state.identificator }
    default:
      return state
  }
}
export default ticketReducer
