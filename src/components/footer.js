import React from "react"

import { footer } from "./footer.module.css"

const Footer = () => (
    <footer className={footer}>
        <div>
            © {new Date().getFullYear()}, The Committee to Elect Rachael Running
        </div>
    </footer>
)

export default Footer