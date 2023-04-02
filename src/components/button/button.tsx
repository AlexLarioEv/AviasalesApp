import React from 'react'

import './button.scss'

interface PropsButton {
  onChangeCounter: () => void
}
const Button: React.FC<PropsButton> = (props) => {
  const { onChangeCounter } = props

  return (
    <button className="button" onClick={onChangeCounter}>
      <span className="button__name">Показать еще 5 билетов!</span>
    </button>
  )
}

export default Button
