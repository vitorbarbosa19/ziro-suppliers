import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_PRODUCT (
		$brand: String!,
		$reference: String!,
		$description: String!,
		$price: String!
	) {
			createProduct (
				brand: $brand,
				reference: $reference,
				description: $description,
				price: $price
			) {
					brand
					reference
					description
				}
		}
`