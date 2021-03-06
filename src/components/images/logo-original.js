import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const LogoBack = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img 
      alt="Rachael for Malden 2019"
      title="Rachael for Malden 2019"
      style={{maxWidth: '350px', minWidth: '200px', backgroundColor: 'rgba(256,256,256,0.5)', margin: '1em auto'}} 
      imgStyle={{maxWidth: '350px', minWidth: '200px'}} 
      fluid={data.placeholderImage.childImageSharp.fluid} 
      />
    }
  />
)
export default LogoBack
