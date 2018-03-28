import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import Recipe from './recipe_segment';
import Restaurant from './restaurant_segment';

const HomeResults = props => {
    return (
        <div>
        <Grid stackable columns={2}>
            <Grid.Column only='computer'>
                <Segment attached='top'>
                    <Header>Recipe Results</Header>
                </Segment>
                <Segment attached='bottom'>
                    <Recipe recipes={props.recipes} />
                </Segment>
            </Grid.Column>
            <Grid.Column only='computer'>
                <Segment attached='top'>
                    <Header>Restaurant Results</Header>
                </Segment>
                <Segment attached='bottom'>
                    <Restaurant restaurants={props.restaurants} />
                </Segment>
            </Grid.Column>
        </Grid>

        <Grid>
            <Grid.Row>
            <Grid.Column  only='tablet mobile'>
                <Segment attached='top'>
                    <Header>Recipe Results</Header>
                </Segment>
                <Segment attached='bottom'>
                    <Recipe recipes={props.recipes} />
                </Segment>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column  only='tablet mobile'>
                <Segment attached='top'>
                    <Header>Restaurant Results</Header>
                </Segment>
                <Segment attached='bottom'>
                    <Restaurant restaurants={props.restaurants} />
                </Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
 
        </div>
    )
}

export default HomeResults;

