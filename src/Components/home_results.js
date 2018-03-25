import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import Recipe from './recipe_segment';

const HomeResults = props => {
    return(
        <Grid stackable columns={2}>
            <Grid.Column>
                <Segment attached='top'>
                    <Header>Recipe Results</Header>
                </Segment>
                <Segment attached='bottom'>
                    <Recipe recipes={props.recipes}/>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment attached='top'>
                    <Header>Restaurant Results</Header>
                </Segment>
                <Segment attached='bottom'>
                    
                </Segment>
            </Grid.Column>
        </Grid>
      
    )
}

export default HomeResults;

