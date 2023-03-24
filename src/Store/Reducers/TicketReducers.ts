import { TicketState, TicketAction, TicketActionTypes } from '../../Types/Ticket'

const initState: TicketState = {
  data: [],
  filterData: [],
  identificator: '',
  loading: false,
  error: null,
}

const ticketReducer = (state = initState, action: TicketAction): TicketState => {
  switch (action.type) {
    case TicketActionTypes.FETCH_TICKET:
      return { ...state, loading: true, error: null }
    case TicketActionTypes.FETCH_TICKET_SUCCESS:
      return { ...state, loading: true, error: null, data: [...state.data, ...action.payload] }
    case TicketActionTypes.FETCH_TICKET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TicketActionTypes.FETCH_SEARCH_ID:
      return { ...state, loading: false, error: null, identificator: action.payload }
    case TicketActionTypes.SKIP_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TicketActionTypes.FETCH_TICKET_END:
      return { ...state, loading: action.payload }
    case TicketActionTypes.SORT_TICKET_CHEAPER:
      return { ...state, filterData: state.filterData.sort((a, b) => a.price - b.price) }
    case TicketActionTypes.SORT_TICKET_FASTER:
      return {
        ...state,
        filterData: action.payload.filterData.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
        ),
      }
    case TicketActionTypes.FILTER_DATA_NULL:
      return { ...state, filterData: [...state.filterData, ...action.payload.data.filter((el) => el.segments[0].stops.length === 0)] }
    case TicketActionTypes.FILTER_DATA_ONE:
      return { ...state, filterData: [...state.filterData, ...action.payload.data.filter((el) => el.segments[0].stops.length === 1)] }
    case TicketActionTypes.FILTER_DATA_TWO:
      return { ...state, filterData: [...state.filterData, ...action.payload.data.filter((el) => el.segments[0].stops.length === 2)] }
    case TicketActionTypes.FILTER_DATA_THREE:
      return { ...state, filterData: [...state.filterData, ...action.payload.data.filter((el) => el.segments[0].stops.length === 3)] }
    case TicketActionTypes.CLEAR_FILTER_DATA:
      return {
        ...state,
        filterData: [],
      }
    default:
      return state
  }
}
export default ticketReducer
