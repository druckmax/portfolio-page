import React from 'react'
import './_Card.scss'

function Card({img, title, children}) {
  return (
    <div className='card-container' /* style={{background: `url(${img}) no-repeat center center/cover`}} */>
      <img src={img} alt="" />
      <div className='card-description'>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Card