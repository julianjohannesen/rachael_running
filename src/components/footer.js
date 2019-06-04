import React from "react"
import Social from "./social"
import Menu from "./menu"
import { footer, nav, donate, donateWrapper, link } from "./footer.module.css"

const Footer = () => (
    <footer className={footer}>
        
        <Menu classes={{nav, donateWrapper, donate, link}} />
        <div>
            © {new Date().getFullYear()}, The Committee to Elect Rachael Running
        </div>
    </footer>
)

export default Footer