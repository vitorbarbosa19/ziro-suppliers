import { gql } from 'apollo-boost'

export default gql`
	mutation UPDATE_PRODUCT (
		$id: ID!,
		$description: String!,
		$price: String!
	) {
			updateProduct (
				id: $id,
				description: $description,
				price: $price
			) {
					id
					reference
				}
		}
`
