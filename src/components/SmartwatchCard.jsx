import React from 'react'

function SmartwatchCard({ image, title, subtitle='Element' }) {
  return (
    <div className="Card">
      <div className="Card__heading">
        <h3 className="Card__title">{ title }</h3>
        <div className="Card__subtitle"><span>{ subtitle }</span></div>
      </div>
      <div className="Card__img-container">
        <img className="Card__image" src={image} alt={title} />
      </div>
    </div>
  )
}

export default SmartwatchCard