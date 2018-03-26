import React from 'react';
import { Segment, Header, Item } from 'semantic-ui-react';
import ArticleList from './article_list';

const ArticleResults = props => {
    let count = props.count;
    const imagePlaceHolder = 'http://via.placeholder.com/175x116?text=Image+Not+Found'
    const imageUrl = 'https://static01.nyt.com/';
 
    const articleItems = props.articles.slice(0, count).map( (article, i) => {
        return (
            <ArticleList
                key={article._id}
                num={i+1} 
                title={article.headline.main}
                author={article.byline.original}
                date={article.pub_date}
                url={article.web_url}
                snippet={article.snippet}
                src={typeof(article.multimedia[1])==='undefined' ? imagePlaceHolder : `${imageUrl}${article.multimedia[1].url}`} />
        )
    })

    return(
        <div style={{ marginBottom: 40}}>
            <Segment attached='top' >
                <Header>{props.sectionName}</Header>
            </Segment>
            <Segment attached>
                <Item.Group divided>
                   {articleItems}
                </Item.Group>
            </Segment>
        </div>
    )
}

export default ArticleResults;