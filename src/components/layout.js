import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer.js"
import BannerImage from "./images/bannerImage"
import { wrapper, innerWrapper, bannerImage, mainWrapper} from "./layout.module.css"

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
			<div className={wrapper}>
				<div className={innerWrapper}>
					<Header siteTitle={data.site.siteMetadata.title} />
					
					<div className={bannerImage}>
						<BannerImage />
					</div>

					<div className={mainWrapper}>
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
