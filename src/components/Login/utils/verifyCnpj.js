import axios from 'axios'

export const verifyCnpj = (that) => async () => {
	try {
		that.props.changeUiState('VERIFY_CNPJ')
		const response = await axios.get(`https://zirocnpj.now.sh?cnpj=${that.state.cnpj}`)
		that.props.changeUiState('VERIFY_CNPJ_OK')
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}