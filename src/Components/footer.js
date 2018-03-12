import React from 'react';
import { Segment, List, Grid, Container, Header, Icon } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Segment inverted color="orange" vertical style={{ padding: '2em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Header inverted as='h3' content='Contributors' />
                            <List size="large" link inverted>

                                <List.Item as='a'><a href='https://www.linkedin.com/in/hussein-fakhreddine/' target='_blank' rel="noopener noreferrer">
                                    <Icon inverted name='linkedin square'>

                                    </Icon>Hussein Fakhreddine</a></List.Item>
                                <List.Item as='a'><a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target='_blank' rel="noopener noreferrer">
                                    <Icon name='linkedin square'>
                                    </Icon>Ren Jing</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header inverted as='h3' content='Contact' />
                            <List size="large" link inverted>
                                <List.Item as='a'><a href='https://github.com/eatSentialSmart/eatSentialSmartReact' target='_blank' rel="noopener noreferrer">
                                    <Icon name='github square'>
                                    </Icon>GitHub</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as='h3' inverted verticalAlign="center">© 2017 eatSentialSmart</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;