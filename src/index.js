import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyAvsYOxRfAljiFd5SAu7Ez6JHoxwshQhlU';

class App extends Component {

    constructor(props) { // initialize state, only class based components have it, not function.
        super(props);

        this.state = {videos: []};

        YTSearch({key: YOUTUBE_API_KEY, term: 'Pokemon'}, (videos) => {
            this.setState({videos});
            console.log(this.state.videos);
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.root'));