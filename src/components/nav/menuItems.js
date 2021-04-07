import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

import { link } from './menuItems.module.css'

export default function MenuItems({classes={}}) {
    return (
        <React.Fragment>

            <Link className={cn(link, classes.link)} activeClassName="active" to="/">Home</Link>
            <Link className={cn(link, classes.link)} activeClassName="active" to="/about">About Rachael</Link>
            {<Link className={cn(link, classes.link)} activeClassName="active" to="/issues">Issues</Link>
            <Link className={cn(link, classes.link)} activeClassName="active" to="/endorsements">Endorsements</Link>
            <Link className={cn(link, classes.link)} activeClassName="active" to="/get-involved">Get Involved</Link> }
        </React.Fragment>
    )
}
