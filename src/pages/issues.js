import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnionImage from "../components/images/unionImage"
import style from "./issues.module.css"

const Issues = () => (
	<Layout>
		<SEO title="Issues" />
		<section className={style.priorities}>
			<div>
				<UnionImage />
			</div>
			<div>
				<h1>My Priorities</h1>
				<p>My Priorities
				If elected, my first priority as a school committee member would be to listen to the community - to parents, teachers and the greater Malden community. I will be receptive, accessible and transparent. I believe our public education system should be democratically run and that parents, students and teachers should have a voice and feel empowered and engaged.</p>
			</div>
		</section>

		<section>
			<h2>Rachael's Issues</h2>
			<div className={style.issues}>

			<div className={style.border}>
			<h3>Plan for and make strategic decisions about our resources</h3>
			<p>Malden’s school budget must be examined diligently and I pledge to be a strong advocate for smart budget spending.</p>
			</div>

			<div className={style.border}>
			<h3>Public resources for public schools</h3>
			<p>I believe in ensuring our public schools can be as successful as possible, and that includes investing at the state and local level for the resources our children need to succeed. It also means fighting attempts to take public resources away from our public schools. We know that funding for education is in crisis in Massachusetts - underfunded to the tune of $1billion per year! We owe it to our children to support a fair and equitable formula that lets us create the schools all students deserve.</p>
			</div>

			<div className={style.border}>
			<h3>Maintain and enhance vocational learning opportunities</h3>
			<p>I will fight to enhance the vocational learning programs at Malden High School to ensure that students are exposed to career pathways that include apprenticeship and pre-apprenticeship in construction and other trades, in addition to being counseled on the best college programs.</p>
			</div>

			<div className={style.border}>
			<h3>Room to learn</h3>
			<p>It is well documented that students learn best and teachers are best able to support student success when class sizes are smaller. As Malden has grown, many of our classrooms have become overcrowded, and this has created barriers to our success as a school district and city. While there is no easy fix to this problem, I pledge to work through my role to facilitate solutions.</p>
			</div>

			<div>
			<h3>Recess as a tool for success</h3>
			<p>Ample time for physical exercise and fresh air is not just healthy for children’s bodies, it is essential for their learning. Longer recess has positive effects on concentration levels, mood, and productivity among students. Malden should join other local and U.S. cities and towns and examine options for expanding recess time to support learning. I believe that working together,  teachers, staff and parents can find a recess solution that works for Malden students.</p>
			</div>

			<div>
			<h3>Diversity and equity</h3>
			<p>Malden schools are diverse with an array of socio-economic backgrounds, races, religions, ethnicities and family structures. This is an asset for our students and for our entire city. It is essential that there is a level playing field and that all children in Malden receive the support they need to succeed. I will support a hiring model that emphasizes diversity among our teachers. I support social-emotional learning and restorative justice practices in the classroom and support and training for our teachers and staff.</p>
			</div>
			</div>
			</section>
    
    </Layout>
)

export default Issues