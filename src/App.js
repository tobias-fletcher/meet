import React from 'react';
import { Component } from 'react';
import CitySearch from './CitySearch';
import './App.css';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents, extractLocations } from './api';
import { ErrorAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { checkToken, getAccessToken } from
  './api';
import EventGenre from './EventGenre';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import './nprogress.css';
import { lightTheme, darkTheme } from './Theme';


class App extends Component {

  state = {
    events: [],
    locations: [],
    //showEvents: false
    currentLocation: 'all',
    eText: '',
    showWelcomeScreen: undefined,
    theme: {}
  }


  async componentDidMount() {
    this.mounted = true;
    this.setState({
      theme: { mode: 'dark' }
    })
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  }

  changeTheme = (theme) => {
    if (theme.mode === 'dark') {
      theme = { mode: 'light' }

    } else if (theme.mode === 'light') {
      theme = { mode: 'dark' }
    }
    this.setState({ theme })
  }

  render() {

    const { events } = this.state;
    const { theme } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    return (
      <ThemeProvider theme={theme.mode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          {(getAccessToken !== 'null') ? <button className="toggleButton" onClick={() => this.changeTheme(theme)}>Change Theme</button> : 'null'}
          <ErrorAlert text={this.state.eText} />
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventCount={this.updateEventCount} />
          <h4>Events in each city</h4>
          <div className='data-vis-wrapper'>
            <EventGenre events={events} />
            <ResponsiveContainer height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis dataKey="city" name="city" type="category" />
                <YAxis dataKey="number" name="numbert" type="number" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <EventList events={this.state.events} />
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => { getAccessToken() }} />

        </div>
      </ThemeProvider>
    );
  }
}

export default App;

