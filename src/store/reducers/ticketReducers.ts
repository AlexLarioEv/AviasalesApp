import { ITicketState, TTicketAction, ETicketActionTypes } from '../../types/ticket'

const initState: ITicketState = {
  data: [],
  filterData: [],
  identificator: '',
  loading: false,
  error: null,
}

const ticketReducer = (state = initState, action: TTicketAction): ITicketState => {
  switch (action.type) {
    case ETicketActionTypes.FETCH_TICKET:
      return { ...state, loading: true, error: null }
    case ETicketActionTypes.FETCH_TICKET_SUCCESS:
      return { ...state, loading: true, error: null, data: [...state.data, ...action.payload] }
    case ETicketActionTypes.FETCH_TICKET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case ETicketActionTypes.FETCH_SEARCH_ID:
      return { ...state, loading: false, error: null, identificator: action.payload }
    case ETicketActionTypes.SKIP_ERROR:
      return { ...state, loading: false, error: action.payload }
    case ETicketActionTypes.FETCH_TICKET_END:
      return { ...state, loading: action.payload }
    case ETicketActionTypes.SORT_TICKET_CHEAPER:
      return { ...state, filterData: state.filterData.sort((a, b) => a.price - b.price) }
    case ETicketActionTypes.SORT_TICKET_FASTER:
      return {
        ...state,
        filterData: state.filterData.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
        ),
      }
    case ETicketActionTypes.FILTER_DATA:
      return { ...state, filterData: action.payload }
    default:
      return state
  }
}
export default ticketReducer
