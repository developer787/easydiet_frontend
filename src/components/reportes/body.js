import React from 'react'
import head from './head'

const Body = (clientes) => {
  const report = clientes ? clientes.response.report : []
  const reportTile = (e,i)=>{
    const getAlmuerzos = (dia)=>{
      const cantidad = e.almuerzos[dia]
      console.log(cantidad)
      const escogerPlato = ()=>{
        const getRand = (min, max) => {
          min = Math.ceil(min)
          max = Math.floor(max)
          return Math.floor(Math.random() * (max - min)) + min
        }
        const platos = []
        while(platos.length < cantidad){
          const x = getRand(0, e.platos.length)
          const randPlato = e.platos[x]
          console.log(x, e.platos.length)
          if(e.platosDenegados.indexOf(randPlato.nombre, 0) > -1 || platos.indexOf(randPlato.nombre, 0) > -1){
            const index = e.platosDenegados.indexOf(randPlato.nombre, 0)
            platos.splice(index, 1)
            console.log('cant push plate')

          }else {
            platos.push(randPlato.nombre)

          }

        }
        console.log(platos, platos.length)
        return platos.map((e,i)=><div key={e}>{++i}: {e}</div>)
      }
      return(
        <div> {escogerPlato()} </div>
      )
    }
    const dias = [
      'domingo','lunes','martes','miercoles',
      'jueves', 'viernes', 'sabado'
    ]
    const crearAlmuerzos = (e,i)=>{
      let almuerzos = getAlmuerzos(e)
      return <td key={e}>{almuerzos}</td>
    }
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
