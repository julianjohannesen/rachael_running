import React, { Component } from 'react'
import { navigate } from 'gatsby'
import style from './volunteerForm.module.css'

// See this post: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators 
// See esp the part of stateful react forms
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class VolunteerForm extends Component {

    state = {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
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
            body: encode({ "form-name": "volunteer", ...this.state })
        })
            .then(() => {
                console.log("Form posted.")
                navigate("/success")
                }
            )
            .catch(error => console.warn(error));
    }

    render() {

        return (
            <div className={style.wrapper}>
    
                <h2 className={style.formTitle}>{this.props.formTitle}</h2>
                
                <form
                    name="volunteer"
                    id="volunteer"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                >

                    <input type="hidden" name="form-name" value="contact" />

                    <p className={style.hidden} >
                        <label htmlFor="bot-field">Don’t fill this out if you're human: <input id="bot-field" name="bot-field" aria-label="This is a honeypot to catch spam! Don't fill it out" /></label>
                    </p>

                    <section>

                        <p>
                            <label htmlFor="name">
                                Name:&nbsp;&nbsp;
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

                        <section className="address">
                            <p><label htmlFor="street">
                                Street:&nbsp;&nbsp;
                                <input 
                                    type="text" 
                                    name="street"
                                    id="street"
                                    onChange={this.handleInputChange} 
                                    required
                                    aria-label="Please provide your street address. Not your mailing address."
                                    title="Please provide your street address. Not your mailing address."
                                    value={this.state.street} />
                            </label></p>

                            <p><label htmlFor="city">
                                City:&nbsp;&nbsp;
                                <input 
                                    type="text" 
                                    name="city"
                                    id="city" 
                                    onChange={this.handleInputChange}
                                    required
                                    aria-label="Please provide your city."
                                    title="Please provide your city."
                                    value={this.state.city} />
                            </label></p>
                            
                            <p><label htmlFor="state">
                                State:&nbsp;&nbsp;
                                <input 
                                    type="text" 
                                    name="state"
                                    id="state" 
                                    size="2"
                                    onChange={this.handleInputChange}
                                    pattern="[a-zA-Z]{2}"
                                    required 
                                    aria-label="Please provide your state."
                                    title="Please provide your state."
                                    value={this.state.state}/>
                            </label></p>
                            
                            <p><label htmlFor="zip">
                                Zip:&nbsp;&nbsp;
                                <input 
                                    type="text" 
                                    name="zip"
                                    id="zip" 
                                    size="5"
                                    onChange={this.handleInputChange}
                                    pattern="[0-9]{5}"
                                    required 
                                    aria-label="Please provide your zip code."
                                    title="Please provide your full zip code."
                                    value={this.state.zip}/>
                            </label></p>  
                        </section>

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
                            <p className={this.state.valid ? style.hidden : style.warning}>Please complete your telephone number.</p>
                        </div>

                        <div className={style.wv}>
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
                        </div>

                    </section>
                    <p>
                        <button name="submit" id="submit" className={style.btn + " " + style.sendBtn} type="submit" aria-label="Submit" title="submit">Send</button>
                    </p>

                </form>
            </div>
        )
    }
}


