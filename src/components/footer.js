import React from "react"
import { footer } from "./footer.module.css"
import ContactForm from './contactForm'

const Footer = () => (
    <footer className={footer}>
        <ContactForm formTitle={'Sign up for updates!'}/>
        <div>
            © {new Date().getFullYear()}, The Committee to Elect Rachael Running
        </div>
    </footer>
)

export default Footer