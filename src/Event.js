import React, { Component } from "react";
import { mockData } from './mock-data';

class Event extends Component {

    state = {
        showDetails: false
    }

    showDetails() {
        if (this.state.showDetails == false) {
            this.setState(({ showDetails: true }))

        } else {
            this.setState({ showDetails: false })

        }
    }

    render() {
        const { events } = this.props;
        return (
            <div className='event'>
                <h1 className='event-title'>{events.summary}</h1>
                <p className='event-time'>{events.dateTime}</p>
                <p className='location'>{events.location}</p>
                <button className="buttonDetails" onClick={() => { this.showDetails(events) }}>Text</button>

            </div >
        )
    }
}
export default Event;