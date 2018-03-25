import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Restaurant from './restaurant_list';

const MyRestaurant = props => {
    const resItem = props.restaurants.map( (res, i) => {
        return (
            <Restaurant
                key={i+1}
                num={i+1} 
                title={res.restaurant.name}
                location={res.restaurant.location}
                url={res.restaurant.url}
                cost={res.restaurant.average_cost_for_two}
                rating={res.restaurant.user_rating}
                cuisines={res.restaurant.cuisines}
                 />
        )
    })

    return(
        <div style={{ marginBottom: 40}}>
                <List selection verticalAlign='middle' animated>
                   {resItem}
                </List>
        </div>
    )
}

export default MyRestaurant;