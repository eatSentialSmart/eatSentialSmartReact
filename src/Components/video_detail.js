
import React from 'react';
import { Embed, Header } from 'semantic-ui-react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;

    return (
        <div>
            <Header>{video.snippet.title}</Header>
            <Embed 
                id={videoId}
                placeholder={video.snippet.thumbnails.high.url}
                source='youtube'
            />
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;