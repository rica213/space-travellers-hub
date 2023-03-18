import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
  it('should contain the logo', () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>,
    );
    const logo = getByAltText('space traveller hub logo');
    expect(logo).toBeInTheDocument();
  });

  it('should contain the app name', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    );
    const appName = getByText("Space Travelers' Hub");
    expect(appName).toBeInTheDocument();
  });

  it('should render NavbarItem component', () => {
    const { getByRole, getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    const navbarItem = getByTestId('navbar-item');
    const rockets = getByRole('link', { name: 'Rockets' });
    const missions = getByRole('link', { name: 'Missions' });
    const myProfile = getByRole('link', { name: 'My Profile' });

    expect(navbarItem).toBeInTheDocument();
    expect(rockets).toBeInTheDocument();
    expect(missions).toBeInTheDocument();
    expect(myProfile).toBeInTheDocument();
  });
});
