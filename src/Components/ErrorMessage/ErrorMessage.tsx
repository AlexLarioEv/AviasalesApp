import React from 'react'
import { Alert, Button, Space } from 'antd'
import { useDispatch } from 'react-redux'

import useTypedSelector from '../../Hooks/useTypedSelector'
import { TicketActionTypes } from '../../Types/Ticket'
import useActions from '../../Hooks/useActions'

import './ErrorMessage.scss'

const ErrorMessage: React.FC = () => {
  const { ticket } = useTypedSelector((state) => state)
  const { fetchTicket } = useActions()
  const dispatch = useDispatch()

  const clickNext = () => {
    fetchTicket(ticket.identificator)
  }

  const clickEndSession = () => {
    dispatch({ type: TicketActionTypes.SKIP_ERROR, payload: null })
  }

  return (
    <Alert
      className="error text"
      message="Info Text"
      showIcon
      description={`${ticket.error}`}
      type="info"
      action={
        <Space direction="vertical">
          <Button className="text" size="small" type="primary" onClick={clickNext}>
            Продолжить
          </Button>
          <Button className="text" size="small" type="ghost" onClick={clickEndSession}>
            Закрыть
          </Button>
        </Space>
      }
    />
  )
}

export default ErrorMessage
