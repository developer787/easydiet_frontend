import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ComingSoon from './ComingSoon'
import Reportes from './Reportes'
import EditarCliente from './EditarCliente'
import Listado from './Listado'
import NewCustomerForm from './NewCustomerForm'
import NewPlatoForm from './NewPlatoForm'
import NoMatch from './NoMatch'
import PlatoListados from './PlatoListados'

const Main = () => (
  <main>
  <Switch>
  <Route exact 
  path="/" component={Home}/>
  <Route exact path="/clientes" component={ComingSoon}/>
  <Route path="/clientes/clientenuevo" component={NewCustomerForm}/>
  <Route path="/clientes/listado" component={Listado}/>
  <Route path="/clientes/editar" component={EditarCliente}/>
  <Route exact path="/platos" component={ComingSoon}/>
  <Route path="/platos/platonuevo" component={NewPlatoForm}/>
  <Route path="/platos/listado" component={PlatoListados}/>
  <Route exact path="/reportes" component={Reportes}/>
  <Route path="*" component={NoMatch}/>
  </Switch>
  </main>
)

export default Main
