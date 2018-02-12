import React from 'react'

const SvgUser = (width = 24, height = 24, color = '#FFF') => (
	<svg width={width} height={height} viewBox={"0 0 24 24"} fill={"none"} stroke={color} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
		<path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}></path>
		<circle cx={"12"} cy={"7"} r={"4"}></circle>
	</svg>
)

export default SvgUser
