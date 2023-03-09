import React from 'react'

import './Ticket.scss'

const Ticket: React.FC = () => {
  return (
    <div className="ticket">
      <div className="ticket__title">
        <h2 className="ticket__price">13 400 Р </h2>
        <div className="ticket__wrapper">
          <img className="ticket__img" src="./Image.jpg" alt="S7" />
        </div>
      </div>
      <ul className="ticket__list">
        <li className="item">
          <span className="item__title">MOW – HKT</span>
          <span className="item__value">10:45 – 08:00</span>
        </li>
        <li className="item">
          <span className="item__title">В пути</span>
          <span className="item__value">21ч 15м</span>
        </li>
        <li className="item">
          <span className="item__title">2 пересадки</span>
          <span className="item__value">HKG, JNB</span>
        </li>
      </ul>
      <ul className="ticket__list">
        <li className="item">
          <span className="item__title">MOW – HKT</span>
          <span className="item__value">11:20 – 00:50</span>
        </li>
        <li className="item">
          <span className="item__title">В пути</span>
          <span className="item__value">13ч 30м</span>
        </li>
        <li className="item">
          <span className="item__title">1 пересадка</span>
          <span className="item__value">HKG</span>
        </li>
      </ul>
    </div>
  )
}

export default Ticket
