import axios from 'axios'

export const verifyCnpj = (that) => async () => {
	try {
		that.props.changeUiState('VERIFY_CNPJ')
		const { data, data: {status} } = await axios.get(`https://zirocnpj.now.sh?cnpj=${that.state.cnpj}`)
		that.props.changeUiState('VERIFY_CNPJ_OK')
		if (status === 'OK') {
			console.log(data)
			const isValidActivity = [ ...data.atividade_principal, ...data.atividades_secundarias ].filter( (activity) => {
				return /46.42-7-01|14.12-6-01/.test(activity.code)
			})
			if (isValidActivity.length)
				that.setState({ isManufacturer: true, cnpjIsInvalid: false })
			else
				that.setState({ isManufacturer: false, cnpjIsInvalid: true })
		} else {
			console.log('CNPJ inválido')
			that.setState({ isManufacturer: false, cnpjIsInvalid: true })
		}
	} catch (error) {
		console.log(error)
		that.props.changeUiState('VERIFY_CNPJ_ERROR')
	}
}