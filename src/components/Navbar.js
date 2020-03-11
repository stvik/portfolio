import React from 'react'
import { Menu } from 'semantic-ui-react'


function Navbar() {

	const [activeItem, setActiveItem] = React.useState('home')

	const handleItemClick = (e, { name }) => {
		console.log(name)
		setActiveItem(name)
	}
  return (
   <Menu secondary inverted>
        <Menu.Menu position='right'>
	        <Menu.Item
	          name='home'
	          active={activeItem === 'home'}
	          onClick={handleItemClick}
	        >
	          Home
	        </Menu.Item>

	        <Menu.Item
	          name='about'
	          active={activeItem === 'about'}
	          onClick={handleItemClick}
	        >
	          About
	        </Menu.Item>
	       	<Menu.Item
	          name='projects'
	          active={activeItem === 'projects'}
	          onClick={handleItemClick}
	        >
	          Projects
	        </Menu.Item>

	        <Menu.Item
	          name='resume'
	          active={activeItem === 'resume'}
	          onClick={handleItemClick}
	        >
	          Resume
	        </Menu.Item>
	        <Menu.Item
	          name='contact'
	          active={activeItem === 'contact'}
	          onClick={handleItemClick}
	        >
	          Contact
	        </Menu.Item>

	      </Menu.Menu>
      </Menu>
  )
}

export default Navbar;