import React from 'react'

import Filter from '../Filter/Filter'
import TabsPanel from '../TabsPanel/TabsPanel'

import 'antd/dist/reset.css'
import './App.scss'

const App: React.FC = () => {
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
