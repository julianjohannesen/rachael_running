import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { wrapper, formTitle, hidden, telWrapper, wv, ward8, warning, btn, sendBtn } from './contactForm.module.css'
import cn from 'classnames'

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
        success: false
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
        event.preventDefault();

        if (this.state.phoneArea || this.state.phonePrefix || this.state.phoneLineNumber) {
            if (!this.state.phoneArea || !this.state.phonePrefix || !this.state.phoneLineNumber) {
                this.setState({ valid: false })
                return -1
            }
            else {
                this.setState({ valid: true })
            }
        }
        fetch("/", 
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
            }
            )
            .then(() => {
                console.log("Form posted.");
                navigate("/success");
            })
            .catch(error => console.warn(error));

    }

    render() {

        return (
            <div className={wrapper}>
            <h2 className={formTitle}>{this.props.formTitle}</h2>
            <form
                name="contact"
                id="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >

                <input type="hidden" name="form-name" value="contact" />

                <p className={hidden} >
                    <label htmlFor="bot-field">
                        Don’t fill this out if you're human: 
                        <input 
                            id="bot-field" 
                            name="bot-field" 
                            aria-label="Don't fill this out" />
                    </label>
                </p>

                <section>
                    <p>
                        <label htmlFor="name">Name:&nbsp;&nbsp;
                            <input
                                onChange={this.handleInputChange}
                                type="text"
                                id="name"
                                name="name"
                                required
                                aria-label="Please provide your full name."
                                title="Please provide your full name."
                                value={this.state.name}
                            />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="email">Email:&nbsp;&nbsp;
                            <input
                                onChange={this.handleInputChange}
                                type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                aria-label="Please provide your email address."
                                title="Please provide your email address."
                                required
                            />
                        </label>
                    </p>

                    <div className={telWrapper}>
                        <p>
                            <label htmlFor="phoneArea">Phone:&nbsp;&nbsp;
                                <input
                                    type="text"
                                    size="3"
                                    id="phoneArea"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{3}"

                                    name="phoneArea"
                                    aria-label="Please provide your area code."
                                    title="Please provide your area code."
                                    value={this.state.phoneArea}
                                />&nbsp;-&nbsp;
                            </label>
                        </p>
                        <p>
                            <label htmlFor="phonePrefix">
                                <input
                                    type="text"
                                    size="3"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{3}"

                                    id="phonePrefix"
                                    name="phonePrefix"
                                    aria-label="Please provide the first 3 digits of your phone number."
                                    title="Please provide the first 3 digits of your phone number."
                                    value={this.state.phonePrefix}
                                />&nbsp;-&nbsp;
                            </label>
                        </p>
                        <p>
                            <label htmlFor="phoneLineNumber">
                                <input
                                    size="4"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{4}"

                                    name="phoneLineNumber"
                                    id="phoneLineNumber"
                                    aria-label="Please provide the last four digits of your phone number."
                                    title="Please provide the last four digits of your phone number."
                                    value={this.state.phoneLineNumber}
                                />
                            </label>
                        </p>
                        <p className={this.state.valid ? hidden : warning}>Please complete your telephone number.</p>
                    </div>

                    <div className={wv}>
                        <p className={ward8}>
                            <label htmlFor="ward8">
                                <input
                                    onChange={this.handleInputChange}
                                    type="checkbox"
                                    name="ward8"
                                    id="ward8"
                                    value={this.state.isWard8}
                                />
                                &nbsp;I live in Malden Ward 8<br/>(<a href="http://www.sec.state.ma.us/wheredoivotema//bal/MyElectionInfo.aspx" title="Find my ward">Find my ward</a>)
                            </label>
                        </p>
                        <p>
                            <label htmlFor="volunteer">
                                <input
                                    onChange={this.handleInputChange}
                                    type="checkbox"
                                    name="volunteer"
                                    id="volunteer"
                                    value={this.state.isVolunteer}
                                />
                                &nbsp;Contact me about volunteering
                                </label>
                        </p>
                    </div>

                </section>
                <p>
                    <button
                        name="submit"
                        id="submit"
                        className={cn(btn, sendBtn)}
                        type="submit"
                        aria-label="Submit"
                        title="submit"
                    >Send
                    </button>
                </p>

            </form>
        </div>

        )
    }
}


