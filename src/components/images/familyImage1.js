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

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "running-family.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img 
        alt="The Deveau-Running Family: Rachael, Sarah, and children."
        title="The Deveau-Running Family: Rachael, Sarah, and children."
        style={{maxWidth:'700px', minWidth: '200px', }} 
        imgStyle={{maxWidth: '700px', minWidth: '200px', objectFit: 'cover', paddingRight: '2em'}} 
        fluid={data.placeholderImage.childImageSharp.fluid} 
      />
    }
  />
)
export default Image
