import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ASForm from '../Components/article_search_form';
import Results from '../Components/result_segment';

const API_KEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=`;

const styles = {
    marginTop: 40 
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

    // componentDidMount() {
    //     const {name, startYear, endYear} = this.state;
    //     console.log(name);
    //     if(name){
    //         axios({
    //             method: 'get',
    //             url: `${queryURL}${name}&begin_date=${startYear}&end_date=${endYear}`
    //         }).then( res=> {
    //             console.log(res);
    //         })
    //     }
       
    // }

    searchForArticle(terms) {
            let start = parseInt(terms.startYear);
            let end = parseInt(terms.endYear);
            axios({
                method: 'get',
                url: `${queryURL}${terms.foodie}&begin_date=${start}0101&end_date=${end}0101`
            }).then( res=> {
                console.log(res.data);
                this.setState({
                    articles: res.data.response.docs
                })
            })
     
    }

    render() {
        const searchResults = this.state.articles.map( article => {
            return(
                <Results 
                    sectionName='Article Results'
                    title={article.headline.main}
                    author={article.byline.original}
                    date={article.pub_date}
                    url={article.web_url} />
            )
        })
        return(
            <div>
                <Container>
                    <div style={styles}>
                        <ASForm onSearchTermChange={terms => this.handleChange(terms)} />
                    </div>
                    <div style={styles}>
                        {searchResults}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Article; 