import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfessionalImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rachael-professional1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 350, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img 
        style={{maxWidth:'350px', minWidth: '150px', }} 
        imgStyle={{maxWidth: '350px', minWidth: '150px', objectFit: 'cover', }} 
        fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default ProfessionalImage