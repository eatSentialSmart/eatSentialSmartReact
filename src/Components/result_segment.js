import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Results = props => {
    return(
        <div style={{ marginBottom: 40}}>
            <Segment attached='top' >
                <Header>{props.title}</Header>
            </Segment>
            <Segment attached>
                {/* {props.content} */}
            </Segment>
        </div>
    )
}

export default Results;