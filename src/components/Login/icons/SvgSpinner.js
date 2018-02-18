// Spinner that shows when the page is 'loading'
import React from 'react'

const SvgSpinner = (props) => (
  <svg width={props.width} height={props.height} viewBox={'0 0 50 50'}>
    <path fill={props.color} d={'M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'}>
      <animateTransform
        attributeType={'xml'}
        attributeName={'transform'}
        type={'rotate'}
        from={'0 25 25'}
        to={'360 25 25'}
        dur={'0.6s'}
        repeatCount={'indefinite'}
      />
    </path>
  </svg>
)

SvgSpinner.defaultProps = {
  width: '25',
  height: '25',
  color: '#566270'
}

export default SvgSpinner
