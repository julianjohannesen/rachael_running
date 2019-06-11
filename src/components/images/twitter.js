import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Twitter = () => (
	<StaticQuery

		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "twitter.png" }) {
				childImageSharp {
					fluid(maxWidth: 100, quality: 90, background: "rgba(0,0,0,0.5)", ) {
						...GatsbyImageSharpFluid
					}
				}
				}
			}
		`}
		
		render={data => <Img
			title="Follow on Twitter"
			style={{ maxWidth: '100px', minWidth: '64px', }}
			imgStyle={{ maxWidth: '100px', minWidth: '64px', objectFit: 'cover', }}
			fluid={data.placeholderImage.childImageSharp.fluid}
		/>
		}

	/>
)
export default Twitter