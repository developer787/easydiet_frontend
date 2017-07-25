import React from 'react'
import './EditarCliente.css'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'

class EditarCliente extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: this.props.location,
      formStatus: 'default', 
      response: {}
    }
    this.editar = this.editar.bind(this)
    this.customerInfo = this.customerInfo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createCheckboxes = this.createCheckboxes.bind(this)
    this.createCheckbox = this.createCheckbox.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.preCheckbox = this.preCheckbox.bind(this)
  }
  componentWillMount = () => {
    const { customer } = this.props.location
    this.setState(customer)
    this.selectedCheckboxes = new Set();
  }
  componentDidMount(){
    //    const { _id, nombre, apellido, alergias } = this.props.location
    //    this.setState({
    //      _id, nombre, apellido, alergias
    //    })
    console.log(this.state.customer)
  }
  handleChange(event){
    console.log('Change!')
    if(event.target.name === 'nombre'){
      console.log(1)
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
    } else {
      console.log(2)
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
    }

  }
  customerInfo(){
    const {nombre, apellido, date} = this.state
    const fecha = new Date(date)
    console.log(nombre, apellido)
    return (
      <div>
      <div className='blue'>miembro desde: {fecha.toLocaleDateString('en-US')}</div>
      <hr />
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
      value={apellido || ''}
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
  toggleCheckbox(label){
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
  preCheckbox(label){
    const { customer } = this.state.customer
    const x = label.toLowerCase()
    let result = customer.alergias.indexOf(x, 0)
    if(result >= 0){
       return true 
    } else {
      return false
    }
  }
  createCheckbox(label){
    return <Checkbox
    label={label}
    preCheck={this.preCheckbox(label)}
    handleCheckboxChange={this.toggleCheckbox }
    key={label}
    />
  }
  createCheckboxes(){
    const items = [
      'Carne',
      'Pollo',
      'Pescado',
      'Camarones',
      'Cebolla',
      'Nueces'
    ]

    const checkboxes = items.map(this.createCheckbox)
    return checkboxes
  }
  allergyBoxes(){
    return (
      <div className={this.state.formStatus}>
      <p className='aligned'>
      Seleccione todo ingriediente que no desea incluir en la dieta del cliente.
        </p>
      <hr />
      {this.createCheckboxes()}
      </div>
    ) 
  }
  render(){
    return (
      <div>
      {this.editar()}
      {this.allergyBoxes()}
      </div>
    )
  }
}

export default EditarCliente
