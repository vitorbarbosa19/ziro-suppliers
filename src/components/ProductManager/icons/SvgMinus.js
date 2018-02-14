import React from 'react'

const SvgMinus = (props) => (
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
		<polyline points="15 18 9 12 15 6"></polyline>
	</svg>
)

export default SvgMinus
