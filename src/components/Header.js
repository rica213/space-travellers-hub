import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/images/space-hub-logo.png';
import NavbarItem from './NavbarItem';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <div className="container-fluid px-4 mx-3">
      <Navbar.Brand className="d-flex align-items-center flex-grow-1">
        <img
          src={logo}
          alt="space traveller hub logo"
          style={{ width: '75px' }}
        />
        <p>Space Travelers&apos; Hub</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <NavbarItem />
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;
