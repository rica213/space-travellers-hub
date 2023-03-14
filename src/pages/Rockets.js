import React from 'react';
import { useSelector } from 'react-redux';

const rockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  return (
    <div>rockets</div>
  )
}

export default rockets;
