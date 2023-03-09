import React from 'react'

import './Button.scss'

const Button: React.FC = () => {
  return (
    <button className="button">
      <span className="button__name">Показать еще 5 билетов!</span>
    </button>
  )
}

export default Button
