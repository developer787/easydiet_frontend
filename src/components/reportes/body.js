import React from 'react'
import head from './head'

const body = (clientes) => {
  console.log(clientes)
  const report = clientes ? clientes.response.report : []
  const reportTile = (e,i)=>{
    const almDom = (cantidad)=>{
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
    return(
      <div key={i} className='default'>
      <h3>{e.nombre} {e.apellido}</h3>
      <div><span>Almuerzos</span></div>
      <table className='cheoStyle'>
      {head()}
      <tbody>
      <tr><td>{almDom(e.almuerzos.domingo)}</td></tr>
      </tbody>
      </table>
      <div><span>Cenas</span></div>
      <table className='cheoStyle'>
      {head()}
      <tbody>
      <tr><td>A</td></tr>
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
export default body
