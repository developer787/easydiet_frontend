import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
//const items = ['/','/clientes', '/platos', '/reportes']
//const platosLinks = ['/platos/listado', '/platos/platonuevo']

const createNav = (label, i) => {
  const headerLabels = ['Inicio', 'Clientes', 'Platos', 'Reportes']
  let exact = false
  label === '/' ? exact = true: exact = false
  return (
    <NavLink 
    exact={exact}
    activeClassName="active" 
    className={'link'} key={i} to={label}>
    <span>{headerLabels[i]}</span>
    </NavLink>
  )
}
const createSub = (label, i) => {
  const clientesLabels = ['Mostrar Todos', 'Cliente Nuevo']
  const platosLabels = ['Mostrar Todos', 'Plato Nuevo']
  let labels = []
  console.log(label)
  const clienteLabel = /clientes/
  const platosLabel = /platos/
  const clienteTest = clienteLabel.test(label)
  const platosTest = platosLabel.test(label)
  if(clienteTest){
    labels = clientesLabels
  } else if(platosTest) {
    labels = platosLabels
  }
  return (
    <NavLink 
    activeClassName="sub-active" 
    className={'link'} key={i} to={label}>
    <span>{labels[i]}</span>
    </NavLink>
  )
}
const createNavbar = () => {
  const headerLinks = ['/','/clientes', '/platos', '/reportes']
  return   headerLinks.map(createNav)
}
const createSubnav = () => {
  const url = window.location.pathname
  const clientePattern = /clientes/
  const platosPattern = /platos/
  const reportesPattern = /reportes/
  const clientPattValid = clientePattern.test(url)
  const platosPattValid = platosPattern.test(url)
  if(window.location.pathname === '/'){
    return null
  } else if(clientPattValid) {
    const clientesLinks = ['/clientes/listado', '/clientes/clientenuevo']
    const Links = clientesLinks.map(createSub)
    return <div className='subnav'>{Links}</div>
  } else if(platosPattValid){
    const platosLinks = ['/platos/listado', '/platos/platonuevo']
    const Links = platosLinks.map(createSub)
    return <div className='subnav'>{Links}</div>

  }
}
const Header = ()=>
<div>
<div className='header'>
<div className='navBar'>
{createNavbar()}
</div>
</div>
{createSubnav()}
</div>
export default Header
