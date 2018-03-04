import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import SvgPrice from './icons/SvgPrice'
import SvgInfo from './icons/SvgInfo'
import SvgBookmark from './icons/SvgBookmark'
import SvgBox from './icons/SvgBox'
import { manager, title, product, info, label, grid, input, stock, color, save, remove, warning } from './styles'
import { data } from './data'

export default class ProductManager extends Component {
	state = {
		inDevelopment: true
	}
	render() {
		if (!this.state.inDevelopment) {
			return (
				<div style={manager}>
					<p style={title}>Gerenciamento de produtos</p>
					{data.map( (productData, index) => {
						return (
							<div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
								<div style={product}>
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
						   			<span style={{color: 'rgba(48,62,77,0.5)'}}>{productData.referencia.data}</span>
						   		</div>
						   		<div style={info('preco')}>
						   			<span style={label}><SvgPrice width={16} height={16}color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.preco.name}</span>
						   			<input style={input} value={`R$ ${productData.preco.data}`} />
						   		</div>
					   			<div style={info('descricao')}>
					   				<span style={label}><SvgInfo width={16} height={16} color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.descricao.name}</span>
					   				<input style={input} value={productData.descricao.data} />
					   			</div>
					   			<div style={info('estoque')}>
					   				<span style={label}><SvgBox width={16} height={16} color={'rgba(48,62,77,0.80)'} />&nbsp;{productData.estoque.name}</span>	
							   		<div style={grid}>
							   			<span style={{gridArea: 'c0', justifySelf: 'start'}}><button style={color}>+ Cor</button></span>
							   			<span style={{gridArea: 'pp'}}><strong>PP</strong></span>
							   			<span style={{gridArea: 'p'}}><strong>P</strong></span>
							   			<span style={{gridArea: 'm'}}><strong>M</strong></span>
							   			<span style={{gridArea: 'g'}}><strong>G</strong></span>
							   			<span style={{gridArea: 'gg'}}><strong>GG</strong></span>
							   			<span style={{gridArea: 'xg'}}><strong>XG</strong></span>
							   			<span style={{gridArea: 'u'}}><strong>U</strong></span>
							   			<span style={{gridArea: 'c1', justifySelf: 'start'}}><input style={input} value={'Marinho'} /></span>
							   			<span style={{gridArea: '1-1'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '1-2'}}><input type='number' style={stock} value={1} /></span>
							   			<span style={{gridArea: '1-3'}}><input type='number' style={stock} value={4} /></span>
							   			<span style={{gridArea: '1-4'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '1-5'}}><input type='number' style={stock} value={1} /></span>
							   			<span style={{gridArea: '1-6'}}><input type='number' style={stock} value={2} /></span>
							   			<span style={{gridArea: '1-7'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: 'c2', justifySelf: 'start'}}><input style={input} value={'Bege'} /></span>
							   			<span style={{gridArea: '2-1'}}><input type='number' style={stock} value={2} /></span>
							   			<span style={{gridArea: '2-2'}}><input type='number' style={stock} value={3} /></span>
							   			<span style={{gridArea: '2-3'}}><input type='number' style={stock} value={1} /></span>
							   			<span style={{gridArea: '2-4'}}><input type='number' style={stock} value={2} /></span>
							   			<span style={{gridArea: '2-5'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '2-6'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '2-7'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: 'c3', justifySelf: 'start'}}><input style={input} value={'Preto'} /></span>
							   			<span style={{gridArea: '3-1'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '3-2'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '3-3'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '3-4'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '3-5'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '3-6'}}><input type='number' style={stock} value={0} /></span>
							   			<span style={{gridArea: '3-7'}}><input type='number' style={stock} value={1} /></span>
							   		</div>
					   			</div>
								</div>
								<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
									<button style={save}>Salvar alterações</button>
									<button style={remove}>Remover produto</button>
								</div>
							</div>
						)
					})}
				</div>
			)
		} else {
			return (
				<div style={warning}>
					<span style={title}>Em desenvolvimento</span>
					<span style={label}>Essa seção atualmente está em desenvolvimento. Volte em breve</span>
				</div>
			)
		}
	}
}
