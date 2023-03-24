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

export type TicketAction = FetchTicketAction | FetchTicketActionSuccess | FetchTicketActionError | FetchSearchId | SkipError | FetchTicketEnd
