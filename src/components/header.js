import React from "react"

import { header } from './header.module.css'
import Banner from './images/bannerImage'


class Header extends React.Component {

	render(){

		return (
			<header className={header}>
				<Banner />
			</header>
		)
	}
}

export default Header
