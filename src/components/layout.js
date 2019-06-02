import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import style from "./layout.module.css"

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
      		query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
      		}
    	`}
		render={data => (
			<div className={style.wrapper}>
				<div className={style.innerwrapper}>
					<Header siteTitle={data.site.siteMetadata.title} />
					
					<div className={style.mainWrapper}>
						<main>{children}</main>
					</div>

					<footer className={style.footer}>© {new Date().getFullYear()}, The Committee to Elect Rachael Running</footer>
				</div>
			</div>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
