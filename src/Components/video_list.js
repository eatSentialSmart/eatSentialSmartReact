import React, { Component } from 'react';
import { Card, Responsive, Segment } from 'semantic-ui-react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    state = {};

    handleOnUpdate = (e, { width }) => this.setState({ width });
   
    render() {
        const { width } = this.state;
        const itemsPerRow = width >= Responsive.onlyComputer.minWidth ? 5 : 1;

        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem
                        onVideoSelect={this.props.onVideoSelect} 
                        key={video.etag} 
                        video={video} />
                    });
        return(
            <div>
                <Responsive
                    as={Segment}
                    vertical
                    fireOnMount
                    onUpdate={this.handleOnUpdate}
                >
                    <Card.Group itemsPerRow={itemsPerRow}>
                        {videoItems.length!==0 && videoItems} 
                    </Card.Group>
                </Responsive>
            </div>
        )
    }
  
    }
 
export default VideoList;