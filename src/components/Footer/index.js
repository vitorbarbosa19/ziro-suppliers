import React from 'react'
import { Image } from 'cloudinary-react'
import { footer, copy } from './styles'

const Footer = () => (
	<div style={footer}>
		<Image
      cloudName='ziro'
      width='70'
      publicId='logo-original_lork1u'
      version='1508000699'
      format='png'
      secure='true'
   	/>
   	<span style={copy}>&copy; 2018</span>
	</div>
)

export default Footer