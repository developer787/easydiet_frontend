import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import './Listado.css'
const cliente = (self) => {
  const {users} = self.state.response
//   const {aray} = self.state.response
const Table = () => 
<table className='listado'>
  <thead>
    <tr>
      <th>
        <div>Nombre</div>
      </th>
      <th>
        <div>Ingredientes</div>
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
        pathname : '/clientes/editar',
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
    return <tr><td> Buscando Platos...</td></tr> 
  }

  return (
    <div className='container'>
    {Table()}
    </div>

  )
}
class PlatoListados extends Component {
  constructor(props){
    super(props)
    this.state = {
      response: 'Loading...',
      selectedUser: '0',
      userr: 12
      }
  this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    console.log(e.target.id)
  }
  componentDidMount(){
    const self = this
    // const url = 'https://easydiet-backend-developer787.c9users.io/api/platos'
    const url = 'http://localhost:3000/api/platos'
    console.log('MOUNTED')
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      console.log("data: " , data.platos)
      self.setState({ 
        response: data
        });
    }).then(()=> {
    console.log("hello: "+ self.state.response)
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
export default PlatoListados
