import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketSlice';
import styles from './RocketItem.module.css';

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
      <img className={styles.rocketImg} src={flickrImage} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>
          {(reserved && (<span className={styles.reserved}>Reserved</span>))}
          {' '}
          {description}
        </p>
        <div>
          {(reserved && (<button type="button" className="btn btn-secondary btn-sm" style={{ backgroundColor: '#fff', color: '#70777F' }} onClick={() => handleRocketReservation(id)}>Cancel Reservation</button>))}
          {(!reserved && (<button type="button" className="btn btn-primary btn-sm" onClick={() => handleRocketReservation(id)}>Reserve Rocket</button>))}
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
