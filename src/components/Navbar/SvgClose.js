import React from 'react'

const SvgNew = (width = 24, height = 24, color = '#FFF') => (
	<svg width={width} height={height} viewBox={"0 0 24 24"} fill={"none"} stroke={color} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
		<line x1={"18"} y1={"6"} x2={"6"} y2={"18"}></line>
		<line x1={"6"} y1={"6"} x2={"18"} y2={"18"}></line>
	</svg>
)

export default SvgNew
