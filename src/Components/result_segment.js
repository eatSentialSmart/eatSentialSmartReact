import React from 'react';
import { Segment, Header, Item } from 'semantic-ui-react';
import ArticleList from './article_list';

const Results = props => {
    const articleItems = props.articles.map( (article, i) => {
        return (
            <ArticleList
                key={article._id}
                num={i+1} 
                title={article.headline.main}
                author={article.byline.original}
                date={article.pub_date}
                url={article.web_url}
                snippet={article.snippet}
                src={article.multimedia[1].url} />
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

export default Results;