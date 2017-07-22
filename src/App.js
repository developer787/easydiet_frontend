import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NewCustomerForm from './components/NewCustomerForm'
import NewPlatoForm from './components/NewPlatoForm'
import Reportes from './components/Reportes'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact 
          path="/" component={NewCustomerForm}/>
        <Route path="/platos" component={NewPlatoForm}/>
        <Route path="/reportes" component={Reportes}/>
      </div>
    );
  }
}

export default App
