import React from 'react'
import SubmitButton from './SubmitButton'
const GuardarInfo = (form) => (
  //
  <div className={form.state.formStatus}>
  <p>
  Informacion a guardarse
  </p>
  <hr />
  <p className={'aligned'}>
  Nombre Completo: 
    </p>
  <strong>
  {form.state.nombre} {form.state.apellido}
  </strong>
  <p className={'aligned'}>
  Dias de consumo:
    </p>
  <div className='default'>
  <h4> Almuerzos </h4>
  <div className='container'>
  <table className='listado'>
  <thead>
  <tr>
  <th>Domingo</th>
  <th>Lunes</th>
  <th>Martes</th>
  <th>Miercoles</th>
  <th>Jueves</th>
  <th>Viernes</th>
  <th>Sabado</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.domingo}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.lunes}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.martes}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.miercoles}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.jueves}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.viernes}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.almuerzos.sabado}
  </span>
  </td>
  </tr>
  </tbody>

  </table>
  </div>
  <h4> Cenas </h4>
  <div className='container'>
  <table className='listado'>
  <thead>
  <tr>
  <th>Domingo</th>
  <th>Lunes</th>
  <th>Martes</th>
  <th>Miercoles</th>
  <th>Jueves</th>
  <th>Viernes</th>
  <th>Sabado</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.domingo}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.lunes}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.martes}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.miercoles}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.jueves}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.viernes}
  </span>
  </td>
  <td>
  <span 
  className='calendar-input'>
  {form.state.cenas.sabado}
  </span>
  </td>
  </tr>
  </tbody>

  </table>
  </div>
  </div>


  <p className={'aligned'}>
  Ingredientes no deseados:
    </p>
  <ul className={form.state.ul}>
  {form.listarAlergias()}
  </ul>
  <br />
  <SubmitButton handleClick={form.handleClick}/>
  </div>
)
export default GuardarInfo
