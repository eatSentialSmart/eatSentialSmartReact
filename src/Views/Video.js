import React, { Component } from 'react';
import SearchBar from '../Components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from '../Components/video_detail';
import { Container, Segment } from 'semantic-ui-react'; 
import VideoList from '../Components/video_list';

const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('gluten free');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
            console.log(videos);
        })
    }
    render() {
        return (
            <div>
                <SearchBar  onSearchTermChange={term => this.videoSearch(term)} />
                <Container>
                    <Segment>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </Segment>
                    <Segment>
                        <VideoList 
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos} />
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default Video; 