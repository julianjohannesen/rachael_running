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
        forwardTo: '',

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
            .then(()=>{
                console.log("The window inner width is: ", window.innerWidth)
                if(window.innerWidth >= 600){
                    this.toggleModal()
                } else {
                    console.log("Form posted.")
                }
            })
            .catch(error => console.warn(error));

    }

    toggleModal = () => {
        this.setState({
            success: !this.state.success
        });
    }


    // As soon as the page loads, determine viewport width
    // and set the form posting behavior
    componentDidMount(){
        console.log("component has mounted. inner width is: ", window.innerWidth)
        this.setState({
            forwardTo: window.innerWidth >= 600 ? "/" : "/success"
        })
    }

    render() {

        return (
            <React.Fragment>
                <Modal show={this.state.success} onClose={this.toggleModal} >
                    Thank you! We'll be in touch.
                </Modal>
                <form
                    action={this.state.forwardTo}
                    name="contact"
                    id="contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    aria-label="Sign up for updates!"
                    title="Sign for updates"
                >

                    <input aria-label="Ignore this." type="hidden" name="form-name" value="contact"/>

                    <p className={style.hidden} >
                        <label htmlFor="bot-field">Don’t fill this out if you're human: <input id="bot-field" name="bot-field" aria-label="This is a honeypot to catch spam! Don't fill it out" /></label>
                    </p>
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
                    <div className={style.telWrapper}>
                        <p>
                            <label htmlFor="phoneArea">Phone:&nbsp;&nbsp;
                                <input  
                                    type="text"
                                    size="3"
                                    id="phoneArea"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{3}"
                                    placeholder="111"
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
                                    placeholder="111"
                                    id="phonePrefix"
                                    name="phonePrefix"
                                    aria-label="Please provide the first 3 digits of your phone number."
                                    title="Please provide the first 3 digits of your phone number."
                                    value={this.state.phonePrefix}
                                />-&nbsp;
                            </label>
                        </p>
                        <p>
                            <label htmlFor="phoneLineNumber">
                                <input
                                    style={{width:"2.5em"}}
                                    size="4"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{4}"
                                    placeholder="1111"
                                    name="phoneLineNumber"
                                    id="phoneLineNumber"
                                    aria-label="Please provide the last four digits of your phone number."
                                    title="Please provide the last four digits of your phone number."
                                    value={this.state.phoneLineNumber}
                                />
                            </label>
                        </p>
                        <p className={this.state.valid ? style.hidden : style.warning}>Please complete your telephone number.</p>
                    </div>
                    <p className={style.ward8}>
                        <label htmlFor="ward8">
                            <input
                                onChange={this.handleInputChange}
                                type="checkbox"
                                name="ward8"
                                id="ward8"
                                value={this.state.isWard8}
                            />
                            &nbsp;I live in Malden Ward 8
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

                    <p>
                        <button name="submit" id="submit" className={style.btn + " " + style.btn2} type="submit" aria-label="Submit" title="submit">Send</button>
                    </p>
                   
                </form>
            </React.Fragment>
        )
    }
}


