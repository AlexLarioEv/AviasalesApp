import React from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from 'antd'

import TicketList from '../ticketList/ticketList'
import { ETabsActionTypes } from '../../types/tabs'

import './tabsPanel.scss'

const TabsPanel: React.FC = () => {
  const dispatch = useDispatch()
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    switch (e.target.id) {
      case 'tab-btn-1':
        return dispatch({ type: ETabsActionTypes.TOGGLE_CHEAPER_TAB })
      case 'tab-btn-2':
        return dispatch({ type: ETabsActionTypes.TOGGLE_FASTER_TAB })
      case 'tab-btn-3':
        return dispatch({ type: ETabsActionTypes.TOGGLE_OPTIMAL_TAB })
      default:
    }
  }

  return (
    <div className="tabs">
      <input type="radio" name="tab-btn" id="tab-btn-1" value="" defaultChecked={true} onChange={onChange} />
      <label className="tabs__first-tab" htmlFor="tab-btn-1">
        Самый дешевый
      </label>
      <input type="radio" name="tab-btn" id="tab-btn-2" value="" onChange={onChange} />
      <label htmlFor="tab-btn-2">Самый быстрый</label>
      <input type="radio" name="tab-btn" id="tab-btn-3" value="" onChange={onChange} />
      <label className="tabs__last-tab" htmlFor="tab-btn-3">
        Оптимальный
      </label>
      <div id="content-1">
        <TicketList></TicketList>
      </div>
      <div id="content-2">
        <TicketList></TicketList>
      </div>
      <div id="content-3">
        <Alert
          className="text"
          message="Info Text"
          showIcon
          description={'В данный момент времени не поддерживается платформой!'}
          type="info"
        ></Alert>
      </div>
    </div>
  )
}

export default TabsPanel
