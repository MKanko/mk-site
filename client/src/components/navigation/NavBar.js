import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom' 

class NavBar extends Component {

    render() { 

        const linkedin = 'https://www.linkedin.com/in/mark-kanko'
        const github = 'https://github.com/MKanko'
        const resume = '/images/MKanko Resume.pdf'
        const facebook = 'https://www.facebook.com/mark.kanko.9'

        return (
            <div>
                <Menu inverted text>
                    <Menu.Item
                        as={Link}
                        to='/'
                        name='home'
                    />
                    <Menu.Item
                        as={Link}
                        to='/about'
                        name='about'
                    />
                    <Menu.Item
                        as={Link}
                        to='/portfolio'
                        name='portfolio'
                    />
                    <Menu.Item
                        as={Link}
                        to='/blog'
                        name='blog'
                    />
                    <Menu.Item
                        as={Link}
                        to='/resume'
                        name='resume'
                    />
                    <Menu.Item
                        as={Link}
                        to='/contact'
                        name='contact'
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item floated='right' title='LinkedIn'>
                            <a href={linkedin} target='_blank' rel="noopener noreferrer">
                                <Icon color='grey' name='linkedin' size='large' />
                            </a>
                        </Menu.Item>
                        <Menu.Item floated='right' title='Github'>
                            <a href={github} target='_blank' rel="noopener noreferrer">
                                <Icon color='grey' name='github' size='large' />
                            </a>
                        </Menu.Item>
                        <Menu.Item floated='right' title='Facebook'>
                            <a href={facebook} target='_blank' rel="noopener noreferrer">
                                <Icon color='grey' name='facebook' size='large' />
                            </a>
                        </Menu.Item>
                        <Menu.Item floated='right' title='Resume'>
                            <a href={resume} target='_blank' rel="noopener noreferrer">
                                <Icon color='grey' name='file' size='large' />
                            </a>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                {/* <Menu icon inverted secondary>
                    <Menu.Item floated='right' title='LinkedIn'>
                        <a href={linkedin} target='_blank' rel="noopener noreferrer">
                            <Icon color='grey' name='linkedin' size='large' />
                        </a>
                    </Menu.Item>
                    <Menu.Item floated='right' title='Github'>
                        <a href={github} target='_blank' rel="noopener noreferrer">
                            <Icon color='grey' name='github' size='large' />
                        </a>
                    </Menu.Item>
                    <Menu.Item floated='right' title='Facebook'>
                        <a href={facebook} target='_blank' rel="noopener noreferrer">
                            <Icon color='grey' name='facebook' size='large' />
                        </a>
                    </Menu.Item>
                    <Menu.Item floated='right' title='Resume'>
                        <a href={resume} target='_blank' rel="noopener noreferrer">
                            <Icon color='grey' name='file' size='large' />
                        </a>
                    </Menu.Item>
                </Menu> */}
            </div>
        )
    }

}

export default NavBar 