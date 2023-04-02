export interface ITicket {
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

export interface ITicketState {
  data: Array<ITicket> | []
  filterData: Array<ITicket> | []
  identificator: string
  loading: boolean
  error: string | null
}

export enum ETicketActionTypes {
  FETCH_SEARCH_ID = 'FETCH_SEARCH_ID',
  FETCH_TICKET = 'FETCH_TICKET',
  FETCH_TICKET_SUCCESS = 'FETCH_TICKET_SUCCESS',
  FETCH_TICKET_ERROR = 'FETCH_TICKET_ERROR',
  FETCH_TICKET_END = 'FETCH_TICKET_END',
  SKIP_ERROR = 'SKIP_ERROR',
  SORT_TICKET_CHEAPER = 'SORT_TICKET_CHEAPER',
  SORT_TICKET_FASTER = 'SORT_TICKET_FASTER',
  FILTER_DATA = 'FILTER_DATA',
}

interface IFetchSearchId {
  type: ETicketActionTypes.FETCH_SEARCH_ID
  payload: string
}

interface IFetchTicketAction {
  type: ETicketActionTypes.FETCH_TICKET
}

interface IFetchTicketActionSuccess {
  type: ETicketActionTypes.FETCH_TICKET_SUCCESS
  payload: Array<ITicket> | []
}

interface IFetchTicketActionError {
  type: ETicketActionTypes.FETCH_TICKET_ERROR
  payload: string
}

interface ISkipError {
  type: ETicketActionTypes.SKIP_ERROR
  payload: null
}

interface IFetchTicketEnd {
  type: ETicketActionTypes.FETCH_TICKET_END
  payload: false
}

interface ISortTicketCheaper {
  type: ETicketActionTypes.SORT_TICKET_CHEAPER
  payload: ITicketState
}

interface ISortTicketFaster {
  type: ETicketActionTypes.SORT_TICKET_FASTER
  payload: ITicketState
}

interface IFilterData {
  type: ETicketActionTypes.FILTER_DATA
  payload: Array<ITicket>
}

export type TTicketAction =
  | IFetchTicketAction
  | IFetchTicketActionSuccess
  | IFetchTicketActionError
  | IFetchSearchId
  | ISkipError
  | IFetchTicketEnd
  | ISortTicketCheaper
  | ISortTicketFaster
  | IFilterData
