import { gql } from 'apollo-boost'

export default gql`
	query CHECK_PRODUCT (
		$referencia: String!
	) {
			Product (
				referencia: $referencia
			) {
					id
					referencia
					grade {
						id
					}
				}
		}
`
