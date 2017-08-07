import React from 'react'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'
import ObjectID from 'bson-objectid'

const items = [
  'Carne',
  'Pollo',
  'Pescado',
  'Camarones',
  'Cebolla',
  'Nueces'
]
class NewCustomerForm extends React.Component {
  constructor(props) {

    const time = Date.now()
    const id = ObjectID.generate(time)
    super(props)
    this.state = {_id : id, ingredientes: [], formStatus: 'default', ul: 'aligned', response: {}}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  /**
   * Esto Handle Click  en el button de guardar
   * @param {any} event 
   * @memberOf NewCustomerForm
   */
  handleClick(event){
    console.log('Help!')
  }

  /**
   * Esto handle change del text field
   * @param {any} event 
   * @memberOf NewCustomerForm
   */
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

  /**
   * Esto Handle Submit del Guardar Button
   * @param {any} event 
   * @memberOf NewCustomerForm
   */
  handleSubmit(event){
    console.log(this.state.id)
    event.preventDefault()
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/api/crearplato'
    //const url = 'http://localhost:3000/api/crearplato'
    const {_id, nombre,ingredientes} = self.state
    const payload = {_id, nombre,ingredientes}
    const urlOpts = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
    console.log("payload :" ,payload)
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

  /**
   * Esto Handle Input Changes
   * @param {any} event  
   * @memberOf NewCustomerForm
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  /**
   * React Method 
   * @memberOf NewCustomerForm
   */
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    const index = this.state.ingredientes.indexOf(label.toLowerCase(),0)
    const Alergias = this.state.ingredientes
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
      if (index > -1) {
        Alergias.splice(index, 1)
        this.setState({ingredientes: Alergias})
      }
    } else {
      this.selectedCheckboxes.add(label);
      Alergias.push(label.toLowerCase())
      this.setState({ingredientes: Alergias})
    }
  }
  createCheckbox = label => (
    <Checkbox
    label={label}
    handleCheckboxChange={this.toggleCheckbox}
    key={label}
    />
  )
  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )
  incluirAlergia = alergia =>
  <li key={alergia}>
  {alergia}
  </li>
  listarAlergias = () => {
    const Alergias = this.state.ingredientes
    return  Alergias.map(this.incluirAlergia)
  }

  render(){
    // If Statement
    const message = this.state.response.message ? this.state.response.message : '*verificar datos antes de guardar.';

    let p = null;
    if (message.charAt(0) === '*') {
      p = <p></p>;
    } else {
      p = <p>{message}</p>;
    }

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className={this.state.formStatus}>
      <label>
      Nombre Del Plato:
        <input 
      name="nombre"
      type="text" 
      value={this.state.nombre || ''} 
      onChange={this.handleChange} />
      </label>
      </div>
      <div className={this.state.formStatus}>
      <p className='aligned'>
      Seleccione todos los ingredientes que contiene la receta de este plato.
        </p>
      <hr />
      {this.createCheckboxes()}
      </div>
      <div className={this.state.formStatus}>
      <p>
      Informacion a guardarse
      </p>
      <hr />
      <p className={'aligned'}>
      Plato: 
        </p>
      <strong>
      {this.state.nombre} {this.state.apellido}
      </strong>
      <br />
      <p className={'aligned'}>
      Ingredientes:
        </p>
      <ul className={this.state.ul}>
      {this.listarAlergias()}
      </ul>
      <br />
      {p}
      <SubmitButton handleClick={this.handleClick}/>
      </div>
      </form>
      </div>
    )
  }
}

export default NewCustomerForm
