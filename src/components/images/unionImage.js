import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UnionImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rachael-fight.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img style={{maxWidth:'500xp', minWidth: '200px', }} imgStyle={{maxWidth: '500px', minWidth: '200px', objectFit: 'cover', }} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default UnionImage