import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  return (
    <div>
      {rockets.map((rocketObj) => (
        <RocketItem rocket={rocketObj} key={rocketObj.id} />
      ))}
    </div>
  );
};

export default Rockets;
