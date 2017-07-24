import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NewCustomerForm from './components/NewCustomerForm'
import NewPlatoForm from './components/NewPlatoForm'
import Reportes from './components/Reportes'
import EditarCliente from './components/EditarCliente'
import Listado from './components/Listado'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact 
          path="/" component={NewCustomerForm}/>
        <Route path="/listado" component={Listado}/>
        <Route path="/platos" component={NewPlatoForm}/>
        <Route path="/reportes" component={Reportes}/>
        <Route path="/editar/:id" component={EditarCliente}/>
      </div>
    );
  }
}

export default App
