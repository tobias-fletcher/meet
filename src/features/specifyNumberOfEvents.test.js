import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When a user hasn\'t specified a number, 10 events will be listed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('user is on the main page', () => {
            AppWrapper = mount(<App />);
        });

        when('user doesn\'t specify a number of events to see', () => {
        });

        then('ten events will be displayed on the page', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let NumberOfEventsWrapper;
        let AppWrapper;
        given('user is on the main page', () => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = mount(<NumberOfEvents upsateEvenets={() => { }} updateEventCount={() => { }} />);
        });

        when('user changes number of events to see', () => {
            AppWrapper.find('.event-number-input').simulate('change', { target: { value: 1 } });
        });

        then('the page will display the number input', () => {
            expect(AppWrapper.find('#number')).toHaveLength(AppWrapper.state('numberOfEvents'));
        });
    });
});