import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event events={mockData} />);
    });

    test('render event list', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });

    test('check that event details button is present', () => {
        expect(EventWrapper.find('.buttonDetails')).toHaveLength(1);
    });

    test('shows details on click', () => {
        EventWrapper.setState({ showDetails: false })
        EventWrapper.find('.buttonDetails').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('hide details on click', () => {
        EventWrapper.setState({ showDetails: true })
        EventWrapper.find('.buttonDetails').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('show title of event', () => {
        expect(EventWrapper.instance().props.summary).toBe(mockData.summary)
    });

    test('show location of event', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('show start date/time of event', () => {
        expect(EventWrapper.find('.event-time')).toHaveLength(1);
    });

});