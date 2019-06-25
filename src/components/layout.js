import React from "react"

import Menu from './nav/menu'
import Footer from "./footer.js"
import { wrapper, innerWrapper, mainWrapper} from "./layout.module.css"

const Layout = ({ children }) => {
	
		return (
			<div className={wrapper}>
				<div className={innerWrapper}>

					<Menu />

					<div className={mainWrapper}>
						<main>{children}</main>
					</div>

					<Footer />

				</div>
			</div>
		)
		}

export default Layout
