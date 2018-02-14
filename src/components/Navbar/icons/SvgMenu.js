import React from 'react'

const SvgMenu = (props) => (
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
		<line x1={"3"} y1={"12"} x2={"21"} y2={"12"}></line>
		<line x1={"3"} y1={"6"} x2={"21"} y2={"6"}></line>
		<line x1={"3"} y1={"18"} x2={"21"} y2={"18"}></line>
	</svg>
)

export default SvgMenu
