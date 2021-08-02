import React from 'react';
import { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 10,
        error: ''
    }

    handleChange = (event) => {
        const value = event.target.value;

        if (value >= 0 && value <= 20) {
            this.setState({
                numberOfEvents: value,
                error: ''
            });

        } else if (value < 0) {
            return this.setState({
                numberOfEvents: value,
                error: 'Please enter a number between 1 and 20'
            });
        } else {
            return this.setState({
                numberOfEvents: value,
                error: 'Please enter a number between 1 and 20'
            });
        }
        this.props.updateEventCount(value);
    }
    render() {
        return (
            <>
                <div className="NumberOfEvents">

                    <p>Number of Events</p>

                    <input
                        type="number"
                        id="number"
                        className="event-number-input"
                        placeholder='10'
                        value={this.state.numberOfEvents}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <ErrorAlert text={this.state.error} />
                </div>
                <br />

            </>
        )
    }
}
export default NumberOfEvents;