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
  return (
    <NavLink 
    activeClassName="sub-active" 
    className={'link'} key={i} to={label}>
    <span>{clientesLabels[i]}</span>
    </NavLink>
  )
}
const createNavbar = () => {
  const headerLinks = ['/','/clientes', '/platos', '/reportes']
  return   headerLinks.map(createNav)
}
const createSubnav = () => {
  if(window.location.pathname === '/'){
    return null
  } else {
    const clientesLinks = ['/clientes/listado', '/clientes/clientenuevo']
    const Links = clientesLinks.map(createSub)
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
