import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NewCustomerForm from './components/NewCustomerForm'
import NewPlatoForm from './components/NewPlatoForm'
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
      </div>
    );
  }
}

export default App
