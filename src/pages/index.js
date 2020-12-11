import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/images/bannerImage'
import Logo from '../components/images/logo'
import { introWrapper, intro } from "./index.module.css"


const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Banner className={introWrapper}>
			
				<Logo />
				<div className={intro}>
					<h2>My name is Rachael Running</h2>
					<p>I am passionate about our city and our public schools. As a mother of two, I am dedicated to the success of our schools. When our children succeed, Malden succeeds. (<Link to="about">more</Link>)</p>
				</div>	

		</Banner>
	</Layout>
)

export default IndexPage