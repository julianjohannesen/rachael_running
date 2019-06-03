import React from "react"

import Layout from "../components/layout"
import ProfessionalImage from "../components/images/professionalImage"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div style={{ display: "flex",}}>
			<div style={{width: "67%" }}>
				<h2 style={{marginTop: 0}}>I am Rachael Running and I am running for Malden School Committee in Ward 8.</h2>
				<p style={{paddingRight: "4%", }}> I am passionate about our city and our public schools. As a mother of two, I am dedicated to the success of our schools. When our children succeed, Malden succeeds.</p>
				<h2>Sign up for updates!</h2>
				<ContactForm />
			</div>

			<div style={{ width: "33%" }}>
				<ProfessionalImage />
			</div>

		</div>

	</Layout>
)

export default IndexPage
