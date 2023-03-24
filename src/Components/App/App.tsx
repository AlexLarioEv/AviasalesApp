import React, { useEffect } from 'react'

import Filter from '../Filter/Filter'
import TabsPanel from '../TabsPanel/TabsPanel'
import useActions from '../../Hooks/useActions'
import useTypedSelector from '../../Hooks/useTypedSelector'

import 'antd/dist/reset.css'
import './App.scss'

const App: React.FC = () => {
  const { fetchAviasaleId, fetchTicket } = useActions()
  const { ticket } = useTypedSelector((state) => state)

  useEffect(() => {
    fetchAviasaleId()
  }, [])

  useEffect(() => {
    if (!(ticket.identificator.trim().length === 0)) {
      setTimeout(() => fetchTicket(ticket.identificator), 1000)
    }
  }, [ticket.identificator, ticket.data])

  return (
    <div className="container">
      <div className="logo">
        <img className="logo__img" src="../img/Logo.png" alt="img" />
      </div>
      <div className="content">
        <Filter></Filter>
        <TabsPanel></TabsPanel>
      </div>
    </div>
  )
}
export default App
