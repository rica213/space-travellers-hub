import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import axios from 'axios';
import Rockets from '../pages/Rockets';
import store from '../redux/store';
import { getRockets, reserveRocket } from '../redux/rockets/rocketSlice';

it('Rocket page renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Rocket slicer and reducer check
describe('Rocket redux state tests', () => {
  it('Should initially hold Rocket data by default', () => {
    const state = store.getState().rocket;
    expect(state.rockets.length).toEqual(0);
  });

  it('should Reserve Rocket payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'rockets/reserveRocket' };
    const actualPayload = reserveRocket('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });
  it('Rockets fetch data from API', async () => {
    const url = 'https://api.spacexdata.com/v3/rockets';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await getRockets(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
