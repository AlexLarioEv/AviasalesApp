import React from 'react'

import 'antd/dist/reset.css'
import './Filter.scss'

const Filter: React.FC = () => {
  return (
    <aside className="filter">
      <h2 className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <nav className="filter__nav">
        <ul className="filter__list">
          <label className="filter__label" htmlFor="cb1">
            <input className="filter__checkbox" type="checkbox" id="cb1" />
            <span className="filter__item">Все</span>
          </label>
          <label className="filter__label" htmlFor="cb2">
            <input className="filter__checkbox" type="checkbox" id="cb2" />
            <span className="filter__item">Без пересадок</span>
          </label>
          <label className="filter__label">
            <input className="filter__checkbox" type="checkbox" id="cb3" />
            <span className="filter__item">1 пересадка</span>
          </label>
          <label className="filter__label" htmlFor="cb4">
            <input className="filter__checkbox" type="checkbox" id="cb4" />
            <span className="filter__item">2 пересадки</span>
          </label>
          <label className="filter__label" htmlFor="cb5">
            <input className="filter__checkbox" type="checkbox" id="cb5" />
            <span className="filter__item">3 пересадки</span>
          </label>
        </ul>
      </nav>
    </aside>
  )
}

export default Filter
