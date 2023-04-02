import React, { useEffect } from 'react'

import Filter from '../filter/filter'
import TabsPanel from '../tabsPanel/tabsPanel'
import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'

import 'antd/dist/reset.css'
import './app.scss'

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
        <img className="logo__img" src="../assets/images/Logo.png" alt="img" />
      </div>
      <div className="content">
        <Filter></Filter>
        <TabsPanel></TabsPanel>
      </div>
    </div>
  )
}
export default App
