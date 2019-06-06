import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const Success = props  => (
  <Layout>
    <SEO title="Success" />
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <h1>Thank you!</h1>
    <h2>We'll be in touch soon.</h2>
  </Layout>
)

export default Success
