import React, { Component } from 'react'
import SvgSpinner from './icons/SvgSpinner'
import SvgAlert from './icons/SvgAlert'
import { handleAuth } from './auth'
import { loading, message } from './styles'

export default class Callback extends Component {
	state = { errorOnAuth: false }
	componentDidMount() {
		handleAuth( (error, authResult) => {
			if (!error && authResult && authResult.accessToken && authResult.idToken) {
				localStorage.setItem('access', authResult.accessToken)
				localStorage.setItem('id', authResult.idToken)
				this.props.push('/')
			} else {
				this.setState({ errorOnAuth: true })
				console.log(error)
			}
		})
	}
	render() {
		return (
			<div>
				{	this.state.errorOnAuth ?
						<div style={loading}>
							<SvgAlert
								width={'50'}
								height={'50'}
							/>
							<span style={message}>
								Ocorreu um erro durante o login. Tente novamente ou procure o suporte
							</span>
						</div>
					:
						<div style={loading}>
							<SvgSpinner
								width={'50'}
								height={'50'}
							/>
							<span style={message}>
								Aguarde enquanto fazemos seu login...
							</span>
						</div>
				}
			</div>
		)
	}
}
