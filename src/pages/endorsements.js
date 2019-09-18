import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { intro, issuesWrapper,} from "./issues.module.css"
import IssuesBanner from "../components/images/issuesBanner";
import Logo from "../components/images/logo"

const Endorsements = () => (
	<Layout>
		<SEO title="Issues" />
		<IssuesBanner>
			<Logo />

				<div className={intro}>
					<h2>Endorsements</h2>
					<p>
					I'm proud to have been endorsed by the following organizations.</p>
				</div>
			
		</IssuesBanner>

		<section className={issuesWrapper}>
			<h2>Our Revolution Malden</h2>
			<h2>Greater Boston Labor Council</h2>
			<h2>Massachusetts Alliance for Retired Americans</h2>
			<h2>International Brotherhood of Electrical Workers (IBEW), Local 2222</h2>
			<h2>Laborer's Local 22</h2>
			<h2>Painters and Allied Trades DC #35</h2>
			<h2>Roofer’s Local 33</h2>
            <h2>Sheet Metal Workers' International Association Local Union No 17</h2>
            <h2>United Food and Commercial Workers (UFCW), Local 1445</h2>
			
			
		</section>
    
    </Layout>
)

export default Endorsements
