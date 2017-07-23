import React, { Component } from 'react'
import './Listado.css'
const cliente = (self) => {
  const {users} = self.state.response
  console.log(users)
  const user = () => {
    if(users) {
    return users.map((customer) => <tr><td><span>{customer.nombre}</span></td></tr>)

    }
    return <span> Buscando Clientes...</span>
  }
  return (
<table>
  <thead>
    <tr>
      <td>
        <span>Nombre</span>
      </td>
    </tr>
  </thead>
  <tbody>
    {user()} 
  </tbody>
</table>
  )
}
class Listado extends Component {
  constructor(props){
    super(props)
    this.state = {
      response: 'Loading...',
      formStatus: 'default'}

  }
  componentDidMount(){
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/api'
    console.log('MOUNTED')
    fetch(url)
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
  render(){
    return (
      <div className={this.state.formStatus}>
      {cliente(this)}
      </div>
    )
  }
}
export default Listado
