import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_PRODUCT (
		$brand: String!,
		$reference: String!,
		$description: String!,
		$price: String!,
		$grid: ProductgridGrid
	) {
			createProduct (
				brand: $brand,
				reference: $reference,
				description: $description,
				price: $price,
				grid: $grid
			) {
					brand
					reference
					description
				}
		}
`
