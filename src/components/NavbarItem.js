import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: '/missions', text: 'Missions' },
    { path: '/myprofile', text: 'My Profile' },
  ];

  return (
    <nav data-testid="navbar-item">
      {links.map((link, index) => (
        <React.Fragment key={link.path}>
          <NavLink className="nav-item" to={link.path}><span className="nav-link-text">{link.text}</span></NavLink>
          {links.length !== index + 1 ? <span className="separator"> | </span> : ''}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavbarItem;
