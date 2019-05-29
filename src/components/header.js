import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
	</div>
	
	<nav className={style.nav}>
		<Link to="/">Home</Link>
		<Link to="/about/">About Rachael</Link>
		<Link to="/issues/">Issues</Link>
		<Link to="/get-involved/">Get Involved</Link>
		<Link to="/">DONATE</Link>
	</nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
