import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const items = ['/', '/platos', '/reportes']

const createNav = (label, i) => {
    const test = 'test'
  return (
    <Link key={i} to={label}>
      {test}
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
