import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount, shallow } from 'enzyme';
import { extractLocations } from "../api";
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given("user is viewing an event and hasn't clicked show details", () => {
        });


        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see the list of upcoming events without details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.buttonDetails')).toHaveLength(mockData.length);
        });
    });


    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;

        given('the main page is open', () => {
            EventWrapper = mount(<Event event={mockData} />);
            EventWrapper.setState({ show: false });

        });

        when('the user clicks show details', () => {
            EventWrapper.find('.buttonDetails').simulate('click');
        });

        then('the user will see the details of this event', () => {
            expect(EventWrapper.state('show')).toBe(true);
        });
    });


    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('the event details are showing', () => {
            EventWrapper = mount(<Event event={mockData} />);
            EventWrapper.find('.buttonDetails').simulate('click');
            EventWrapper.find('event-details');
        });

        when('the user clicks hide details button', () => {
            EventWrapper.find('.buttonDetails').simulate('click');
        });

        then('the event details will be hidden', () => {
            expect(EventWrapper.state('show')).toBe(false);
        });
    });
});