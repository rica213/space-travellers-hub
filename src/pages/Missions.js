import React, { useEffect } from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="px-5 pr-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="fw-bold" style={{ width: '15%' }}>
                {mission.name}
              </td>
              <td style={{ width: '55%' }}>{mission.description}</td>
              <td style={{ width: '15%' }} className="align-middle">
                {!mission.reserved && (
                  <Badge bg="secondary" className="text-uppercase">
                    not a member
                  </Badge>
                )}
                {mission.reserved && <Badge bg="info">Active member</Badge>}
              </td>
              <td style={{ width: '15%' }} className="align-middle">
                {!mission.reserved && (
                  <Button
                    className="fs-6"
                    variant="outline-secondary"
                    onClick={() => dispatch(joinMission(mission.id))}
                  >
                    Join Mission
                  </Button>
                )}
                {mission.reserved && (
                  <Button
                    className="fs-6"
                    variant="outline-danger"
                    onClick={() => dispatch(leaveMission(mission.id))}
                  >
                    Leave Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
