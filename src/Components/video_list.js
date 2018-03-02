import React from 'react';
import { List } from 'semantic-ui-react';
import VideoListItem from './video_list';

const VideoList = (props) => {
    console.log(props.videos);
    
    // const videoItems = props.videos.map(video => {
    //     return <VideoListItem
    //                 onVideoSelect={props.onVideoSelect} 
    //                 key={video.etag} 
    //                 video={video} />
    // });
 
    return(
        <div>
            <List 
                selection 
                verticalAlign='middle'>           
                            
            </List>
        </div>
    )
    
}

export default VideoList;