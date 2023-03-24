export interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}

export interface TicketState {
  data: Array<Ticket> | []
  filterData: Array<Ticket> | []
  identificator: string
  loading: boolean
  error: string | null
}

export enum TicketActionTypes {
  FETCH_SEARCH_ID = 'FETCH_SEARCH_ID',
  FETCH_TICKET = 'FETCH_TICKET',
  FETCH_TICKET_SUCCESS = 'FETCH_TICKET_SUCCESS',
  FETCH_TICKET_ERROR = 'FETCH_TICKET_ERROR',
  FETCH_TICKET_END = 'FETCH_TICKET_END',
  SKIP_ERROR = 'SKIP_ERROR',
  SORT_TICKET_CHEAPER = 'SORT_TICKET_CHEAPER',
  SORT_TICKET_FASTER = 'SORT_TICKET_FASTER',
  FILTER_DATA_NULL = 'FILTER_DATA_NULL',
  FILTER_DATA_ONE = 'FILTER_DATA_ONE',
  FILTER_DATA_TWO = 'FILTER_DATA_TWO',
  FILTER_DATA_THREE = 'FILTER_DATA_THREE',
  CLEAR_FILTER_DATA = 'CLEAR_FILTER_DATA',
}

interface FetchSearchId {
  type: TicketActionTypes.FETCH_SEARCH_ID
  payload: string
}

interface FetchTicketAction {
  type: TicketActionTypes.FETCH_TICKET
}

interface FetchTicketActionSuccess {
  type: TicketActionTypes.FETCH_TICKET_SUCCESS
  payload: Array<Ticket> | []
}

interface FetchTicketActionError {
  type: TicketActionTypes.FETCH_TICKET_ERROR
  payload: string
}

interface SkipError {
  type: TicketActionTypes.SKIP_ERROR
  payload: null
}

interface FetchTicketEnd {
  type: TicketActionTypes.FETCH_TICKET_END
  payload: false
}

interface SortTicketCheaper {
  type: TicketActionTypes.SORT_TICKET_CHEAPER
  payload: TicketState
}

interface SortTicketFaster {
  type: TicketActionTypes.SORT_TICKET_FASTER
  payload: TicketState
}

interface FilterDataNull {
  type: TicketActionTypes.FILTER_DATA_NULL
  payload: TicketState
}

interface FilterDataOne {
  type: TicketActionTypes.FILTER_DATA_ONE
  payload: TicketState
}

interface FilterDataTwo {
  type: TicketActionTypes.FILTER_DATA_TWO
  payload: TicketState
}

interface FilterDataThree {
  type: TicketActionTypes.FILTER_DATA_THREE
  payload: TicketState
}

interface ClearFilterData {
  type: TicketActionTypes.CLEAR_FILTER_DATA
}

export type TicketAction =
  | FetchTicketAction
  | FetchTicketActionSuccess
  | FetchTicketActionError
  | FetchSearchId
  | SkipError
  | FetchTicketEnd
  | SortTicketCheaper
  | SortTicketFaster
  | FilterDataNull
  | FilterDataOne
  | FilterDataTwo
  | FilterDataThree
  | ClearFilterData
