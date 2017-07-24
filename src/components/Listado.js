import React, { Component } from 'react'
import './Listado.css'
const cliente = (self) => {
  const {users} = self.state.response
  console.log(users)
  const user = () => {
    if(users) {
    return users.map((customer) => 
	<tr>
	  <td>
	    <div>{customer.nombre}</div>
	  </td>
	  <td>
	    <div>{customer.apellido}</div>
	  </td>
	  <td>
	      {customer.alergias.map(a=>
	        <div>{a}</div>
	      )}
	  </td>
	</tr>)

    }
    return <span> Buscando Clientes...</span>
  }
  return (
    <div className='listado'>
<table className='listado'>
  <thead>
    <tr>
      <th>
        <span>Nombre</span>
      </th>
      <th>
        <span>Apellido</span>
      </th>
      <th>
        <span>Alergias</span>
      </th>
    </tr>
  </thead>
  <tbody>
    {user()} 
  </tbody>
</table>
    </div>
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
