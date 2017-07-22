import React from 'react'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'
import ObjectID from 'bson-objectid'
const time = Date.now()
const id = ObjectID.generate(time)

const items = [
  'Carne',
  'Pollo',
  'Pescado',
  'Camarones',
  'Cebolla',
  'Nueces'
]
const Alergias = []
class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {id, formStatus: 'default', ul: 'aligned', response: {}}
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
    const url = 'https://easydietpr-backend/api'
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
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
      const index = Alergias.indexOf(label,0)
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
  listarAlergias = () => (
    Alergias.map(this.incluirAlergia)
  )
  render(){
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
      <br />
      <br />
      <div className={this.state.formStatus}>
      <p className='aligned'>
      Seleccione todo ingriediente que no desea incluir en la dieta del cliente.
      </p>
      {this.createCheckboxes()}
      </div>
      <p>Data: {!this.state.response.id ? '...' : this.state.response.id }</p>
      <div className={this.state.formStatus}>
      <h4>
      Informacion a guardarse
      </h4>
      <span>Nombre: </span>
        <br/>
      <h5>
      {this.state.nombre} {this.state.apellido}
      </h5>
      <br />
      <span>
      Ingredientes no deseados:
      </span>
      <ul className={this.state.ul}>
      {this.listarAlergias()}
      </ul>
      <br />
      <SubmitButton handleClick={this.handleClick}/>
      </div>
      </form>
      </div>
    )
  }
}

export default NewCustomerForm
