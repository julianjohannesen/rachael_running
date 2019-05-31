import React, { Component } from 'react'

// See this post: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators 
// See esp the part of stateful react forms
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phoneArea: '',
        phonePrefix: '',
        phoneLineNumber: '',
        isWard8: false,
        isVolunteer: false,
        valid: true,

    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        if(this.state.phoneArea || this.state.phonePrefix || this.state.phoneLineNumber) {
            if(!this.state.phoneArea || !this.state.phonePrefix || !this.state.phoneLineNumber) {
                this.setState({valid: !this.state.valid})
                return -1
            }
        }
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        event.preventDefault();
    }

    render() {
        return (
            <form
                action="/"
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >

                <input type="hidden" name="form-name" value="contact" />

                <p style={{ visibility: "hidden", margin: "-.5em" }} >
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <p>
                    <label>Name: <input onChange={this.handleInputChange} type="text" name="name" required value={this.state.name} /></label>
                </p>
                <p>
                    <label>Email: <input onChange={this.handleInputChange} type="email" name="email" value={this.state.email} required /></label>
                </p>
                <div style={{ paddingBottom: "1em" }} className={this.state.valid ? '' : this.style.warning}>
                    <p style={{ display: "inline" }}>
                        <label>Phone:&nbsp;&nbsp;
                                <input
                                style={{ border: "none", width: "1.8em", color: "#808080"}}
                                type="text"
                                onChange={this.handleInputChange}
                                pattern="[0-9]{3}"
                                placeholder="111"
                                name="phoneArea"
                                value={this.state.phoneArea}
                            />&nbsp;-&nbsp;
                            </label>
                    </p>
                    <p style={{ display: "inline" }}>
                        <label>
                            <input
                                style={{ border: "none", width: "2em", color: "#808080"}}
                                type="text"
                                onChange={this.handleInputChange}
                                pattern="[0-9]{3}"
                                placeholder="111"
                                name="phonePrefix"
                                value={this.state.phonePrefix}
                            />-&nbsp;
                            </label>
                    </p>
                    <p style={{ display: "inline" }}>
                        <label>
                            <input
                                style={{ border: "none", width: "3em", color: "#808080",}}
                                type="text"
                                onChange={this.handleInputChange}
                                pattern="[0-9]{4}"
                                placeholder="1111"
                                name="phoneLineNumber"
                                value={this.state.phoneLineNumber}
                            />
                        </label>
                    </p>
                </div>
                <p>
                    <label>
                        <input 
                            onChange={this.handleInputChange} 
                            type="checkbox" 
                            name="ward8" 
                            value={this.state.isWard8} 
                        /> 
                            &nbsp;I live in Malden Ward 8
                    </label>
                </p>
                <p>
                    <label>
                        <input 
                            onChange={this.handleInputChange} 
                            type="checkbox" 
                            name="volunteer" 
                            value={this.state.isVolunteer} 
                        /> 
                        &nbsp;Contact me about volunteering
                    </label>

                </p>

                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        )
    }
}


