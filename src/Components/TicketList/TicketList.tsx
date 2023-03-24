import React, { Fragment, useState } from 'react'

import useTypedSelector from '../../Hooks/useTypedSelector'
import TicketCard from '../Ticket/Ticket'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spiner from '../Spiner/Spiner'
import Button from '../Button/Button'

const TicketList: React.FC = () => {
  const { ticket } = useTypedSelector((state) => state)

  const [counter, setCounter] = useState(1)

  const onChangeCounter = () => {
    setCounter((state) => state + 1)
  }

  const tickets = ticket.data.map((el, index) => {
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
