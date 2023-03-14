import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './components/Layout';
import Rockets from './pages/Rockets';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
