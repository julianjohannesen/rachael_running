import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Volunteer = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "malden-seal.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    // Under 900px vw, I get cropping on the right side
    // Over 900px vw the image size increses and I get cropping at the top
    // Right now, 900-1300px vw looks pretty good.
    render={data => <BackgroundImage 
        Tag="section" 
        style={{}}
        fluid={data.placeholderImage.childImageSharp.fluid} 
      >
        {children}
      </BackgroundImage>
    }
  />
)
export default Volunteer
