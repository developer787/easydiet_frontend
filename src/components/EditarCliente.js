import React from 'react'
import './EditarCliente.css'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import DeleteButton from './DeleteButton'
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
    this.handleClick = this.handleClick.bind(this)
    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createCheckboxes = this.createCheckboxes.bind(this)
    this.createCheckbox = this.createCheckbox.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.preCheckbox = this.preCheckbox.bind(this)
  }
  deleteCustomer(){
    const self = this
    const {_id } = self.state
    const payload = {_id }
    console.log('Deleted')
    const url = 'https://easydiet-backend-developer787.c9users.io/api/delete'
    const urlOpts = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
    fetch(url, urlOpts)
    .then(response => response.json())
    .then(function(data) {
      self.setState({ 
        response: data,
        formStatus: 'saved'});
    })
  }
  handleClick(event){
    console.log('Help!')
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/api/update'
    const {_id, nombre, apellido, alergias } = self.state
    const payload = {_id, nombre, apellido, alergias }
    console.log(payload)
    const urlOpts = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
    console.log(payload)
    fetch(url, urlOpts)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      self.setState({ 
        response: data,
        formStatus: 'saved'});
    });
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
    const { customer } = this.state.customer
    const index = customer.alergias.indexOf(label.toLowerCase(),0)
    const Alergias = customer.alergias
    console.log(Alergias, index)
    console.log(this.selectedCheckboxes)
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
      if (index > -1) {
        Alergias.splice(index, 1)
        customer.alergias = Alergias
        console.log(customer)
        this.setState({customer: {customer}})
      }
    } else {
      this.selectedCheckboxes.add(label);
      Alergias.push(label.toLowerCase())
      customer.alergias = Alergias
      console.log(customer)
      this.setState({customer: {customer}})
    }
  }
  preCheckbox(label){
    const { customer } = this.state.customer
    const x = label.toLowerCase()
    let result = customer.alergias.indexOf(x, 0)
    if(result >= 0){
      this.selectedCheckboxes.add(label);
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
  incluirAlergia = (alergia, i) =>
  <li key={i}>
  {alergia}
  </li>
  listarAlergias(){
    const { customer } = this.state.customer
    return  customer.alergias.map(this.incluirAlergia)
  }
  confirmarInfo(){
    const message = this.state.response.message ? this.state.response.message : '*verificar datos antes de guardar.';

    let p = null;
    if (message.charAt(0) === '*') {
      p = <p>{message}</p>;
    } else {
      p = <p>{message}</p>;
    }
    return (
      <div className={this.state.formStatus}>
      <p>
      Informacion a guardarse
      </p>
      <hr />
      <p className={'aligned'}>
      Nombre Completo: 
        </p>
      <strong>
      {this.state.nombre} {this.state.apellido}
      </strong>
      <br />
      <p className={'aligned'}>
      Ingredientes no deseados:
        </p>
      <ul className={'aligned'}>
      {this.listarAlergias()}
      </ul>
      <br />
      {p}
      <DeleteButton handleClick={this.deleteCustomer}/>
      <SubmitButton handleClick={this.handleClick}/>
      </div>
    )}


    render(){
      return (
        <div>
        {this.editar()}
        {this.allergyBoxes()}
        {this.confirmarInfo()}
        </div>
      )
    }
}

export default EditarCliente
