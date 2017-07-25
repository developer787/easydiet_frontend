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
    this.state = {id : id, alergias: [], formStatus: 'default', ul: 'aligned', response: {}}
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
  handleSubmit(event){
    console.log(this.state.id)
    event.preventDefault()
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/api'
    const {id, nombre, apellido, alergias } = self.state
    const payload = {id, nombre, apellido, alergias }
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
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    const index = this.state.alergias.indexOf(label.toLowerCase(),0)
    const Alergias = this.state.alergias
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
      if (index > -1) {
        Alergias.splice(index, 1)
        this.setState({alergias: Alergias})
      }
    } else {
      this.selectedCheckboxes.add(label);
      Alergias.push(label.toLowerCase())
      this.setState({alergias: Alergias})
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
    const Alergias = this.state.alergias
    return  Alergias.map(this.incluirAlergia)
  }
  render(){
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
      Nombre:
        <input 
      name="nombre"
      type="text" 
      value={this.state.nombre || ''} 
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
      <div className={this.state.formStatus}>
      <p className='aligned'>
      Seleccione todo ingriediente que no desea incluir en la dieta del cliente.
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
      Nombre Completo: 
        </p>
      <strong>
      {this.state.nombre} {this.state.apellido}
      </strong>
      <br />
      <p className={'aligned'}>
      Ingredientes no deseados:
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
