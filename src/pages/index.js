import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div style={{ display: "flex", justifyContent:"center" }}>
			<div style={{width: "38%" }}>
				<p style={{paddingRight: "4%", }}>I am Rachael Running and I am running for Malden School Committee in Ward 8. I am passionate about our city and our public schools. As a mother of two, I am dedicated to the success of our schools. When our children succeed, Malden succeeds.</p>
				<h2>Sign up for updates!</h2>
				<ContactForm />
			</div>

			<div style={{ width: "58%" }}>
				<Image />
			</div>

		</div>

	</Layout>
)

export default IndexPage
