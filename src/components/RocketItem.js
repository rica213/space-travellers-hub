import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, name, description, flickrImage, reserved,
  } = rocket;

  const handleRocketReservation = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="d-flex flex-row gap-3 px-5 mb-4">
      <img className="rocket-img" src={flickrImage} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="description">
          {(reserved && (<span className="reserved">Reserved</span>))}
          {' '}
          {description}
        </p>
        <div>
          {(reserved && (<button type="button" className="btn btn-secondary" style={{ backgroundColor: '#fff', color: '#70777F' }} onClick={() => handleRocketReservation(id)}>Cancel Reservation</button>))}
          {(!reserved && (<button type="button" className="btn btn-primary" onClick={() => handleRocketReservation(id)}>Reserve Rocket</button>))}
        </div>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImage: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
