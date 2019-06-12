import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/images/bannerImage'
import Logo from '../components/images/logo'
//import ContactForm from "../components/contactForm"
import { introWrapper, intro } from "./index.module.css"


const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Banner className={introWrapper}>
			
				<Logo />
				<div className={intro} style={{ padding: '2em 3em', marginTop: '8em', color: '#fff', backgroundColor: 'rgba(0,0,0,.5)' }}>
					<h2 style={{ fontSize: '200%', color: '#fff' }}>My name is Rachael Running and I'm running for Malden School Committee in Ward 8.</h2>
					<p style={{ fontSize: '125%' }}>I am passionate about our city and our public schools. As a mother of two, I am dedicated to the success of our schools. When our children succeed, Malden succeeds.</p>
				</div>	

		</Banner>
	</Layout>
)

export default IndexPage

// <ContactForm />