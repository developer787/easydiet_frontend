import React from 'react'
import './Header.css'
const items = ['Cliente Nuevo | ', 'Platos | ', 'Reportes']

const createNav = label => (
    <span key={label}>
    {label}
    </span> 
  )
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
