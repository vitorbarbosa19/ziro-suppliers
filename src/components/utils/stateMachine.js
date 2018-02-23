const machine = {
	idle: { VERIFY_CNPJ: 'verifying_cnpj' },
	logging_in: {},
	logging_in_error: {},
	verifying_cnpj: { VERIFY_CNPJ_OK: 'idle', VERIFY_CNPJ_ERROR: 'verifying_cnpj_error' },
	verifying_cnpj_error: { VERIFY_CNPJ: 'verifying_cnpj' },
	registering: {},
	registering_error: {},
	fetch_profile: {},
	fetch_profile_error: {},
	uploading_products: {},
	uploading_products_error: {}
}

export const initialState = 'idle'

export const changeUiState = (that) => (action) => {
	that.setState( (prevState) => {
		if (machine[prevState.uiState][action])
			return { uiState: machine[prevState.uiState][action] }
		return { uiState: prevState.uiState }
	})
}