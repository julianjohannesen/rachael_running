import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import Banner from "../components/images/bannerImage"
import Logo from "../components/images/logo"
import { intro } from "./about.module.css"

const Success = props  => (
  <Layout>
    <SEO title="Success" />
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <Banner >
      <Logo />
      <div className={intro}>
        <h1 style={{color: "white", fontSize: "250%"}}>Thank you!</h1>
        <h2>We'll be in touch soon.</h2>
      </div>
    </Banner>
  </Layout>
)

export default Success
