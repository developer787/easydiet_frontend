import React from 'react'
import './NewCustomerForm.css'
import CustomerInfo from './CustomerInfo'
import CrearCalendario from './CrearCalendario'
import TablaIngredientes from './TablaIngredientes'
import GuardarInfo from './GuardarInfo'
import ObjectID from 'bson-objectid'

class NewCustomerForm extends React.Component {
  constructor(props) {

    const time = Date.now()
    const id = ObjectID.generate(time)
    super(props)
    this.state = {
      id : id, 
      alergias: [], 
      formStatus: 'default', 
      ul: 'aligned', 
      almuerzos: {},
      cenas: {},
      response: {}}
    this.handleClick = this.handleClick.bind(this)
    this.handleAlmuerzos = this.handleAlmuerzos.bind(this)
    this.handleCenas = this.handleCenas.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleAlmuerzos(event){
    console.log('calendar')
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        almuerzos:{
          ...this.state.almuerzos,
        [name]: value
      }})
      console.log(this.state.almuerzos)
  }
  handleCenas(event){
    console.log('calendar')
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        cenas:{
          ...this.state.cenas,
        [name]: value
      }})
      console.log(this.state.cenas)
  }
  handleClick(event){
    console.log('Help!')
    console.log(this.state)
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
    const {id, almuerzos, nombre, cenas, apellido, alergias } = self.state
    const payload = {id, almuerzos, cenas, nombre, apellido, alergias }
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
  incluirAlergia = alergia =>
  <li key={alergia}>
  {alergia}
  </li>
  listarAlergias = () => {
    const Alergias = this.state.alergias
    return  Alergias.map(this.incluirAlergia)
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      {CustomerInfo(this)}
      {CrearCalendario(this)}
      {TablaIngredientes(this)}
      {GuardarInfo(this)}
      </form>
      </div>
    )
  }
}

export default NewCustomerForm
