import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_PRODUCT (
		$brand: String!,
		$reference: String!,
		$description: String!,
		$price: String!,
		$grid: ProductgridGrid!,
		$ownerId: ID!
	) {
			createProduct (
				brand: $brand,
				reference: $reference,
				description: $description,
				price: $price,
				grid: $grid,
				ownerId: $ownerId
			) {
					brand
					reference
					description
				}
		}
`
