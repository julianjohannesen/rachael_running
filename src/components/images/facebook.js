import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Facebook = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "facebook.png" }) {
          childImageSharp {
            fluid(maxWidth: 100, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img style={{maxWidth:'100px', minWidth: '64px', }} imgStyle={{maxWidth: '100px', minWidth: '64px', objectFit: 'cover', }} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Facebook