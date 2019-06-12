import React from 'react'
import { nav, menuWrapper } from './menu.module.css'

import Burger from './burger'
import MenuItems from './menuItems'
import Donate from './donate'
import Social from './social'

class Menu extends React.Component {
	
	render(){
		return (
			<nav className={nav}>
				
				<Burger />
				<div className={menuWrapper}>
					<MenuItems classes={{}}/>
					<Donate />
					<Social/>
				</div>

			</nav>
		)
	}
}


export default Menu
