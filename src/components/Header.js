import React from 'react'
 import { NavLink } from 'react-router-dom'
import './Header.css'
const items = ['/','/clientes', '/platos', '/reportes']
const subLinks = ['/clientes/listado', '/clientes/clientenuevo']

const createNav = (label, i) => {
    let test = 'test'
    let exact = false
    switch(label){
      case '/':
        test = 'Inicio'
        exact = true
        break;
      case '/clientes':
        test = 'Clientes'
        break;
      case '/platos':
        test = 'Platos'
        break;
      default:
        test = 'Reportes'
        break;
    }
  return (
    <NavLink 
      activeClassName="active" 
      exact={exact}
      className={'link'} key={i} to={label}>
      <span>{test}</span>
    </NavLink>
  )
  }
const createSub = (label, i) => {
    const location = window.location.pathname
    if(location === '/'){
      return null

    } else {
    let test = 'test'
    switch(label){
      case '/clientes/listado':
        test = 'Ver Todos'
        break;
      default:
        test = 'Cliente Nuevo'
        break;
    }
  return (
    <NavLink activeClassName='sub-active' 
      className={'link'} key={i} to={label}>
      <span>{test}</span>
    </NavLink>
  )

    }
  }
const createNavbar = () => (
    items.map(createNav)
)
const createSubnav = () => (
    subLinks.map(createSub)
)
const Header = ()=>
  <div>
  <div className='header'>
   <div className='navBar'>
   {createNavbar()}
   </div>
  </div>
   <div className='subnav'>{createSubnav()}</div>
  </div>
export default Header
