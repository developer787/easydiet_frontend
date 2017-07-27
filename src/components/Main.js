import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Reportes from './Reportes'
import Clientes from './Clientes'
import EditarCliente from './EditarCliente'
import Listado from './Listado'
import NewCustomerForm from './NewCustomerForm'
import NewPlatoForm from './NewPlatoForm'
import NoMatch from './NoMatch'

const Main = () => (
  <main>
  <Switch>
  <Route exact 
  path="/" component={Home}/>
  <Route exact path="/clientes" component={Clientes}/>
  <Route path="/clientes/clientenuevo" component={NewCustomerForm}/>
  <Route path="/clientes/listado" component={Listado}/>
  <Route path="/clientes/editar" component={EditarCliente}/>
  <Route exact path="/platos" component={NewPlatoForm}/>
  <Route exact path="/reportes" component={Reportes}/>
  <Route path="*" component={NoMatch}/>
  </Switch>
  </main>
)

export default Main
