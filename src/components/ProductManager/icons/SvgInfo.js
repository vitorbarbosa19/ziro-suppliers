import React from 'react'

const SvgInfo = (props) => (
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
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="12" y1="16" x2="12" y2="12"></line>
		<line x1="12" y1="8" x2="12" y2="8"></line>
	</svg>
)

export default SvgInfo
