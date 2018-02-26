import axios from 'axios'

export const verifyCnpj = (that) => async () => {
	if (that.state.cnpj.length === 14) { 
		that.setState({ errorCnpj: '' })
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
					that.setState({
						isManufacturer: true,
						cnpjIsInvalid: false,
						registerSuccess: false,
						name: data.fantasia ? data.fantasia : data.nome,
						city: data.municipio,
						area: data.bairro,
					})
				else
					that.setState({ isManufacturer: false, cnpjIsInvalid: true, registerSuccess: false })
			} else {
				console.log('CNPJ inválido')
				that.setState({ isManufacturer: false, cnpjIsInvalid: true, registerSuccess: false })
			}
		} catch (error) {
			console.log(error)
			that.props.changeUiState('VERIFY_CNPJ_ERROR')
		}
	} else {
		that.setState({ errorCnpj: 'Campo CNPJ deve ter 14 dígitos' })
	}
}

// 19.629.091/0001-57
// 08.622.108/0003-90
// 01.818.489/0006-80
