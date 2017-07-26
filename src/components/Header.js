import React from 'react'
 import { Link } from 'react-router-dom'
import './Header.css'
const items = ['/','/listado', '/platos', '/reportes']
const subLinks = ['/listado', '/clientenuevo']

const createNav = (label, i) => {
    let test = 'test'
    switch(label){
      case '/':
        test = 'Inicio'
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
    <Link className={'link'} key={i} to={label}>
      <span className={'link'} >{test}</span>
    </Link>
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
    <Link className={'link'} key={i} to={label}>
      <span style={{ 
        marginLeft: '10px',
        marginRight: '10px'}} className={'link'} >{test}</span>
    </Link>
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
   <strong>Easy Diet PR Meal Generator</strong>
   <br />
   <hr />
   <div className='navBar'>
   {createNavbar()}
   </div>
  </div>
   <div className='subnav'>{createSubnav()}</div>
  </div>
export default Header
