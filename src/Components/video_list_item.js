import React from 'react';
import { Card, Image } from 'semantic-ui-react';
//import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';


const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <List.Item onClick={() => onVideoSelect(video)}>
            <Image src={imageUrl} />
            <List.Content>
                <List.Header>
                    {video.snippet.title}
                </List.Header>
            </List.Content>
        </List.Item>

    //     <Card onClick={() => onVideoSelect(video)}>
    //     <Image src={imageUrl} />
    //     <Card.Content>
    //       <Card.Header>
    //         {video.snippet.title}
    //       </Card.Header>
    //       <Card.Meta>
    //         <span className='date'>
    //           Joined in 2015
    //         </span>
    //       </Card.Meta>
    //       <Card.Description>
    //         Matthew is a musician living in Nashville.
    //       </Card.Description>
    //     </Card.Content>
        
    //   </Card>
    )
}

export default VideoListItem; 