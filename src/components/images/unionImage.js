import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UnionImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rachael-fight.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img style={{maxWidth:'600xp', minWidth: '300px', }} imgStyle={{maxWidth: '600px', minWidth: '300px', objectFit: 'cover', }} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default UnionImage