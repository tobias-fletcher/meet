Meet Application 

This website is a PWA  made with React JavaScript that allows you to search for events 
using Google Calendar API. 

This app has many different features included below: 

Feature: Specify Number of Events

    Scenario: When a user hasn't specified a number, 10 events will be listed by default
        Given user is on the main page
        When user doesn't specify a number of events to see
        Then ten events will be displayed on the page

    Scenario: User can change the number of events they want to see
        Given user is on the main page
        When user changes number of events to see
        Then the page will display the number input


Feature: Show/Hide An Events Detail

    Scenario: An event element is collapsed by default
        Given user is viewing an event and hasn't clicked show details
        When the user opens the app
        Then the user should see the list of upcoming events without details

    Scenario: User can expand an event to see its details
        Given the main page is open
        When the user clicks show details
        Then the user will see the details of this event

    Scenario: User can collapse an event to hide its details
        Given the event details are showing
        When the user clicks hide details button
        Then the event details will be hidden

        Feature: Filter events by city

    Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
        Given user hasn’t searched for any city
        When the user opens the app
        Then the user should see the list of upcoming events.

    Scenario: User should see a list of suggestions when they search for a city
        Given the main page is open
        When the user starts typing in the city textbox
        Then the user should receive a list of cities (suggestions) that match what they’ve typed

    Scenario: User can select a city from the suggested list
        Given user was typing “Berlin” in the city textbox
        And the list of suggested cities is showing
        When the user selects a city (e.g., “Berlin, Germany”) from the list
        Then their city should be changed to that city (i.e., “Berlin, Germany”)
        And the user should receive a list of upcoming events in that city



I hope you enjoy! 