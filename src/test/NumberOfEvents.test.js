import React from 'react';
import { shallow } from 'enzyme';
import NumberofEvents from '../NumberofEvents';

describe('<NumberofEvents /> component', () => {

    let NumberOfEventsWrapper;

    beforeAll(() => {
        const numberOfEvents = '5';
        const error = '';
        NumberOfEventsWrapper = shallow(<NumberofEvents numberOfEvents={numberOfEvents} error={error} />);

    });

    test('check num of events', () => {
        expect(NumberOfEventsWrapper.instance().props.numberOfEvents).toBe('5')
    })

    test("input changes state", () => {
        NumberOfEventsWrapper.setState({
            numberOfEvents: 10
        });
        const eventObject = { target: { value: 5 } };
        NumberOfEventsWrapper.find('.event-number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(5);
    });

    test('return error', () => {
        NumberOfEventsWrapper.setState({
            error: 'Please enter number between 1 and 20'
        });
        expect(NumberOfEventsWrapper.state('error')).toBe('Please enter number between 1 and 20');
    })
});