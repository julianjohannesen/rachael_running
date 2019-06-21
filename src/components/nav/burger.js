import React, { Component } from 'react'
import cn from 'classnames'
import { burgerWrapper, burger, burgerCloser, round } from './burger.module.css'

export default class Burger extends Component {

    state = {
        showBurger: true,
    }

    handleClick = () => {
        this.setState({
            showBurger: !this.state.showBurger,
        })
        this.props.toggleMenu()
    }

    render() {
        const {showBurger} = this.state
        return (
            <div className={burgerWrapper} onClick={this.handleClick}>
				
				<div className={cn(burger, round)} style={ showBurger ? {display: 'block'} : {display: 'none'} }>
					<span></span>
					<span></span>
					<span></span>
                </div>
                
                <div className={cn(burgerCloser, round)} style={ showBurger ? {display: 'none'} : {display: 'block'} }>X</div>

			</div>
        )
    }
}
