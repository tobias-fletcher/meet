Feature: Specify Number of Events

    Scenario: When a user hasn't specified a number, 10 events will be listed by default
        Given user is on the main page
        When user doesn't specify a number of events to see
        Then ten events will be displayed on the page

    Scenario: User can change the number of events they want to see
        Given user is on the main page
        When user changes number of events to see
        Then the page will display the number input


