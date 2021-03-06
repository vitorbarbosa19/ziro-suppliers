import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import handleFile from './utils/handleFile'
import preventDefault from './utils/preventDefault'
import DropZone from './DropZone'

class FileUploader extends Component {
	state = {
		isDragged: false,
		uploadOk: false,
		wrongFileType: false
	}
	handleFile = handleFile(this)
	dragEnter = (event) => {
		preventDefault(event)
		this.setState({ isDragged: true })
	}
	dragLeave = (event) => {
		preventDefault(event)
		this.setState({ isDragged: false })
	}
	dragOver = (event) => {
		preventDefault(event)
	}
	onDrop = (event) => {
		preventDefault(event)
		this.uploadButton.files = event.dataTransfer.files
		this.setState({ isDragged: false })
	}
	getInput = (input) => { this.uploadButton = input }
	clickInput = () => { this.uploadButton.click() }
	render = () => (
		<DropZone
			uiState={this.props.uiState}
			isDragged={this.state.isDragged}
			wrongFileType={this.state.wrongFileType}
			uploadOk={this.state.uploadOk}
			handleFile={this.handleFile}
			dragEnter={this.dragEnter}
			dragLeave={this.dragLeave}
			dragOver={this.dragOver}
			onDrop={this.onDrop}
			getInput={this.getInput}
			clickInput={this.clickInput}
		/>
	)
}

export default withApollo(FileUploader)
