import React from 'react';
import { Component } from 'react';
import CitySearch from './CitySearch';
import './App.css';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import mockData from './mock-data';
import { getEvents, extractLocations } from './api';
import { ErrorAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { checkToken, getAccessToken } from
  './api';


import './nprogress.css';
class App extends Component {

  state = {
    events: [],
    locations: [],
    //showEvents: false
    numberOfEvents: 10,
    currentLocation: 'all',
    eText: '',
    showWelcomeScreen: undefined
  }


  async componentDidMount() {
    this.mounted = true;
    const { numberOfEvents } = this.state;

    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        eText: 'You are currently offline.'
      });
    } else {
      this.setState({
        eText: ''
      });
    }
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
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    return (
      <div className="App">
        <ErrorAlert text={this.state.eText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />


      </div>
    );
  }
}

export default App;