import React, { Component } from 'react'
import { burgerWrapper, burger, burgerCloser } from './burger.module.css'

export default class Burger extends Component {

    state = {
        showBurger: true,
    }

    handleClick = () => {
        this.setState({
            showBurger: !this.state.showBurger,
        })
    }

    render() {
        const {showBurger} = this.state
        return (
            <div className={burgerWrapper} onClick={this.handleClick}>
				
				<div className={burger} style={ showBurger ? {display: 'block'} : {display: 'none'} }>
					<span></span>
					<span></span>
					<span></span>
                </div>
                
                <div className={burgerCloser} style={ showBurger ? {display: 'none'} : {display: 'block'} }>X</div>

			</div>
        )
    }
}
