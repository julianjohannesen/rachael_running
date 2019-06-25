import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/images/bannerImage"
import Logo from "../components/images/logo"
import { intro } from "./about.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Banner >
      <Logo />
      <div className={intro}>
        <h2>NOT FOUND</h2>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Banner>
  </Layout>
)

export default NotFoundPage
