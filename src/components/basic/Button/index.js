import React, { Component } from 'react'
import { button, buttonOnHover } from './styles'

export default class Button extends Component {
	state = { isHovered: false }
	hoverIn = () => { this.setState({ isHovered: true }) }
	hoverOut = () => { this.setState({ isHovered: false }) }
	render = () => (
		<button
			style={this.state.isHovered ? buttonOnHover : button}
			onMouseEnter={this.hoverIn}
			onMouseLeave={this.hoverOut}
			onClick={this.props.onClick}
		>
			{this.props.text}
		</button>
	)
}
