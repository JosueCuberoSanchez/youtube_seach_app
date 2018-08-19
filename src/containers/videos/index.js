import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import _ from 'lodash';

// Components
import SearchBar from '../../components/search-bar/';
import VideoList from '../../components/video-list/';
import VideoDetail from '../../components/video-detail/';

//Reactstap
import { Container, Row, Col } from 'reactstrap';

// Constants
import { YOUTUBE_API_KEY } from '../../helpers/'

class VideoContainer extends Component {

    constructor(props) { // initialize state, only class based components have it, not function.
        super(props);

        this.state = {videos:[], selectedVideo:''};

        this.videoSearch('Pokemon');

    }

    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        }); // async function
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <Container>
                <Row>
                    <Col xs='12' sm='12' md='12' lg='12'>
                        <SearchBar onSearchTermChange={videoSearch} />
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' sm='12' md='9' lg='9'>
                        <VideoDetail video={this.state.selectedVideo} />
                    </Col>
                    <Col xs='12' sm='12' md='3' lg='3'>
                        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VideoContainer;