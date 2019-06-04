import React from "react"
import { Link } from "gatsby"
import cn from 'classnames'
import { nav, link, donate, donateWrapper } from './menu.module.css'


const Menu = ({ classes = {} }) => {

	return (
		<nav className={cn(nav, classes.nav)}>
			<div>
				<Link className={cn(link, classes.link)} to="/">Home</Link>
				<Link className={cn(link, classes.link)} to="/about/">About Rachael</Link>
				<Link className={cn(link, classes.link)} to="/issues/">Issues</Link>
				<Link className={cn(link, classes.link)} to="/get-involved/">Get Involved</Link>
			</div>
			<div className={cn(donateWrapper, classes.donateWrapper)}>
				<a className={cn(donate, classes.donate)} href="https://secure.actblue.com/donate/rachaelformalden" title="donate">DONATE</a>
			</div>
		</nav>
	)
}


export default Menu
