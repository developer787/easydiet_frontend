import React from 'react'
import SubmitButton from './SubmitButton'

class NewCustomerForm extends React.Component {
	constructor(props) {
		super(props)
			this.state = {}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleClick(event){
		console.log('Help!')
	}
	handleChange(event){
		console.log('Change!')
	}
	handleSubmit(event){
		console.log('Submit!')
		event.preventDefault()
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input 
						  type="text" 
							value={this.state.value} 
							onChange={this.handleChange} />
						</label>
						<SubmitButton handleClick={this.handleClick}/>
					</form>
					<p>
						My name is {this.state.name}
					</p>
				</div>
				)
	}
}

export default NewCustomerForm
