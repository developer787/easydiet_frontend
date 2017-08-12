import React from 'react'
import head from './head'

const Body = (clientes) => {
  const report = clientes ? clientes.response.report : []
  const reportTile = (e,i)=>{
    const body = () =>(
      <tr>
      <td>A</td>
      <td>B</td>
      </tr>
    )
    return(
      <div key={i} className='default'>
      <h3>{e.nombre} {e.apellido}</h3>
      <div className='cheoTitle'><span>Almuerzos</span></div>
      <table className='cheoStyle'>
      {head('domingo', 'lunes')}
      <tbody>
      {body('domingo', 'lunes')}
      </tbody>
      </table>
      <table className='cheoStyle'>
      {head('martes', 'miercoles')}
      <tbody>
      {body('martes', 'miercoles')}
      </tbody>
      </table>
      <table className='cheoStyle'>
      {head('jueves', 'viernes')}
      <tbody>
      {body('jueves', 'viernes')}
      </tbody>
      </table>
      <table className='cheoStyle'>
      {head('sabado', 'comentarios')}
      <tbody>
      {body('sabado', 'comentarios')}
      </tbody>
      </table>
      <br />
      <div className='cheoTitle'><span>Cenas</span></div>
      <table className='cheoStyle'>
      {head('domingo', 'lunes')}
      <tbody>
      {body('domingo', 'lunes')}
      </tbody>
      </table>
      <table className='cheoStyle'>
      {head('martes', 'miercoles')}
      <tbody>
      {body('martes', 'miercoles')}
      </tbody>
      </table>
      <table className='cheoStyle'>
      {head('jueves', 'viernes')}
      <tbody>
      {body('jueves', 'viernes')}
      </tbody>
      </table>
      <table className='cheoStyle'>
      {head('sabado', 'comentarios')}
      <tbody>
      {body('sabado', 'comentarios')}
      </tbody>
      </table>
      </div> 
    )
  }

  return(
    <div>
    {report.map(reportTile)}
    </div> 
  )
}
export default Body
