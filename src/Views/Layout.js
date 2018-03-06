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

import { Link } from 'react-router-dom';


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


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
                    <Segment inverted color="green" textAlign='center'  vertical>
                        <Menu
                            fixed={fixed ? 'top' : null}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='massive'
                            color="orange"
                        >
                            <Container>
                                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as='a'>
                                <Link to='/'>
                                        Home
                                    </Link>
                                </Menu.Item>
                                <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick} as='a'>Articles</Menu.Item>

                                <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick} as='a'>
                                    <Link to='/videos'>
                                        Videos
                                    </Link>
                                </Menu.Item>

                                <Menu.Item inverted name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as='a'>About</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button color="orange" as='a'>Log in</Button>
                                    <Button color="orange" as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        {/* <HomepageHeading /> */}
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
                            {/* <HomepageHeading mobile /> */}
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

const Layout = () => (
    <ResponsiveContainer>
        
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
export default Layout