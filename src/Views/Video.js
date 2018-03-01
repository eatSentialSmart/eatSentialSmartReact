import React, { Component } from 'react';
import SearchBar from '../Components/search_bar';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        //this.videoSearch('poke');
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
            <SearchBar  onSearchTermChange={term => this.videoSearch(term)} />
        )
    }
}

export default Video; 