import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../../components/search-bar/';
import VideoList from '../../components/video-list/';

import { YOUTUBE_API_KEY } from '../../constants/'

class VideoContainer extends Component {

    constructor(props) { // initialize state, only class based components have it, not function.
        super(props);

        this.state = {videos: []};

        YTSearch({key: YOUTUBE_API_KEY, term: 'Pokemon'}, (videos) => {
            this.setState({videos});
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

export default VideoContainer;