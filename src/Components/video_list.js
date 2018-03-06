import React from 'react';
import { Card } from 'semantic-ui-react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
        //console.log(props.videos);
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
                    onVideoSelect={props.onVideoSelect} 
                    key={video.etag} 
                    video={video} />
    });
   
    return(
        <div>
            <Card.Group>
                {videoItems.length!==0 && videoItems} 
            </Card.Group>
        </div>
    )
  
    }
 
export default VideoList;