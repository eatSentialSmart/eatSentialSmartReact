import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';

const Results = props => {
    return(
        <div style={{ marginBottom: 40}}>
            <Segment attached='top' >
                <Header>{props.sectionName}</Header>
            </Segment>
            <Segment attached>
                <List ordered>
                    <List.Item>
                        {props.title}
                    </List.Item>
                </List>
            </Segment>
        </div>
    )
}

export default Results;