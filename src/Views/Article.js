import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ASForm from '../Components/article_search_form';
import ArticleResults from '../Components/article_segment';

const API_KEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=`;

const styles = {
    margin: '40px'
}

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            name: '',
            startYear: '',
            endYear: '',
            numberOfArticles: 1
        }
    }

    handleChange = (terms) => {
        console.log(terms);

        this.setState({
            name: terms.foodie,
            startYear: terms.startYear,
            endYear: terms.endYear,
            numberOfArticles: terms.selected
        })

        this.searchForArticle(terms);
    }

    searchForArticle(terms) {
        // eslint-disable-next-line
        let start = parseInt(terms.startYear);
        // eslint-disable-next-line
        let end = parseInt(terms.endYear);
        axios({
            method: 'get',
            url: `${queryURL}${terms.foodie}&begin_date=${start}0101&end_date=${end}0101`
        }).then(res => {
            console.log(res.data);
            this.setState({
                articles: res.data.response.docs
            })
        })

    }

    render() {
        return (
            <div>
                <Container>
                    <div style={styles}>
                        <ASForm onSearchTermChange={terms => this.handleChange(terms)} />
                    </div>
                    <div style={styles}>
                        <ArticleResults
                            sectionName='Article Results'
                            articles={this.state.articles}
                            count={this.state.numberOfArticles} />
                    </div>
                </Container>
            </div>
        )
    }
}

export default Article; 