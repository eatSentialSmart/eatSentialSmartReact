import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.medium.url;
    
    return (
    
        <Card onClick={() => onVideoSelect(video)}>
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Description>
          {video.snippet.title}
          </Card.Description>
        </Card.Content>
      </Card>
    
    )
}

export default VideoListItem; 