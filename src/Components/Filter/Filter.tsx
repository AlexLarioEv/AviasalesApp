/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import 'antd/dist/reset.css'
import './filter.scss'
import { useDispatch } from 'react-redux'

import { EFilterActionTypes } from '../../types/filter'
import useTypedSelector from '../../hooks/useTypedSelector'

const Filter: React.FC = () => {
  const dispatch = useDispatch()
  const { filter } = useTypedSelector((state) => state)

  const changeToggleCheckbox: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let data = []
    if (e.target.id === '0') {
      if (filter.checkboxs[0]) {
        data = filter.checkboxs.map(() => false)
      } else {
        data = filter.checkboxs.map(() => true)
      }
    } else {
      data = filter.checkboxs.map((el, id) => (id === Number(e.target.id) ? !el : el))
      data.shift()
      data.length === data.reduce((sum, current) => sum + Number(current), 0) ? data.unshift(true) : data.unshift(false)
    }
    dispatch({
      type: EFilterActionTypes.TOGGLE_FILTER,
      payload: data,
    })
  }
  return (
    <aside className="filter">
      <h2 className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <nav className="filter__nav">
        <ul className="filter__list">
          <label className="filter__label" htmlFor="0">
            <input className="filter__checkbox" type="checkbox" id="0" onChange={changeToggleCheckbox} checked={filter.checkboxs[0]} />
            <span className="filter__item">Все</span>
          </label>
          <label className="filter__label" htmlFor="1">
            <input className="filter__checkbox" type="checkbox" id="1" onChange={changeToggleCheckbox} checked={filter.checkboxs[1]} />
            <span className="filter__item">Без пересадок</span>
          </label>
          <label className="filter__label" htmlFor="2">
            <input className="filter__checkbox" type="checkbox" id="2" onChange={changeToggleCheckbox} checked={filter.checkboxs[2]} />
            <span className="filter__item">1 пересадка</span>
          </label>
          <label className="filter__label" htmlFor="3">
            <input className="filter__checkbox" type="checkbox" id="3" onChange={changeToggleCheckbox} checked={filter.checkboxs[3]} />
            <span className="filter__item">2 пересадки</span>
          </label>
          <label className="filter__label" htmlFor="4">
            <input className="filter__checkbox" type="checkbox" id="4" onChange={changeToggleCheckbox} checked={filter.checkboxs[4]} />
            <span className="filter__item">3 пересадки</span>
          </label>
        </ul>
      </nav>
    </aside>
  )
}

export default Filter
