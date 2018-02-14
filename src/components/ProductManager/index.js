import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import SvgPrice from './icons/SvgPrice'
import SvgInfo from './icons/SvgInfo'
import SvgBookmark from './icons/SvgBookmark'
import SvgMinus from './icons/SvgMinus'
import SvgPlus from './icons/SvgPlus'
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
	   			<div style={{gridArea: 'referencia', display: 'flex', alignItems: 'center'}}>
		   			<SvgBookmark
		   				width={16}
		   				height={16}
		   				color={'rgba(48,62,77,0.80)'}
		   			/>
		   			<span style={label}>&nbsp;Referência&nbsp;</span>
		   			<span style={{color: 'rgba(48,62,77,0.4)'}}>008-2491</span>
		   		</div>
		   		<div style={{gridArea: 'preco', display: 'flex', alignItems: 'center'}}>
		   			<SvgPrice
		   				width={16}
		   				height={16}
		   				color={'rgba(48,62,77,0.80)'}
		   			/>
		   			<span style={label}>&nbsp;Preço&nbsp;</span>
		   			<span style={{color: 'rgba(48,62,77,0.4)'}}>R$233.87</span>
		   		</div>
	   			<div style={{gridArea: 'descricao', display: 'flex', alignItems: 'center'}}>
		   			<SvgInfo
		   				width={16}
		   				height={16}
		   				color={'rgba(48,62,77,0.80)'}
		   			/>
	   				<span style={label}>&nbsp;Descrição&nbsp;</span>
	   				<span style={{color: 'rgba(48,62,77,0.4)'}}>Bolsa sintética pequena, fivela com dois pinos</span>
	   			</div>
	   			<div style={{gridArea: 'grid', alignSelf: 'end'}}>
			   		<div style={grid}>
			   			<span style={{gridArea: 'ti', 	fontFamily: 'Hind Vadodara', textTransform: 'uppercase', fontSize: '1.5rem', marginTop: '-27px', backgroundColor: 'white', padding: '0 10px'}}>Quantidade em estoque</span>
			   			<span style={{gridArea: 'c0', justifySelf: 'start'}}></span>
			   			<span style={{gridArea: 'pp'}}><strong>PP</strong></span>
			   			<span style={{gridArea: 'p'}}><strong>P</strong></span>
			   			<span style={{gridArea: 'm'}}><strong>M</strong></span>
			   			<span style={{gridArea: 'g'}}><strong>G</strong></span>
			   			<span style={{gridArea: 'gg'}}><strong>GG</strong></span>
			   			<span style={{gridArea: 'xg'}}><strong>XG</strong></span>
			   			<span style={{gridArea: 'u'}}><strong>U</strong></span>
			   			<span style={{gridArea: 'c1', justifySelf: 'start'}}>Marinho</span>
			   			<span style={{gridArea: '1-1', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;0&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '1-2', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;1&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '1-3', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;4&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '1-4', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;0&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '1-5', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;1&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '1-6', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;2&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '1-7', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;0&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: 'c2', justifySelf: 'start'}}>Bege</span>
			   			<span style={{gridArea: '2-1', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;2&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '2-2', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;3&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '2-3', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;1&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '2-4', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;2&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '2-5', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;0&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '2-6', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;0&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   			<span style={{gridArea: '2-7', display: 'flex', alignItems: 'center', color:'rgba(48,62,77,0.4)'}}><SvgMinus width={14} height={14} color={'rgba(48,62,77,0.8)'} />&nbsp;0&nbsp;<SvgPlus width={14} height={14} color={'rgba(48,62,77,0.8)'} /></span>
			   		</div>
		   		</div>
		   	</div>
			</div>
		)
	}
}
