import React from "react"
import Menu from "./menu"
import { footer, nav, menuWrapper, link, donateWrapper, donate } from "./footer.module.css"

const Footer = () => (
    <footer className={footer}>
        
        <Menu classes={{nav, menuWrapper, link, donateWrapper, donate}} show={true} />
        <div>
            © {new Date().getFullYear()}, The Committee to Elect Rachael Running
        </div>
    </footer>
)

export default Footer