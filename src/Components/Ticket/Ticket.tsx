import React from 'react'
import { add, format } from 'date-fns'

import './Ticket.scss'
import { Ticket } from '../../Types/Ticket'

const TicketCard: React.FC<Ticket> = (props) => {
  const { price, carrier, segments } = props

  const getTimeFromMins = (duration: number) => {
    const hours = Math.trunc(duration / 60)
    const minutes = duration % 60
    return `${hours}ч ${minutes}м`
  }

  const getData = (data: string, duration: number) => {
    return add(new Date(data), {
      hours: Math.trunc(duration / 60),
      minutes: duration % 60,
    })
  }

  return (
    <section className="ticket">
      <div className="ticket__title">
        <h2 className="ticket__price"> {`${new Intl.NumberFormat('ru-RU').format(price)} P`}</h2>
        <div className="ticket__wrapper">
          <img className="ticket__img" src={`//pics.avs.io/99/36/${carrier}.png`} alt="Aircompany" />
        </div>
      </div>
      <ul className="ticket__list">
        <li className="item">
          <span className="item__title">
            {segments[0].origin} – {segments[0].destination}
          </span>
          <span className="item__value">
            {format(new Date(segments[0].date), 'HH:mm')} – {format(getData(segments[0].date, segments[0].duration), 'HH:mm')}
          </span>
        </li>
        <li className="item">
          <span className="item__title">В пути</span>
          <span className="item__value">{getTimeFromMins(segments[0].duration)}</span>
        </li>
        <li className="item">
          <span className="item__title">
            {segments[0].stops.length > 0 ? segments[0].stops.length : ''}{' '}
            {segments[0].stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : segments[0].stops.length === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'}
          </span>
          <span className="item__value">{segments[0].stops.join()}</span>
        </li>
      </ul>
      <ul className="ticket__list">
        <li className="item">
          <span className="item__title">
            {segments[1].origin} – {segments[1].destination}
          </span>
          <span className="item__value">
            {format(new Date(segments[1].date), 'HH:mm')} – {format(getData(segments[1].date, segments[1].duration), 'HH:mm')}
          </span>
        </li>
        <li className="item">
          <span className="item__title">В пути</span>
          <span className="item__value">{getTimeFromMins(segments[1].duration)}</span>
        </li>
        <li className="item">
          <span className="item__title">
            {segments[1].stops.length > 0 ? segments[1].stops.length : ''}{' '}
            {segments[1].stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : segments[1].stops.length === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'}
          </span>
          <span className="item__value">{segments[1].stops.join()}</span>
        </li>
      </ul>
    </section>
  )
}

export default TicketCard
