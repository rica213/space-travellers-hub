import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: '/missions', text: 'Missions' },
    { path: '/myprofile', text: 'My Profile' },
  ];

  return (
    <nav>
      {links.map((link, index) => (
        <>
          <NavLink className="nav-item" key={link.text} to={link.path}><span className="nav-link-text">{link.text}</span></NavLink>
          {links.length !== index + 1 ? <span className="separator"> | </span> : ''}
        </>
      ))}
    </nav>
  );
};

export default NavbarItem;
