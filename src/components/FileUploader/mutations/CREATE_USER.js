import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_USER (
		$authProvider: AuthProviderSignupData!
	) {
			createUser (
				authProvider: $authProvider
			) {
				id
			}
	}
`