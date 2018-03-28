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
            <Responsive maxWidth={768}>
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
                                <Menu.Item as={Link} to='/' position='right' name='recipes' onClick={this.handleItemClick}>
                                   <Image size='mini' src='/assets/img/logo.png' />
                                </Menu.Item>
                                <Menu.Item as={Link} to='/' header style={{ marginLeft: '-2em' }} name='recipes' onClick={this.handleItemClick}>eatSentialSmart</Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>
                    <Sidebar.Pushable>
                        <Sidebar as={Menu} animation='overlay' pointing inverted color='blue' vertical visible={sidebarOpened} style={{ fontSize: '24px' }}>                   
                                <Menu.Item as={Link} to='/' name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick}>Recipes</Menu.Item>
                                <Menu.Item as={Link} to='/articles' name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>Articles</Menu.Item>
                                <Menu.Item as={Link} to='/videos' name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>Videos</Menu.Item>
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

