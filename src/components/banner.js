import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rachael-banner.webp" }) {
          childImageSharp {
            fluid(maxWidth: 1100, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img style={{maxWidth:'1100px', minWidth: '600px', }} imgStyle={{maxWidth: '1100px', minWidth: '600px', objectFit: 'cover', }} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Banner