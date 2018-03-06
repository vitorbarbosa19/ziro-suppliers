import { gql } from 'apollo-boost'

export default gql`
	mutation UPDATE_PRODUCT (
		$id: ID!,
		$description: String!,
		$price: String!,
		$grid: ProductgridGrid
	) {
			updateProduct (
				id: $id,
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
