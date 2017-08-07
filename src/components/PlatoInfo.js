import React from 'react'
const PlatoInfo = (form) => (
  //
      <div className={form.state.formStatus}>
      <label>
      Nombre Del Plato:
        <input 
      name="nombre"
      type="text" 
      value={form.state.nombre || ''} 
      onChange={form.handleChange} />
      </label>
      </div>
)
export default PlatoInfo
