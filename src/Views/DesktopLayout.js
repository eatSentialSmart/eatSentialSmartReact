import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
    Responsive,
    Visibility
} from 'semantic-ui-react'

const styles = {
    height: 100,
    fontSize: 24
}

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
                        <Menu
                            color='blue'
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            secondary={!fixed}
                            pointing
                                                  
                        >                       
                        <Container>
                            <Menu.Item style={styles} as={Link} to='/' name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick}>Recipes</Menu.Item>
                            <Menu.Item style={styles} as={Link} to='/articles' name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>Articles</Menu.Item>
                            <Menu.Item style={styles} as={Link} to='/videos' name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>Videos</Menu.Item>
                            <Menu.Item style={styles} as={Link} to='/' position='right' name='recipes' onClick={this.handleItemClick}>
                                <Image size='mini' src='/assets/img/logo.png' />eatSentialSmart
                            </Menu.Item>                           
                        </Container>                     
                        </Menu>            
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

