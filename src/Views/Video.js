import React, { Component } from 'react';
import SearchBar from '../Components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from '../Components/video_detail';
import { Container, Segment, Header } from 'semantic-ui-react';
import VideoList from '../Components/video_list';

const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';

const styles = {
    margin: '40px'
}

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
        YTSearch({ key: API_KEY, term: term }, videos => {
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
                <Container>
                    <div style={styles}>
                        <Segment attached='top'>
                            <Header>Search For Videos</Header>
                        </Segment>
                        <Segment attached='bottom'>
                            <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                        </Segment>
                    </div>
                    <div style={ styles }>
                        <Segment attached='top'>
                            <Header>Click to Play</Header>
                        </Segment>
                        <Segment attached='bottom'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Segment>
                    </div>
                    <div style={ styles }>
                        <Segment attached='top'>
                            <Header>Video Results</Header>
                        </Segment>
                        <Segment attached='bottom'>
                            <VideoList
                                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                                videos={this.state.videos} />
                        </Segment>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Video; 