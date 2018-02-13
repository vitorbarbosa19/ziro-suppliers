import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { manager, product, infoBlock, info, label, grid, gridTitle, gridValue } from './styles'

const data = {
  publicId1: 'c4ajtkoyjxqeddsrnrta',
  version1:'1518293299',
  publicId2:'sqaenvfz1csvtmxb1icc',
  version2:'1518293217',
  publicId3:'l819o7c5vkqzaeqksrir',
  version3:'1518293203'
}

export default class ProductManager extends Component {
	render() {
		return(
			<div style={manager}>
	   		<div style={infoBlock}>
	 				<Image
			      style={{gridArea: 'product', borderRadius: '4px'}}
			      cloudName='ziro'
			      width='200'
			      publicId='dlp310oxaezurglb88lt'
			      version='1518292989'
			      format='jpg'
			      secure='true'
		   		/>
	   			<div style={{gridArea: 'referencia'}}>
		   			<span style={label}>Referência:&nbsp;</span>
		   			<span>008-2491</span>
		   		</div>
		   		<div style={{gridArea: 'preco'}}>
		   			<span style={label}>Preço:&nbsp;</span>
		   			<span>R$233.87</span>
		   		</div>
	   			<div style={{gridArea: 'descricao'}}>
	   				<span style={label}>Descrição:&nbsp;</span>
	   				<span>Bolsa sintética pequena, fivela com dois pinos</span>
	   			</div>
	   			<div style={{gridArea: 'grid', alignSelf: 'end'}}>
			   		<div style={grid}>
			   			<span style={{gridArea: 'ti', 	fontFamily: 'Hind Vadodara', textTransform: 'uppercase', fontSize: '1.5rem', fontWeight: '700', marginTop: '-27px', backgroundColor: 'white', padding: '0 10px'}}>Quantidade em estoque</span>
			   			<span style={{gridArea: 'c0', justifySelf: 'start'}}></span>
			   			<span style={{gridArea: 'pp'}}><strong>PP</strong></span>
			   			<span style={{gridArea: 'p'}}><strong>P</strong></span>
			   			<span style={{gridArea: 'm'}}><strong>M</strong></span>
			   			<span style={{gridArea: 'g'}}><strong>G</strong></span>
			   			<span style={{gridArea: 'gg'}}><strong>GG</strong></span>
			   			<span style={{gridArea: 'xg'}}><strong>XG</strong></span>
			   			<span style={{gridArea: 'u'}}><strong>U</strong></span>
			   			<span style={{gridArea: 'c1', justifySelf: 'start'}}>Marinho</span>
			   			<span style={{gridArea: '1-1'}}>0</span>
			   			<span style={{gridArea: '1-2'}}>1</span>
			   			<span style={{gridArea: '1-3'}}>4</span>
			   			<span style={{gridArea: '1-4'}}>0</span>
			   			<span style={{gridArea: '1-5'}}>1</span>
			   			<span style={{gridArea: '1-6'}}>2</span>
			   			<span style={{gridArea: '1-7'}}>0</span>
			   			<span style={{gridArea: 'c2', justifySelf: 'start'}}>Bege</span>
			   			<span style={{gridArea: '2-1'}}>2</span>
			   			<span style={{gridArea: '2-2'}}>3</span>
			   			<span style={{gridArea: '2-3'}}>1</span>
			   			<span style={{gridArea: '2-4'}}>2</span>
			   			<span style={{gridArea: '2-5'}}>0</span>
			   			<span style={{gridArea: '2-6'}}>0</span>
			   			<span style={{gridArea: '2-7'}}>0</span>
			   		</div>
		   		</div>
		   	</div>
			</div>
		)
	}
}
