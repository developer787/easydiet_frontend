import React from 'react'
 import { Link } from 'react-router-dom'
import './Header.css'
const items = ['/', '/platos', '/reportes']

const createNav = (label, i) => {
    let test = 'test'
    switch(label){
      case '/':
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
    <Link key={i} to={label}>
      <span className={'link'} >{test}</span>
    </Link>
  )
  }
const createNavbar = () => (
    items.map(createNav)
)
const Header = ()=>
  <div className='header'>
   <strong>Easy Diet PR Meal Generator</strong>
   <br />
   {createNavbar()}
  </div>
export default Header
