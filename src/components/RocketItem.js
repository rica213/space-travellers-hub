import React from 'react'

const RocketItem = ({rocket}) => {
  const { name, description, flickr_images, reserved } = rocket;
  return (
    <div className='rocket-wrapper'>
      <img src={flickr_images} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{(reserved && (<span className='reserved'>Reserved</span>))} {description}</p>
        <div>
          {(reserved && (<button type='button' className='reserved-btn'>Cancel Reservation</button>))}
          {(!reserved && (<button type='button' className='reserved-btn'>Reserve Rocket</button>))}
        </div>
      </div>
    </div>
  )
}

export default RocketItem