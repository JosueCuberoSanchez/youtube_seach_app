import React from 'react'

import VideoDetail from '../video-detail/';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li className='list-group-item'>
            <div className='video-list-media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        <p>{videoTitle}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;