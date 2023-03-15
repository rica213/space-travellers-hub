import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <div className="m-4" style={{ width: '25%' }}>
        <h4>My Rockets</h4>
        <table className="table table-bordered" style={{ border: '1px solid #dddddd' }}>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}><th className="p-2 mx-2" style={{ color: '#444', fontWeight: 'normal' }}>{rocket.name}</th></tr>
          ))}
        </table>

      </div>
    </div>
  );
};

export default MyProfile;
