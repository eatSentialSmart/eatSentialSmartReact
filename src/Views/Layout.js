import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='eatSentialSmart'

            style={{
                fontSize: mobile ? '2.4em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '2.1em' : '1em',
            }}
        />
        <Header
            as='h2'
            content='A smarter way to eat'

            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '0.5em' : '1em',
            }}
        />
        <Button animated color="orange" size="huge" style={{ marginTop: '0.5em' }}>
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>
                <Icon name='right arrow' />
            </Button.Content>
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = { activeItem: 'home' }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment inverted color="green" textAlign='center' style={{ minHeight: 400, padding: '1em 0em' }} vertical>
                        <Menu
                            fixed={fixed ? 'top' : null}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='massive'
                            color="orange"
                        >
                            <Container>
                                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as='a'>Home</Menu.Item>
                                <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick} as='a'>Articles</Menu.Item>
                                <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick} as='a'>Videos</Menu.Item>
                                <Menu.Item inverted name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as='a'>About</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button color="orange" as='a'>Log in</Button>
                                    <Button color="orange" as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' color="orange" vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item as='a'>Articles</Menu.Item>
                        <Menu.Item as='a'>Videos</Menu.Item>
                        <Menu.Item as='a'>About</Menu.Item>
                        <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a' primary>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handleToggle} style={{ minHeight: '100vh' }}>
                        <Segment inverted color="green" textAlign='center' style={{ minHeight: 400, padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button color="orange" as='a'>Log in</Button>
                                        <Button color="orange" as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            We can give your company superpowers to do things that they never thought possible. Let us delight
                            your customers and empower your needs... through pure data analytics.
            </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image
                            bordered
                            rounded
                            size='large'
                            src='/assets/images/wireframe/white-image.png'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                            <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                    nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                    and worth your attention.
        </p>
                <Button as='a' size='large'>Read More</Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Case Studies</a>
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
                    true.
                    It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
        </p>
                <Button as='a' size='large'>I'm Still Quite Interested</Button>
            </Container>
        </Segment>
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
    </ResponsiveContainer >
)
export default HomepageLayout