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
    render={data => (
      // margin 0 auto is to center the photo when dropping from side by side to above and below.
      <Img 
      alt="Rachael at a Fight for Fifteen Rally"
      title="Rachael at a Fight for Fifteen Rally"
        style={{maxWidth:'600px', minWidth: '300px', margin: '0 auto'}} 
        imgStyle={{maxWidth: '600px', minWidth: '300px', objectFit: 'cover', }} 
        fluid={data.placeholderImage.childImageSharp.fluid} 
      />)}
  />
)
export default UnionImage