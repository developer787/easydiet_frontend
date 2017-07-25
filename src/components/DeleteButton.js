import React from 'react'
import './DeleteButton.css'

const SubmitButton = (props) => 
  <button className='delete-btn' onClick={props.handleClick}> Borrar Cliente </button>

export default SubmitButton
