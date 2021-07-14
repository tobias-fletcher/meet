import React, { useState } from 'react';
import { Component } from 'react';


class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 10,
        error: 'Please input number between 1 & 20'
    }

    handleChange = (event) => {
        const value = event.target.value;

        if (value >= 1 || value <= 20) {
            this.setState({
                numberOfEvents: value
            });

        } else {
            this.setState({
                numberOfEvents: value
            });
            return this.state.error

        }
        this.props.updateEventCount(value);
    }
    render() {
        return (
            <div className="NumberOfEvents">

                <p>Number of Events</p>
                <input
                    type="number"
                    className="event-number-input"
                    placeholder='10'
                    value={this.state.numberOfEvents}
                    onChange={this.handleChange}
                />

            </div>
        )
    }
}
export default NumberOfEvents;