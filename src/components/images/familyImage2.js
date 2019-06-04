import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FamilyImage2 = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "running-family3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img style={{maxWidth:'400px', minWidth: '400px', float: 'right', margin: '1rem'}} imgStyle={{maxWidth: '400px', minWidth: '400px', objectFit: 'cover', }} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default FamilyImage2