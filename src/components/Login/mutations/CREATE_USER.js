import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_USER ($brand: String!) {
		createUser (brand: $brand) {
			id
			brand
		}
	}
`