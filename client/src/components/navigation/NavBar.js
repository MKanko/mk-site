import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom' 

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'home'
        }
    }

    handleItemClick = (event, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state 
        return (
            <div>
                <Menu inverted text>
                    {/* <Menu.Item header>Mark Kanko</Menu.Item> */}
                    <Menu.Item
                        as={Link}
                        to='/'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='portfolio'
                        active={activeItem === 'portfolio'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='blog'
                        active={activeItem === 'blog'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='resume'
                        active={activeItem === 'resume'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        )
    }

}

export default NavBar 