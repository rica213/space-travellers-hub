import React from 'react'

const RocketItem = ({rocket}) => {
  const { url, rocketTitle, rocketDesc, reserved } = rocket;
  return (
    <div className='rocket-wrapper'>
      <img src={url} alt={rocketTitle} />
      <div>
        <h3>{rocketTitle}</h3>
        <p>{(reserved && (<span className='reserved'>Reserved</span>))} {rocketDesc}</p>
        <div>
          {(reserved && (<button type='button' className='reserved-btn'>Cancel Reservation</button>))}
          {(!reserved && (<button type='button' className='reserved-btn'>Reserve Rocket</button>))}
        </div>
      </div>
    </div>
  )
}

export default RocketItem