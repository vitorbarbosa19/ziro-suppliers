import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_USER {
		createUser {
			id
		}
	}
`