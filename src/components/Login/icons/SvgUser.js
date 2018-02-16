import React from 'react'

const SvgUser = (props) => (
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
		<path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}></path>
		<circle cx={"12"} cy={"7"} r={"4"}></circle>
	</svg>
)

export default SvgUser
