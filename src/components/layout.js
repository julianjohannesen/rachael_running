import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer.js"
import BannerImage from "./images/bannerImage"
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
					
					<BannerImage />

					<div className={style.mainWrapper}>
						<main>{children}</main>
					</div>

					<Footer />
				</div>
			</div>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
