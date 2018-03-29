
import React from 'react';
import { Embed, Header, Image, Icon, Segment } from 'semantic-ui-react';
import imgHolder from '../logo.svg';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div>
                <Icon name='film' />
                <p>Video will render here after search is done</p>
                <Segment>
                    <Image src={imgHolder} size='medium' centered />
                </Segment>
            </div>
        )
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