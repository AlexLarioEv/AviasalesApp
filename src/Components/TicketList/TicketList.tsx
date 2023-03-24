/* eslint-disable no-fallthrough */
import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from 'antd'

import useTypedSelector from '../../Hooks/useTypedSelector'
import TicketCard from '../Ticket/Ticket'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spiner from '../Spiner/Spiner'
import Button from '../Button/Button'
import { TicketActionTypes } from '../../Types/Ticket'

const TicketList: React.FC = () => {
  const { ticket } = useTypedSelector((state) => state)
  const { tabs } = useTypedSelector((state) => state)
  const { filter } = useTypedSelector((state) => state)

  const dispatch = useDispatch()

  const [counter, setCounter] = useState(1)
  const onChangeCounter = () => {
    setCounter((state) => state + 1)
  }
  useEffect(() => {
    dispatch({ type: TicketActionTypes.CLEAR_FILTER_DATA })
    if (filter.checkboxNoneTransfer.check) {
      dispatch({ type: TicketActionTypes.FILTER_DATA_NULL, payload: ticket })
    }
    if (filter.checkboxOneTransfer.check) {
      dispatch({ type: TicketActionTypes.FILTER_DATA_ONE, payload: ticket })
    }
    if (filter.checkboxTwoTransfer.check) {
      dispatch({ type: TicketActionTypes.FILTER_DATA_TWO, payload: ticket })
    }
    if (filter.checkboxThreeTransfer.check) {
      dispatch({ type: TicketActionTypes.FILTER_DATA_THREE, payload: ticket })
    }
    switch (true) {
      case tabs.cheaperTab.check: {
        dispatch({ type: TicketActionTypes.SORT_TICKET_CHEAPER, payload: ticket })
        break
      }
      case tabs.fasterTab.check: {
        dispatch({ type: TicketActionTypes.SORT_TICKET_FASTER, payload: ticket })
        break
      }
      default:
    }
  }, [tabs, ticket.data, filter])
  const tickets = ticket.filterData.map((el, index) => {
    if (index < 5 * counter) {
      return <TicketCard price={el.price} key={index} carrier={el.carrier} segments={el.segments}></TicketCard>
    }
  })
  return (
    <Fragment>
      {tickets.length === 0 ? (
        <Alert className="text" message="Info Text" showIcon description={'Рейсов, подходящих под заданные фильтры, не найдено'} type="info"></Alert>
      ) : (
        tickets
      )}
      {ticket.error && <ErrorMessage></ErrorMessage>}
      {ticket.loading && <Spiner></Spiner>}
      <Button onChangeCounter={onChangeCounter}></Button>
    </Fragment>
  )
}

export default TicketList
