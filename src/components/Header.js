import React from 'react'
 import { NavLink } from 'react-router-dom'
import './Header.css'
const items = ['/','/listado', '/platos', '/reportes']
const subLinks = ['/listado', '/clientenuevo']

const createNav = (label, i) => {
    let test = 'test'
    let exact = false
    switch(label){
      case '/':
        test = 'Inicio'
        exact = true
        break;
      case '/listado':
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
    let test = 'test'
    switch(label){
      case '/listado':
        test = 'Ver Todos'
        break;
      default:
        test = 'Cliente Nuevo'
        break;
    }
  return (
    <NavLink className={'link'} key={i} to={label}>
      <span style={{ 
        marginLeft: '10px',
        marginRight: '10px'}} className={'link'} >{test}</span>
    </NavLink>
  )
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
