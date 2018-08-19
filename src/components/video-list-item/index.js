import React from 'react'

// components
import VideoDetail from '../video-detail/';

// styles
import './video-list-item.scss';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list-media'>
                <div className='media-left'>
                    <img className='media-object d-block mx-auto' src={imageUrl}/>
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