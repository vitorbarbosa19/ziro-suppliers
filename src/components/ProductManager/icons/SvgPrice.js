import React from 'react'

const SvgPrice = (props) => (
	<svg
		style={props.cursor ? {cursor: 'pointer'} : null}
		onClick={props.onClick || null}
		width={props.width}
		height={props.height}
		viewBox={"0 0 24 24"}
		fill={"none"}
		stroke={props.color}
		strokeWidth={"2"}
		strokeLinecap={"round"}
		strokeLinejoin={"round"}
	>
		<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
		<line x1="7" y1="7" x2="7" y2="7"></line>
	</svg>
)

export default SvgPrice
