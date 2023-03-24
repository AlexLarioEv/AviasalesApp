/* eslint-disable no-fallthrough */
import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

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
      console.log(0)
      dispatch({ type: TicketActionTypes.FILTER_DATA_NULL, payload: ticket })
    }
    if (filter.checkboxOneTransfer.check) {
      console.log(1)
      dispatch({ type: TicketActionTypes.FILTER_DATA_ONE, payload: ticket })
    }
    // if (filter.checkboxTwoTransfer.check) {
    //   dispatch({ type: TicketActionTypes.FILTER_DATA, payload: ticket })
    // }
    // if (filter.checkboxThreeTransfer.check) {
    //   dispatch({ type: TicketActionTypes.FILTER_DATA, payload: ticket })
    // }
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
  }, [tabs, ticket.data])
  const tickets = ticket.filterData.map((el, index) => {
    if (index < 5 * counter) {
      return <TicketCard price={el.price} key={index} carrier={el.carrier} segments={el.segments}></TicketCard>
    }
  })
  return (
    <Fragment>
      {tickets}
      {ticket.error && <ErrorMessage></ErrorMessage>}
      {ticket.loading && <Spiner></Spiner>}
      <Button onChangeCounter={onChangeCounter}></Button>
    </Fragment>
  )
}

export default TicketList
