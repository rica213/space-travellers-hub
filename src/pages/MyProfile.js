import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        
        
      </div>
  </div>
  )
};

export default MyProfile;
