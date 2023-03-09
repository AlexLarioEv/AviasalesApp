import React from 'react'

import Button from '../Button/Button'
import TicketList from '../TicketList/TicketList'

import './TabsPanel.scss'

const TabsPanel: React.FC = () => {
  return (
    <div className="tabs">
      <input type="radio" name="tab-btn" id="tab-btn-1" value="" />
      <label className="tabs__first-tab" htmlFor="tab-btn-1">
        Самый дешевый
      </label>
      <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
      <label htmlFor="tab-btn-2">Самый быстрый</label>
      <input type="radio" name="tab-btn" id="tab-btn-3" value="" />
      <label className="tabs__last-tab" htmlFor="tab-btn-3">
        Оптимальный
      </label>
      <div id="content-1">
        <TicketList></TicketList>
      </div>
      <div id="content-2">Самый быстрый</div>
      <div id="content-3">Оптимальный</div>
      <Button></Button>
    </div>
  )
}

export default TabsPanel
