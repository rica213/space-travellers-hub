import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => {
  const {
    name, description, flickrImage, reserved,
  } = rocket;

  return (
    <div className="d-flex flex-row gap-3 px-5 mb-4">
      <img className="rocket-img" src={flickrImage} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>
          {(reserved && (<span className="reserved">Reserved</span>))}
          {' '}
          {description}
        </p>
        <div>
          {(reserved && (<button type="button" className="reserved-btn">Cancel Reservation</button>))}
          {(!reserved && (<button type="button" className="btn btn-primary">Reserve Rocket</button>))}
        </div>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImage: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
