import React, { Component } from 'react'
import style from './contactForm.module.css'
import Modal from './successModal'

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
        success: false,

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
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(this.toggleModal())
            .catch(error => console.warn(error));

    }

    toggleModal = () => {
        this.setState({
            success: !this.state.success
        });
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.success} onClose={this.toggleModal} >
                    Thank you! We'll be in touch.
                </Modal>
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
                    <div style={{ paddingBottom: "1em" }}>
                        <p style={{ display: "inline" }}>
                            <label>Phone:&nbsp;&nbsp;
                        <input
                                    style={{ border: "none", width: "1.8em", color: "#808080" }}
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
                                    style={{ border: "none", width: "2em", color: "#808080" }}
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
                                    style={{ border: "none", width: "3em", color: "#808080", }}
                                    type="text"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{4}"
                                    placeholder="1111"
                                    name="phoneLineNumber"
                                    value={this.state.phoneLineNumber}
                                />
                            </label>
                        </p>
                        <p className={this.state.valid ? style.hidden : style.warning}>Please complete your telephone number.</p>
                    </div>
                    <p style={{marginBottom: '.25em'}}>
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
                        <button className={style.btn + " " + style.btn2} type="submit">Send</button>
                    </p>
                   
                </form>
            </React.Fragment>
        )
    }
}


