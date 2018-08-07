import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component { // same as const Component = React.Component

    constructor(props) { // initialize state, only class based components have it, not function.
        super(props);

        this.state = {term: '', ph: 'Enter something'};
    }

    render() {
        return (
            <div>
                <input value={this.state.term} placeholder={this.state.ph} onChange={event => this.setState({ term: event.target.value})} />
            </div>
        );
    }

    /*onInputChange(event) {
        this.setState({ term: event.target.value});
    }*/
}

export default SearchBar;