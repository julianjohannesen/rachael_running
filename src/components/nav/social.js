import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cn from 'classnames'

import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'

import { social, fb, tw } from './social.module.css'

export default function Social({classes={}}) {

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                twHandle
                fbHandle
              }
            }
          }
        `
    )

    return (
        <div className={cn(social, classes.social)}>
            <a href={`https://www.facebook.com/${site.siteMetadata.fbHandle}`} title="Follow us on Facebook">
                <img className={fb} src={Facebook} alt="Follow us on Facebook" />
            </a>
            <a href={`https://www.twitter.com/${site.siteMetadata.twHandle}`} title="Follow us on Twitter">
                <img className={tw} src={Twitter} alt="Follow us on Twitter" />
            </a>
        </div>
    )
}
