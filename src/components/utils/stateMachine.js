// those states are not meant for business logic, only for async operations
// I just want to keep track of async fetch errors throughout the app
export const stateMachine = {
	initialState: 'idle',
	// states
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
	uploading_products_error: {},
	// update state method
	changeUiState (that) {
		return (action) => {
			that.setState( (prevState) => {
				if (this[prevState.uiState][action])
					return { uiState: this[prevState.uiState][action] }
				return { uiState: prevState.uiState }
			})
		}
	}
}
