import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'

export default class DesktopContainer extends Component {
    state = { activeItem: 'recipes' }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state

        return (
            <div>
                <style>{`
          html, body {
            background: #BBDEFB;
          }
        `}</style>

                <Responsive minWidth={769}>
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
                                    <Menu.Item header style={{ marginLeft: '-2em', }} name='recipes' onClick={this.handleItemClick}><Link to='/'>eatSentialSmart</Link></Menu.Item>
                                </Container>
                            </Menu>
                        </Segment>
                    </Visibility>

                    {children}
                </Responsive >
            </div>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

