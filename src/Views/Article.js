import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ASForm from '../Components/article_search_form';

const API_KEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=`;

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            searchTerm: {}       
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `${queryURL}pizza`
        }).then( res=> {
            console.log(res);
        })
    }

    render() {
        return(
            <div>
                <Container>
                    <ASForm />
                </Container>
            </div>
        )
    }
}

export default Article; 