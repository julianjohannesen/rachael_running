import React from 'react'

export default function ContactForm() {
    return (
        <form 
            action="/" 
            method="post" 
            name="contact" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
        >

            <input  type="hidden" name="form-name" value="contact" />

            <p style={{visibility:"hidden", margin: "-.5em"}} >
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p>
                <label>Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Phone: <input type="telephone" name="phone" /></label>
            </p>
            <p>
                <label></label> 
            </p>
            
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}


