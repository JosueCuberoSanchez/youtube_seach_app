import React from 'react'

import VideoDetail from './video_detail';

const VideoListItem = (props) => {
    return (
        <li><VideoDetail video={props.video}/></li>
    );
};

export default VideoListItem;