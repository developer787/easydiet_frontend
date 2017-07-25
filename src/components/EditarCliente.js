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
    this.customerInfo = this.customerInfo.bind(this)
  }
  componentWillMount(){
    const { _id, nombre, apellido, alergias } = this.props.location
    this.setState({
      _id, nombre, apellido, alergias
    })
  }
  customerInfo(){
    const {nombre, apellido} = this.state
    console.log(nombre, apellido)
    return (
      <div>
      <label>
      Nombre:
        <input 
      name="nombre"
      type="text" 
      value={nombre || ''} 
      onChange={this.handleChange} />
      </label>
      <br />
      <label>
      Apellido:
        <input 
      name="apellido"
      type="text" 
      value={this.state.apellido || ''}
      onChange={this.handleChange} />
      </label>
      </div>
    )
  }

  editar(){
    return (
      <div className='default'>
	{this.customerInfo()}
      </div>
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
