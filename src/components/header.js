import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from './header.module.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
	</div>
	
	<nav>
		<Link className={style.link} to="/">Home</Link>
		<Link className={style.link} to="/about/">About Rachael</Link>
		<Link className={style.link} to="/issues/">Issues</Link>
		<Link className={style.link} to="/get-involved/">Get Involved</Link>
		<Link className={style.link} to="/">DONATE</Link>
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
