import React, { Component } from 'react';

class CitySearch extends Component {
    state = {
        query: ' ',
        suggestions: [],
        showSuggestions: false
    }


    handleInputChanged = (event) => {
        const value = event.target.value;
        const fillerV = this.props.locations;
        const suggestions = fillerV.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
            query: value,
            suggestions,
            showSuggestions: true,
        });
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