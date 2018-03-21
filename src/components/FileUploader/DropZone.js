import React from 'react'
import { Image } from 'cloudinary-react'
import DropPopup from './DropPopup'
import Button from '../basic/Button/index'
import SvgAlert from './icons/SvgAlert'
import SvgSpinner from './icons/SvgSpinner'
import { dropZone, title, input, success, error } from './styles'

const DropZone = (props) => (
	props.uiState === 'uploading_products'
	?
		<SvgSpinner width={'60'} height={'60'} />
	:
		<div style={dropZone} onDragEnter={props.dragEnter} onDragOver={props.dragOver}>
			<p style={title}>Cadastro de produtos</p>
			<Image
	      cloudName='ziro'
	      width={window.innerWidth > 500 ? '120' : '90'}
	      publicId='upload_s0ku2z'
	      version='1518371844'
	      format='png'
	      secure='true'
	 		/>
			<p>Arraste aqui um arquivo .CSV e/ou imagens</p>
			<input
				multiple={true}
				style={input}
				type='file'
				onChange={props.handleFile}
				ref={props.getInput}
			/>
			<Button onClick={props.clickInput} text='Procurar arquivo' />
			{ props.uploadOk &&
					<span style={success}>
						<Image
				      cloudName='ziro'
				      width={window.innerWidth > 500 ? '20' : '18'}
				      publicId='ok-icon_bskbxm'
				      version='1508212647'
				      format='png'
				      secure='true'
			   		/>
						&nbsp;Upload realizado com sucesso!
					</span>
			}
			{ props.uiState === 'uploading_products_error' &&
					<span style={error}>
						<SvgAlert width={'22'} height={'22'} />&nbsp;Erro no upload. Tente mais tarde.
					</span>
			}
			{ props.wrongFileType &&
					<span style={error}>
						<SvgAlert width={'22'} height={'22'} />&nbsp;Verifique a extensão do arquivo.
					</span>
			}
			<DropPopup
				isDragged={props.isDragged}
				dragLeave={props.dragLeave}
				dragOver={props.dragOver}
				onDrop={props.onDrop}
			/>
		</div>
)

export default DropZone
