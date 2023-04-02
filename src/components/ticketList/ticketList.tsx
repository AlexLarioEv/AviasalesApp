/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import useTypedSelector from '../../hooks/useTypedSelector'
import TicketCard from '../ticket/ticket'
import ErrorMessage from '../errorMessage/errorMessage'
import Spiner from '../spiner/spiner'
import Button from '../button/button'
import { ETicketActionTypes, ITicket } from '../../types/ticket'

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
    const data: Array<ITicket> = []
    filter.checkboxs.forEach((checkbox, idCheckbox) => {
      if (checkbox) {
        data.push(...ticket.data.filter((el) => el.segments[0].stops.length === idCheckbox - 1))
      }
    })
    dispatch({ type: ETicketActionTypes.FILTER_DATA, payload: data })
    switch (true) {
      case tabs.cheaperTab.check: {
        dispatch({ type: ETicketActionTypes.SORT_TICKET_CHEAPER, payload: ticket })
        break
      }
      case tabs.fasterTab.check: {
        dispatch({ type: ETicketActionTypes.SORT_TICKET_FASTER, payload: ticket })
        break
      }
      default:
    }
  }, [tabs, ticket.data, filter])
  const tickets = ticket.filterData.map((el, index) => {
    if (index < 5 * counter) {
      return <TicketCard price={el.price} key={uuidv4()} carrier={el.carrier} segments={el.segments}></TicketCard>
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
