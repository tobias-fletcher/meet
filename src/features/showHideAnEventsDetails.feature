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