import React from 'react'

const SvgHome = (props) => (
	<svg width={props.width} height={props.height} viewBox={"0 0 24 24"} fill={"none"} stroke={props.color} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
		<path d={"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}></path>
		<polyline points={"9 22 9 12 15 12 15 22"}></polyline>
	</svg>
)

SvgHome.defaultProps = {
  width: '24',
  height: '24',
  color: '#566270'
}

export default SvgHome
