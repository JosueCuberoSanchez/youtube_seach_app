import React, { Component } from 'react';

class SearchBar extends Component { // same as const Component = React.Component

    constructor(props) { // initialize state, only class based components have it, not function.
        super(props);

        this.state = {term: '', ph: 'Search videos...'};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
                <input className='w-75 d-block mx-auto my-4' value={this.state.term} placeholder={this.state.ph}
                       onChange={event => this.onInputChange(event.target.value)} />
        );
    }

}

export default SearchBar;