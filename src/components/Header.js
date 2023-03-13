import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/space-hub-logo.png';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand className="d-flex align-items-center">
        <img
          src={logo}
          alt="space traveller hub logo"
          style={{ width: '75px' }}
        />
        <p>Space Travelers&apos; Hub</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Rockets</Nav.Link>
          <Nav.Link href="#">Missions</Nav.Link>
          <Nav.Link href="#">My Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
