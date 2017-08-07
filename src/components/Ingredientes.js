import React from 'react'
import createCheckboxes from './createCheckboxes'
const Ingredientes = (form) => (
  //
      <div className={form.state.formStatus}>
      <p className='aligned'>
      Seleccione todos los ingredientes que contiene la receta de este plato.
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
export default Ingredientes
