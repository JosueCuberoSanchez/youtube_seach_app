import React from 'react';

const VideoDetail = (props) => {
    return (
        <p>
            {props.video.snippet.title}
        </p>
    )
};

export default VideoDetail;