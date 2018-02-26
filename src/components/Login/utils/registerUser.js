import { signup } from '../../utils/auth'

export const registerUser = (that) => async () => {
	const emailIsValid = that.state.email.includes('@') && that.state.email.includes('.com')
	const passwordIsValid = that.state.password.length > 5
	if (emailIsValid && passwordIsValid) {
		that.props.changeUiState('REGISTER')
		signup({
			connection: 'Username-Password-Authentication',
			email: that.state.email,
			password: that.state.password,
			user_metadata: {
				cnpj: that.state.cnpj,
				name: that.state.name,
				city: that.state.city,
				area: that.state.area
			}
		}, (error) => {
			if (error) {
				console.log(error)
				that.props.changeUiState('REGISTER_ERROR')		
			} else {
				that.props.changeUiState('REGISTER_OK')
				that.setState({
					cnpj: '',
					email: '',
					password: '',
					name: '',
					city: '',
					area: '',
					errorCnpj: '',
					errorEmail: '',
					errorPassword: '',
					cnpjIsInvalid: false,
					isManufacturer: false,
					registerSuccess: true,
					buttonIsHovered: false,
					tabOneIsActive: true,
					tabTwoIsActive: false
				})
			}
		})
	}
	emailIsValid ?
		that.setState({ errorEmail: '' })
	:
		that.setState({ errorEmail: 'Email: Formato inválido' })
	passwordIsValid ?
		that.setState({ errorPassword: '' })
	:
		that.setState({ errorPassword: 'Senha: Pelo menos 6 caracteres' })
}