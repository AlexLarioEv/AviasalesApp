// eslint-disable-next-line import/named
import { Dispatch } from 'redux'

import { TTicketAction, ETicketActionTypes } from '../../types/ticket'

export const fetchAviasaleId = () => {
  return async (dispatch: Dispatch<TTicketAction>) => {
    try {
      dispatch({ type: ETicketActionTypes.FETCH_TICKET })
      const res = await fetch('https://aviasales-test-api.kata.academy/search')
      const searchId = await res.json()
      dispatch({ type: ETicketActionTypes.FETCH_SEARCH_ID, payload: searchId.searchId })
    } catch (e) {
      dispatch({ type: ETicketActionTypes.FETCH_TICKET_ERROR, payload: 'Ошибка с получением id' })
    }
  }
}

export const fetchTicket = (id: string) => {
  return async (dispatch: Dispatch<TTicketAction>) => {
    try {
      dispatch({ type: ETicketActionTypes.FETCH_TICKET })
      const res = await fetch(` https://aviasales-test-api.kata.academy/tickets?searchId=${id} `)
      const data = await res.json()
      if (data.stop) {
        return dispatch({ type: ETicketActionTypes.FETCH_TICKET_END, payload: false })
      }
      dispatch({ type: ETicketActionTypes.FETCH_TICKET_SUCCESS, payload: data.tickets })
    } catch (e) {
      dispatch({
        type: ETicketActionTypes.FETCH_TICKET_ERROR,
        payload: 'Ошибка при получения данных с сервера. Сделать новый запрос данных или заврешить сессию?',
      })
    }
  }
}
