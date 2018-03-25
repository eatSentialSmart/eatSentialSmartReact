import React from 'react';
import { Button, Label, Item, List, Card, Icon, Image } from 'semantic-ui-react';


const RecipeList = props => {
    const ingredients = props.ingredients.map( (e, i) => <List.Item key={i}>{e}</List.Item>);

    return (
        <Item>
            <Card>
                <Image src={props.src} />
                <Card.Content>
                    <Card.Header>{props.title}</Card.Header>
                    <Card.Meta><b>Calories:</b> {props.calories}</Card.Meta>
                    <Card.Description><b>Health Concerns:</b> {props.health.join(', ')}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a href={props.url} target='_blank' rel="noopener noreferrer">
                        <Icon name='external' />
                        Source: {props.source}
                    </a>
                </Card.Content>
            </Card>
            <Item.Content>               
                <Item.Description>
                    <b>Ingredients:</b>
                    <List selection verticalAlign='middle'>
                        {ingredients}
                    </List>
                </Item.Description>
            </Item.Content>
        </Item>

    )
}

export default RecipeList;