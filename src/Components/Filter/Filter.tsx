import React from 'react'
import 'antd/dist/reset.css'
import './Filter.scss'
import { useDispatch } from 'react-redux'

import { FilterActionTypes } from '../../Types/Filter'
import useTypedSelector from '../../Hooks/useTypedSelector'

const Filter: React.FC = () => {
  const dispatch = useDispatch()
  const { filter } = useTypedSelector((state) => state)

  const changeToggleCheckbox: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    switch (e.target.id) {
      case 'cb1':
        return dispatch({ type: FilterActionTypes.TOGGLE_ALL, payload: e.target.checked })
      case 'cb2':
        return dispatch({ type: FilterActionTypes.TOGGLE_NONE_TRANSFER, payload: e.target.checked })
      case 'cb3':
        return dispatch({ type: FilterActionTypes.TOGGLE_ONE_TRANSFER, payload: e.target.checked })
      case 'cb4':
        return dispatch({ type: FilterActionTypes.TOGGLE_TWO_TRANSFER, payload: e.target.checked })
      case 'cb5':
        return dispatch({ type: FilterActionTypes.TOGGLE_THREE_TRANSFER, payload: e.target.checked })
      default:
    }
  }
  return (
    <aside className="filter">
      <h2 className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <nav className="filter__nav">
        <ul className="filter__list">
          <label className="filter__label" htmlFor="cb1">
            <input className="filter__checkbox" type="checkbox" id="cb1" onChange={changeToggleCheckbox} checked={filter.checkboxAll.check} />
            <span className="filter__item">Все</span>
          </label>
          <label className="filter__label" htmlFor="cb2">
            <input
              className="filter__checkbox"
              type="checkbox"
              id="cb2"
              onChange={changeToggleCheckbox}
              checked={filter.checkboxNoneTransfer.check}
            />
            <span className="filter__item">Без пересадок</span>
          </label>
          <label className="filter__label">
            <input className="filter__checkbox" type="checkbox" id="cb3" onChange={changeToggleCheckbox} checked={filter.checkboxOneTransfer.check} />
            <span className="filter__item">1 пересадка</span>
          </label>
          <label className="filter__label" htmlFor="cb4">
            <input className="filter__checkbox" type="checkbox" id="cb4" onChange={changeToggleCheckbox} checked={filter.checkboxTwoTransfer.check} />
            <span className="filter__item">2 пересадки</span>
          </label>
          <label className="filter__label" htmlFor="cb5">
            <input
              className="filter__checkbox"
              type="checkbox"
              id="cb5"
              onChange={changeToggleCheckbox}
              checked={filter.checkboxThreeTransfer.check}
            />
            <span className="filter__item">3 пересадки</span>
          </label>
        </ul>
      </nav>
    </aside>
  )
}

export default Filter
