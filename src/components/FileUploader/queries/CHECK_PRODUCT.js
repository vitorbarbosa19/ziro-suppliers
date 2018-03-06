import { gql } from 'apollo-boost'

export default gql`
	query CHECK_PRODUCT (
		$reference: String!
	) {
			Product (
				reference: $reference
			) {
					id
					reference
				}
		}
`
