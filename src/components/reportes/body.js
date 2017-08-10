import React from 'react'

const nombre = (nombre) => (
    <tr>
      <td>{nombre}</td>
    </tr>
)
const almuerzos = (platos) => (
    <tr>
      <td>{'Almuerzos'}</td>
      <td>{platos.dom || '0'}</td>
      <td>{platos.lun || '0'}</td>
      <td>{platos.mar || '0'}</td>
      <td>{platos.mie || '0'}</td>
      <td>{platos.jue || '0'}</td>
      <td>{platos.vie || '0'}</td>
      <td>{platos.sab || '0'}</td>
    </tr>
)
const cenas = (platos) => (
    <tr>
      <td>{'Cenas'}</td>
      <td>{platos.dom || '0'}</td>
      <td>{platos.lun || '0'}</td>
      <td>{platos.mar || '0'}</td>
      <td>{platos.mie || '0'}</td>
      <td>{platos.jue || '0'}</td>
      <td>{platos.vie || '0'}</td>
      <td>{platos.sab || '0'}</td>
    </tr>
)
const body = (clientes) => {
  console.log(clientes)
  return(
    <tbody>
    {nombre('test')}
    {almuerzos('test')}
    {cenas('test')}
    </tbody>
  )
}
export default body
