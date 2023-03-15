import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const isLoading = useSelector((state) => state.rocket.isLoading);
  return (
    <div>
      {(isLoading && (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', paddingBottom: '20%',
      }}
      >
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only" />
        </div>
      </div>
      ))}
      {!isLoading && (rockets.map((rocketObj) => (
        <RocketItem rocket={rocketObj} key={rocketObj.id} />
      )))}
    </div>
  );
};

export default Rockets;
