import React from "react"
import PropTypes from "prop-types"

import Logo from './images/logo.js'
import style from './header.module.css'
import Menu from './menu.js'

const Header = () => (
  <header className={style.header}>
    <div className={style.logo}>
      <h1>
        <Logo />
      </h1>
    </div>
    
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
