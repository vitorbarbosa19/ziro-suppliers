import { gql } from 'apollo-boost'

export default gql`
	query CHECK_USER ($brand: String!) {
		User (brand: $brand) {
			id
			brand
		}
	}
`
