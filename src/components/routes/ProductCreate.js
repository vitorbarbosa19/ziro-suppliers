import React from 'react'
import FileUploader from '../FileUploader/index'

const ProductCreate = (props) => ( <FileUploader userName={props.userName} uiState={props.uiState} changeUiState={props.changeUiState} /> )

export default ProductCreate
