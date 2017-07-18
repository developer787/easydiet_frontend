import React from 'react'
import SubmitButton from './SubmitButton'

class NewCustomerForm extends React.Component {
	constructor(props) {
		super(props)
		const {name} = props
		this.state = {}
		this.name = name
		this.handleClick = this.handleClick.bind(this)
	
	}
	handleClick(event){
		console.log(this)
	}
	render(){
		return (
				<div>
					<p>
						My name is {this.state.name}
					</p>
					<SubmitButton handleClick={this.handleClick}/>
				</div>
				)
	}
}

export default NewCustomerForm
