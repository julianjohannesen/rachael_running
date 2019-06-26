import React from 'react'
import cn from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

import { donateWrapper, donate } from './donate.module.css'

export default function Donate({ classes={} }) {

    const donationLink = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    donationLink
                }
            }
        }
    `)
    
    return (
        <div className={cn(donateWrapper, classes.donateWrapper)}>
			<a className={cn(donate, classes.donate)} href="https://secure.actblue.com/donate/rachaelformalden" title="donate">DONATE</a>
        </div>
    )
}
