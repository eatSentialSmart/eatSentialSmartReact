import React from 'react';
import { Button, Icon, Label, Header, Item, Image } from 'semantic-ui-react';


const ArticleList = props => {
    return(
        <Item>
            <Item.Image src={`https://static01.nyt.com/${props.src}`} />
            <Item.Content>
                <Item.Header as='a'>{props.title}</Item.Header>
                <Item.Meta>
                    <span>{props.author}</span>
                </Item.Meta>
                <Item.Description>{props.snippet}</Item.Description>
                <Item.Extra>
                <Label>{props.date}</Label>
                <Button>                   
                    <a href={props.url} target='_blank' rel="noopener noreferrer">Open in new tab</a>
                </Button>
                </Item.Extra>
            </Item.Content>
        </Item>

    )
}

export default ArticleList;