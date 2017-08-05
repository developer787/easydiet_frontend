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
    this.crearCalendario = this.crearCalendario.bind(this)
    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createCheckboxes = this.createCheckboxes.bind(this)
    this.createCheckbox = this.createCheckbox.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.preCheckbox = this.preCheckbox.bind(this)
  }
  crearCalendario(){
    const customer = this.state.customer.customer
    return (
      <div className='default'>
      <h4> Almuerzos </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <input 
        required
        defaultValue={customer.almuerzos.domingo}
        type='number'
        name='domingo'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue={customer.almuerzos.lunes}
        name='lunes'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue={customer.almuerzos.martes}
        name='martes'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue={customer.almuerzos.miercoles}
        type='number'
        name='miercoles'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue={customer.almuerzos.jueves}
        type='number'
        name='jueves'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        type='number'
        defaultValue={customer.almuerzos.viernes}
        name='viernes'
        required
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue={customer.almuerzos.sabado}
        type='number'
        name='sabado'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      <h4> Cenas </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <input 
        required
        type='number'
        defaultValue={customer.cenas.domingo}
        onChange={this.handleCenas} 
        name='domingo'
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue={customer.cenas.lunes}
        name='lunes'
        type='number'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue={customer.cenas.martes}
        name='martes'
        type='number'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue={customer.cenas.miercoles}
        name='miercoles'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue={customer.cenas.jueves}
        type='number'
        name='jueves'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        type='number'
        name='viernes'
        defaultValue={customer.cenas.viernes}
        required
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue={customer.cenas.sabado}
        name='sabado'
        type='number'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      </div>
    )
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
      <div className='default'>
      <h4> Almuerzos </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.domingo}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.lunes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.martes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.miercoles}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.jueves}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.viernes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.sabado}
        </span>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      <h4> Cenas </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.domingo}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.lunes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.martes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.miercoles}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.jueves}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.viernes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.sabado}
        </span>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      </div>
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
        {this.crearCalendario()}
        {this.allergyBoxes()}
        {this.confirmarInfo()}
        </div>
      )
    }
}

export default EditarCliente
