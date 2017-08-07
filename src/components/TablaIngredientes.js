import React from 'react'
import createCheckboxes from './createCheckboxes'
const TablaIngredientes = (form) => (
  <div className={form.state.formStatus}>
    <p className='aligned'>
      Seleccione todo ingriediente que no desea incluir en la dieta del cliente.
    </p>
    <hr />
    <table className='listado'>
      <thead>
        <tr>
          <th>Proteina</th>
          <th>Farinaceos</th>
          <th>Hortalizas</th>
        </tr>
      </thead>
      <tbody>
    {createCheckboxes(form)}
      </tbody>
    </table>
  </div>
)
export default TablaIngredientes
