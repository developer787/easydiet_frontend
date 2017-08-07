import React from 'react'
const CrearCalendario = (form) => (
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
        <input 
        required
        defaultValue='0'
        type='number'
        name='domingo'
        className='calendar-input'
        onChange={form.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        name='lunes'
        className='calendar-input'
        onChange={form.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        name='martes'
        className='calendar-input'
        onChange={form.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='miercoles'
        className='calendar-input'
        onChange={form.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='jueves'
        className='calendar-input'
        onChange={form.handleAlmuerzos} />
      </td>
      <td>
        <input 
        type='number'
        name='viernes'
        defaultValue='0'
        required
        className='calendar-input'
        onChange={form.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        name='sabado'
        className='calendar-input'
        defaultValue='0'
        onChange={form.handleAlmuerzos} />
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
        <input 
        required
        type='number'
        defaultValue='0'
        onChange={form.handleCenas} 
        name='domingo'
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        name='lunes'
        type='number'
        onChange={form.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        name='martes'
        type='number'
        onChange={form.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        name='miercoles'
        onChange={form.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='jueves'
        onChange={form.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        type='number'
        name='viernes'
        defaultValue='0'
        required
        onChange={form.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        name='sabado'
        type='number'
        onChange={form.handleCenas} 
        className='calendar-input'/>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      </div>
)
export default CrearCalendario
