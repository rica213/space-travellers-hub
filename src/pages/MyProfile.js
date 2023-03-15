import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        <table className='table'>
          {reservedRockets.map((rocket) => (
            <tr><th>{rocket.name}</th></tr>
          ))}
        </table>
        
      </div>
  </div>
  )
};

export default MyProfile;
