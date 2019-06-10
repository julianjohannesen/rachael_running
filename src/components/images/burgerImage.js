import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BurgerImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "menu-512.png" }) {
          childImageSharp {
            fluid(maxWidth: 1100, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img 
        alt="Burger menu"
        style={{maxWidth:'100px', minWidth: '64px', }} 
        imgStyle={{maxWidth: '100px', minWidth: '64px', objectFit: 'cover', }} 
        fluid={data.placeholderImage.childImageSharp.fluid} 
        />
    }
  />
)
export default BurgerImage