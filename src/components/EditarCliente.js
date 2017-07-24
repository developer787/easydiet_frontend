import React from 'react'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'

class EditarCliente extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id : 0, 
      alergias: [], 
      formStatus: 'default', 
      ul: 'aligned', 
      response: {}
    }
    this.editar = this.editar.bind(this)
  }
  editar(){
    return (
      <div className='default'>Edit Mode.</div>
    ) 
  }
  render(){
    return (
      <div>
      {this.editar()}
      </div>
    )
  }
}

export default EditarCliente
