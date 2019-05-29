import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <p>I am Rachael Running and I am running for Malden School Committee in Ward 8. I am passionate about our city and our public schools. As a mother of two, I am dedicated to the success of our schools. When our children succeed, Malden succeeds.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/about/">About Rachael</Link>
    <Link to="/issues/">Issues</Link>
    <Link to="/get-involved/">Get Involved</Link>
  </Layout>
)

export default IndexPage
