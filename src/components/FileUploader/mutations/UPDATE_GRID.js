import { gql } from 'apollo-boost'

export default gql`
	mutation UPDATE_GRID (
		$id: ID!,
		$color: String!,
		$size: String!,
		$quantity: String!
	) {
			updateGrid (
				id: $id,
				color: $color,
				size: $size,
				quantity: $quantity
			) {
					id
				}
		}
`
