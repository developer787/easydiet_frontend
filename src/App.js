import React, { Component } from 'react'
import NewCustomerForm from './components/NewCustomerForm'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
			  <NewCustomerForm />
      </div>
    );
  }
}

export default App
