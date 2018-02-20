import React from 'react'
import SvgSpinner from './icons/SvgSpinner'
import SvgAlert from './icons/SvgAlert'
import { loading, message } from './styles'

const Callback = (props) => (
	<div>
		{	props.errorOnAuth ?
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

export default Callback
