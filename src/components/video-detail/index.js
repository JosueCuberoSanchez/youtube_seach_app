import React from 'react';

// styles
import './video-detail.scss';

const VideoDetail = ({video}) => {

    if(!video) {
        return <div>Loading...</div>
    }

    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    //string interpolation from ES6

    return (
        <div className='video-detail'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={videoURL} />
            </div>
            <div className='details mt-3 p-3 border rounded'>
                <div><strong>Title: </strong>{video.snippet.title}</div>
                <div><strong>Description: </strong>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;