import React from 'react'
import SubmitButton from './SubmitButton'
const GuardarPlato = form => (
  //
      <div className={form.state.formStatus}>
      <p>
      Informacion a guardarse
      </p>
      <hr />
      <p className={'aligned'}>
      Plato: 
        </p>
      <strong>
      {form.state.nombre} {form.state.apellido}
      </strong>
      <br />
      <p className={'aligned'}>
      Ingredientes:
        </p>
      <ul className={form.state.ul}>
      {form.listarAlergias()}
      </ul>
      <br />
      <SubmitButton handleClick={form.handleClick}/>
      </div>
)
export default GuardarPlato
