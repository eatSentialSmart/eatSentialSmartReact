import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
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

class DesktopContainer extends Component {
    state = { activeItem: 'recipes' }

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
                    <Segment inverted color='blue' textAlign='center'>
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            secondary={!fixed}
                            pointing
                            style={{ fontSize: '24px', }}
                        >
                            <Container>
                                <Link to='/'>
                                    <Menu.Item name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick}>Recipes</Menu.Item></Link>
                                <Link to='/articles'>
                                    <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>Articles</Menu.Item></Link>
                                <Link to='/videos'>
                                    <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>Videos</Menu.Item></Link>
                                <Menu.Item position='right' name='recipes' onClick={this.handleItemClick}>
                                    <Link to='/'><Image size='mini' src='/assets/img/logo.png' /></Link>
                                </Menu.Item>
                                <Menu.Item header style={{ marginLeft: '-2em' }} name='recipes' onClick={this.handleItemClick}><Link to='/'>eatSentialSmart</Link></Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive >
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = { activeItem: 'recipes' }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { sidebarOpened } = this.state
        const { activeItem } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Sidebar.Pushable>
                        <Sidebar as={Menu} animation='uncover' pointing inverted color='blue' vertical visible={sidebarOpened} style={{ fontSize: '24px' }}>
                            <Link to='/'>
                                <Menu.Item name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick}>Recipes</Menu.Item></Link>
                            <Link to='/articles'>
                                <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>Articles</Menu.Item></Link>
                            <Link to='/videos'>
                                <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>Videos</Menu.Item></Link>
                        </Sidebar>

                        <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
                            <Segment inverted color='blue' textAlign='center' vertical>
                                <Container>
                                    <Menu
                                        fixed={fixed ? 'top' : null}
                                        inverted={!fixed}
                                        secondary={!fixed}
                                        size='large'
                                        style={{ fontSize: '24px', }}
                                    >
                                        <Menu.Item onClick={this.handleToggle}>
                                            <Icon name='sidebar' />
                                        </Menu.Item>
                                        <Menu.Item position='right' name='recipes' onClick={this.handleItemClick}>
                                            <Link to='/'><Image size='mini' src='/assets/img/logo.png' /></Link>
                                        </Menu.Item>
                                        <Menu.Item header style={{ marginLeft: '-2em' }} name='recipes' onClick={this.handleItemClick}><Link to='/'>eatSentialSmart</Link></Menu.Item>
                                    </Menu>
                                </Container>
                            </Segment>

                            {children}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Visibility>
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
        <Segment inverted color='blue' vertical style={{ padding: '2em 0em' }}>
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
                            <Header as='h3' inverted style={{ verticalAlign: "center" }}>© 2017 eatSentialSmart</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default HomepageLayout