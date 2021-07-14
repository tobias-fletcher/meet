import React, { Component } from "react";

class Event extends Component {

    state = {
        show: false

    }

    showDetails() {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        const event = this.props.event;
        return (
            <div className='event'>
                <div>
                    <h1 className='event-title'>{this.props.event.summary}</h1>
                    {/*<p className='event-time'>{this.props.event.start.dateTime}</p>*/}
                    <p className='location'>{this.props.event.location}</p>
                </div>
                {
                    this.state.show && (
                        <div className="show_event">
                            <h3> About event:</h3>
                            <p className="description">{event.description}</p>
                        </div>
                    )
                }
                <div>
                    <button className="buttonDetails" onClick={() => { this.showDetails(event) }}>showDetails</button>

                </div >
            </div>
        )
    }
}
export default Event;