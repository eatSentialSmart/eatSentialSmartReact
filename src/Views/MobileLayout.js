import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

export default class MobileContainer extends Component {
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
                    <Sidebar.Pushable>
                        <Sidebar as={Menu} animation='overlay' pointing inverted color='blue' vertical visible={sidebarOpened} style={{ fontSize: '24px' }}>
                            <Link to='/'>
                                <Menu.Item name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick}>Recipes</Menu.Item></Link>
                            <Link to='/articles'>
                                <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>Articles</Menu.Item></Link>
                            <Link to='/videos'>
                                <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>Videos</Menu.Item></Link>
                        </Sidebar>

                        <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
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
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

