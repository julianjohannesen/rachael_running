import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Banner = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "running-family.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3600, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <BackgroundImage 
        Tag="section" 
        style={{height:'40em'}}
        fluid={data.placeholderImage.childImageSharp.fluid} 
      >
        {children}
      </BackgroundImage>
    }
  />
)
export default Banner
