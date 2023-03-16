import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../pages/Missions';

const mockStore = configureStore([]);

describe('Missions component', () => {
  let store;
  let missions;

  beforeEach(() => {
    missions = [
      {
        id: 33,
        name: 'mission whispered',
        description:
          'exist distant furniture can porch rod automobile entire smell know greatly pure morning show chapter walk dog',
        reserved: true,
      },
      {
        id: 74,
        name: 'mission create',
        description:
          'chair medicine perfect original tongue thrown bean frequently strange coffee sold clothes produce later me',
        reserved: false,
      },
    ];
    store = mockStore({ missions: { missions } });
  });

  it('renders a table with mission information', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('mission whispered')).toBeInTheDocument();
    expect(screen.getByText('mission create')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });
});
