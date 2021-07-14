import React from 'react';
import { Component } from 'react';
import CitySearch from './CitySearch';
import './App.css';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import mockData from './mock-data';
import { getEvents, extractLocations } from './api';

import './nprogress.css';
class App extends Component {

  state = {
    events: [],
    locations: [],
    //showEvents: false
    numberOfEvents: 10,
    currentLocation: 'all',
  }

  componentDidMount() {
    this.mounted = true;
    const { numberOfEvents } = this.state;
    const { events } = this.state;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events)
        })
      }
    });
    console.log(events);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const eventsByLocation = (location === 'all') ? events : events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: eventsByLocation.slice(0, numberOfEvents),
        currentLocation: location
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation);
  }

  render() {

    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />


      </div>
    );
  }
}

export default App;