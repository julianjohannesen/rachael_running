import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VolunteerForm from '../components/volunteerForm'
import {intro, more, volunteer, address} from './get-involved.module.css'
import Logo from "../components/images/logo"
import Volunteer from "../components/images/volunteer";

const GetInvolved = () => (
  <Layout>
	<SEO title="Get Involved" />
		<Volunteer>
			<Logo />
			<div className={intro}>
				<h2>Help make a difference for Malden</h2>
				<p>We are looking for volunteers. Can you help? </p>
			</div>
		</Volunteer>
		
		<section className={more} >
			<div className={volunteer}>
				<h3>Here are a few of the things that you could do to help Rachael.</h3>
				<ul>
					<li>Knock on your neightbors' doors</li>
					<li>Make phone calls</li>
					<li>Donate, either through the "donate" button above or by sending a check to: <address className={address}>The Committee to Elect Rachael Running<br/>51 Bellvale St, <br/>Malden, MA 02148.</address></li>
				</ul>
			</div>
			<VolunteerForm />
		</section>

		
  </Layout>
)

export default GetInvolved
