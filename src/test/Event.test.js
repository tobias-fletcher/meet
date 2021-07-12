import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;


    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData} />);

    });

    test('render event list', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });

    test('check that event details button is present', () => {
        expect(EventWrapper.find('.buttonDetails')).toHaveLength(1);
    });

    test('shows details on click', () => {
        EventWrapper.setState({ show: false })
        EventWrapper.find('.buttonDetails').simulate('click');
        expect(EventWrapper.state('show')).toBe(true);
    });

    test('show location of event', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    /*test('show start date/time of event', () => {
        expect(EventWrapper.find('.event-time')).toHaveLength(1);
    });*/

});