import React from 'react'

const SvgNew = (props) => (
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
		<line x1={"18"} y1={"6"} x2={"6"} y2={"18"}></line>
		<line x1={"6"} y1={"6"} x2={"18"} y2={"18"}></line>
	</svg>
)

export default SvgNew
