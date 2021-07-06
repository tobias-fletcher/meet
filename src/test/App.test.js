import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
    //shallow renders App component
  });

  //ensures there is only 1 list of Events in App.js
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });


  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render number of events', () => {

  })
});