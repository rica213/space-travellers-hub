import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const { missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div>
      <div
        className="m-auto d-flex justify-content-around gap-5"
        style={{ width: '80%' }}
      >
        <div style={{ width: '95%' }}>
          <h4>My Missions</h4>
          <table
            className="table table-bordered"
            style={{ border: '1px solid #dddddd' }}
          >
            {reservedMissions.map((mission) => (
              <tr key={mission.id}>
                <th
                  className="p-2 mx-2"
                  style={{ color: '#444', fontWeight: 'normal' }}
                >
                  {mission.name}
                </th>
              </tr>
            ))}
          </table>
        </div>
        <div style={{ width: '95%' }}>
        <h4>My Rockets</h4>
        {reservedRockets.length <= 0 ? <p>No reserved rockets found!</p> : ''}
        <table className="table table-bordered" style={{ border: '1px solid #dddddd' }}>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}><th className="p-2 mx-2" style={{ color: '#444', fontWeight: 'normal' }}>{rocket.name}</th></tr>
          ))}
        </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
