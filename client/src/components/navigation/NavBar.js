import React from 'react'
import { Menu } from 'semantic-ui-react' 

const NavBar = (props) => {

    const handleItemClick = () => {

    }

    return (
        <div>
            <Menu inverted text>
                {/* <Menu.Item header>Mark Kanko</Menu.Item> */}
                <Menu.Item
                    name='home'
                    // active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='about'
                    // active={activeItem === 'about'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='portfolio'
                    // active={activeItem === 'portfolio'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='blog'
                    // active={activeItem === 'blog'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='resume'
                    // active={activeItem === 'resume'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='contact'
                    // active={activeItem === 'contact'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )

}

export default NavBar 