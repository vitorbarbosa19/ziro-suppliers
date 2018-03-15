// those states are not meant for business logic, only for async operations
// They serve to keep track of async fetch errors throughout the app
export const stateMachine = {
	initialState: 'idle',
	// states
	idle: {
		VERIFY_CNPJ: 'verifying_cnpj',
		REGISTER: 'registering',
		UPLOAD_PRODUCTS: 'uploading_products'
	},
	logging_in: {

	},
	logging_in_error: {

	},
	verifying_cnpj: {
		VERIFY_CNPJ_OK: 'idle',
		VERIFY_CNPJ_ERROR: 'verifying_cnpj_error'
	},
	verifying_cnpj_error: {
		VERIFY_CNPJ: 'verifying_cnpj'
	},
	registering: {
		REGISTER_OK: 'idle',
		REGISTER_ERROR: 'registering_error'
	},
	registering_error: {
		REGISTER: 'registering'
	},
	fetch_profile: {},
	fetch_profile_error: {},
	uploading_products: {
		UPLOAD_PRODUCTS_OK: 'idle',
		UPLOAD_PRODUCTS_ERROR: 'uploading_products_error'
	},
	uploading_products_error: {
		UPLOAD_PRODUCTS: 'uploading_products'
	},
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
