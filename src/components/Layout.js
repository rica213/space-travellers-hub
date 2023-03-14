import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Layout;
