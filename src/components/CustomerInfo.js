import React from 'react'

const CustomerInfo = (form) => (
  <div className={form.state.formStatus}>
    <label>
      Nombre:
      <input 
        name="nombre"
        type="text" 
        value={form.state.nombre || ''} 
        onChange={form.handleChange} />
    </label>
    <br />
    <label>
      Apellido:
      <input 
        name="apellido"
        type="text" 
        value={form.state.apellido || ''}
        onChange={form.handleChange} />
    </label>
  </div>
)
export default CustomerInfo
