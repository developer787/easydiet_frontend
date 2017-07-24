import React from 'react'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'

class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id : 0, 
      alergias: [], 
      formStatus: 'default', 
      ul: 'aligned', 
      response: {}
    }
  }
  render(){
    return (
      <div>
      Test
      </div>
    )
  }
}

export default NewCustomerForm
