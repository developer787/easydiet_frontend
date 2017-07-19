import React from 'react'
import SubmitButton from './SubmitButton'

class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleClick(event){
    console.log('Help!')
  }
  handleChange(event){
    console.log('Change!')
    const newState = {}
    newState.name = event.target.value
    this.setState(newState)
  }
  handleSubmit(event){
    console.log('Submit!')
    event.preventDefault()
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
      <br />
      <label>
      Is going:
      <input
      name="isGoing"
      type="checkbox"
      checked={this.state.isGoing}
      onChange={this.handleInputChange} />
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
