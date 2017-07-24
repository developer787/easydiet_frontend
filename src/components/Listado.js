import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
import './Listado.css'
const cliente = (self) => {
  const {users} = self.state.response
const Table = () => 
<table className='listado'>
  <thead>
    <tr>
      <th>
        <div>Nombre</div>
      </th>
      <th>
        <div>Alergias</div>
      </th>
    </tr>
  </thead>
  <tbody>
    {user()} 
  </tbody>
</table>
  const user = () => {
    if(users) {
    return users.map((customer, i) => {
      const to = {
        pathname : '/editar/'+ customer._id,
        customer: customer}
       return	(<tr key={i}  onClick={self.handleClick}>
	  <td>
      <Link className='link' to={to}>
	    <div id={customer._id}>{customer.nombre} {customer.apellido}</div>
      </Link>
	  </td>
	  <td>
	      {customer.alergias.map((a, i)=>
	        <div key={i}>{a}</div>
	      )}
	  </td>
	</tr>)})}
    return <tr><td> Buscando Clientes...</td></tr>
  }
  return (
    <div className='container'>
    {Table()}
    </div>
  )
}
class Listado extends Component {
  constructor(props){
    super(props)
    this.state = {
      response: 'Loading...',
      selectedUser: '0'
      }
  this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    console.log(e.target.id)
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
        response: data
        });
    });
  }
  render(){
    return (
      <div className='default'>
      {cliente(this)}
      </div>
    )
  }
}
export default Listado
