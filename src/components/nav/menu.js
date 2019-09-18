import React from 'react'
import { nav, menuWrapper, election, electionDate } from './menu.module.css'

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
				<div className={menuWrapper} style={this.state.showMenu ? {display: "flex", height: "100%"} : {display: "none",}}>
					<MenuItems />
					<Donate />
					<Social />

					<p className={election}>General Election will be held<br />
					<span className={electionDate}>Tuesday, November 5th, 2019</span><br />
					(<a href="http://www.sec.state.ma.us/WhereDoIVoteMA/bal/MyElectionInfo.aspx" title="Where do I vote?">Where do I vote?</a>)</p>

				</div>

			</nav>
		)
	}
}


export default Menu
