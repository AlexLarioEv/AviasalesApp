import React from 'react'
import { Alert, Button, Space } from 'antd'
import { useDispatch } from 'react-redux'

import useTypedSelector from '../../hooks/useTypedSelector'
import { ETicketActionTypes } from '../../types/ticket'
import useActions from '../../hooks/useActions'

import './errorMessage.scss'

const ErrorMessage: React.FC = () => {
  const { ticket } = useTypedSelector((state) => state)
  const { fetchTicket } = useActions()
  const dispatch = useDispatch()

  const clickNext = () => {
    fetchTicket(ticket.identificator)
  }

  const clickEndSession = () => {
    dispatch({ type: ETicketActionTypes.SKIP_ERROR, payload: null })
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
