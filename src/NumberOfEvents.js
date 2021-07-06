import React, { useState } from 'react';
import { Component } from 'react';


class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 10,
        error: 'Please input number between 1 & 20'
    }

    handleChange = (event) => {
        const value = event.target.value;

        if (value >= 1 && value <= 20) {
            this.setState({
                numberOfEvents: value

            });

        } else {
            return error
        }
    }
    render() {
        const numberOfEvents = '5';

        return (
            <div className="NumberOfEvents">
                <input
                    type="number"
                    className="event-number-input"
                    placeholder='Enter Number'
                    value={numberOfEvents}
                    onChange={this.handleChange}
                />
                <p>{this.state.error}</p>
            </div>
        )
    }
}
export default NumberOfEvents;