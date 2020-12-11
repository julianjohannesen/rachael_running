import React from "react"
import { footer, copyright, logo } from "./footer.module.css"
import ContactForm from './contactForm'
import LogoBack from "./images/logo-original"

const Footer = () => (
    <footer className={footer}>
        {/* <ContactForm formTitle={'Sign up for updates!'}/> */}
        <div className={copyright}>
            {/* © {new Date().getFullYear()}, The Committee to Elect Rachael Running */}
        </div>
        {/* <LogoBack className={logo} /> */}
    </footer>
)

export default Footer