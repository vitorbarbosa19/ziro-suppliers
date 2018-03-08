import { signup } from '../../utils/auth'
import CREATE_USER from '../mutations/CREATE_USER'

export const registerUser = (that) => async (mutate) => {
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
		}, async (error, response) => {
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
				try {
					const mutationResult = await that.props.client.mutate({
						variables: { authProvider: { auth0: { idToken: response.Id } } },
						mutation: CREATE_USER
					})
					console.log(mutationResult)
				} catch (error) {
					console.log(error)
				}
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