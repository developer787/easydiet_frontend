import React from 'react'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'

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
    console.log('Submit!')
    event.preventDefault()
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/users'
    const {nombre, apellido, alergias } = self.state
    const payload = {nombre, apellido, alergias }
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
      self.setState({ saludo: data.body });
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
      Alergias.push(label)
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
  <div key={alergia}>
  {alergia}
  </div>
  listarAlergias = () => (
    Alergias.map(this.incluirAlergia)
  )
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>
      Nombre:
        <input 
      name="nombre"
      type="text" 
      value={this.state.nombre || ''} 
      onChange={this.handleChange} />
      </label>
      <label>
      Apellido:
        <input 
      name="apellido"
      type="text" 
      value={this.state.apellido || ''}
      onChange={this.handleChange} />
      </label>
      <br />
      <br />
      {this.createCheckboxes()}
      <SubmitButton handleClick={this.handleClick}/>
      <p>Data: {this.state.saludo}</p>
      </form>
      <p>
      Hola, {this.state.nombre} {this.state.apellido}
      </p>
      {this.listarAlergias()}
      </div>
    )
  }
}

export default NewCustomerForm
