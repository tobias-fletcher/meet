import React, { Component } from 'react';
import { InfoAlert, ErrorAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText: ''
    }


    handleInputChanged = (event) => {
        const value = event.target.value;
        const fillerV = this.props.locations;
        this.setState({ showSuggestions: true });
        const suggestions = fillerV.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We cannot find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions: [],
                showSuggestion: false,
                infoText: ''
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });
        this.props.updateEvents(suggestion);
    }

    render() {
        const locations = this.props.locations;
        return (

            <div className="CitySearch">
                <InfoAlert text={this.state.infoText} />
                <br />
                <br />
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (


                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li
                        className='all'
                        key='all'
                        onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>

            </div>
        );
    }
}

export default CitySearch;