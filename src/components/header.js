import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import { header, logo, burgerWrapper, burger, close, nav, menuWrapper, link, doanteWrapper, donate, showBurger, closeBurger } from './header.module.css'
import Logo from './images/logo.js'
import Menu from './menu.js'

class Header extends React.Component {

	// A couple of flags to help determine when to include certain classes
	state = {
		showBurgerLocalState: false,
		showMenuLocalState: true,
	}

	// On click, set the burger to display none by setting showBurgerLocalState
	// to false. That will allow burgerClass to determine whether to include 'showBurger'
	// in a list of classes created with classnames plugin and passed in to className in
	// the burger div. The same thing is happening with showMenuLocalState.
	toggleBoth = () => {
		this.setState({
			showBurgerLocalState: !this.state.showBurgerLocalState,
			showMenuLocalState: !this.state.showMenuLocalState
		})
	}


	handleClick = () => {
		this.toggleBoth()
	}

	componentDidMount(){
		if(window.innerWidth < 1050) {
			this.toggleBoth()
		}
	}

 	render(){

		// burgerClass is created with the classnames plugin. It allws me to use 
		// 'showBurger' only when showBurgerLocalState is true. The same thing is
		// done with menuClass and 'showMenu' and showMenuLocalState
		const burgerShowBurger = cn({
			[burger]: true,
			[showBurger]: this.state.showBurgerLocalState,
		})
		const burgerCloseBurger = cn({
			[close]: true,
			[closeBurger]: this.state.showMenuLocalState,
		})

   		return (
			<header className={header}>
				
				<div className={logo}>
					<h1>
						<Logo />
					</h1>
				</div>

				<div className={burgerWrapper} onClick={this.handleClick}>
					<div className={burgerCloseBurger}>X</div>
					<div className={burgerShowBurger} >
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				
				{/*I call this prop 'classes' and use it in Menu. Note that
				when using a component, you must add classes to Menu.  */}
				<Menu classes={{nav, menuWrapper, link, doanteWrapper, donate}} show={this.state.showMenuLocalState} />

			</header>
		)
   	}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
