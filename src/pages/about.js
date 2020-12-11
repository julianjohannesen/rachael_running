import React from "react"

import Layout from "../components/layout"
import { intro, family2, moreSection } from "./about.module.css"
import SEO from "../components/seo"
import FamilyImage2 from "../components/images/familyImage2"
import AboutBanner from "../components/images/aboutBanner"
import Logo from "../components/images/logo"

const SecondPage = () => (
  <Layout>
	<SEO title="About Rachael" />

	<AboutBanner>
		<Logo />
		<div className={intro}>
			<h2>Welcome</h2>
		
			<p>My childen, Willa and Luca, are in 3rd and 1st grade at Linden. For me, the success of our schools is personal. But no matter who we are or what issues we face, everyone in Malden is touched by our schools and we all know that when our children succeed, Malden succeeds.
			</p>
		</div>
	</AboutBanner>

	<section className={moreSection}>
		<h2>More about me</h2>
		<div className={family2}>
			<FamilyImage2 />
		</div>
		<p>As the daughter of two educators, I have always understood the power of teachers to change lives. My wife, Sarah, and I have been together for 20 years and we love living in Malden and being a part of the public school community. We are inspired by the other families we have met through Linden and the amazing teachers who are incredibly dedicated to our children's success. Our neighborhood schools are places where parents and family members from all walks of life can come together to build a better community and world, and I hope my work on the school committee will help strengthen the voices of parents, teachers and students alike.
		</p>
		​

		<p>I am a proud union member (OPEIU Local 6) and have been a member of a union my entire working life. I believe in democratic and engaged workplaces and societies, and I bring this perspective to my campaign. I have dedicated my life to working for a better world through nonprofit policy, research, and communications work, and currently work as the communications coordinator for the Massachusetts AFL-CIO, which is the umbrella labor organization in the Commonwealth.
		</p>
		​

		<p>I am proud to call Malden my home! </p>
	</section>
  </Layout>
)

export default SecondPage
