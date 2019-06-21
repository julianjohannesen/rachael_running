import React from 'react'
import { nav, menuWrapper } from './menu.module.css'

import Burger from './burger'
import MenuItems from './menuItems'
import Donate from './donate'
import Social from './social'

class Menu extends React.Component {

	state = {
		showMenu: false,
	}

	toggleMenu = () => this.setState({showMenu: !this.state.showMenu})
	
	render(){
		return (
			<nav className={nav}>
				
				<Burger toggleMenu={this.toggleMenu}/>
				<div className={menuWrapper} style={this.state.showMenu ? {display: "flex",} : {display: "none",}}>
					<MenuItems classes={{}}/>
					<Donate />
					<Social/>
				</div>

			</nav>
		)
	}
}


export default Menu
