import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/contactForm'

const GetInvolved = () => (
  <Layout>
    <SEO title="Get Involved" />
		<h1>GET INVOLVED</h1>

		<h2>Help make a difference for Malden</h2>
		<p>We are looking for volunteers. Can you help? </p>
		<ul>
			<li>Knock doors</li>
			<li>Make phone calls</li>
			<li>Donate, either through the "donate" button above or by sending a check to: <br/>The Committee to Elect Rachael Running, 51 Bellvale St, Malden, MA 02148.</li>
		</ul>
		<h3>Together we can win for Malden!</h3>

		<ContactForm />

		
  </Layout>
)

export default GetInvolved
