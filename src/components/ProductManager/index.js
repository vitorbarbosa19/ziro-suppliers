import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import SvgPrice from './icons/SvgPrice'
import SvgInfo from './icons/SvgInfo'
import SvgBookmark from './icons/SvgBookmark'
import SvgBox from './icons/SvgBox'
import { manager, product, info, label, grid } from './styles'
import { data } from './data'

export default class ProductManager extends Component {
	render() {
		return (
			<div style={manager}>
				{data.map( (productData, index) => {
					return (
						<div style={product} key={index}>
			 				<Image
					      style={{gridArea: 'image', borderRadius: '4px'}}
					      cloudName='ziro'
					      width='200'
					      publicId={productData.image.publicId}
					      version={productData.image.version}
					      format='jpg'
					      secure='true'
				   		/>
				   		<div style={info('referencia')}>
				   			<span style={label}><SvgBookmark width={16} height={16} color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.referencia.name}</span>
				   			<span style={{color: 'rgba(48,62,77,0.4)'}}>{productData.referencia.data}</span>
				   		</div>
				   		<div style={info('preco')}>
				   			<span style={label}><SvgPrice width={16} height={16}color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.preco.name}</span>
				   			<span style={{color: 'rgba(48,62,77,0.4)'}}>R$ {productData.preco.data}</span>
				   		</div>
			   			<div style={info('descricao')}>
			   				<span style={label}><SvgInfo width={16} height={16} color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.descricao.name}</span>
			   				<span style={{color: 'rgba(48,62,77,0.4)'}}>{productData.descricao.data}</span>
			   			</div>
			   			<div style={info('estoque')}>
			   				<span style={label}><SvgBox width={16} height={16} color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.estoque.name}</span>	
					   		<div style={grid}>
					   			<span style={{gridArea: 'c0', justifySelf: 'start'}}></span>
					   			<span style={{gridArea: 'pp'}}><strong>PP</strong></span>
					   			<span style={{gridArea: 'p'}}><strong>P</strong></span>
					   			<span style={{gridArea: 'm'}}><strong>M</strong></span>
					   			<span style={{gridArea: 'g'}}><strong>G</strong></span>
					   			<span style={{gridArea: 'gg'}}><strong>GG</strong></span>
					   			<span style={{gridArea: 'xg'}}><strong>XG</strong></span>
					   			<span style={{gridArea: 'u'}}><strong>U</strong></span>
					   			<span style={{gridArea: 'c1', justifySelf: 'start'}}>Marinho</span>
					   			<span style={{gridArea: '1-1', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '1-2', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>1</span>
					   			<span style={{gridArea: '1-3', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>4</span>
					   			<span style={{gridArea: '1-4', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '1-5', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>1</span>
					   			<span style={{gridArea: '1-6', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>2</span>
					   			<span style={{gridArea: '1-7', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: 'c2', justifySelf: 'start'}}>Bege</span>
					   			<span style={{gridArea: '2-1', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>2</span>
					   			<span style={{gridArea: '2-2', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>3</span>
					   			<span style={{gridArea: '2-3', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>1</span>
					   			<span style={{gridArea: '2-4', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>2</span>
					   			<span style={{gridArea: '2-5', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '2-6', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '2-7', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: 'c3', justifySelf: 'start'}}>Preto</span>
					   			<span style={{gridArea: '3-1', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '3-2', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '3-3', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '3-4', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '3-5', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '3-6', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>0</span>
					   			<span style={{gridArea: '3-7', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}>4</span>
					   		</div>
			   			</div>
						</div>
					)
				})}
			</div>
		)
	}
}
