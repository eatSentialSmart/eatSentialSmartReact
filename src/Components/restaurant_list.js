import React from 'react';
import { List, Icon } from 'semantic-ui-react';


const RestaurantList = props => {

    return (
        <List.Item>
            <List.Content>
                <List.Header>{props.title}</List.Header>
                <List.Description>Address: {props.location.address}</List.Description>
                <List.Description>Cuisines: {props.cuisines}</List.Description>
                <List.Description>Cost: ${props.cost}(for 2)</List.Description>
                <List.Description>Ratings: {props.rating.aggregated_rating} | Overall: {props.rating.rating_text} | Votes: {props.rating.votes}</List.Description>
                <List.Description>
                    <a href={props.url} target='_blank' rel="noopener noreferrer">
                        <Icon name='external' />
                        Menu
                    </a>
                </List.Description>
            </List.Content>
        </List.Item>

    )
}

export default RestaurantList;