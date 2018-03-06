import React from 'react';
import { Card, Image } from 'semantic-ui-react';
//import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';


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